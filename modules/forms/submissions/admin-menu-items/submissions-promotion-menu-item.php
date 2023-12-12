<?php
namespace ElementorPro\Modules\Forms\Submissions\AdminMenuItems;

use Elementor\Modules\Promotions\AdminMenuItems\Base_Promotion_Item;
use Elementor\Settings;
use ElementorPro\License\API;
use ElementorPro\Plugin;
use ElementorPro\Modules\Forms\Submissions\Component as Form_Submissions_Component;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Submissions_Promotion_Menu_Item extends Base_Promotion_Item {
	public function get_label() {
		return esc_html__( 'Submissions', 'elementor-pro' );
	}

	public function get_page_title() {
		return esc_html__( 'Submissions', 'elementor-pro' );
	}

	public function get_cta_url() {
		if ( ! API::active_licence_has_feature( Form_Submissions_Component::NAME ) ) {
			$upgrade_url = 'https://go.elementor.com/go-pro-advanced-form-submissions/';

			return $upgrade_url;
		}

		$connect_url = Plugin::instance()->license_admin->get_connect_url( [
			'utm_source' => 'wp-dash-submissions',
			'utm_medium' => 'wp-dash',
			'utm_campaign' => 'connect-and-activate-license',
		] );

		$renew_url = 'https://go.elementor.com/renew-submissions/';

		return API::is_license_expired()
				? $renew_url
				: $connect_url;
	}

	public function get_cta_text() {
		if ( ! API::active_licence_has_feature( Form_Submissions_Component::NAME ) ) {
			return esc_html__( 'Upgrade Now', 'elementor-pro' );
		}

		return API::is_license_expired()
				? esc_html__( 'Renew now', 'elementor-pro' )
				: esc_html__( 'Connect & Activate', 'elementor-pro' );
	}

	public function get_promotion_title() {
		return esc_html__( 'Collect Your Form Submissions', 'elementor-pro' );
	}

	public function render_promotion_description() {
		echo esc_html__(
			'Store all your form submissions within Elementor. Manage, analyze, or export leads easily.',
			'elementor-pro'
		);
	}
}
