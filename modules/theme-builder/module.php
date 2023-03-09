<?php
namespace ElementorPro\Modules\ThemeBuilder;

use Elementor\Controls_Manager;
use Elementor\Core\Admin\Admin_Notices;
use Elementor\Core\Admin\Menu\Admin_Menu_Manager;
use Elementor\Core\Admin\Menu\Main as MainMenu;
use Elementor\Core\App\App;
use Elementor\Core\Base\Document;
use Elementor\TemplateLibrary\Source_Local;
use ElementorPro\Base\Module_Base;
use ElementorPro\Core\Utils;
use ElementorPro\Modules\ThemeBuilder\AdminMenuItems\Theme_Builder_Menu_Item;
use ElementorPro\Modules\ThemeBuilder\Classes;
use ElementorPro\Modules\ThemeBuilder\Documents\Single;
use ElementorPro\Modules\ThemeBuilder\Documents\Theme_Document;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {

	const ADMIN_LIBRARY_TAB_GROUP = 'theme';

	const ADMIN_MENU_PRIORITY = 15;

	public static function is_preview() {
		return Plugin::elementor()->preview->is_preview_mode() || is_preview();
	}

	public static function get_public_post_types( $args = [] ) {
		$post_types = Utils::get_public_post_types( $args );

		// Product form WooCommerce are handled separately.
		if ( class_exists( 'woocommerce' ) ) {
			unset( $post_types['product'] );
		}

		return $post_types;
	}

	public function get_name() {
		return 'theme-builder';
	}

	public function get_widgets() {
		$widgets = [
			'Site_Logo',
			'Site_Title',
			'Page_Title',
			'Post_Title',
			'Post_Excerpt',
			'Post_Content',
			'Post_Featured_Image',
			'Archive_Title',
		];

		if ( class_exists( '\ElementorPro\Modules\Posts\Widgets\Posts' ) ) {
			$widgets[] = 'Archive_Posts';
		}

		return $widgets;
	}

	/**
	 * @return Classes\Conditions_Manager
	 */
	public function get_conditions_manager() {
		return $this->get_component( 'conditions' );
	}

	/**
	 * @return Classes\Locations_Manager
	 */
	public function get_locations_manager() {
		return $this->get_component( 'locations' );
	}

	/**
	 * @return Classes\Preview_Manager
	 */
	public function get_preview_manager() {
		return $this->get_component( 'preview' );
	}

	/**
	 * @return Classes\Templates_Types_Manager
	 */
	public function get_types_manager() {
		return $this->get_component( 'templates_types' );
	}

	/**
	 * @param $post_id
	 *
	 * @return Theme_Document
	 */
	public function get_document( $post_id ) {
		$document = null;

		try {
			$document = Plugin::elementor()->documents->get( $post_id );
		} catch ( \Exception $e ) {
			// Do nothing.
			unset( $e );
		}

		if ( ! empty( $document ) && ! $document instanceof Theme_Document ) {
			$document = null;
		}

		return $document;
	}

	/**
	 * @deprecated 3.1.0
	 */
	public function localize_settings() {
		Plugin::elementor()->modules_manager->get_modules( 'dev-tools' )->deprecation->deprecated_function( __METHOD__, '3.1.0' );

		return [];
	}

	public function document_config( $config, $post_id ) {
		$document = $this->get_document( $post_id );

		if ( ! $document ) {
			return $config;
		}

		$types_manager = $this->get_types_manager();
		$conditions_manager = $this->get_conditions_manager();
		$template_type = $this->get_template_type( $post_id );

		$config = array_replace_recursive( $config, [
			'theme_builder' => [
				'types' => $types_manager->get_types_config(),
				'conditions' => $conditions_manager->get_conditions_config(),
				'template_conditions' => ( new Classes\Template_Conditions() )->get_config(),
				'is_theme_template' => $this->is_theme_template( $post_id ),
				'settings' => [
					'template_type' => $template_type,
					'location' => $document->get_location(),
					'conditions' => $conditions_manager->get_document_conditions( $document ),
				],
			],
		] );

		return $config;
	}

	public function register_controls( Controls_Manager $controls_manager ) {
		$controls_manager->register( new Classes\Conditions_Repeater() );
		$controls_manager->register( new Classes\Control_Media_Preview() );
	}

	public function create_new_dialog_types( $types ) {
		/**
		 * @var Theme_Document[] $document_types
		 */
		foreach ( $types as $type => $label ) {
			$document_type = Plugin::elementor()->documents->get_document_type( $type );
			$instance = new $document_type();

			if ( $instance instanceof Theme_Document && 'section' !== $type ) {
				$types[ $type ] .= $instance->get_location_label();
			}

			if ( Single::class === $document_type ) {
				unset( $types[ $type ] );
			}
		}

		return $types;
	}

	public function print_location_field() {
		$locations = $this->get_locations_manager()->get_locations( [
			'public' => true,
		] );

		if ( empty( $locations ) ) {
			return;
		}
		?>
		<div id="elementor-new-template__form__location__wrapper" class="elementor-form-field">
			<label for="elementor-new-template__form__location" class="elementor-form-field__label">
				<?php echo esc_html__( 'Select a Location', 'elementor-pro' ); ?>
			</label>
			<div class="elementor-form-field__select__wrapper">
				<select id="elementor-new-template__form__location" class="elementor-form-field__select" name="meta_location">
					<option value="">
						<?php echo esc_html__( 'Select...', 'elementor-pro' ); ?>
					</option>
					<?php

					foreach ( $locations as $location => $settings ) {
						echo sprintf( '<option value="%1$s">%2$s</option>', esc_html( $location ), esc_html( $settings['label'] ) );
					}
					?>
				</select>
			</div>
		</div>
		<?php
	}

	public function print_post_type_field() {
		$post_types = self::get_public_post_types( [
			'exclude_from_search' => false,
		] );

		if ( empty( $post_types ) ) {
			return;
		}
		?>
		<div id="elementor-new-template__form__post-type__wrapper" class="elementor-form-field">
			<label for="elementor-new-template__form__post-type" class="elementor-form-field__label">
				<?php echo esc_html__( 'Select Post Type', 'elementor-pro' ); ?>
			</label>
			<div class="elementor-form-field__select__wrapper">
				<select
					id="elementor-new-template__form__post-type"
					class="elementor-form-field__select"
					name="<?php echo Single::REMOTE_CATEGORY_META_KEY; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>"
				>
					<option value="">
						<?php echo esc_html__( 'Select', 'elementor-pro' ); ?>...
					</option>
					<?php

					foreach ( $post_types as $post_type => $label ) {
						$doc_type = Plugin::elementor()->documents->get_document_type( $post_type );
						$doc_class = new $doc_type();

						$is_base_page = $doc_class instanceof \Elementor\Core\DocumentTypes\PageBase;

						if ( $is_base_page ) {
							$post_type_object = get_post_type_object( $post_type );
							echo sprintf( '<option value="%1$s">%2$s</option>', esc_html( $post_type ), esc_html( $post_type_object->labels->singular_name ) );
						}
					}

					// 404.
					echo sprintf( '<option value="%1$s">%2$s</option>', 'not_found404', esc_html__( '404 Page', 'elementor-pro' ) );

					?>
				</select>
			</div>
		</div>
		<?php
	}

	public function admin_head() {
		$current_screen = get_current_screen();
		if ( $current_screen && in_array( $current_screen->id, [ 'elementor_library', 'edit-elementor_library' ] ) ) {
			// For column type (Supported/Unsupported) & for `print_location_field`.
			$this->get_locations_manager()->register_locations();
		}
	}

	/**
	 * An hack to hide the app menu on before render without remove the app page from system.
	 *
	 * @param $menu
	 *
	 * @return mixed
	 */
	public function hide_admin_app_submenu( $menu ) {
		remove_submenu_page( Source_Local::ADMIN_MENU_SLUG, App::PAGE_ID );

		return $menu;
	}

	public function admin_columns_content( $column_name, $post_id ) {
		if ( 'elementor_library_type' === $column_name ) {
			/** @var Document $document */
			$document = Plugin::elementor()->documents->get( $post_id );

			if ( $document instanceof Theme_Document ) {
				$location_label = $document->get_location_label();

				if ( $location_label ) {
					echo ' - ' . esc_html( $location_label );
				}
			}
		}
	}

	public function get_template_type( $post_id ) {
		return Source_local::get_template_type( $post_id );
	}

	public function is_theme_template( $post_id ) {
		$document = Plugin::elementor()->documents->get( $post_id );

		return $document instanceof Theme_Document;
	}

	public function on_elementor_editor_init() {
		Plugin::elementor()->common->add_template( __DIR__ . '/views/panel-template.php' );
	}

	public function add_finder_items( array $categories ) {
		$categories['create']['items']['theme-template'] = [
			'title' => esc_html__( 'Add New Theme Template', 'elementor-pro' ),
			'icon' => 'plus-circle-o',
			'url' => $this->get_admin_templates_url() . '#add_new',
			'keywords' => [ 'template', 'theme', 'new', 'create' ],
		];

		return $categories;
	}

	/**
	 * Add New item to admin menu.
	 *
	 * @since 3.6.0
	 * @access private
	 */
	private function register_admin_menu( MainMenu $menu ) {
		$menu->add_submenu( [
			'menu_title' => esc_html__( 'Theme Builder', 'elementor-pro' ),
			'menu_slug' => Plugin::elementor()->app->get_settings( 'menu_url' ),
			'index' => 30,
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
	private function register_admin_menu_legacy( Admin_Menu_Manager $admin_menu ) {
		$admin_menu->register( $this->get_admin_templates_url( true ), new Theme_Builder_Menu_Item() );
	}

	public function print_new_theme_builder_promotion( $views ) {
		/** @var Source_Local $source */
		$source = Plugin::elementor()->templates_manager->get_source( 'local' );

		$current_tab_group = $source->get_current_tab_group();

		if ( self::ADMIN_LIBRARY_TAB_GROUP === $current_tab_group ) {
			/**
			 * @var Admin_Notices $admin_notices
			 */
			$admin_notices = Plugin::elementor()->admin->get_component( 'admin-notices' );

			$admin_notices->print_admin_notice( [
				'title' => esc_html__( 'Meet the New Theme Builder: More Intuitive and Visual Than Ever', 'elementor-pro' ),
				'description' => esc_html__( 'With the new Theme Builder you can visually manage every part of your site intuitively, making the task of designing a complete website that much easier', 'elementor-pro' ),
				'button' => [
					'text' => esc_html__( 'Try it Now', 'elementor-pro' ),
					'class' => 'elementor-button elementor-button-success',
					'url' => Plugin::elementor()->app->get_settings( 'menu_url' ),
				],
			] );
		}

		return $views;
	}

	private function get_admin_templates_url( $relative = false ) {
		$base_url = Source_Local::ADMIN_MENU_SLUG;

		if ( ! $relative ) {
			$base_url = admin_url( $base_url );
		}

		return add_query_arg( 'tabs_group', self::ADMIN_LIBRARY_TAB_GROUP, $base_url );
	}

	/**
	 * Get the conflicts between the active templates' conditions and new templates.
	 *
	 * @since 3.8.0
	 *
	 * @param array $templates
	 * @return array
	 */
	public function get_conditions_conflicts( array $templates ) : array {
		$conflicts = [];

		foreach ( $templates as $template_id => $template ) {
			if ( empty( $template['conditions'] ) ) {
				continue;
			}

			foreach ( $template['conditions'] as $condition ) {
				$condition = rtrim( implode( '/', $condition ), '/' );
				$condition_conflicts = $this->get_conditions_manager()->get_conditions_conflicts_by_location( $condition, $template['location'] );

				if ( $condition_conflicts ) {
					$conflicts[ $template_id ] = $condition_conflicts;
				}
			}
		}

		return $conflicts;
	}

	/**
	 * TODO: BC - remove in 3.11.0|4.1.0
	 * Add conflicts to import result.
	 *
	 * @since 3.7.0
	 *
	 * @param array $result
	 * @return array
	 */
	private function add_conflicts_to_import_result( array $result ) {
		$manifest_data = $result['manifest'];

		if ( empty( $manifest_data['templates'] ) ) {
			return $result;
		}

		$result['conflicts'] = $this->get_conditions_conflicts( $manifest_data['templates'] );

		return $result;
	}

	public function __construct() {
		parent::__construct();

		require __DIR__ . '/api.php';

		$this->add_component( 'theme_support', new Classes\Theme_Support() );
		$this->add_component( 'conditions', new Classes\Conditions_Manager() );
		$this->add_component( 'templates_types', new Classes\Templates_Types_Manager() );
		$this->add_component( 'preview', new Classes\Preview_Manager() );
		$this->add_component( 'locations', new Classes\Locations_Manager() );

		add_action( 'elementor/controls/register', [ $this, 'register_controls' ] );

		// Editor
		add_action( 'elementor/editor/init', [ $this, 'on_elementor_editor_init' ] );
		add_filter( 'elementor/document/config', [ $this, 'document_config' ], 10, 2 );

		// Admin
		add_action( 'admin_head', [ $this, 'admin_head' ] );
		add_filter( 'add_menu_classes', [ $this, 'hide_admin_app_submenu' ], 9 /* Before core submenu fixes */ );
		add_action( 'manage_' . Source_Local::CPT . '_posts_custom_column', [ $this, 'admin_columns_content' ], 10, 2 );
		add_action( 'elementor/template-library/create_new_dialog_fields', [ $this, 'print_location_field' ] );
		add_action( 'elementor/template-library/create_new_dialog_fields', [ $this, 'print_post_type_field' ] );

		if ( Plugin::elementor()->experiments->is_feature_active( 'admin_menu_rearrangement' ) ) {
			add_action( 'elementor/admin/menu_registered/elementor', function( MainMenu $menu ) {
				$this->register_admin_menu( $menu );
			} );
		} else {
			add_action( 'elementor/admin/menu/register', function ( Admin_Menu_Manager $admin_menu ) {
				$this->register_admin_menu_legacy( $admin_menu );
			}, static::ADMIN_MENU_PRIORITY /* After "Popups" */ );

			// TODO: BC - Remove after `Admin_Menu_Manager` will be the standard.
			add_action( 'admin_menu', function () {
				if ( did_action( 'elementor/admin/menu/register' ) ) {
					return;
				}

				add_submenu_page(
					Source_Local::ADMIN_MENU_SLUG,
					'',
					esc_html__( 'Theme Builder', 'elementor-pro' ),
					'publish_posts',
					$this->get_admin_templates_url( true )
				);
			}, 22 /* After core promotion menu */ );
		}

		add_filter( 'elementor/template-library/create_new_dialog_types', [ $this, 'create_new_dialog_types' ] );
		add_filter( 'views_edit-' . Source_Local::CPT, [ $this, 'print_new_theme_builder_promotion' ], 9 );

		// Moved into the IE module \ElementorPro\Core\App\Modules\ImportExport\Module::add_actions
		// TODO: remove in 3.10.0
		add_filter( 'elementor/import/stage_1/result', function ( array $result ) {
			return $this->add_conflicts_to_import_result( $result );
		});

		// Common
		add_filter( 'elementor/finder/categories', [ $this, 'add_finder_items' ] );
	}
}
