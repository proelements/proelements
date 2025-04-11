<?php
namespace ElementorPro\Modules\AssetsManager\AssetTypes;

use Elementor\Core\Admin\Menu\Admin_Menu_Manager;
use ElementorPro\Core\Behaviors\Feature_Lock;
use ElementorPro\License\API;
use ElementorPro\Modules\AssetsManager\AssetTypes\AdminMenuItems\Custom_Icons_Menu_Item;
use ElementorPro\Modules\AssetsManager\AssetTypes\AdminMenuItems\Custom_Icons_Promotion_Menu_Item;
use ElementorPro\Modules\AssetsManager\Classes;
use Elementor\Settings;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Icons_Manager {

	const CAPABILITY = 'manage_options';

	const CPT = 'elementor_icons';

	const MENU_SLUG = 'edit.php?post_type=' . self::CPT;

	const PROMOTION_MENU_SLUG = 'e-custom-icons';

	private $post_type_object;

	private $enqueued_fonts = [];

	protected $icon_types = [];

	private $has_icons = null;

	/**
	 * get a font type object for a given type
	 *
	 * @param null $type
	 *
	 * @return array|bool|\ElementorPro\Modules\AssetsManager\Classes\Font_Base
	 */
	public function get_icon_type_object( $type = null ) {
		if ( null === $type ) {
			return $this->icon_types;
		}

		if ( isset( $this->icon_types[ $type ] ) ) {
			return $this->icon_types[ $type ];
		}

		return false;
	}

	/**
	 * Add a font type to the font manager
	 *
	 * @param string            $icon_type
	 * @param Classes\Assets_Base $instance
	 */
	public function add_icon_type( $icon_type, $instance ) {
		$this->icon_types[ $icon_type ] = $instance;
	}

	/**
	 * Register elementor icon set custom post type
	 */
	public function register_post_type() {
		$labels = [
			'name' => _x( 'Custom Icons', 'CPT Name', 'elementor-pro' ),
			'singular_name' => _x( 'Icon Set', 'CPT Singular Name', 'elementor-pro' ),
			'add_new' => esc_html__( 'Add New', 'elementor-pro' ),
			'add_new_item' => esc_html__( 'Add New Icon Set', 'elementor-pro' ),
			'edit_item' => esc_html__( 'Edit Icon Set', 'elementor-pro' ),
			'new_item' => esc_html__( 'New Icon Set', 'elementor-pro' ),
			'all_items' => esc_html__( 'All Icons', 'elementor-pro' ),
			'view_item' => esc_html__( 'View Icon', 'elementor-pro' ),
			'search_items' => esc_html__( 'Search Icon Set', 'elementor-pro' ),
			'not_found' => esc_html__( 'No icons found', 'elementor-pro' ),
			'not_found_in_trash' => esc_html__( 'No icons found in trash', 'elementor-pro' ),
			'parent_item_colon' => '',
			'menu_name' => _x( 'Custom Icons', 'CPT Menu Name', 'elementor-pro' ),
		];

		$args = [
			'labels' => $labels,
			'public' => false,
			'rewrite' => false,
			'show_ui' => true,
			'show_in_menu' => false,
			'show_in_nav_menus' => false,
			'exclude_from_search' => true,
			'capability_type' => 'post',
			'hierarchical' => false,
			'supports' => [ 'title' ],
		];

		$this->post_type_object = register_post_type( self::CPT, $args );
	}

	public function post_updated_messages( $messages ) {
		$messages[ self::CPT ] = [
			0 => '', // Unused. Messages start at index 1.
			1 => esc_html__( 'Icon Set updated.', 'elementor-pro' ),
			2 => esc_html__( 'Custom field updated.', 'elementor-pro' ),
			3 => esc_html__( 'Custom field deleted.', 'elementor-pro' ),
			4 => esc_html__( 'Icon Set updated.', 'elementor-pro' ),
			/* translators: %s: Date and time of the revision. */
			5 => isset( $_GET['revision'] ) ? sprintf( esc_html__( 'Icon Set restored to revision from %s', 'elementor-pro' ), wp_post_revision_title( (int) $_GET['revision'], false ) ) : false,
			6 => esc_html__( 'Icon Set saved.', 'elementor-pro' ),
			7 => esc_html__( 'Icon Set saved.', 'elementor-pro' ),
			8 => esc_html__( 'Icon Set submitted.', 'elementor-pro' ),
			9 => esc_html__( 'Icon Set updated.', 'elementor-pro' ),
			10 => esc_html__( 'Icon Set draft updated.', 'elementor-pro' ),
		];

		return $messages;
	}

	/**
	 * Add Font manager link to admin menu
	 */
	private function register_admin_menu( Admin_Menu_Manager $admin_menu_manager ) {
		if ( $this->can_use_custom_icons() ) {
			$admin_menu_manager->register( static::MENU_SLUG, new Custom_Icons_Menu_Item() );
		} else {
			$admin_menu_manager->register( static::PROMOTION_MENU_SLUG, new Custom_Icons_Promotion_Menu_Item() );
		}
	}

	private function can_use_custom_icons() {
		return ( API::is_license_active() || $this->has_icons() );
	}

	private function has_icons() {
		if ( null !== $this->has_icons ) {
			return $this->has_icons;
		}

		$existing_icons = new \WP_Query( [
			'post_type' => static::CPT,
			'posts_per_page' => 1,
		] );

		$this->has_icons = $existing_icons->post_count > 0;

		return $this->has_icons;
	}

	public function redirect_admin_old_page_to_new() {
		if ( ! empty( $_GET['page'] ) && 'elementor_custom_icons' === $_GET['page'] ) {
			wp_safe_redirect( admin_url( static::MENU_SLUG ) );
			die;
		}
	}

	/**
	 * Clean up admin Font manager admin listing
	 */
	public function clean_admin_listing_page() {
		global $typenow;

		if ( self::CPT !== $typenow ) {
			return;
		}

		add_filter( 'months_dropdown_results', '__return_empty_array' );
		add_filter( 'screen_options_show_screen', '__return_false' );
	}

	public function post_row_actions( $actions, $post ) {
		if ( self::CPT !== $post->post_type ) {
			return $actions;
		}

		unset( $actions['inline hide-if-no-js'] );

		return $actions;
	}

	public function add_finder_item( array $categories ) {
		$categories['settings']['items']['custom-icons'] = [
			'title' => esc_html__( 'Custom Icons', 'elementor-pro' ),
			'icon' => 'favorite',
			'url' => admin_url( static::MENU_SLUG ),
			'keywords' => [ 'custom', 'icons', 'elementor' ],
		];

		if ( ! $this->can_use_custom_icons() ) {
			$lock = new Feature_Lock( [ 'type' => 'custom-icon' ] );

			$categories['settings']['items']['custom-icons']['lock'] = $lock->get_config();
		}

		return $categories;
	}

	/**
	 * Register Font Manager action and filter hooks
	 */
	protected function actions() {
		add_action( 'init', [ $this, 'register_post_type' ] );

		if ( is_admin() ) {
			add_action( 'init', [ $this, 'redirect_admin_old_page_to_new' ] );

			add_action( 'elementor/admin/menu/register', function ( Admin_Menu_Manager $admin_menu_manager ) {
				$this->register_admin_menu( $admin_menu_manager );
			} );

			// TODO: BC - Remove after `Admin_Menu_Manager` will be the standard.
			add_action( 'admin_menu', function () {
				if ( did_action( 'elementor/admin/menu/register' ) ) {
					return;
				}

				$menu_title = _x( 'Custom Icons', 'Elementor Font', 'elementor-pro' );

				add_submenu_page(
					Settings::PAGE_ID,
					$menu_title,
					$menu_title,
					self::CAPABILITY,
					static::MENU_SLUG
				);
			}, 50 );

			add_action( 'admin_head', [ $this, 'clean_admin_listing_page' ] );
		}

		// TODO: Maybe just ignore all of those when the user can't use custom icons?
		add_filter( 'post_updated_messages', [ $this, 'post_updated_messages' ] );
		add_filter( 'post_row_actions', [ $this, 'post_row_actions' ], 10, 2 );

		add_filter( 'elementor/finder/categories', [ $this, 'add_finder_item' ] );

		/**
		 * Elementor icons manager loaded.
		 *
		 * Fires after the icons manager was fully loaded and instantiated.
		 *
		 * @since 2.0.0
		 *
		 * @param Fonts_Manager $this An instance of icons manager.
		 */
		do_action( 'elementor_pro/icons_manager_loaded', $this );
	}

	/**
	 * Fonts_Manager constructor.
	 */
	public function __construct() {
		$this->actions();
		$this->add_icon_type( 'custom', new Icons\Custom_Icons() );
		$this->add_icon_type( 'font-awesome-pro', new Icons\Font_Awesome_Pro() );
	}
}
