<?php
namespace ElementorPro\Modules\AssetsManager\AssetTypes;

use Elementor\Core\Admin\Menu\Admin_Menu_Manager;
use Elementor\Utils;
use ElementorPro\Core\Utils as Pro_Utils;
use Elementor\Core\Common\Modules\Ajax\Module as Ajax;
use ElementorPro\Core\Behaviors\Feature_Lock;
use ElementorPro\License\API;
use ElementorPro\Modules\AssetsManager\AssetTypes\AdminMenuItems\Custom_Fonts_Menu_Item;
use ElementorPro\Modules\AssetsManager\AssetTypes\AdminMenuItems\Custom_Fonts_Promotion_Menu_Item;
use ElementorPro\Modules\AssetsManager\Classes;
use Elementor\Settings;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Fonts_Manager {

	const CAPABILITY = 'manage_options';

	const CPT = 'elementor_font';

	const TAXONOMY = 'elementor_font_type';

	const FONTS_OPTION_NAME = 'elementor_fonts_manager_fonts';

	const FONTS_NAME_TYPE_OPTION_NAME = 'elementor_fonts_manager_font_types';

	const MENU_SLUG = 'edit.php?post_type=' . self::CPT;

	const PROMOTION_MENU_SLUG = 'e-custom-fonts';

	private $post_type_object;

	private $taxonomy_object;

	private $enqueued_fonts = [];

	protected $font_types = [];

	private $has_fonts = null;

	/**
	 * get a font type object for a given type
	 *
	 * @param null $type
	 *
	 * @return array|bool|\ElementorPro\Modules\AssetsManager\Classes\Font_Base
	 */
	public function get_font_type_object( $type = null ) {
		if ( null === $type ) {
			return $this->font_types;
		}

		if ( isset( $this->font_types[ $type ] ) ) {
			return $this->font_types[ $type ];
		}

		return false;
	}

	/**
	 * Add a font type to the font manager
	 *
	 * @param string            $font_type
	 * @param Classes\Font_Base $instance
	 */
	public function add_font_type( $font_type, $instance ) {
		$this->font_types[ $font_type ] = $instance;
	}

	/**
	 * Register elementor font custom post type and elementor font type custom taxonomy
	 */
	public function register_post_type_and_tax() {
		$labels = [
			'name' => _x( 'Custom Fonts', 'CPT Name', 'elementor-pro' ),
			'singular_name' => _x( 'Font', 'CPT Singular Name', 'elementor-pro' ),
			'add_new' => esc_html__( 'Add New', 'elementor-pro' ),
			'add_new_item' => esc_html__( 'Add New Font', 'elementor-pro' ),
			'edit_item' => esc_html__( 'Edit Font', 'elementor-pro' ),
			'new_item' => esc_html__( 'New Font', 'elementor-pro' ),
			'all_items' => esc_html__( 'All Fonts', 'elementor-pro' ),
			'view_item' => esc_html__( 'View Font', 'elementor-pro' ),
			'search_items' => esc_html__( 'Search Font', 'elementor-pro' ),
			'not_found' => esc_html__( 'No fonts found', 'elementor-pro' ),
			'not_found_in_trash' => esc_html__( 'No fonts found in trash', 'elementor-pro' ),
			'parent_item_colon' => '',
			'menu_name' => _x( 'Custom Fonts', 'CPT Menu Name', 'elementor-pro' ),
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

		$taxonomy_labels = [
			'name' => _x( 'Font Types', 'Font type taxonomy general name', 'elementor-pro' ),
			'singular_name' => _x( 'Font Type', 'Font type singular name', 'elementor-pro' ),
			'search_items' => esc_html__( 'Search Font Types', 'elementor-pro' ),
			'popular_items' => esc_html__( 'Popular Font Types', 'elementor-pro' ),
			'all_items' => esc_html__( 'All Font Types', 'elementor-pro' ),
			'edit_item' => esc_html__( 'Edit Font Type', 'elementor-pro' ),
			'update_item' => esc_html__( 'Update Font Type', 'elementor-pro' ),
			'add_new_item' => esc_html__( 'Add New Font Type', 'elementor-pro' ),
			'new_item_name' => esc_html__( 'New Font Type Name', 'elementor-pro' ),
			'separate_items_with_commas' => esc_html__( 'Separate Font Types with commas', 'elementor-pro' ),
			'add_or_remove_items' => esc_html__( 'Add or remove Font Types', 'elementor-pro' ),
			'choose_from_most_used' => esc_html__( 'Choose from the most used Font Types', 'elementor-pro' ),
			'not_found' => esc_html__( 'No Font Types found.', 'elementor-pro' ),
			'menu_name' => esc_html__( 'Font Types', 'elementor-pro' ),
		];

		$taxonomy_args = [
			'labels' => $taxonomy_labels,
			'hierarchical' => false,
			'show_ui' => true,
			'show_in_nav_menus' => false,
			'query_var' => is_admin(),
			'rewrite' => false,
			'public' => false,
			'meta_box_cb' => [ $this, 'print_taxonomy_metabox' ],
		];

		$this->taxonomy_object = register_taxonomy( self::TAXONOMY, self::CPT, $taxonomy_args );
	}

	public function post_updated_messages( $messages ) {
		$messages[ self::CPT ] = [
			0 => '', // Unused. Messages start at index 1.
			1 => esc_html__( 'Font updated.', 'elementor-pro' ),
			2 => esc_html__( 'Custom field updated.', 'elementor-pro' ),
			3 => esc_html__( 'Custom field deleted.', 'elementor-pro' ),
			4 => esc_html__( 'Font updated.', 'elementor-pro' ),
			/* translators: %s: Date and time of the revision. */
			5 => isset( $_GET['revision'] ) ? sprintf( esc_html__( 'Font restored to revision from %s', 'elementor-pro' ), wp_post_revision_title( (int) $_GET['revision'], false ) ) : false,
			6 => esc_html__( 'Font saved.', 'elementor-pro' ),
			7 => esc_html__( 'Font saved.', 'elementor-pro' ),
			8 => esc_html__( 'Font submitted.', 'elementor-pro' ),
			9 => esc_html__( 'Font updated.', 'elementor-pro' ),
			10 => esc_html__( 'Font draft updated.', 'elementor-pro' ),
		];

		return $messages;
	}

	/**
	 * Print Font Type metabox
	 *
	 * @param $post
	 * @param $box
	 */
	public function print_taxonomy_metabox( $post, $box ) {
		wp_nonce_field( self::CPT, self::CPT . '_nonce' );
		$name = self::TAXONOMY;
		?>
		<div id="taxonomy-<?php echo esc_attr( $name ); ?>" class="categorydiv">
			<?php
			$term_obj = wp_get_object_terms( $post->ID, $name );
			$slug = false;
			if ( is_array( $term_obj ) && isset( $term_obj[0] ) ) {
				$slug = $term_obj[0]->slug;
			}
			$options = '';
			foreach ( $this->font_types as $type => $instance ) {
				$options .= sprintf( '<option value="%s"%s>%s</option>' . "\n", $type, selected( $slug, $type, false ), $instance->get_name() );
			}
			?>
			<select class="widefat" name="<?php echo esc_attr( $name ); ?>">
				<?php Utils::print_unescaped_internal_string( $options ); ?>
			</select>
		</div>
		<?php
	}

	/**
	 * Add Font manager link to admin menu
	 */
	private function register_admin_menu( Admin_Menu_Manager $admin_menu_manager ) {
		if ( $this->can_use_custom_fonts() ) {
			$admin_menu_manager->register( static::MENU_SLUG, new Custom_Fonts_Menu_Item() );
		} else {
			$admin_menu_manager->register( static::PROMOTION_MENU_SLUG, new Custom_Fonts_Promotion_Menu_Item() );
		}
	}

	private function can_use_custom_fonts() {
		return ( API::is_license_active() || $this->has_fonts() );
	}

	private function has_fonts() {
		if ( null !== $this->has_fonts ) {
			return $this->has_fonts;
		}

		$existing_fonts = new \WP_Query( [
			'post_type' => static::CPT,
			'posts_per_page' => 1,
		] );

		$this->has_fonts = $existing_fonts->post_count > 0;

		return $this->has_fonts;
	}

	public function redirect_admin_old_page_to_new() {
		if ( ! empty( $_GET['page'] ) && 'elementor_custom_fonts' === $_GET['page'] ) {
			wp_safe_redirect( admin_url( static::MENU_SLUG ) );
			die;
		}
	}

	/**
	 * Render preview column in font manager admin listing
	 *
	 * @param $column
	 * @param $post_id
	 */
	public function render_columns( $column, $post_id ) {
		if ( 'font_preview' === $column ) {
			$font_type = $this->get_font_type_by_post_id( $post_id, true );

			if ( false === $font_type ) {
				return;
			}

			$font_type->render_preview_column( $post_id );
		}

		if ( 'font_type' === $column ) {
			$font_type = $this->get_font_type_by_post_id( $post_id, true );

			if ( false === $font_type ) {
				return;
			}

			$font_type->render_type_column( $post_id );
		}
	}

	/**
	 * Handle editor request to embed/link font CSS per font type
	 *
	 * @param array $data
	 *
	 * @return array
	 * @throws \Exception
	 */
	public function assets_manager_panel_action_data( array $data ) {
		$document = Pro_Utils::_unstable_get_document_for_edit( $data['editor_post_id'] );

		if ( empty( $data['type'] ) ) {
			throw new \Exception( 'Font type is required.' );
		}

		if ( empty( $data['font'] ) ) {
			throw new \Exception( 'Font is required.' );
		}

		if ( 'variable' === $data['type'] ) {
			$data['type'] = 'custom';
		}

		$asset = $this->get_font_type_object( $data['type'] );

		if ( ! $asset ) {
			throw new \Exception( 'Font type not found.' );
		}

		try {
			return $asset->handle_panel_request( $data );

		} catch ( \Exception $exception ) {
			throw $exception;
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
		add_action( 'manage_' . self::CPT . '_posts_custom_column', [ $this, 'render_columns' ], 10, 2 );
		add_filter( 'display_post_states', [ $this, 'display_post_states' ], 10, 2 );
		add_filter( 'screen_options_show_screen', '__return_false' );
	}

	public function update_enter_title_here( $title, $post ) {
		if ( isset( $post->post_type ) && self::CPT === $post->post_type ) {
			return esc_html__( 'Enter Font Family', 'elementor-pro' );
		}

		return $title;
	}

	public function get_font_variables( $font_variables ) {
		$font_manager_fonts = $this->get_fonts();

		if ( empty( $font_manager_fonts ) ) {
			return $font_variables;
		}

		foreach ( $font_manager_fonts as $font_family => $font_data ) {
			if ( empty( $font_data['variables'] ) ) {
				continue;
			}

			$font_variables[ $font_family ] = $font_data['variables'];
		}

		return $font_variables;
	}

	public function get_font_variable_ranges( $font_variable_ranges ) {
		$font_manager_fonts = $this->get_fonts();

		if ( empty( $font_manager_fonts ) ) {
			return $font_variable_ranges;
		}

		foreach ( $font_manager_fonts as $font_family => $font_data ) {
			if ( empty( $font_data['variable_ranges'] ) ) {
				continue;
			}

			$font_variable_ranges[ $font_family ] = $font_data['variable_ranges'];
		}

		return $font_variable_ranges;
	}

	public function post_row_actions( $actions, $post ) {
		if ( self::CPT !== $post->post_type ) {
			return $actions;
		}

		unset( $actions['inline hide-if-no-js'] );

		return $actions;
	}

	public function display_post_states( $post_states, $post ) {
		$font_type = $this->get_font_type_by_post_id( $post->ID, true );

		if ( false !== $font_type ) {
			$font_type->get_font_variations_count( $post->ID );
		}

		return $post_states;
	}

	/**
	 * Define which columns to display in font manager admin listing
	 *
	 * @param $columns
	 *
	 * @return array
	 */
	public function manage_columns( $columns ) {
		return [
			'cb' => '<input type="checkbox" />',
			'title' => esc_html__( 'Font Family', 'elementor-pro' ),
			'font_preview' => esc_html__( 'Preview', 'elementor-pro' ),
			'font_type' => esc_html__( 'Type', 'elementor-pro' ),
		];
	}

	public function register_fonts_in_control( $fonts ) {
		$custom_fonts = $this->get_font_types();
		if ( empty( $custom_fonts ) ) {
			$this->generate_fonts_list();
			$custom_fonts = $this->get_font_types();
		}

		return array_replace( $custom_fonts, $fonts );
	}

	public function register_fonts_groups( $font_groups ) {
		$new_groups = [];

		foreach ( $this->get_font_type_object() as $type => $instance ) {
			$new_groups[ $type ] = $instance->get_name();
		}

		$new_groups['variable'] = esc_html__( 'Variable Fonts', 'elementor-pro' );

		return array_replace( $new_groups, $font_groups );
	}

	/**
	 * Gets a Font type for any given post id
	 *
	 * @param      $post_id
	 * @param bool $return_object
	 *
	 * @return array|bool|Classes\Font_Base
	 */
	private function get_font_type_by_post_id( $post_id, $return_object = false ) {
		$term_obj = get_the_terms( $post_id, self::TAXONOMY );

		if ( is_array( $term_obj ) ) {
			$type_obj = array_shift( $term_obj );

			if ( false === $return_object ) {
				return $type_obj->slug;
			}

			return $this->get_font_type_object( $type_obj->slug );
		}

		return false;
	}

	/**
	 * Get font manager fonts as font family => font type array
	 * @return array
	 */
	private function get_font_types() {
		static $font_types = false;

		if ( ! $font_types ) {
			$font_types = get_option( self::FONTS_NAME_TYPE_OPTION_NAME, [] );
		}

		return $font_types;
	}

	/**
	 * Generates a list of all Font Manager fonts and stores it in the options table
	 * @return array
	 */
	private function generate_fonts_list() {
		$fonts = new \WP_Query( [
			'post_type' => self::CPT,
			'posts_per_page' => -1,
		] );

		$new_fonts = [];
		$font_types = [];

		foreach ( $fonts->posts as $font ) {
			$font_type = $this->get_font_type_by_post_id( $font->ID, true );

			if ( false === $font_type ) {
				continue;
			}

			$font_types = array_replace( $font_types, $font_type->get_font_family_type( $font->ID, $font->post_title ) );
			$new_fonts = array_replace( $new_fonts, $font_type->get_font_data( $font->ID, $font->post_title ) );
		}

		update_option( self::FONTS_NAME_TYPE_OPTION_NAME, $font_types );
		update_option( self::FONTS_OPTION_NAME, $new_fonts );

		return $new_fonts;
	}

	/**
	 * runs on Elementor font post save and calls the font type handler save meta method
	 *
	 * @param int      $post_id
	 * @param \WP_Post $post
	 * @param bool     $update
	 *
	 * @return mixed
	 */
	public function save_post_meta( $post_id, $post, $update ) {
		// If this is an autosave, our form has not been submitted,
		// so we don't want to do anything.
		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
			return $post_id;
		}

		// Check the user's permissions.
		if ( ! current_user_can( 'edit_post', $post_id ) ) {
			return $post_id;
		}

		// Check if our nonce is set.
		if ( ! isset( $_POST[ self::CPT . '_nonce' ] ) ) {
			return $post_id;
		}

		// Verify that the nonce is valid.
		if ( ! wp_verify_nonce(
			Pro_Utils::_unstable_get_super_global_value( $_POST, self::CPT . '_nonce' ),
			self::CPT
		) ) {
			return $post_id;
		}

		// Save font type
		// only custom for now
		$custom_font = $this->get_font_type_object( 'custom' );

		wp_set_object_terms( $post_id, $custom_font->get_type(), self::TAXONOMY );

		// Let Font type handle saving
		// Sanitize the whole $_POST array
		$custom_font->save_meta( $post_id, Pro_Utils::_unstable_get_super_global_value( [ 'data' => $_POST ], 'data' ) );
	}

	/**
	 * Helper to clean font list on save/update
	 */
	public function clear_fonts_list() {
		delete_option( self::FONTS_OPTION_NAME );
		delete_option( self::FONTS_NAME_TYPE_OPTION_NAME );
	}

	/**
	 * Get fonts array form the database or generate a new list if $force is set to true
	 *
	 * @param bool $force
	 *
	 * @return array|bool|mixed
	 */
	public function get_fonts() {
		static $fonts = false;

		if ( false !== $fonts ) {
			return $fonts;
		}

		$fonts = $this->generate_fonts_list();

		$fonts = get_option( self::FONTS_OPTION_NAME, false );

		return $fonts;
	}

	/**
	 * Enqueue fonts css
	 *
	 * @param $post_css
	 */
	public function enqueue_fonts( $post_css ) {
		$used_fonts = $post_css->get_fonts();
		$font_manager_fonts = $this->get_fonts();
		$font_types = $this->get_font_types();

		foreach ( $used_fonts as $font_family ) {
			if ( ! isset( $font_types[ $font_family ] ) || in_array( $font_family, $this->enqueued_fonts ) ) {
				continue;
			}

			$font_type_name = $font_types[ $font_family ];

			if ( 'variable' === $font_type_name ) {
				$font_type_name = 'custom';
			}

			$font_type = $this->get_font_type_object( $font_type_name );
			if ( ! $font_type ) {
				continue;
			}

			$font_data = [];
			if ( isset( $font_manager_fonts[ $font_family ] ) ) {
				$font_data = $font_manager_fonts[ $font_family ];
			}
			$font_type->enqueue_font( $font_family, $font_data, $post_css );

			$this->enqueued_fonts[] = $font_family;
		}
	}

	public function register_ajax_actions( Ajax $ajax ) {
		$ajax->register_ajax_action( 'pro_assets_manager_panel_action_data', [ $this, 'assets_manager_panel_action_data' ] );
	}

	public function add_finder_item( array $categories ) {
		$categories['settings']['items']['custom-fonts'] = [
			'title' => esc_html__( 'Custom Fonts', 'elementor-pro' ),
			'icon' => 'typography',
			'url' => admin_url( static::MENU_SLUG ),
			'keywords' => [ 'custom', 'fonts', 'elementor' ],
		];

		if ( ! $this->can_use_custom_fonts() ) {
			$lock = new Feature_Lock( [ 'type' => 'custom-font' ] );

			$categories['settings']['items']['custom-fonts']['lock'] = $lock->get_config();
		}

		return $categories;
	}

	public function admin_menu_make_open_on_subpage( $parent_file ) {
		if ( static::MENU_SLUG === $parent_file ) {
			$parent_file = Settings::PAGE_ID;
		}

		return $parent_file;
	}

	/**
	 * Register Font Manager action and filter hooks
	 */
	protected function actions() {
		add_action( 'init', [ $this, 'register_post_type_and_tax' ] );

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

				$menu_title = _x( 'Custom Fonts', 'Elementor Font', 'elementor-pro' );

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

		// TODO: Maybe just ignore all of those when the user can't use custom fonts?
		add_filter( 'post_row_actions', [ $this, 'post_row_actions' ], 10, 2 );
		add_filter( 'manage_' . self::CPT . '_posts_columns', [ $this, 'manage_columns' ], 100 );
		add_action( 'save_post_' . self::CPT, [ $this, 'save_post_meta' ], 10, 3 );
		add_action( 'save_post_' . self::CPT, [ $this, 'clear_fonts_list' ], 100 );

		add_filter( 'elementor/fonts/groups', [ $this, 'register_fonts_groups' ] );
		add_filter( 'elementor/fonts/additional_fonts', [ $this, 'register_fonts_in_control' ] );
		add_filter( 'elementor/finder/categories', [ $this, 'add_finder_item' ] );
		add_action( 'elementor/css-file/post/parse', [ $this, 'enqueue_fonts' ] );
		add_action( 'elementor/css-file/global/parse', [ $this, 'enqueue_fonts' ] );
		add_filter( 'post_updated_messages', [ $this, 'post_updated_messages' ] );
		add_filter( 'enter_title_here', [ $this, 'update_enter_title_here' ], 10, 2 );

		add_filter( 'elementor/typography/font_variables', [ $this, 'get_font_variables' ] );
		add_filter( 'elementor/typography/font_variable_ranges', [ $this, 'get_font_variable_ranges' ] );

		add_filter( 'parent_file', [ $this, 'admin_menu_make_open_on_subpage' ] );

		// Ajax.
		add_action( 'elementor/ajax/register_actions', [ $this, 'register_ajax_actions' ] );

		/**
		 * Elementor fonts manager loaded.
		 *
		 * Fires after the fonts manager was fully loaded and instantiated.
		 *
		 * @since 2.0.0
		 *
		 * @param Fonts_Manager $this An instance of fonts manager.
		 */
		do_action( 'elementor_pro/fonts_manager_loaded', $this );
	}

	/**
	 * Fonts_Manager constructor.
	 */
	public function __construct() {
		$this->actions();
		$this->add_font_type( 'custom', new Fonts\Custom_Fonts() );
		$this->add_font_type( 'typekit', new Fonts\Typekit_Fonts() );
	}
}
