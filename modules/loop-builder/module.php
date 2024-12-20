<?php
namespace ElementorPro\Modules\LoopBuilder;

use Elementor\Controls_Manager;
use Elementor\Core\Documents_Manager;
use Elementor\TemplateLibrary\Source_Local;
use ElementorPro\Base\Module_Base;
use ElementorPro\Plugin;
use Elementor\Core\Base\Document;
use ElementorPro\Modules\LoopBuilder\Documents\Loop as LoopDocument;
use ElementorPro\Core\Utils;
use ElementorPro\Modules\LoopBuilder\Skins\Skin_Loop_Post_Taxonomy;
use Elementor\Widget_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {

	/**
	 * Elementor template-library taxonomy slug.
	 */
	const TEMPLATE_LIBRARY_TYPE_SLUG = 'loop-item';
	const LOOP_BASE_SKIN_ID = 'base';
	const LOOP_POST_SKIN_ID = 'post';
	const LOOP_POST_TAXONOMY_SKIN_ID = 'post_taxonomy';
	const QUERY_ID = 'query';
	const LOOP_WIDGETS = [
		'loop-grid',
		'loop-carousel',
	];

	const TAXONOMY_LOOP_EXPERIMENT_NAME = 'taxonomy_loop_addition';

	public static $taxonomies_displayed_ids = [];

	public static function add_to_taxonomies_avoid_list( $ids ) {
		self::$taxonomies_displayed_ids = array_unique( array_merge( self::$taxonomies_displayed_ids, $ids ) );
	}

	public static function get_taxonomies_avoid_list_ids() {
		return self::$taxonomies_displayed_ids;
	}

	public function get_name() {
		return 'loop-builder';
	}

	protected function get_widgets() {
		return [ 'Loop_Grid', 'Loop_Carousel' ];
	}

	/**
	 * Get the base URL for assets.
	 *
	 * @return string
	 */
	public function get_assets_base_url(): string {
		return ELEMENTOR_PRO_URL;
	}

	/**
	 * Register styles.
	 *
	 * At build time, Elementor compiles `/modules/loop-builder/assets/scss/widgets/*.scss`
	 * to `/assets/css/widget-*.min.css`.
	 *
	 * @return void
	 */
	public function register_styles() {
		wp_register_style(
			'widget-loop-common',
			$this->get_css_assets_url( 'widget-loop-common', null, true, true ),
			[ 'elementor-frontend' ],
			ELEMENTOR_PRO_VERSION
		);

		wp_register_style(
			'widget-loop-carousel',
			$this->get_css_assets_url( 'widget-loop-carousel', null, true, true ),
			[ 'elementor-frontend', 'e-swiper', 'widget-loop-common' ],
			ELEMENTOR_PRO_VERSION
		);

		$direction_suffix = is_rtl() ? '-rtl' : '';
		$has_custom_breakpoints = Plugin::elementor()->breakpoints->has_custom_breakpoints();

		wp_register_style(
			'widget-loop-grid',
			Plugin::get_frontend_file_url( "widget-loop-grid{$direction_suffix}.min.css", $has_custom_breakpoints ),
			[ 'elementor-frontend', 'widget-loop-common' ],
			$has_custom_breakpoints ? null : ELEMENTOR_PRO_VERSION
		);
	}

	public function __construct() {
		parent::__construct();

		add_action( 'elementor/frontend/after_register_styles', [ $this, 'register_styles' ] );

		add_action( 'elementor/documents/register', function ( $documents_manager ) {
			$this->register_documents( $documents_manager );
		}, 11 /* After WC documents */ );

		add_filter( 'elementor/finder/categories', [ $this, 'add_finder_items' ] );
		add_action( 'elementor/template-library/create_new_dialog_fields', [ $this, 'add_posts_type_to_template_popup' ], 10 );

		add_action( 'elementor/template-library/create_new_dialog_fields', [ $this, 'add_taxonomies_type_to_template_popup' ], 12 );
		add_action( 'elementor-pro/modules/loop-builder/documents/loop/query_settings', [ $this, 'add_taxonomies_type_to_loop_settings_query' ], 12 );

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

		// Prevent enqueue default dynamic CSS for loop item templates
		add_filter( 'elementor/css-file/dynamic/should_enqueue',
			function ( $should_enqueue, $post_id ) {
				if ( $this->is_loop_item_document_type_meta_key( $post_id ) ) {
					$should_enqueue = false;
				}
				return $should_enqueue;
			},
		10, 2 );

		// Prevent enqueue default Post CSS for loop item templates
		add_action(
			'elementor/css-file/post/enqueue',
			function( $css_file ) {
				$post_id = $css_file->get_post_id();
				$file_handle = 'elementor-post-' . $post_id;

				if ( $this->is_loop_item_document_type_meta_key( $post_id ) && wp_style_is( $file_handle, 'enqueued' ) ) {
					wp_dequeue_style( $file_handle );
				}
			}
		);

		add_filter( 'elementor/editor/localize_settings', function ( $config ) {
			$config['admin_url'] = admin_url();
			return $config;
		} );

		foreach ( static::LOOP_WIDGETS as $widget_type ) {
			add_action( 'elementor/widget/' . $widget_type . '/skins_init', function ( Widget_Base $widget ) {
				$widget->add_skin( new Skin_Loop_Post_Taxonomy( $widget ) );
			}, 12 );
		}
	}

	public function filter_template_to_canvas_view() {
		return ELEMENTOR_PATH . 'modules/page-templates/templates/canvas.php';
	}

	private function get_preview_loop_item_id() {
		$post_id = false;

		// Editor preview.
		$post_id = Utils::_unstable_get_super_global_value( $_GET, 'elementor-preview' );

		if ( ! $post_id ) {
			$library_type = Utils::_unstable_get_super_global_value( $_GET, 'elementor_library' );

			if ( 'elementor-' . self::TEMPLATE_LIBRARY_TYPE_SLUG === $library_type ) {
				// Frontend Loop Item template preview.
				$post_id = get_the_ID();
			}
		}

		return $post_id;
	}

	public function filter_body_class( $classes ) {
		$classes[] = 'e-loop-template-canvas';

		$post_id = $this->get_preview_loop_item_id();

		if ( $post_id && 'product' === $this->get_source_type_from_post_meta( $post_id ) ) {
			$classes[] = 'woocommerce';
		}

		return $classes;
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
			'options' => $this->get_post_type_options(),
			'section' => 'main',
			'required' => true,
			'conditions' => [
				'template-type' => self::TEMPLATE_LIBRARY_TYPE_SLUG,
			],
		] );
	}

	public function get_source_type_from_post_meta( $post_id ) {
		$source_type = get_post_meta( intval( $post_id ), '_elementor_source', true );
		return empty( $source_type ) ? 'post' : $source_type;
	}

	private function is_editing_existing_loop_item() {
		//phpcs:ignore WordPress.Security.NonceVerification.Recommended -- Nonce verification is not required.
		$elementor_library = Utils::_unstable_get_super_global_value( $_GET, 'elementor_library' ) ?? '';
		//phpcs:ignore WordPress.Security.NonceVerification.Recommended -- Nonce verification is not required.
		$post_id = Utils::_unstable_get_super_global_value( $_GET, 'elementor-preview' );

		return ! empty( $elementor_library ) && $this->is_loop_item_document_type_meta_key( $post_id );
	}

	private function is_creating_new_loop_item() {
		//phpcs:ignore WordPress.Security.NonceVerification.Recommended -- Nonce verification is not required.
		$post_type = Utils::_unstable_get_super_global_value( $_GET, 'post_type' );
		//phpcs:ignore WordPress.Security.NonceVerification.Recommended -- Nonce verification is not required.
		$post_id = Utils::_unstable_get_super_global_value( $_GET, 'p' );
		return 'elementor_library' === $post_type && $this->is_loop_item_document_type_meta_key( $post_id );
	}

	private function is_loop_item_document_type_meta_key( $post_id ) {
		return static::TEMPLATE_LIBRARY_TYPE_SLUG === get_post_meta( $post_id, Document::TYPE_META_KEY, true );
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
		//phpcs:ignore WordPress.Security.NonceVerification.Recommended -- Nonce verification is not required.
		$taxonomy_type_slug = Utils::_unstable_get_super_global_value( $_REQUEST, Source_Local::TAXONOMY_TYPE_SLUG );
		if ( self::TEMPLATE_LIBRARY_TYPE_SLUG === $taxonomy_type_slug ) {
			unset( $columns['instances'] );
		}

		return $columns;
	}

	private function get_post_type_options() {
		$options = [ self::LOOP_POST_SKIN_ID => esc_html__( 'Posts', 'elementor-pro' ) ];

		return $options;
	}

	public function add_taxonomies_type_to_template_popup( $form ) {
		$this->add_taxonomies_to_options( $form, '_elementor_source' );
	}

	public function add_taxonomies_type_to_loop_settings_query( $form ) {
		$this->add_taxonomies_to_options( $form, 'source' );
	}

	protected function add_taxonomies_to_options( $form, $control_name ) {
		$controls = $form->get_controls( $control_name );

		if ( ! $controls || ! isset( $controls['options'] ) ) {
			return;
		}

		$options = $controls['options'];
		$options[ self::LOOP_POST_TAXONOMY_SKIN_ID ] = esc_html__( 'Post Taxonomy', 'elementor-pro' );

		$form->update_control($control_name, [
			'options' => $options,
		] );
	}
}
