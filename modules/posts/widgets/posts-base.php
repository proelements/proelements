<?php
namespace ElementorPro\Modules\Posts\Widgets;

use Elementor\Core\Kits\Documents\Tabs\Global_Typography;
use Elementor\Group_Control_Typography;
use ElementorPro\Base\Base_Widget;
use Elementor\Controls_Manager;
use ElementorPro\Core\Utils;
use ElementorPro\Modules\Posts\Traits\Button_Widget_Trait;
use ElementorPro\Modules\Posts\Traits\Pagination_Trait;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Class Posts
 */
abstract class Posts_Base extends Base_Widget {
	use Button_Widget_Trait;
	use Pagination_Trait;

	const LOAD_MORE_ON_CLICK = 'load_more_on_click';
	const LOAD_MORE_INFINITE_SCROLL = 'load_more_infinite_scroll';

	/**
	 * @var \WP_Query
	 */
	protected $query = null;

	protected $_has_template_content = false;

	public function get_icon() {
		return 'eicon-post-list';
	}

	public function get_script_depends() {
		return [ 'imagesloaded' ];
	}

	public function get_query() {
		return $this->query;
	}

	public function render() {}

	public function register_load_more_button_style_controls() {
		$this->add_control(
			'heading_load_more_style_button',
			[
				'label' => esc_html__( 'Button', 'elementor-pro' ),
				'type' => Controls_Manager::HEADING,
				'condition' => [
					'pagination_type' => 'load_more_on_click',
				],
			]
		);

		$this->register_button_style_controls( [
			'section_condition' => [
				'pagination_type' => 'load_more_on_click',
			],
		] );
	}

