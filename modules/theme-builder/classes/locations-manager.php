<?php
namespace ElementorPro\Modules\ThemeBuilder\Classes;

use ElementorPro\Core\Utils;
use ElementorPro\Modules\ThemeBuilder\Documents\Theme_Document;
use ElementorPro\Modules\ThemeBuilder\Module;
use ElementorPro\Plugin;
use Elementor\Modules\PageTemplates\Module as PageTemplatesModule;
use Elementor\Core\Files\CSS\Post as Post_CSS;
use ElementorPro\Modules\Posts\Traits\Pagination_Trait;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Locations_Manager {
	use Pagination_Trait;

	protected $core_locations = [];
	protected $locations = [];
	protected $did_locations = [];
	protected $current_location;
	protected $current_page_template = '';
	protected $locations_queue = [];
	protected $locations_printed = [];
	protected $locations_skipped = [];

	public function __construct() {
		$this->set_core_locations();

		add_filter( 'the_content', [ $this, 'builder_wrapper' ], 9999999 ); // 9999999 = after preview->builder_wrapper
		add_filter( 'template_include', [ $this, 'template_include' ], 11 ); // 11 = after WooCommerce.
		add_action( 'template_redirect', [ $this, 'register_locations' ] );

		add_filter( 'elementor/admin/create_new_post/meta', [ $this, 'filter_add_location_meta_on_create_new_post' ] );

		if ( ! Module::is_preview() ) {
			add_action( 'wp_enqueue_scripts', [ $this, 'enqueue_styles' ] );
		}

		add_filter( 'pre_handle_404', [ $this, 'should_allow_pagination_on_single_templates' ], 10, 2 );
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
	public function should_allow_pagination_on_single_templates( $handled, $wp_query ) {
		if ( $handled || empty( $wp_query->query_vars['page'] ) || empty( $wp_query->post ) ) {
			return $handled;
		}

		$current_post_id = get_the_ID();
		$documents = Module::instance()->get_conditions_manager()->get_documents_for_location( 'single' );

		if ( empty( $documents ) ) {
			return $handled;
		}

		foreach ( $documents as $document ) {
			$post_id = $document->get_post()->ID;

			// Will be handled by the pre_handle_404 filter in the posts module.
			if ( $current_post_id === $post_id ) {
				continue;
			}

			$document = Plugin::elementor()->documents->get( $post_id );

			if ( $this->is_valid_pagination( $document->get_elements_data(), $wp_query->query_vars['page'] ) ) {
				$handled = true;
			}
		}

		return $handled;
	}

	public function register_locations() {
		// Run Once.
		if ( ! did_action( 'elementor/theme/register_locations' ) ) {
			/**
			 * Elementor theme locations registration.
			 *
			 * Fires after template files where included but before locations have
			 * been registered. This hook allows theme developers to register new
			 * theme locations.
			 *
			 * @since 2.0.0
			 *
			 * @param Locations_Manager $this An instance of locations manager.
			 */
			do_action( 'elementor/theme/register_locations', $this );
		}
	}

	public function enqueue_styles() {
		$locations = $this->get_locations();

		if ( empty( $locations ) ) {
			return;
		}

		if ( ! empty( $this->current_page_template ) ) {
			$locations = $this->filter_page_template_locations( $locations );
		}

		$current_post_id = get_the_ID();

		/** @var Post_CSS[] $css_files */
		$css_files = [];

		foreach ( $locations as $location => $settings ) {
			$documents = Module::instance()->get_conditions_manager()->get_documents_for_location( $location );
			foreach ( $documents as $document ) {
				$post_id = $document->get_post()->ID;

				// Don't enqueue current post here (let the  preview/frontend components to handle it)
				if ( $current_post_id !== $post_id ) {
					$css_file = new Post_CSS( $post_id );
					$css_files[] = $css_file;
				}
			}
		}

		if ( ! empty( $css_files ) ) {
			// Enqueue the frontend styles manually also for pages that don't built with Elementor.
			Plugin::elementor()->frontend->enqueue_styles();

			// Enqueue after the frontend styles to override them.
			foreach ( $css_files as $css_file ) {
				$css_file->enqueue();
			}
		}
	}

	public function template_include( $template ) {
		$location = '';

		if ( is_singular() ) {
			$document = Plugin::elementor()->documents->get_doc_for_frontend( get_the_ID() );
			if ( $document && $document::get_property( 'support_wp_page_templates' ) ) {
				$wp_page_template = $document->get_meta( '_wp_page_template' );
				if ( $wp_page_template && 'default' !== $wp_page_template ) {
					$this->inspector_log( [
						'template' => $template,
						'description' => 'Template File: WP Page Template',
					] );
					$this->current_page_template = $wp_page_template;
					return $template;
				}
			}
		} else {
			$document = false;
		}

		if ( $document && $document instanceof Theme_Document ) {
			// For editor preview iframe.
			$location = $document->get_location();
		} elseif ( function_exists( 'is_shop' ) && is_shop() ) {
			$location = 'archive';
		} elseif ( is_archive() || is_tax() || is_home() || is_search() ) {
			$location = 'archive';
		} elseif ( is_singular() || is_404() ) {
			$location = 'single';
		}

		if ( $location ) {
			$location_settings = $this->get_location( $location );
			$location_documents = Module::instance()->get_conditions_manager()->get_documents_for_location( $location );
			if ( empty( $location_documents ) ) {
				$this->inspector_log( [
					'template' => $template,
					'description' => 'Template File: No Templates for condition',
				] );

				return $template;
			}

			if ( 'single' === $location || 'archive' === $location ) {
				$first_key = key( $location_documents );
				$theme_document = $location_documents[ $first_key ];

				if ( Module::is_preview() && $theme_document->get_autosave_id() ) {
					$theme_document = $theme_document->get_autosave();
				}

				$document_page_template = $theme_document->get_settings( 'page_template' );
				if ( $document_page_template ) {
					$page_template = $document_page_template;
					$this->inspector_log( [
						'document' => $theme_document,
						'template' => $template,
						'description' => 'Template File: Document Page Template',
					] );
				}
			}
		}

		/**
		 * @var \Elementor\Modules\PageTemplates\Module $page_templates_module
		 */
		$page_templates_module = Plugin::elementor()->modules_manager->get_modules( 'page-templates' );

		// If is a `content` document or the theme is not support the document location (top header/ sidebar and etc.).
		$location_exist = ! empty( $location_settings );
		$is_header_footer = 'header' === $location || 'footer' === $location;
		$need_override_location = ! empty( $location_settings['overwrite'] ) && ! $is_header_footer;

		/**
		 * Override theme location.
		 *
		 * Filters the ability to override any Elementor theme location.
		 *
		 * @param bool              $need_override_location Whether to override theme location.
		 * @param string            $location               Location name.
		 * @param Locations_Manager $this                   An instance of location manager.
		 */
		$need_override_location = apply_filters( 'elementor/theme/need_override_location', $need_override_location, $location, $this );

		if ( $location && empty( $page_template ) && ( ! $location_exist || $need_override_location ) ) {
			$page_template = $page_templates_module::TEMPLATE_HEADER_FOOTER;
		}

		if ( ! empty( $page_template ) ) {
			$template_path = $page_templates_module->get_template_path( $page_template );

			if ( $template_path ) {
				$page_templates_module->set_print_callback( function() use ( $location ) {
					Module::instance()->get_locations_manager()->do_location( $location );
				} );

				$this->inspector_log( [
					'location' => $location,
					'template' => $template_path,
					'description' => $location_exist ? 'Template File: Location Settings (Override)' : 'Template File: Location not exit',
				] );

				$template = $template_path;
			}
		}

		return $template;
	}

	/**
	 * @param string $location
	 * @param integer $document_id
	 */
	public function add_doc_to_location( $location, $document_id ) {
		if ( isset( $this->locations_skipped[ $location ][ $document_id ] ) ) {
			// Don't re-add skipped documents.
			return;
		}

		if ( ! isset( $this->locations_queue[ $location ] ) ) {
			$this->locations_queue[ $location ] = [];
		}

		$this->locations_queue[ $location ][ $document_id ] = $document_id;
	}

	public function remove_doc_from_location( $location, $document_id ) {
		unset( $this->locations_queue[ $location ][ $document_id ] );
	}

	public function skip_doc_in_location( $location, $document_id ) {
		$this->remove_doc_from_location( $location, $document_id );

		if ( ! isset( $this->locations_skipped[ $location ] ) ) {
			$this->locations_skipped[ $location ] = [];
		}

		$this->locations_skipped[ $location ][ $document_id ] = $document_id;
	}

	public function is_printed( $location, $document_id ) {
		return isset( $this->locations_printed[ $location ][ $document_id ] );
	}

	public function set_is_printed( $location, $document_id ) {
		if ( ! isset( $this->locations_printed[ $location ] ) ) {
			$this->locations_printed[ $location ] = [];
		}

		$this->locations_printed[ $location ][ $document_id ] = $document_id;
		$this->remove_doc_from_location( $location, $document_id );
	}

	public function do_location( $location ) {
		/** @var Theme_Document[] $documents_by_conditions */
		$documents_by_conditions = Module::instance()->get_conditions_manager()->get_documents_for_location( $location );

		foreach ( $documents_by_conditions as $document_id => $document ) {
			$this->add_doc_to_location( $location, $document_id );
		}

		// Locations Queue can contain documents that added manually.
		if ( empty( $this->locations_queue[ $location ] ) ) {
			return false;
		}

		if ( is_singular() ) {
			Utils::set_global_authordata();
		}

		/**
		 * Before location content printed.
		 *
		 * Fires before Elementor theme location is printed.
		 *
		 * The dynamic portion of the hook name, `$location`, refers to the location name.
		 *
		 * @since 2.0.0
		 *
		 * @param Locations_Manager $this An instance of locations manager.
		 */
		do_action( "elementor/theme/before_do_{$location}", $this );

		while ( ! empty( $this->locations_queue[ $location ] ) ) {
			$document_id = key( $this->locations_queue[ $location ] );
			$document = Module::instance()->get_document( $document_id );

			if ( ! $document || $this->is_printed( $location, $document_id ) ) {
				$this->skip_doc_in_location( $location, $document_id );
				continue;
			}

			// `$documents_by_conditions` can pe current post even if it's a draft.
			if ( empty( $documents_by_conditions[ $document_id ] ) ) {

				$post_status = get_post_status( $document_id );

				if ( 'publish' !== $post_status ) {
					$this->inspector_log( [
						'location' => $location,
						'document' => $document,
						'description' => 'Added manually but skipped because is not Published',
					] );

					$this->skip_doc_in_location( $location, $document_id );
					continue;
				}
			}

			$this->inspector_log( [
				'location' => $location,
				'document' => $document,
				'description' => isset( $documents_by_conditions[ $document_id ] ) ? 'Added By Condition' : 'Added Manually',

			] );

			$this->current_location = $location;
			$document->print_content();
			$this->did_locations[] = $this->current_location;
			$this->current_location = null;

			$this->set_is_printed( $location, $document_id );
		}

		/**
		 * After location content printed.
		 *
		 * Fires after Elementor theme location is printed.
		 *
		 * The dynamic portion of the hook name, `$location`, refers to the location name.
		 *
		 * @since 2.0.0
		 *
		 * @param Locations_Manager $this An instance of locations manager.
		 */
		do_action( "elementor/theme/after_do_{$location}", $this );

		return true;
	}

	public function did_location( $location ) {
		return in_array( $location, $this->did_locations, true );
	}

	public function get_current_location() {
		return $this->current_location;
	}

	public function builder_wrapper( $content ) {
		$post_id = get_the_ID();

		if ( $post_id ) {
			$document = Module::instance()->get_document( $post_id );
			if ( $document ) {
				$document_location = $document->get_location();
				$location_settings = $this->get_location( $document_location );
				// If is a `content` document or the theme is not support the document location (header/footer and etc.).
				if ( $location_settings && ! $location_settings['edit_in_content'] ) {
					$content = '<div class="elementor-theme-builder-content-area">' . esc_html__( 'Content Area', 'elementor-pro' ) . '</div>';
				}
			}
		}

		return $content;
	}

	public function get_locations( $filter_args = [] ) {
		$this->register_locations();

		if ( is_string( $filter_args ) ) {
			_deprecated_argument( __FUNCTION__, '2.4.0', 'Passing a location name is deprecated. Use `get_location` instead.' );
			return $this->get_location( $filter_args );
		}

		return wp_list_filter( $this->locations, $filter_args );
	}

	public function get_location( $location ) {
		$locations = $this->get_locations();

		if ( isset( $locations[ $location ] ) ) {
			$location_config = $locations[ $location ];
		} else {
			$location_config = [];
		}

		return $location_config;
	}

	public function get_doc_location( $post_id ) {
		/** @var Theme_Document $document */
		$document = Plugin::elementor()->documents->get( $post_id );

		return $document->get_location();
	}

	public function get_core_locations() {
		return $this->core_locations;
	}

	public function register_all_core_location() {
		foreach ( $this->core_locations as $location => $settings ) {
			$this->register_location( $location, $settings );
		}
	}

	public function register_location( $location, $args = [] ) {
		$args = wp_parse_args( $args, [
			'label' => $location,
			'multiple' => false,
			'public' => true,
			'edit_in_content' => true,
			'hook' => 'elementor/theme/' . $location,
		] );

		$this->locations[ $location ] = $args;

		add_action( $args['hook'], function() use ( $location, $args ) {
			$did_location = Module::instance()->get_locations_manager()->do_location( $location );

			if ( $did_location && ! empty( $args['remove_hooks'] ) ) {
				foreach ( $args['remove_hooks'] as $item ) {
					remove_action( $args['hook'], $item );
				}
			}
		}, 5 );
	}

	public function register_core_location( $location, $args = [] ) {
		if ( ! isset( $this->core_locations[ $location ] ) ) {
			/* translators: %s: Location name. */
			wp_die( esc_html( sprintf( esc_html__( 'Location \'%s\' is not a core location.', 'elementor-pro' ), $location ) ) );
		}

		$args = array_replace_recursive( $this->core_locations[ $location ], $args );

		$this->register_location( $location, $args );
	}

	public function location_exits( $location = '', $check_match = false ) {
		$location_exits = ! ! $this->get_location( $location );

		if ( $location_exits && $check_match ) {
			$location_exits = ! ! Module::instance()->get_conditions_manager()->get_documents_for_location( $location );
		}

		return $location_exits;
	}

	public function filter_add_location_meta_on_create_new_post( $meta ) {
		//phpcs:ignore WordPress.Security.NonceVerification.Recommended -- Nonce verification is not required here.
		$meta_location = Utils::_unstable_get_super_global_value( $_GET, 'meta_location' );
		if ( $meta_location ) {
			$meta[ Theme_Document::LOCATION_META_KEY ] = $meta_location;
		}

		return $meta;
	}

	private function set_core_locations() {
		$this->core_locations = [
			'header' => [
				'is_core' => true,
				'public' => false,
				'label' => esc_html__( 'Header', 'elementor-pro' ),
				'edit_in_content' => false,
			],
			'footer' => [
				'is_core' => true,
				'public' => false,
				'label' => esc_html__( 'Footer', 'elementor-pro' ),
				'edit_in_content' => false,
			],
			'archive' => [
				'is_core' => true,
				'public' => false,
				'overwrite' => true,
				'label' => esc_html__( 'Archive', 'elementor-pro' ),
				'edit_in_content' => true,
			],
			'single' => [
				'is_core' => true,
				'public' => false,
				'label' => esc_html__( 'Single', 'elementor-pro' ),
				'edit_in_content' => true,
			],
		];
	}

	public function inspector_log( $args ) {
		$inspector_enabled = method_exists( Plugin::elementor()->inspector, 'is_enabled' ) && Plugin::elementor()->inspector->is_enabled();
		if ( ! $inspector_enabled ) {
			return;
		}

		$title = [];
		$url = '';

		if ( isset( $args['location'] ) ) {
			$location_settings = $this->get_location( $args['location'] );
			if ( $location_settings ) {
				$args['location'] = $location_settings['label'];
			}
			$title[] = 'Location: ' . $args['location'];
		}

		if ( isset( $args['description'] ) ) {
			$title[] = $args['description'];
		}

		if ( ! empty( $args['document'] ) ) {
			$title[] = esc_html( $args['document']->get_post()->post_title );
			$url = $args['document']->get_edit_url();
		}

		if ( isset( $args['template'] ) ) {
			$title[] = Plugin::elementor()->inspector->parse_template_path( $args['template'] );
		}

		$title = implode( ' > ', $title );

		Plugin::elementor()->inspector->add_log( 'Theme', $title, $url );
	}

	private function filter_page_template_locations( array $locations ) {
		$templates_to_filter = [
			PageTemplatesModule::TEMPLATE_CANVAS,
			PageTemplatesModule::TEMPLATE_HEADER_FOOTER,
		];

		if ( ! in_array( $this->current_page_template, $templates_to_filter, true ) ) {
			return $locations;
		}

		if ( PageTemplatesModule::TEMPLATE_CANVAS === $this->current_page_template ) {
			$allowed_core = [];
		} else {
			$allowed_core = [ 'header', 'footer' ];
		}

		foreach ( $locations as $location => $settings ) {
			if ( ! empty( $settings['is_core'] ) && ! in_array( $location, $allowed_core, true ) ) {
				unset( $locations[ $location ] );
			}
		}

		return $locations;
	}
}
