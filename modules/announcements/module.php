<?php
namespace ElementorPro\Modules\Announcements;

use Elementor\Core\Base\App as BaseApp;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Module extends BaseApp {

	/**
	 * @return bool
	 */
	public static function is_active(): bool {
		return is_admin();
	}

	/**
	 * @return string
	 */
	public function get_name(): string {
		return 'announcements';
	}

	public function __construct() {
		parent::__construct();

		add_filter( 'elementor/announcements/raw_announcements', function ( $raw_announcements ) {
			$raw_announcement = [
				'title'       => __( 'Keep Your Website’s Shine On', 'elementor-pro' ),
				'description' => __( '<p>Your Elementor Pro subscription has expired. Renew it now to regain access to the Pro features that elevate your website.</p>
				<ul>
					<li>Manage and edit every part of your website, including pages, templates, headers, footers, and more.</li>
					<li>Increase engagement and conversion with Elementor’s marketing features including Forms, and Popups.</li>
					<li>Update your website’s content and design using Elementor Pro’s professional widgets and features for any need.</li>
					<li>Keep your website secure and compatible by updating your Elementor Pro website to the latest version.</li>
				</ul>', 'elementor-pro' ),
				'media'       => [
					'type' => 'image',
					'src'  => ELEMENTOR_PRO_ASSETS_URL . 'images/announcements/license-expired.png?' . ELEMENTOR_PRO_VERSION,
				],
				'cta' => [
					[
						'label'   => __( 'Renew Now', 'elementor-pro' ),
						'variant' => 'primary',
						'target'  => '_blank',
						'url'     => 'https://go.elementor.com/renew-license-editor-expired-modal/',
					],
					[
						'label' => __( 'Learn More', 'elementor-pro' ),
						'target' => '_blank',
						'url' => 'https://go.elementor.com//learn-more-editor-expired-modal/',
					],
				],
				'triggers'    => [
					[
						'action' => 'isLicenseExpired',
					],
				],
			];

			array_unshift( $raw_announcements, $raw_announcement );

			return $raw_announcements;
		}, 400 );

		add_filter( 'elementor/announcements/trigger_object', function( $object_trigger, $trigger ) {
			if ( ! empty( $trigger['action'] ) && 'isLicenseExpired' === $trigger['action'] ) {
				$object_trigger = new Triggers\IsLicenseExpired();
			}

			return $object_trigger;
		}, 400, 2 );
	}
}
