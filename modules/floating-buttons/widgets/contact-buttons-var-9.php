<?php

namespace ElementorPro\Modules\FloatingButtons\Widgets;

use Elementor\Core\Base\Providers\Social_Network_Provider;
use ElementorPro\Modules\FloatingButtons\Base\Widget_Contact_Button_Base_Pro;
use ElementorPro\Modules\FloatingButtons\Classes\Render\Contact_Buttons_Var_9_Render;


if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Contact_Buttons_Var_9 extends Widget_Contact_Button_Base_Pro {

	public static function get_configuration() {
		$config = parent::get_configuration();
		$config['content']['chat_button_section']['has_notification_dot'] = false;
		$config['content']['chat_button_section']['has_display_text'] = true;
		$config['content']['chat_button_section']['display_text_label'] = esc_html__( 'Get in touch', 'elementor-pro' );
		$config['content']['chat_button_section']['has_display_text_select'] = false;
		$config['content']['chat_button_section']['platform']['group'] = [
			Social_Network_Provider::EMAIL,
			Social_Network_Provider::TELEPHONE,
			Social_Network_Provider::SMS,
			Social_Network_Provider::WHATSAPP,
			Social_Network_Provider::SKYPE,
			Social_Network_Provider::MESSENGER,
			Social_Network_Provider::VIBER,
			Social_Network_Provider::WAZE,
			Social_Network_Provider::URL,
		];
		$config['style']['chat_button_section']['has_box_shadow'] = false;
		$config['style']['chat_button_section']['has_drop_shadow'] = true;
		$config['style']['chat_button_section']['has_padding'] = true;
		$config['style']['chat_button_section']['has_tabs'] = false;
		$config['style']['chat_button_section']['has_platform_color_controls'] = true;
		$config['style']['chat_button_section']['has_entrance_animation'] = false;
		$config['style']['chat_button_section']['hover_animation_type'] = 'custom';
		$config['style']['chat_button_section']['icon_color_label'] = esc_html__( 'Text and Icon Color', 'elementor-pro' );
		$config['style']['chat_button_section']['has_typography'] = true;
		$config['style']['chat_button_section']['button_size_default'] = 'medium';
		$config['style']['send_button_section']['has_typography'] = false;

		return $config;
	}

	public function get_name(): string {
		return 'contact-buttons-var-9';
	}

	public function get_title(): string {
		return esc_html__( 'Animated Classic', 'elementor-pro' );
	}

	protected function add_content_tab(): void {
		$this->add_chat_button_section();
	}

	protected function add_style_tab(): void {
		$this->add_style_chat_button_section();
	}

	public function render(): void {
		$render_strategy = new Contact_Buttons_Var_9_Render( $this );

		$render_strategy->render();
	}

}
