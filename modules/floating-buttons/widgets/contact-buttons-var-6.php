<?php

namespace ElementorPro\Modules\FloatingButtons\Widgets;

use Elementor\Core\Base\Providers\Social_Network_Provider;
use Elementor\Modules\FloatingButtons\Base\Widget_Contact_Button_Base;
use ElementorPro\Modules\FloatingButtons\Classes\Render\Contact_Buttons_Var_6_Render;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Contact_Buttons_Var_6 extends Widget_Contact_Button_Base {

	public static function get_configuration() {
		$config = parent::get_configuration();
		$config['style']['has_platform_colors'] = false;
		$config['content']['contact_section']['section_name'] = esc_html__( 'Contact Buttons', 'elementor-pro' );
		$config['content']['contact_section']['has_cta_text'] = false;
		$config['content']['contact_section']['platform']['limit'] = 4;
		$config['content']['contact_section']['platform']['min_items'] = 2;
		$config['content']['contact_section']['platform']['group-1'] = [
			Social_Network_Provider::EMAIL,
			Social_Network_Provider::TELEPHONE,
			Social_Network_Provider::SMS,
			Social_Network_Provider::WHATSAPP,
			Social_Network_Provider::SKYPE,
			Social_Network_Provider::MESSENGER,
			Social_Network_Provider::VIBER,
			Social_Network_Provider::WAZE,
		];
		$config['content']['contact_section']['default'] = [
			[
				'contact_icon_platform' => Social_Network_Provider::TELEPHONE,
			],
			[
				'contact_icon_platform' => Social_Network_Provider::EMAIL,
			],
			[
				'contact_icon_platform' => Social_Network_Provider::WHATSAPP,
			],
			[
				'contact_icon_platform' => Social_Network_Provider::WAZE,
			],
		];
		$config['style']['contact_section']['has_buttons_heading'] = true;
		$config['style']['contact_section']['buttons_heading_label'] = esc_html__( 'Icons', 'elementor-pro' );
		$config['style']['contact_section']['has_icon_bg_color'] = false;
		$config['style']['contact_section']['has_button_bar'] = true;
		$config['advanced']['horizontal_position_default'] = 'center';
		$config['style']['send_button_section']['has_typography'] = false;

		return $config;
	}

	public function get_name(): string {
		return 'contact-buttons-var-6';
	}

	public function get_title(): string {
		return esc_html__( 'Quick Access Bar', 'elementor-pro' );
	}

	protected function add_content_tab(): void {
		$this->add_contact_section();
	}

	protected function add_style_tab(): void {
		$this->add_style_contact_section();
	}

	public function render(): void {
		$render_strategy = new Contact_Buttons_Var_6_Render( $this );

		$render_strategy->render();
	}

}
