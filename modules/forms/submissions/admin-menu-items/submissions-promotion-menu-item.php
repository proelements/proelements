<?php
namespace ElementorPro\Modules\Forms\Submissions\AdminMenuItems;

use ElementorPro\Modules\Tiers\AdminMenuItems\Base_Promotion_Template;
use Elementor\Settings;
use ElementorPro\License\API;
use ElementorPro\Plugin;
use ElementorPro\Modules\Forms\Submissions\Component as Form_Submissions_Component;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Submissions_Promotion_Menu_Item extends Base_Promotion_Template {
	public function get_name(): string {
		return 'submissions-promotion';
	}

	public function get_label(): string {
		return $this->get_page_title();
	}

	public function get_page_title(): string {
		return esc_html__( 'Submissions', 'elementor-pro' );
	}

	protected function get_promotion_title(): string {
		return esc_html__( 'Seal the deal on your Form Submissions', 'elementor-pro' ) . '<br>';
	}

	protected function get_content_lines():array {
		return [
			esc_html__( 'Integrate your favorite marketing software', 'elementor-pro' ),
			esc_html__( 'Collect lead submissions directly within your WordPress Admin to manage, analyze and perform bulk actions on the submitted lead', 'elementor-pro' ),
		];
	}

	protected function get_video_url(): string {
		return 'https://www.youtube-nocookie.com/embed/LNfnwba9C-8?si=JLHk3UAexnvTfU1a';
	}

	public function get_cta_text() {
		if ( ! API::active_licence_has_feature( Form_Submissions_Component::NAME ) ) {
			return esc_html__( 'Upgrade Now', 'elementor-pro' );
		}

		return API::is_license_expired()
			? esc_html__( 'Renew now', 'elementor-pro' )
			: esc_html__( 'Connect & Activate', 'elementor-pro' );
	}

	protected function get_cta_url(): string {
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
}
