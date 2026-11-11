<?php

namespace ElementorPro\Modules\AdminNotices\Notices;

use ElementorPro\Modules\AdminNotices\Classes\Upgrade_Recommendation_Dismissal;
use ElementorPro\Modules\AdminNotices\Components\Notice_Renderer;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Upgrade_Recommendation_Notice {

	private const CORE_PLUGIN_FILE = 'elementor/elementor.php';

	public function should_print(): bool {
		if ( ! current_user_can( 'update_plugins' ) ) {
			return false;
		}

		if ( ! defined( 'ELEMENTOR_VERSION' ) ) {
			return false;
		}

		$core_version = ELEMENTOR_VERSION;
		$recommended_version = ELEMENTOR_PRO_RECOMMENDED_CORE_VERSION;

		if ( ! Upgrade_Recommendation_Dismissal::should_show_notice( $recommended_version, $core_version ) ) {
			return false;
		}

		return self::is_core_update_downloadable( $recommended_version );
	}

	private static function is_core_update_downloadable( string $recommended_version ): bool {
		$update_plugins = get_site_transient( 'update_plugins' );

		if ( ! is_object( $update_plugins ) || empty( $update_plugins->response[ self::CORE_PLUGIN_FILE ] ) ) {
			return false;
		}

		$core_update = $update_plugins->response[ self::CORE_PLUGIN_FILE ];
		$package = self::get_core_update_field( $core_update, 'package' );

		if ( '' === $package ) {
			return false;
		}

		$new_version = self::get_core_update_field( $core_update, 'new_version' );

		if ( '' === $new_version ) {
			return false;
		}

		return version_compare( $new_version, $recommended_version, '>=' );
	}

	private static function get_core_update_field( $core_update, string $field ): string {
		if ( is_object( $core_update ) && isset( $core_update->{$field} ) ) {
			return (string) $core_update->{$field};
		}

		if ( is_array( $core_update ) && isset( $core_update[ $field ] ) ) {
			return (string) $core_update[ $field ];
		}

		return '';
	}

	public function print(): void {
		if ( ! $this->should_print() ) {
			return;
		}

		$file_path = 'elementor/elementor.php';
		$upgrade_link = wp_nonce_url( self_admin_url( 'update.php?action=upgrade-plugin&plugin=' ) . $file_path, 'upgrade-plugin_' . $file_path );
		$recommended_version = ELEMENTOR_PRO_RECOMMENDED_CORE_VERSION;
		$notice_id = Upgrade_Recommendation_Dismissal::get_notice_id( $recommended_version );

		$renderer = new Notice_Renderer();
		$renderer->print_admin_notice( [
			'id' => $notice_id,
			'title' => esc_html__( 'Don’t miss out on the new version of Elementor', 'elementor-pro' ),
			'description' => esc_html__( 'Update to the latest version of Elementor to enjoy new features, better performance and compatibility.', 'elementor-pro' ),
			'button' => [
				'text' => esc_html__( 'Update Now', 'elementor-pro' ),
				'url' => $upgrade_link,
				'type' => 'cta',
			],
			'dismissible' => true,
		], [] );
	}
}
