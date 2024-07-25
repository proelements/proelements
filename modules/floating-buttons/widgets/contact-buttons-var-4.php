<?php

namespace ElementorPro\Modules\FloatingButtons\Widgets;

use Elementor\Core\Base\Providers\Social_Network_Provider;
use Elementor\Modules\FloatingButtons\Base\Widget_Contact_Button_Base;
use ElementorPro\Modules\FloatingButtons\Classes\Render\Contact_Buttons_Var_4_Render;


if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Contact_Buttons_Var_4 extends Widget_Contact_Button_Base {

	public static function get_configuration() {
		$config = parent::get_configuration();
		$config['style']['has_platform_colors'] = false;
		$config['content']['chat_button_section']['section_name'] = esc_html__( 'Menu Button', 'elementor-pro' );
		$config['content']['chat_button_section']['has_platform'] = false;
		$config['content']['chat_button_section']['has_icon'] = true;
		$config['content']['chat_button_section']['icon_default'] = [
			'value' => 'fas fa-ellipsis-v',
			'library' => 'fa-solid',
		];
		$config['content']['chat_button_section']['has_notification_dot'] = false;
		$config['content']['chat_button_section']['has_active_tab'] = true;
		$config['content']['contact_section']['platform']['group-1'] = [
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
		$config['content']['contact_section']['default'] = [
			[
				'contact_icon_platform' => Social_Network_Provider::WHATSAPP,
			],
			[
				'contact_icon_platform' => Social_Network_Provider::MESSENGER,
			],
			[
				'contact_icon_platform' => Social_Network_Provider::EMAIL,
			],
			[
				'contact_icon_platform' => Social_Network_Provider::TELEPHONE,
			],
		];
		$config['content']['contact_section']['has_cta_text'] = false;
		$config['content']['contact_section']['repeater']['has_tooltip'] = true;
		$config['content']['contact_section']['repeater']['tooltip_label'] = esc_html__( 'Tooltip', 'elementor-pro' );
		$config['content']['contact_section']['platform']['limit'] = null;
		$config['style']['contact_section']['has_buttons_heading'] = false;
		$config['style']['contact_section']['has_buttons_size'] = false;
		$config['style']['contact_section']['has_box_shadow'] = true;
		$config['style']['contact_section']['has_buttons_spacing'] = true;
		$config['style']['contact_section']['has_hover_animation'] = false;
		$config['style']['contact_section']['has_chat_box_animation'] = true;
		$config['style']['send_button_section']['has_typography'] = false;

		return $config;
	}

	public function get_name(): string {
		return 'contact-buttons-var-4';
	}

	public function get_title(): string {
		return esc_html__( 'Vertical Links', 'elementor-pro' );
	}

	protected function add_content_tab(): void {
		$this->add_chat_button_section();

		$this->add_contact_section();
	}

	protected function add_style_tab(): void {
		$this->add_style_chat_button_section();

		$this->add_style_contact_section();
	}

	public function render(): void {
		$render_strategy = new Contact_Buttons_Var_4_Render( $this );

		$render_strategy->render();
	}

}
