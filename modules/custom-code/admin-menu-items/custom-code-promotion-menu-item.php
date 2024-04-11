<?php
namespace ElementorPro\Modules\CustomCode\AdminMenuItems;

use ElementorPro\License\API;
use ElementorPro\Modules\Tiers\AdminMenuItems\Base_Promotion_Template;
use ElementorPro\Plugin;
use ElementorPro\Modules\CustomCode\Module as Custom_Code_Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Custom_Code_Promotion_Menu_Item extends Base_Promotion_Template {
	public function get_name(): string {
		return 'custom-code-promotion';
	}

	public function get_cta_url(): string {
		if ( ! API::active_licence_has_feature( Custom_Code_Module::MODULE_NAME ) ) {
			$upgrade_url = 'https://go.elementor.com/go-pro-advanced-custom-code/';

			return $upgrade_url;
		}

		$connect_url = Plugin::instance()->license_admin->get_connect_url( [
			'utm_source' => 'custom-code',
			'utm_medium' => 'wp-dash',
			'utm_campaign' => 'connect-and-activate-license',
		] );

		$renew_url = 'https://go.elementor.com/renew-custom-code/';

		return API::is_license_expired()
			? $renew_url
			: $connect_url;
	}

	public function get_cta_text() {
		if ( ! API::active_licence_has_feature( Custom_Code_Module::MODULE_NAME ) ) {
			return esc_html__( 'Upgrade Now', 'elementor-pro' );
		}

		return API::is_license_expired()
			? esc_html__( 'Renew now', 'elementor-pro' )
			: esc_html__( 'Connect & Activate', 'elementor-pro' );
	}

	public function get_label() {
		return $this->get_page_title();
	}

	public function get_page_title() {
		return esc_html__( 'Custom Code', 'elementor-pro' );
	}

	public function get_promotion_title(): string {
		return sprintf( esc_html__( 'Enjoy Creative Freedom %s with Custom Code', 'elementor-pro' ), '<br />' );
	}

	public function get_video_url(): string {
		return 'https://www.youtube-nocookie.com/embed/IOovQd1hJUg?si=JLHk3UAexnvTfU1a';
	}

	public function get_promotion_description() {
		return esc_html__(
			'Add Custom Code snippets to your website.',
			'elementor-pro'
		);
	}

	public function get_side_note(): string {
		return esc_html__( '* Requires an Advanced subscription or higher', 'elementor-pro' );
	}

	/**
	 * @deprecated use get_promotion_description instead
	 * @return void
	 */
	public function render_promotion_description() {
		echo $this->get_promotion_description(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}

	protected function get_content_lines(): array {
		return [
			esc_html__( 'Add Custom Code snippets anywhere on your website, including the header or footer to measure your page’s performance*', 'elementor-pro' ),
			esc_html__( 'Use Custom Code to create sophisticated custom interactions to engage visitors', 'elementor-pro' ),
			esc_html__( 'Leverage Elementor AI to instantly generate Custom Code for Elementor', 'elementor-pro' ),
		];
	}
}
