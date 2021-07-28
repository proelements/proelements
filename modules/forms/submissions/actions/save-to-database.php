<?php
namespace ElementorPro\Modules\Forms\Submissions\Actions;

use ElementorPro\Plugin;
use Elementor\Core\Utils\Collection;
use ElementorPro\Modules\Forms\Widgets\Form;
use ElementorPro\Modules\Forms\Classes\Action_Base;
use ElementorPro\Modules\Forms\Submissions\Database\Query;
use ElementorPro\Modules\Forms\Submissions\Database\Repositories\Form_Snapshot_Repository;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Save_To_Database extends Action_Base {
	private $submission_id;

	private $actions_succeeded_count = 0;

	public function get_name() {
		return 'save-to-database';
	}

	public function get_label() {
		return __( 'Collect Submissions', 'elementor-pro' );
	}

	public function register_settings_section( $widget ) {
		// This action does not have extra settings.
	}

	public function on_export( $element ) {
		// This action does not have to do nothing on export.
	}

	/**
	 * @param \ElementorPro\Modules\Forms\Classes\Form_Record  $record
	 * @param \ElementorPro\Modules\Forms\Classes\Ajax_Handler $ajax_handler
	 */
	public function run( $record, $ajax_handler ) {
		$meta = $record->get_form_meta( [ 'page_url', 'page_title', 'user_agent', 'remote_ip' ] );

		$actions_count = ( new Collection( $record->get_form_settings( 'submit_actions' ) ) )
			->filter(function ( $value ) {
				return $value !== $this->get_name();
			})
			->count();

		$post_id = $record->get_form_settings( 'form_post_id' );
		$element_id = $ajax_handler->get_current_form()['id'];
		$form_name = $record->get_form_settings( 'form_name' );

		$this->submission_id = Query::get_instance()->add_submission( [
			'main_meta_id' => 0,
			'post_id' => $post_id,
			'referer' => remove_query_arg(
				[ 'preview_id', 'preview_nonce', 'preview' ],
				$meta['page_url']['value']
			),
			'referer_title' => $meta['page_title']['value'],
			'element_id' => $element_id,
			'form_name' => $form_name,
			'campaign_id' => 0,
			'user_id' => get_current_user_id(),
			'user_ip' => $meta['remote_ip']['value'],
			'user_agent' => $meta['user_agent']['value'],
			'actions_count' => $actions_count,
			'actions_succeeded_count' => 0,
			'meta' => wp_json_encode( [
				// TODO: Should be removed if there is an ability to edit "global widgets"
				'edit_post_id' => $record->get_form_settings( 'edit_post_id' ),
			] ),
		], $record->get_field( null ) );

		/** @var Form $form_instance */
		$form_instance = Plugin::elementor()->elements_manager->create_element_instance( $ajax_handler->get_current_form() );
		$fields = $record->get_form_settings( 'form_fields' );

		// When created new submission, it should also update or create
		// a form snapshot to save to new state of the form in case the form changed or will
		// be deleted later.
		Form_Snapshot_Repository::instance()
			->create_or_update( $post_id, $element_id, [
				'name' => $form_name,
				'fields' => array_map( function ( $field, $index ) use ( $form_instance ) {
					// Apply filters to demonstrate the same behavior as the render behavior. (adding select fields dynamically, etc.)
					// Ref: modules/forms/widgets/form.php:2116
					$field = apply_filters( 'elementor_pro/forms/render/item', $field, $index, $form_instance );
					$field = apply_filters( "elementor_pro/forms/render/item/{$field['field_type']}", $field, $index, $form_instance );

					$mapped_field = [
						'id' => $field['custom_id'],
						'type' => $field['field_type'],
						'label' => $field['field_label'],
					];

					if ( isset( $field['field_options'] ) ) {
						$mapped_field['options'] = explode( PHP_EOL, $field['field_options'] );
					}

					if ( isset( $field['allow_multiple'] ) ) {
						$mapped_field['is_multiple'] = 'true' === $field['allow_multiple'];
					}

					return $mapped_field;
				}, $fields, array_keys( $fields ) ),
			] );
	}

	/**
	 * It listen for all the form actions and log the result into the database.
	 *
	 * @param Action_Base     $action Should be class based on ActionBase (do not type hint to support third party plugins)
	 * @param \Exception|null $exception
	 */
	private function save_action_log( $action, \Exception $exception = null ) {
		if ( ! $this->submission_id || $action->get_name() === $this->get_name() ) {
			return;
		}

		$query = Query::get_instance();
		$error_message = null;

		if ( $exception ) {
			$error_message = $exception->getMessage();

			$status = Query::ACTIONS_LOG_STATUS_FAILED;
		} else {
			$this->actions_succeeded_count += 1;

			$query->update_submission( $this->submission_id, [
				'actions_succeeded_count' => $this->actions_succeeded_count,
			] );

			$status = Query::ACTIONS_LOG_STATUS_SUCCESS;
		}

		$query->add_action_log(
			$this->submission_id,
			$action,
			$status,
			$error_message
		);
	}

	/**
	 * Save_To_Database constructor.
	 */
	public function __construct() {
		add_action( 'elementor_pro/forms/actions/after_run', function ( Action_Base $action, \Exception $exception = null ) {
			$this->save_action_log( $action, $exception );
		}, 10, 2 );
	}
}
