<?php
namespace ElementorPro\Modules\ThemeBuilder\Skins;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

trait Posts_Archive_Skin_Base {

	public function render() {
		$this->parent->query_posts();

		$wp_query = $this->parent->get_query();

		if ( ! $wp_query->found_posts ) {
			$this->render_loop_header();

			$should_escape = apply_filters( 'elementor_pro/theme_builder/archive/escape_nothing_found_message', true );

			$message = $this->parent->get_settings_for_display( 'nothing_found_message' );
			if ( $should_escape ) {
				$message = esc_html( $message );
			}

			echo '<div class="elementor-posts-nothing-found">' . $message . '</div>';

			$this->render_loop_footer();

			return;
		}

		parent::render();
	}
}
