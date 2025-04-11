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
use ElementorPro\Core\Utils;
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

	private $has_popups = null;

	public function __construct() {
		parent::__construct();

		add_action( 'elementor/frontend/after_register_styles', [ $this, 'register_frontend_styles' ] );
		add_action( 'elementor/preview/enqueue_styles', [ $this, 'enqueue_preview_styles' ] );

		if ( $this->can_use_popups() ) {
			add_action( 'elementor/documents/register', [ $this, 'register_documents' ] );
			add_action( 'elementor/theme/register_locations', [ $this, 'register_location' ] );
			add_action( 'elementor/dynamic_tags/register', [ $this, 'register_tag' ] );
			add_action( 'elementor/ajax/register_actions', [ $this, 'register_ajax_actions' ] );

			add_action( 'wp_footer', [ $this, 'print_popups' ] );
			add_action( 'elementor_pro/init', [ $this, 'add_form_action' ] );

			add_action( 'elementor/frontend/before_register_styles', [ $this, 'register_styles' ] );
		} else {
			add_action( 'load-post.php', [ $this, 'disable_editing' ] );
			add_action( 'admin_init', [ $this, 'maybe_redirect_to_promotion_page' ] );
		}

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
		add_filter( 'elementor_pro/frontend/localize_settings', [ $this, 'localize_settings' ] );
	}

	public function register_frontend_styles() {
		$suffix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';

		wp_register_style(
			'e-popup',
			ELEMENTOR_PRO_URL . 'assets/css/conditionals/popup' . $suffix . '.css',
			[],
			ELEMENTOR_PRO_VERSION
		);
	}

	public function enqueue_preview_styles() {
		wp_enqueue_style( 'e-popup' );
	}

	public function disable_editing() {
		$post_id = Utils::_unstable_get_super_global_value( $_GET, 'post' );

		if ( ! $post_id ) {
			return;
		}

		$document = Plugin::elementor()->documents->get( $post_id );

		if ( ! $document ) {
			return;
		}

		$template_type = $document->get_main_meta( DocumentBase::TYPE_META_KEY );

		if ( static::DOCUMENT_TYPE === $template_type ) {
			$error = new \WP_Error( 'e_popups_editing_disabled', esc_html__( 'Invalid post type.', 'elementor-pro' ) );
			wp_die( $error ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		}
	}

	public function maybe_redirect_to_promotion_page() {
		if ( $this->is_on_popups_admin_page() ) {
			wp_redirect( $this->get_promotion_url() );
			exit();
		}
	}

	private function is_on_popups_admin_page() {
		global $pagenow;

		return isset( $pagenow ) &&
			'edit.php' === $pagenow &&
			Source_Local::CPT === Utils::_unstable_get_super_global_value( $_GET, 'post_type' ) &&
			static::DOCUMENT_TYPE === Utils::_unstable_get_super_global_value( $_GET, Source_Local::TAXONOMY_TYPE_SLUG );
	}

	private function get_promotion_url() {
		return add_query_arg(
			[
				'page' => static::PROMOTION_MENU_SLUG,
			],
			Source_Local::ADMIN_MENU_SLUG
		);
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
	 * @throws \Exception
	 */
	public function save_display_settings( $data ) {
		$document = Utils::_unstable_get_document_for_edit( $data['editor_post_id'] );

		/** @var Document $document */
		$document->save_display_settings_data( $data['settings'] );
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
		return ( API::is_license_active() && API::is_licence_has_feature( static::DOCUMENT_TYPE, API::BC_VALIDATION_CALLBACK ) ) || $this->has_popups();
	}

	private function has_popups() {
		if ( null !== $this->has_popups ) {
			return $this->has_popups;
		}

		$existing_popups = new \WP_Query( [
			'post_type' => Source_Local::CPT,
			'posts_per_page' => 1,
			'post_status' => 'any',
			'meta_query' => [
				[
					'key' => DocumentBase::TYPE_META_KEY,
					'value' => Document::get_type(),
				],
			],
			'meta_key' => DocumentBase::TYPE_META_KEY,
		] );

		$this->has_popups = $existing_popups->post_count > 0;

		return $this->has_popups;
	}

	public function localize_settings( array $settings ): array {
		$settings['popup']['hasPopUps'] = $this->has_popups();

		return $settings;
	}

	protected function get_assets_base_url() {
		return ELEMENTOR_PRO_URL;
	}

	public function register_styles() {
		wp_register_style(
			'e-popup',
			$this->get_css_assets_url( 'popup', 'assets/css/conditionals/', true ),
			[ 'elementor-frontend' ],
			ELEMENTOR_PRO_VERSION
		);
	}
}
