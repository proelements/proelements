<?php
namespace ElementorPro\Modules\ShareButtons;

use ElementorPro\Base\Module_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {

	private static $networks = [
		'facebook' => [
			'title' => 'Facebook',
			'has_counter' => true,
		],
		'twitter' => [
			'title' => 'Twitter',
		],
		'linkedin' => [
			'title' => 'LinkedIn',
			'has_counter' => true,
		],
		'pinterest' => [
			'title' => 'Pinterest',
			'has_counter' => true,
		],
		'reddit' => [
			'title' => 'Reddit',
			'has_counter' => true,
		],
		'vk' => [
			'title' => 'VK',
			'has_counter' => true,
		],
		'odnoklassniki' => [
			'title' => 'OK',
			'has_counter' => true,
		],
		'tumblr' => [
			'title' => 'Tumblr',
		],
		'digg' => [
			'title' => 'Digg',
		],
		'skype' => [
			'title' => 'Skype',
		],
		'stumbleupon' => [
			'title' => 'StumbleUpon',
			'has_counter' => true,
		],
		'mix' => [
			'title' => 'Mix',
		],
		'telegram' => [
			'title' => 'Telegram',
		],
		'pocket' => [
			'title' => 'Pocket',
			'has_counter' => true,
		],
		'xing' => [
			'title' => 'XING',
			'has_counter' => true,
		],
		'whatsapp' => [
			'title' => 'WhatsApp',
		],
		'email' => [
			'title' => 'Email',
		],
		'print' => [
			'title' => 'Print',
		],
		'x-twitter' => [
			'title' => 'X',
		],
		'threads' => [
			'title' => 'Threads',
		],
	];

	public static function get_networks( $network_name = null ) {
		if ( $network_name ) {
			return self::$networks[ $network_name ] ?? null;
		}

		return self::$networks;
	}

	public function get_widgets() {
		return [
			'Share_Buttons',
		];
	}

	public function get_name() {
		return 'share-buttons';
	}

	public function add_localize_data( $settings ) {
		$settings['shareButtonsNetworks'] = self::get_networks();

		return $settings;
	}

	/**
	 * Get the base URL for assets.
	 *
	 * @return string
	 */
	public function get_assets_base_url(): string {
		return ELEMENTOR_PRO_URL;
	}

	/**
	 * Register styles.
	 *
	 * At build time, Elementor compiles `/modules/share-buttons/assets/scss/frontend.scss`
	 * to `/assets/css/widget-share-buttons.min.css`.
	 *
	 * @return void
	 */
	public function register_styles() {
		wp_register_style(
			'widget-share-buttons',
			$this->get_css_assets_url( 'widget-share-buttons', null, true, true ),
			[ 'elementor-frontend' ],
			ELEMENTOR_PRO_VERSION
		);
	}

	public function __construct() {
		parent::__construct();

		add_action( 'elementor/frontend/after_register_styles', [ $this, 'register_styles' ] );

		add_filter( 'elementor_pro/frontend/localize_settings', [ $this, 'add_localize_data' ] );

		add_filter( 'elementor_pro/editor/localize_settings', [ $this, 'add_localize_data' ] );
	}
}
