<?php

namespace ElementorPro\Modules\AtomicCarousel\Elements\Atomic_Carousel_Arrow_Next;

use ElementorPro\Modules\AtomicCarousel\Carousel_I18n;
use ElementorPro\Modules\AtomicCarousel\Elements\Base\Atomic_Carousel_Arrow_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Atomic_Carousel_Arrow_Next extends Atomic_Carousel_Arrow_Base {
	const ELEMENT_TYPE = 'e-carousel-arrow-next';

	public static $widget_description = 'The next-slide button of a carousel. A container: drop any element inside (SVG, image, text) to become the arrow, and the button keeps handling navigation. Must be a direct child of e-carousel, never of the viewport.';

	public function get_title() {
		return esc_html__( 'Next arrow', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-chevron-right';
	}

	protected static function get_default_label(): string {
		return esc_html__( 'Next', 'elementor-pro' );
	}

	public static function get_aria_label(): string {
		return Carousel_I18n::bag()['arrow_next_aria_label'];
	}

	protected static function get_inline_edge(): string {
		return 'inline-end';
	}

	protected static function get_icon_name(): string {
		return 'chevron-right';
	}

	protected function get_templates(): array {
		return [
			'elementor/elements/atomic-carousel-arrow-next' => __DIR__ . '/atomic-carousel-arrow-next.html.twig',
		];
	}
}
