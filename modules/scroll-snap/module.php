<?php
namespace ElementorPro\Modules\ScrollSnap;

use Elementor\Core\DocumentTypes\PageBase;
use Elementor\Controls_Manager;
use ElementorPro\Base\Module_Base;
use Elementor\Controls_Stack;
use ElementorPro\Modules\ThemeBuilder\Documents\Theme_Page_Document;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {

	public function __construct() {
		parent::__construct();

		$this->add_actions();
	}

	public function get_name() {
		return 'scroll-snap';
	}

	public function register_controls( Controls_Stack $controls_stack, $section_id ) {

		if ( ( ! $controls_stack instanceof Theme_Page_Document && ! $controls_stack instanceof PageBase ) || 'section_custom_css_pro' !== $section_id ) {
			return;
		}

		$scroll_snap_children = '.elementor-section:not(.elementor-inner-section), .elementor-location-header, .elementor-location-footer, .page-header, .site-header, .elementor-add-section, .e-con:not(.e-child)';

		$controls_stack->start_controls_section(
			'section_scroll_snap',
			[
				'label' => esc_html__( 'Scroll Snap', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_ADVANCED,
			]
		);

		$controls_stack->add_control(
			'scroll_snap',
			[
				'label' => esc_html__( 'Scroll Snap', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'On', 'elementor-pro' ),
				'label_off' => esc_html__( 'Off', 'elementor-pro' ),
				'description' => sprintf( esc_html__( 'Scroll Snap makes the viewport stop on a specific position of a section when scrolling ends.%sTo avoid glitches and conflicts, we recommend not to use Scroll Snap together with animations or Motion effects.', 'elementor-pro' ), '<br><br>' ),
				'selectors' => [
					'html' => 'height: 100vh; margin: 0; overflow: hidden;',
					'body' => 'height: 100vh; overflow: auto; scroll-snap-type: y mandatory;',
				],
				'frontend_available' => true,
			]
		);

		$controls_stack->add_responsive_control(
			'scroll_snap_position',
			[
				'label' => esc_html__( 'Snap Position', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'' => esc_html__( 'Top', 'elementor-pro' ),
					'center' => esc_html__( 'Center', 'elementor-pro' ),
					'end' => esc_html__( 'Bottom', 'elementor-pro' ),
				],
				'selectors_dictionary' => [
					'' => 'start',
				],
				'condition' => [
					'scroll_snap!' => '',
				],
				'selectors' => [
					$scroll_snap_children => 'scroll-snap-align: {{VALUE}}',
				],
			]
		);

		$controls_stack->add_responsive_control(
			'scroll_snap_padding',
			[
				'label' => esc_html__( 'Scroll Padding', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'max' => 200,
					],
					'em' => [
						'max' => 20,
					],
					'rem' => [
						'max' => 20,
					],
				],
				'condition' => [
					'scroll_snap!' => '',
				],
				'selectors' => [
					'body' => 'scroll-padding: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$controls_stack->add_responsive_control(
			'force_stop',
			[
				'label' => esc_html__( 'Scroll Snap Stop', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'' => esc_html__( 'Normal', 'elementor-pro' ),
					'always' => esc_html__( 'Always', 'elementor-pro' ),
				],
				'selectors_dictionary' => [
					'' => 'normal',
				],
				'condition' => [
					'scroll_snap!' => '',
				],
				'selectors' => [
					$scroll_snap_children => 'scroll-snap-stop: {{VALUE}}',
				],
			]
		);

		$controls_stack->end_controls_section();
	}

	private function add_actions() {
		add_action( 'elementor/element/after_section_end', [ $this, 'register_controls' ], 10, 2 );
	}
}
