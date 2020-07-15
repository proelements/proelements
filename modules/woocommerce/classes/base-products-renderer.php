<?php
namespace ElementorPro\Modules\Woocommerce\Classes;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

abstract class Base_Products_Renderer extends \WC_Shortcode_Products {

	/**
	 * Override original `get_content` that returns an HTML wrapper even if no results found.
	 *
	 * @return string Products HTML
	 */
	public function get_content() {
		$result = $this->get_query_results();

		if ( empty( $result->total ) ) {
			return '';
		}

		return parent::get_content();
	}
}
