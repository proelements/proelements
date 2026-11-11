<?php

namespace ElementorPro\Modules\AtomicCarousel;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Single source of truth for carousel assistive-technology strings.
 *
 * PHP Twig (published markup) and the frontend handler (via `data-e-carousel-labels`)
 * read this bag. The editor canvas uses English Twig defaults, same as other atomic elements.
 * Strings are unescaped here; Twig `| e` and `json_encode` escape at the output boundary.
 */
class Carousel_I18n {
	public static function bag(): array {
		return [
			'carousel_name' => __( 'Carousel', 'elementor-pro' ),
			'carousel_roledescription' => _x( 'carousel', 'aria-roledescription', 'elementor-pro' ),
			'slide_roledescription' => _x( 'slide', 'aria-roledescription', 'elementor-pro' ),
			'arrow_prev_aria_label' => __( 'Previous slide', 'elementor-pro' ),
			'arrow_next_aria_label' => __( 'Next slide', 'elementor-pro' ),
			'pagination_aria_label' => __( 'Slides', 'elementor-pro' ),
			/* translators: 1: current slide number, 2: total number of slides. */
			'slide_position' => __( '%1$d of %2$d', 'elementor-pro' ),
			/* translators: %d: slide number. */
			'go_to_slide' => __( 'Go to slide %d', 'elementor-pro' ),
			'autoplay_aria_playing' => __( 'Pause carousel', 'elementor-pro' ),
			'autoplay_aria_paused' => __( 'Play carousel', 'elementor-pro' ),
		];
	}
}
