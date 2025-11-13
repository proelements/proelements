<?php

namespace ElementorPro\Modules\FloatingButtons\Widgets;

use Elementor\Core\Base\Providers\Social_Network_Provider;
use ElementorPro\Modules\FloatingButtons\Base\Widget_Contact_Button_Base_Pro;
use ElementorPro\Modules\FloatingButtons\Classes\Render\Contact_Buttons_Var_10_Render;


if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Contact_Buttons_Var_10 extends Widget_Contact_Button_Base_Pro {

	public static function get_configuration() {
		$config = parent::get_configuration();
		$config['content']['contact_section']['has_cta_text'] = false;
		$config['content']['contact_section']['repeater']['has_title'] = true;
		$config['content']['contact_section']['platform']['limit'] = null;
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
		$config['style']['contact_section']['has_buttons_size'] = true;
		$config['style']['contact_section']['has_hover_animation'] = false;
		$config['style']['contact_section']['has_buttons_spacing'] = true;
		$config['style']['contact_section']['has_box_shadow'] = true;
		$config['style']['contact_section']['has_padding'] = true;
		$config['style']['contact_section']['has_button_corners'] = true;
		$config['style']['contact_section']['has_typography'] = true;
		$config['style']['contact_section']['has_text_color'] = true;
		$config['style']['contact_section']['has_bg_color'] = true;
		$config['style']['contact_section']['has_tabs'] = false;
		$config['style']['contact_section']['has_hover_transition_duration'] = true;
		$config['style']['contact_section']['icon_color_label'] = esc_html__( 'Text and Icon Color', 'elementor-pro' );
		$config['advanced']['horizontal_position_default'] = 'start';
		$config['style']['send_button_section']['has_typography'] = false;

		return $config;
	}

	public function get_name(): string {
		return 'contact-buttons-var-10';
	}

	public function get_title(): string {
		return esc_html__( 'Interactive', 'elementor-pro' );
	}

	protected function add_content_tab(): void {
		$this->add_contact_section();
	}

	protected function add_style_tab(): void {
		$this->add_style_contact_section();
	}

	public function render(): void {
		$render_strategy = new Contact_Buttons_Var_10_Render( $this );

		$render_strategy->render();
	}

}
