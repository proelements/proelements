<?php
namespace ElementorPro\Modules\Slides\Controls;

use Elementor\Control_Hover_Animation;

class Control_Slides_Animation extends Control_Hover_Animation {

	const TYPE = 'animation_slides_content';

	public function get_type(): string {
		return static::TYPE;
	}

	public static function get_animations(): array {
		return [
			'fadeInDown' => esc_html__( 'Down', 'elementor-pro' ),
			'fadeInUp' => esc_html__( 'Up', 'elementor-pro' ),
			'fadeInRight' => esc_html__( 'Right', 'elementor-pro' ),
			'fadeInLeft' => esc_html__( 'Left', 'elementor-pro' ),
			'zoomIn' => esc_html__( 'Zoom', 'elementor-pro' ),
		];
	}
}
