<?php
namespace ElementorPro\Modules\Woocommerce\Data\Endpoints;

use Elementor\Data\Base\Endpoint;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Base_Endpoint extends Endpoint {

	const IS_CART_NOTICE_DISMISSED = 'is_custom_wc_cart_notice_dismissed';

	public function get_name() : string {}

	public function get_route() : string {
		return $this->get_name();
	}

	protected function permission_callback(): bool {
		return current_user_can( 'edit_posts' );
	}
}
