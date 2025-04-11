<?php

namespace ElementorPro\Modules\FloatingButtons\Widgets;

use Elementor\Core\Base\Providers\Social_Network_Provider;
use ElementorPro\Modules\FloatingButtons\Base\Widget_Contact_Button_Base_Pro;
use ElementorPro\Modules\FloatingButtons\Classes\Render\Contact_Buttons_Var_3_Render;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Contact_Buttons_Var_3 extends Widget_Contact_Button_Base_Pro {

	public static function get_configuration() {
		$config = parent::get_configuration();
		$config['style']['has_platform_colors'] = false;
		$config['content']['chat_button_section']['section_name'] = esc_html__( 'Info Button', 'elementor-pro' );
		$config['content']['chat_button_section']['has_platform'] = false;
		$config['content']['chat_button_section']['has_notification_dot'] = false;
		$config['content']['chat_button_section']['has_active_tab'] = true;
		$config['content']['chat_button_section']['has_icon'] = true;
		$config['content']['chat_button_section']['icon_default'] = [
			'value' => 'fas fa-info',
			'library' => 'fa-solid',
		];
		$config['content']['chat_button_section']['icons_recommended'] = [
			'fa-solid' => [
				'info',
				'info-circle',
				'question',
				'question-circle',
			],
		];
		$config['content']['top_bar_section']['section_name'] = esc_html__( 'Heading', 'elementor-pro' );
		$config['content']['top_bar_section']['title']['label'] = esc_html__( 'Greeting', 'elementor-pro' );
		$config['content']['top_bar_section']['title']['placeholder'] = esc_html__( 'Enter your text here', 'elementor-pro' );
		$config['content']['top_bar_section']['title']['dynamic'] = true;
		$config['content']['top_bar_section']['title']['ai'] = true;
		$config['content']['top_bar_section']['title']['label_block'] = true;
		$config['content']['top_bar_section']['title']['default'] = esc_html__( 'Need help?', 'elementor-pro' );
		$config['content']['top_bar_section']['has_image'] = false;
		$config['content']['top_bar_section']['has_active_dot'] = false;
		$config['content']['top_bar_section']['has_subtitle'] = false;
		$config['style']['top_bar_section']['has_title_heading'] = false;
		$config['style']['top_bar_section']['has_close_button_heading'] = false;
		$config['style']['top_bar_section']['has_background'] = false;

		$config['content']['contact_section']['section_name'] = esc_html__( 'Info Links', 'elementor-pro' );
		$config['content']['contact_section']['has_cta_text'] = false;
		$config['content']['contact_section']['platform']['limit'] = null;
		$config['content']['contact_section']['repeater']['has_tooltip'] = true;
		$config['content']['contact_section']['repeater']['tooltip_default'] = esc_html__( 'Sample Link Text', 'elementor-pro' );
		$config['content']['contact_section']['repeater']['tooltip_placeholder'] = esc_html__( 'Enter your text here', 'elementor-pro' );
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
				'contact_icon_platform' => Social_Network_Provider::TELEPHONE,
			],
			[
				'contact_icon_platform' => Social_Network_Provider::MESSENGER,
			],
			[
				'contact_icon_platform' => Social_Network_Provider::URL,
			],
			[
				'contact_icon_platform' => Social_Network_Provider::WAZE,
			],
		];
		$config['content']['contact_section']['has_accessible_name'] = false;

		$config['style']['chat_box_section']['section_name'] = esc_html__( 'Box', 'elementor-pro' );
		$config['style']['chat_box_section']['has_width'] = false;
		$config['style']['chat_box_section']['has_padding'] = true;

		$config['content']['send_button_section']['section_name'] = esc_html__( 'CTA Button', 'elementor-pro' );
		$config['content']['send_button_section']['text']['default'] = esc_html__( 'Shop Now', 'elementor-pro' );
		$config['content']['send_button_section']['has_link'] = true;
		$config['style']['send_button_section']['has_platform_colors'] = false;
		$config['style']['send_button_section']['has_icon_color'] = false;
		$config['style']['send_button_section']['has_background_color'] = true;
		$config['style']['send_button_section']['has_text_color'] = true;
		$config['style']['send_button_section']['typography_selector'] = '{{WRAPPER}} .e-contact-buttons__cta-button';

		return $config;
	}

	public function get_name(): string {
		return 'contact-buttons-var-3';
	}

	public function get_title(): string {
		return esc_html__( 'Info Button Box', 'elementor-pro' );
	}

	protected function add_content_tab(): void {
		$this->add_chat_button_section();

		$this->add_top_bar_section();

		$this->add_contact_section();

		$this->add_send_button_section();
	}

	protected function add_style_tab(): void {
		$this->add_style_chat_button_section();

		$this->add_style_top_bar_section();

		$this->add_style_info_links_section();

		$this->add_style_send_button_section();

		$this->add_style_chat_box_section();
	}

	public function render(): void {
		$render_strategy = new Contact_Buttons_Var_3_Render( $this );

		$render_strategy->render();
	}
}
