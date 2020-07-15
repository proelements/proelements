<?php
namespace ElementorPro\Modules\AssetsManager\Classes;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}


class Font_Base extends Assets_Base {

	const FONTS_OPTION_NAME = 'elementor_fonts_manager_fonts';

	protected $font_preview_phrase = '';

	protected function actions() {}

	public function __construct() {
		parent::__construct();

		$this->font_preview_phrase = __( 'Elementor Is Making the Web Beautiful!!!', 'elementor-pro' );
	}

	public function get_name() {
		return '';
	}

	public function get_type() {
		return '';
	}

	public function handle_panel_request( array $data ) {
		return [];
	}

	public function get_fonts( $force = false ) {}

	public function enqueue_font( $font_family, $font_data, $post_css ) {}

	public function get_font_family_type( $post_id, $post_title ) {}

	public function get_font_data( $post_id, $post_title ) {}

	public function render_preview_column( $post_id ) {}

	public function get_font_variations_count( $post_id ) {}

	public function save_meta( $post_id, $data ) {}
}
