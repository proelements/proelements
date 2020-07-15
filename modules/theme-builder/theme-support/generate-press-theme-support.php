<?php
namespace ElementorPro\Modules\ThemeBuilder\ThemeSupport;

use Elementor\TemplateLibrary\Source_Local;
use ElementorPro\Modules\ThemeBuilder\Classes\Locations_Manager;
use ElementorPro\Modules\ThemeBuilder\Module;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class GeneratePress_Theme_Support {

	/**
	 * @param Locations_Manager $manager
	 */
	public function register_locations( $manager ) {
		$manager->register_core_location( 'header' );
		$manager->register_core_location( 'footer' );
	}

	public function metabox_capability( $capability ) {
		if ( Source_Local::CPT === get_post_type() ) {
			$capability = 'do_not_allow';
		}

		return $capability;
	}

	public function do_header() {
		$did_location = Module::instance()->get_locations_manager()->do_location( 'header' );
		if ( $did_location ) {
			remove_action( 'generate_header', 'generate_construct_header' );
			remove_action( 'generate_after_header', 'generate_add_navigation_after_header', 5 );
		}
	}

	public function do_footer() {
		$did_location = Module::instance()->get_locations_manager()->do_location( 'footer' );
		if ( $did_location ) {
			remove_action( 'generate_footer', 'generate_construct_footer' );
			remove_action( 'generate_footer', 'generate_construct_footer_widgets', 5 );
		}
	}

	public function body_classes( $classes ) {
		if ( in_array( 'elementor-template-full-width', $classes ) ) {
			$classes[] = 'full-width-content';
		}

		return $classes;
	}

	public function __construct() {
		add_action( 'elementor/theme/register_locations', [ $this, 'register_locations' ] );
		add_filter( 'generate_metabox_capability', [ $this, 'metabox_capability' ] );

		add_action( 'generate_header', [ $this, 'do_header' ], 0 );
		add_action( 'generate_footer', [ $this, 'do_footer' ], 0 );

		add_filter( 'body_class', [ $this, 'body_classes' ], 11 );
	}
}
