<?php
namespace ElementorPro\Core\Admin;

use Elementor\Core\Base\App;
use Elementor\Rollback;
use Elementor\Settings;
use Elementor\Tools;
use Elementor\Utils;
use ElementorPro\Core\Utils as ProUtils;
use ElementorPro\License\API;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Admin extends App {

	/**
	 * Get module name.
	 *
	 * Retrieve the module name.
	 *
	 * @since 2.3.0
	 * @access public
	 *
	 * @return string Module name.
	 */
	public function get_name() {
		return 'admin';
	}

	/**
	 * Enqueue admin styles.
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function enqueue_styles() {
		$suffix = Utils::is_script_debug() ? '' : '.min';

		$direction_suffix = is_rtl() ? '-rtl' : '';

		wp_register_style(
			'elementor-pro-admin',
			ELEMENTOR_PRO_ASSETS_URL . 'css/admin' . $direction_suffix . $suffix . '.css',
			[],
			ELEMENTOR_PRO_VERSION
		);

		wp_enqueue_style( 'elementor-pro-admin' );
	}

	public function enqueue_scripts() {
		$suffix = Utils::is_script_debug() ? '' : '.min';

		wp_enqueue_script(
			'elementor-pro-admin',
			ELEMENTOR_PRO_URL . 'assets/js/admin' . $suffix . '.js',
			[
				'elementor-admin',
			],
			ELEMENTOR_PRO_VERSION,
			true
		);

		$locale_settings = [];

		/**
		 * Localized admin settings.
		 *
		 * Filters the localized settings used in the admin as JavaScript variables.
		 *
		 * By default Elementor Pro passes some admin settings to be consumed as JavaScript
		 * variables. This hook allows developers to add extra settings values to be consumed
		 * using JavaScript in WordPress admin.
		 *
		 * @since 1.0.0
		 *
		 * @param array $locale_settings Localized settings.
		 */
		$locale_settings = apply_filters( 'elementor_pro/admin/localize_settings', $locale_settings );

		Utils::print_js_config(
			'elementor-pro-admin',
			'ElementorProConfig',
			$locale_settings
		);
	}

	public function remove_go_pro_menu() {
		if (defined('IS_PRO_ELEMENTS')) {
			remove_submenu_page( "elementor", "elementor_custom_fonts" );
			remove_submenu_page( "elementor", "elementor_custom_icons" );
			remove_submenu_page( \Elementor\TemplateLibrary\Source_Local::ADMIN_MENU_SLUG, "theme_templates" );
			remove_submenu_page( \Elementor\TemplateLibrary\Source_Local::ADMIN_MENU_SLUG, "popup_templates" );
			return;
		}
		remove_action( 'admin_menu', [ Plugin::elementor()->settings, 'register_pro_menu' ], Settings::MENU_PRIORITY_GO_PRO );
	}

	private function get_rollback_versions() {
		$rollback_versions = get_transient( 'elementor_pro_rollback_versions_' . ELEMENTOR_PRO_VERSION );

		if ( false === $rollback_versions ) {
			$max_versions = 30;

			$versions = apply_filters( 'elementor-pro/settings/rollback/versions', [] );

			if ( empty( $versions ) ) {
				$versions = API::get_previous_versions();

				if ( is_wp_error( $versions ) ) {
					return [];
				}
			}

			$rollback_versions = [];

			$current_index = 0;
			foreach ( $versions as $version ) {
				if ( $max_versions <= $current_index ) {
					break;
				}

				$lowercase_version = strtolower( $version );
				$is_valid_rollback_version = ! preg_match( '/(trunk|beta|rc|dev)/i', $lowercase_version );

				/**
				 * Is valid rollback version.
				 *
				 * Filters whether the version of the rollback is valid or not.
				 *
				 * By default Elementor doesn't allow to rollback for trunk/beta/rc/dev versions.
				 * This hook allows developers to enable a rollback for thise kind of versions by
				 * returning `true`.
				 *
				 * @param bool  $is_valid_rollback_version Whether a rollback version is valid.
				 * @param array $lowercase_version         A list of previous versions.
				 */
				$is_valid_rollback_version = apply_filters(
					'elementor-pro/settings/tools/rollback/is_valid_rollback_version',
					$is_valid_rollback_version,
					$lowercase_version
				);

				if ( ! $is_valid_rollback_version ) {
					continue;
				}

				if ( version_compare( $version, ELEMENTOR_VERSION, '>=' ) ) {
					continue;
				}

				$current_index++;
				$rollback_versions[] = $version;
			}

			set_transient( 'elementor_pro_rollback_versions_' . ELEMENTOR_PRO_VERSION, $rollback_versions, WEEK_IN_SECONDS );
		}

		return $rollback_versions;
	}

	public function register_admin_tools_fields( Tools $tools ) {
		$rollback_html = '<select class="elementor-rollback-select">';

		foreach ( $this->get_rollback_versions() as $version ) {
			$rollback_html .= "<option value='{$version}'>$version</option>";
		}
		$rollback_html .= '</select>';

		// Rollback
		$tools->add_fields( 'versions', 'rollback', [
			'rollback_pro_separator' => [
				'field_args' => [
					'type' => 'raw_html',
					'html' => '<hr>',
				],
			],
			'rollback_pro' => [
				'label' => esc_html__( 'Rollback Pro Version', 'elementor-pro' ),
				'field_args' => [
					'type' => 'raw_html',
					'html' => sprintf(
						$rollback_html . '<a data-placeholder-text="' . esc_html__( 'Reinstall', 'elementor-pro' ) . ' v{VERSION}" href="#" data-placeholder-url="%s" class="button elementor-button-spinner elementor-rollback-button">%s</a>',
						wp_nonce_url( admin_url( 'admin-post.php?action=elementor_pro_rollback&version=VERSION' ), 'elementor_pro_rollback' ),
						__( 'Reinstall', 'elementor-pro' )
					),
					'desc' => '<span style="color: red;">' . esc_html__( 'Warning: Please backup your database before making the rollback.', 'elementor-pro' ) . '</span>',
				],
			],
		] );
	}

	public function post_elementor_pro_rollback() {
		check_admin_referer( 'elementor_pro_rollback' );

		$rollback_versions = $this->get_rollback_versions();
		$version = ProUtils::_unstable_get_super_global_value( $_GET, 'version' );

		if ( ! $version || ! in_array( $version, $rollback_versions, true ) ) {
			wp_die( esc_html__( 'Error occurred, The version selected is invalid. Try selecting different version.', 'elementor-pro' ) );
		}

		/**
		 * Filter to allow override the rollback process.
		 * Should return an instance of `Rollback` class.
		 *
		 * @since 3.16.0
		 *
		 * @param Rollback|null $rollback The rollback instance.
		 * @param string        $version  The version to roll back to.
		 */
		$rollback = apply_filters( 'elementor-pro/settings/rollback', null, $version );

		if ( ! ( $rollback instanceof Rollback ) ) {
			$package_url = API::get_plugin_package_url( $version );

			if ( is_wp_error( $package_url ) ) {
				wp_die( $package_url ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			}

			$rollback = new Rollback( [
				'version' => $version,
				'plugin_name' => ELEMENTOR_PRO_PLUGIN_BASE,
				'plugin_slug' => basename( ELEMENTOR_PRO__FILE__, '.php' ),
				'package_url' => $package_url,
			] );
		}

		$rollback->run();

		wp_die( '', esc_html__( 'Rollback to Previous Version', 'elementor-pro' ), [ 'response' => 200 ] );
	}

	public function plugin_row_meta( $plugin_meta, $plugin_file ) {
		if ( ELEMENTOR_PRO_PLUGIN_BASE === $plugin_file ) {
			$row_meta = [
				'changelog' => '<a href="https://go.elementor.com/pro-changelog/" title="' . esc_attr( esc_html__( 'View Elementor Pro Changelog', 'elementor-pro' ) ) . '" target="_blank">' . esc_html__( 'Changelog', 'elementor-pro' ) . '</a>',
			];

			$plugin_meta = array_merge( $plugin_meta, $row_meta );
		}

		return $plugin_meta;
	}

	public function add_finder_items( array $categories ) {
		$categories['settings']['items']['integrations'] = [
			'title' => esc_html__( 'Integrations', 'elementor-pro' ),
			'icon' => 'integration',
			'url' => Settings::get_settings_tab_url( 'integrations' ),
			'keywords' => [ 'integrations', 'settings', 'typekit', 'facebook', 'recaptcha', 'mailchimp', 'drip', 'activecampaign', 'getresponse', 'convertkit', 'elementor' ],
		];

		return $categories;
	}

	public function register_ajax_actions( $ajax_manager ) {
		$ajax_manager->register_ajax_action( 'elementor_site_mailer_campaign', [ $this, 'handle_hints_cta' ] );
	}

	public function handle_hints_cta( $request ) {
		if ( ! current_user_can( 'install_plugins' ) ) {
			wp_send_json_error();
		}

		if ( empty( $request['source'] ) ) {
			return;
		}

		$campaign_data = [
			'source' => sanitize_key( $request['source'] ),
			'campaign' => 'sm-plg-v' . ProUtils\Abtest::get_variation( 'plg_site_mailer_submission' ),
			'medium' => 'wp-dash',
		];

		set_transient( 'elementor_site_mailer_campaign', $campaign_data, 30 * DAY_IN_SECONDS );
	}

	/**
	 * Admin constructor.
	 */
	public function __construct() {
		if (!defined('IS_PRO_ELEMENTS'))
		$this->add_component( 'canary-deployment', new Canary_Deployment() );

		add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_styles' ] );
		add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_scripts' ] );
		if (!defined('IS_PRO_ELEMENTS'))
		add_action( 'admin_menu', [ $this, 'remove_go_pro_menu' ], 0 );
		else add_action( 'admin_menu', [ $this, 'remove_go_pro_menu' ], 999 );

		add_filter( 'elementor/finder/categories', [ $this, 'add_finder_items' ] );

		if (defined('IS_PRO_ELEMENTS')) return;
		add_filter( 'elementor/tracker/send_tracking_data_params', [ $this, 'change_tracker_params' ], 200 );

		add_action( 'elementor/admin/after_create_settings/' . Tools::PAGE_ID, [ $this, 'register_admin_tools_fields' ], 50 );

		add_filter( 'plugin_action_links_' . ELEMENTOR_PLUGIN_BASE, function ( $links ) {
			return Action_Links::get_links( $links );
		}, 50 );
		add_filter( 'plugin_action_links_' . ELEMENTOR_PRO_PLUGIN_BASE, function ( $links ) {
			return Action_Links::get_pro_links( $links );
		}, 50 );

		add_filter( 'plugin_row_meta', [ $this, 'plugin_row_meta' ], 10, 2 );

		add_filter( 'elementor/finder/categories', [ $this, 'add_finder_items' ] );

		add_action( 'admin_post_elementor_pro_rollback', [ $this, 'post_elementor_pro_rollback' ] );
		add_action( 'in_plugin_update_message-' . ELEMENTOR_PRO_PLUGIN_BASE, function( $plugin_data ) {
			Plugin::elementor()->admin->version_update_warning( ELEMENTOR_PRO_VERSION, $plugin_data['new_version'] );
		} );

		add_action( 'elementor/ajax/register_actions', [ $this, 'register_ajax_actions' ] );
	}
}
