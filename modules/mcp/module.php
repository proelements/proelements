<?php

namespace ElementorPro\Modules\Mcp;

use Elementor\Modules\Mcp\Module as Core_Mcp_Module;
use Elementor\Modules\Mcp\Registry\Ability_Registry;
use Elementor\Plugin as CorePlugin;
use ElementorPro\Base\Module_Base;
use ElementorPro\Modules\Mcp\Abilities\List_Site_Parts_Ability;
use ElementorPro\Modules\Mcp\Abilities\Manage_Site_Parts_Ability;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Module extends Module_Base {

	public function get_name() {
		return 'mcp';
	}

	public static function is_active() {
		return function_exists( 'wp_register_ability' );
	}

	public function __construct() {
		parent::__construct();

		$registry = $this->get_core_registry();

		if ( $registry ) {
			$this->register_with_registry( $registry );
			return;
		}

		add_action( 'wp_abilities_api_init', [ $this, 'register_abilities_legacy' ] );
		add_filter( 'elementor/mcp/server/tools', [ $this, 'register_tool_slugs' ] );
	}

	public function register_abilities_legacy(): void {
		( new Manage_Site_Parts_Ability() )->register();
		( new List_Site_Parts_Ability() )->register();
	}

	public function register_tool_slugs( array $tools ): array {
		$tools[] = 'elementor/manage-site-parts';
		$tools[] = 'elementor/list-site-parts';

		return $tools;
	}

	private function register_with_registry( Ability_Registry $registry ): void {
		$registry->add( new Manage_Site_Parts_Ability() );
		$registry->add( new List_Site_Parts_Ability() );
	}

	private function get_core_registry(): ?Ability_Registry {
		if ( ! class_exists( Ability_Registry::class ) ) {
			return null;
		}

		$module = CorePlugin::$instance->modules_manager->get_modules( 'mcp' );

		if ( ! $module instanceof Core_Mcp_Module ) {
			return null;
		}

		return $module->registry();
	}
}
