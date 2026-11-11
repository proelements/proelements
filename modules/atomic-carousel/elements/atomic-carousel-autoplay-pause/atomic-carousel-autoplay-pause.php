<?php

namespace ElementorPro\Modules\AtomicCarousel\Elements\Atomic_Carousel_Autoplay_Pause;

use ElementorPro\Modules\AtomicCarousel\Carousel_I18n;
use ElementorPro\Modules\AtomicCarousel\Elements\Base\Atomic_Carousel_Autoplay_Control_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Atomic_Carousel_Autoplay_Pause extends Atomic_Carousel_Autoplay_Control_Base {
	const ELEMENT_TYPE = 'e-carousel-autoplay-pause';

	public static $widget_description = 'The Pause button of a carousel\'s autoplay controls, shown while autoplay runs. A container: put its content inside, e.g. an e-svg with the icon `fa-solid fa-pause`; without a child the button is empty and invisible. The button keeps pausing autoplay whatever it contains. Must be a direct child of e-carousel-autoplay-controls.';

	public function get_title() {
		return esc_html__( 'Pause Button', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-pause';
	}

	protected static function get_default_label(): string {
		return esc_html__( 'Pause Button', 'elementor-pro' );
	}

	public static function get_aria_label(): string {
		return Carousel_I18n::bag()['autoplay_aria_playing'];
	}

	protected static function get_icon_name(): string {
		return 'pause';
	}

	protected function get_templates(): array {
		return [
			'elementor/elements/atomic-carousel-autoplay-pause' => __DIR__ . '/atomic-carousel-autoplay-pause.html.twig',
		];
	}
}
