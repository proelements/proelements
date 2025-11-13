<?php
namespace ElementorPro\Core\App\Modules\ImportExportCustomization;

use Elementor\Core\Base\Module as BaseModule;
use ElementorPro\Core\App\Modules\ImportExportCustomization\Runners\Export;
use ElementorPro\Core\App\Modules\ImportExportCustomization\Runners\Import;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Module extends BaseModule {

	private $export_runners = [
		'site-settings' => Export\Site_Settings::class,
		'plugins' => Export\Plugins::class,
		'templates' => Export\Templates::class,
		'taxonomies' => Export\Taxonomies::class,
	];

	private $import_runners = [
		'site-settings' => Import\Site_Settings::class,
		'plugins' => Import\Plugins::class,
		'templates' => Import\Templates::class,
		'taxonomies' => Import\Taxonomies::class,
		'elementor-content' => Import\Elementor_Content::class,
	];

	public function get_name() {
		return 'import-export-customization';
	}

	public function __construct() {
		parent::__construct();
		$this->add_actions();
	}

	private function add_actions() {
		add_filter( 'elementor/import-export-customization/export/site-settings/customization', [ $this, 'export_site_settings_customization' ], 10, 4 );
		add_filter( 'elementor/import-export-customization/import/site-settings/customization', [ $this, 'import_site_settings_customization' ], 10, 5 );

		add_filter( 'elementor/import-export-customization/export/templates/customization', [ $this, 'export_templates_customization' ], 10, 4 );
		add_filter( 'elementor/import-export-customization/import/templates/customization', [ $this, 'import_templates_customization' ], 10, 5 );

		add_filter( 'elementor/import-export-customization/export/taxonomies/customization', [ $this, 'export_taxonomies_customization' ], 10, 4 );
		add_filter( 'elementor/import-export-customization/import/taxonomies/customization', [ $this, 'import_taxonomies_customization' ], 10, 5 );

		add_filter( 'elementor/import-export-customization/import/elementor-content/customization', [ $this, 'import_elementor_content_customization' ], 10, 5 );

		add_filter( 'elementor/import-export-customization/elementor-content/post-types/customization', [ $this, 'elementor_content_post_types' ], 10, 2 );
		add_filter( 'elementor/import-export-customization/wp-content/post-types/customization', [ $this, 'wp_content_post_types' ], 10, 2 );
		add_filter( 'elementor/import-export-customization/export/elementor-content/query-args/customization', [ $this, 'export_elementor_content_filter_query_args' ], 10, 3 );
		add_filter( 'elementor/import-export-customization/export/wp-content/query-args/customization', [ $this, 'wp_content_filter_query_args' ], 10, 3 );
		add_filter( 'elementor/import-export-customization/import/wp-content/query-args/customization', [ $this, 'wp_content_filter_query_args' ], 10, 3 );
	}

	public function export_site_settings_customization( $result, array $data, array $customization, $runner ) {
		return $this->delegate_to_export_runner( 'site-settings', $result, $data, $customization, $runner );
	}

	public function import_site_settings_customization( $result, array $data, array $imported_data, array $customization, $runner ) {
		return $this->delegate_to_import_runner( 'site-settings', $result, $data, $imported_data, $customization, $runner );
	}

	public function export_templates_customization( $result, array $data, array $customization, $runner ) {
		return $this->delegate_to_export_runner( 'templates', $result, $data, $customization, $runner );
	}

	public function import_templates_customization( $result, array $data, array $imported_data, array $customization, $runner ) {
		return $this->delegate_to_import_runner( 'templates', $result, $data, $imported_data, $customization, $runner );
	}

	public function export_taxonomies_customization( $result, array $data, $customization, $runner ) {
		return $this->delegate_to_export_runner( 'taxonomies', $result, $data, $customization, $runner );
	}

	public function import_taxonomies_customization( $result, array $data, array $imported_data, $customization, $runner ) {
		return $this->delegate_to_import_runner( 'taxonomies', $result, $data, $imported_data, $customization, $runner );
	}

	public function import_elementor_content_customization( $result, array $data, array $imported_data, $customization, $runner ) {
		return $this->delegate_to_import_runner( 'elementor-content', $result, $data, $imported_data, $customization, $runner );
	}

	public function elementor_content_post_types( $post_types, $customization ) {
		$selected_pages = $customization['pages'] ?? null;

		if ( null !== $selected_pages && empty( $selected_pages ) ) {
			return array_filter( $post_types, function ( $post_type ) {
				return 'page' !== $post_type;
			} );
		}

		return $post_types;
	}

	public function export_elementor_content_filter_query_args( $query_args, $post_type, $customization ) {
		$selected_pages = $customization['pages'] ?? null;

		if ( 'page' === $post_type && ! empty( $selected_pages ) ) {
			$query_args['post__in'] = $selected_pages;
		}

		return $query_args;
	}

	public function wp_content_filter_query_args( $query_args, $post_type, $customization ) {
		if ( 'page' === $post_type ) {
			$query_args['include'] = $customization['pages'] ?? null;
		}

		return $query_args;
	}

	public function wp_content_post_types( $post_types, $data ) {
		$customization = $data['customization']['content'] ?? null;
		$selected_pages = $customization['pages'] ?? null;
		$include_menus = ! is_null( $customization['menus'] ) ? $customization['menus'] : true;

		$exclude_post_types = [];

		if ( ! $include_menus ) {
			$exclude_post_types[] = 'nav_menu_item';
		}

		if ( null !== $selected_pages && empty( $selected_pages ) ) {
			$exclude_post_types[] = 'page';
		}

		return array_diff( $post_types, $exclude_post_types );
	}

	/**
	 * Delegate export to the appropriate runner.
	 *
	 * @param string $type Customization type
	 * @param mixed $result Previous filter result
	 * @param array $data Export data
	 * @param array $customization Customization settings
	 * @param object $runner Core runner instance
	 * @return mixed
	 */
	private function delegate_to_export_runner( string $type, $result, array $data, array $customization, $runner ) {
		$runner_class = $this->export_runners[ $type ] ?? null;

		if ( ! $runner_class ) {
			return $result;
		}

		return ( new $runner_class() )->handle( $result, $data, $customization, $runner );
	}

	/**
	 * Delegate import to the appropriate runner.
	 *
	 * @param string $type Customization type
	 * @param mixed $result Previous filter result
	 * @param array $data Import data
	 * @param array $imported_data Already imported data
	 * @param array $customization Customization settings
	 * @param object $runner Core runner instance
	 * @return mixed
	 */
	private function delegate_to_import_runner( string $type, $result, array $data, array $imported_data, array $customization, $runner ) {
		$runner_class = $this->import_runners[ $type ] ?? null;

		if ( ! $runner_class ) {
			return $result;
		}

		return ( new $runner_class() )->handle( $result, $data, $imported_data, $customization, $runner );
	}
}
