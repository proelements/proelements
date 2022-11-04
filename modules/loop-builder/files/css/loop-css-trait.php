<?php
namespace ElementorPro\Modules\LoopBuilder\Files\Css;

use Elementor\Core\Files\CSS\Base;
use Elementor\Icons_Manager;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

trait Loop_Css_Trait {

	/**
	 * Printed With CSS.
	 *
	 * Holds the list of printed files when `$with_css` is true.
	 *
	 * @access protected
	 *
	 * @var array
	 */
	private static $printed_with_css = [];

	/**
	 * Use external file.
	 *
	 * Whether to use external CSS file of not. Overwrites a parent method. In the Editor, internal embedding needs
	 * to be disabled, because it causes the Loop Document (Template) CSS to be printed inline before each loop item.
	 *
	 * @access protected
	 *
	 * @return bool True if using an external file is needed, false if not.
	 */
	protected function use_external_file() {
		if ( Plugin::elementor()->editor->is_edit_mode() ) {
			return true;
		}

		return 'internal' !== get_option( 'elementor_css_print_method' );
	}

	/**
	 * @param array $fonts
	 * @return void
	 */
	private function enqueue_fonts( array $fonts ) {
		foreach ( $fonts as $font ) {
			Plugin::elementor()->frontend->enqueue_font( $font );
		}
	}

	/**
	 * @param $icon_fonts
	 * @return void
	 */
	private function enqueue_icon_fonts( $icon_fonts ) {
		$icons_types = Icons_Manager::get_icon_manager_tabs();

		foreach ( $icon_fonts as $icon_font ) {
			if ( ! isset( $icons_types[ $icon_font ] ) ) {
				continue;
			}
			Plugin::elementor()->frontend->enqueue_font( $icon_font );
		}
	}

	private function enqueue_font_links() {
		$meta = $this->get_meta();

		if ( Base::CSS_STATUS_EMPTY === $meta['status'] ) {
			return;
		}

		// First time after clear cache etc.
		if ( '' === $meta['status'] || $this->is_update_required() ) {
			$this->update();

			$meta = $this->get_meta();
		}

		// Handle fonts.
		if ( ! empty( $meta['fonts'] ) ) {
			$this->enqueue_fonts( $meta['fonts'] );
		}

		if ( ! empty( $meta['icons'] ) ) {
			$this->enqueue_icon_fonts( $meta['icons'] );
		}
	}

	/**
	 * @param array $early_access_google_fonts
	 * @return void
	 */
	private function print_early_access_google_font_link_tags( array $early_access_google_fonts ) {
		$early_access_google_fonts_urls = Plugin::elementor()->frontend->get_early_access_google_font_urls( $early_access_google_fonts );

		foreach ( $early_access_google_fonts_urls as $font_url ) {
			echo '<link rel="stylesheet" type="text/css" href="' . esc_attr( $font_url ) . '">';
		}
	}

	private function print_fonts_links() {
		$google_fonts = Plugin::elementor()->frontend->get_list_of_google_fonts_by_type();

		if ( ! empty( $google_fonts['google'] ) ) {
			$stable_google_fonts_url = Plugin::elementor()->frontend->get_stable_google_fonts_url( $google_fonts['google'] );

			echo '<link rel="stylesheet" id="fonts-' . esc_attr( $this->get_file_handle_id() ) . '" href="' . esc_attr( $stable_google_fonts_url ) . '" />';
		}

		if ( ! empty( $google_fonts['early'] ) ) {
			$this->print_early_access_google_font_link_tags( $google_fonts['early'] );
		}
	}

	public function enqueue_and_print_font_links() {
		$this->enqueue_font_links();

		$this->print_fonts_links();
	}

	public function print_css() {
		// Avoid re-print CSS
		if ( isset( self::$printed_with_css[ $this->get_file_handle_id() ] ) ) {
			return;
		}

		echo '<style id="' . $this->get_file_handle_id() . '">' . $this->get_content() . '</style>'; // XSS ok.
		if ( Plugin::elementor()->editor->is_edit_mode() && method_exists( Plugin::elementor()->frontend, 'get_list_of_google_fonts_by_type' ) ) {
			$this->enqueue_and_print_font_links();
		}

		// Avoid re-print CSS
		self::$printed_with_css[ $this->get_file_handle_id() ] = true;
	}
}
