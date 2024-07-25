<?php
namespace ElementorPro\Modules\CustomCss;

use Elementor\Controls_Manager;
use Elementor\Controls_Stack;
use Elementor\Core\DynamicTags\Dynamic_CSS;
use Elementor\Core\Files\CSS\Post;
use Elementor\Core\Kits\Documents\Kit;
use Elementor\Element_Base;
use ElementorPro\Base\Module_Base;
use ElementorPro\Modules\CustomCss\AdminMenuItems\Settings_Custom_CSS_Pro;
use ElementorPro\Plugin;
use ElementorPro\License\API;
use ElementorPro\Modules\Tiers\Module as Tiers;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {

	const LICENSE_FEATURE_NAME = 'custom-css';
	const LICENSE_FEATURE_NAME_GLOBAL = 'global-css';

	public function __construct() {
		parent::__construct();

		$this->add_actions();
	}

	public function get_name() {
		return 'custom-css';
	}

	/**
	 * @param $element    Controls_Stack
	 * @param $section_id string
	 */
	public function register_controls( Controls_Stack $element, $section_id ) {
		// Remove Custom CSS Banner (From free version)
		if ( 'section_custom_css_pro' !== $section_id ) {
			return;
		}

		$old_section = Plugin::elementor()->controls_manager->get_control_from_stack( $element->get_unique_name(), 'section_custom_css_pro' );

		if ( ! API::is_licence_has_feature( static::LICENSE_FEATURE_NAME, API::BC_VALIDATION_CALLBACK ) ) {
			$template = Tiers::get_promotion_template( [
				'title' => esc_html__( 'Meet Our Custom CSS', 'elementor-pro' ),
				'messages' => [
					esc_html__( 'Apply CSS to any widget and elevate any element with Custom CSS.', 'elementor-pro' ),
				],
				'link' => 'https://go.elementor.com/go-pro-advanced-custom-css/',
			] );

			$this->replace_controls_with_upgrade_promotion( $element, $old_section['tab'], $template );
			return;
		}

		$this->replace_go_pro_custom_css_controls( $element );
	}

	/**
	 * @param $post_css Post
	 * @param $element  Element_Base
	 */
	public function add_post_css( $post_css, $element ) {
		if ( $post_css instanceof Dynamic_CSS ) {
			return;
		}

		$element_settings = $element->get_settings();

		if ( empty( $element_settings['custom_css'] ) ) {
			return;
		}

		$css = trim( $element_settings['custom_css'] );

		if ( empty( $css ) ) {
			return;
		}
		$css = str_replace( 'selector', $post_css->get_element_unique_selector( $element ), $css );

		// Add a css comment
		$css = sprintf( '/* Start custom CSS for %s, class: %s */', $element->get_name(), $element->get_unique_selector() ) . $css . '/* End custom CSS */';

		$post_css->get_stylesheet()->add_raw_css( $css );
	}

	/**
	 * @param $post_css Post
	 */
	public function add_page_settings_css( $post_css ) {
		$document = Plugin::elementor()->documents->get( $post_css->get_post_id() );
		$custom_css = $document->get_settings( 'custom_css' ) ?? '';

		$custom_css = trim( $custom_css );

		if ( empty( $custom_css ) ) {
			return;
		}

		$custom_css = str_replace( 'selector', $document->get_css_wrapper_selector(), $custom_css );

		// Add a css comment
		$custom_css = '/* Start custom CSS */' . $custom_css . '/* End custom CSS */';

		$post_css->get_stylesheet()->add_raw_css( $custom_css );
	}

	/**
	 * @param Controls_Stack $controls_stack
	 */
	public function replace_go_pro_custom_css_controls( $controls_stack ) {
		$old_section = Plugin::elementor()->controls_manager->get_control_from_stack( $controls_stack->get_unique_name(), 'section_custom_css_pro' );

		Plugin::elementor()->controls_manager->remove_control_from_stack( $controls_stack->get_unique_name(), [ 'section_custom_css_pro', 'custom_css_pro' ] );

		$controls_stack->start_controls_section(
			'section_custom_css',
			[
				'label' => esc_html__( 'Custom CSS', 'elementor-pro' ),
				'tab' => $old_section['tab'],
			]
		);

		$controls_stack->add_control(
			'custom_css',
			[
				'label' => esc_html__( 'Add your own custom CSS', 'elementor-pro' ),
				'type' => Controls_Manager::CODE,
				'description' => sprintf(
					/* translators: 1: Link opening tag, 2: Link opening tag, 3: Link closing tag. */
					esc_html__( 'Use %1$scustom CSS%3$s to style your content or add %2$sthe "selector" prefix%3$s to target specific elements.', 'elementor-pro' ),
					'<a href="https://go.elementor.com/learn-more-panel-custom-css/" target="_blank">',
					'<a href="https://go.elementor.com/learn-more-panel-custom-css-selectors/" target="_blank">',
					'</a>'
				),
				'language' => 'css',
				'render_type' => 'ui',
			]
		);

		$controls_stack->end_controls_section();
	}

	/**
	 * @deprecated 3.1.0
	 */
	public function localize_settings() {
		Plugin::elementor()->modules_manager->get_modules( 'dev-tools' )->deprecation->deprecated_function( __METHOD__, '3.1.0' );

		return [];
	}

	protected function add_actions() {
		add_action( 'elementor/element/after_section_end', [ $this, 'register_controls' ], 10, 2 );
		add_action( 'elementor/element/parse_css', [ $this, 'add_post_css' ], 10, 2 );
		add_action( 'elementor/css-file/post/parse', [ $this, 'add_page_settings_css' ] );

		// Check license for site settings tabs
		if ( ! API::is_licence_has_feature( static::LICENSE_FEATURE_NAME_GLOBAL, API::BC_VALIDATION_CALLBACK ) ) {
			add_action( 'elementor/kit/register_tabs', function ( Kit $kit ) {
				$kit->register_tab( 'settings-custom-css', Settings_Custom_CSS_Pro::class );
			}, 100 );
		}
	}

	public function replace_controls_with_upgrade_promotion( Controls_Stack $controls_stack, $tab, $template ) {
		Plugin::elementor()->controls_manager->remove_control_from_stack( $controls_stack->get_unique_name(), [ 'section_custom_css_pro', 'custom_css_pro' ] );

		$controls_stack->start_controls_section(
			'section_custom_css_promotion',
			[
				'label' => esc_html__( 'Custom CSS', 'elementor-pro' ),
				'tab' => $tab,
			]
		);

		$controls_stack->add_control(
			'custom_css_promotion',
			[
				'type' => Controls_Manager::RAW_HTML,
				'raw' => $template,
			]
		);

		$controls_stack->end_controls_section();
	}
}
