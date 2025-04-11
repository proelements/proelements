<?php

namespace ElementorPro\Modules\FloatingButtons\Widgets;

use ElementorPro\Modules\FloatingButtons\Base\Widget_Contact_Button_Base_Pro;
use ElementorPro\Modules\FloatingButtons\Classes\Render\Contact_Buttons_Var_1_Render;


if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Contact_Buttons_Var_1 extends Widget_Contact_Button_Base_Pro {

	public static function get_configuration() {
		$config = parent::get_configuration();
		$config['style']['has_platform_colors'] = false;
		$config['content']['chat_button_section']['has_platform'] = false;
		$config['content']['chat_button_section']['has_icon'] = true;
		$config['content']['message_bubble_section']['has_typing_animation'] = false;
		$config['style']['message_bubble_section']['has_chat_background'] = false;
		$config['style']['send_button_section']['has_typography'] = false;
		$config['content']['contact_section']['has_accessible_name'] = false;

		return $config;
	}

	public function get_name(): string {
		return 'contact-buttons-var-1';
	}

	public function get_title(): string {
		return esc_html__( 'Multi Chat', 'elementor-pro' );
	}

	protected function add_content_tab(): void {
		$this->add_chat_button_section();

		$this->add_top_bar_section();

		$this->add_message_bubble_section();

		$this->add_contact_section();
	}

	protected function add_style_tab(): void {
		$this->add_style_chat_button_section();

		$this->add_style_top_bar_section();

		$this->add_style_message_bubble_section();

		$this->add_style_contact_section();

		$this->add_style_chat_box_section();
	}

	public function render(): void {
		$render_strategy = new Contact_Buttons_Var_1_Render( $this );

		$render_strategy->render();
	}

}
