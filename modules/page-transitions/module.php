<?php
namespace ElementorPro\Modules\PageTransitions;

use Elementor\Controls_Manager;
use Elementor\Controls_Stack;
use Elementor\Core\Experiments\Manager as Experiments_Manager;
use Elementor\Core\Kits\Documents\Tabs\Settings_Page_Transitions;
use Elementor\Group_Control_Background;
use Elementor\Icons_Manager;
use Elementor\Utils;
use ElementorPro\Base\Module_Base;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {

	// Module name.
	const NAME = 'page-transitions';

	// Loader types.
	const TYPE_ANIMATION = 'animation';
	const TYPE_ICON = 'icon';
	const TYPE_IMAGE = 'image';

	// Pre-loader types.
	const LOADER_CIRCLE = 'circle';
	const LOADER_CIRCLE_DASHED = 'circle-dashed';
	const LOADER_BOUNCING_DOTS = 'bouncing-dots';
	const LOADER_PULSING_DOTS = 'pulsing-dots';
	const LOADER_PULSE = 'pulse';
	const LOADER_OVERLAP = 'overlap';
	const LOADER_SPINNERS = 'spinners';
	const LOADER_NESTED_SPINNERS = 'nested-spinners';
	const LOADER_OPPOSING_NESTED_SPINNERS = 'opposing-nested-spinners';
	const LOADER_OPPOSING_NESTED_RINGS = 'opposing-nested-rings';
	const LOADER_PROGRESS_BAR = 'progress-bar';
	const LOADER_TWO_WAY_PROGRESS_BAR = 'two-way-progress-bar';
	const LOADER_REPEATING_BAR = 'repeating-bar';

	/**
	 * Module constructor.
	 *
	 * @return void
	 */
	public function __construct() {
		// For cases where the user has an older Core version.
		if ( ! class_exists( 'Elementor\Core\Kits\Documents\Tabs\Settings_Page_Transitions' ) ) {
			return;
		}

		parent::__construct();

		$this->initialize_experiment();
		$this->add_actions();
	}

	/**
	 * Get the module name.
	 *
	 * @return string
	 */
	public function get_name() {
		return self::NAME;
	}

	/**
	 * Register the Page Transitions controls.
	 *
	 * @param $element    Controls_Stack
	 * @param $section_id string
	 *
	 * @return void
	 */
	public function register_controls( Controls_Stack $element, $section_id ) {
		// Remove Page Transitions Banner (from Core version).
		if ( 'section_page_transitions_teaser' !== $section_id ) {
			return;
		}

		// Delete the Teaser message.
		Plugin::elementor()->controls_manager->remove_control_from_stack(
			$element->get_unique_name(),
			[
				'section_page_transitions_teaser',
				'page_transitions_teaser',
			]
		);

		// Add an experiment message with a link to turn it on.
		if ( ! $this->is_experiment_active() ) {
			$this->add_experiment_message( $element );
			return;
		}

		// Replace the teaser message with actual controls.
		$this->register_page_transitions_controls( $element );
	}

	/**
	 * Add a Page Transition experiment message when the experiment is off, with a link to turn it on.
	 *
	 * @param Controls_Stack $controls_stack
	 *
	 * @return void
	 */
	private function add_experiment_message( $controls_stack ) {
		// Remove the hook to prevent infinite hook calls
		// (since the `add_page_transitions_controls` registers the same section ID).
		remove_action( 'elementor/element/after_section_end', [ $this, 'register_controls' ] );

		$message = sprintf(
			/* translators: 1: Link opening tag, 2: Link closing tag. */
			esc_html__( 'This feature is currently an experiment, you can turn it on in Elementor > Settings > %1$sExperiments%2$s.', 'elementor-pro' ),
			sprintf( '<a href="%s" target="_blank">', admin_url( 'admin.php?page=elementor#tab-experiments' ) ),
			'</a>'
		);

		Plugin::elementor()->controls_manager->add_page_transitions_controls( $controls_stack, Settings_Page_Transitions::TAB_ID, [ $message ] );
	}

	/**
	 * Retrieve a control ID prefixed with the tab ID.
	 *
	 * @param string $id - Control id.
	 *
	 * @return string
	 */
	private function get_control_id( $id ) {
		$tab_id = Settings_Page_Transitions::TAB_ID;
		$tab_id = str_replace( '-', '_', $tab_id );

		return $tab_id . '_' . $id;
	}

	/**
	 * Add a Page Transitions preview button.
	 *
	 * @param Controls_Stack $controls_stack - Controls Stack context to add the button to.
	 * @param string $prefix - Button ID prefix.
	 *
	 * @return void
	 */
	private function add_preview_button( $controls_stack, $prefix ) {
		$controls_stack->add_control(
			$this->get_control_id( $prefix . '_play_button' ),
			[
				'type' => Controls_Manager::BUTTON,
				'label_block' => true,
				'text' => esc_html__( 'Preview Page Transition', 'elementor-pro' ),
				'button_type' => 'default e-page-transition-preview',
				'separator' => 'before',
				'event' => 'elementorPageTransitions:animate',
				'condition' => [
					$this->get_control_id( 'entrance_animation' ) . '!' => '',
				],
			]
		);
	}

	/**
	 * Replace the Page Transition teaser with actual controls.
	 *
	 * @param Controls_Stack $controls_stack
	 *
	 * @return void
	 */
	public function register_page_transitions_controls( $controls_stack ) {
		/**
		 * Page Transitions
		 */
		$controls_stack->start_controls_section(
			'section_page_transitions',
			[
				'label' => esc_html__( 'Page Transitions', 'elementor-pro' ),
				'tab' => Settings_Page_Transitions::TAB_ID,
			]
		);

		$controls_stack->add_group_control(
			Group_Control_Background::get_type(),
			[
				'name'  => $this->get_control_id( 'background' ),
				'exclude' => [ 'image', 'video' ],
				'fields_options' => [
					'background' => [
						'label' => esc_html__( 'Background', 'elementor-pro' ),
						'default' => 'classic',
						'description' => esc_html__( 'This is the page color behind your loading animation', 'elementor-pro' ),
					],
					'color' => [
						'default' => '#FFBC7D',
					],
				],
				'selector' => '{{WRAPPER}} e-page-transition',
			]
		);

		$controls_stack->add_responsive_control(
			$this->get_control_id( 'entrance_animation' ),
			[
				'label' => esc_html__( 'Entrance Animation', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'label_block' => true,
				// The animations are the opposite of what the user sees because the user thinks in the context
				// of a page transition, while we actually animate the overlay.
				'options' => [
					'' => esc_html__( 'None', 'elementor-pro' ),
					'fade-out' => esc_html__( 'Fade In', 'elementor-pro' ),
					'fade-out-down' => esc_html__( 'Fade In Down', 'elementor-pro' ),
					'fade-out-right' => esc_html__( 'Fade In Right', 'elementor-pro' ),
					'fade-out-up' => esc_html__( 'Fade In Up', 'elementor-pro' ),
					'fade-out-left' => esc_html__( 'Fade In Left', 'elementor-pro' ),
					'zoom-out' => esc_html__( 'Zoom In', 'elementor-pro' ),
					'slide-out-down' => esc_html__( 'Slide In Down', 'elementor-pro' ),
					'slide-out-right' => esc_html__( 'Slide In Right', 'elementor-pro' ),
					'slide-out-up' => esc_html__( 'Slide In Up', 'elementor-pro' ),
					'slide-out-left' => esc_html__( 'Slide In Left', 'elementor-pro' ),
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-page-transition-entrance-animation: e-page-transition-{{VALUE}}',
				],
			]
		);

		$controls_stack->add_responsive_control(
			$this->get_control_id( 'exit_animation' ),
			[
				'label' => esc_html__( 'Exit Animation', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'label_block' => true,
				// The animations are the opposite of what the user sees because the user thinks in the context
				// of a page transition, while we actually animate the overlay.
				'options' => [
					'' => esc_html__( 'None', 'elementor-pro' ),
					'fade-in' => esc_html__( 'Fade Out', 'elementor-pro' ),
					'fade-in-down' => esc_html__( 'Fade Out Down', 'elementor-pro' ),
					'fade-in-right' => esc_html__( 'Fade Out Right', 'elementor-pro' ),
					'fade-in-up' => esc_html__( 'Fade Out Up', 'elementor-pro' ),
					'fade-in-left' => esc_html__( 'Fade Out Left', 'elementor-pro' ),
					'zoom-in' => esc_html__( 'Zoom Out', 'elementor-pro' ),
					'slide-in-down' => esc_html__( 'Slide Out Down', 'elementor-pro' ),
					'slide-in-right' => esc_html__( 'Slide Out Right', 'elementor-pro' ),
					'slide-in-up' => esc_html__( 'Slide Out Up', 'elementor-pro' ),
					'slide-in-left' => esc_html__( 'Slide Out Left', 'elementor-pro' ),
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-page-transition-exit-animation: e-page-transition-{{VALUE}}',
				],
				'condition' => [
					$this->get_control_id( 'entrance_animation' ) . '!' => '',
				],
			]
		);

		$controls_stack->add_control(
			$this->get_control_id( 'animation_duration' ),
			[
				'label' => esc_html__( 'Animation Speed (ms)', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'ms' ],
				'default' => [
					'unit' => 'ms',
					'size' => 1500,
				],
				'range' => [
					'ms' => [
						'min' => 0,
						'max' => 5000,
						'step' => 50,
					],
				],
				'condition' => [
					$this->get_control_id( 'entrance_animation' ) . '!' => '',
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-page-transition-animation-duration: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_preview_button( $controls_stack, 'page_transition' );

		$controls_stack->end_controls_section();

		/**
		 * Preloader
		 */
		$controls_stack->start_controls_section(
			'section_preloader',
			[
				'label' => esc_html__( 'Preloader', 'elementor-pro' ),
				'tab' => Settings_Page_Transitions::TAB_ID,
			]
		);

		$controls_stack->add_control(
			$this->get_control_id( 'preloader_type' ),
			[
				'label' => esc_html__( 'Type', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'' => esc_html__( 'None', 'elementor-pro' ),
					self::TYPE_ANIMATION => esc_html__( 'Animation', 'elementor-pro' ),
					self::TYPE_ICON => esc_html__( 'Icon', 'elementor-pro' ),
					self::TYPE_IMAGE => esc_html__( 'Image', 'elementor-pro' ),
				],
			]
		);

		$controls_stack->add_control(
			$this->get_control_id( 'preloader_icon' ),
			[
				'label' => esc_html__( 'Icon', 'elementor-pro' ),
				'type' => Controls_Manager::ICONS,
				'fa4compatibility' => 'icon',
				'default' => [
					'value' => 'fas fa-spinner',
					'library' => 'fa-solid',
				],
				'condition' => [
					$this->get_control_id( 'preloader_type' ) => 'icon',
				],
			]
		);

		$controls_stack->add_control(
			$this->get_control_id( 'preloader_image' ),
			[
				'label' => esc_html__( 'Image', 'elementor-pro' ),
				'type' => Controls_Manager::MEDIA,
				'condition' => [
					$this->get_control_id( 'preloader_type' ) => 'image',
				],
				'dynamic' => [
					'active' => true,
				],
			]
		);

		$controls_stack->add_control(
			$this->get_control_id( 'preloader_animation_type' ),
			[
				'label' => esc_html__( 'Animation', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => self::LOADER_CIRCLE,
				'options' => [
					self::LOADER_CIRCLE => esc_html__( 'Circle', 'elementor-pro' ),
					self::LOADER_CIRCLE_DASHED => esc_html__( 'Circle Dashed', 'elementor-pro' ),
					self::LOADER_BOUNCING_DOTS => esc_html__( 'Bouncing Dots', 'elementor-pro' ),
					self::LOADER_PULSING_DOTS => esc_html__( 'Pulsing Dots', 'elementor-pro' ),
					self::LOADER_PULSE => esc_html__( 'Pulse', 'elementor-pro' ),
					self::LOADER_OVERLAP => esc_html__( 'Overlap', 'elementor-pro' ),
					self::LOADER_SPINNERS => esc_html__( 'Spinners', 'elementor-pro' ),
					self::LOADER_NESTED_SPINNERS => esc_html__( 'Nested Spinners', 'elementor-pro' ),
					self::LOADER_OPPOSING_NESTED_SPINNERS => esc_html__( 'Opposing Nested Spinners', 'elementor-pro' ),
					self::LOADER_OPPOSING_NESTED_RINGS => esc_html__( 'Opposing Nested Rings', 'elementor-pro' ),
					self::LOADER_PROGRESS_BAR => esc_html__( 'Progress Bar', 'elementor-pro' ),
					self::LOADER_TWO_WAY_PROGRESS_BAR => esc_html__( 'Two Way Progress Bar', 'elementor-pro' ),
					self::LOADER_REPEATING_BAR => esc_html__( 'Repeating Bar', 'elementor-pro' ),
				],
				'condition' => [
					$this->get_control_id( 'preloader_type' ) => 'animation',
				],
			]
		);

		$controls_stack->add_control(
			$this->get_control_id( 'preloader_animation' ),
			[
				'label' => esc_html__( 'Animation', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => '',
				'options' => [
					'' => esc_html__( 'None', 'elementor-pro' ),
					'eicon-spin' => esc_html__( 'Spinning', 'elementor-pro' ),
					'bounce' => esc_html__( 'Bounce', 'elementor-pro' ),
					'flash' => esc_html__( 'Flash', 'elementor-pro' ),
					'pulse' => esc_html__( 'Pulse', 'elementor-pro' ),
					'rubberBand' => esc_html__( 'Rubber Band', 'elementor-pro' ),
					'shake' => esc_html__( 'Shake', 'elementor-pro' ),
					'headShake' => esc_html__( 'Head Shake', 'elementor-pro' ),
					'swing' => esc_html__( 'Swing', 'elementor-pro' ),
					'tada' => esc_html__( 'Tada', 'elementor-pro' ),
					'wobble' => esc_html__( 'Wobble', 'elementor-pro' ),
					'jello' => esc_html__( 'Jello', 'elementor-pro' ),
				],
				'condition' => [
					$this->get_control_id( 'preloader_type' ) => [ 'icon', 'image' ],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-preloader-animation: {{VALUE}}',
				],
			]
		);

		// Include animation speed control only for specific pre-loaders which support that.
		$included_preloaders = [
			self::LOADER_CIRCLE,
			self::LOADER_CIRCLE_DASHED,
			self::LOADER_BOUNCING_DOTS,
			self::LOADER_PULSING_DOTS,
			self::LOADER_SPINNERS,
			self::LOADER_NESTED_SPINNERS,
			self::LOADER_OPPOSING_NESTED_SPINNERS,
			self::LOADER_OPPOSING_NESTED_RINGS,
			self::LOADER_PROGRESS_BAR,
			self::LOADER_TWO_WAY_PROGRESS_BAR,
			self::LOADER_REPEATING_BAR,
		];

		$controls_stack->add_control(
			$this->get_control_id( 'preloader_animation_duration' ),
			[
				'label' => esc_html__( 'Animation Speed (ms)', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'ms' ],
				'default' => [
					'unit' => 'ms',
					'size' => 1500,
				],
				'range' => [
					'ms' => [
						'min' => 0,
						'max' => 5000,
						'step' => 50,
					],
				],
				// Show the control only for images, icons & specific custom pre-loaders.
				'conditions' => [
					'relation' => 'or',
					'terms' => [
						[
							'name' => $this->get_control_id( 'preloader_type' ),
							'operator' => 'in',
							'value' => [
								self::TYPE_IMAGE,
								self::TYPE_ICON,
							],
						],
						[
							'relation' => 'and',
							'terms' => [
								[
									'name' => $this->get_control_id( 'preloader_type' ),
									'operator' => '=',
									'value' => self::TYPE_ANIMATION,
								],
								[
									'name' => $this->get_control_id( 'preloader_animation_type' ),
									'operator' => 'in',
									'value' => $included_preloaders,
								],
							],
						],
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-preloader-animation-duration: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$controls_stack->add_control(
			$this->get_control_id( 'preloader_delay' ),
			[
				'label' => esc_html__( 'Preloader Delay (ms)', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'ms' ],
				'default' => [
					'unit' => 'ms',
					'size' => 0,
				],
				'range' => [
					'ms' => [
						'min' => 0,
						'max' => 5000,
						'step' => 50,
					],
				],
				'condition' => [
					$this->get_control_id( 'preloader_type' ) . '!' => '',
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-preloader-delay: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$controls_stack->add_control(
			$this->get_control_id( 'text_heading' ),
			[
				'label' => esc_html__( 'Style', 'elementor-pro' ),
				'type' => Controls_Manager::HEADING,
				'condition' => [
					$this->get_control_id( 'preloader_type' ) . '!' => '',
				],
			]
		);

		$controls_stack->add_control(
			$this->get_control_id( 'preloader_color' ),
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'default' => '#FFF',
				'condition' => [
					$this->get_control_id( 'preloader_type' ) => [ 'icon', 'animation' ],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-preloader-color: {{VALUE}}',
				],
			]
		);

		$controls_stack->add_responsive_control(
			$this->get_control_id( 'preloader_size' ),
			[
				'label' => esc_html__( 'Size', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px' ],
				'default' => [
					'unit' => 'px',
					'size' => 20,
				],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 300,
						'step' => 1,
					],
				],
				'condition' => [
					$this->get_control_id( 'preloader_type' ) => [ 'icon', 'animation' ],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-preloader-size: {{SIZE}}{{UNIT}}',
				],
			]
		);

		// Animation to exclude in rotation.
		$excluded_animations = [
			'eicon-spin',
			'bounce',
			'pulse',
			'rubberBand',
			'shake',
			'headShake',
			'swing',
			'tada',
			'wobble',
			'jello',
		];

		$controls_stack->add_responsive_control(
			$this->get_control_id( 'preloader_rotate' ),
			[
				'label' => esc_html__( 'Rotate', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'deg' ],
				'default' => [
					'unit' => 'deg',
					'size' => 0,
				],
				'range' => [
					'deg' => [
						'min' => 0,
						'max' => 360,
						'step' => 10,
					],
				],
				'condition' => [
					$this->get_control_id( 'preloader_type' ) => 'icon',
					$this->get_control_id( 'preloader_animation' ) . '!' => $excluded_animations,
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-preloader-rotate: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$controls_stack->add_responsive_control(
			$this->get_control_id( 'preloader_width' ),
			[
				'label' => esc_html__( 'Width', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'default' => [
					'unit' => '%',
				],
				'tablet_default' => [
					'unit' => '%',
				],
				'mobile_default' => [
					'unit' => '%',
				],
				'size_units' => [ '%', 'px', 'vw' ],
				'range' => [
					'%' => [
						'min' => 1,
						'max' => 100,
					],
					'px' => [
						'min' => 1,
						'max' => 1000,
					],
					'vw' => [
						'min' => 1,
						'max' => 100,
					],
				],
				'condition' => [
					$this->get_control_id( 'preloader_type' ) => 'image',
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-preloader-width: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$controls_stack->add_responsive_control(
			$this->get_control_id( 'preloader_max_width' ),
			[
				'label' => esc_html__( 'Max Width', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'default' => [
					'unit' => '%',
				],
				'tablet_default' => [
					'unit' => '%',
				],
				'mobile_default' => [
					'unit' => '%',
				],
				'size_units' => [ '%', 'px', 'vw' ],
				'range' => [
					'%' => [
						'min' => 1,
						'max' => 100,
					],
					'px' => [
						'min' => 1,
						'max' => 1000,
					],
					'vw' => [
						'min' => 1,
						'max' => 100,
					],
				],
				'condition' => [
					$this->get_control_id( 'preloader_type' ) => 'image',
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-preloader-max-width: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$controls_stack->add_responsive_control(
			$this->get_control_id( 'preloader_opacity' ),
			[
				'label' => esc_html__( 'Opacity', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px' ],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 1,
						'step' => .1,
					],
				],
				'condition' => [
					$this->get_control_id( 'preloader_type' ) => 'image',
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-preloader-opacity: {{SIZE}}',
				],
			]
		);

		$this->add_preview_button( $controls_stack, 'preloader' );

		$controls_stack->end_controls_section();
	}

	/**
	 * Get a control value from the settings.
	 *
	 * @param string $control - Non prefixed control name.
	 *
	 * @return mixed
	 */
	private function get_setting( $control ) {
		$document = Plugin::elementor()->kits_manager->get_active_kit_for_frontend();
		$control = $this->get_control_id( $control );

		return $document->get_settings_for_display( $control );
	}

	/**
	 * Get the Page Transitions element CSS class.
	 *
	 * @return string
	 */
	private function get_page_transition_class() {
		$is_preview_mode = Plugin::elementor()->preview->is_preview_mode();
		return $is_preview_mode ? 'e-page-transition--entered' : 'e-page-transition--entering';
	}

	/**
	 * Get the Page Transitions links Regex filter.
	 *
	 * @return string
	 */
	private function get_page_transition_filter() {
		// Prepare the admin URL to be "regex-ready" (escape special characters).
		$admin_url = preg_quote( get_admin_url(), '/' );

		// A regex pattern for URLs under `wp-admin`.
		return '^' . $admin_url;
	}

	/**
	 * Print the Page Transition element attributes.
	 *
	 * @return void
	 */
	private function print_render_attribute_string() {
		$kit = Plugin::elementor()->kits_manager->get_active_kit();

		$settings = [
			'preloader_type',
			'preloader_icon',
			'preloader_image',
			'preloader_animation_type',
		];

		foreach ( $settings as $setting ) {
			$key = str_replace( '_', '-', $setting );
			$value = $this->get_setting( $setting );

			if ( empty( $value ) ) {
				continue;
			}

			// Change the key & value specifically for the image control, since the returned value
			// is an array while the Page Transition element expects a URL as a string.
			if ( 'preloader-image' === $key ) {
				$key = 'preloader-image-url';
				$value = $value['url'];
			}

			$kit->add_render_attribute( Settings_Page_Transitions::TAB_ID, $key, $value );
		}

		$class = $this->get_page_transition_class();

		if ( $class ) {
			$kit->add_render_attribute( Settings_Page_Transitions::TAB_ID, 'class', $class );
		}

		// Add URL regex filter to filter only URLs without `wp-admin`.
		$kit->add_render_attribute( Settings_Page_Transitions::TAB_ID, 'exclude', $this->get_page_transition_filter() );

		$kit->print_render_attribute_string( Settings_Page_Transitions::TAB_ID );
	}

	/**
	 * Determine if the Page Transition element should be rendered.
	 *
	 * @return bool
	 */
	private function should_render() {
		// Don't render the Page Transition if the page is a non-interactive (static-rendered) page (e.g. template-preview).
		if ( Plugin::elementor()->frontend->is_static_render_mode() ) {
			return false;
		}

		$has_entrance_animation = ! ! $this->get_setting( 'entrance_animation' );
		$has_preloader = ! ! $this->get_setting( 'preloader_type' );
		$is_page = ( is_singular() || is_archive() ) && ! is_paged();

		return $is_page && ( $has_entrance_animation || $has_preloader );
	}

	/**
	 * Whether the Page Transitions scripts should be enqueued.
	 * When in preview mode, the scripts should be loaded since the user might not have a Page Transition
	 * set on initial load but he will need them when changing the settings.
	 *
	 * @return bool
	 */
	private function should_enqueue_scripts() {
		return $this->should_render() || Plugin::elementor()->preview->is_preview_mode();
	}

	/**
	 * Render the Page Transition markup.
	 *
	 * @return void
	 */
	private function render() {
		$is_inline_font_icon_active = Plugin::elementor()->experiments->is_feature_active( 'e_font_icon_svg' );

		?>
		<e-page-transition <?php $this->print_render_attribute_string(); ?>>
			<?php
			$icon = $this->get_setting( 'preloader_icon' );

			// Render inline SVG icon when the experiment is active, since the component itself
			// shouldn't know about the Editor or the experiments.
			if ( $is_inline_font_icon_active && ! empty( $icon ) ) {
				Icons_Manager::render_icon( $icon, [ 'class' => 'e-page-transition--preloader' ] );
			}
			?>
		</e-page-transition>
		<?php
	}

	/**
	 * Load `instant-page` library for better performance.
	 *
	 * Ref: https://instant.page/
	 *
	 * @return void
	 */
	private function enqueue_instant_page_script() {
		$suffix = Utils::is_script_debug() ? '' : '.min';

		wp_enqueue_script(
			'instant-page',
			ELEMENTOR_PRO_ASSETS_URL . "/lib/instant-page/instant-page{$suffix}.js",
			null,
			ELEMENTOR_PRO_VERSION,
			true
		);

		// Load instant-page as module.
		add_filter( 'script_loader_tag', function ( $tag, $handle ) {
			if ( 'instant-page' === $handle ) {
				$tag = str_replace( 'text/javascript', 'module', $tag );
			}
			return $tag;
		}, 10, 2 );
	}

	/**
	 * Enqueue frontend scripts.
	 *
	 * @return void
	 */
	private function enqueue_scripts() {
		$this->enqueue_instant_page_script();

		wp_enqueue_script(
			'page-transitions',
			$this->get_js_assets_url( 'page-transitions' ),
			null,
			ELEMENTOR_PRO_VERSION,
			false
		);
	}

	/**
	 * Get the base URL for assets.
	 *
	 * @return string
	 */
	public function get_assets_base_url() {
		return ELEMENTOR_PRO_URL;
	}

	/**
	 * Add actions & filters.
	 *
	 * @return void
	 */
	private function add_actions() {
		add_action( 'elementor/element/after_section_end', [ $this, 'register_controls' ], 10, 2 );

		// Don't execute unnecessary code if the experiment is off.
		if ( ! $this->is_experiment_active() ) {
			return;
		}

		add_action( 'wp_enqueue_scripts', function () {
			if ( $this->should_enqueue_scripts() ) {
				$this->enqueue_scripts();
			}
		} );

		// Render the Page Transition element after the body open tag.
		add_action( 'wp_body_open', function () {
			if ( $this->should_render() ) {
				$this->render();
			}
		}, 10, 2 );
	}

	/**
	 * Register the module as an experimental feature data.
	 *
	 * @return bool - Whether the experiment is on or off.
	 */
	private function initialize_experiment() {
		$description = esc_html__(
			'Customize entrance and exit animations for every page on your site, add a preloader with predefined animations and icons or upload your own images.',
			'elementor-pro'
		);

		$learn_more = sprintf(
			'<a href="%s" target="_blank">%s</a>',
			esc_attr( 'https://go.elementor.com/page-transition' ),
			esc_html__( 'Learn More', 'elementor-pro' )
		);

		$experiments_manager = Plugin::elementor()->experiments;

		$experiments_manager->add_feature( [
			'name' => self::NAME,
			'title' => esc_html__( 'Page Transitions', 'elementor-pro' ),
			'default' => Experiments_Manager::STATE_INACTIVE,
			'new_site' => [
				'default_active' => true,
			],
			'release_status' => Experiments_Manager::RELEASE_STATUS_BETA,
			'description' => $description . ' ' . $learn_more,
		] );

		return $experiments_manager->is_feature_active( self::NAME );
	}

	/**
	 * Determine if the experiment is active.
	 *
	 * @return bool
	 */
	private function is_experiment_active() {
		$experiments_manager = Plugin::elementor()->experiments;

		return $experiments_manager->is_feature_active( self::NAME );
	}
}
