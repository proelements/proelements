<?php
namespace ElementorPro\Modules\CustomCode;

use Elementor\Core\Admin\Menu\Admin_Menu_Manager;
use Elementor\Core\Documents_Manager;
use ElementorPro\License\API;
use ElementorPro\Modules\CustomCode\AdminMenuItems\Custom_Code_Menu_Item;
use ElementorPro\Modules\CustomCode\AdminMenuItems\Custom_Code_Promotion_Menu_Item;
use ElementorPro\Plugin;
use Elementor\Settings;
use Elementor\TemplateLibrary\Source_Local;
use Elementor\Utils;
use ElementorPro\Base\Module_Base;
use ElementorPro\Modules\ThemeBuilder\Classes\Conditions_Manager;
use ElementorPro\Modules\ThemeBuilder\Classes\Locations_Manager;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {
	const CAPABILITY = 'manage_options';
	const CPT = 'elementor_snippet';
	const MODULE_NAME = 'custom_code';
	const DOCUMENT_TYPE = 'code_snippet';

	const ADDITIONAL_COLUMN_INSTANCES = 'instances';

	const MENU_SLUG = 'edit.php?post_type=' . self::CPT;
	const PROMOTION_MENU_SLUG = 'e-custom-code';

	/**
	 * @var \ElementorPro\Modules\CustomCode\Custom_Code_Metabox
	 */
	public $meta_box;

	public function __construct() {
		parent::__construct();

		$this->meta_box = new Custom_Code_Metabox();

		$this->actions();
		$this->register_custom_post_type();
		$this->register_metabox();
	}

	public function get_name() {
		return 'custom-code';
	}

	private function actions() {
		// TODO: Maybe just ignore all of those when the user can't use custom code?
		add_action( 'elementor/documents/register', function ( $documents_manager ) {
			return $this->register_documents( $documents_manager );
		} );

		add_action( 'elementor/theme/register_locations', function ( $location_manager ) {
			return $this->register_location( $location_manager );
		} );

		add_action( 'elementor/admin/menu/register', function ( Admin_Menu_Manager $admin_menu_manager ) {
			$this->add_admin_menu( $admin_menu_manager );
		} );

		// TODO: BC - Remove after `Admin_Menu_Manager` will be the standard.
		add_action( 'admin_menu', function () {
			if ( did_action( 'elementor/admin/menu/register' ) ) {
				return;
			}

			$menu_title = esc_html__( 'Custom Code', 'elementor-pro' );
			add_submenu_page(
				Settings::PAGE_ID,
				$menu_title,
				$menu_title,
				self::CAPABILITY,
				static::MENU_SLUG
			);
		}, /* After custom icons */  51 );

		add_action( 'current_screen', function () {
			if ( ! is_admin() ) {
				return;
			}

			$current_screen = get_current_screen();

			if ( 'edit-' . self::CPT === $current_screen->id ) {
				$this->admin_ui_actions();
			} elseif ( self::CPT === $current_screen->id ) {
				// Enqueue assets.
				add_action( 'admin_enqueue_scripts', function () {
					$this->enqueue_assets();
				}, 0 /* elementor-app-base styles should be loaded in early stages */ );
			}
		} );

		$this->frontend_actions();
	}

	private function admin_ui_actions() {
		// Show blank 'custom code' snippets list.
		add_action( 'manage_posts_extra_tablenav', function ( $which ) {
			return $this->maybe_render_blank_state( $which );
		} );

		// Mange post columns.
		add_filter( 'manage_posts_columns', function ( $columns ) {
			return $this->manage_posts_columns( $columns );
		} );

		add_action( 'manage_posts_custom_column', function ( $column_name, $post_id ) {
			return $this->manage_posts_custom_column( $column_name, $post_id );
		}, 10, 2 );
	}

	private function frontend_actions() {
		// Print snippets.
		add_action( 'wp_head', function () {
			$this->print_snippets( Custom_Code_Metabox::OPTION_LOCATION_HEAD );
		} );

		add_action( 'wp_body_open', function () {
			$this->print_snippets( Custom_Code_Metabox::OPTION_LOCATION_BODY_START );
		} );

		add_action( 'wp_footer', function () {
			$this->print_snippets( Custom_Code_Metabox::OPTION_LOCATION_BODY_END );
		}, 21 /* After 'wp_print_footer_scripts' */ );
	}

	private function register_custom_post_type() {
		$labels = [
			'name' => esc_html__( 'Custom Code', 'elementor-pro' ),
			'singular_name' => esc_html__( 'Custom Code', 'elementor-pro' ),
			'add_new' => esc_html__( 'Add new', 'elementor-pro' ),
			'add_new_item' => esc_html__( 'New code', 'elementor-pro' ),
			'edit_item' => esc_html__( 'Edit code', 'elementor-pro' ),
		];

		register_post_type( self::CPT, [
			'labels' => $labels,
			'public' => false,
			'rewrite' => false,
			'show_ui' => true,
			'show_in_menu' => false,
			'show_in_nav_menus' => false,
			'exclude_from_search' => true,
			'capability_type' => 'post',
			'hierarchical' => false,
			'supports' => [ 'title', 'author' ],
			'capabilities' => [
				'publish_posts' => 'manage_options',
				'edit_posts' => 'manage_options',
				'edit_others_posts' => 'manage_options',
				'delete_posts' => 'manage_options',
				'delete_others_posts' => 'manage_options',
				'read_private_posts' => 'manage_options',
				'edit_post' => 'manage_options',
				'delete_post' => 'manage_options',
				'read_post' => 'manage_options',
			],
		] );

		// Handling custom post type messages.
		add_filter( 'post_updated_messages', function( $messages ) {
			if ( self::CPT === get_post_type() ) {
				$post = get_post();

				// Thanks 'WooCommerce' for the example.
				$messages[ self::CPT ] = [
					'', // Not in use.
					__( 'Custom code updated.', 'elementor-pro' ),
					__( 'Custom field updated.', 'elementor-pro' ),
					__( 'Custom field deleted.', 'elementor-pro' ),
					__( 'Custom code updated.', 'elementor-pro' ),
					__( 'Revision restored.', 'elementor-pro' ),
					__( 'Custom code published.', 'elementor-pro' ),
					__( 'Custom code saved.', 'elementor-pro' ),
					__( 'Custom code submitted.', 'elementor-pro' ),
					sprintf(
						/* translators: %s: The scheduled date. */
						__( 'Custom code scheduled for %s.', 'elementor-pro' ),
						'<strong>' . date_i18n( esc_html__( 'M j, Y @ G:i', 'elementor-pro' ), strtotime( $post->post_date ) ) . '</strong>'
					),
					__( 'Custom code draft updated.', 'elementor-pro' ),
				];
			}

			return $messages;
		} );

		add_filter( 'bulk_post_updated_messages', function ( $messages, $counters ) {
			$current_screen = get_current_screen();

			if ( $current_screen && self::CPT === $current_screen->post_type ) {
				$messages[ self::CPT ] = [
					'updated' => _n( '%s custom code updated.', '%s custom codes updated.', $counters['updated'], 'elementor-pro' ),
					'locked' => _n( '%s custom code cannot be not updated, someone else is editing it.', '%s custom codes cannot be not updated, someone else is editing them.', $counters['locked'], 'elementor-pro' ),
					'deleted' => _n( '%s custom code permanently deleted.', '%s custom codes permanently deleted.', $counters['deleted'], 'elementor-pro' ),
					'trashed' => _n( '%s custom code moved to trash.', '%s custom codes moved to trash.', $counters['trashed'], 'elementor-pro' ),
					'untrashed' => _n( '%s custom code restored.', '%s custom code restored.', $counters['untrashed'], 'elementor-pro' ),
				];
			}

			return $messages;
		}, 10, 12 );
	}

	/**
	 * Function register metabox.
	 *
	 * Add meta box for custom-code post.
	 */
	private function register_metabox() {
		if ( ! is_admin() ) {
			return;
		}
		// Remove 'author' meta_box from 'add-new.php', 'author' is required only in list ( enabled via 'supports' arg ).
		add_action( 'add_meta_boxes_' . self::CPT, function () {
			remove_meta_box( 'authordiv', self::CPT, 'normal' );
		} );
	}

	private function enqueue_assets() {
		wp_enqueue_style( 'elementor-app-base', $this->get_css_assets_url( 'app-base', null, 'default', true ), [
			'elementor-icons',
			'select2',
		], ELEMENTOR_VERSION );

		wp_register_style(
			'select2',
			$this->get_css_assets_url( 'e-select2', 'assets/lib/e-select2/css/' ),
			[],
			'4.0.6-rc.1'
		);

		wp_register_script(
			'select2',
			$this->get_js_assets_url( 'e-select2.full', 'assets/lib/e-select2/js/' ),
			[
				'jquery',
			],
			'4.0.6-rc.1',
			true
		);

		wp_register_style(
			'elementor-icons',
			$this->get_css_assets_url( 'elementor-icons', 'assets/lib/eicons/css/' ),
			[],
			'5.6.2'
		);

		wp_enqueue_script( 'react' );
		wp_enqueue_script( 'react-dom' );

		wp_enqueue_script(
			'elementor-app-packages',
			$this->get_js_assets_url( 'app-packages' ),
			[
				'wp-i18n',
				'react',
			],
			ELEMENTOR_VERSION,
			true
		);

		add_action( 'elementor-pro/metabox/render', function ( $metabox, $post_id ) {
			$min_suffix = Utils::is_script_debug() ? '' : '.min';

			wp_enqueue_script(
				'tipsy',
				ELEMENTOR_ASSETS_URL . 'lib/tipsy/tipsy' . $min_suffix . '.js',
				[
					'jquery',
				],
				'1.0.0',
				true
			);

			$direction_suffix = is_rtl() ? '-rtl' : '';
			wp_enqueue_style(
				'custom-code',
				ELEMENTOR_PRO_ASSETS_URL . 'css/modules/custom-code' . $direction_suffix . $min_suffix . '.css',
				[
					'elementor-app-base',
				],
				ELEMENTOR_PRO_VERSION
			);

			// Load 'admin.js` module JS entry.
			wp_enqueue_script(
				'custom-code-metabox',
				ELEMENTOR_PRO_ASSETS_URL . 'js/custom-code' . $min_suffix . '.js',
				[
					'react',
					'select2',
				],
				ELEMENTOR_PRO_VERSION
			);

			$post = [
				'ID' => $post_id,
				'post_status' => get_post_status( $post_id ),
			];

			wp_add_inline_script( 'custom-code-metabox', sprintf( 'elementorProAdmin.customCode.post = %s;', wp_json_encode( $post ) ) );
		}, 10, 2 );
	}

	private function add_admin_menu( Admin_Menu_Manager $admin_menu_manager ) {
		if ( $this->can_use_custom_code() ) {
			$admin_menu_manager->register( static::MENU_SLUG, new Custom_Code_Menu_Item() );
		} else {
			$admin_menu_manager->register( static::PROMOTION_MENU_SLUG, new Custom_Code_Promotion_Menu_Item() );
		}
	}

	private function can_use_custom_code() {
		return API::is_license_active() || $this->has_custom_code_snippets();
	}

	private function has_custom_code_snippets() {
		$existing_snippets = get_posts( [
			'posts_per_page' => 1, // Avoid fetching too much data
			'post_type' => static::CPT,
		] );

		return ! empty( $existing_snippets );
	}

	private function register_documents( Documents_Manager $documents_manager ) {
		$documents_manager->register_document_type( self::DOCUMENT_TYPE, Document::get_class_full_name() );
	}

	private function register_location( Locations_Manager $location_manager ) {
		foreach ( array_keys( $this->meta_box->get_location_options() ) as $location ) {
			$location_manager->register_location( $location, [
				'multiple' => true,
				'public' => false,
				'edit_in_content' => false,
			] );
		}
	}

	private function maybe_render_blank_state( $which ) {
		$counts = (array) wp_count_posts( self::CPT );
		unset( $counts['auto-draft'] );

		if ( ! array_sum( $counts ) ) {
			/** @var Source_Local $source */
			$source = Plugin::elementor()->templates_manager->get_source( 'local' );

			$source->maybe_render_blank_state( $which, [
				'post_type' => self::DOCUMENT_TYPE,
				'cpt' => self::CPT,
				'description' => esc_html__( 'Add pixels, meta tags and any other scripts to your site.', 'elementor-pro' ) . sprintf( '<br><a target="_blank" href="https://go.elementor.com/wp-dash-custom-code">%s</a>', esc_html__( 'Learn more about adding custom code', 'elementor-pro' ) ),
				'href' => esc_url( admin_url( '/post-new.php?post_type=' . self::CPT ) ),
			] );
		}
	}

	private function manage_posts_columns( $columns ) {
		$new = [
			self::ADDITIONAL_COLUMN_INSTANCES => esc_html__( 'Instances', 'elementor-pro' ),
			Custom_Code_Metabox::FIELD_LOCATION => esc_html__( 'Location', 'elementor-pro' ),
			Custom_Code_Metabox::FIELD_PRIORITY => esc_html__( 'Priority', 'elementor-pro' ),
		];

		// Insert after 'author'.
		$keys = array_keys( $columns );
		$pos = array_search( 'author', $keys ) + 1;
		$columns = array_merge( array_slice( $columns, 0, $pos ), $new, array_slice( $columns, $pos ) );

		return $columns;
	}

	private function manage_posts_custom_column( $column_name, $post_id ) {
		if ( in_array( $column_name, Custom_Code_Metabox::INPUT_FIELDS ) ) {
			$value = get_post_meta( $post_id, '_elementor_' . $column_name, true );

			if ( Custom_Code_Metabox::FIELD_LOCATION === $column_name ) {
				$location_labels = $this->meta_box->get_location_labels();

				if ( isset( $location_labels[ $value ] ) ) {
					$value = $location_labels[ $value ];
				}
			}

			echo esc_html( $value );
		} else if ( self::ADDITIONAL_COLUMN_INSTANCES === $column_name ) {
			/** @var Conditions_Manager $conditions_manager */
			$conditions_manager = Plugin::instance()->modules_manager->get_modules( 'theme-builder' )->get_conditions_manager();

			echo esc_html( implode( ', ', $conditions_manager->get_document_instances( $post_id ) ) );
		}
	}

	private function get_snippets_by_location( $location ) {
		return get_posts( [
			'numberposts' => -1,
			'post_type' => self::CPT,
			'meta_query' => [
				[
					'key' => '_elementor_' . Custom_Code_Metabox::FIELD_LOCATION,
					'value' => $location,
				],
			],
			// Order.
			'order' => 'ASC',
			'orderby' => 'meta_value_num',
			'meta_key' => '_elementor_' . Custom_Code_Metabox::FIELD_PRIORITY,
		] );
	}

	private function print_snippets( $location ) {
		// Do not print snippets on safe mode.
		if ( isset( $_REQUEST['elementor-mode'] ) && 'safe' === $_REQUEST['elementor-mode'] ) {
			return;
		}

		$snippets = $this->get_snippets_by_location( $location );

		/** @var \ElementorPro\Modules\ThemeBuilder\Module $theme_builder */
		$theme_builder = Plugin::instance()->modules_manager->get_modules( 'theme-builder' );
		$documents_by_conditions = $theme_builder->get_conditions_manager()->get_documents_for_location( $location );
		$location_manager = $theme_builder->get_locations_manager();

		foreach ( $snippets as $snippet ) {
			// Add snippet to location.
			// Also handling situation without conditions, bind current snippet id with current location.
			if ( isset( $documents_by_conditions[ $snippet->ID ] ) || ! get_post_meta( $snippet->ID, '_elementor_conditions', true ) ) {
				$location_manager->add_doc_to_location( $location, $snippet->ID );
			}
		}

		elementor_theme_do_location( $location );
	}
}
