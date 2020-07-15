<?php
namespace ElementorPro\Modules\Sticky;

use Elementor\Controls_Manager;
use Elementor\Element_Base;
use Elementor\Widget_Base;
use ElementorPro\Base\Module_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {

	public function __construct() {
		parent::__construct();

		$this->add_actions();
	}

	public function get_name() {
		return 'sticky';
	}

	public function register_controls( Element_Base $element ) {
		$element->add_control(
			'sticky',
			[
				'label' => __( 'Sticky', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'' => __( 'None', 'elementor-pro' ),
					'top' => __( 'Top', 'elementor-pro' ),
					'bottom' => __( 'Bottom', 'elementor-pro' ),
				],
				'separator' => 'before',
				'render_type' => 'none',
				'frontend_available' => true,
			]
		);

		$element->add_control(
			'sticky_on',
			[
				'label' => __( 'Sticky On', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT2,
				'multiple' => true,
				'label_block' => true,
				'default' => [ 'desktop', 'tablet', 'mobile' ],
				'options' => [
					'desktop' => __( 'Desktop', 'elementor-pro' ),
					'tablet' => __( 'Tablet', 'elementor-pro' ),
					'mobile' => __( 'Mobile', 'elementor-pro' ),
				],
				'condition' => [
					'sticky!' => '',
				],
				'render_type' => 'none',
				'frontend_available' => true,
			]
		);

		$element->add_control(
			'sticky_offset',
			[
				'label' => __( 'Offset', 'elementor-pro' ),
				'type' => Controls_Manager::NUMBER,
				'default' => 0,
				'min' => 0,
				'max' => 500,
				'required' => true,
				'condition' => [
					'sticky!' => '',
				],
				'render_type' => 'none',
				'frontend_available' => true,
			]
		);

		$element->add_control(
			'sticky_effects_offset',
			[
				'label' => __( 'Effects Offset', 'elementor-pro' ),
				'type' => Controls_Manager::NUMBER,
				'default' => 0,
				'min' => 0,
				'max' => 1000,
				'required' => true,
				'condition' => [
					'sticky!' => '',
				],
				'render_type' => 'none',
				'frontend_available' => true,
			]
		);

		if ( $element instanceof Widget_Base ) {
			$element->add_control(
				'sticky_parent',
				[
					'label' => __( 'Stay In Column', 'elementor-pro' ),
					'type' => Controls_Manager::SWITCHER,
					'condition' => [
						'sticky!' => '',
					],
					'render_type' => 'none',
					'frontend_available' => true,
				]
			);
		}

		$element->add_control(
			'sticky_divider',
			[
				'type' => Controls_Manager::DIVIDER,
			]
		);
	}

	private function add_actions() {
		add_action( 'elementor/element/section/section_effects/after_section_start', [ $this, 'register_controls' ] );
		add_action( 'elementor/element/common/section_effects/after_section_start', [ $this, 'register_controls' ] );
	}
}
