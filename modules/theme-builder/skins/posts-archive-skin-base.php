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

			$should_escape = true;

			/**
			 * Should escape 'nothing found' message.
			 *
			 * Filters the ability for escaping HTML tags on archive pages that return no
			 * result.
			 *
			 * By default Elementor removes HTML tags from the 'nothing found' message added
			 * by the user, for security reasons. This hook allows developers to change this
			 * behaviour. By setting this to `false`, Elementor will increase flexibility
			 * and allow the user to add HTML tags to the message.
			 *
			 * @param bool $should_escape Whether to escape 'nothing found' message.
			 */
			$should_escape = apply_filters( 'elementor_pro/theme_builder/archive/escape_nothing_found_message', $should_escape );

			$message = $this->parent->get_settings_for_display( 'nothing_found_message' );
			if ( $should_escape ) {
				$message = esc_html( $message );
			}

			?>
				<div class="elementor-posts-nothing-found">
					<?php
						// PHPCS - escaped before if should escape
						echo $message; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
					?>
				</div>
			<?php

			$this->render_loop_footer();

			return;
		}

		parent::render();
	}
}
