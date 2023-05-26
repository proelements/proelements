<?php
namespace ElementorPro\Modules\Screenshots;

use ElementorPro\Base\Module_Base;
use Elementor\Core\Frontend\Render_Mode_Manager;
use ElementorPro\Core\Utils;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Module extends Module_Base {
	const SCREENSHOT_PROXY_NONCE_ACTION = 'screenshot_proxy';

	/**
	 * Module name.
	 *
	 * @return string
	 */
	public function get_name() {
		return 'screenshots';
	}

	/**
	 * Creates proxy for css and images,
	 * dom to image libraries cannot load content from another origin.
	 *
	 * @param $url
	 *
	 * @return string
	 */
	public function get_proxy_data( $url ) {
		$response = wp_remote_get( utf8_decode( $url ) );

		if ( is_wp_error( $response ) ) {
			return '';
		}

		$content_type = wp_remote_retrieve_headers( $response )->offsetGet( 'content-type' );

		header( 'content-type: ' . $content_type );

		return wp_remote_retrieve_body( $response );
	}

	/**
	 * Save screenshot and attached it to the post.
	 *
	 * @param $data
	 *
	 * @return bool|string
	 * @throws \Exception
	 */
	public function ajax_save( $data ) {
		if ( empty( $data['screenshot'] ) || empty( $data['post_id'] ) ) {
			return false;
		}

		if ( ! $this->can_user_manage_screenshots( $data['post_id'] ) ) {
			return false;
		}

		$screenshot = new Screenshot( $data['post_id'], $data['screenshot'] );

		$screenshot
			->create_dir()
			->upload()
			->remove_old_attachment()
			->create_new_attachment()
			->unmark_as_failed();

		return $screenshot->get_screenshot_url();
	}

	/**
	 * Remove the screenshot image and the attachment data.
	 *
	 * @param $data
	 *
	 * @return bool
	 */
	public function ajax_delete( $data ) {
		if ( empty( $data['post_id'] ) ) {
			return false;
		}

		if ( ! $this->can_user_manage_screenshots( $data['post_id'] ) ) {
			return false;
		}

		$screenshot = new Screenshot( $data['post_id'] );

		$screenshot
			->remove_old_attachment()
			->remove_old_post_meta()
			->unmark_as_failed();

		return true;
	}

	/**
	 * Mark screenshot as failed.
	 *
	 * @param $data
	 *
	 * @return bool
	 */
	public function ajax_screenshot_failed( $data ) {
		if ( empty( $data['post_id'] ) ) {
			return false;
		}

		if ( ! $this->can_user_manage_screenshots( $data['post_id'] ) ) {
			return false;
		}

		$screenshot = new Screenshot( $data['post_id'] );

		$screenshot->mark_as_failed();

		return true;
	}

	/**
	 * Extends the json of the templates.
	 * sets a screenshot as a thumbnail if exists, and if not will add a url to generate screenshot for
	 * the specific template.
	 *
	 * @param array $template
	 *
	 * @return array
	 */
	public function extend_templates_json_structure( $template ) {

		if ( ! empty( $template['thumbnail'] ) ) {
			return $template;
		}

		$attachment_data = get_post_meta( $template['id'], Screenshot::POST_META_KEY, true );

		if ( isset( $attachment_data['url'] ) ) {
			$template['thumbnail'] = $attachment_data['url'];

			return $template;
		}

		$failed_to_create_screenshot = get_post_meta( $template['id'], Screenshot::FAILED_POST_META_KEY, true );

		// If it failed to create screenshot before, it should not set screenshot_url, and should not try
		// to create another screenshot until the next edit of the template.
		if ( ! $failed_to_create_screenshot ) {
			$template['screenshot_url'] = Render_Mode_Screenshot::get_url( $template['id'] );
		}

		return $template;
	}

	/**
	 * @param \WP_Query $query
	 */
	public function filter_screenshots_from_attachments_query( \WP_Query $query ) {
		global $pagenow, $typenow;

		if ( 'upload.php' !== $pagenow || 'attachment' !== $typenow ) {
			return;
		}

		if ( empty( $query->query_vars['meta_query'] ) ) {
			$query->query_vars['meta_query'] = [];
		}

		$query->query_vars['meta_query'][] = [
			'key' => Screenshot::IS_SCREENSHOT_POST_META_KEY,
			'compare' => 'NOT EXISTS',
		];
	}

	public function filter_screenshots_from_ajax_attachments_query( $query ) {
		if ( empty( $query['meta_query'] ) ) {
			$query['meta_query'] = [];
		}

		$query['meta_query'][] = [
			'key' => Screenshot::IS_SCREENSHOT_POST_META_KEY,
			'compare' => 'NOT EXISTS',
		];

		return $query;
	}

	/**
	 * Register screenshots action.
	 *
	 * @param \Elementor\Core\Common\Modules\Ajax\Module $ajax_manager
	 */
	public function register_ajax_actions( $ajax_manager ) {
		$ajax_manager->register_ajax_action( 'screenshot_save', [ $this, 'ajax_save' ] );
		$ajax_manager->register_ajax_action( 'screenshot_delete', [ $this, 'ajax_delete' ] );
		$ajax_manager->register_ajax_action( 'screenshot_failed', [ $this, 'ajax_screenshot_failed' ] );
	}

	/**
	 * @param Render_Mode_Manager $manager
	 *
	 * @throws \Exception
	 */
	public function register_render_mode( Render_Mode_Manager $manager ) {
		$manager->register_render_mode( Render_Mode_Screenshot::class );
	}

	/**
	 * Check and validate proxy mode.
	 *
	 * @param array $query_params
	 *
	 * @return bool
	 * @throws \Requests_Exception_HTTP_400
	 * @throws \Requests_Exception_HTTP_403
	 * @throws Status400
	 * @throws Status403
	 */
	protected function is_screenshot_proxy_mode( array $query_params ) {
		$is_proxy = isset( $query_params['screenshot_proxy'] );

		if ( $is_proxy ) {
			if ( ! wp_verify_nonce( $query_params['nonce'], self::SCREENSHOT_PROXY_NONCE_ACTION ) ) {
				// WP >= 6.2-alpha
				if ( class_exists( '\WpOrg\Requests\Exception\Http\Status403' ) ) {
					throw new \WpOrg\Requests\Exception\Http\Status403();
				} else {
					throw new \Requests_Exception_HTTP_403();
				}
			}

			if ( ! $query_params['href'] ) {
				// WP >= 6.2-alpha
				if ( class_exists( '\WpOrg\Requests\Exception\Http\Status400' ) ) {
					throw new \WpOrg\Requests\Exception\Http\Status400();
				} else {
					throw new \Requests_Exception_HTTP_400();
				}
			}
		}

		return $is_proxy;
	}

	/**
	 * @param $post_id
	 *
	 * @return bool
	 * @throws \Exception
	 */
	private function can_user_manage_screenshots( $post_id ) {
		return Utils::_unstable_get_document_for_edit( $post_id ) && current_user_can( 'upload_files' );
	}

	/**
	 * Module constructor.
	 */
	public function __construct() {
		parent::__construct();

		if ( $this->is_screenshot_proxy_mode( $_GET ) ) { // phpcs:ignore -- Checking nonce inside the method.
			echo $this->get_proxy_data( $_GET['href'] ); // phpcs:ignore -- Nonce was checked on the above method
			die;
		}

		add_action( 'elementor/frontend/render_mode/register', [ $this, 'register_render_mode' ] );
		add_action( 'elementor/ajax/register_actions', [ $this, 'register_ajax_actions' ] );
		add_action( 'parse_query', [ $this, 'filter_screenshots_from_attachments_query' ] );
		add_filter( 'ajax_query_attachments_args', [ $this, 'filter_screenshots_from_ajax_attachments_query' ] );
		add_filter( 'elementor-pro/site-editor/data/template', [ $this, 'extend_templates_json_structure' ] );
	}
}
