<?php
namespace ElementorPro\Modules\ElementManager;

use Elementor\Utils;
use ElementorPro\Base\Module_Base;
use ElementorPro\License\API;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {

	const LICENSE_FEATURE_NAME = 'element-manager-permissions';

	public function get_name() {
		return 'element-manager';
	}

	public function __construct() {
		parent::__construct();

		// TODO: Should we move this to the `is_active` method?
		if ( ! API::is_licence_has_feature( static::LICENSE_FEATURE_NAME ) ) {
			return;
		}

		add_filter( 'elementor/document/config', function( $additional_config, $main_id ) {
			$elements_restricted_roles = Options::get_role_restrictions();
			$user = wp_get_current_user();

			foreach ( $elements_restricted_roles as $element_name => $restricted_roles ) {
				$compare_roles = array_intersect( $user->roles, $restricted_roles );

				if ( ! empty( $compare_roles ) ) {
					$additional_config['widgets'][ $element_name ]['show_in_panel'] = false;
				}
			}

			return $additional_config;
		}, 100, 2 );

		add_action( 'elementor/element_manager/save_disabled_elements', function() {
			$role_restrictions = Utils::get_super_global_value( $_POST, 'elements_restriction' ); // phpcs:ignore WordPress.Security.NonceVerification.Missing

			if ( empty( $role_restrictions ) ) {
				return;
			}

			$role_restrictions = json_decode( $role_restrictions, true );

			if ( is_array( $role_restrictions ) ) {
				Options::update_role_restrictions( $role_restrictions );
			}
		} );

		add_filter( 'elementor/element_manager/admin_app_data/additional_data', function( $additional_data ) {
			$additional_data['roles'] = $this->get_roles();
			$additional_data['role_restrictions'] = Options::get_role_restrictions();

			return $additional_data;
		} );
	}

	private function get_roles() : array {
		$roles = [];

		foreach ( get_editable_roles() as $role => $details ) {
			if ( 'administrator' === $role ) {
				continue;
			}

			$name = translate_user_role( $details['name'] );

			$roles[] = [
				'id' => $role,
				'name' => $name,
			];
		}

		return $roles;
	}
}
