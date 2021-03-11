<?php
namespace ElementorPro\Modules\CustomCode;

use ElementorPro\Modules\ThemeBuilder\Documents\Theme_Document;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Document extends Theme_Document {
	public static function get_properties() {
		$properties = parent::get_properties();
		$properties['cpt'] = [ Module::CPT ];

		$properties['admin_tab_group'] = '';
		$properties['show_in_library'] = false;
		$properties['support_site_editor'] = false;

		return $properties;
	}

	public static function get_title() {
		return __( 'Custom Code', 'elementor-pro' );
	}

	public function get_name() {
		return Module::DOCUMENT_TYPE;
	}

	public function print_content() {
		$content = get_post_meta( $this->post->ID, '_elementor_' . Custom_Code_Metabox::FIELD_CODE, true ) . PHP_EOL;
		$user_has_permission = current_user_can( Module::CAPABILITY );

		if ( $user_has_permission ) {
			$this->print_snippet_with_elementor_comment( $content );
		} else {
			echo $content;
		}
	}

	private function print_snippet_with_elementor_comment( $content ) {
		echo implode( PHP_EOL, [
			'',
			'<!--',
			'Title: ' . esc_html( $this->post->post_title ),
			'Type: ' . Module::CPT,
			'Author: ' . esc_html( get_the_author_meta( 'display_name', $this->post->post_author ) ),
			'Last edited: ' . esc_html( $this->post->post_modified ),
			'--- The comment is visible only for administrators ---',
			'-->',
			'',
		] );

		echo $content;

		echo PHP_EOL . '<!-- End of snippet -->' . PHP_EOL;
	}
}
