<?php
namespace ElementorPro\Modules\ThemeBuilder\Classes;

use ElementorPro\Modules\ThemeBuilder\Module;
use ElementorPro\Modules\ThemeBuilder\ThemeSupport\GeneratePress_Theme_Support;
use ElementorPro\Modules\ThemeBuilder\ThemeSupport\Safe_Mode_Theme_Support;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Theme_Support {

	public function __construct() {
		add_action( 'init', [ $this, 'init' ] );
	}

	public function init() {
		$theme = wp_get_theme();

		switch ( $theme->get_template() ) {
			case 'generatepress':
				new GeneratePress_Theme_Support();
				break;
			case 'elementor-safe':
				new Safe_Mode_Theme_Support();
				break;
		}

		add_action( 'elementor/theme/register_locations', [ $this, 'after_register_locations' ], 99 );
	}

	/**
	 * @param Locations_Manager $location_manager
	 */
	public function after_register_locations( $location_manager ) {
		$core_locations = $location_manager->get_core_locations();
		$overwrite_header_location = false;
		$overwrite_footer_location = false;

		foreach ( $core_locations as $location => $settings ) {
			if ( ! $location_manager->get_location( $location ) ) {
				if ( 'header' === $location ) {
					$overwrite_header_location = true;
				} elseif ( 'footer' === $location ) {
					$overwrite_footer_location = true;
				}
				$location_manager->register_core_location( $location, [
					'overwrite' => true,
				] );
			}
		}

		if ( $overwrite_header_location || $overwrite_footer_location ) {
			/** @var Module $theme_builder_module */
			$theme_builder_module = Module::instance();

			$conditions_manager = $theme_builder_module->get_conditions_manager();

			$headers = $conditions_manager->get_documents_for_location( 'header' );
			$footers = $conditions_manager->get_documents_for_location( 'footer' );

			if ( ! empty( $headers ) || ! empty( $footers ) ) {
				add_action( 'get_header', [ $this, 'get_header' ] );
				add_action( 'get_footer', [ $this, 'get_footer' ] );
				add_filter( 'show_admin_bar', [ $this, 'filter_admin_bar_from_body_open' ] );
			}
		}
	}

	public function get_header( $name ) {
		require __DIR__ . '/../views/theme-support-header.php';

		$templates = [];
		$name = (string) $name;
		if ( '' !== $name ) {
			$templates[] = "header-{$name}.php";
		}

		$templates[] = 'header.php';

		// Avoid running wp_head hooks again
		remove_all_actions( 'wp_head' );
		ob_start();
		// It cause a `require_once` so, in the get_header it self it will not be required again.
		locate_template( $templates, true );
		ob_get_clean();
	}

	/**
	 * Don't show admin bar on `wp_body_open` because the theme header HTML is ignored via `$this->get_header()`.
	 *
	 * @param bool $show_admin_bar
	 *
	 * @return bool
	 */
	public function filter_admin_bar_from_body_open( $show_admin_bar ) {
		global $wp_current_filter;

		// A flag to mark if $show_admin_bar is switched to false during this filter,
		// if so, it needed to switch back on the next filter (wp_footer).
		static $switched = false;

		if ( $show_admin_bar && in_array( 'wp_body_open', $wp_current_filter ) ) {
			$show_admin_bar = false;
			$switched = true;
		} elseif ( $switched ) {
			$show_admin_bar = true;
		}

		return $show_admin_bar;
	}

	public function get_footer( $name ) {
		require __DIR__ . '/../views/theme-support-footer.php';

		$templates = [];
		$name = (string) $name;
		if ( '' !== $name ) {
			$templates[] = "footer-{$name}.php";
		}

		$templates[] = 'footer.php';

		ob_start();
		// It cause a `require_once` so, in the get_header it self it will not be required again.
		locate_template( $templates, true );
		ob_get_clean();
	}
}
