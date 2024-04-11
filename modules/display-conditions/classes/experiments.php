<?php
namespace ElementorPro\Modules\DisplayConditions\Classes;

use Elementor\Core\Experiments\Manager;
use ElementorPro\Plugin;
use ElementorPro\Modules\DisplayConditions\Module as Display_Conditions_Module;

class Experiments {
	public static function register_dc_experiment() {
		Plugin::elementor()->experiments->add_feature( [
			'name'           => Display_Conditions_Module::LICENSE_FEATURE_NAME,
			'title'          => esc_html__( 'Display Conditions', 'elementor-pro' ),
			'description' => sprintf(
			/* translators: 1: opening link tag, 2: closing link tag, 3: line break, 4: opening span tag, 5: closing span tag. */
				esc_html__( 'Define one or multiple conditions per widget, controlling when they\'re visible. Widgets will only appear on the front end if these conditions are met. It\'s ideal for showing content to specific audiences based on time, date, user role, and more. %1$sLearn More%2$s%3$s%4$sRequires: Elementor version 3.19%5$s', 'elementor-pro' ),
				'<a href="https://go.elementor.com/wp-dash-display-conditions/" target="_blank">',
				'</a>',
				'<br>',
				'<span style="display: block; font-weight: 700; color: #21759b; font-style: italic; line-height: 18px; padding-block-start: 10px; margin-block-end: -5px;">',
				'</span>',
			),
			'release_status' => Manager::RELEASE_STATUS_BETA,
			'default'        => Manager::STATE_INACTIVE,
			'new_site'       => [
				'default_active' => true,
				'minimum_installation_version' => '3.20',
			],
		] );
	}
}
