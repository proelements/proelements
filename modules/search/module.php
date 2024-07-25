<?php
namespace ElementorPro\Modules\Search;

use Elementor\Core\Experiments\Manager;
use Elementor\Utils;
use ElementorPro\Base\Module_Base;
use ElementorPro\Plugin;
use ElementorPro\Modules\Search\Data\Controller;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {

	const FEATURE_ID = 'search';

	public function __construct() {
		parent::__construct();

		add_action( 'pre_get_posts', [ $this, 'set_query' ] );
		add_filter( 'elementor_pro/editor/localize_settings', [ $this, 'add_localize_data' ] );

		new Controller();
	}

	public function get_name() {
		return self::FEATURE_ID;
	}

	public static function get_experimental_data() {
		return [
			'name' => self::FEATURE_ID,
			'title' => esc_html__( 'Search', 'elementor-pro' ),
			'description' => sprintf(
			/* translators: 1: opening link tag, 2: closing link tag. */
				esc_html__( 'This feature introduces real-time search functionality, enabling users to view search results instantly as they type. Furthermore, users can limit the search results to certain queries and effortlessly navigate to search archives for comprehensive exploration. %1$sLearn More%2$s', 'elementor-pro' ),
				'<a href="https://go.elementor.com/wp-dash-search-widget-experiment/" target="_blank">',
				'</a>',
			),
			'release_status' => Manager::RELEASE_STATUS_BETA,
			'default' => Manager::STATE_INACTIVE,
			'new_site' => [
				'default_active' => true,
				'minimum_installation_version' => '3.23.0',
			],
		];
	}

	protected function get_widgets() {
		return [ 'Search' ];
	}

	public static function is_active() {
		return Plugin::elementor()->experiments->is_feature_active( self::FEATURE_ID );
	}

	public function add_localize_data( $config ) {

		$config['eSearch'] = [
			'nonce' => wp_create_nonce( 'wp_rest' ),
		];

		return $config;
	}

	public function set_query( $query ) {
		$query_vars = json_decode( stripcslashes( Utils::get_super_global_value( $_GET, 'e_search_query' ) ?? '' ), true ) ?? null;
		$search_term = Utils::get_super_global_value( $_GET, 's' );

		if ( ! $query_vars || ! isset( $search_term ) || is_admin() || ! $query->is_main_query() ) {
			return;
		}

		foreach ( $query_vars as $key => $value ) {
			$query->set( $key, $value );
		}
	}
}
