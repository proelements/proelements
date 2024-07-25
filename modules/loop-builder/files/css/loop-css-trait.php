<?php
namespace ElementorPro\Modules\LoopBuilder\Files\Css;

use Elementor\Core\Files\CSS\Base;
use Elementor\Icons_Manager;
use ElementorPro\Plugin;
use ElementorPro\Modules\LoopBuilder\Files\Css\Loop_Dynamic_CSS;

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

	public function print_all_css( int $post_id ) {
		// Avoid re-print CSS
		if ( isset( self::$printed_with_css[ $this->get_file_handle_id() ] ) ) {
			return;
		}

		$template_custom_css = $post_id > 0 ? $this->get_custom_css( $post_id ) : '';

		echo '<style id="' . $this->get_file_handle_id() . '">' . esc_html( $template_custom_css ) . $this->get_content() . '</style>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		if ( Plugin::elementor()->editor->is_edit_mode() && method_exists( Plugin::elementor()->frontend, 'get_list_of_google_fonts_by_type' ) ) {
			$this->enqueue_and_print_font_links();
		}

		// Avoid re-print CSS
		self::$printed_with_css[ $this->get_file_handle_id() ] = true;
	}

	private function get_custom_css( $post_id ) {
		$loop_doc = Plugin::elementor()->documents->get( $post_id );
		return $loop_doc->get_settings( 'custom_css' );
	}

	public function print_css() {
		$this->print_all_css( 0 );
	}

	public function print_dynamic_css( $post_id, $post_id_for_data ) {
		$document = Plugin::elementor()->documents->get_doc_for_frontend( $post_id_for_data );

		if ( ! $document ) {
			return;
		}

		Plugin::elementor()->documents->switch_to_document( $document );

		$css_file = Loop_Dynamic_CSS::create( $post_id, $post_id_for_data );
		$post_css = $css_file->get_content();

		if ( empty( $post_css ) ) {
			return;
		}

		$css = '';
		$css = str_replace( '.elementor-' . $post_id, '.e-loop-item-' . $post_id, $post_css );
		$css = sprintf( '<style id="%s">%s</style>', 'loop-dynamic-' . $post_id_for_data, $css );

		echo $css; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped

		Plugin::elementor()->documents->restore_document();
	}
}
