<?php
namespace ElementorPro\Core\App\Modules\SiteEditor;

use Elementor\Core\Frontend\Render_Mode_Manager;
use ElementorPro\Core\App\Modules\SiteEditor\Data\Controller;
use Elementor\Core\Base\Module as BaseModule;
use Elementor\Core\Common\Modules\Ajax\Module as Ajax;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Site Editor Module
 *
 * Responsible for initializing Elementor Pro App functionality
 */
class Module extends BaseModule {
	/**
	 * Get name.
	 *
	 * @access public
	 *
	 * @return string
	 */
	public function get_name() {
		return 'site-editor';
	}

	public function get_template_types() {
		$document_types = Plugin::elementor()->documents->get_document_types( [
			'support_site_editor' => true,
		] );

		// Keep 404 at end of array.
		$error_404 = $document_types['error-404'];
		unset( $document_types['error-404'] );
		$document_types['error-404'] = $error_404;

		// Currently the `single` itself is not supported in site editor.
		// Don't use `support_site_editor=false` in order to support documents that extend it.
		unset( $document_types['single'] );

		$types = [];

		foreach ( $document_types as $type => $class ) {
			$types[] = $class::get_site_editor_config();
		}

		return $types;
	}

	/**
	 * Register ajax actions.
	 *
	 * @access public
	 *
	 * @param Ajax $ajax
	 */
	public function register_ajax_actions( Ajax $ajax ) {
		$ajax->register_ajax_action( 'app_site_editor_template_types', [ $this, 'get_template_types' ] );
	}

	/**
	 * @param Render_Mode_Manager $manager
	 *
	 * @throws \Exception
	 */
	public function register_render_mode( Render_Mode_Manager $manager ) {
		$manager->register_render_mode( Render_Mode_Template_Preview::class );
	}

	/**
	 * Module constructor.
	 *
	 * @access public
	 */
	public function __construct() {
		Plugin::elementor()->data_manager->register_controller( Controller::class );

		add_action( 'elementor/ajax/register_actions', [ $this, 'register_ajax_actions' ], 11 /* Override core actions */ );
		add_action( 'elementor/frontend/render_mode/register', [ $this, 'register_render_mode' ] );
	}
}
