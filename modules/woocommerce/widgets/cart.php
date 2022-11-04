<?php
namespace ElementorPro\Modules\Woocommerce\Widgets;

use ElementorPro\Modules\Woocommerce\Module;
use ElementorPro\Plugin;
use Elementor\Controls_Manager;
use Elementor\Group_Control_Box_Shadow;
use Elementor\Group_Control_Typography;
use Elementor\Group_Control_Text_Shadow;
use Elementor\Group_Control_Border;
use Elementor\Group_Control_Background;
use Elementor\Core\Breakpoints\Manager as Breakpoints_Manager;
use ElementorPro\Modules\QueryControl\Module as QueryControlModule;
use Elementor\Core\Base\Document;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Cart extends Base_Widget {

	public function get_name() {
		return 'woocommerce-cart';
	}

	public function get_title() {
		return esc_html__( 'Cart', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-woo-cart';
	}

	public function get_keywords() {
		return [ 'woocommerce', 'cart' ];
	}

	public function get_categories() {
		return [ 'woocommerce-elements' ];
	}

	public function get_script_depends() {
		return [
			'wc-cart',
			'selectWoo',
		];
	}

	public function get_style_depends() {
		return [ 'select2' ];
	}

	protected function register_controls() {
		$this->start_controls_section(
			'section_content',
			[
				'label' => esc_html__( 'General', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'cart_layout',
			[
				'label' => esc_html__( 'Layout', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'two-column' => esc_html__( 'Two columns', 'elementor-pro' ),
					'one-column' => esc_html__( 'One column', 'elementor-pro' ),
				],
				'default' => 'two-column',
				'prefix_class' => 'e-cart-layout-',
			]
		);

		$this->add_control(
			'sticky_right_column',
			[
				'label' => esc_html__( 'Sticky Right Column', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Yes', 'elementor-pro' ),
				'label_off' => esc_html__( 'No', 'elementor-pro' ),
				'description' => esc_html__( 'This option will allow the right column (e.g, Cart Totals) to be sticky while scrolling.', 'elementor-pro' ),
				'frontend_available' => true,
				'render_type' => 'none',
				'condition' => [
					'cart_layout!' => 'one-column',
				],
			]
		);

		$this->add_control(
			'sticky_right_column_offset',
			[
				'label' => esc_html__( 'Offset', 'elementor-pro' ),
				'type' => Controls_Manager::NUMBER,
				'frontend_available' => true,
				'conditions' => [
					'relation' => 'and',
					'terms' => [
						[
							'name' => 'sticky_right_column',
							'operator' => '!==',
							'value' => '',
						],
						[
							'name' => 'cart_layout',
							'operator' => '!==',
							'value' => 'one-column',
						],
					],
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_order_summary',
			[
				'label' => esc_html__( 'Order Summary', 'elementor-pro' ),
				'condition' => [
					'update_cart_automatically' => '',
				],
			]
		);

		$this->add_control(
			'update_cart_button_heading',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Update Cart Button', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'update_cart_button_text',
			[
				'label' => esc_html__( 'Text', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
				],
				'placeholder' => esc_html__( 'Update Cart', 'elementor-pro' ),
				'default' => esc_html__( 'Update Cart', 'elementor-pro' ),
			]
		);

		$this->add_responsive_control(
			'update_cart_button_alignment',
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
					'justify' => [
						'title' => esc_html__( 'Justify', 'elementor-pro' ),
						'icon' => 'eicon-text-align-justify',
					],
				],
				'selectors' => [
					'{{WRAPPER}} .woocommerce-cart-form' => '{{VALUE}}',
				],
				'selectors_dictionary' => [
					'start' => '--update-cart-button-alignment: start; --update-cart-button-width: auto;',
					'center' => '--update-cart-button-alignment: center; --update-cart-button-width: auto;',
					'end' => '--update-cart-button-alignment: end; --update-cart-button-width: auto;',
					'justify' => '--update-cart-button-alignment: justify; --update-cart-button-width: 100%;',
				],
			]
		);

		$this->end_controls_section();

		if ( $this->is_wc_feature_active( 'coupons' ) ) {

			$this->start_controls_section(
				'section_coupon',
				[
					'label' => esc_html__( 'Coupon', 'elementor-pro' ),
				]
			);

			$this->add_control(
				'section_coupon_display',
				[
					'label' => esc_html__( 'Coupon', 'elementor-pro' ),
					'type' => Controls_Manager::SWITCHER,
					'label_on' => esc_html__( 'Show', 'elementor-pro' ),
					'label_off' => esc_html__( 'Hide', 'elementor-pro' ),
					'default' => 'yes',
				]
			);

			$this->add_control(
				'apply_coupon_heading',
				[
					'type' => Controls_Manager::HEADING,
					'label' => esc_html__( 'Apply Coupon Button', 'elementor-pro' ),
					'condition' => [
						'section_coupon_display' => 'yes',
					],
				]
			);

			$this->add_control(
				'apply_coupon_button_text',
				[
					'label' => esc_html__( 'Text', 'elementor-pro' ),
					'type' => Controls_Manager::TEXT,
					'dynamic' => [
						'active' => true,
					],
					'placeholder' => esc_html__( 'Apply coupon', 'elementor-pro' ),
					'default' => esc_html__( 'Apply coupon', 'elementor-pro' ),
					'condition' => [
						'section_coupon_display' => 'yes',
					],
				]
			);

			$this->add_responsive_control(
				'apply_coupon_button_alignment',
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
						'justify' => [
							'title' => esc_html__( 'Justify', 'elementor-pro' ),
							'icon' => 'eicon-text-align-justify',
						],
					],
					'selectors' => [
						'{{WRAPPER}} .coupon' => '{{VALUE}}',
					],
					'selectors_dictionary' => [
						'start' => '--apply-coupon-button-alignment: start; --apply-coupon-button-width: auto;',
						'center' => '--apply-coupon-button-alignment: center;  --apply-coupon-button-width: auto;',
						'end' => '--apply-coupon-button-alignment: end;  --apply-coupon-button-width: auto;',
						'justify' => '--apply-coupon-button-alignment: center; --apply-coupon-button-width: 100%;',
					],
					'condition' => [
						'section_coupon_display' => 'yes',
					],
				]
			);

			$this->add_control(
				'coupon_button_alignment_note',
				[
					'raw' => esc_html__( 'Note: This control will only affect screen sizes Tablet and below', 'elementor-pro' ),
					'type' => Controls_Manager::RAW_HTML,
					'content_classes' => 'elementor-descriptor',
					'condition' => [
						'section_coupon_display' => 'yes',
					],
				]
			);

			$this->end_controls_section();
		}

		$this->start_controls_section(
			'section_totals',
			[
				'label' => esc_html__( 'Totals', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'totals_section_title',
			[
				'label' => esc_html__( 'Section Title', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
				],
				'placeholder' => esc_html__( 'Cart Totals', 'elementor-pro' ),
				'default' => esc_html__( 'Cart Totals', 'elementor-pro' ),
			]
		);

		$this->add_responsive_control(
			'totals_section_title_alignment',
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
					'{{WRAPPER}}' => '--totals-title-alignment: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'update_shipping_button_heading',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Update Shipping Button', 'elementor-pro' ),
				'separator' => 'before',
			]
		);

		$this->add_control(
			'update_shipping_button_text',
			[
				'label' => esc_html__( 'Text', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
				],
				'placeholder' => esc_html__( 'Update', 'elementor-pro' ),
				'default' => esc_html__( 'Update', 'elementor-pro' ),
			]
		);

		$this->add_responsive_control(
			'update_shipping_button_alignment',
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
					'justify' => [
						'title' => esc_html__( 'Justify', 'elementor-pro' ),
						'icon' => 'eicon-text-align-justify',
					],
				],
				'selectors' => [
					'{{WRAPPER}} .shipping-calculator-form' => '{{VALUE}}',
				],
				'selectors_dictionary' => [
					'start' => '--update-shipping-button-alignment: start; --update-shipping-button-width: auto;',
					'center' => '--update-shipping-button-alignment: center;  --update-shipping-button-width: auto;',
					'end' => '--update-shipping-button-alignment: end;  --update-shipping-button-width: auto;',
					'justify' => '--update-shipping-button-alignment: center; --update-shipping-button-width: 100%;',
				],
			]
		);

		$this->add_control(
			'checkout_button_heading',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Checkout Button', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'checkout_button_text',
			[
				'label' => esc_html__( 'Text', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
				],
				'placeholder' => esc_html__( 'Proceed to Checkout', 'elementor-pro' ),
				'default' => esc_html__( 'Proceed to Checkout', 'elementor-pro' ),
			]
		);

		$this->add_responsive_control(
			'checkout_button_alignment',
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
					'justify' => [
						'title' => esc_html__( 'Justify', 'elementor-pro' ),
						'icon' => 'eicon-text-align-justify',
					],
				],
				'selectors' => [
					'{{WRAPPER}} .wc-proceed-to-checkout' => '{{VALUE}};',
				],
				'selectors_dictionary' => [
					'start' => '--place-order-title-alignment: flex-start; --checkout-button-width: fit-content;',
					'center' => '--place-order-title-alignment: center; --checkout-button-width: fit-content;',
					'end' => '--place-order-title-alignment: flex-end; --checkout-button-width: fit-content;',
					'justify' => '--place-order-title-alignment: stretch; --checkout-button-width: 100%;',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_additional_options',
			[
				'label' => esc_html__( 'Additional Options', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'update_cart_automatically',
			[
				'label' => esc_html__( 'Update Cart Automatically', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Yes', 'elementor-pro' ),
				'label_off' => esc_html__( 'No', 'elementor-pro' ),
				'selectors' => [
					'{{WRAPPER}}' => '{{VALUE}};',
				],
				'selectors_dictionary' => [
					'yes' => '--update-cart-automatically-display: none;',
				],
				'frontend_available' => true,
				'render_type' => 'template',
			]
		);

		$this->add_control(
			'update_cart_automatically_description',
			[
				'raw' => esc_html__( 'Changes to the cart will update automatically.', 'elementor-pro' ),
				'type' => Controls_Manager::RAW_HTML,
				'content_classes' => 'elementor-descriptor',
			]
		);

		$this->add_control(
			'additional_template_switch',
			[
				'label' => esc_html__( 'Customize empty cart', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Yes', 'elementor-pro' ),
				'label_off' => esc_html__( 'No', 'elementor-pro' ),
				'return_value' => 'active',
				'default' => '',
				'render_type' => 'template',
				'prefix_class' => 'e-cart-empty-template-',
			]
		);

		$this->add_control(
			'additional_template_description',
			[
				'raw' => sprintf(
					/* translators: 1: Saved templates link opening tag, 2: Link closing tag. */
					esc_html__( 'Replaces the default WooCommerce Empty Cart screen with a custom template. (Don’t have one? Head over to %1$sSaved Templates%2$s)', 'elementor-pro' ),
					sprintf( '<a href="%s" target="_blank">', admin_url( 'edit.php?post_type=elementor_library&tabs_group=library#add_new' ) ),
					'</a>'
				),
				'type' => Controls_Manager::RAW_HTML,
				'content_classes' => 'elementor-descriptor elementor-descriptor-subtle',
				'condition' => [
					'additional_template_switch' => 'active',
				],
			]
		);

		$this->add_control(
			'additional_template_select_heading',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Choose template', 'elementor-pro' ),
				'condition' => [
					'additional_template_switch' => 'active',
				],
			]
		);

		$document_types = Plugin::elementor()->documents->get_document_types( [
			'show_in_library' => true,
		] );

		$this->add_control(
			'additional_template_select',
			[
				'type' => QueryControlModule::QUERY_CONTROL_ID,
				'label_block' => true,
				'show_label' => false,
				'autocomplete' => [
					'object' => QueryControlModule::QUERY_OBJECT_LIBRARY_TEMPLATE,
					'query' => [
						'meta_query' => [
							[
								'key' => Document::TYPE_META_KEY,
								'value' => array_keys( $document_types ),
								'compare' => 'IN',
							],
						],
					],
				],
				'frontend_available' => true,
				'condition' => [
					'additional_template_switch' => 'active',
				],
				'render_type' => 'template',
			]
		);

		$this->add_control(
			'edit_button',
			[
				'raw' => sprintf( '<a href="#" target="_blank" class="elementor-button elementor-button-default elementor-edit-template" style="margin-top:0px;"><i class="eicon-pencil"> %s</i></a>', esc_html__( 'Edit Template', 'elementor-pro' ) ),
				'type' => \Elementor\Controls_Manager::RAW_HTML,
				'content_classes' => 'elementor-edit-template-wrapper',
				'condition' => [
					'additional_template_switch' => 'active',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_cart_tabs_style',
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
				'name' => 'section_normal_box_shadow',
				'label' => esc_html__( 'Box Shadow', 'elementor-pro' ),
				'selector' => '{{WRAPPER}} .e-cart-section',
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
				'separator' => 'before',
			]
		);

		$this->add_responsive_control(
			'sections_border_width',
			[
				'label' => esc_html__( 'Width', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					'{{WRAPPER}} .e-cart-section' => 'border-width: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
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
			'sections_margin',
			[
				'label' => esc_html__( 'Margin', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					'{{WRAPPER}}' => '--sections-margin: {{BOTTOM}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_cart_tabs_typography',
			[
				'label' => esc_html__( 'Typography', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'sections_typography',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Titles', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'sections_title_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--sections-title-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'sections_titles_typography',
				'selector' => '{{WRAPPER}} .cart_totals h2',
			]
		);

		$this->add_group_control(
			Group_Control_Text_Shadow::get_type(),
			[
				'name' => 'sections_titles_text_shadow',
				'label' => esc_html__( 'Text Shadow', 'elementor-pro' ),
				'selector' => '{{WRAPPER}} .cart_totals h2',
			]
		);

		$this->add_responsive_control(
			'sections_title_spacing',
			[
				'label' => esc_html__( 'Spacing', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'default' => [ 'px' => 0 ],
				'selectors' => [
					'{{WRAPPER}}' => '--sections-title-spacing: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'sections_descriptions_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Descriptions', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'sections_descriptions_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} ' => '--sections-descriptions-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'sections_descriptions_typography',
				'selector' => '{{WRAPPER}} .e-cart-content, {{WRAPPER}} .woocommerce-shipping-destination, {{WRAPPER}} .shipping-calculator-button',
			]
		);

		$this->add_responsive_control(
			'sections_descriptions_spacing',
			[
				'label' => esc_html__( 'Spacing', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'default' => [ 'px' => 0 ],
				'selectors' => [
					'{{WRAPPER}}' => '--sections-descriptions-spacing: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'sections_links_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Links', 'elementor-pro' ),
			]
		);

		$this->start_controls_tabs( 'links_colors' );

		$this->start_controls_tab( 'links_normal_colors', [ 'label' => esc_html__( 'Normal', 'elementor-pro' ) ] );

		$this->add_control(
			'links_normal_color',
			[
				'label' => esc_html__( 'Link Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--links-normal-color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab( 'links_hover_colors', [ 'label' => esc_html__( 'Hover', 'elementor-pro' ) ] );

		$this->add_control(
			'links_hover_color',
			[
				'label' => esc_html__( 'Link Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--links-hover-color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->add_control(
			'sections_radio_buttons_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Radio Buttons', 'elementor-pro' ),
				'separator' => 'before',
			]
		);

		$this->add_control(
			'sections_radio_buttons_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--sections-radio-buttons-color: {{VALUE}}',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'sections_radio_buttons_typography',
				'selector' => '{{WRAPPER}} #shipping_method li label',
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_cart_tabs_forms',
			[
				'label' => esc_html__( 'Forms', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_responsive_control(
			'forms_rows_gap',
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
					'{{WRAPPER}}' => '--forms-rows-gap: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'forms_field_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Field', 'elementor-pro' ),
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'forms_field_typography',
				'selector' => '{{WRAPPER}} .coupon .input-text, {{WRAPPER}} .cart-collaterals .input-text, {{WRAPPER}} select, {{WRAPPER}} .select2-selection--single',
			]
		);

		$this->start_controls_tabs( 'forms_fields_styles' );

		$this->start_controls_tab( 'forms_fields_normal_styles', [ 'label' => esc_html__( 'Normal', 'elementor-pro' ) ] );

		$this->add_control(
			'forms_fields_normal_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--forms-fields-normal-color: {{VALUE}};',
					'.e-woo-select2-wrapper .select2-results__option' => 'color: {{VALUE}};',
					// style select2 arrow
					'{{WRAPPER}} .select2-container--default .select2-selection--single .select2-selection__arrow b' => 'border-color: {{VALUE}} transparent transparent transparent;',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => 'forms_fields_normal_background',
				'selector' => '{{WRAPPER}} .coupon .input-text, {{WRAPPER}} .e-cart-totals .input-text, {{WRAPPER}} select, {{WRAPPER}} .select2-selection--single',
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'forms_fields_normal_box_shadow',
				'label' => esc_html__( 'Box Shadow', 'elementor-pro' ),
				'selector' => '{{WRAPPER}} .coupon .input-text, {{WRAPPER}} .e-cart-totals .input-text, {{WRAPPER}} select, {{WRAPPER}} .select2-selection--single',
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab( 'forms_fields_focus_styles', [ 'label' => esc_html__( 'Focus', 'elementor-pro' ) ] );

		$this->add_control(
			'forms_fields_focus_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--forms-fields-focus-color: {{VALUE}}',
					'.e-woo-select2-wrapper .select2-results__option:focus' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => 'forms_fields_focus_background',
				'selector' => '{{WRAPPER}} .coupon .input-text:focus, {{WRAPPER}} .e-cart-totals .input-text:focus, {{WRAPPER}} select:focus, {{WRAPPER}} .select2-selection--single:focus',
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'forms_fields_focus_box_shadow',
				'label' => esc_html__( 'Box Shadow', 'elementor-pro' ),
				'selector' => '{{WRAPPER}} .coupon .input-text:focus, {{WRAPPER}} .e-cart-totals .input-text:focus, {{WRAPPER}} select:focus, {{WRAPPER}} .select2-selection--single:focus',
			]
		);

		$this->add_control(
			'forms_fields_focus_border_color',
			[
				'label' => esc_html__( 'Border Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--forms-fields-focus-border-color: {{VALUE}}',
				],
				'condition' => [
					'forms_fields_border_border!' => '',
				],
			]
		);

		$this->add_control(
			'forms_fields_focus_transition_duration',
			[
				'label' => esc_html__( 'Transition Duration', 'elementor-pro' ) . ' (ms)',
				'type' => Controls_Manager::SLIDER,
				'selectors' => [
					'{{WRAPPER}}' => '--forms-fields-focus-transition-duration: {{SIZE}}ms',
				],
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

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name' => 'forms_fields_border',
				'selector' => '{{WRAPPER}} .coupon .input-text, {{WRAPPER}} .cart-collaterals .input-text, {{WRAPPER}} select, {{WRAPPER}} .select2-selection--single',
				'separator' => 'before',
			]
		);

		$this->add_responsive_control(
			'forms_fields_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					'{{WRAPPER}}' => '--forms-fields-border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'forms_fields_padding',
			[
				'label' => esc_html__( 'Padding', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					'{{WRAPPER}} ' => '--forms-fields-padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
					// style select2
					'{{WRAPPER}} .select2-container--default .select2-selection--single .select2-selection__rendered' => 'line-height: calc( ({{TOP}}{{UNIT}}*2) + 16px ); padding-left: {{LEFT}}{{UNIT}}; padding-right: {{RIGHT}}{{UNIT}};',
					'{{WRAPPER}} .select2-container--default .select2-selection--single .select2-selection__arrow' => 'height: calc( ({{TOP}}{{UNIT}}*2) + 16px ); right: {{RIGHT}}{{UNIT}};',
					'{{WRAPPER}} .select2-container--default .select2-selection--single' => 'height: auto;',
				],
				'separator' => 'after',
			]
		);

		$this->add_control(
			'forms_button_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Buttons', 'elementor-pro' ),
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'forms_button_typography',
				'selector' => '{{WRAPPER}} .shop_table .button',
			]
		);

		$this->add_group_control(
			Group_Control_Text_Shadow::get_type(),
			[
				'name' => 'forms_button_text_shadow',
				'label' => esc_html__( 'Text Shadow', 'elementor-pro' ),
				'selector' => '{{WRAPPER}} .shop_table .button',
			]
		);

		$this->start_controls_tabs( 'forms_buttons_styles' );

		$this->start_controls_tab( 'forms_buttons_normal_styles', [ 'label' => esc_html__( 'Normal', 'elementor-pro' ) ] );

		$this->add_control(
			'forms_buttons_normal_text_color',
			[
				'label' => esc_html__( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--forms-buttons-normal-text-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => 'forms_buttons_normal_background',
				'selector' => '{{WRAPPER}} .shop_table .button',
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'forms_buttons_normal_box_shadow',
				'label' => esc_html__( 'Box Shadow', 'elementor-pro' ),
				'selector' => '{{WRAPPER}} .shop_table .button',
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab( 'forms_buttons_hover_styles', [ 'label' => esc_html__( 'Hover', 'elementor-pro' ) ] );

		$this->add_control(
			'forms_buttons_hover_text_color',
			[
				'label' => esc_html__( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--forms-buttons-hover-text-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => 'forms_buttons_hover_background',
				'selector' => '{{WRAPPER}} .shop_table .button:hover, {{WRAPPER}} .shop_table .button:disabled[disabled]:hover',
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'forms_buttons_focus_box_shadow',
				'label' => esc_html__( 'Box Shadow', 'elementor-pro' ),
				'selector' => '{{WRAPPER}} .shop_table .button:hover',
			]
		);

		$this->add_control(
			'forms_buttons_hover_border_color',
			[
				'label' => esc_html__( 'Border Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--forms-buttons-hover-border-color: {{VALUE}}',
				],
				'condition' => [
					'forms_buttons_border_type!' => 'none',
				],
			]
		);

		$this->add_control(
			'forms_buttons_hover_transition_duration',
			[
				'label' => esc_html__( 'Transition Duration', 'elementor-pro' ) . ' (ms)',
				'type' => Controls_Manager::SLIDER,
				'selectors' => [
					'{{WRAPPER}}' => '--forms-buttons-hover-transition-duration: {{SIZE}}ms',
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
			'forms_buttons_hover_animation',
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
			'forms_buttons_border_type',
			[
				'label' => esc_html__( 'Border Type', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => $this->get_custom_border_type_options(),
				'selectors' => [
					'{{WRAPPER}}' => '--forms-buttons-border-type: {{VALUE}};',
				],
				'separator' => 'before',
			]
		);

		$this->add_responsive_control(
			'forms_buttons_border_width',
			[
				'label' => esc_html__( 'Width', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					'{{WRAPPER}} .shop_table .button' => 'border-width: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
				'condition' => [
					'forms_buttons_border_type!' => 'none',
				],
			]
		);

		$this->add_control(
			'forms_buttons_border_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--forms-buttons-border-color: {{VALUE}};',
				],
				'condition' => [
					'forms_buttons_border_type!' => 'none',
				],
			]
		);

		$this->add_responsive_control(
			'forms_buttons_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					'{{WRAPPER}}' => '--forms-buttons-border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'forms_buttons_padding',
			[
				'label' => esc_html__( 'Padding', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em' ],
				'selectors' => [
					'{{WRAPPER}}' => '--forms-buttons-padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}}; --forms-buttons-width: auto;',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'tabs_order_summary',
			[
				'label' => esc_html__( 'Order Summary', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_responsive_control(
			'order_summary_rows_gap',
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
					'{{WRAPPER}}' => '--order-summary-rows-gap-top: calc( {{SIZE}}{{UNIT}}/2 ); --order-summary-rows-gap-bottom: calc( {{SIZE}}{{UNIT}}/2 );',
				],
				'separator' => 'after',
			]
		);

		$this->add_control(
			'order_summary_titles_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Titles', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'order_summary_title_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .woocommerce-cart-form' => '--order-summary-title-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'order_summary_title_typography',
				'selector' => '{{WRAPPER}} .e-shop-table .cart th, {{WRAPPER}} .e-shop-table .cart td:before',
			]
		);

		$this->add_group_control(
			Group_Control_Text_Shadow::get_type(),
			[
				'name' => 'order_summary_title_text_shadow',
				'label' => esc_html__( 'Text Shadow', 'elementor-pro' ),
				'selector' => '{{WRAPPER}} .e-shop-table .cart th, {{WRAPPER}} .e-shop-table .cart td:before',
			]
		);

		$this->add_responsive_control(
			'order_summary_title_spacing',
			[
				'label' => esc_html__( 'Spacing', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'default' => [ 'px' => 0 ],
				'selectors' => [
					'{{WRAPPER}}' => '--order-summary-title-spacing: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'order_summary_items_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Items', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'order_summary_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--order-summary-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'order_summary_items_typography',
				'selector' => '{{WRAPPER}} .cart td span, {{WRAPPER}} .cart td, {{WRAPPER}} .input-text.qty',
			]
		);

		$this->add_control(
			'order_summary_variations_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Variations', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'order_summary_variations_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--order-summary-variations-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'order_summary_variations_typography',
				'selector' => '{{WRAPPER}} .product-name .variation',
			]
		);

		$this->add_control(
			'order_summary_product_link_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Product Link', 'elementor-pro' ),
			]
		);

		$this->start_controls_tabs( 'order_summary' );

		$this->start_controls_tab( 'order_summary_normal', [ 'label' => esc_html__( 'Normal', 'elementor-pro' ) ] );

		$this->add_control(
			'product_link_normal_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--product-link-normal-color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab( 'order_summary_hover', [ 'label' => esc_html__( 'Hover', 'elementor-pro' ) ] );

		$this->add_control(
			'product_link_hover_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--product-link-hover-color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->add_control(
			'order_summary_divider_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Dividers', 'elementor-pro' ),
				'separator' => 'before',
			]
		);

		$this->add_control(
			'order_summary_items_divider_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--order-summary-items-divider-color: {{VALUE}};',
				],
			]
		);

		$this->add_responsive_control(
			'order_summary_items_divider_weight',
			[
				'label' => esc_html__( 'Weight', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px' ],
				'selectors' => [
					'{{WRAPPER}}' => '--order-summary-items-divider-weight: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'order_summary_quantity_border_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Quantity Borders', 'elementor-pro' ),
				'separator' => 'before',
			]
		);

		$this->add_control(
			'order_summary_quantity_border_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--order-summary-quantity-border-color: {{VALUE}};',
				],
			]
		);

		$this->add_responsive_control(
			'order_summary_quantity_border_weight',
			[
				'label' => esc_html__( 'Weight', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px' ],
				'selectors' => [
					'{{WRAPPER}}' => '--order-summary-quantity-border-weight: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'order_summary_remove_icon_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Remove icon', 'elementor-pro' ),
				'separator' => 'before',
			]
		);

		$this->start_controls_tabs( 'order_summary_remove_icon' );

		$this->start_controls_tab( 'order_summary_remove_icon_normal', [ 'label' => esc_html__( 'Normal', 'elementor-pro' ) ] );

		$this->add_control(
			'order_summary_remove_icon_normal_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--order-summary-remove-icon-normal-color: {{VALUE}}',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab( 'order_summary_remove_icon_hover', [ 'label' => esc_html__( 'Hover', 'elementor-pro' ) ] );

		$this->add_control(
			'order_summary_remove_icon_hover_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--order-summary-remove-icon-hover-color: {{VALUE}}',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->end_controls_section();

		$this->start_controls_section(
			'section_cart_totals',
			[
				'label' => esc_html__( 'Totals', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_responsive_control(
			'totals_rows_gap',
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
					'{{WRAPPER}}' => '--totals-rows-gap-top: calc( {{SIZE}}{{UNIT}}/2 ); --totals-rows-gap-bottom: calc( {{SIZE}}{{UNIT}}/2 );',
				],
				'separator' => 'after',
			]
		);

		$this->add_control(
			'totals_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Titles & Totals', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'totals_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--totals-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'totals_typography',
				'selector' => '{{WRAPPER}} .cart_totals .shop_table td:before, {{WRAPPER}} .cart_totals .shop_table td .woocommerce-Price-amount',
			]
		);

		$this->add_control(
			'totals_divider_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Divider Total', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'totals_divider_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--totals-divider-color: {{VALUE}};',
				],
			]
		);

		$this->add_responsive_control(
			'totals_divider_weight',
			[
				'label' => esc_html__( 'Weight', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em' ],
				'selectors' => [
					'{{WRAPPER}}' => '--totals-divider-weight: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_cart_tabs_checkout_button',
			[
				'label' => esc_html__( 'Checkout Button', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'checkout_button_typography',
				'selector' => '{{WRAPPER}} .checkout-button',
			]
		);

		$this->add_group_control(
			Group_Control_Text_Shadow::get_type(),
			[
				'name' => 'checkout_button_text_shadow',
				'label' => esc_html__( 'Text Shadow', 'elementor-pro' ),
				'selector' => '{{WRAPPER}} .checkout-button',
			]
		);

		$this->start_controls_tabs( 'checkout_button_styles' );

		$this->start_controls_tab( 'checkout_button_normal_styles', [ 'label' => esc_html__( 'Normal', 'elementor-pro' ) ] );

		$this->add_control(
			'checkout_button_normal_text_color',
			[
				'label' => esc_html__( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--checkout-button-normal-text-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => 'checkout_button_normal_background',
				'selector' => '{{WRAPPER}} .woocommerce .wc-proceed-to-checkout .checkout-button',
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'checkout_button_normal_box_shadow',
				'label' => esc_html__( 'Box Shadow', 'elementor-pro' ),
				'selector' => '{{WRAPPER}} .checkout-button',
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab( 'checkout_button_hover_styles', [ 'label' => esc_html__( 'Hover', 'elementor-pro' ) ] );

		$this->add_control(
			'checkout_button_hover_text_color',
			[
				'label' => esc_html__( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--checkout-button-hover-text-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name' => 'checkout_button_hover_background',
				'selector' => '{{WRAPPER}} .woocommerce .wc-proceed-to-checkout .checkout-button:hover',
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'checkout_button_hover_box_shadow',
				'label' => esc_html__( 'Box Shadow', 'elementor-pro' ),
				'selector' => '{{WRAPPER}} .checkout-button:hover',
			]
		);

		$this->add_control(
			'checkout_button_hover_border_color',
			[
				'label' => esc_html__( 'Border Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--checkout-button-hover-border-color: {{VALUE}}',
				],
				'condition' => [
					'checkout_button_border_border!' => '',
				],
			]
		);

		$this->add_control(
			'checkout_button_hover_transition_duration',
			[
				'label' => esc_html__( 'Transition Duration', 'elementor-pro' ) . ' (ms)',
				'type' => Controls_Manager::SLIDER,
				'selectors' => [
					'{{WRAPPER}}' => '--checkout-button-hover-transition-duration: {{SIZE}}ms',
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
			'checkout_button_hover_animation',
			[
				'label' => esc_html__( 'Hover Animation', 'elementor-pro' ),
				'type' => Controls_Manager::HOVER_ANIMATION,
				'frontend_available' => true,
				'render_type' => 'template',
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name' => 'checkout_button_border',
				'selector' => '{{WRAPPER}} .checkout-button',
				'separator' => 'before',
			]
		);

		$this->add_responsive_control(
			'checkout_button_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					'{{WRAPPER}}' => '--checkout-button-border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'checkout_button_padding',
			[
				'label' => esc_html__( 'Padding', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					'{{WRAPPER}}' => '--checkout-button-padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}}; --checkout-button-width: fit-content;',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_cart_tabs_customize',
			[
				'label' => esc_html__( 'Customize', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$customize_options = [];

		$customize_options += [
			'customize_order_summary' => esc_html__( 'Order Summary', 'elementor-pro' ),
		];

		if ( $this->is_wc_feature_active( 'coupons' ) ) {
			$customize_options += [
				'customize_coupon' => esc_html__( 'Coupon', 'elementor-pro' ),
			];
		}

		$customize_options += [
			'customize_totals' => esc_html__( 'Totals', 'elementor-pro' ),
		];

		$this->add_control(
			'section_cart_show_customize_elements',
			[
				'label' => esc_html__( 'Select sections of the cart to customize:', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT2,
				'multiple' => true,
				'options' => $customize_options,
				'render_type' => 'ui',
				'label_block' => true,
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_cart_tabs_customize_order_summary',
			[
				'label' => esc_html__( 'Customize: Order Summary', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
				'condition' => [
					'section_cart_show_customize_elements' => 'customize_order_summary',
				],
			]
		);

		$this->add_control(
			'order_summary_section_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Section', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'order_summary_section_background_color',
			[
				'label' => esc_html__( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .e-shop-table' => '--sections-background-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'order_summary_section_normal_box_shadow',
				'label' => esc_html__( 'Box Shadow', 'elementor-pro' ),
				'selector' => '{{WRAPPER}} .e-shop-table',
				'separator' => 'after',
			]
		);

		$this->add_control(
			'order_summary_section_border_type',
			[
				'label' => esc_html__( 'Border Type', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => $this->get_custom_border_type_options(),
				'selectors' => [
					'{{WRAPPER}} .e-shop-table' => '--sections-border-type: {{VALUE}};',
				],
				'separator' => 'before',
			]
		);

		$this->add_responsive_control(
			'order_summary_section_border_width',
			[
				'label' => esc_html__( 'Border Width', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					'{{WRAPPER}} .e-shop-table' => 'border-width: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
				'condition' => [
					'order_summary_section_border_type!' => 'none',
				],
			]
		);

		$this->add_control(
			'order_summary_section_border_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .e-shop-table' => '--sections-border-color: {{VALUE}};',
				],
				'condition' => [
					'order_summary_section_border_type!' => 'none',
				],
			]
		);

		$this->add_responsive_control(
			'order_summary_section_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					'{{WRAPPER}} .e-shop-table' => '--sections-border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'order_summary_section_padding',
			[
				'label' => esc_html__( 'Padding', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					'{{WRAPPER}} .e-shop-table' => '--sections-padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'order_summary_section_margin',
			[
				'label' => esc_html__( 'Margin', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					'{{WRAPPER}} .e-shop-table' => '--sections-margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
				'separator' => 'after',
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_cart_tabs_customize_totals',
			[
				'label' => esc_html__( 'Customize: Totals', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
				'condition' => [
					'section_cart_show_customize_elements' => 'customize_totals',
				],
			]
		);

		$this->add_control(
			'customize_totals_section_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Section', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'sections_totals_background_color',
			[
				'label' => esc_html__( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .e-cart-totals' => '--sections-background-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'totals_section_normal_box_shadow',
				'label' => esc_html__( 'Box Shadow', 'elementor-pro' ),
				'selector' => '{{WRAPPER}} .e-cart-totals',
			]
		);

		$this->add_control(
			'totals_section_border_type',
			[
				'label' => esc_html__( 'Border Type', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => $this->get_custom_border_type_options(),
				'selectors' => [
					'{{WRAPPER}} .e-cart-totals' => '--sections-border-type: {{VALUE}};',
				],
				'separator' => 'before',
			]
		);

		$this->add_responsive_control(
			'totals_section_border_width',
			[
				'label' => esc_html__( 'Border Width', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					'{{WRAPPER}} .e-cart-totals' => 'border-width: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
				'condition' => [
					'totals_section_border_type!' => 'none',
				],
			]
		);

		$this->add_control(
			'totals_section_border_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .e-cart-totals' => '--sections-border-color: {{VALUE}};',
				],
				'condition' => [
					'totals_section_border_type!' => 'none',
				],
			]
		);

		$this->add_responsive_control(
			'totals_section_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					'{{WRAPPER}} .e-cart-totals' => '--sections-border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'checkout_sections_padding',
			[
				'label' => esc_html__( 'Padding', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					'{{WRAPPER}} .e-cart-totals' => '--sections-padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'totals_section_margin',
			[
				'label' => esc_html__( 'Margin', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					'{{WRAPPER}} .e-cart-totals' => '--sections-margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
				'separator' => 'after',
			]
		);

		$this->add_control(
			'totals_section_titles_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Title', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'totals_section_titles_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .cart_totals' => '--sections-title-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'totals_section_titles_typography',
				'selector' => '{{WRAPPER}} .cart_totals h2',
			]
		);

		$this->add_group_control(
			Group_Control_Text_Shadow::get_type(),
			[
				'name' => 'totals_section_titles_text_shadow',
				'label' => esc_html__( 'Text Shadow', 'elementor-pro' ),
				'selector' => '{{WRAPPER}} .cart_totals h2',
				'separator' => 'after',
			]
		);

		$this->add_control(
			'totals_section_content_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Description', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'totals_section_content_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .e-cart-totals' => '--sections-descriptions-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'totals_section_content_typography',
				'selector' => '{{WRAPPER}} .e-cart-totals .e-cart-content, {{WRAPPER}} .e-cart-totals .woocommerce-shipping-destination, {{WRAPPER}} .e-cart-totals .shipping-calculator-button',
			]
		);

		$this->add_control(
			'totals_section_link_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Link', 'elementor-pro' ),
			]
		);

		$this->start_controls_tabs( 'totals_section_links_colors' );

		$this->start_controls_tab( 'totals_section_links_normal_colors', [ 'label' => esc_html__( 'Normal', 'elementor-pro' ) ] );

		$this->add_control(
			'totals_section_links_normal_color',
			[
				'label' => esc_html__( 'Link Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .e-cart-totals' => '--links-normal-color: {{VALUE}} !important;',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab( 'totals_section_links_hover_colors', [ 'label' => esc_html__( 'Hover', 'elementor-pro' ) ] );

		$this->add_control(
			'totals_section_links_hover_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .e-cart-totals' => '--links-hover-color: {{VALUE}} !important;',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->end_controls_section();

		$this->start_controls_section(
			'section_cart_tabs_customize_coupon',
			[
				'label' => esc_html__( 'Customize: Coupon', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
				'condition' => [
					'section_cart_show_customize_elements' => 'customize_coupon',
				],
			]
		);

		$this->add_control(
			'coupon_section_title',
			[
				'type' => Controls_Manager::HEADING,
				'label' => esc_html__( 'Section', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'customize_coupon_background_color',
			[
				'label' => esc_html__( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .coupon' => '--sections-background-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Box_Shadow::get_type(),
			[
				'name' => 'customize_coupon_section_normal_box_shadow',
				'label' => esc_html__( 'Box Shadow', 'elementor-pro' ),
				'selector' => '{{WRAPPER}} .coupon',
			]
		);

		$this->add_control(
			'customize_coupon_section_border_type',
			[
				'label' => esc_html__( 'Border Type', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => $this->get_custom_border_type_options(),
				'selectors' => [
					'{{WRAPPER}} .coupon' => '--sections-border-type: {{VALUE}};',
				],
				'separator' => 'before',
			]
		);

		$this->add_responsive_control(
			'customize_coupon_section_border_width',
			[
				'label' => esc_html__( 'Border Width', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					'{{WRAPPER}} .coupon' => 'border-width: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
				'condition' => [
					'customize_coupon_section_border_type!' => 'none',
				],
			]
		);

		$this->add_control(
			'customize_coupon_section_border_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .coupon' => '--sections-border-color: {{VALUE}};',
				],
				'condition' => [
					'customize_coupon_section_border_type!' => 'none',
				],
			]
		);

		$this->add_responsive_control(
			'customize_coupon_section_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					'{{WRAPPER}} .coupon' => '--sections-border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'customize_coupon_section_padding',
			[
				'label' => esc_html__( 'Padding', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					'{{WRAPPER}} .coupon' => '--sections-padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'customize_coupon_section_margin',
			[
				'label' => esc_html__( 'Margin', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					'{{WRAPPER}} .coupon' => '--sections-margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
					'{{WRAPPER}} .e-cart__container' => 'grid-row-gap: {{BOTTOM}}{{UNIT}};',
				],
				'separator' => 'after',
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
			'Update cart' => isset( $instance['update_cart_button_text'] ) ? $instance['update_cart_button_text'] : '',
			'Cart totals' => isset( $instance['totals_section_title'] ) ? $instance['totals_section_title'] : '',
			'Proceed to checkout' => isset( $instance['checkout_button_text'] ) ? $instance['checkout_button_text'] : '',
			'Update' => isset( $instance['update_shipping_button_text'] ) ? $instance['update_shipping_button_text'] : '',
			'Apply coupon' => isset( $instance['apply_coupon_button_text'] ) ? $instance['apply_coupon_button_text'] : '',
		];
	}

	/**
	 * Check if an Elementor template has been selected to display the empty cart notification
	 *
	 * @since 3.7.0
	 * @return boolean
	 */
	protected function has_empty_cart_template() {
		$additional_template_select = $this->get_settings_for_display( 'additional_template_select' );
		return ! empty( $additional_template_select ) && 0 < $additional_template_select;
	}

	/**
	 * Render Woocommerce Cart Coupon Form
	 *
	 * A custom function to render a coupon form on the Cart widget. The default WC coupon form
	 * was removed in this file's render() method.
	 *
	 * We are doing this in order to match the placement of the coupon form to the provided design.
	 *
	 * @since 3.5.0
	 */
	private function render_woocommerce_cart_coupon_form() {
		$settings = $this->get_settings_for_display();
		$button_classes = [ 'button', 'e-apply-coupon' ];
		if ( $settings['forms_buttons_hover_animation'] ) {
			$button_classes[] = 'elementor-animation-' . $settings['forms_buttons_hover_animation'];
		}
		$this->add_render_attribute(
			'button_coupon', [
				'class' => $button_classes,
				'name' => 'apply_coupon',
				'type' => 'submit',
			]
		);
		?>
		<div class="coupon e-cart-section shop_table">
			<div class="form-row coupon-col">
				<div class="coupon-col-start">
					<input type="text" name="coupon_code" class="input-text" id="coupon_code" value="" placeholder="<?php esc_attr_e( 'Coupon code', 'elementor-pro' ); ?>" />
				</div>
				<div class="coupon-col-end">
					<button <?php $this->print_render_attribute_string( 'button_coupon' ); ?> value="<?php esc_attr_e( 'Apply coupon', 'elementor-pro' ); ?>"><?php esc_attr_e( 'Apply coupon', 'elementor-pro' ); ?></button>
				</div>
				<?php do_action( 'woocommerce_cart_coupon' ); ?>
			</div>
		</div>
		<?php
	}

	public function hide_coupon_field_on_cart( $enabled ) {
		return is_cart() ? false : $enabled;
	}

	/**
	 * Woocommerce Before Cart
	 *
	 * Output containing elements. Callback function for the woocommerce_before_cart hook
	 *
	 * This eliminates the need for template overrides.
	 *
	 * @since 3.5.0
	 */
	public function woocommerce_before_cart() {
		?>
		<div class="e-cart__container">
						<!--open container-->
						<div class="e-cart__column e-cart__column-start">
							<!--open column-1-->
		<?php
	}

	/**
	 * Should Render Coupon
	 *
	 * Decide if the coupon form should be rendered.
	 * The coupon form should be rendered if:
	 * 1) The WooCommerce setting is enabled
	 * 2) And the Coupon Display toggle hasn't been set to 'no'
	 *
	 * @since 3.6.0
	 *
	 * @return boolean
	 */
	private function should_render_coupon() {
		$settings = $this->get_settings_for_display();
		$coupon_display_control = true;

		if ( '' === $settings['section_coupon_display'] ) {
			$coupon_display_control = false;
		}

		return wc_coupons_enabled() && $coupon_display_control;
	}

	/**
	 * Woocommerce Before Cart Table
	 *
	 * Output containing elements. Callback function for the woocommerce_before_cart_table hook
	 *
	 * This eliminates the need for template overrides.
	 *
	 * @since 3.5.0
	 */
	public function woocommerce_before_cart_table() {
		$section_classes = [ 'e-shop-table', 'e-cart-section' ];

		if ( ! $this->should_render_coupon() ) {
			$section_classes[] = 'e-cart-section--no-coupon';
		}

		$this->add_render_attribute(
			'before_cart_table', [
				'class' => $section_classes,
			]
		);
		?>
		<div <?php $this->print_render_attribute_string( 'before_cart_table' ); ?>>
						<!--open shop table div -->
		<?php
	}

	/**
	 * Woocommerce After Cart Table
	 *
	 * Output containing elements. Callback function for the woocommerce_after_cart_table hook
	 *
	 * This eliminates the need for template overrides.
	 *
	 * @since 3.5.0
	 */
	public function woocommerce_after_cart_table() {
		?>
						</div>
					<!--close shop table div -->
					<div class="e-clear"></div>
		<?php
		if ( $this->should_render_coupon() ) {
			$this->render_woocommerce_cart_coupon_form();
		}
	}

	/**
	 * Woocommerce Before Cart Collaterals
	 *
	 * Output containing elements. * Callback function for the woocommerce_before_cart_collaterals hook
	 *
	 * This eliminates the need for template overrides.
	 *
	 * @since 3.5.0
	 */
	public function woocommerce_before_cart_collaterals() {
		?>
						<!--close column-1-->
						</div>
						<div class="e-cart__column e-cart__column-end">
							<!--open column-2-->
								<div class="e-cart__column-inner e-sticky-right-column">
									<!--open column-inner-->
									<div class="e-cart-totals e-cart-section">
										<!--open cart-totals-->
		<?php
	}

	/**
	 * Woocommerce After Cart
	 *
	 * Output containing elements. Callback function for the woocommerce_after_cart hook.
	 *
	 * This eliminates the need for template overrides.
	 *
	 * @since 3.5.0
	 */
	public function woocommerce_after_cart() {
		?>
									<!--close cart-totals-->
									</div>
									<!--close column-inner-->
								</div>
							<!--close column-2-->
						</div>
						<!--close container-->
					</div>
		<?php
	}

	/**
	 * WooCommerce Get Remove URL.
	 *
	 * When in the Editor or (wp preview) and the uer clicks to remove an item from the cart, WooCommerce uses
	 * the`_wp_http_referer` url during the ajax call to generate the new cart html. So when we're in the Editor
	 * or (wp preview) we modify the `_wp_http_referer` to use the `get_wp_preview_url()` which will have
	 * the new cart content.
	 *
	 * @since 3.5.0
	 * @deprecated 3.7.0
	 *
	 * @param $url
	 * @return string
	 */
	public function woocommerce_get_remove_url( $url ) {
		Plugin::elementor()->modules_manager->get_modules( 'dev-tools' )->deprecation->deprecated_function( __METHOD__, '3.7.0' );

		$url_components = wp_parse_url( $url );

		if ( ! isset( $url_components['query'] ) ) {
			return $url;
		}

		$params = [];
		parse_str( html_entity_decode( $url_components['query'] ), $params );

		$params['_wp_http_referer'] = rawurlencode( Plugin::elementor()->documents->get_current()->get_wp_preview_url() );

		return add_query_arg( $params, get_site_url() );
	}

	/**
	 * WooCommerce Get Cart Url
	 *
	 * Used with the `woocommerce_get_cart_url`. This sets the url to the current page, so links like the `remove_url`
	 * wre set to the current page, and not the existing WooCommerce cart endpoint.
	 *
	 * @since 3.7.0
	 *
	 * @param $url
	 * @return string
	 */
	public function woocommerce_get_cart_url( $url ) {
		global $post;

		if ( ! $post ) {
			return $url;
		}

		if ( Module::is_preview() || Plugin::elementor()->editor->is_edit_mode() ) {
			return Plugin::elementor()->documents->get_current()->get_wp_preview_url();
		}

		return get_permalink( $post->ID );
	}

	/**
	 * The following disabling of cart coupon needs to be done this way so that
	 * we only disable the display of coupon interface in our cart widget and
	 * `wc_coupons_enabled()` can still be reliably used elsewhere.
	 */
	public function disable_cart_coupon() {
		add_filter( 'woocommerce_coupons_enabled', [ $this, 'cart_coupon_return_false' ], 90 );
	}
	public function enable_cart_coupon() {
		remove_filter( 'woocommerce_coupons_enabled', [ $this, 'cart_coupon_return_false' ], 90 );
	}
	public function cart_coupon_return_false() {
		return false;
	}

	/**
	 * Add Render Hooks
	 *
	 * Add actions & filters before displaying our widget.
	 *
	 * @since 3.7.0
	 */
	public function add_render_hooks() {
		$is_editor = Plugin::elementor()->editor->is_edit_mode();
		$is_preview = Module::is_preview();

		/**
		 * Add actions & filters before displaying our Widget.
		 */
		add_filter( 'gettext', [ $this, 'filter_gettext' ], 20, 3 );

		add_action( 'woocommerce_before_cart', [ $this, 'woocommerce_before_cart' ] );
		add_action( 'woocommerce_after_cart_table', [ $this, 'woocommerce_after_cart_table' ] );
		add_action( 'woocommerce_before_cart_table', [ $this, 'woocommerce_before_cart_table' ] );
		add_action( 'woocommerce_before_cart_collaterals', [ $this, 'woocommerce_before_cart_collaterals' ] );
		add_action( 'woocommerce_after_cart', [ $this, 'woocommerce_after_cart' ] );
		// The following disabling of cart coupon needs to be done this way so that
		// we only disable the display of coupon interface in our cart widget and
		// `wc_coupons_enabled()` can still be reliably used elsewhere.
		add_action( 'woocommerce_cart_contents', [ $this, 'disable_cart_coupon' ] );
		add_action( 'woocommerce_after_cart_contents', [ $this, 'enable_cart_coupon' ] );
		add_filter( 'woocommerce_get_cart_url', [ $this, 'woocommerce_get_cart_url' ] );

		if ( $this->has_empty_cart_template() ) {
			remove_action( 'woocommerce_cart_is_empty', 'wc_empty_cart_message', 10 );
			add_action( 'woocommerce_cart_is_empty', [ $this, 'display_empty_cart_template' ], 10 );
		}

		// Remove cross-sells in cart.
		remove_action( 'woocommerce_cart_collaterals', 'woocommerce_cross_sell_display' );
	}

	/**
	 * Remove Render Hooks
	 *
	 * Remove actions & filters after displaying our widget.
	 *
	 * @since 3.7.0
	 */
	public function remove_render_hooks() {
		remove_filter( 'gettext', [ $this, 'filter_gettext' ], 20 );

		remove_action( 'woocommerce_before_cart', [ $this, 'woocommerce_before_cart' ] );
		remove_action( 'woocommerce_after_cart_table', [ $this, 'woocommerce_after_cart_table' ] );
		remove_action( 'woocommerce_before_cart_table', [ $this, 'woocommerce_before_cart_table' ] );
		remove_action( 'woocommerce_before_cart_collaterals', [ $this, 'woocommerce_before_cart_collaterals' ] );
		remove_action( 'woocommerce_after_cart', [ $this, 'woocommerce_after_cart' ] );
		remove_filter( 'woocommerce_coupons_enabled', [ $this, 'hide_coupon_field_on_cart' ] );
		remove_filter( 'woocommerce_get_remove_url', [ $this, 'woocommerce_get_remove_url' ] );
		remove_action( 'woocommerce_cart_contents', [ $this, 'disable_cart_coupon' ] );
		remove_action( 'woocommerce_after_cart_contents', [ $this, 'enable_cart_coupon' ] );
		remove_action( 'woocommerce_get_cart_url', [ $this, 'woocommerce_get_cart_url' ] );
		add_action( 'woocommerce_cart_collaterals', 'woocommerce_cross_sell_display' );
		if ( $this->has_empty_cart_template() ) {
			add_action( 'woocommerce_cart_is_empty', 'wc_empty_cart_message', 10 );
		}
	}

	public function render() {
		// Add actions & filters before displaying our Widget.
		$this->add_render_hooks();

		// Display our Widget.
		if ( $this->has_empty_cart_template() && WC()->cart->get_cart_contents_count() === 0 ) {
			$template_id = intval( $this->get_settings_for_display( 'additional_template_select' ) );
			echo do_shortcode( '[elementor-template id="' . $template_id . '"]' );
		} else {
			echo do_shortcode( '[woocommerce_cart]' );
		}

		// Remove actions & filters after displaying our Widget.
		$this->remove_render_hooks();
	}

	public function get_group_name() {
		return 'woocommerce';
	}
}
