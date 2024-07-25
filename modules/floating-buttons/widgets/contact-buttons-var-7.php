<?php

namespace ElementorPro\Modules\FloatingButtons\Widgets;

use Elementor\Core\Base\Providers\Social_Network_Provider;
use Elementor\Modules\FloatingButtons\Base\Widget_Contact_Button_Base;
use ElementorPro\Modules\FloatingButtons\Classes\Render\Contact_Buttons_Var_7_Render;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Contact_Buttons_Var_7 extends Widget_Contact_Button_Base {

	public static function get_configuration() {
		$config = parent::get_configuration();
		$config['content']['chat_button_section']['has_notification_dot'] = false;
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
		$config['content']['chat_button_section']['platform']['default'] = Social_Network_Provider::TELEPHONE;
		$config['content']['chat_button_section']['defaults']['number'] = esc_html__( '+1.212.555.7979', 'elementor-pro' );
		$config['content']['chat_button_section']['has_display_text'] = true;
		$config['style']['chat_button_section']['has_entrance_animation'] = false;
		$config['style']['chat_button_section']['has_box_shadow'] = false;
		$config['style']['chat_button_section']['has_padding'] = true;
		$config['style']['chat_button_section']['has_button_size'] = false;
		$config['style']['chat_button_section']['has_typography'] = true;
		$config['style']['chat_button_section']['has_icon_position'] = true;
		$config['style']['chat_button_section']['has_icon_spacing'] = true;
		$config['advanced']['has_mobile_full_width'] = true;
		$config['style']['send_button_section']['has_typography'] = false;

		return $config;
	}

	public function get_name(): string {
		return 'contact-buttons-var-7';
	}

	public function get_title(): string {
		return esc_html__( 'Mobile Bar', 'elementor-pro' );
	}

	protected function add_content_tab(): void {
		$this->add_chat_button_section();
	}

	protected function add_style_tab(): void {
		$this->add_style_chat_button_section();
	}

	public function render(): void {
		$render_strategy = new Contact_Buttons_Var_7_Render( $this );

		$render_strategy->render();
	}

}
