<?php
namespace ElementorPro\Modules\Woocommerce\Settings;

use Elementor\Core\Base\Document;
use Elementor\Controls_Manager;
use Elementor\Core\Kits\Documents\Tabs\Tab_Base;
use ElementorPro\Plugin;
use ElementorPro\Modules\QueryControl\Module as QueryModule;
use Elementor\Group_Control_Typography;
use Elementor\Group_Control_Text_Shadow;
use Elementor\Group_Control_Border;
use Elementor\Group_Control_Box_Shadow;
use Elementor\Group_Control_Background;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Settings_Woocommerce extends Tab_Base {

	public function get_id() {
		return 'settings-woocommerce';
	}

	public function get_title() {
		return esc_html__( 'WooCommerce', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-woo-settings';
	}

	public function get_group() {
		return 'settings';
	}

	public function get_help_url() {
		return 'https://go.elementor.com/global-woocommerce';
	}

	protected function register_tab_controls() {

		$this->start_controls_section(
			'section_woocommerce_pages',
			[
				'label' => esc_html__( 'WooCommerce Pages', 'elementor-pro' ),
				'tab' => $this->get_id(),
			]
		);

		$this->add_control(
			'woocommerce_pages_intro',
			[
				'raw' => esc_html__( 'Select the pages you want to use as your default WooCommerce shop pages', 'elementor-pro' ),
				'type' => Controls_Manager::RAW_HTML,
				'content_classes' => 'elementor-descriptor',
			]
		);

		$autocomplete = [
			'object' => QueryModule::QUERY_OBJECT_POST,
			'query' => [
				'post_type' => [ 'page' ],
			],
		];

		$this->add_control(
			'woocommerce_cart_page_id',
			[
				'label' => esc_html__( 'Cart', 'elementor-pro' ),
				'type' => QueryModule::QUERY_CONTROL_ID,
				'select2options' => [
					'placeholder' => esc_html__( 'Select a page', 'elementor-pro' ),
				],
				'autocomplete' => $autocomplete,
				'default' => get_option( 'woocommerce_cart_page_id' ),
			]
		);

		$this->add_control(
			'woocommerce_checkout_page_id',
			[
				'label' => esc_html__( 'Checkout', 'elementor-pro' ),
				'type' => QueryModule::QUERY_CONTROL_ID,
				'select2options' => [
					'placeholder' => esc_html__( 'Select a page', 'elementor-pro' ),
				],
				'autocomplete' => $autocomplete,
				'default' => get_option( 'woocommerce_checkout_page_id' ),
			]
		);

		$this->add_control(
			'woocommerce_myaccount_page_id',
			[
				'label' => esc_html__( 'My Account', 'elementor-pro' ),
				'type' => QueryModule::QUERY_CONTROL_ID,
				'select2options' => [
					'placeholder' => esc_html__( 'Select a page', 'elementor-pro' ),
				],
				'autocomplete' => $autocomplete,
				'default' => get_option( 'woocommerce_myaccount_page_id' ),
			]
		);

		$this->add_control(
			'woocommerce_terms_page_id',
			[
				'label' => esc_html__( 'Terms & Conditions', 'elementor-pro' ),
				'type' => QueryModule::QUERY_CONTROL_ID,
				'select2options' => [
					'placeholder' => esc_html__( 'Select a page', 'elementor-pro' ),
				],
				'autocomplete' => $autocomplete,
				'default' => get_option( 'woocommerce_terms_page_id' ),
			]
		);

		$this->add_control(
			'woocommerce_purchase_summary_page_id',
			[
				'label' => esc_html__( 'Purchase Summary', 'elementor-pro' ),
				'type' => QueryModule::QUERY_CONTROL_ID,
				'select2options' => [
					'placeholder' => esc_html__( 'Select a page', 'elementor-pro' ),
				],
				'autocomplete' => $autocomplete,
				'default' => get_option( 'elementor_woocommerce_purchase_summary_page_id' ), // This is not in WC core. This is a custom page added by Elementor.
			]
		);

		$this->add_control(
			'woocommerce_pages_notice',
			[
				'type' => Controls_Manager::RAW_HTML,
				'raw' => esc_html__( 'Note: Changes you make here will also be reflected in the WooCommerce settings on your WP dashboard', 'elementor-pro' ),
				'content_classes' => 'elementor-panel-alert elementor-panel-alert-info',
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_woocommerce_notices',
			[
				'label' => esc_html__( 'Notices', 'elementor-pro' ),
				'tab' => $this->get_id(),
			]
		);

		$this->add_control(
			'woocommerce_notices_intro',
			[
				'raw' => esc_html__( 'Here\'s where you can customize how notices form WooCommerce will appear for your customers', 'elementor-pro' ),
				'type' => Controls_Manager::RAW_HTML,
				'content_classes' => 'elementor-descriptor',
			]
		);

		$this->add_control(
			'woocommerce_notices_elements',
			[
				'label' => esc_html__( 'Notice Type', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT2,
				'multiple' => true,
				'options' => [
					'wc_error' => esc_html__( 'Error Notices', 'elementor-pro' ),
					'wc_message' => esc_html__( 'Message Notices', 'elementor-pro' ),
					'wc_info' => esc_html__( 'Info Notices', 'elementor-pro' ),
				],
				'render_type' => 'ui',
				'label_block' => true,
				'frontend_available' => true,
				'default' => [],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'woocommerce_error_notices',
			[
				'label' => esc_html__( 'Error Notices', 'elementor-pro' ),
				'tab' => $this->get_id(),
				'condition' => [
					'woocommerce_notices_elements' => 'wc_error',
				],
			]
		);

		$this->add_notice_text_controls( 'error', $this->get_notice_text_selectors( 'error' ) );

		$this->add_control(
			'error_message_link_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Link Text', 'elementor-pro' ),
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'error_message_link_typography',
				'selector' => 'body.e-wc-error-notice .woocommerce-error a.wc-backward',
			]
		);

		$this->start_controls_tabs( 'error_message_links' );

		$this->start_controls_tab( 'error_message_normal_links', [
			'label' => esc_html__( 'Normal', 'elementor-pro' ),
		] );

		$this->add_control(
			'error_message_normal_links_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'.e-wc-error-notice .woocommerce-error' => '--error-message-normal-links-color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab( 'error_message_hover_links', [
			'label' => esc_html__( 'Hover', 'elementor-pro' ),
		] );

		$this->add_control(
			'error_message_hover_links_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'.e-wc-error-notice .woocommerce-error' => '--error-message-hover-links-color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->add_notice_box_controls( 'error', $this->get_notice_box_selectors( 'error' ) );

		$this->end_controls_section();

		$this->start_controls_section(
			'woocommerce_message_notices',
			[
				'label' => esc_html__( 'Message Notices', 'elementor-pro' ),
				'tab' => $this->get_id(),
				'condition' => [
					'woocommerce_notices_elements' => 'wc_message',
				],
			]
		);

		$this->add_notice_text_controls( 'message', $this->get_notice_text_selectors( 'message' ) );

		$this->add_control(
			'notice_message_link_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Link Text', 'elementor-pro' ),
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'notice_message_link_typography',
				'selector' => 'body.e-wc-message-notice .woocommerce-message .restore-item, body.e-wc-message-notice .woocommerce-message a:not([class])',
			]
		);

		$this->start_controls_tabs( 'notice_message_links' );

		$this->start_controls_tab( 'notice_message_normal_links', [
			'label' => esc_html__( 'Normal', 'elementor-pro' ),
		] );

		$this->add_control(
			'notice_message_normal_links_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'.e-wc-message-notice .woocommerce-message .restore-item, .e-wc-message-notice .woocommerce-message a:not([class])' => '--notice-message-normal-links-color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab( 'notice_message_hover_links', [
			'label' => esc_html__( 'Hover', 'elementor-pro' ),
		] );

		$this->add_control(
			'notice_message_hover_links_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'.e-wc-message-notice .woocommerce-message .restore-item:hover, .e-wc-message-notice .woocommerce-message a:not([class]):hover' => '--notice-message-hover-links-color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->add_notice_box_controls( 'message', $this->get_notice_box_selectors( 'message' ) );

		$this->add_notice_button_controls( 'message', $this->get_notice_button_selectors( 'message' ) );

		$this->end_controls_section();

		$this->start_controls_section(
			'woocommerce_info_notices',
			[
				'label' => esc_html__( 'Info Notices', 'elementor-pro' ),
				'tab' => $this->get_id(),
				'condition' => [
					'woocommerce_notices_elements' => 'wc_info',
				],
			]
		);

		$this->add_notice_text_controls( 'info', $this->get_notice_text_selectors( 'info' ) );

		$this->add_notice_box_controls( 'info', $this->get_notice_box_selectors( 'info' ) );

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->add_notice_button_controls( 'info', $this->get_notice_button_selectors( 'info' ) );

		$this->end_controls_section();
	}

	private function get_notice_text_selectors( $prefix ) {
		return [
			$prefix . '_message_text_color' => [
				'.e-wc-' . $prefix . '-notice .woocommerce-' . $prefix => '--' . $prefix . '-message-text-color: {{VALUE}};',
			],
			$prefix . '_message_text_typography' => '.e-wc-' . $prefix . '-notice .woocommerce-' . $prefix,
			$prefix . '_message_text_shadow' => '.e-wc-' . $prefix . '-notice .woocommerce-' . $prefix,
			$prefix . '_message_icon_color' => [
				'.e-wc-' . $prefix . '-notice .woocommerce-' . $prefix => '--' . $prefix . '-message-icon-color: {{VALUE}};',
			],
			$prefix . '_message_icon_size' => [
				'.e-wc-' . $prefix . '-notice .woocommerce-' . $prefix . ':before' => 'font-size: {{SIZE}}{{UNIT}};',
			],
			$prefix . '_message_icon_spacing' => [
				'.e-wc-' . $prefix . '-notice .woocommerce-' . $prefix => '--' . $prefix . '-message-icon-spacing: {{SIZE}}{{UNIT}};',
			],
		];
	}

	private function get_notice_box_selectors( $prefix ) {
		return [
			$prefix . '_notice_box_background' => 'body.e-wc-' . $prefix . '-notice .woocommerce-' . $prefix,
			$prefix . '_notice_box_box_shadow' => '.e-wc-' . $prefix . '-notice .woocommerce-' . $prefix,
			$prefix . '_notice_box_border' => 'body.e-wc-' . $prefix . '-notice .woocommerce-' . $prefix,
			$prefix . '_notice_box_border_radius' => [
				'.e-wc-' . $prefix . '-notice .woocommerce-' . $prefix => '--' . $prefix . '-box-border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
			],
			$prefix . '_notice_box_padding' => [
				'.e-wc-' . $prefix . '-notice .woocommerce-' . $prefix => '--' . $prefix . '-box-padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
			],
		];
	}

	private function get_notice_button_selectors( $prefix ) {
		$button_hover_background_selector = 'body.e-wc-' . $prefix . '-notice .woocommerce-' . $prefix . ' .button:hover';

		if ( 'info' === $prefix ) {
			// Override styling from the My Account widget.
			$button_hover_background_selector .= ', body.e-wc-info-notice .e-my-account-tab:not(.e-my-account-tab__dashboard--custom) .woocommerce .woocommerce-info .woocommerce-Button:hover';
		}

		return [
			$prefix . '_button_typography' => 'body.e-wc-' . $prefix . '-notice .woocommerce-' . $prefix . ' .button',
			$prefix . '_button_text_shadow' => '.e-wc-' . $prefix . '-notice .woocommerce-' . $prefix . ' .button',
			$prefix . '_buttons_normal_text_color' => [
				'.e-wc-' . $prefix . '-notice .woocommerce-' . $prefix => '--' . $prefix . '-buttons-normal-text-color: {{VALUE}};',
			],
			$prefix . '_buttons_normal_background' => 'body.e-wc-' . $prefix . '-notice .woocommerce-' . $prefix . ' .button',
			$prefix . '_buttons_normal_box_shadow' => '.e-wc-' . $prefix . '-notice .woocommerce-' . $prefix . ' .button',
			$prefix . '_buttons_hover_text_color' => [
				'.e-wc-' . $prefix . '-notice .woocommerce-' . $prefix => '--' . $prefix . '-buttons-hover-text-color: {{VALUE}};',
			],
			$prefix . '_buttons_hover_background' => $button_hover_background_selector,
			$prefix . '_buttons_focus_box_shadow' => '.e-wc-' . $prefix . '-notice .woocommerce-' . $prefix . ' .button:hover',
			$prefix . '_buttons_hover_border_color' => [
				'.e-wc-' . $prefix . '-notice .woocommerce-' . $prefix => '--' . $prefix . '-buttons-hover-border-color: {{VALUE}};',
			],
			$prefix . '_buttons_hover_transition_duration' => [
				'.e-wc-' . $prefix . '-notice .woocommerce-' . $prefix => '--' . $prefix . '-buttons-hover-transition-duration: {{SIZE}}ms;',
			],
			$prefix . '_buttons_border_type' => [
				'.e-wc-' . $prefix . '-notice .woocommerce-' . $prefix => '--' . $prefix . '-border-type: {{VALUE}};',
			],
			$prefix . '_buttons_border_width' => [
				'body.e-wc-' . $prefix . '-notice .woocommerce-' . $prefix . ' .button' => 'border-width: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
			],
			$prefix . '_buttons_border_color' => [
				'.e-wc-' . $prefix . '-notice .woocommerce-' . $prefix => '--' . $prefix . '-border-color: {{VALUE}};',
			],
			$prefix . '_buttons_border_radius' => [
				'.e-wc-' . $prefix . '-notice .woocommerce-' . $prefix => '--' . $prefix . '-buttons-border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
			],
			$prefix . '_buttons_padding' => [
				'.e-wc-' . $prefix . '-notice .woocommerce-' . $prefix => '--' . $prefix . '-buttons-padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
			],
		];
	}

	private function add_notice_text_controls( $prefix, $selectors ) {
		$this->add_control(
			$prefix . '_message_text_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Notice Text', 'elementor-pro' ),
			]
		);

		$this->add_control(
			$prefix . '_message_text_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => $selectors[ $prefix . '_message_text_color' ],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => $prefix . '_message_text_typography',
				'selector' => $selectors[ $prefix . '_message_text_typography' ],
			]
		);

		$this->add_group_control(
			Group_Control_Text_Shadow::get_type(),
			[
				'name' => $prefix . '_message_text_shadow',
				'selector' => $selectors[ $prefix . '_message_text_shadow' ],
			]
		);

		$this->add_control(
			$prefix . '_message_icon_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Icon', 'elementor-pro' ),
			]
		);

		$this->add_control(
			$prefix . '_message_icon_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => $selectors[ $prefix . '_message_icon_color' ],
			]
		);
	}

	private function add_notice_box_controls( $prefix, $selectors ) {
		$this->add_control(
			$prefix . '_notice_box_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Notice Box', 'elementor-pro' ),
				'separator' => 'before',
			]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => $prefix . '_notice_box_background',
				'selector' => $selectors[ $prefix . '_notice_box_background' ],
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => $prefix . '_notice_box_box_shadow',
				'selector' => $selectors[ $prefix . '_notice_box_box_shadow' ],
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name' => $prefix . '_notice_box_border',
				'selector' => $selectors[ $prefix . '_notice_box_border' ],
			]
		);

		$this->add_responsive_control(
			$prefix . '_notice_box_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => $selectors[ $prefix . '_notice_box_border_radius' ],
			]
		);
	}

	private function add_notice_button_controls( $prefix, $selectors ) {
		$this->add_control(
			$prefix . '_button_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Button', 'elementor-pro' ),
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => $prefix . '_button_typography',
				'selector' => $selectors[ $prefix . '_button_typography' ],
			]
		);

		$this->add_group_control(
			Group_Control_Text_Shadow::get_type(),
			[
				'name' => $prefix . '_button_text_shadow',
				'selector' => $selectors[ $prefix . '_button_text_shadow' ],
			]
		);

		$this->start_controls_tabs( $prefix . '_buttons_styles' );

		$this->start_controls_tab( $prefix . '_buttons_normal_styles', [
			'label' => esc_html__( 'Normal', 'elementor-pro' ),
		] );

		$this->add_control(
			$prefix . '_buttons_normal_text_color',
			[
				'label' => esc_html__( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => $selectors[ $prefix . '_buttons_normal_text_color' ],
			]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => $prefix . '_buttons_normal_background',
				'selector' => $selectors[ $prefix . '_buttons_normal_background' ],
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => $prefix . '_buttons_normal_box_shadow',
				'selector' => $selectors[ $prefix . '_buttons_normal_box_shadow' ],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab( $prefix . '_buttons_hover_styles', [
			'label' => esc_html__( 'Hover', 'elementor-pro' ),
		] );

		$this->add_control(
			$prefix . '_buttons_hover_text_color',
			[
				'label' => esc_html__( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => $selectors[ $prefix . '_buttons_hover_text_color' ],
			]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => $prefix . '_buttons_hover_background',
				'selector' => $selectors[ $prefix . '_buttons_hover_background' ],
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => $prefix . '_buttons_focus_box_shadow',
				'selector' => $selectors[ $prefix . '_buttons_focus_box_shadow' ],
			]
		);

		$this->add_control(
			$prefix . '_buttons_hover_border_color',
			[
				'label' => esc_html__( 'Border Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => $selectors[ $prefix . '_buttons_hover_border_color' ],
				'condition' => [
					$prefix . '_buttons_border_type!' => 'none',
				],
			]
		);

		$this->add_control(
			$prefix . '_buttons_hover_transition_duration',
			[
				'label' => esc_html__( 'Transition Duration', 'elementor-pro' ) . ' (ms)',
				'type' => Controls_Manager::SLIDER,
				'selectors' => $selectors[ $prefix . '_buttons_hover_transition_duration' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 3000,
					],
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->add_control(
			$prefix . '_buttons_border_type',
			[
				'label' => esc_html__( 'Border Type', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'none' => esc_html__( 'None', 'elementor-pro' ),
					'solid' => esc_html__( 'Solid', 'elementor-pro' ),
					'double' => esc_html__( 'Double', 'elementor-pro' ),
					'dotted' => esc_html__( 'Dotted', 'elementor-pro' ),
					'dashed' => esc_html__( 'Dashed', 'elementor-pro' ),
					'groove' => esc_html__( 'Groove', 'elementor-pro' ),
				],
				'selectors' => $selectors[ $prefix . '_buttons_border_type' ],
				'separator' => 'before',
			]
		);

		$this->add_responsive_control(
			$prefix . '_buttons_border_width',
			[
				'label' => esc_html__( 'Width', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'vw', 'custom' ],
				'selectors' => $selectors[ $prefix . '_buttons_border_width' ],
				'condition' => [
					$prefix . '_buttons_border_type!' => 'none',
				],
			]
		);

		$this->add_control(
			$prefix . '_buttons_border_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => $selectors[ $prefix . '_buttons_border_color' ],
				'condition' => [
					$prefix . '_buttons_border_type!' => 'none',
				],
			]
		);

		$this->add_responsive_control(
			$prefix . '_buttons_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors' => $selectors[ $prefix . '_buttons_border_radius' ],
			]
		);

		$this->add_responsive_control(
			$prefix . '_buttons_padding',
			[
				'label' => esc_html__( 'Padding', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'vw', 'custom' ],
				'selectors' => $selectors[ $prefix . '_buttons_padding' ],
			]
		);
	}

	public function on_save( $data ) {
		if (
			! isset( $data['settings']['post_status'] ) ||
			Document::STATUS_PUBLISH !== $data['settings']['post_status'] ||
			// Should check for the current action to avoid infinite loop
			// when updating options like: "blogname" and "blogdescription".
			strpos( current_action(), 'update_option_' ) === 0
		) {
			return;
		}

		$ec_wc_key_mapping = [
			'woocommerce_cart_page_id' => 'woocommerce_cart_page_id',
			'woocommerce_checkout_page_id' => 'woocommerce_checkout_page_id',
			'woocommerce_myaccount_page_id' => 'woocommerce_myaccount_page_id',
			'woocommerce_terms_page_id' => 'woocommerce_terms_page_id',
			'woocommerce_purchase_summary_page_id' => 'elementor_woocommerce_purchase_summary_page_id',
		];
		foreach ( $ec_wc_key_mapping as $ec_key => $wc_key ) {
			if ( array_key_exists( $ec_key, $data['settings'] ) ) {
				$value = $data['settings'][ $ec_key ] ? $data['settings'][ $ec_key ] : '';
				update_option( $wc_key, $value );
			}
		}
	}
}
