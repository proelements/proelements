<?php

namespace ElementorPro\Modules\Popup\DisplaySettings;

use Elementor\Controls_Manager;
use ElementorPro\Core\Utils\Hints;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Triggers extends Base {

	/**
	 * Get element name.
	 *
	 * Retrieve the element name.
	 *
	 * @since  2.4.0
	 * @access public
	 *
	 * @return string The name.
	 */
	public function get_name() {
		return 'popup_triggers';
	}

	protected function register_controls() {
		$this->start_controls_section( 'triggers' );

		$this->maybe_add_send_app_promotion_control();

		$this->start_settings_group( 'page_load', esc_html__( 'On Page Load', 'elementor-pro' ) );

		$this->add_settings_group_control(
			'delay',
			[
				'type' => Controls_Manager::NUMBER,
				'label' => esc_html__( 'Within', 'elementor-pro' ) . ' (sec)',
				'default' => 0,
				'min' => 0,
				'step' => 0.1,
			]
		);

		$this->end_settings_group();

		$this->start_settings_group( 'scrolling', esc_html__( 'On Scroll', 'elementor-pro' ) );

		$this->add_settings_group_control(
			'direction',
			[
				'type' => Controls_Manager::SELECT,
				'label' => esc_html__( 'Direction', 'elementor-pro' ),
				'default' => 'down',
				'options' => [
					'down' => esc_html__( 'Down', 'elementor-pro' ),
					'up' => esc_html__( 'Up', 'elementor-pro' ),
				],
			]
		);

		$this->add_settings_group_control(
			'offset',
			[
				'type' => Controls_Manager::NUMBER,
				'label' => esc_html__( 'Within', 'elementor-pro' ) . ' (%)',
				'default' => 50,
				'min' => 1,
				'max' => 100,
				'condition' => [
					'direction' => 'down',
				],
			]
		);

		$this->end_settings_group();

		$this->start_settings_group( 'scrolling_to', esc_html__( 'On Scroll To Element', 'elementor-pro' ) );

		$this->add_settings_group_control(
			'selector',
			[
				'type' => Controls_Manager::TEXT,
				'label' => esc_html__( 'Selector', 'elementor-pro' ),
				'placeholder' => '.my-class',
				'ai' => [
					'active' => false,
				],
			],
		);

		$this->end_settings_group();

		$this->start_settings_group( 'click', esc_html__( 'On Click', 'elementor-pro' ) );

		$this->add_settings_group_control(
			'times',
			[
				'label' => esc_html__( 'Clicks', 'elementor-pro' ),
				'type' => Controls_Manager::NUMBER,
				'default' => 1,
				'min' => 1,
			]
		);

		$this->end_settings_group();

		$this->start_settings_group( 'inactivity', esc_html__( 'After Inactivity', 'elementor-pro' ) );

		$this->add_settings_group_control(
			'time',
			[
				'type' => Controls_Manager::NUMBER,
				'label' => esc_html__( 'Within', 'elementor-pro' ) . ' (sec)',
				'default' => 30,
				'min' => 1,
				'step' => 0.1,
			]
		);

		$this->end_settings_group();

		$this->start_settings_group( 'exit_intent', esc_html__( 'On Page Exit Intent', 'elementor-pro' ) );

		$this->end_settings_group();

		$this->start_settings_group( 'adblock_detection', esc_html__( 'AdBlock Detection', 'elementor-pro' ) );

		$this->add_settings_group_control(
			'delay',
			[
				'type' => Controls_Manager::NUMBER,
				'label' => esc_html__( 'Within', 'elementor-pro' ) . ' (sec)',
				'default' => 0,
				'min' => 0,
				'step' => 0.1,
			]
		);

		$this->end_settings_group();

		$this->end_controls_section();
	}

	private function get_send_app_notice_template( $notice_id, $notice_content ): string {
		if ( Hints::is_dismissed( $notice_id ) ) {
			return '';
		}

		$action_url = Hints::get_plugin_action_url( 'send-app' );
		$button_data = wp_json_encode( [ 'action_url' => $action_url ] );

		return '<div class="elementor-control-notice elementor-control-notice-type-info">
			<div class="elementor-control-notice-icon">
				<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M2.25 9H3M9 2.25V3M15 9H15.75M4.2 4.2L4.725 4.725M13.8 4.2L13.275 4.725M7.27496 12.75H10.725M6.75 12C6.12035 11.5278 5.65525 10.8694 5.42057 10.1181C5.1859 9.36687 5.19355 8.56082 5.44244 7.81415C5.69133 7.06748 6.16884 6.41804 6.80734 5.95784C7.44583 5.49764 8.21294 5.25 9 5.25C9.78706 5.25 10.5542 5.49764 11.1927 5.95784C11.8312 6.41804 12.3087 7.06748 12.5576 7.81415C12.8065 8.56082 12.8141 9.36687 12.5794 10.1181C12.3448 10.8694 11.8796 11.5278 11.25 12C10.9572 12.2899 10.7367 12.6446 10.6064 13.0355C10.4761 13.4264 10.4397 13.8424 10.5 14.25C10.5 14.6478 10.342 15.0294 10.0607 15.3107C9.77936 15.592 9.39782 15.75 9 15.75C8.60218 15.75 8.22064 15.592 7.93934 15.3107C7.65804 15.0294 7.5 14.6478 7.5 14.25C7.56034 13.8424 7.52389 13.4264 7.3936 13.0355C7.2633 12.6446 7.04282 12.2899 6.75 12Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
				</svg>
			</div>
			<div class="elementor-control-notice-main">
				<div class="elementor-control-notice-main-content">' . $notice_content . '</div>
				<div class="elementor-control-notice-main-actions">
                                        <button type="button" class="e-btn e-info e-btn-1" data-event="' . esc_attr( $notice_id ) . '" data-settings="' . esc_attr( $button_data ) . '" onclick="window.open(\'' . esc_url( $action_url ) . '\', \'_blank\');">
						' . __( 'Install Send', 'elementor-pro' ) . '
					</button>
				</div>
			</div>
			<button class="elementor-control-notice-dismiss tooltip-target" data-event="' . esc_attr( $notice_id ) . '" data-tooltip="' . esc_attr__( 'Don\'t show again.', 'elementor-pro' ) . '" aria-label="' . esc_attr__( 'Don\'t show again.', 'elementor-pro' ) . '" onclick="this.closest(\'.elementor-control-notice\').style.display=\'none\'; elementorCommon.ajax.addRequest(\'dismissed_editor_notices\', {data: {dismissId: \'' . esc_js( $notice_id ) . '\'}}); return false;">
				<i class="eicon eicon-close" aria-hidden="true"></i>
			</button>
		</div>';
	}

	private function maybe_add_send_app_promotion_control(): void {
		if ( Hints::is_plugin_installed( 'send-app' ) ) {
			return;
		}

		$notice_id = 'send_app_forms_triggers_notice';
		if ( ! Hints::should_show_hint( $notice_id ) ) {
			return;
		}

		$notice_content = wp_kses(
			__( '<strong>Turn popup clicks into sales with Send.</strong> Trigger automated emails the moment visitors engage.', 'elementor-pro' ),
			[
				'br'     => [],
				'strong' => [],
			]
		);

		$this->add_control(
			'send_app_promo',
			[
				'type' => Controls_Manager::RAW_HTML,
				'raw' => $this->get_send_app_notice_template( $notice_id, $notice_content ),
			]
		);
	}
}
