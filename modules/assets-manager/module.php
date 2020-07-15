<?php
namespace ElementorPro\Modules\AssetsManager;

use ElementorPro\Base\Module_Base;
use ElementorPro\Modules\AssetsManager\AssetTypes;

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

	// Add translation string for the modal that appears when a user tries
	// to publish a new font "post" without uploading/choosing one
	public function localize_settings( $settings ) {
		$settings = array_replace_recursive( $settings, [
			'i18n' => [
				'fontsUploadEmptyNotice' => __( 'Choose a font to publish.', 'elementor-pro' ),
				'iconsUploadEmptyNotice' => __( 'Upload an icon set to publish.', 'elementor-pro' ),
			],
		] );

		return $settings;
	}

	public function __construct() {
		parent::__construct();

		add_filter( 'elementor_pro/admin/localize_settings', [ $this, 'localize_settings' ] );
		$this->add_asset_manager( 'font', new AssetTypes\Fonts_Manager() );
		$this->add_asset_manager( 'icon', new AssetTypes\Icons_Manager() );
	}
}
