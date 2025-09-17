<?php
namespace ElementorPro\Modules\Woocommerce\Traits;

use Elementor\Controls_Manager;
use ElementorPro\core\utils\Hints;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

trait Send_App_Plg_Trait {
	public function maybe_add_send_app_promotion_control( $widget ): void {
		if ( Hints::is_plugin_installed( 'send-app' ) ) {
			return;
		}

		$notice_id = 'send_app_wc_widgets_notice';
		if ( ! Hints::should_show_hint( $notice_id ) ) {
			return;
		}

		$notice_content = esc_html__( 'Built your store? Now make it grow. Start with Send today.', 'elementor-pro' );

		$widget->add_control(
			'send_app_promo',
			[
				'type' => Controls_Manager::RAW_HTML,
				'raw' => Hints::get_notice_template( [
					'display' => ! Hints::is_dismissed( $notice_id ),
					'type' => 'info',
					'content' => $notice_content,
					'icon' => true,
					'dismissible' => $notice_id,
					'button_text' => __( 'Install Plugin', 'elementor-pro' ),
					'button_event' => $notice_id,
					'button_data' => [
						'action_url' => Hints::get_plugin_action_url( 'send-app' ),
					],
				], true ),
			]
		);
	}
}
