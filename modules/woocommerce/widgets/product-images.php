<?php
namespace ElementorPro\Modules\Woocommerce\Widgets;

use Elementor\Controls_Manager;
use Elementor\Group_Control_Border;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Product_Images extends Base_Widget {

	public function get_name() {
		return 'woocommerce-product-images';
	}

	public function get_title() {
		return esc_html__( 'Product Images', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-product-images';
	}

	public function get_keywords() {
		return [ 'woocommerce', 'shop', 'store', 'image', 'product', 'gallery', 'lightbox' ];
	}

	protected function register_controls() {

		$this->start_controls_section(
			'section_product_gallery_style',
			[
				'label' => esc_html__( 'Style', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'wc_style_warning',
			[
				'type' => Controls_Manager::RAW_HTML,
				'raw' => esc_html__( 'The style of this widget is often affected by your theme and plugins. If you experience any such issue, try to switch to a basic theme and deactivate related plugins.', 'elementor-pro' ),
				'content_classes' => 'elementor-panel-alert elementor-panel-alert-info',
			]
		);

		$this->add_control(
			'sale_flash',
			[
				'label' => esc_html__( 'Sale Flash', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Show', 'elementor-pro' ),
				'label_off' => esc_html__( 'Hide', 'elementor-pro' ),
				'render_type' => 'template',
				'return_value' => 'yes',
				'default' => 'yes',
				'prefix_class' => '',
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name' => 'image_border',
				'selector' => '.woocommerce {{WRAPPER}} .woocommerce-product-gallery__trigger + .woocommerce-product-gallery__wrapper,
				.woocommerce {{WRAPPER}} .flex-viewport, .woocommerce {{WRAPPER}} .flex-control-thumbs img',
				'separator' => 'before',
			]
		);

		$this->add_responsive_control(
			'image_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%' ],
				'selectors' => [
					'.woocommerce {{WRAPPER}} .woocommerce-product-gallery__trigger + .woocommerce-product-gallery__wrapper,
					.woocommerce {{WRAPPER}} .flex-viewport' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}}',
				],
			]
		);

		$this->add_control(
			'spacing',
			[
				'label' => esc_html__( 'Spacing', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em' ],
				'selectors' => [
					'.woocommerce {{WRAPPER}} .flex-viewport:not(:last-child)' => 'margin-bottom: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_control(
			'heading_thumbs_style',
			[
				'label' => esc_html__( 'Thumbnails', 'elementor-pro' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name' => 'thumbs_border',
				'selector' => '.woocommerce {{WRAPPER}} .flex-control-thumbs img',
			]
		);

		$this->add_responsive_control(
			'thumbs_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%' ],
				'selectors' => [
					'.woocommerce {{WRAPPER}} .flex-control-thumbs img' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}}',
				],
			]
		);

		$this->add_control(
			'spacing_thumbs',
			[
				'label' => esc_html__( 'Spacing', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em' ],
				'selectors' => [
					'.woocommerce {{WRAPPER}} .flex-control-thumbs li' => 'padding-right: calc({{SIZE}}{{UNIT}} / 2); padding-left: calc({{SIZE}}{{UNIT}} / 2); padding-bottom: {{SIZE}}{{UNIT}}',
					'.woocommerce {{WRAPPER}} .flex-control-thumbs' => 'margin-right: calc(-{{SIZE}}{{UNIT}} / 2); margin-left: calc(-{{SIZE}}{{UNIT}} / 2)',
				],
			]
		);

		$this->end_controls_section();
	}

	public function render() {
		$settings = $this->get_settings_for_display();
		global $product;

		$product = wc_get_product();

		if ( empty( $product ) ) {
			return;
		}

		if ( 'yes' === $settings['sale_flash'] ) {
			wc_get_template( 'loop/sale-flash.php' );
		}
		wc_get_template( 'single-product/product-image.php' );

		// On render widget from Editor - trigger the init manually.
		if ( wp_doing_ajax() ) {
			?>
			<script>
				jQuery( '.woocommerce-product-gallery' ).each( function() {
					jQuery( this ).wc_product_gallery();
				} );
			</script>
			<?php
		}
	}

	public function get_group_name() {
		return 'woocommerce';
	}
}
