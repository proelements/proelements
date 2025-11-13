<?php
namespace ElementorPro\Modules\MegaMenu\Controls;

use Elementor\Control_Hover_Animation;

class Control_Menu_Dropdown_Animation extends Control_Hover_Animation {

	const TYPE = 'animation_menu_dropdown';

	public function get_type(): string {
		return static::TYPE;
	}

	public static function get_animations(): array {
		return [
			'fadeIn' => esc_html__( 'Fade in', 'elementor-pro' ),
		];
	}
}
