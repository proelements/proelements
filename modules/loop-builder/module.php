<?php
namespace ElementorPro\Modules\LoopBuilder;

use Elementor\Controls_Manager;
use Elementor\Core\Documents_Manager;
use Elementor\TemplateLibrary\Source_Local;
use ElementorPro\Base\Module_Base;
use ElementorPro\Plugin;
use Elementor\Core\Base\Document;
use ElementorPro\Modules\LoopBuilder\Documents\Loop as LoopDocument;
use Elementor\Core\Experiments\Manager;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {

	/**
	 * Elementor template-library taxonomy slug.
	 */
	const TEMPLATE_LIBRARY_TYPE_SLUG = 'loop-item';
	const EXPERIMENT_NAME = 'loop';
	const LOOP_BASE_SKIN_ID = 'base';
	const LOOP_POST_SKIN_ID = 'post';
	const CONTAINER_EXPERIMENT = 'container';
	const QUERY_ID = 'query';

	public function get_name() {
		return 'loop-builder';
	}

	protected function get_widgets() {
		return [
			'Loop_Grid',
		];
	}

	public function __construct() {
		parent::__construct();

		add_action( 'elementor/documents/register', function ( $documents_manager ) {
			$this->register_documents( $documents_manager );
		}, 11 /* After WC documents */ );

		add_filter( 'elementor/finder/categories', [ $this, 'add_finder_items' ] );
		add_action( 'elementor/template-library/create_new_dialog_fields', [ $this, 'add_posts_type_to_template_popup' ], 10 );
		add_filter( 'elementor/frontend/builder_content_data', [ $this, 'filter_content_data' ], 10, 2 );

		add_action( 'manage_' . Source_Local::CPT . '_posts_columns', function ( $columns ) {
			return $this->manage_posts_columns( $columns );
		} );

		add_action('elementor/editor/init', function () {
			Plugin::elementor()->common->add_template( __DIR__ . '/views/cta-template.php' );
		});

		if ( $this->is_loop_theme_builder() ) {
			add_filter( 'template_include', [ $this, 'filter_template_to_canvas_view' ], 999 );
			add_filter( 'body_class', [ $this, 'filter_body_class' ] );
		}
	}

	public function filter_template_to_canvas_view() {
		return ELEMENTOR_PATH . 'modules/page-templates/templates/canvas.php';
	}

	public function filter_body_class( $classes ) {
		$classes[] = 'e-loop-template-canvas';

		return $classes;
	}

	/**
	 * Add to the experiments
	 *
	 * @return array
	 */
	public static function get_experimental_data() {
		return [
			'name' => static::EXPERIMENT_NAME,
			'tag' => esc_html__( 'Feature', 'elementor-pro' ),
			'title' => esc_html__( 'Loop', 'elementor-pro' ),
			'description' => sprintf(
				esc_html__( 'Create powerful & repeating templates and populate each one with dynamic content like text or images. Great for listings, posts, portfolios and more! %1$sLearn More%2$s', 'elementor-pro' ),
				'<a href="https://go.elementor.com/wp-dash-loop/" target="_blank">',
				'</a>'
			),
			'release_status' => Manager::RELEASE_STATUS_BETA,
			'default' => Manager::STATE_INACTIVE,
			'new_site' => [
				'default_active' => true,
				'minimum_installation_version' => '3.8.0',
			],
			'dependencies' => [ 'container' ],
		];
	}

	/**
	 * Filter content data.
	 *
	 * Determine whether we are in the Editor and are trying to Edit an empty loop template.
	 *
	 * If this is the case, we add some elements to the $data array in order for frontend.php
	 * to not 'return' an empty string and reach the print_elements_with_wrapper() function.
	 *
	 * We then override print_elements_with_wrapper() in the loop document using the variables
	 * we added here.
	 *
	 * @since 3.8.0
	 *
	 * @param array $data
	 * @param int $post_id
	 *
	 * @return mixed
	 */
	public function filter_content_data( $data, $post_id ) {
		if (
			empty( $data )
			&& LoopDocument::get_type() === get_post_meta( $post_id, Document::TYPE_META_KEY, true )
			&& wp_doing_ajax()
		) {
			$data['empty_loop_template'] = true;
			$data['empty_loop_template_id'] = $post_id;
		}

		return $data;
	}

	public static function is_active(): bool {
		return Plugin::elementor()->experiments->is_feature_active( static::EXPERIMENT_NAME );
	}

	public function add_finder_items( array $categories ) {
		$categories['create']['items']['loop-template'] = [
			'title' => esc_html__( 'Add New Loop Template', 'elementor-pro' ),
			'icon' => 'plus-circle-o',
			'url' => $this->get_admin_templates_url() . '#add_new',
			'keywords' => [ 'template', 'theme', 'new', 'create', 'loop', 'dynamic', 'listing', 'archive', 'repeater' ],
		];

		return $categories;
	}

	public function add_posts_type_to_template_popup( $form ) {
		if ( empty( $form ) ) {
			return;
		}
		$form->add_control( '_elementor_source', [
			'type' => Controls_Manager::SELECT,
			'label' => esc_html__( 'Choose source type', 'elementor-pro' ),
			'options' => [ self::LOOP_POST_SKIN_ID => esc_html__( 'Posts', 'elementor-pro' ) ],
			'section' => 'main',
			'required' => true,
			'conditions' => [
				'template-type' => self::TEMPLATE_LIBRARY_TYPE_SLUG,
			],
		] );
	}

	private function is_editing_existing_loop_item() {
		return isset( $_GET['elementor_library'] ) && strpos( $_GET['elementor_library'], 'elementor-' . static::TEMPLATE_LIBRARY_TYPE_SLUG ) !== false;
	}

	private function is_creating_new_loop_item() {
		return isset( $_GET['post_type'] )
			&& 'elementor_library' === $_GET['post_type']
			&& isset( $_GET['p'] )
			&& static::TEMPLATE_LIBRARY_TYPE_SLUG === get_post_meta( $_GET['p'], Document::TYPE_META_KEY, true );
	}

	private function is_loop_theme_builder() {
		return $this->is_editing_existing_loop_item() || $this->is_creating_new_loop_item();
	}

	/**
	 * @param Documents_Manager $documents_manager
	 */
	private function register_documents( $documents_manager ) {
		$documents_manager->register_document_type( Documents\Loop::get_type(), Documents\Loop::get_class_full_name() );
	}

	private function get_admin_templates_url( $relative = false ) {
		$base_url = Source_Local::ADMIN_MENU_SLUG;
		if ( ! $relative ) {
			$base_url = admin_url( $base_url );
		}

		return add_query_arg(
			[
				'tabs_group' => 'theme',
				'elementor_library_type' => self::TEMPLATE_LIBRARY_TYPE_SLUG,
			],
			$base_url
		);
	}

	private function manage_posts_columns( $columns ) {
		if ( isset( $_REQUEST[ Source_Local::TAXONOMY_TYPE_SLUG ] ) && self::TEMPLATE_LIBRARY_TYPE_SLUG === $_REQUEST[ Source_Local::TAXONOMY_TYPE_SLUG ] ) {
			unset( $columns['instances'] );
		}

		return $columns;
	}
}