	public function register_load_more_message_style_controls() {
		$this->add_control(
			'heading_load_more_on_click_no_posts_message',
			[
				'label' => esc_html__( 'No More Posts Message', 'elementor-pro' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
				'condition' => [
					'pagination_type' => 'load_more_on_click',
				],
				'dynamic' => [
					'active' => true,
				],
			]
		);

		$this->add_control(
			'heading_load_more_on_click_infinity_scroll_no_posts_message',
			[
				'label' => esc_html__( 'No More Posts Message', 'elementor-pro' ),
				'type' => Controls_Manager::HEADING,
				'condition' => [
					'pagination_type' => 'load_more_infinite_scroll',
				],
				'dynamic' => [
					'active' => true,
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'load_more_no_posts_message',
				'selector' => '{{WRAPPER}} .e-load-more-message',
				'global' => [
					'default' => Global_Typography::TYPOGRAPHY_SECONDARY,
				],
			]
		);

		$this->add_control(
			'load_more_no_posts_message_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}}' => '--load-more-message-color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'load_more_spinner_color',
			[
				'label' => esc_html__( 'Spinner Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}}' => '--load-more-spinner-color: {{VALUE}};',
				],
				'separator' => 'before',
				'condition' => [
					'load_more_spinner[value]!' => '',
				],
			]
		);

		$this->add_responsive_control(
			'load_more_spacing',
			[
				'label' => esc_html__( 'Spacing', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'max' => 50,
					],
					'em' => [
						'max' => 5,
					],
					'rem' => [
						'max' => 5,
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--load-more—spacing: {{SIZE}}{{UNIT}};',
				],
				'separator' => 'before',
			]
		);
	}

	public function register_pagination_section_controls() {
		$this->start_controls_section(
			'section_pagination',
			[
				'label' => esc_html__( 'Pagination', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'pagination_type',
			[
				'label' => esc_html__( 'Pagination', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => '',
				'options' => $this->get_pagination_type_options(),
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'pagination_page_limit',
			[
				'label' => esc_html__( 'Page Limit', 'elementor-pro' ),
				'default' => '5',
				'condition' => [
					'pagination_type!' => [
						'load_more_on_click',
						'load_more_infinite_scroll',
						'',
					],
				],
			]
		);

		$this->add_control(
			'pagination_numbers_shorten',
			[
				'label' => esc_html__( 'Shorten', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'default' => '',
				'condition' => [
					'pagination_type' => [
						'numbers',
						'numbers_and_prev_next',
					],
				],
			]
		);

		$this->add_control(
			'pagination_prev_label',
			[
				'label' => esc_html__( 'Previous Label', 'elementor-pro' ),
				'dynamic' => [
					'active' => true,
				],
				'default' => esc_html__( '&laquo; Previous', 'elementor-pro' ),
				'condition' => [
					'pagination_type' => [
						'prev_next',
						'numbers_and_prev_next',
					],
				],
			]
		);

		$this->add_control(
			'pagination_next_label',
			[
				'label' => esc_html__( 'Next Label', 'elementor-pro' ),
				'default' => esc_html__( 'Next &raquo;', 'elementor-pro' ),
				'condition' => [
					'pagination_type' => [
						'prev_next',
						'numbers_and_prev_next',
					],
				],
				'dynamic' => [
					'active' => true,
				],
			]
		);

		$this->add_control(
			'pagination_align',
			[
				'label' => esc_html__( 'Alignment', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'options' => [
					'left' => [
						'title' => esc_html__( 'Left', 'elementor-pro' ),
						'icon' => 'eicon-text-align-left',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'elementor-pro' ),
						'icon' => 'eicon-text-align-center',
					],
					'right' => [
						'title' => esc_html__( 'Right', 'elementor-pro' ),
						'icon' => 'eicon-text-align-right',
					],
				],
				'default' => 'center',
				'selectors' => [
					'{{WRAPPER}} .elementor-pagination' => 'text-align: {{VALUE}};',
				],
				'condition' => [
					'pagination_type!' => [
						'load_more_on_click',
						'load_more_infinite_scroll',
						'',
					],
				],
			]
		);

		$this->add_control(
			'pagination_individual_divider',
			[
				'type' => Controls_Manager::DIVIDER,
				'condition' => [
					'pagination_type' => [
						'numbers',
						'numbers_and_prev_next',
						'prev_next',
					],
				],
			]
		);

		$this->add_control(
			'pagination_individual_handle',
			[
				'label' => esc_html__( 'Individual Pagination', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'On', 'elementor-pro' ),
				'label_off' => esc_html__( 'Off', 'elementor-pro' ),
				'default' => '',
				'condition' => [
					'pagination_type' => [
						'numbers',
						'numbers_and_prev_next',
						'prev_next',
					],
				],
			]
		);

		$this->add_control(
			'pagination_individual_handle_message',
			[
				'type' => Controls_Manager::RAW_HTML,
				'raw' => esc_html__( 'For multiple Posts Widgets on the same page, toggle this on to control the pagination for each individually. Note: It affects the page\'s URL structure.', 'elementor-pro' ),
				'content_classes' => 'elementor-control-field-description',
				'condition' => [
					'pagination_type' => [
						'numbers',
						'numbers_and_prev_next',
						'prev_next',
					],
				],
			]
		);

		$this->add_control(
			'load_more_spinner',
			[
				'label' => esc_html__( 'Spinner', 'elementor-pro' ),
				'type' => Controls_Manager::ICONS,
				'fa4compatibility' => 'icon',
				'default' => [
					'value' => 'fas fa-spinner',
					'library' => 'fa-solid',
				],
				'exclude_inline_options' => [ 'svg' ],
				'recommended' => [
					'fa-solid' => [
						'spinner',
						'cog',
						'sync',
						'sync-alt',
						'asterisk',
						'circle-notch',
					],
				],
				'skin' => 'inline',
				'label_block' => false,
				'condition' => [
					'pagination_type' => [
						'load_more_on_click',
						'load_more_infinite_scroll',
					],
				],
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'heading_load_more_button',
			[
				'label' => esc_html__( 'Button', 'elementor-pro' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
				'condition' => [
					'pagination_type' => 'load_more_on_click',
				],
			]
		);

		$this->register_button_content_controls( [
			'button_text' => esc_html__( 'Load More', 'elementor-pro' ),
			'control_label_name' => esc_html__( 'Button Text', 'elementor-pro' ),
			'prefix_class' => 'load-more-align-',
			'alignment_default' => 'center',
			'section_condition' => [
				'pagination_type' => 'load_more_on_click',
			],
			'exclude_inline_options' => [ 'svg' ],
		] );

		$this->remove_control( 'button_type' );
		$this->remove_control( 'link' );
		$this->remove_control( 'size' );

		$this->add_control(
			'heading_load_more_no_posts_message',
			[
				'label' => esc_html__( 'No More Posts Message', 'elementor-pro' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
				'condition' => [
					'pagination_type' => [
						'load_more_on_click',
						'load_more_infinite_scroll',
					],
				],
				'dynamic' => [
					'active' => true,
				],
			]
		);

		$this->add_responsive_control(
			'load_more_no_posts_message_align',
			[
				'label' => esc_html__( 'Alignment', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'options' => [
					'left'    => [
						'title' => esc_html__( 'Left', 'elementor-pro' ),
						'icon' => 'eicon-text-align-left',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'elementor-pro' ),
						'icon' => 'eicon-text-align-center',
					],
					'right' => [
						'title' => esc_html__( 'Right', 'elementor-pro' ),
						'icon' => 'eicon-text-align-right',
					],
					'justify' => [
						'title' => esc_html__( 'Justified', 'elementor-pro' ),
						'icon' => 'eicon-text-align-justify',
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--load-more-message-alignment: {{VALUE}};',
				],
				'condition' => [
					'pagination_type' => [
						'load_more_on_click',
						'load_more_infinite_scroll',
					],
				],
			]
		);

		$this->add_control(
			'load_more_no_posts_message_switcher',
			[
				'label' => esc_html__( 'Custom Messages', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'default' => '',
				'condition' => [
					'pagination_type' => [
						'load_more_on_click',
						'load_more_infinite_scroll',
					],
				],
			]
		);

		$this->add_control(
			'load_more_no_posts_custom_message',
			[
				'label' => esc_html__( 'No more posts message', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => esc_html__( 'No more posts to show', 'elementor-pro' ),
				'condition' => [
					'pagination_type' => [
						'load_more_on_click',
						'load_more_infinite_scroll',
					],
					'load_more_no_posts_message_switcher' => 'yes',
				],
				'label_block' => true,
				'dynamic' => [
					'active' => true,
				],
			]
		);

		$this->end_controls_section();

		// Pagination style controls for prev/next and numbers pagination.
		$this->start_controls_section(
			'section_pagination_style',
			[
				'label' => esc_html__( 'Pagination', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
				'condition' => [
					'pagination_type!' => [
						'load_more_on_click',
						'load_more_infinite_scroll',
						'',
					],
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'pagination_typography',
				'selector' => '{{WRAPPER}} .elementor-pagination',
				'global' => [
					'default' => Global_Typography::TYPOGRAPHY_SECONDARY,
				],
			]
		);

		$this->add_control(
			'pagination_color_heading',
			[
				'label' => esc_html__( 'Colors', 'elementor-pro' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->start_controls_tabs( 'pagination_colors' );

		$this->start_controls_tab(
			'pagination_color_normal',
			[
				'label' => esc_html__( 'Normal', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'pagination_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-pagination .page-numbers:not(.dots)' => 'color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'pagination_color_hover',
			[
				'label' => esc_html__( 'Hover', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'pagination_hover_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-pagination a.page-numbers:hover' => 'color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'pagination_color_active',
			[
				'label' => esc_html__( 'Active', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'pagination_active_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-pagination .page-numbers.current' => 'color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->add_responsive_control(
			'pagination_spacing',
			[
				'label' => esc_html__( 'Space Between', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem', 'custom' ],
				'separator' => 'before',
				'default' => [
					'size' => 10,
				],
				'range' => [
					'px' => [
						'max' => 100,
					],
					'em' => [
						'max' => 10,
					],
					'rem' => [
						'max' => 10,
					],
				],
				'selectors' => [
					'body:not(.rtl) {{WRAPPER}} .elementor-pagination .page-numbers:not(:first-child)' => 'margin-left: calc( {{SIZE}}{{UNIT}}/2 );',
					'body:not(.rtl) {{WRAPPER}} .elementor-pagination .page-numbers:not(:last-child)' => 'margin-right: calc( {{SIZE}}{{UNIT}}/2 );',
					'body.rtl {{WRAPPER}} .elementor-pagination .page-numbers:not(:first-child)' => 'margin-right: calc( {{SIZE}}{{UNIT}}/2 );',
					'body.rtl {{WRAPPER}} .elementor-pagination .page-numbers:not(:last-child)' => 'margin-left: calc( {{SIZE}}{{UNIT}}/2 );',
				],
			]
		);

		$this->add_responsive_control(
			'pagination_spacing_top',
			[
				'label' => esc_html__( 'Spacing', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'max' => 100,
					],
					'em' => [
						'max' => 10,
					],
					'rem' => [
						'max' => 10,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-pagination' => 'margin-top: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->end_controls_section();

		// Pagination style controls for on-load pagination with type on-click/infinity-scroll.
		$this->start_controls_section(
			'section_style',
			[
				'label' => esc_html__( 'Pagination', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
				'condition' => [
					'pagination_type' => [
						'load_more_on_click',
						'load_more_infinite_scroll',
					],
				],
			]
		);

		$this->register_load_more_button_style_controls();

		$this->register_load_more_message_style_controls();

		$this->end_controls_section();
	}

	abstract public function query_posts();

	public function get_current_page() {
		if ( '' === $this->get_settings_for_display( 'pagination_type' ) ) {
			return 1;
		}

		return max(
			1,
			get_query_var( 'paged' ),
			get_query_var( 'page' ),
			Utils::_unstable_get_super_global_value( $_GET, 'e-page-' . $this->get_id() )
		);
	}

	public function is_rest_request() {
		$request_uri = Utils::_unstable_get_super_global_value( $_SERVER, 'REQUEST_URI' );

		return false !== wp_get_referer() &&
			isset( $_SERVER['REQUEST_URI'] ) &&
			( false !== strpos( $request_uri, 'wp-json' ) || false !== strpos( $request_uri, 'rest_route' ) );
	}

	public function get_wp_link_page( $i ) {
		if ( ( ! is_singular() || is_front_page() ) && ! $this->is_rest_request() && ! $this->is_allow_to_use_custom_page_option() ) {
			return get_pagenum_link( $i );
		}

		// Based on wp-includes/post-template.php:957 `_wp_link_page`.
		global $wp_rewrite;
		$post = get_post();
		$query_args = [];
		$url = get_permalink();

		if ( $this->is_rest_request() ) {
			$link_unescaped = wp_get_referer();
			$post_id = url_to_postid( $link_unescaped );

			if ( $post_id > 0 ) {
				$post = get_post( $post_id );
			}

			$url = $this->get_base_url_for_rest_request( $post_id, $url );
		}

		if ( $i > 1 ) {
			if ( '' === get_option( 'permalink_structure' ) || in_array( $post->post_status, [ 'draft', 'pending' ] ) ) {
				$url = add_query_arg( $this->get_wp_pagination_query_var(), $i, $url );
			} elseif ( get_option( 'show_on_front' ) === 'page' && (int) get_option( 'page_on_front' ) === $post->ID ) {
				$url = trailingslashit( $url ) . user_trailingslashit( "$wp_rewrite->pagination_base/" . $i, 'single_paged' );
			} else {
				$url = trailingslashit( $url ) . user_trailingslashit( $i, 'single_paged' );
			}
		}

		if ( $i > 1 && $this->is_allow_to_use_custom_page_option() ) {
			$url = $this->get_wp_link_page_url_for_custom_page_option( $url, $i, $post_id ?? 0 );
		}

		if ( 1 === $i && $this->is_allow_to_use_custom_page_option() ) {
			$url = $this->get_base_url();
		}

		if ( is_preview() ) {
			$url = $this->get_wp_link_page_url_for_preview( $post, $query_args, $url );
		}

		if ( $this->is_rest_request() ) {
			$url = $this->get_wp_link_page_url_for_rest_request( $url, $link_unescaped );
		}

		if ( ! $this->is_rest_request() && $this->current_url_contains_taxonomy_filter() && ! is_preview() ) {
			$url = $this->get_wp_link_page_url_for_normal_page_load( $url );
		}

		return $url;
	}

	public function is_allow_to_use_custom_page_option() {
		return 'ajax' === $this->get_settings_for_display( 'pagination_load_type' ) || 'yes' === $this->get_settings_for_display( 'pagination_individual_handle' );
	}

	protected function get_base_url_for_rest_request( $post_id, $url ) {
		if ( $post_id > 0 ) {
			return get_permalink( $post_id );
		}

		global $wp_rewrite;

		if ( $wp_rewrite->using_permalinks() && ( $this->current_url_contains_taxonomy_filter() || $this->referer_contains_taxonomy_filter() ) ) {
			$url = $this->is_allow_to_use_custom_page_option() ? get_query_var( 'pagination_base_url' ) : get_query_var( 'pagination_base_url' ) . user_trailingslashit( "$wp_rewrite->pagination_base/", 'single_paged' );
		} else {
			$url = remove_query_arg( 'p', $url );
		}

		return $url;
	}

	protected function get_wp_link_page_url_for_preview( $post, $query_args, $url ) {
		if ( 'draft' === $post->post_status || ! isset( $_GET['preview_id'], $_GET['preview_nonce'] ) ) {
			return $url;
		}

		$query_args['preview_id'] = Utils::_unstable_get_super_global_value( $_GET, 'preview_id' );
		$query_args['preview_nonce'] = Utils::_unstable_get_super_global_value( $_GET, 'preview_nonce' );

		if ( $this->is_rest_request() || ! $this->current_url_contains_taxonomy_filter() ) {
			return get_preview_post_link( $post, $query_args, $url );
		}

		wp_parse_str( htmlspecialchars_decode( Utils::_unstable_get_super_global_value( $_SERVER, 'QUERY_STRING' ) ), $query_params );

		foreach ( $query_params as $param_key => $param_value ) {
			if ( false !== strpos( $param_key, 'e-filter-' ) ) {
				$query_args[ $param_key ] = $param_value;
			}
		}

		return get_preview_post_link( $post, $query_args, $url );
	}

	protected function get_wp_link_page_url_for_rest_request( $url, $link_unescaped ) {
		$url_components = wp_parse_url( $link_unescaped );
		$query_args = [];

		if ( isset( $url_components['query'] ) ) {
			wp_parse_str( $url_components['query'], $query_args );
		}

		$url = ! empty( $query_args ) ? $url . '&' . http_build_query( $query_args ) : $url;

		return $this->format_query_string_concatenation( $url );
	}

	protected function get_wp_link_page_url_for_normal_page_load( $url ) {
		wp_parse_str( htmlspecialchars_decode( Utils::_unstable_get_super_global_value( $_SERVER, 'QUERY_STRING' ) ), $query_params );

		$e_filters = '';

		foreach ( $query_params as $param_key => $param_value ) {
			if ( false !== strpos( $param_key, 'e-filter' ) ) {
				$e_filters .= '&' . $param_key . '=' . $param_value;
			}
		}

		return $this->format_query_string_concatenation( $url . $e_filters );
	}

	public function current_url_contains_taxonomy_filter() {
		return false !== strpos( Utils::_unstable_get_super_global_value( $_SERVER, 'QUERY_STRING' ), 'e-filter-' );
	}

	public function referer_contains_taxonomy_filter() {
		return false !== strpos( Utils::_unstable_get_super_global_value( $_SERVER, 'HTTP_REFERER' ), 'e-filter-' );
	}

	protected function format_query_string_concatenation( $input ) {
		if ( false === strpos( $input, '?' ) ) {
			// If "?" doesn't exist in the input URL, replace the first "&" with "?"
			$input = preg_replace( '/&/', '?', $input, 1 );
		}

		return $input;
	}

	public function get_posts_nav_link( $page_limit = null ) {
		if ( ! $page_limit ) {
			$page_limit = $this->query->max_num_pages;
		}

		$return = [];

		$paged = $this->get_current_page();

		$link_template = '<a class="page-numbers %s" href="%s">%s</a>';
		$disabled_template = '<span class="page-numbers %s">%s</span>';

		if ( $paged > 1 ) {
			$next_page = intval( $paged ) - 1;
			if ( $next_page < 1 ) {
				$next_page = 1;
			}

			$return['prev'] = sprintf( $link_template, 'prev', $this->get_wp_link_page( $next_page ), $this->get_settings_for_display( 'pagination_prev_label' ) );
		} else {
			$return['prev'] = sprintf( $disabled_template, 'prev', $this->get_settings_for_display( 'pagination_prev_label' ) );
		}

		$next_page = intval( $paged ) + 1;

		if ( $next_page <= $page_limit ) {
			$return['next'] = sprintf( $link_template, 'next', $this->get_wp_link_page( $next_page ), $this->get_settings_for_display( 'pagination_next_label' ) );
		} else {
			$return['next'] = sprintf( $disabled_template, 'next', $this->get_settings_for_display( 'pagination_next_label' ) );
		}

		return $return;
	}

	protected function register_controls() {
		$this->start_controls_section(
			'section_layout',
			[
				'label' => esc_html__( 'Layout', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_CONTENT,
			]
		);

		$this->end_controls_section();
	}

	protected function get_pagination_type_options() {
		return [
			'' => esc_html__( 'None', 'elementor-pro' ),
			'numbers' => esc_html__( 'Numbers', 'elementor-pro' ),
			'prev_next' => esc_html__( 'Previous/Next', 'elementor-pro' ),
			'numbers_and_prev_next' => esc_html__( 'Numbers', 'elementor-pro' ) . ' + ' . esc_html__( 'Previous/Next', 'elementor-pro' ),
			self::LOAD_MORE_ON_CLICK => esc_html__( 'Load on Click', 'elementor-pro' ),
			self::LOAD_MORE_INFINITE_SCROLL => esc_html__( 'Infinite Scroll', 'elementor-pro' ),
		];
	}

	public function render_plain_content() {}

	/**
	 * @param string $url
	 * @param int $i
	 * @param int $post_id
	 * @return string
	 */
	private function get_wp_link_page_url_for_custom_page_option( $url, $i, $post_id ) {
		$base_raw_url = $this->is_rest_request() ? $this->get_base_url_for_rest_request( $post_id, $url ) : $this->get_base_url();

		return $this->format_query_string_concatenation( $base_raw_url . '&e-page-' . $this->get_id() . '=' . $i );
	}

	/**
	 * @return string
	 */
	private function get_wp_pagination_query_var() {
		if ( '' === get_option( 'permalink_structure' ) && $this->is_posts_page( $this->is_allow_to_use_custom_page_option() ) ) {
			return 'paged';
		}

		return 'page';
	}
}
