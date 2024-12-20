<?php
namespace ElementorPro\Modules\LoopBuilder\Widgets;

use ElementorPro\Modules\LoopBuilder\Documents\Loop as LoopDocument;
use Elementor\Controls_Manager;
use ElementorPro\Plugin;
use ElementorPro\Base\Base_Carousel_Trait;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Loop_Carousel extends Base {
	use Base_Carousel_Trait;

	public function get_name() {
		return 'loop-carousel';
	}

	public function get_title() {
		return esc_html__( 'Loop Carousel', 'elementor-pro' );
	}

	public function get_keywords() {
		return [ 'loop', 'carousel', 'dynamic', 'listing', 'archive', 'blog', 'repeater', 'grid', 'products', 'posts', 'portfolio', 'cpt ', 'query', 'custom post type' ];
	}

	public function get_icon() {
		return 'eicon-carousel-loop';
	}

	/**
	 * Get style dependencies.
	 *
	 * Retrieve the list of style dependencies the widget requires.
	 *
	 * @since 3.24.0
	 * @access public
	 *
	 * @return array Widget style dependencies.
	 */
	public function get_style_depends(): array {
		return [ 'widget-loop-carousel' ];
	}

	protected function get_initial_config() {
		$config = parent::get_initial_config();

		$config['add_parent_render_footer'] = false;

		return $config;
	}

	public function register_settings_section_controls() {
		$this->add_carousel_settings_controls( [
			'css_prefix' => '',
		] );
	}

	public function register_navigation_section_controls() {
		$this->add_carousel_navigation_controls( [
			'css_prefix' => '',
			'navigation_custom_settings' => [
				'condition' => [
					'template_id!' => '',
				],
			],
		] );
	}

	public function register_pagination_section_controls() {
		$this->add_carousel_pagination_controls( [
			'css_prefix' => '',
			'section_carousel_pagination' => [
				'condition' => [
					'template_id!' => '',
				],
			],
		] );
	}

	public function register_design_layout_controls() {
		$this->start_controls_section(
			'section_layout_style',
			[
				'label' => esc_html__( 'Layout', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_responsive_control(
			'image_spacing_custom',
			[
				'label' => esc_html__( 'Gap between slides', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px' ],
				'range' => [
					'px' => [
						'max' => 400,
					],
				],
				'default' => [
					'size' => 10,
				],
				'frontend_available' => true,
				'render_type' => 'none',
				'selectors' => [
					'{{WRAPPER}}' => '--swiper-slides-gap: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->end_controls_section();
	}

	protected function register_design_navigation_controls() {
		$this->add_carousel_navigation_styling_controls( [
			'css_prefix' => '',
			'navigation_styling_custom_settings' => [
				'condition' => [
					'arrows' => 'yes',
					'template_id!' => '',
				],
			],
		] );
	}

	public function register_design_pagination_controls() {
		$this->add_carousel_pagination_style_controls( [
			'css_prefix' => '',
		] );
	}

	public function render_loop_header() {
		$has_autoplay_enabled = 'yes' === $this->get_settings_for_display( 'autoplay' );

		$this->add_render_attribute( 'swiper-wrapper', [
			'class' => 'swiper-wrapper',
			'aria-live' => $has_autoplay_enabled ? 'off' : 'polite',
		] );
		?>
		<div <?php $this->print_render_attribute_string( 'swiper-wrapper' ); ?>>
		<?php
	}

	public function render_loop_footer() {
		?>
		</div>
		</div>
		<?php
		$settings = $this->get_settings_for_display();
		$this->render_carousel_footer( $settings );
	}

	public function add_swiper_slide_attributes_to_loop_item( $attributes, $document ) {
		if ( LoopDocument::DOCUMENT_TYPE === $document::get_type() ) {
			$attributes['class'] .= ' swiper-slide';
			$attributes['role'] = 'group';
			$attributes['aria-roledescription'] = 'slide';
		}

		return $attributes;
	}

	public function add_loop_header_attributes( $render_attributes ) {
		$settings = $this->get_settings_for_display();

		if ( ! empty( $settings['direction'] ) ) {
			$render_attributes['dir'] = $settings['direction'];
		}

		return $render_attributes;
	}


	public function get_loop_header_widget_classes(): array {
		// TODO: Remove conditional logic in v3.28 [ED-15983].
		$swiper_class = $this->is_swiper_upgrade_experiment_state_inactive() ? 'swiper-container' : 'swiper';
		return [ $swiper_class ];
	}

	public function before_skin_render() {
		add_filter( 'elementor/document/wrapper_attributes', [ $this, 'add_swiper_slide_attributes_to_loop_item' ], 10, 2 );
		add_filter( 'elementor/skin/loop_header_attributes', [ $this, 'add_loop_header_attributes' ], 10, 1 );
	}

	public function after_skin_render() {
		remove_filter( 'elementor/document/wrapper_attributes', [ $this, 'add_swiper_slide_attributes_to_loop_item' ] );
		remove_filter( 'elementor/skin/loop_header_attributes', [ $this, 'add_loop_header_attributes' ] );
	}

	protected function register_layout_section() {
		parent::register_layout_section();

		$this->start_injection( [
			'of' => 'template_id',
		] );

		$this->add_control(
			'posts_per_page',
			[
				'label' => esc_html__( 'Number of slides', 'elementor-pro' ),
				'type' => Controls_Manager::NUMBER,
				'default' => 6,
				'min' => 1,
				'condition' => [
					'template_id!' => '',
				],
				'separator' => 'before',
			]
		);

		$this->add_carousel_layout_controls( [
			'css_prefix' => '',
			'slides_to_show_custom_settings' => [
				'default' => '3',
				'widescreen_default' => '3',
				'laptop_default' => '3',
				'tablet_extra_default' => '3',
				'tablet_default' => '2',
				'mobile_extra_default' => '2',
				'mobile_default' => '1',
				'condition' => [
					'posts_per_page!' => 1,
					'template_id!' => '',
				],
				'selectors' => [
					'{{WRAPPER}}' => '--swiper-slides-to-display: {{VALUE}}',
				],
			],
			'slides_to_scroll_custom_settings' => [
				'default' => '1',
				'condition' => [
					'posts_per_page!' => 1,
					'template_id!' => '',
				],
			],
			'equal_height_custom_settings' => [
				'condition' => [
					'posts_per_page!' => 1,
					'template_id!' => '',
				],
				'selectors' => [
					'{{WRAPPER}} .swiper-slide > .elementor-element' => 'height: 100%',
				],
			],
			'slides_on_display' => 8,
		] );

		// Location for the Edit handle.
		$this->add_control(
			'edit_handle_selector',
			[
				'label' => esc_html__( 'Edit Handle Selector', 'elementor-pro' ),
				'type' => Controls_Manager::HIDDEN,
				'default' => '.elementor-widget-container',
				'render_type' => 'none',
				'frontend_available' => true,
			]
		);

		$this->end_injection();
	}
}
