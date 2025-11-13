<?php
namespace ElementorPro\Modules\Sticky;

use Elementor\Controls_Manager;
use Elementor\Element_Base;
use Elementor\Element_Section;
use Elementor\Utils;
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
				'label' => esc_html__( 'Sticky', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'' => esc_html__( 'None', 'elementor-pro' ),
					'top' => esc_html__( 'Top', 'elementor-pro' ),
					'bottom' => esc_html__( 'Bottom', 'elementor-pro' ),
				],
				'separator' => 'before',
				'render_type' => 'none',
				'frontend_available' => true,
				'assets' => $this->get_asset_conditions_data(),
			]
		);

		// TODO: In Pro 3.5.0, get the active devices using Breakpoints/Manager::get_active_devices_list().
		$active_breakpoint_instances = Plugin::elementor()->breakpoints->get_active_breakpoints();
		// Devices need to be ordered from largest to smallest.
		$active_devices = array_reverse( array_keys( $active_breakpoint_instances ) );

		// Add desktop in the correct position.
		if ( in_array( 'widescreen', $active_devices, true ) ) {
			$active_devices = array_merge( array_slice( $active_devices, 0, 1 ), [ 'desktop' ], array_slice( $active_devices, 1 ) );
		} else {
			$active_devices = array_merge( [ 'desktop' ], $active_devices );
		}

		$sticky_device_options = [];

		foreach ( $active_devices as $device ) {
			$label = 'desktop' === $device ? esc_html__( 'Desktop', 'elementor-pro' ) : $active_breakpoint_instances[ $device ]->get_label();
			$sticky_device_options[ $device ] = $label;
		}

		$element->add_control(
			'sticky_on',
			[
				'label' => esc_html__( 'Sticky On', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT2,
				'multiple' => true,
				'label_block' => true,
				'default' => $active_devices,
				'options' => $sticky_device_options,
				'condition' => [
					'sticky!' => '',
				],
				'render_type' => 'none',
				'frontend_available' => true,
			]
		);

		$element->add_responsive_control(
			'sticky_offset',
			[
				'label' => esc_html__( 'Sticky Offset', 'elementor-pro' ),
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

		$element->add_responsive_control(
			'sticky_effects_offset',
			[
				'label' => esc_html__( 'Effects Offset', 'elementor-pro' ),
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

		$element->add_responsive_control(
			'sticky_anchor_link_offset',
			[
				'label' => esc_html__( 'Anchor Offset', 'elementor-pro' ),
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
			'anchor_offset_description',
			[
				'raw' => sprintf(
					esc_html__( 'Using the Anchor offset may require you to adjust the offset of other sticky elements. %1$s Learn more %2$s', 'elementor-pro' ),
					'<a href="https://elementor.com/help/sticky-headers/" target="_blank">',
					'</a>'
				),
				'type' => Controls_Manager::RAW_HTML,
				'content_classes' => 'elementor-control-field-description',
				'condition' => [
					'sticky!' => '',
				],
			]
		);

		// Add `Stay In Column` only to the following types:
		$types = [
			Element_Section::class,
			Widget_Base::class,
		];

		// TODO: Remove when Container is the default.
		if ( Plugin::elementor()->experiments->is_feature_active( 'container' ) ) {
			$types[] = \Elementor\Includes\Elements\Container::class;
		}

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
					'label' => esc_html__( 'Stay In Column', 'elementor-pro' ),
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
			'styles' => [
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

	public function register_frontend_styles() {
		$suffix = Utils::is_script_debug() ? '' : '.min';

		wp_register_style(
			'e-sticky',
			ELEMENTOR_PRO_URL . 'assets/css/modules/sticky' . $suffix . '.css',
			[],
			ELEMENTOR_PRO_VERSION
		);
	}

	public function enqueue_preview_styles() {
		wp_enqueue_style( 'e-sticky' );
	}

	private function add_actions() {
		add_action( 'elementor/frontend/after_register_styles', [ $this, 'register_frontend_styles' ] );
		add_action( 'elementor/preview/enqueue_styles', [ $this, 'enqueue_preview_styles' ] );

		add_action( 'elementor/element/section/section_effects/after_section_start', [ $this, 'register_controls' ] );
		add_action( 'elementor/element/container/section_effects/after_section_start', [ $this, 'register_controls' ] );
		add_action( 'elementor/element/common/section_effects/after_section_start', [ $this, 'register_controls' ] );
	}
}
