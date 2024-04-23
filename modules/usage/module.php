<?php
namespace ElementorPro\Modules\Usage;

use Elementor\Core\Base\Module as BaseModule;
use Elementor\Modules\System_Info\Module as System_Info;
use ElementorPro\Modules\AssetsManager\AssetTypes\Fonts\Custom_Fonts;
use ElementorPro\Modules\AssetsManager\AssetTypes\Icons\Custom_Icons;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Elementor usage module.
 * @method static Module instance()
 */
class Module extends BaseModule {
	/**
	 * Get module name.
	 *
	 * Retrieve the usage module name.
	 *
	 * @access public
	 *
	 * @return string Module name.
	 */
	public function get_name() {
		return 'usage';
	}

	/**
	 * Get integrations usage.
	 *
	 * Check all integrations in settings tab, find out who are in use.
	 *
	 * @return array
	 */
	public function get_integrations_usage() {
		$usage = [];

		$settings_tab = Plugin::elementor()->settings->get_tabs();
		$integrations = $settings_tab['integrations']['sections'];

		foreach ( $integrations as $integration_name => $integration_data ) {
			$integration_options = [];
			$integration_fields_count = count( $integration_data['fields'] );

			foreach ( $integration_data['fields'] as $field_name => $field_data ) {
				$integration_options [] = get_option( 'elementor_' . $field_name );
			}
			/**
			 * array_filter will clear all empty array values.
			 * if all the values filled then the count should be the same.
			 */
			if ( count( array_filter( $integration_options ) ) === $integration_fields_count ) {
				$usage[ $integration_name ] = true;
			}
		}

		return $usage;
	}

	/**
	 * Get fonts usage.
	 *
	 * Retrieve the number of Elementor fonts variants saved.
	 *
	 * @access public
	 * @static
	 *
	 * @return array The number of Elementor fonts variants.
	 */
	public static function get_fonts_usage() {
		$usage = [];
		$query = new \WP_Query( [
			'posts_per_page' => -1,
			'post_type' => 'elementor_font',
		] );

		$post_index = 0;
		foreach ( $query->get_posts() as $post ) {
			$elementor_font_files = get_post_meta( $post->ID, Custom_Fonts::FONT_META_KEY );

			if ( ! empty( $elementor_font_files ) ) {
				foreach ( $elementor_font_files as $elementor_font_index => $elementor_font_file ) {
					$current = & $usage[ $post_index ];

					foreach ( $elementor_font_file as $elementor_font_variant_index => $elementor_font_variant ) {
						$current_variant = & $current[ 'variant_' . $elementor_font_variant_index ];

						foreach ( [ 'weight', 'style' ] as $font_prop ) {
							$current_variant[ $font_prop ] = $elementor_font_variant[ 'font_' . $font_prop ];
						}

						$current_variant['types'] = [];
						foreach ( [ 'woff', 'woff2', 'ttf', 'svg', 'eot' ] as $font_ext ) {
							if ( isset( $elementor_font_variant[ $font_ext ] ) && strlen( $elementor_font_variant[ $font_ext ]['url'] ) ) {
								$current_variant['types'][] = $font_ext;
							}
						}
					}
				}

				$post_index++;
			}
		}

		return $usage;
	}

	/**
	 * Get icons usage.
	 *
	 * Retrieve the number of Elementor icons saved.
	 *
	 * @access public
	 * @static
	 *
	 * @return array The number of Elementor icons.
	 */
	public static function get_icons_usage() {
		$usage = [];
		$query = new \WP_Query( [
			'posts_per_page' => -1,
			'post_type' => 'elementor_icons',
		] );

		$index = 0;
		foreach ( $query->get_posts() as $post ) {
			$elementor_custom_icon_set_config = get_post_meta( $post->ID, Custom_Icons::META_KEY );

			if ( isset( $elementor_custom_icon_set_config[0] ) ) {
				$elementor_custom_icon_set_config = json_decode( $elementor_custom_icon_set_config[0] );

				$usage[ $index ] = (int) $elementor_custom_icon_set_config->count;

				$index++;
			}
		}

		return $usage;
	}

	/**
	 * Add's tracking data.
	 *
	 * Called on elementor/tracker/send_tracking_data_params.
	 *
	 * @param array $params
	 *
	 * @return array
	 */
	public function add_tracking_data( $params ) {
		unset( $params['is_first_time'] );

		$params['install_time_pro'] = Plugin::instance()->license_admin->get_installed_time();

		$params['usages']['integrations'] = $this->get_integrations_usage();
		$params['usages']['icons'] = $this->get_icons_usage();
		$params['usages']['fonts'] = $this->get_fonts_usage();

		return $params;
	}

	public function register_system_info_reporters() {
		System_Info::add_report( 'features', [
			'file_name' => __DIR__ . '/features-reporter.php',
			'class_name' => __NAMESPACE__ . '\Features_Reporter',
		] );

		System_Info::add_report( 'integrations', [
			'file_name' => __DIR__ . '/integrations-reporter.php',
			'class_name' => __NAMESPACE__ . '\Integrations_Reporter',
		] );
	}

	/**
	 * Usage module constructor.
	 *
	 * Initializing Elementor usage module.
	 *
	 * @access public
	 */
	public function __construct() {
		add_filter( 'elementor/tracker/send_tracking_data_params', [ $this, 'add_tracking_data' ] );

		add_action( 'admin_init', [ $this, 'register_system_info_reporters' ], 60 );
	}
}
