<?php
namespace ElementorPro\Modules\Sticky;

use Elementor\Controls_Manager;
use Elementor\Element_Base;
use Elementor\Element_Section;
use Elementor\Widget_Base;
use ElementorPro\Base\Module_Base;
use ElementorPro\Plugin;

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

	/**
	 * Check if `$element` is an instance of a class in the `$types` array.
	 *
	 * @param $element
	 * @param $types
	 *
	 * @return bool
	 */
	private function is_instance_of( $element, array $types ) {
		foreach ( $types as $type ) {
			if ( $element instanceof $type ) {
				return true;
			}
		}

		return false;
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
				'assets' => $this->get_asset_conditions_data(),
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

		// Add `Stay In Column` only to the following types:
		$types = [
			Element_Section::class,
			Widget_Base::class,
		];

		if ( $this->is_instance_of( $element, $types ) ) {
			$conditions = [
				'sticky!' => '',
			];

			// Target only inner sections.
			// Checking for `$element->get_data( 'isInner' )` in both editor & frontend causes it to work properly on the frontend but
			// break on the editor, because the inner section is created in JS and not rendered in PHP.
			// So this is a hack to force the editor to show the `sticky_parent` control, and still make it work properly on the frontend.
			if ( $element instanceof Element_Section && Plugin::elementor()->editor->is_edit_mode() ) {
				$conditions['isInner'] = true;
			}

			$element->add_control(
				'sticky_parent',
				[
					'label' => __( 'Stay In Column', 'elementor-pro' ),
					'type' => Controls_Manager::SWITCHER,
					'condition' => $conditions,
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

	private function get_asset_conditions_data() {
		return [
			'scripts' => [
				[
					'name' => 'e-sticky',
					'conditions' => [
						'terms' => [
							[
								'name' => 'sticky',
								'operator' => '!==',
								'value' => '',
							],
						],
					],
				],
			],
		];
	}

	private function add_actions() {
		add_action( 'elementor/element/section/section_effects/after_section_start', [ $this, 'register_controls' ] );
		add_action( 'elementor/element/common/section_effects/after_section_start', [ $this, 'register_controls' ] );
	}
}
