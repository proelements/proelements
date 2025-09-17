<?php
namespace ElementorPro\Modules\AssetsManager;

use ElementorPro\Base\Module_Base;
use ElementorPro\Modules\AssetsManager\AssetTypes;
use ElementorPro\Modules\AssetsManager\AssetTypes\Fonts\ImportExport\Import_Export as Fonts_Import_Export;
use ElementorPro\Modules\AssetsManager\AssetTypes\Icons\ImportExport\Import_Export as Icons_Import_Export;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {

	private $asset_managers = [];

	public function get_name() {
		return 'assets-manager';
	}

	public function add_asset_manager( $name, $instance ) {
		$this->asset_managers[ $name ] = $instance;
	}

	public function get_assets_manager( $id = null ) {
		if ( $id ) {
			if ( ! isset( $this->asset_managers[ $id ] ) ) {
				return null;
			}

			return $this->asset_managers[ $id ];
		}

		return $this->asset_managers;
	}

	public function __construct() {
		parent::__construct();

		$this->add_asset_manager( 'font', new AssetTypes\Fonts_Manager() );
		$this->add_asset_manager( 'icon', new AssetTypes\Icons_Manager() );

		$this->register_import_export();
	}

	private function register_import_export() {
		( new Fonts_Import_Export() )->register_hooks();
		( new Icons_Import_Export() )->register_hooks();
	}
}
