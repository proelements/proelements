<?php
namespace ElementorPro\Modules\Popup;

use Elementor\Core\Admin\Menu\Admin_Menu_Manager;
use Elementor\Core\Admin\Menu\Main as MainMenu;
use Elementor\Core\Base\Document as DocumentBase;
use Elementor\Core\Common\Modules\Ajax\Module as Ajax;
use Elementor\Core\Documents_Manager;
use Elementor\Core\DynamicTags\Manager as DynamicTagsManager;
use Elementor\TemplateLibrary\Source_Local;
use ElementorPro\Base\Module_Base;
use ElementorPro\Core\Behaviors\Feature_Lock;
use ElementorPro\License\API;
use ElementorPro\Modules\Popup\AdminMenuItems\Popups_Menu_Item;
use ElementorPro\Modules\Popup\AdminMenuItems\Popups_Promotion_Menu_Item;
use ElementorPro\Modules\ThemeBuilder\Classes\Locations_Manager;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {
	const DOCUMENT_TYPE = 'popup';

	const PROMOTION_MENU_SLUG = 'e-popups';

	public function __construct() {
		parent::__construct();

		// TODO: Maybe just ignore all of those when the user can't use popups?
		add_action( 'elementor/documents/register', [ $this, 'register_documents' ] );
		add_action( 'elementor/theme/register_locations', [ $this, 'register_location' ] );
		add_action( 'elementor/dynamic_tags/register', [ $this, 'register_tag' ] );
		add_action( 'elementor/ajax/register_actions', [ $this, 'register_ajax_actions' ] );

		add_action( 'wp_footer', [ $this, 'print_popups' ] );
		add_action( 'elementor_pro/init', [ $this, 'add_form_action' ] );

		if ( Plugin::elementor()->experiments->is_feature_active( 'admin_menu_rearrangement' ) ) {
			add_action( 'elementor/admin/menu_registered/elementor', function( MainMenu $menu ) {
				$this->register_admin_menu( $menu );
			} );
		} else {
			add_action( 'elementor/admin/menu/register', function( Admin_Menu_Manager $admin_menu_manager ) {
				if ( $this->can_use_popups() ) {
					$admin_menu_manager->register( $this->get_admin_url( true ), new Popups_Menu_Item() );
				} else {
					$admin_menu_manager->register( static::PROMOTION_MENU_SLUG, new Popups_Promotion_Menu_Item() );
				}
			} );

			// TODO: BC - Remove in the future.
			add_action( 'admin_menu', function() {
				$this->register_admin_menu_legacy();
			}, 21 /* After `Admin_Menu_Manager` */ );
		}

		add_filter( 'elementor/finder/categories', [ $this, 'add_finder_items' ] );
	}

	public function get_name() {
		return 'popup';
	}

	public function add_form_action() {
		$this->add_component( 'form-action', new Form_Action() );
	}

	public static function add_popup_to_location( $popup_id ) {
		/** @var \ElementorPro\Modules\ThemeBuilder\Module $theme_builder */
		$theme_builder = Plugin::instance()->modules_manager->get_modules( 'theme-builder' );

		$theme_builder->get_locations_manager()->add_doc_to_location( Document::get_property( 'location' ), $popup_id );
	}

	public function register_documents( Documents_Manager $documents_manager ) {
		$documents_manager->register_document_type( self::DOCUMENT_TYPE, Document::get_class_full_name() );
	}

	public function register_location( Locations_Manager $location_manager ) {
		$location_manager->register_location(
			'popup',
			[
				'label' => esc_html__( 'Popup', 'elementor-pro' ),
				'multiple' => true,
				'public' => false,
				'edit_in_content' => false,
			]
		);
	}

	public function print_popups() {
		elementor_theme_do_location( 'popup' );
	}

	public function register_tag( DynamicTagsManager $dynamic_tags ) {
		$tag = __NAMESPACE__ . '\Tag';

		$dynamic_tags->register( new $tag() );
	}

	public function register_ajax_actions( Ajax $ajax ) {
		$ajax->register_ajax_action( 'pro_popup_save_display_settings', [ $this, 'save_display_settings' ] );
	}

	/**
	 * @deprecated 3.1.0
	 */
	public function localize_settings() {
		Plugin::elementor()->modules_manager->get_modules( 'dev-tools' )->deprecation->deprecated_function( __METHOD__, '3.1.0' );

		return [];
	}

	public function save_display_settings( $data ) {
		/** @var Document $popup_document */
		$popup_document = Plugin::elementor()->documents->get( $data['editor_post_id'] );

		$popup_document->save_display_settings_data( $data['settings'] );
	}

	/**
	 * Add New item to admin menu.
	 *
	 * @since 3.6.0
	 * @access private
	 */
	private function register_admin_menu( MainMenu $menu ) {
		$menu->add_submenu( [
			'menu_title' => esc_html__( 'Popups', 'elementor-pro' ),
			'menu_slug' => $this->get_admin_url( true ),
			'index' => 10,
		] );
	}

	/**
	 * Add New item to admin menu.
	 *
	 * Fired by `admin_menu` action.
	 *
	 * @since 3.6.0
	 * @access private
	 */
	private function register_admin_menu_legacy() {
		if ( did_action( 'elementor/admin/menu/register' ) ) {
			return;
		}

		add_submenu_page(
			Source_Local::ADMIN_MENU_SLUG,
			'',
			esc_html__( 'Popups', 'elementor-pro' ),
			'publish_posts',
			$this->get_admin_url( true )
		);
	}

	public function add_finder_items( array $categories ) {
		$categories['general']['items']['popups'] = [
			'title' => esc_html__( 'Popups', 'elementor-pro' ),
			'icon' => 'library-save',
			'url' => $this->get_admin_url(),
			'keywords' => [ 'template', 'popup', 'library' ],
		];

		if ( ! $this->can_use_popups() ) {
			$lock = new Feature_Lock( [ 'type' => 'popup' ] );

			$categories['general']['items']['popups']['lock'] = $lock->get_config();
		}

		return $categories;
	}

	private function get_admin_url( $relative = false ) {
		$base_url = Source_Local::ADMIN_MENU_SLUG;
		if ( ! $relative ) {
			$base_url = admin_url( $base_url );
		}

		return add_query_arg(
			[
				'tabs_group' => 'popup',
				'elementor_library_type' => 'popup',
			],
			$base_url
		);
	}

	private function can_use_popups() {
		return ( API::is_license_active() || $this->has_popups() );
	}

	private function has_popups() {
		$existing_popups = get_posts( [
			'post_type' => Source_Local::CPT,
			'posts_per_page' => 1, // Avoid fetching too much data
			'post_status' => 'any',
			'meta_query' => [
				[
					'key' => DocumentBase::TYPE_META_KEY,
					'value' => Document::get_type(),
				],
			],
			'meta_key' => DocumentBase::TYPE_META_KEY,
		] );

		return ! empty( $existing_popups );
	}
}
