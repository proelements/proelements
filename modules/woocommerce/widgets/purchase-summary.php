<?php
namespace ElementorPro\Modules\Woocommerce\Widgets;

use ElementorPro\Plugin;
use ElementorPro\Modules\Woocommerce\Module;
use Elementor\Controls_Manager;
use Elementor\Group_Control_Box_Shadow;
use Elementor\Group_Control_Typography;
use Elementor\Group_Control_Text_Shadow;
use Elementor\Core\Kits\Documents\Tabs\Global_Typography;
use Elementor\Group_Control_Background;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Purchase_Summary extends Base_Widget {

	private $order_id = null;
	private $order_key = null;

	public function get_name() {
		return 'woocommerce-purchase-summary';
	}

	public function get_title() {
		return esc_html__( 'Purchase Summary', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-purchase-summary';
	}

	public function get_keywords() {
		return [ 'woocommerce', 'summary', 'thank you', 'confirmation', 'purchase' ];
	}

	public function get_categories() {
		return [ 'woocommerce-elements' ];
	}

	protected function register_controls() {
		$this->start_controls_section(
			'confirmation_message',
			[
				'label' => esc_html__( 'Confirmation Message', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'confirmation_message_active',
			[
				'label' => esc_html__( 'Confirmation Message', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Show', 'elementor-pro' ),
				'label_off' => esc_html__( 'Hide', 'elementor-pro' ),
				'default' => 'yes',
				'selectors' => [
					'{{WRAPPER}}' => '--confirmation-message-display: block;',
				],
			]
		);

		$this->add_control(
			'confirmation_message_text',
			[
				'label' => esc_html__( 'Message', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
				],
				'default' => esc_html__( 'Thank You. Your order has been received.', 'elementor-pro' ),
				'label_block' => true,
				'condition' => [
					'confirmation_message_active!' => '',
				],
			]
		);

		$this->add_responsive_control(
			'confirmation_message_alignment',
			[
				'label' => esc_html__( 'Alignment', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'options' => [
					'start' => [
						'title' => esc_html__( 'Start', 'elementor-pro' ),
						'icon' => 'eicon-text-align-left',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'elementor-pro' ),
						'icon' => 'eicon-text-align-center',
					],
					'end' => [
						'title' => esc_html__( 'End', 'elementor-pro' ),
						'icon' => 'eicon-text-align-right',
					],
				],
				'condition' => [
					'confirmation_message_active!' => '',
				],
				'selectors' => [
					'{{WRAPPER}}' => '--confirmation-message-alignment: {{VALUE}};',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'payment_details',
			[
				'label' => esc_html__( 'Payment Details', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'payment_details_number',
			[
				'label' => esc_html__( 'Number', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
				],
				'default' => esc_html__( 'Order Number:', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'payment_details_date',
			[
				'label' => esc_html__( 'Date:', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
				],
				'default' => esc_html__( 'Order Date:', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'payment_details_email',
			[
				'label' => esc_html__( 'Email', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
				],
				'default' => esc_html__( 'Order Email:', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'payment_details_total',
			[
				'label' => esc_html__( 'Total', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
				],
				'default' => esc_html__( 'Order Total:', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'payment_details_payment',
			[
				'label' => esc_html__( 'Payment', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
				],
				'default' => esc_html__( 'Payment Method:', 'elementor-pro' ),
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'bank_details',
			[
				'label' => esc_html__( 'Bank Details', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'bank_details_text',
			[
				'label' => esc_html__( 'Title', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
				],
				'default' => esc_html__( 'Our Bank Details', 'elementor-pro' ),
			]
		);

		$this->add_responsive_control(
			'bank_details_alignment',
			[
				'label' => esc_html__( 'Alignment', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'options' => [
					'start' => [
						'title' => esc_html__( 'Start', 'elementor-pro' ),
						'icon' => 'eicon-text-align-left',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'elementor-pro' ),
						'icon' => 'eicon-text-align-center',
					],
					'end' => [
						'title' => esc_html__( 'End', 'elementor-pro' ),
						'icon' => 'eicon-text-align-right',
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--bank-details-alignment: {{VALUE}};',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'downloads',
			[
				'label' => esc_html__( 'Downloads', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'downloads_text',
			[
				'label' => esc_html__( 'Title', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
				],
				'default' => esc_html__( 'Downloads', 'elementor-pro' ),
			]
		);

		$this->add_responsive_control(
			'downloads_alignment',
			[
				'label' => esc_html__( 'Alignment', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'options' => [
					'start' => [
						'title' => esc_html__( 'Start', 'elementor-pro' ),
						'icon' => 'eicon-text-align-left',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'elementor-pro' ),
						'icon' => 'eicon-text-align-center',
					],
					'end' => [
						'title' => esc_html__( 'End', 'elementor-pro' ),
						'icon' => 'eicon-text-align-right',
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--downloads-alignment: {{VALUE}};',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'order_summary',
			[
				'label' => esc_html__( 'Purchase Summary', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'order_summary_text',
			[
				'label' => esc_html__( 'Title', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
				],
				'default' => esc_html__( 'Order Details', 'elementor-pro' ),
			]
		);

		$this->add_responsive_control(
			'order_summary_alignment',
			[
				'label' => esc_html__( 'Alignment', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'options' => [
					'start' => [
						'title' => esc_html__( 'Start', 'elementor-pro' ),
						'icon' => 'eicon-text-align-left',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'elementor-pro' ),
						'icon' => 'eicon-text-align-center',
					],
					'end' => [
						'title' => esc_html__( 'End', 'elementor-pro' ),
						'icon' => 'eicon-text-align-right',
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--order-summary-alignment: {{VALUE}};',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'billing_details',
			[
				'label' => esc_html__( 'Billing Details', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'billing_details_text',
			[
				'label' => esc_html__( 'Title', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
				],
				'default' => esc_html__( 'Billing Details', 'elementor-pro' ),
			]
		);

		$this->add_responsive_control(
			'billing_details_alignment',
			[
				'label' => esc_html__( 'Alignment', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'options' => [
					'start' => [
						'title' => esc_html__( 'Start', 'elementor-pro' ),
						'icon' => 'eicon-text-align-left',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'elementor-pro' ),
						'icon' => 'eicon-text-align-center',
					],
					'end' => [
						'title' => esc_html__( 'End', 'elementor-pro' ),
						'icon' => 'eicon-text-align-right',
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--billing-details-alignment: {{VALUE}};',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'shipping_details',
			[
				'label' => esc_html__( 'Shipping Address', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'shipping_details_text',
			[
				'label' => esc_html__( 'Title', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
				],
				'default' => esc_html__( 'Shipping Details', 'elementor-pro' ),
			]
		);

		$this->add_responsive_control(
			'shipping_details_alignment',
			[
				'label' => esc_html__( 'Alignment', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'options' => [
					'start' => [
						'title' => esc_html__( 'Start', 'elementor-pro' ),
						'icon' => 'eicon-text-align-left',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'elementor-pro' ),
						'icon' => 'eicon-text-align-center',
					],
					'end' => [
						'title' => esc_html__( 'End', 'elementor-pro' ),
						'icon' => 'eicon-text-align-right',
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--shipping-details-alignment: {{VALUE}};',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'preview_order',
			[
				'label' => esc_html__( 'Preview Settings', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'preview_order_type',
			[
				'label' => esc_html__( 'Preview order with', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'' => 'Latest Order',
					'custom-order' => 'Order ID',
				],
			]
		);

		$this->add_control(
			'preview_order_custom',
			[
				'label' => esc_html__( 'Order ID', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'condition' => [
					'preview_order_type' => 'custom-order',
				],
				'render_type' => 'template',
				'description' => esc_html__( 'Note: To find an order ID, go to the WP dashboard: WooCommerce > Orders', 'elementor-pro' ),
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'sections_tabs_style',
			[
				'label' => esc_html__( 'Sections', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'sections_background_color',
			[
				'label' => esc_html__( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--sections-background-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'sections_box_shadow',
				'selector' => '{{WRAPPER}} .shop_table, {{WRAPPER}} address',
			]
		);

		$this->add_control(
			'sections_border_type',
			[
				'label' => esc_html__( 'Border Type', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => $this->get_custom_border_type_options(),
				'selectors' => [
					'{{WRAPPER}}' => '--sections-border-type: {{VALUE}};',
				],
			]
		);

		$this->add_responsive_control(
			'sections_border_width',
			[
				'label' => esc_html__( 'Width', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					'{{WRAPPER}} .shop_table, {{WRAPPER}} address' => 'border-width: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
				'condition' => [
					'sections_border_type!' => 'none',
				],
			]
		);

		$this->add_control(
			'sections_border_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--sections-border-color: {{VALUE}};',
				],
				'condition' => [
					'sections_border_type!' => 'none',
				],
			]
		);

		$this->add_responsive_control(
			'sections_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					'{{WRAPPER}}' => '--sections-border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'sections_padding',
			[
				'label' => esc_html__( 'Padding', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					'{{WRAPPER}}' => '--sections-padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'sections_spacing',
			[
				'label' => esc_html__( 'Spacing', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'vw' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--sections-spacing: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'typography_title',
			[
				'label' => esc_html__( 'Typography', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'confirmation_message_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Confirmation Message', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'confirmation_message_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--confirmation-message-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'confirmation_message_typography',
				'selector' => '{{WRAPPER}} .woocommerce-thankyou-order-received',
			]
		);

		$this->add_group_control(
			Group_Control_Text_Shadow::get_type(),
			[
				'name' => 'confirmation_message_text_shadow',
				'selector' => '{{WRAPPER}} .woocommerce-thankyou-order-received',
			]
		);

		$this->add_control(
			'titles_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Titles', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'titles_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--titles-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'titles_typography',
				'selector' => '{{WRAPPER}} h2',
			]
		);

		$this->add_group_control(
			Group_Control_Text_Shadow::get_type(),
			[
				'name' => 'titles_text_shadow',
				'selector' => '{{WRAPPER}} h2',
			]
		);

		$this->add_responsive_control(
			'titles_spacing',
			[
				'label' => esc_html__( 'Spacing', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'vw' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--titles-spacing: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'general_text_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'General Text', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'general_text_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--general-text-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'general_text_typography',
				'selector' => '{{WRAPPER}} address, {{WRAPPER}} .product-purchase-note, {{WRAPPER}} .woocommerce-thankyou-order-details + p',
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'payment_details_title',
			[
				'label' => esc_html__( 'Payment Details', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_responsive_control(
			'payment_details_space_between',
			[
				'label' => esc_html__( 'Space Between', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 75,
					],
				],
				'default' => [ 'px' => 0 ],
				'selectors' => [
					'{{WRAPPER}}' => '--payment-details-space-between: {{SIZE}}{{UNIT}};',
				],
				'separator' => 'after',
			]
		);

		$this->add_control(
			'payment_details_titles_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Titles', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'payment_details_titles_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--payment-details-titles-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'payment_details_titles_typography',
				'selector' => '{{WRAPPER}} .woocommerce-order-overview.order_details li',
				'exclude' => [
					'text_decoration',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Text_Shadow::get_type(),
			[
				'name' => 'payment_details_titles_text_shadow',
				'selector' => '{{WRAPPER}} .woocommerce-order-overview.order_details li',
			]
		);

		$this->add_responsive_control(
			'payment_details_titles_spacing',
			[
				'label' => esc_html__( 'Spacing', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'vw' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--payment-details-titles-spacing: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'payment_details_items_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Items', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'payment_details_items_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--payment-details-items-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'payment_details_items_typography',
				'selector' => '{{WRAPPER}} .woocommerce-order-overview.order_details li strong',
				'exclude' => [
					'text_decoration',
				],
			]
		);

		$this->add_control(
			'payment_details_dividers_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Dividers', 'elementor-pro' ),
				'separator' => 'before',
			]
		);

		$this->add_control(
			'payment_details_border_type',
			[
				'label' => esc_html__( 'Border Type', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => $this->get_custom_border_type_options(),
				'selectors' => [
					'{{WRAPPER}}' => '--payment-details-border-type: {{VALUE}};',
				],
			]
		);

		$this->add_responsive_control(
			'payment_details_border_width',
			[
				'label' => esc_html__( 'Width', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'vw' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--payment-details-border-width: {{SIZE}}{{UNIT}};',
				],

				'condition' => [
					'payment_details_border_type!' => 'none',
				],
			]
		);

		$this->add_control(
			'payment_details_border_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--payment-details-border-color: {{VALUE}};',
				],
				'condition' => [
					'payment_details_border_type!' => 'none',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'bank_details_title',
			[
				'label' => esc_html__( 'Bank Details', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_responsive_control(
			'bank_details_space_between',
			[
				'label' => esc_html__( 'Space Between', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 75,
					],
				],
				'default' => [ 'px' => 0 ],
				'selectors' => [
					'{{WRAPPER}}' => '--bank-details-space-between: {{SIZE}}{{UNIT}};',
				],
				'separator' => 'after',
			]
		);

		$this->add_control(
			'bank_details_account_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Account Title', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'account_title_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--account-title-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'account_title_typography',
				'selector' => '{{WRAPPER}} .wc-bacs-bank-details-account-name',
			]
		);

		$this->add_group_control(
			Group_Control_Text_Shadow::get_type(),
			[
				'name' => 'account_title_text_shadow',
				'selector' => '{{WRAPPER}} .wc-bacs-bank-details-account-name',
			]
		);

		$this->add_responsive_control(
			'account_title_spacing',
			[
				'label' => esc_html__( 'Spacing', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'vw' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--account-title-spacing: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'bank_details_titles_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Titles', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'bank_details_titles_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--bank-details-titles-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'bank_details_titles_typography',
				'selector' => '{{WRAPPER}} .woocommerce-bacs-bank-details .wc-bacs-bank-details li',
				'exclude' => [
					'text_decoration',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Text_Shadow::get_type(),
			[
				'name' => 'bank_details_titles_text_shadow',
				'selector' => '{{WRAPPER}} .woocommerce-bacs-bank-details .wc-bacs-bank-details li',
			]
		);

		$this->add_responsive_control(
			'bank_details_titles_spacing',
			[
				'label' => esc_html__( 'Spacing', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'vw' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--bank-details-titles-spacing: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'bank_details_items_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Items', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'bank_details_items_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--bank-details-items-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'bank_details_items_typography',
				'selector' => '{{WRAPPER}} .woocommerce-bacs-bank-details .wc-bacs-bank-details li strong',
				'exclude' => [
					'text_decoration',
				],
			]
		);

		$this->add_control(
			'bank_details_dividers_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Dividers', 'elementor-pro' ),
				'separator' => 'before',
			]
		);

		$this->add_control(
			'bank_details_border_type',
			[
				'label' => esc_html__( 'Border Type', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => $this->get_custom_border_type_options(),
				'selectors' => [
					'{{WRAPPER}}' => '--bank-details-border-type: {{VALUE}};',
				],
			]
		);

		$this->add_responsive_control(
			'bank_details_border_width',
			[
				'label' => esc_html__( 'Width', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'vw' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--bank-details-border-width: {{SIZE}}{{UNIT}};',
				],

				'condition' => [
					'bank_details_border_type!' => 'none',
				],
			]
		);

		$this->add_control(
			'bank_details_border_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--bank-details-border-color: {{VALUE}};',
				],
				'condition' => [
					'bank_details_border_type!' => 'none',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'order_details_title',
			[
				'label' => esc_html__( 'Order Details', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_responsive_control(
			'order_details_rows_gap',
			[
				'label' => esc_html__( 'Rows Gap', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 60,
					],
				],
				'default' => [ 'px' => 0 ],
				'selectors' => [
					'{{WRAPPER}}' => '--order-details-rows-gap: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'order_details_titles_totals',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Titles &amp; Totals', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'order_details_titles_totals_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--order-details-titles-totals-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'order_details_titles_totals_typography',
				'selector' => '{{WRAPPER}} .shop_table thead tr th, {{WRAPPER}} .shop_table tfoot th, {{WRAPPER}} .shop_table tfoot tr td, {{WRAPPER}} .shop_table tfoot tr td span, {{WRAPPER}} .woocommerce-table--order-downloads tr td:before',
			]
		);

		$this->add_group_control(
			Group_Control_Text_Shadow::get_type(),
			[
				'name' => 'order_details_titles_totals_text_shadow',
				'selector' => '{{WRAPPER}} .shop_table thead tr th, {{WRAPPER}} .shop_table tfoot th, {{WRAPPER}} .shop_table tfoot tr td, {{WRAPPER}} .shop_table tfoot tr td span, {{WRAPPER}} .woocommerce-table--order-downloads tr td:before',
			]
		);

		$this->add_control(
			'order_details_items_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Items', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'order_details_items_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--order-details-items-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'order_details_items_typography',
				'selector' => '{{WRAPPER}} .product-quantity, {{WRAPPER}} .woocommerce-table--order-details td a, {{WRAPPER}} td.product-total, {{WRAPPER}} td.download-product, {{WRAPPER}} td.download-remaining, {{WRAPPER}} td.download-expires, {{WRAPPER}} td.download-file',
			]
		);

		$this->add_control(
			'order_details_variations_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Variations', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'order_details_variations_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--order-details-variations-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'order_details_variations_typography',
				'selector' => '{{WRAPPER}} .product-name .wc-item-meta .wc-item-meta-label, {{WRAPPER}} .wc-item-meta li p',
			]
		);

		$this->add_control(
			'order_details_product_links_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Product Link', 'elementor-pro' ),
			]
		);

		$this->start_controls_tabs( 'order_details_product_links_colors' );

		$this->start_controls_tab( 'order_details_product_links_normal_colors', [ 'label' => esc_html__( 'Normal', 'elementor-pro' ) ] );

		$this->add_control(
			'order_details_product_links_normal_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--order-details-product-links-normal-color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab( 'order_details_product_links_hover_colors', [ 'label' => esc_html__( 'Hover', 'elementor-pro' ) ] );

		$this->add_control(
			'order_details_product_links_hover_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--order-details-product-links-hover-color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->add_control(
			'order_details_dividers_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Dividers', 'elementor-pro' ),
				'separator' => 'before',
			]
		);

		$this->add_control(
			'order_details_border_type',
			[
				'label' => esc_html__( 'Border Type', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => $this->get_custom_border_type_options(),
				'selectors' => [
					'{{WRAPPER}}' => '--tables-divider-border-type: {{VALUE}};',
				],
			]
		);

		$this->add_responsive_control(
			'order_details_border_width',
			[
				'label' => esc_html__( 'Width', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'vw' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--tables-divider-border-width: {{SIZE}}{{UNIT}};',
				],

				'condition' => [
					'order_details_border_type!' => 'none',
				],
			]
		);

		$this->add_control(
			'order_details_border_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--tables-divider-border-color: {{VALUE}};',
				],
				'condition' => [
					'order_details_border_type!' => 'none',
				],
			]
		);

		$this->add_control(
			'order_details_button_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Buttons', 'elementor-pro' ),
				'separator' => 'before',
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'order_details_button_typography',
				'selector' => '{{WRAPPER}} .shop_table .button, {{WRAPPER}} .order-again .button',
			]
		);

		$this->add_group_control(
			Group_Control_Text_Shadow::get_type(),
			[
				'name' => 'order_details_button_text_shadow',
				'selector' => '{{WRAPPER}} .shop_table .button, {{WRAPPER}} .order-again .button',
			]
		);

		$this->start_controls_tabs( 'order_details_button_styles' );

		$this->start_controls_tab( 'order_details_button_styles_normal', [ 'label' => esc_html__( 'Normal', 'elementor-pro' ) ] );

		$this->add_control(
			'order_details_button_normal_text_color',
			[
				'label' => esc_html__( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--button-normal-text-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => 'order_details_button_normal_background',
				'selector' => '{{WRAPPER}} .shop_table .button, {{WRAPPER}} .order-again .button',
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'order_details_button_normal_box_shadow',
				'selector' => '{{WRAPPER}} .shop_table .button, {{WRAPPER}} .order-again .button',
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab( 'order_details_button_styles_hover', [ 'label' => esc_html__( 'Hover', 'elementor-pro' ) ] );

		$this->add_control(
			'order_details_button_hover_text_color',
			[
				'label' => esc_html__( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--button-hover-text-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => 'order_details_button_hover_background',
				'selector' => '{{WRAPPER}} .shop_table .button:hover, {{WRAPPER}} .order-again .button:hover',
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'order_details_button_hover_box_shadow',
				'selector' => '{{WRAPPER}} .shop_table .button:hover, {{WRAPPER}} .order-again .button:hover',
			]
		);

		$this->add_control(
			'order_details_button_hover_border_color',
			[
				'label' => esc_html__( 'Border Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .shop_table .button:hover, {{WRAPPER}} .order-again .button:hover' => 'border-color: {{VALUE}}',
				],
				'condition' => [
					'order_details_button_border_type!' => 'none',
				],
			]
		);

		$this->add_control(
			'order_details_button_hover_transition_duration',
			[
				'label' => esc_html__( 'Transition Duration', 'elementor-pro' ) . ' (ms)',
				'type' => Controls_Manager::SLIDER,
				'selectors' => [
					'{{WRAPPER}}' => '--button-hover-transition-duration: {{SIZE}}ms',
				],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 3000,
					],
				],
			]
		);

		$this->add_control(
			'order_details_button_hover_animation',
			[
				'label' => esc_html__( 'Hover Animation', 'elementor-pro' ),
				'type' => Controls_Manager::HOVER_ANIMATION,
				'frontend_available' => true,
				'render_type' => 'template',
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->add_control(
			'order_details_button_border_type',
			[
				'label' => esc_html__( 'Border Type', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => $this->get_custom_border_type_options(),
				'selectors' => [
					'{{WRAPPER}}' => '--buttons-border-type: {{VALUE}};',
				],
				'separator' => 'before',
			]
		);

		$this->add_responsive_control(
			'order_details_button_border_width',
			[
				'label' => esc_html__( 'Width', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					'{{WRAPPER}} .shop_table .button, {{WRAPPER}} .order-again .button, {{WRAPPER}} .woocommerce-pagination .button' => 'border-width: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
				'condition' => [
					'order_details_button_border_type!' => 'none',
				],
			]
		);

		$this->add_control(
			'order_details_button_border_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} ' => '--buttons-border-color: {{VALUE}};',
				],
				'condition' => [
					'order_details_button_border_type!' => 'none',
				],
			]
		);

		$this->add_responsive_control(
			'order_details_button_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					'{{WRAPPER}}' => '--button-border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'order_details_button_padding',
			[
				'label' => esc_html__( 'Padding', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em' ],
				'selectors' => [
					'{{WRAPPER}}' => '--button-padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();
	}

	/**
	 * Init Gettext Modifications
	 *
	 * Sets the `$gettext_modifications` property used with the `filter_gettext()` in the extended Base_Widget.
	 *
	 * @since 3.5.0
	 */
	protected function init_gettext_modifications() {
		$instance = $this->get_settings_for_display();

		$this->gettext_modifications = [
			'Order number:' => isset( $instance['payment_details_number'] ) ? $instance['payment_details_number'] : '',
			'Date:' => isset( $instance['payment_details_date'] ) ? $instance['payment_details_date'] : '',
			'Email:' => isset( $instance['payment_details_email'] ) ? $instance['payment_details_email'] : '',
			'Total:' => isset( $instance['payment_details_total'] ) ? $instance['payment_details_total'] : '',
			'Payment method:' => isset( $instance['payment_details_payment'] ) ? $instance['payment_details_payment'] : '',
			'Our bank details' => isset( $instance['bank_details_text'] ) ? $instance['bank_details_text'] : '',
			'Order details' => isset( $instance['order_summary_text'] ) ? $instance['order_summary_text'] : '',
			'Billing address' => isset( $instance['billing_details_text'] ) ? $instance['billing_details_text'] : '',
			'Shipping address' => isset( $instance['shipping_details_text'] ) ? $instance['shipping_details_text'] : '',
			'Downloads' => isset( $instance['downloads_text'] ) ? $instance['downloads_text'] : '',
		];
	}

	/**
	 * Modify Order Received Text.
	 *
	 * @since 3.5.0
	 *
	 * @param $text
	 * @return string
	 */
	public function modify_order_received_text( $text ) {
		$instance = $this->get_settings_for_display();

		if ( isset( $instance['confirmation_message_text'] ) ) {
			$text = $instance['confirmation_message_text'];
		}

		return $text;
	}

	public function get_modified_order_id() {
		return $this->order_id;
	}

	public function get_modified_order_key() {
		return $this->order_key;
	}

	protected function render() {
		$is_editor = Plugin::elementor()->editor->is_edit_mode();
		$is_preview = Module::is_preview();

		if ( $is_editor || $is_preview ) {
			$this->set_preview_order();

			add_filter( 'woocommerce_thankyou_order_id', [ $this, 'get_modified_order_id' ] );
			add_filter( 'woocommerce_thankyou_order_key', [ $this, 'get_modified_order_key' ] );

			/**
			 * The action `template_redirect` is not run during the re-loading of the Widget and as a result the
			 * `wc_template_redirect` function is not run which is responsible for loading the following, so we
			 * must load them ourselves.
			 */
			WC()->payment_gateways();
			WC()->shipping();
		}

		/*
		 * Add actions & filters before displaying our Widget.
		 */
		add_filter( 'gettext', [ $this, 'filter_gettext' ], 20, 3 );
		add_filter( 'woocommerce_thankyou_order_received_text', [ $this, 'modify_order_received_text' ] );

		/**
		 * Display our Widget.
		 */
		global $wp;
		if ( isset( $wp->query_vars['order-received'] ) && wc_get_order( intval( $wp->query_vars['order-received'] ) ) ) {
			echo do_shortcode( '[woocommerce_checkout]' );
		} elseif ( $is_editor || $is_preview ) {
			$this->no_order_notice();
		}

		/*
		 * Remove actions & filters after displaying our Widget.
		 */
		remove_filter( 'gettext', [ $this, 'filter_gettext' ], 20 );
		remove_filter( 'woocommerce_thankyou_order_received_text', [ $this, 'modify_order_received_text' ] );

		if ( $is_editor || $is_preview ) {
			remove_filter( 'woocommerce_thankyou_order_id', [ $this, 'get_modified_order_id' ] );
			remove_filter( 'woocommerce_thankyou_order_key', [ $this, 'get_modified_order_key' ] );
		}
	}

	public function no_order_notice() {
		?>
		<div class="woocommerce-error" role="alert">
			<?php echo esc_html__( 'You need at least one WooCommerce order to preview the order here.', 'elementor-pro' ); ?>
		</div>
		<?php
	}

	public function set_preview_order() {
		$instance = $this->get_settings_for_display();
		$order = false;

		if ( 'custom-order' === $instance['preview_order_type'] ) {
			$order = wc_get_order( $instance['preview_order_custom'] );
		}

		if ( ! $order ) {
			$latest_order = wc_get_orders( [
				'limit' => 1,
				'orderby'  => 'date',
				'order'    => 'DESC',
				'return'   => 'ids',
			] );

			if ( isset( $latest_order[0] ) ) {
				$order = wc_get_order( $latest_order[0] );
			}
		}

		if ( $order ) {
			global $wp;
			$wp->set_query_var( 'order-received', $order->get_id() );

			$this->order_id = $order->get_id();
			$this->order_key = $order->get_order_key();
		}
	}

	public function get_group_name() {
		return 'woocommerce';
	}
}
