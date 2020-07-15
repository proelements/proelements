<?php
namespace ElementorPro\Modules\Woocommerce;

use Elementor\Core\Documents_Manager;
use Elementor\Settings;
use ElementorPro\Base\Module_Base;
use ElementorPro\Modules\ThemeBuilder\Classes\Conditions_Manager;
use ElementorPro\Modules\Woocommerce\Conditions\Woocommerce;
use ElementorPro\Modules\Woocommerce\Documents\Product;
use ElementorPro\Modules\Woocommerce\Documents\Product_Post;
use ElementorPro\Modules\Woocommerce\Documents\Product_Archive;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Module extends Module_Base {

	const WOOCOMMERCE_GROUP = 'woocommerce';
	const TEMPLATE_MINI_CART = 'cart/mini-cart.php';
	const OPTION_NAME_USE_MINI_CART = 'use_mini_cart_template';

	protected $docs_types = [];
	protected $use_mini_cart_template;

	public static function is_active() {
		return class_exists( 'woocommerce' );
	}

	public static function is_product_search() {
		return is_search() && 'product' === get_query_var( 'post_type' );
	}

	public function get_name() {
		return 'woocommerce';
	}

	public function get_widgets() {
		return [
			'Archive_Products',
			'Archive_Products_Deprecated',
			'Archive_Description',
			'Products',
			'Products_Deprecated',

			'Breadcrumb',
			'Add_To_Cart',
			'Elements',
			'Single_Elements',
			'Categories',
			'Menu_Cart',

			'Product_Title',
			'Product_Images',
			'Product_Price',
			'Product_Add_To_Cart',
			'Product_Rating',
			'Product_Stock',
			'Product_Meta',
			'Product_Short_Description',
			'Product_Content',
			'Product_Data_Tabs',
			'Product_Additional_Information',
			'Product_Related',
			'Product_Upsell',
		];
	}

	public function add_product_post_class( $classes ) {
		$classes[] = 'product';

		return $classes;
	}

	public function add_products_post_class_filter() {
		add_filter( 'post_class', [ $this, 'add_product_post_class' ] );
	}

	public function remove_products_post_class_filter() {
		remove_filter( 'post_class', [ $this, 'add_product_post_class' ] );
	}

	public function register_tags() {
		$tags = [
			'Product_Gallery',
			'Product_Image',
			'Product_Price',
			'Product_Rating',
			'Product_Sale',
			'Product_Short_Description',
			'Product_SKU',
			'Product_Stock',
			'Product_Terms',
			'Product_Title',
			'Category_Image',
		];

		/** @var \Elementor\Core\DynamicTags\Manager $module */
		$module = Plugin::elementor()->dynamic_tags;

		$module->register_group( self::WOOCOMMERCE_GROUP, [
			'title' => __( 'WooCommerce', 'elementor-pro' ),
		] );

		foreach ( $tags as $tag ) {
			$module->register_tag( 'ElementorPro\\Modules\\Woocommerce\\tags\\' . $tag );
		}
	}

	public function register_wc_hooks() {
		wc()->frontend_includes();
	}

	/**
	 * @param Conditions_Manager $conditions_manager
	 */
	public function register_conditions( $conditions_manager ) {
		$woocommerce_condition = new Woocommerce();

		$conditions_manager->get_condition( 'general' )->register_sub_condition( $woocommerce_condition );
	}

	/**
	 * @param Documents_Manager $documents_manager
	 */
	public function register_documents( $documents_manager ) {
		$this->docs_types = [
			'product-post' => Product_Post::get_class_full_name(),
			'product' => Product::get_class_full_name(),
			'product-archive' => Product_Archive::get_class_full_name(),
		];

		foreach ( $this->docs_types as $type => $class_name ) {
			$documents_manager->register_document_type( $type, $class_name );
		}
	}

	public static function render_menu_cart_toggle_button() {
		if ( null === WC()->cart ) {
			return;
		}
		$product_count = WC()->cart->get_cart_contents_count();
		$sub_total = WC()->cart->get_cart_subtotal();
		$counter_attr = 'data-counter="' . $product_count . '"';

		?>
		<div class="elementor-menu-cart__toggle elementor-button-wrapper">
			<a id="elementor-menu-cart__toggle_button" href="#" class="elementor-button elementor-size-sm">
				<span class="elementor-button-text"><?php echo $sub_total; ?></span>
				<span class="elementor-button-icon" <?php echo $counter_attr; ?>>
					<i class="eicon" aria-hidden="true"></i>
					<span class="elementor-screen-only"><?php esc_html_e( 'Cart', 'elementor-pro' ); ?></span>
				</span>
			</a>
		</div>

		<?php
	}

	/**
	 * Render menu cart markup.
	 * The `widget_shopping_cart_content` div will be populated by woocommerce js.
	 */
	public static function render_menu_cart() {
		if ( null === WC()->cart ) {
			return;
		}

		$widget_cart_is_hidden = apply_filters( 'woocommerce_widget_cart_is_hidden', false );
		?>
		<div class="elementor-menu-cart__wrapper">
			<?php if ( ! $widget_cart_is_hidden ) : ?>
			<div class="elementor-menu-cart__container elementor-lightbox" aria-expanded="false">
				<div class="elementor-menu-cart__main" aria-expanded="false">
					<div class="elementor-menu-cart__close-button"></div>
					<div class="widget_shopping_cart_content"></div>
				</div>
			</div>
				<?php self::render_menu_cart_toggle_button(); ?>
			<?php endif; ?>
			</div> <!-- close elementor-menu-cart__wrapper -->
		<?php
	}

	/**
	 * Refresh the Menu Cart button and items counter.
	 * The mini-cart itself will be rendered by WC functions.
	 *
	 * @param $fragments
	 *
	 * @return array
	 */
	public function menu_cart_fragments( $fragments ) {
		$has_cart = is_a( WC()->cart, 'WC_Cart' );
		if ( ! $has_cart || ! $this->use_mini_cart_template ) {
			return $fragments;
		}

		ob_start();
		self::render_menu_cart_toggle_button();
		$menu_cart_toggle_button_html = ob_get_clean();

		if ( ! empty( $menu_cart_toggle_button_html ) ) {
			$fragments['body:not(.elementor-editor-active) div.elementor-element.elementor-widget.elementor-widget-woocommerce-menu-cart div.elementor-menu-cart__toggle.elementor-button-wrapper'] = $menu_cart_toggle_button_html;
		}

		return $fragments;
	}

	public function maybe_init_cart() {
		$has_cart = is_a( WC()->cart, 'WC_Cart' );

		if ( ! $has_cart ) {
			$session_class = apply_filters( 'woocommerce_session_handler', 'WC_Session_Handler' );
			WC()->session = new $session_class();
			WC()->session->init();
			WC()->cart = new \WC_Cart();
			WC()->customer = new \WC_Customer( get_current_user_id(), true );
		}
	}

	public function localized_settings_frontend( $settings ) {
		$has_cart = is_a( WC()->cart, 'WC_Cart' );

		if ( $has_cart ) {
			$settings['menu_cart'] = [
				'cart_page_url' => wc_get_cart_url(),
				'checkout_page_url' => wc_get_checkout_url(),
			];
		}
		return $settings;
	}

	public function theme_template_include( $need_override_location, $location ) {
		if ( is_product() && 'single' === $location ) {
			$need_override_location = true;
		}

		return $need_override_location;
	}

	/**
	 * Add plugin path to wc template search path.
	 * Based on: https://www.skyverge.com/blog/override-woocommerce-template-file-within-a-plugin/
	 * @param $template
	 * @param $template_name
	 * @param $template_path
	 *
	 * @return string
	 */
	public function woocommerce_locate_template( $template, $template_name, $template_path ) {

		if ( self::TEMPLATE_MINI_CART !== $template_name ) {
			return $template;
		}

		if ( ! $this->use_mini_cart_template ) {
			return $template;
		}

		$plugin_path = plugin_dir_path( __DIR__ ) . 'woocommerce/wc-templates/';

		if ( file_exists( $plugin_path . $template_name ) ) {
			$template = $plugin_path . $template_name;
		}

		return $template;
	}

	/**
	 * WooCommerce/WordPress widget(s), some of the widgets have css classes that used by final selectors.
	 * before this filter, all those widgets were warped by `.elementor-widget-container` without chain original widget
	 * classes, now they will be warped by div with the original css classes.
	 *
	 * @param array $default_widget_args
	 * @param \Elementor\Widget_WordPress $widget
	 *
	 * @return array $default_widget_args
	 */
	public function woocommerce_wordpress_widget_css_class( $default_widget_args, $widget ) {
		$widget_instance = $widget->get_widget_instance();

		if ( ! empty( $widget_instance->widget_cssclass ) ) {
			$default_widget_args['before_widget'] .= '<div class="' . $widget_instance->widget_cssclass . '">';
			$default_widget_args['after_widget'] .= '</div>';
		}

		return $default_widget_args;
	}

	public function register_admin_fields( Settings $settings ) {
		$settings->add_section( Settings::TAB_INTEGRATIONS, 'woocommerce', [
			'callback' => function() {
				echo '<hr><h2>' . esc_html__( 'WooCommerce', 'elementor-pro' ) . '</h2>';
			},
			'fields' => [
				self::OPTION_NAME_USE_MINI_CART => [
					'label' => __( 'Mini Cart Template', 'elementor-pro' ),
					'field_args' => [
						'type' => 'select',
						'std' => 'initial',
						'options' => [
							'initial' => '', // Relevant until either menu-cart widget is used or option is explicitly set to 'no'.
							'no' => __( 'Disable', 'elementor-pro' ),
							'yes' => __( 'Enable', 'elementor-pro' ),
						],
						'desc' => __( 'Set to `Disable` in order to use your Theme\'s or WooCommerce\'s mini-cart template instead of Elementor\'s.', 'elementor-pro' ),
					],
				],
			],
		] );
	}

	public function __construct() {
		parent::__construct();

		$this->use_mini_cart_template = 'yes' === get_option( 'elementor_' . self::OPTION_NAME_USE_MINI_CART, 'no' );

		if ( is_admin() ) {
			add_action( 'elementor/admin/after_create_settings/' . Settings::PAGE_ID, [ $this, 'register_admin_fields' ], 15 );
		}

		add_action( 'elementor/editor/before_enqueue_scripts', [ $this, 'maybe_init_cart' ] );
		add_action( 'elementor/dynamic_tags/register_tags', [ $this, 'register_tags' ] );
		add_action( 'elementor/documents/register', [ $this, 'register_documents' ] );
		add_action( 'elementor/theme/register_conditions', [ $this, 'register_conditions' ] );

		add_filter( 'elementor/theme/need_override_location', [ $this, 'theme_template_include' ], 10, 2 );

		add_filter( 'elementor_pro/frontend/localize_settings', [ $this, 'localized_settings_frontend' ] );

		// On Editor - Register WooCommerce frontend hooks before the Editor init.
		// Priority = 5, in order to allow plugins remove/add their wc hooks on init.
		if ( ! empty( $_REQUEST['action'] ) && 'elementor' === $_REQUEST['action'] && is_admin() ) {
			add_action( 'init', [ $this, 'register_wc_hooks' ], 5 );
		}

		if ( $this->use_mini_cart_template ) {
			add_filter( 'woocommerce_add_to_cart_fragments', [ $this, 'menu_cart_fragments' ] );
			add_filter( 'woocommerce_locate_template', [ $this, 'woocommerce_locate_template' ], 10, 3 );
		}

		add_filter( 'elementor/widgets/wordpress/widget_args', [ $this, 'woocommerce_wordpress_widget_css_class' ], 10, 2 );
	}
}
