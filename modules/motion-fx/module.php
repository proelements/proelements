<?php

namespace ElementorPro\Modules\MotionFX;

use Elementor\Controls_Manager;
use Elementor\Element_Base;
use Elementor\Element_Column;
use Elementor\Element_Section;
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

	/**
	 * Get module name.
	 *
	 * Retrieve the module name.
	 *
	 * @since  2.5.0
	 * @access public
	 *
	 * @return string Module name.
	 */
	public function get_name() {
		return 'motion-fx';
	}

	public function register_controls_group( Controls_Manager $controls_manager ) {
		$controls_manager->add_group_control( Controls_Group::get_type(), new Controls_Group() );
	}

	public function add_controls_group_to_element( Element_Base $element ) {
		$exclude = [];

		$selector = '{{WRAPPER}}';

		if ( $element instanceof Element_Section ) {
			$exclude[] = 'motion_fx_mouse';
		} elseif ( $element instanceof Element_Column ) {
			$selector .= ' > .elementor-widget-wrap';
		} elseif ( $element instanceof Widget_Base ) {
			if ( defined( get_class( $element ) . '::WRAPPER_SELECTOR' ) ) {
				$selector = $element::WRAPPER_SELECTOR;
			} else {
				$selector .= ' > .elementor-widget-container';
			}
		}

		$element->add_group_control(
			Controls_Group::get_type(),
			[
				'name' => 'motion_fx',
				'selector' => $selector,
				'exclude' => $exclude,
			]
		);

		$this->add_asset_loading_control_to_element( $element, $exclude );
	}

	private function add_asset_loading_control_to_element( Element_Base $element, $exclude = [], $control_suffix = '' ) {
		$element->add_control(
			$control_suffix . 'handle_motion_fx_asset_loading',
			[
				'type' => Controls_Manager::HIDDEN,
				'assets' => [
					'styles' => [
						[
							'name' => 'e-motion-fx',
							'conditions' => $this->get_asset_loading_condition_conditions( $exclude, $control_suffix ),
						],
					],
				],
			]
		);
	}

	private function get_asset_loading_condition_conditions( $exclude = [], $control_suffix = '' ) {
		if ( '' === $control_suffix ) {
			return [
				'relation' => 'or',
				'terms' => $this->get_asset_loading_condition_terms( $exclude, $control_suffix ),
			];
		}

		return [
			'terms' => [
				[
					'name' => 'background_background',
					'operator' => '===',
					'value' => 'classic',
				],
				[
					'relation' => 'or',
					'terms' => $this->get_asset_loading_condition_terms( $exclude, $control_suffix ),
				],
			],
		];
	}

	private function get_asset_loading_condition_terms( $exclude = [], $control_suffix = '' ) {
		$terms = [
			[
				'name' => $control_suffix . 'motion_fx_motion_fx_scrolling',
				'operator' => '===',
				'value' => 'yes',
			],
		];

		if ( in_array( 'motion_fx_mouse', $exclude, true ) ) {
			return $terms;
		}

		$terms[] = [
			'name' => $control_suffix . 'motion_fx_motion_fx_mouse',
			'operator' => '===',
			'value' => 'yes',
		];

		return $terms;
	}

	public function add_controls_group_to_element_background( Element_Base $element ) {
		$element->start_injection( [
			'of' => 'background_bg_width_mobile',
		] );

		$element->add_group_control(
			Controls_Group::get_type(),
			[
				'name' => 'background_motion_fx',
				'exclude' => [
					'rotateZ_effect',
					'tilt_effect',
					'transform_origin_x',
					'transform_origin_y',
				],
			]
		);

		$options = [
			'separator' => 'before',
			'conditions' => [
				'relation' => 'or',
				'terms' => [
					[
						'name' => 'background_background',
						'value' => 'classic',
					],
					[
						'terms' => [
							[
								'name' => 'background_background',
								'value' => 'gradient',
							],
							[
								'name' => 'background_color',
								'operator' => '!==',
								'value' => '',
							],
							[
								'name' => 'background_color_b',
								'operator' => '!==',
								'value' => '',
							],
						],
					],
				],
			],
		];

		$element->update_control( 'background_motion_fx_motion_fx_scrolling', $options );

		$element->update_control( 'background_motion_fx_motion_fx_mouse', $options );

		$element->end_injection();

		$this->add_asset_loading_control_to_element( $element, [], 'background_' );
	}

	private function add_actions() {
		add_action( 'elementor/controls/register', [ $this, 'register_controls_group' ] );

		add_action( 'elementor/element/section/section_effects/after_section_start', [ $this, 'add_controls_group_to_element' ] );
		add_action( 'elementor/element/container/section_effects/after_section_start', [ $this, 'add_controls_group_to_element' ] );
		add_action( 'elementor/element/column/section_effects/after_section_start', [ $this, 'add_controls_group_to_element' ] );
		add_action( 'elementor/element/common/section_effects/after_section_start', [ $this, 'add_controls_group_to_element' ] );
		add_action( 'elementor/element/common-optimized/section_effects/after_section_start', [ $this, 'add_controls_group_to_element' ] );

		add_action( 'elementor/element/section/section_background/before_section_end', [ $this, 'add_controls_group_to_element_background' ] );
		add_action( 'elementor/element/container/section_background/before_section_end', [ $this, 'add_controls_group_to_element_background' ] );
		add_action( 'elementor/element/column/section_style/before_section_end', [ $this, 'add_controls_group_to_element_background' ] );
	}
}
