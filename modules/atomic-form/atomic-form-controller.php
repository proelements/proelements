<?php
namespace ElementorPro\Modules\AtomicForm;

use Elementor\Element_Base;
use Elementor\Modules\AtomicWidgets\DynamicTags\Dynamic_Prop_Type;
use Elementor\Modules\AtomicWidgets\Elements\Base\Atomic_Widget_Base;
use Elementor\Utils as ElementorUtils;
use ElementorPro\Modules\AtomicForm\Actions\Action_Runner;
use ElementorPro\Modules\AtomicForm\File_Upload\File_Upload_Handler;
use ElementorPro\Modules\AtomicForm\Module as Atomic_Form_Module;
use ElementorPro\Modules\AtomicWidgets\Settings_Resolver;
use ElementorPro\Modules\Forms\Classes\Ajax_Handler;
use ElementorPro\Plugin;
use Elementor\Plugin as Core_Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Atomic_Form_Controller {
	const NONCE_ACTION = 'elementor_pro_atomic_forms_send_form';

	public static function is_form_submitted(): bool {
		// phpcs:disable WordPress.Security.NonceVerification.Missing -- Nonce is validated in ajax_send_form.
		return wp_doing_ajax()
			&& 'elementor_pro_atomic_forms_send_form' === ElementorUtils::get_super_global_value( $_POST, 'action' );
		// phpcs:enable WordPress.Security.NonceVerification.Missing
	}

	public function ajax_send_form(): void {

		// phpcs:disable WordPress.Security.NonceVerification.Missing -- Nonce is validated below.
		$post_data = [
			'_nonce' => ElementorUtils::get_super_global_value( $_POST, '_nonce' ),
			'post_id' => ElementorUtils::get_super_global_value( $_POST, 'post_id' ),
			'form_id' => ElementorUtils::get_super_global_value( $_POST, 'form_id' ),
			'form_name' => ElementorUtils::get_super_global_value( $_POST, 'form_name' ),
			'form_fields' => ElementorUtils::get_super_global_value( $_POST, 'form_fields' ) ?? [],
			'referer_title' => ElementorUtils::get_super_global_value( $_POST, 'referer_title' ),
			'referrer' => ElementorUtils::get_super_global_value( $_POST, 'referrer' ),
		];
		// phpcs:enable WordPress.Security.NonceVerification.Missing

		if ( ! $this->is_nonce_valid( $post_data ) ) {
			$this->send_invalid_form_response();
		}

		$post_id = absint( $post_data['post_id'] ?? 0 );
		$form_id = sanitize_text_field( $post_data['form_id'] ?? '' );
		$form_fields = $post_data['form_fields'] ?? [];

		if ( ! $post_id || ! $form_id || empty( $form_fields ) ) {
			$this->send_invalid_form_response();
		}

		$form_data = $this->convert_form_fields_to_data( $form_fields );

		if ( empty( $form_data ) ) {
			$this->send_invalid_form_response();
		}

		$field_metadata = $this->extract_field_metadata( $form_fields );

		$form_element = $this->find_form_element( $post_id, $form_id );

		if ( is_wp_error( $form_element ) ) {
			$this->send_error_response( $form_element->get_error_message() );
		}

		$widget_settings = $this->resolve_widget_settings( $form_element, $post_id );
		$cssid_map = $this->build_cssid_map( $form_element, $post_id );

		$file_upload_result = ( new File_Upload_Handler() )->process( $form_element, $form_fields );

		if ( ! $file_upload_result->is_success() ) {
			$this->send_error_response( $file_upload_result->get_error() );
		}

		$form_data = array_merge( $form_data, $file_upload_result->get_form_data_overrides() );
		$context_files = $file_upload_result->get_files();
		$file_field_settings = $file_upload_result->get_file_field_settings();

		$posted_form_name = sanitize_text_field( $post_data['form_name'] ?? '' );
		$form_name = $this->resolve_form_name( $posted_form_name, $form_id );

		$spam_check = apply_filters(
			'elementor_pro/atomic_forms/spam_check',
			false,
			$form_fields,
			$widget_settings,
			$post_id
		);

		if ( $spam_check ) {
			$this->send_error_response(
				__( 'Your submission was flagged as spam. Please try again or contact the site administrator.', 'elementor-pro' )
			);
		}

		$actions = $widget_settings['actions-after-submit'] ?? [];

		if ( empty( $actions ) ) {
			$this->send_error_response( __( 'No actions configured for this form', 'elementor-pro' ) );
		}

		$referer_title = $post_data['referer_title'] ?? '';
		$referer_title = is_string( $referer_title ) ? sanitize_text_field( wp_unslash( $referer_title ) ) : '';

		$referrer = $post_data['referrer'] ?? '';
		$referrer = is_string( $referrer ) ? esc_url_raw( wp_unslash( $referrer ) ) : '';

		$results = Action_Runner::execute_actions(
			$actions,
			$form_data,
			$widget_settings,
			[
				'post_id' => $post_id,
				'form_id' => $form_id,
				'form_name' => $form_name,
				'field_metadata' => $field_metadata,
				'referer_title' => $referer_title,
				'referrer' => $referrer,
				'cssid_map' => $cssid_map,
				'files' => $context_files,
				'file_field_settings' => $file_field_settings,
			]
		);

		$this->send_response(
			$results['actionResults'],
			$results['allActionsSucceeded'],
			$results['failedActions']
		);
	}

	private function is_nonce_valid( array $post_data ): bool {
		$nonce = $post_data['_nonce'] ?? '';

		if ( ! $nonce ) {
			return false;
		}

		return wp_verify_nonce( $nonce, self::NONCE_ACTION );
	}

	private function convert_form_fields_to_data( array $form_fields ): array {
		$form_data = [];

		foreach ( $form_fields as $field ) {
			if ( ! is_array( $field ) ) {
				continue;
			}

			$id = sanitize_text_field( $field['id'] ?? '' );
			$value = $field['value'] ?? '';

			if ( ! $id ) {
				continue;
			}

			if ( is_array( $value ) ) {
				$form_data[ $id ] = array_map( 'sanitize_text_field', $value );
			} else {
				$type = sanitize_text_field( $field['type'] ?? 'text' );

				if ( 'textarea' === $type ) {
					$form_data[ $id ] = sanitize_textarea_field( $value );
				} else {
					$form_data[ $id ] = sanitize_text_field( $value );
				}
			}
		}

		return $form_data;
	}

	private function resolve_form_name( string $posted_form_name, string $form_id ): string {
		return ! empty( $posted_form_name ) ? $posted_form_name : $form_id;
	}

	private function extract_field_metadata( array $form_fields ): array {
		$metadata = [];

		foreach ( $form_fields as $field ) {
			if ( ! is_array( $field ) ) {
				continue;
			}

			$id = sanitize_text_field( $field['id'] ?? '' );

			if ( ! $id ) {
				continue;
			}

			$options = isset( $field['options'] ) && is_string( $field['options'] ) ? json_decode( $field['options'], true ) : null;

			$metadata[ $id ] = [
				'label' => sanitize_text_field( $field['label'] ?? '' ),
				'type' => sanitize_text_field( $field['type'] ?? '' ),
				'options' => is_array( $options ) ? $options : null,
			];
		}

		return $metadata;
	}

	private function find_form_element( int $post_id, string $form_id ) {
		$document = Plugin::elementor()->documents->get( $post_id );

		if ( ! $document ) {
			return new \WP_Error(
				'document_not_found',
				__( 'Document not found', 'elementor-pro' )
			);
		}

		$element_data = $document->get_elements_data();
		$form_element = ElementorUtils::find_element_recursive( $element_data, $form_id );

		if ( empty( $form_element ) ) {
			return new \WP_Error(
				'form_not_found',
				__( 'Form element not found', 'elementor-pro' )
			);
		}

		return $form_element;
	}

	private function resolve_element_settings( array $element, int $post_id, ?Element_Base $widget_instance ): array {
		$resolved = $this->resolve_raw_settings( $element, $post_id );

		if ( $widget_instance && method_exists( $widget_instance, 'get_atomic_settings' ) ) {
			$resolved = array_merge( $widget_instance->get_atomic_settings(), $resolved );
		}

		return $resolved;
	}

	private function resolve_widget_settings( array $form_element, int $post_id ): array {
		$widget_instance = Core_Plugin::$instance->elements_manager->create_element_instance( $form_element );
		$resolved = $this->resolve_element_settings( $form_element, $post_id, $widget_instance );

		if ( ! isset( $resolved['actions-after-submit'] ) && isset( $resolved['email'] ) ) {
			$resolved['actions-after-submit'] = [ 'email' ];
		}

		return $resolved;
	}

	private function resolve_raw_settings( array $element, int $post_id ): array {
		$settings = $element['settings'] ?? [];
		$settings = $this->resolve_dynamic_tags_in_settings( $settings, $post_id );

		return Settings_Resolver::resolve( $settings );
	}

	/**
	 * @param array|string $value
	 * @param int $post_id
	 * @return array|string|null
	 */
	private function resolve_dynamic_tags_in_settings( $value, int $post_id ) {
		if ( ! is_array( $value ) ) {
			return $value;
		}

		if ( Dynamic_Prop_Type::is_dynamic_prop_value( $value ) ) {
			if ( ! empty( $value['disabled'] ) ) {
				return null;
			}

			$tag_data = $value['value'] ?? [];
			$tag_name = $tag_data['name'] ?? '';
			$tag_settings = $tag_data['settings'] ?? [];

			if ( empty( $tag_name ) ) {
				return null;
			}

			Plugin::elementor()->db->switch_to_post( $post_id );

			try {
				return Plugin::elementor()->dynamic_tags->get_tag_data_content(
					null,
					$tag_name,
					$tag_settings
				);
			} finally {
				Plugin::elementor()->db->restore_current_post();
			}
		}

		return array_map( function ( $item ) use ( $post_id ) {
			return $this->resolve_dynamic_tags_in_settings( $item, $post_id );
		}, $value );
	}

	private function build_cssid_map( array $form_element, int $post_id ): array {
		$map = [];
		$this->collect_cssid_mappings( $form_element['elements'] ?? [], $map, $post_id );

		return $map;
	}

	private function collect_cssid_mappings( array $elements, array &$map, int $post_id ): void {
		foreach ( $elements as $element ) {
			if ( ! empty( $element['elements'] ) ) {
				$this->collect_cssid_mappings( $element['elements'], $map, $post_id );
			}

			if ( ! $this->is_atomic_form_field_element( $element ) ) {
				continue;
			}

			$element_id = $element['id'] ?? '';
			$widget_instance = Core_Plugin::$instance->elements_manager->create_element_instance( $element );
			$cssid = $this->get_field_cssid( $element, $post_id, $widget_instance );

			if ( $element_id && '' !== $cssid && ! isset( $map[ $cssid ] ) ) {
				$map[ $cssid ] = $element_id;
			}
		}
	}

	private function is_atomic_form_field_element( array $element ): bool {
		if ( 'widget' !== ( $element['elType'] ?? '' ) ) {
			return false;
		}

		$widget_type = $element['widgetType'] ?? '';

		return in_array( $widget_type, Atomic_Form_Module::get_form_field_widget_types(), true );
	}

	private function get_field_cssid( array $element, int $post_id, ?Element_Base $widget_instance ): string {
		if ( $widget_instance instanceof Atomic_Widget_Base ) {
			$cssid = $widget_instance->get_atomic_setting( '_cssid' );

			if ( is_string( $cssid ) && '' !== $cssid ) {
				return $cssid;
			}
		}

		$resolved = $this->resolve_raw_settings( $element, $post_id );
		$cssid = $resolved['_cssid'] ?? '';

		if ( ! is_string( $cssid ) || '' === $cssid ) {
			return '';
		}

		return sanitize_text_field( $cssid );
	}

	private function send_invalid_form_response(): void {
		wp_send_json_error( [
			'message' => Ajax_Handler::get_default_message( Ajax_Handler::INVALID_FORM, [] ),
		] );
	}

	private function send_error_response( string $message = '' ): void {
		wp_send_json_error( [
			'message' => '' !== $message ? $message : Ajax_Handler::get_default_message( Ajax_Handler::ERROR, [] ),
		] );
	}

	private function send_response( array $action_results, bool $all_actions_succeeded, array $failed_actions ): void {
		$response_data = [
			'actionResults' => $action_results,
			'allActionsSucceeded' => $all_actions_succeeded,
			'failedActions' => $failed_actions,
		];

		if ( $all_actions_succeeded ) {
			wp_send_json_success( [
				'message' => Ajax_Handler::get_default_message( Ajax_Handler::SUCCESS, [] ),
				'data' => $response_data,
			] );
		} else {
			$has_success = ! empty( $action_results ) && count( $failed_actions ) < count( $action_results );

			if ( $has_success ) {
				wp_send_json_success( [
					'message' => Ajax_Handler::get_default_message( Ajax_Handler::SUCCESS, [] ),
					'data' => $response_data,
				] );
			} else {
				wp_send_json_error( [
					'message' => Ajax_Handler::get_default_message( Ajax_Handler::ERROR, [] ),
					'data' => $response_data,
				] );
			}
		}
	}

	public function __construct() {
		add_action( 'wp_ajax_elementor_pro_atomic_forms_send_form', [ $this, 'ajax_send_form' ] );
		add_action( 'wp_ajax_nopriv_elementor_pro_atomic_forms_send_form', [ $this, 'ajax_send_form' ] );
	}
}
