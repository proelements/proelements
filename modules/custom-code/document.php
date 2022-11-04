<?php
namespace ElementorPro\Modules\CustomCode;

use ElementorPro\Modules\ThemeBuilder\Documents\Theme_Document;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Document extends Theme_Document {
	private static $applied_options = [];

	public static function get_properties() {
		$properties = parent::get_properties();
		$properties['cpt'] = [ Module::CPT ];

		$properties['admin_tab_group'] = '';
		$properties['show_in_library'] = false;
		$properties['support_site_editor'] = false;

		return $properties;
	}

	public static function get_title() {
		return esc_html__( 'Custom Code', 'elementor-pro' );
	}

	public static function get_type() {
		return Module::DOCUMENT_TYPE;
	}

	public function get_name() {
		return Module::DOCUMENT_TYPE;
	}

	public function print_content() {
		$content = get_post_meta( $this->post->ID, '_elementor_' . Custom_Code_Metabox::FIELD_CODE, true ) . PHP_EOL;
		$user_has_permission = current_user_can( Module::CAPABILITY );

		$this->apply_snippet_options( get_post_meta( $this->get_id(), '_elementor_' . Custom_Code_Metabox::FILED_EXTRA_OPTIONS, true ) );

		if ( $user_has_permission ) {
			$this->print_snippet_with_elementor_comment( $content );
		} else {
			// PHPCS - the main content of custom code
			echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		}
	}

	public static function get_create_url() {
		$query_args = [
			'post_type' => Module::CPT,
		];

		return add_query_arg( $query_args, admin_url( 'post-new.php' ) );
	}

	private function print_snippet_with_elementor_comment( $content ) {
		echo implode( PHP_EOL, [
			'',
			'<!--',
			'Title: ' . esc_html( $this->post->post_title ),
			'Type: ' . Module::CPT, // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			'Author: ' . esc_html( get_the_author_meta( 'display_name', $this->post->post_author ) ),
			'Last edited: ' . esc_html( $this->post->post_modified ),
			'--- The comment is visible only for administrators ---',
			'-->',
			'',
		] );

		// PHPCS - the main content of custom code
		echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped

		echo PHP_EOL . '<!-- End of snippet -->' . PHP_EOL;
	}

	private function apply_snippet_options( $options ) {
		if ( ! is_array( $options ) || ! count( $options ) ) {
			return;
		}

		foreach ( $options as $option ) {
			if ( ! empty( self::$applied_options[ $option ] ) ) {
				continue;
			}

			switch ( $option ) {
				case Custom_Code_Metabox::INPUT_OPTION_ENSURE_JQUERY:
					wp_enqueue_script( 'jquery' );

					// Ensure jQuery will be first in order.
					if ( 'wp_footer' === current_filter() ) {
						wp_print_footer_scripts();
					}
					break;
			}

			self::$applied_options[ $option ] = true;
		}
	}
}
