<?php
namespace ElementorPro\Modules\Woocommerce\Widgets;

use Elementor\Controls_Manager;
use Elementor\Core\Kits\Documents\Tabs\Global_Colors;
use Elementor\Core\Kits\Documents\Tabs\Global_Typography;
use Elementor\Group_Control_Typography;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Class Archive_Products_Deprecated
 *
 * @deprecated 2.4.1 Use `Archive_Products` instead.
 */
class Archive_Products_Deprecated extends Products {

	public function get_name() {
		return 'woocommerce-archive-products';
	}

	public function get_title() {
		return esc_html__( 'Archive Products (deprecated)', 'elementor-pro' );
	}

	public function get_categories() {
		return [
			'woocommerce-elements-archive',
		];
	}

	/* Deprecated Widget */
	public function show_in_panel() {
		return false;
	}

	protected function register_controls() {
		$this->deprecated_notice( Plugin::get_title(), '2.5.0', '', esc_html__( 'Archive Products', 'elementor-pro' ) );

		parent::register_controls();

		$this->start_injection( [
			'at' => 'before',
			'of' => 'columns',
		] );

		$this->add_control(
			'wc_notice_do_not_use_customizer',
			[
				// TODO: Remove define() with the release of Elementor 3.22
				'type' => defined( 'Controls_Manager::ALERT' ) ? Controls_Manager::ALERT : 'alert',
				'alert_type' => 'info',
				'content' => esc_html__( 'Note that these layout settings will override settings made in Appearance > Customize', 'elementor-pro' ),
			]
		);

		$this->end_injection();

		$this->update_control(
			'rows',
			[
				'default' => 4,
			],
			[
				'recursive' => true,
			]
		);

		$this->update_control(
			'paginate',
			[
				'default' => 'yes',
			]
		);

		$this->update_control(
			'section_query',
			[
				'type' => 'hidden',
			]
		);

		$this->update_control(
			'query_post_type',
			[
				'default' => 'current_query',
			]
		);

		$this->start_controls_section(
			'section_advanced',
			[
				'label' => esc_html__( 'Advanced', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'nothing_found_message',
			[
				'label' => esc_html__( 'Nothing Found Message', 'elementor-pro' ),
				'type' => Controls_Manager::TEXTAREA,
				'default' => esc_html__( 'It seems we can\'t find what you\'re looking for.', 'elementor-pro' ),
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_nothing_found_style',
			[
				'tab' => Controls_Manager::TAB_STYLE,
				'label' => esc_html__( 'Nothing Found Message', 'elementor-pro' ),
				'condition' => [
					'nothing_found_message!' => '',
				],
			]
		);

		$this->add_control(
			'nothing_found_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'global' => [
					'default' => Global_Colors::COLOR_TEXT,
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-products-nothing-found' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'nothing_found_typography',
				'global' => [
					'default' => Global_Typography::TYPOGRAPHY_TEXT,
				],
				'selector' => '{{WRAPPER}} .elementor-products-nothing-found',
			]
		);

		$this->end_controls_section();
	}

	public function render_no_results() {
		echo '<div class="elementor-nothing-found elementor-products-nothing-found">' . esc_html( $this->get_settings( 'nothing_found_message' ) ) . '</div>';
	}

	protected function render() {
		add_action( 'woocommerce_shortcode_products_loop_no_results', [ $this, 'render_no_results' ] );

		parent::render();
	}

	public function get_group_name() {
		return 'woocommerce';
	}
}
