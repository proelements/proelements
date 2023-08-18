<?php
namespace ElementorPro\Modules\Posts;

use Elementor\Utils;
use ElementorPro\Base\Module_Base;
use ElementorPro\Modules\Posts\Data\Controller;
use ElementorPro\Modules\Posts\Widgets\Posts_Base;
use ElementorPro\Plugin;
use ElementorPro\Modules\Posts\Traits\Pagination_Trait;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {
	use Pagination_Trait;

	public function get_name() {
		return 'posts';
	}

	public function get_widgets() {
		return [
			'Posts',
			'Portfolio',
		];
	}

	/**
	 * Fix WP 5.5 pagination issue.
	 *
	 * Return true to mark that it's handled and avoid WP to set it as 404.
	 *
	 * @see https://github.com/elementor/elementor/issues/12126
	 * @see https://core.trac.wordpress.org/ticket/50976
	 *
	 * Based on the logic at \WP::handle_404.
	 *
	 * @param $handled - Default false.
	 * @param $wp_query
	 *
	 * @return bool
	 */
	public function allow_posts_widget_pagination( $handled, $wp_query ) {
		// Check it's not already handled and it's a single paged query.
		if ( $handled || empty( $wp_query->query_vars['page'] ) || ! is_singular() || empty( $wp_query->post ) ) {
			return $handled;
		}

		$document = Plugin::elementor()->documents->get( $wp_query->post->ID );

		return $this->is_valid_pagination( $document->get_elements_data(), $wp_query->query_vars['page'] );
	}

	public function __construct() {
		parent::__construct();

		Plugin::elementor()->data_manager->register_controller( Controller::class );

		add_filter( 'pre_handle_404', [ $this, 'allow_posts_widget_pagination' ], 10, 2 );
	}

}
