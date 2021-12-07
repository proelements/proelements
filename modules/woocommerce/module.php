<?php
namespace ElementorPro\Modules\Woocommerce;

use ElementorPro\Plugin;
use ElementorPro\Base\Module_Base;
use ElementorPro\Modules\ThemeBuilder\Classes\Conditions_Manager;
use ElementorPro\Modules\Woocommerce\Conditions\Woocommerce;
use ElementorPro\Modules\Woocommerce\Documents\Product;
use ElementorPro\Modules\Woocommerce\Documents\Product_Post;
use ElementorPro\Modules\Woocommerce\Documents\Product_Archive;
use Elementor\Utils;
use Elementor\Core\Documents_Manager;
use Elementor\Settings;
use Elementor\Core\Common\Modules\Ajax\Module as Ajax;

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

			'Checkout',
			'Cart',
			'My_Account',
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
			'title' => esc_html__( 'WooCommerce', 'elementor-pro' ),
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
			<a id="elementor-menu-cart__toggle_button" href="#" class="elementor-menu-cart__toggle_button elementor-button elementor-size-sm" aria-expanded="false">
				<span class="elementor-button-text"><?php echo $sub_total; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></span>
				<span class="elementor-button-icon" <?php echo $counter_attr; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
					<i class="eicon"></i>
					<span class="elementor-screen-only"><?php esc_html_e( 'Cart', 'elementor-pro' ); ?></span>
				</span>
			</a>
		</div>
		<?php
	}

	/**
	 * Render menu cart.
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
				<div class="elementor-menu-cart__toggle_wrapper">
					<div class="elementor-menu-cart__container elementor-lightbox" aria-hidden="true">
						<div class="elementor-menu-cart__main" aria-hidden="true">
							<div class="elementor-menu-cart__close-button"></div>
							<div class="widget_shopping_cart_content">
								<?php woocommerce_mini_cart(); ?>
							</div>
						</div>
					</div>
					<?php self::render_menu_cart_toggle_button(); ?>
				</div>
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
			$fragments['body div.elementor-widget.elementor-widget-woocommerce-menu-cart div.elementor-menu-cart__toggle'] = $menu_cart_toggle_button_html;
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
					'label' => esc_html__( 'Mini Cart Template', 'elementor-pro' ),
					'field_args' => [
						'type' => 'select',
						'std' => 'initial',
						'options' => [
							'initial' => '', // Relevant until either menu-cart widget is used or option is explicitly set to 'no'.
							'no' => esc_html__( 'Disable', 'elementor-pro' ),
							'yes' => esc_html__( 'Enable', 'elementor-pro' ),
						],
						'desc' => esc_html__( 'Set to `Disable` in order to use your Theme\'s or WooCommerce\'s mini-cart template instead of Elementor\'s.', 'elementor-pro' ),
					],
				],
			],
		] );
	}

	/**
	 * Load Widget Before WooCommerce Ajax.
	 *
	 * When outputting the complex WooCommerce shortcodes (which we use in our widgets) e.g. Checkout, Cart, etc. WC
	 * immediately does more ajax calls and retrieves updated html fragments based on the data in the forms that may
	 * be autofilled by the current user's browser e.g. the Payment section holding the "Place order" button.
	 *
	 * This function can be hooked before any of these ajax calls and will look for the `elementorPostId` and
	 * `elementorWidgetId` querysring we've appended to the forms `_wp_http_referer` url field and load the related
	 * Elementor Widget before it starts to compile the html to be returned and added to the page.
	 *
	 * This is necessary for example in the Checkout Payment section where we modify the Terms & Conditions text
	 * using settings from the widget.
	 *
	 * @since 3.5.0
	 */
	public function load_widget_before_wc_ajax() {
		check_ajax_referer( 'update-order-review', 'security' );

		$post_id = false;
		$element_id = false;

		if ( isset( $_POST['post_data'] ) ) {
			parse_str( $_POST['post_data'], $post_data );

			if ( isset( $post_data['_wp_http_referer'] ) ) {
				$wp_http_referer = wp_unslash( $post_data['_wp_http_referer'] );

				$wp_http_referer_query_string = wp_parse_url( $wp_http_referer, PHP_URL_QUERY );
				parse_str( $wp_http_referer_query_string, $wp_http_referer_query_string );

				if ( isset( $wp_http_referer_query_string['elementorPostId'] ) ) {
					$post_id = $wp_http_referer_query_string['elementorPostId'];
				}

				if ( isset( $wp_http_referer_query_string['elementorWidgetId'] ) ) {
					$element_id = $wp_http_referer_query_string['elementorWidgetId'];
				}
			}
		}

		if ( ! $post_id || ! $element_id ) {
			return;
		}

		$document = Plugin::elementor()->documents->get( $post_id );

		if ( $document ) {
			$widget = Utils::find_element_recursive( $document->get_elements_data(), $element_id );

			if ( $widget ) {
				$widget = Plugin::elementor()->elements_manager->create_element_instance( $widget );
				$widget->get_raw_data( false );
				if ( method_exists( $widget, 'add_render_hooks' ) ) {
					$widget->add_render_hooks();
				}
			}
		}
	}

	/**
	 * Elementor Woocommerce Checkout Login User
	 *
	 * Handle the Ajax call for the custom login form on the Checkout Widget
	 *
	 * @since 3.5.0
	 */
	public function elementor_woocommerce_checkout_login_user() {
		if ( is_user_logged_in() ) {
			wp_logout();
		}

		$error = false;
		$error_message = '';

		if ( ! wp_verify_nonce( $_POST['nonce'], 'woocommerce-login' ) ) {
			$error = true;
			/* translators: %s: Error. */
			$error_message = sprintf( esc_html__( '%s Sorry, the nonce security check didn’t pass. Please reload the page and try again. You may want to try clearing your browser cache as a last attempt.', 'elementor-pro' ), '<strong>Error:</strong>' );
		} else {
			$info = [
				'user_login' => trim( $_POST['username'] ),
				'user_password' => trim( $_POST['password'] ),
				'remember' => $_POST['remember'],
			];

			$user_signon = wp_signon( $info, false );

			if ( is_wp_error( $user_signon ) ) {
				$error = true;
				$error_message = $user_signon->get_error_message();
			}
		}

		if ( $error ) {
			wc_add_notice(
				$error_message,
				'error'
			);
			$response = [
				'logged_in' => false,
				'message' => wc_print_notices( true ),
			];
		} else {
			$response = [ 'logged_in' => true ];
		}

		echo wp_json_encode( $response );
		wp_die();
	}

	/**
	 * Print Woocommerce Shipping Message
	 *
	 * Format the shipping messages that will be displayed on the Cart and Checkout Widgets.
	 * This will add extra classes to those messages so that we can target certain messages
	 * with certain style controls.
	 *
	 * @since 3.5.0
	 *
	 * @param string $html the original HTML from WC
	 * @param string $classes the classes we will surround $html with
	 * @return string the final formatted HTML that will be rendered
	 */
	private function print_woocommerce_shipping_message( $html, $classes ) {
		return '<span class="' . wp_sprintf( '%s', $classes ) . '">' . $html . '</span>';
	}

	/**
	 * Register Ajax Actions.
	 *
	 * Registers ajax action used by the Editor js.
	 *
	 * @since 3.5.0
	 *
	 * @param Ajax $ajax
	 */
	public function register_ajax_actions( Ajax $ajax ) {
		// `woocommerce_update_page_option` is called in the editor save-show-modal.js.
		$ajax->register_ajax_action( 'pro_woocommerce_update_page_option', [ $this, 'update_page_option' ] );
	}

	/**
	 * Update Page Option.
	 *
	 * Ajax action can be used to update any WooCommerce option.
	 *
	 * @since 3.5.0
	 *
	 * @param array $data
	 */
	public function update_page_option( $data ) {
		update_option( $data['option_name'], $data['editor_post_id'] );
	}

	public function init_site_settings( \Elementor\Core\Kits\Documents\Kit $kit ) {
		$kit->register_tab( 'settings-woocommerce', \ElementorPro\Modules\Woocommerce\Settings\Settings_Woocommerce::class );
	}

	/**
	 * Add Update Kit Settings Hooks
	 *
	 * Add hooks that update the corresponding kit setting when the WooCommerce option is updated.
	 */
	public function add_update_kit_settings_hooks() {
		add_action( 'update_option_woocommerce_cart_page_id', function( $old_value, $value ) {
			Plugin::elementor()->kits_manager->update_kit_settings_based_on_option( 'woocommerce_cart_page_id', $value );
		}, 10, 2 );

		add_action( 'update_option_woocommerce_checkout_page_id', function( $old_value, $value ) {
			Plugin::elementor()->kits_manager->update_kit_settings_based_on_option( 'woocommerce_checkout_page_id', $value );
		}, 10, 2 );

		add_action( 'update_option_woocommerce_myaccount_page_id', function( $old_value, $value ) {
			Plugin::elementor()->kits_manager->update_kit_settings_based_on_option( 'woocommerce_myaccount_page_id', $value );
		}, 10, 2 );

		add_action( 'update_option_woocommerce_terms_page_id', function( $old_value, $value ) {
			Plugin::elementor()->kits_manager->update_kit_settings_based_on_option( 'woocommerce_terms_page_id', $value );
		}, 10, 2 );
	}

	/**
	 * Elementor WC My Account Logout
	 *
	 * Programatically log out if $_REQUEST['elementor_wc_logout'] is set.
	 * The $_REQUEST variables we have generated a custom logout URL for in the My Account menu.
	 *
	 * @since 3.5.0
	 */
	public function elementor_wc_my_account_logout() {
		if ( ! empty( $_REQUEST['elementor_wc_logout'] ) && ! empty( $_REQUEST['_wpnonce'] ) && wp_verify_nonce( sanitize_key( $_REQUEST['_wpnonce'] ), 'customer-logout' ) ) {
			wp_logout(); // Log the user out Programatically.
			wp_safe_redirect( esc_url( $_REQUEST['elementor_my_account_redirect'] ) ); // Redirect back to the widget page.
			exit;
		}
	}

	/**
	 * Add Localize Data
	 *
	 * Makes `woocommercePages` available with the page name and the associated post ID for use with the various
	 * widgets site settings modal.
	 *
	 * @param $settings
	 * @return array
	 */
	public function add_localize_data( $settings ) {
		$settings['woocommercePages'] = [
			'checkout' => wc_get_page_id( 'checkout' ),
			'cart' => wc_get_page_id( 'cart' ),
			'myaccount' => wc_get_page_id( 'myaccount' ),
		];

		return $settings;
	}

	public function __construct() {
		parent::__construct();

		add_action( 'elementor/kit/register_tabs', [ $this, 'init_site_settings' ], 1, 40 );
		$this->add_update_kit_settings_hooks();

		$this->use_mini_cart_template = 'yes' === get_option( 'elementor_' . self::OPTION_NAME_USE_MINI_CART, 'no' );

		if ( is_admin() ) {
			add_action( 'elementor/admin/after_create_settings/' . Settings::PAGE_ID, [ $this, 'register_admin_fields' ], 15 );
		}

		add_action( 'elementor/editor/before_enqueue_scripts', [ $this, 'maybe_init_cart' ] );
		add_action( 'elementor/dynamic_tags/register_tags', [ $this, 'register_tags' ] );
		add_action( 'elementor/documents/register', [ $this, 'register_documents' ] );
		add_action( 'elementor/theme/register_conditions', [ $this, 'register_conditions' ] );

		add_action( 'wp_ajax_elementor_woocommerce_checkout_login_user', [ $this, 'elementor_woocommerce_checkout_login_user' ] );
		add_action( 'wp_ajax_nopriv_elementor_woocommerce_checkout_login_user', [ $this, 'elementor_woocommerce_checkout_login_user' ] );

		add_filter( 'elementor/theme/need_override_location', [ $this, 'theme_template_include' ], 10, 2 );

		add_filter( 'elementor_pro/frontend/localize_settings', [ $this, 'localized_settings_frontend' ] );

		// Load our widget Before WooCommerce Ajax. See the variable's PHPDoc for details.
		add_action( 'woocommerce_checkout_update_order_review', [ $this, 'load_widget_before_wc_ajax' ] );

		// On Editor - Register WooCommerce frontend hooks before the Editor init.
		// Priority = 5, in order to allow plugins remove/add their wc hooks on init.
		if ( ! empty( $_REQUEST['action'] ) && 'elementor' === $_REQUEST['action'] && is_admin() ) {
			add_action( 'init', [ $this, 'register_wc_hooks' ], 5 );
		}

		// Allow viewing of Checkout page in the Editor with an empty cart.
		if (
			( ! empty( $_REQUEST['action'] ) && 'elementor' === $_REQUEST['action'] && is_admin() ) // Elementor Editor
			|| ! empty( $_REQUEST['elementor-preview'] ) // Elementor Editor Preview
			|| ( ! empty( $_REQUEST['action'] ) && 'elementor_ajax' === $_REQUEST['action'] ) // Elementor Editor Preview - Ajax Render Widget
		) {
			add_filter( 'woocommerce_checkout_redirect_empty_cart', '__return_false', 5 );
		}

		if ( $this->use_mini_cart_template ) {
			add_filter( 'woocommerce_add_to_cart_fragments', [ $this, 'menu_cart_fragments' ] );
			add_filter( 'woocommerce_locate_template', [ $this, 'woocommerce_locate_template' ], 10, 3 );
		}

		add_filter( 'elementor/widgets/wordpress/widget_args', [ $this, 'woocommerce_wordpress_widget_css_class' ], 10, 2 );

		add_action( 'elementor/ajax/register_actions', [ $this, 'register_ajax_actions' ] );

		// Make the Logout redirect go to our my account widget page instead of the set My Account Page.
		add_action( 'init', [ $this, 'elementor_wc_my_account_logout' ], 5 );

		add_filter( 'elementor_pro/editor/localize_settings', [ $this, 'add_localize_data' ] );

		// Filters for messages on the Shipping calculator
		add_filter( 'woocommerce_shipping_may_be_available_html', function ( $html ) {
			return $this->print_woocommerce_shipping_message( $html, 'woocommerce-shipping-may-be-available-html e-checkout-message e-cart-content' );
		}, 10, 1 );

		add_filter( 'woocommerce_shipping_not_enabled_on_cart_html', function ( $html ) {
			return $this->print_woocommerce_shipping_message( $html, 'woocommerce-shipping-not_enabled-on-cart-html e-checkout-message e-cart-content' );
		}, 10, 1 );

		add_filter( 'woocommerce_shipping_estimate_html', function ( $html ) {
			return $this->print_woocommerce_shipping_message( $html, 'woocommerce-shipping-estimate-html e-checkout-message e-cart-content' );
		}, 10, 1 );

		add_filter( 'woocommerce_cart_no_shipping_available_html', function ( $html ) {
			return $this->print_woocommerce_shipping_message( $html, 'woocommerce-cart-no-shipping-available-html e-checkout-message e-cart-content' );
		}, 10, 1 );

		add_filter( 'woocommerce_no_available_payment_methods_message', function ( $html ) {
			return $this->print_woocommerce_shipping_message( $html, 'woocommerce-no-available-payment-methods-message e-description' );
		}, 10, 1 );

		add_filter( 'woocommerce_no_shipping_available_html', function ( $html ) {
			return $this->print_woocommerce_shipping_message( $html, 'woocommerce-no-shipping-available-html e-checkout-message' );
		}, 10, 1 );
	}
}
