<?php

namespace ElementorPro\Modules\AtomicCarousel\Elements\Atomic_Carousel_Autoplay_Play;

use ElementorPro\Modules\AtomicCarousel\Carousel_I18n;
use ElementorPro\Modules\AtomicCarousel\Elements\Base\Atomic_Carousel_Autoplay_Control_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Atomic_Carousel_Autoplay_Play extends Atomic_Carousel_Autoplay_Control_Base {
	const ELEMENT_TYPE = 'e-carousel-autoplay-play';

	public static $widget_description = 'The Play button of a carousel\'s autoplay controls, shown while autoplay is paused. A container: put its content inside, e.g. an e-svg with the icon `fa-solid fa-play`; without a child the button is empty and invisible. The button keeps resuming autoplay whatever it contains. Must be a direct child of e-carousel-autoplay-controls.';

	public function get_title() {
		return esc_html__( 'Play Button', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-play';
	}

	protected static function get_default_label(): string {
		return esc_html__( 'Play Button', 'elementor-pro' );
	}

	public static function get_aria_label(): string {
		return Carousel_I18n::bag()['autoplay_aria_paused'];
	}

	protected static function get_icon_name(): string {
		return 'play';
	}

	protected function get_templates(): array {
		return [
			'elementor/elements/atomic-carousel-autoplay-play' => __DIR__ . '/atomic-carousel-autoplay-play.html.twig',
		];
	}
}
