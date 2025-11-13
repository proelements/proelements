<?php
namespace ElementorPro\Core\Editor;

use Elementor\Core\Utils\Promotions\Filtered_Promotions_Manager;
use ElementorPro\License\API;
use ElementorPro\License\Admin;
use Elementor\Core\Editor\Promotion as Base_Promotion;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Promotion extends Base_Promotion {
	public function get_elements_promotion() {
		return $this->get_elements_promotion__default();
	}
	private function get_elements_promotion__default() {
		return [
			/* translators: %s: Widget title. */
			'title' => __( '%s Widget', 'elementor-pro' ),
			'content' =>
				/* translators: %s: Widget title. */
				__(
					'Use %s widget and dozens more pro features to extend your toolbox and build sites faster and better.',
					'elementor-pro'
				),
			'action_button' => [
				'text' => __( 'Connect & Activate', 'elementor-pro' ),
				'url' => Admin::get_url(),
			],
		];
	}
}
