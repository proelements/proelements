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
use ElementorPro\Core\Utils as ProUtils;
use Elementor\Core\Documents_Manager;
use Elementor\Settings;
use Elementor\Core\Common\Modules\Ajax\Module as Ajax;
use ElementorPro\Modules\Woocommerce\Classes\Products_Renderer;
use Elementor\Icons_Manager;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Module extends Module_Base {

	const WOOCOMMERCE_GROUP = 'woocommerce';
	const TEMPLATE_MINI_CART = 'cart/mini-cart.php';
	const OPTION_NAME_USE_MINI_CART = 'use_mini_cart_template';
	const MENU_CART_FRAGMENTS_ACTION = 'elementor-menu-cart-fragments';

	protected $docs_types = [];
	protected $use_mini_cart_template;
	protected $woocommerce_notices_elements = [];

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

			'Purchase_Summary',
			'Checkout',
			'Cart',
			'My_Account',
			'Notices',
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
			'Product_Content',
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
			$tag = 'ElementorPro\\Modules\\Woocommerce\\tags\\' . $tag;

			$module->register( new $tag() );
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

	public static function render_menu_cart_toggle_button( $settings ) {
		if ( null === WC()->cart ) {
			return;
		}
		$product_count = WC()->cart->get_cart_contents_count();
		$sub_total = WC()->cart->get_cart_subtotal();
		$counter_attr = 'data-counter="' . $product_count . '"';
		$icon = ! empty( $settings['icon'] ) ? $settings['icon'] : 'cart-medium';
		?>
		<div class="elementor-menu-cart__toggle elementor-button-wrapper">
			<a id="elementor-menu-cart__toggle_button" href="#" class="elementor-menu-cart__toggle_button elementor-button elementor-size-sm" aria-expanded="false">
				<span class="elementor-button-text"><?php echo $sub_total; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></span>
				<span class="elementor-button-icon" <?php echo $counter_attr; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
					<?php
					Icons_Manager::render_icon( [
						'library' => 'eicons',
						'value' => 'eicon-' . $icon,
					] );
					?>
					<span class="elementor-screen-only"><?php esc_html_e( 'Cart', 'elementor-pro' ); ?></span>
				</span>
			</a>
		</div>
		<?php
	}

	/**
	 * Render Menu Cart
	 *
	 * The `widget_shopping_cart_content` div will be populated by woocommerce js.
	 *
	 * When in the editor we populate this on page load as we can't rely on the woocoommerce js to re-add the fragments
	 * each time a widget us re-rendered.
	 */
	public static function render_menu_cart( $settings ) {
		if ( null === WC()->cart ) {
			return;
		}

		$widget_cart_is_hidden = apply_filters( 'woocommerce_widget_cart_is_hidden', false );
		$is_edit_mode = Plugin::elementor()->editor->is_edit_mode();
		?>
		<div class="elementor-menu-cart__wrapper">
			<?php if ( ! $widget_cart_is_hidden ) : ?>
				<div class="elementor-menu-cart__toggle_wrapper">
					<div class="elementor-menu-cart__container elementor-lightbox" aria-hidden="true">
						<div class="elementor-menu-cart__main" aria-hidden="true">
							<div class="elementor-menu-cart__close-button"></div>
							<div class="widget_shopping_cart_content">
								<?php if ( $is_edit_mode ) {
									woocommerce_mini_cart();
								} ?>
							</div>
						</div>
					</div>
					<?php self::render_menu_cart_toggle_button( $settings ); ?>
				</div>
			<?php endif; ?>
		</div> <!-- close elementor-menu-cart__wrapper -->
		<?php
	}

	/**
	 * Menu cart fragments.
	 *
	 * Ajax action to create fragments for the menu carts in a page.
	 *
	 * @return void
	 */
	public function menu_cart_fragments() {
		$all_fragments = [];

		if (
			! isset( $_POST['_nonce'] )
			|| ! wp_verify_nonce( $_POST['_nonce'], self::MENU_CART_FRAGMENTS_ACTION )
			|| ! is_array( $_POST['templates'] )
		) {
			wp_send_json( [] );
		}

		if ( 'true' === $_POST['is_editor'] ) {
			Plugin::elementor()->editor->set_edit_mode( true );
		}

		foreach ( $_POST['templates'] as $id ) {
			$this->get_all_fragments( $id, $all_fragments );
		}

		wp_send_json( [ 'fragments' => $all_fragments ] );
	}

	/**
	 * Get All Fragments.
	 *
	 * @since 3.7.0
	 *
	 * @param $id
	 * @param $all_fragments
	 * @return void
	 */
	public function get_all_fragments( $id, &$all_fragments ) {
		$fragments_in_document = $this->get_fragments_in_document( $id );

		if ( $fragments_in_document ) {
			$all_fragments += $fragments_in_document;
		}
	}

	/**
	 * Get Fragments In Document.
	 *
	 * A general function that will return any needed fragments for a Post.
	 *
	 * @since 3.7.0
	 * @access public
	 *
	 * @param int $id
	 *
	 * @return mixed $fragments
	 */
	public function get_fragments_in_document( $id ) {
		$document = Plugin::elementor()->documents->get( $id );

		if ( ! is_object( $document ) ) {
			return false;
		}

		$fragments = [];

		$data = $document->get_elements_data();

		Plugin::elementor()->db->iterate_data(
			$data,
			$this->get_fragments_handler( $fragments )
		);

		return ! empty( $fragments ) ? $fragments : false;
	}

	/**
	 * Get Fragments Handler.
	 *
	 * @since 3.7.0
	 *
	 * @param array $fragments
	 * @return void
	 */
	public function get_fragments_handler( array &$fragments ) {
		return function ( $element ) use ( &$fragments ) {
			if ( ! isset( $element['widgetType'] ) ) {
				return;
			}

			$fragment_data = $this->get_fragment_data( $element );

			if ( ! empty( $fragment_data['html'] ) ) {
				$fragments[ $fragment_data['selector'] ] = $fragment_data['html'];
			}
		};
	}

	/**
	 * Empty Cart Fragments
	 *
	 * When the Cart is emptied, the selected 'Empty Cart Template' needs to be added as an item
	 * in the WooCommerce `$fragments` array, so that WC will push the custom Template content into the DOM.
	 * This is done to prevent the need for a page refresh after the cart is cleared.
	 *
	 * @since 3.7.0
	 *
	 * @param array $fragments
	 * @return array
	 */
	public function empty_cart_fragments( $fragments ) {
		// Only do this when the cart is empty.
		if ( WC()->cart->get_cart_contents_count() !== 0 ) {
			return $fragments;
		}

		$document = Plugin::elementor()->documents->get( url_to_postid( wp_get_referer() ) );

		if ( is_object( $document ) ) {
			$data = $document->get_elements_data();

			Plugin::elementor()->db->iterate_data( $data, function( $element ) use ( &$fragments ) {
				if (
					isset( $element['widgetType'] )
					&& 'woocommerce-cart' === $element['widgetType']
					&& ( isset( $element['settings']['additional_template_switch'] ) && 'active' === $element['settings']['additional_template_switch'] )
					&& ( isset( $element['settings']['additional_template_select'] ) && 0 < $element['settings']['additional_template_select'] )
				) {
					$fragments[ 'div.elementor-element-' . $element['id'] . ' .elementor-widget-container' ] = '<div class="elementor-widget-container">' . do_shortcode( '[elementor-template id="' . $element['settings']['additional_template_select'] . '"]' ) . '</div>';
				}
			} );
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
			$settings['woocommerce']['menu_cart'] = [
				'cart_page_url' => wc_get_cart_url(),
				'checkout_page_url' => wc_get_checkout_url(),
				'fragments_nonce' => wp_create_nonce( self::MENU_CART_FRAGMENTS_ACTION ),
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
	 * Add Query Arg to WC Ajax Endpoint.
	 *
	 * Adds the `elementor_page_id` query arg to the WooCommerce ajax endpoint, so we always know what page
	 * an ajax call is coming from - used to load widgets before loading some WC content by ajax.
	 * e.g. `?wc-ajax=%%endpoint%%&elementor_page_id=160`
	 *
	 * @since 3.6.0
	 *
	 * @param $url
	 * @return string
	 */
	public function add_query_arg_to_wc_ajax_endpoint( $url ) {
		$url_components = wp_parse_url( $url );
		parse_str( $url_components['query'], $url_query );
		$url_query['elementor_page_id'] = get_queried_object_id();
		return add_query_arg( $url_query, $url_components['path'] );
	}

	/**
	 * Load Widget Before WooCommerce Ajax.
	 *
	 * When outputting the complex WooCommerce shortcodes (which we use in our widgets) e.g. Checkout, Cart, etc. WC
	 * immediately does more ajax calls and retrieves updated html fragments based on the data in the forms that may
	 * be autofilled by the current user's browser e.g. the Payment section holding the "Place order" button.
	 *
	 * This function runs before these ajax calls. Using the `elementorPageId` and `elementorWidgetId` querystring
	 * appended to the forms `_wp_http_referer` url field, or the `elementor_page_id` querystring added to the
	 * wc-ajax endpoint, it loads the relevant Elementor widget. The rendered Elementor widget replaces the
	 * default WooCommerce template used to refresh WooCommerce elements in the page.
	 *
	 * This is necessary for example in the Checkout Payment section where we modify the Terms & Conditions text
	 * using settings from the widget or when updating shipping methods on the Cart.
	 *
	 * @since 3.5.0
	 */
	public function load_widget_before_wc_ajax() {
		// Make sure is a WooCommerce ajax call.
		if ( ! isset( $_GET['wc-ajax'] ) ) {
			return;
		}

		// Only handle relevant WC AJAX calls
		if ( ! in_array( $_GET['wc-ajax'], [ 'update_order_review', 'update_shipping_method' ], true ) ) {
			return;
		}

		// Security checks.
		switch ( $_GET['wc-ajax'] ) {
			case 'update_order_review':
				check_ajax_referer( 'update-order-review', 'security' );
				break;
			case 'update_shipping_method':
				check_ajax_referer( 'update-shipping-method', 'security' );
				break;
		}

		$page_id = false;
		$widget_id = false;

		// Try to get the `$page_id` and `$widget_id` we added as a query string to `_wp_http_referer` in `post_data`.
		// This is only available when a form is submitted.
		if ( isset( $_POST['post_data'] ) ) {
			parse_str( $_POST['post_data'], $post_data );

			if ( isset( $post_data['_wp_http_referer'] ) ) {
				$wp_http_referer = wp_unslash( $post_data['_wp_http_referer'] );

				$wp_http_referer_query_string = wp_parse_url( $wp_http_referer, PHP_URL_QUERY );
				parse_str( $wp_http_referer_query_string, $wp_http_referer_query_string );

				if ( isset( $wp_http_referer_query_string['elementorPageId'] ) ) {
					$page_id = $wp_http_referer_query_string['elementorPageId'];
				}

				if ( isset( $wp_http_referer_query_string['elementorWidgetId'] ) ) {
					$widget_id = $wp_http_referer_query_string['elementorWidgetId'];
				}
			}
		}

		// If the page ID is not found in the referrer query string, the page ID is fetched from the `elementor_page_id` query string we added to WooCommerce ajax endpoint.
		// e.g. `?wc-ajax=update_shipping_method&elementor_page_id=160`
		if ( ! $page_id ) {
			if ( isset( $_GET['elementor_page_id'] ) ) {
				$page_id = $_GET['elementor_page_id'];
			}
		}

		// Bail if no `$page_id`.
		if ( ! $page_id ) {
			return;
		}

		// Get Elementor document from `$page_id`.
		$document = Plugin::elementor()->documents->get_doc_for_frontend( $page_id );

		// Bail if not Elementor page.
		if ( ! $document ) {
			return;
		}

		// Setup `elementor_page_id` as the WP global $post, so is available to our widgets.
		$post = get_post( $page_id, OBJECT );
		setup_postdata( $post );

		$widget_data = false;
		if ( $widget_id ) {
			// If we did manage to pass `$widget_id` to this ajax call we get the widget data by its ID.
			$widget_data = Utils::find_element_recursive( $document->get_elements_data(), $widget_id );
		} else {
			// If we didn't manage to pass `$widget_id` to this ajax call we use this alternate method and get the first
			// of the type of widget used on the WC endpoint pages responsible for these ajax calls - cart or checkout widget.
			$woocommerce_widgets = [ 'woocommerce-cart', 'woocommerce-checkout-page' ];

			$document_data = $document->get_elements_data();
			Plugin::elementor()->db->iterate_data( $document_data, function( $element ) use ( $woocommerce_widgets, &$widget_data ) {
				if ( $widget_data && ( ! isset( $element['widgetType'] ) || ! in_array( $element['widgetType'], $woocommerce_widgets, true ) ) ) {
					return;
				}
				$widget_data = $element;
			} );
		}

		// If we found a widget then run `add_render_hooks()` widget method.
		if ( $widget_data ) {
			$widget_instance = Plugin::elementor()->elements_manager->create_element_instance( $widget_data );
			if ( method_exists( $widget_instance, 'add_render_hooks' ) ) {
				$widget_instance->add_render_hooks();
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
		$ajax->register_ajax_action( 'pro_woocommerce_mock_notices', [ $this, 'woocommerce_mock_notices' ] );
	}

	public function woocommerce_mock_notices( $data ) {
		if ( in_array( 'wc_error', $data['notice_elements'], true ) ) {
			/* translators: 1: Error notice text, 2: Error notice link. */
			$notice_message = sprintf(
				'%1$s <a href="#" class="wc-backward">%2$s</a>',
				esc_html__( 'Oops, this is how an error notice would look.', 'elementor-pro' ),
				esc_html__( 'Here\'s a link', 'elementor-pro' )
			);
			wc_add_notice( $notice_message, 'error' );
		}

		if ( in_array( 'wc_message', $data['notice_elements'], true ) ) {
			/* translators: 1: Message notice button, 2: Message notice text, 3: Message notice link. */
			$notice_message = sprintf(
				'<a href="#" tabindex="1" class="button wc-forward">%1$s</a> %2$s <a href="#" class="restore-item">%3$s</a>',
				esc_html__( 'Button', 'elementor-pro' ),
				esc_html__( 'This is what a WooCommerce message notice looks like.', 'elementor-pro' ),
				esc_html__( 'Here\'s a link', 'elementor-pro' )
			);
			wc_add_notice( $notice_message, 'success' );
		}

		if ( in_array( 'wc_info', $data['notice_elements'], true ) ) {
			/* translators: 1: Info notice button, 2: Info notice text. */
			$notice_message = sprintf(
				'<a href="#" tabindex="1" class="button wc-forward">%1$s</a> %2$s',
				esc_html__( 'Button', 'elementor-pro' ),
				esc_html__( 'This is how WooCommerce provides an info notice.', 'elementor-pro' )
			);
			wc_add_notice( $notice_message, 'notice' );
		}

		return '<div class="woocommerce-notices-wrapper">' . wc_print_notices( true ) . '</div>';
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
		$settings['woocommerce']['woocommercePages'] = [
			'checkout' => wc_get_page_id( 'checkout' ),
			'cart' => wc_get_page_id( 'cart' ),
			'myaccount' => wc_get_page_id( 'myaccount' ),
			'purchase_summary' => get_option( 'elementor_woocommerce_purchase_summary_page_id' ),
		];

		return $settings;
	}

	/**
	 * Localize Added To Cart On Product Single
	 *
	 * WooCommerce doesn't trigger `added_to_cart` event on its products single page which is required for us to
	 * automatically open our Menu Cart if the settings is chosen. We make the `productAddedToCart` setting
	 * available that we can use in the Menu Cart js to check if a product has just been added.
	 *
	 * @since 3.5.0
	 */
	public function localize_added_to_cart_on_product_single() {
		add_filter( 'elementor_pro/frontend/localize_settings', function ( $settings ) {
			$settings['woocommerce']['productAddedToCart'] = true;
			return $settings;
		} );
	}

	public function e_notices_body_classes( $classes ) {
		if ( $this->should_load_wc_notices_styles() ) {
			foreach ( $this->woocommerce_notices_elements as $notice_element ) {
				$classes[] = 'e-' . str_replace( '_', '-', $notice_element ) . '-notice';
			}
		}

		return $classes;
	}

	public function e_notices_css( $classes ) {
		if ( $this->should_load_wc_notices_styles() ) {
			wp_enqueue_style(
				'e-woocommerce-notices',
				ELEMENTOR_PRO_URL . 'assets/css/woocommerce-notices.min.css',
				[],
				ELEMENTOR_PRO_VERSION
			);
		}
	}

	public function get_order_received_endpoint_url( $url, $endpoint, $value ) {
		$order_received_endpoint = get_option( 'woocommerce_checkout_order_received_endpoint', 'order-received' );

		if ( $order_received_endpoint === $endpoint ) {
			$woocommerce_purchase_summary_page_id = get_option( 'elementor_woocommerce_purchase_summary_page_id' );
			$order = wc_get_order( $value );

			if ( $woocommerce_purchase_summary_page_id && $order ) {
				$url = trailingslashit( trailingslashit( trailingslashit( get_permalink( $woocommerce_purchase_summary_page_id ) ) . $order_received_endpoint ) . $order->get_id() );
			}
		}

		return $url;
	}

	public function maybe_define_woocommerce_checkout() {
		$woocommerce_purchase_summary_page_id = get_option( 'elementor_woocommerce_purchase_summary_page_id' );

		if ( $woocommerce_purchase_summary_page_id && intval( $woocommerce_purchase_summary_page_id ) === get_queried_object_id() ) {
			if ( ! defined( 'WOOCOMMERCE_CHECKOUT' ) ) {
				define( 'WOOCOMMERCE_CHECKOUT', true );
			}
		}
	}

	/**
	 * Products Query Sources Fragments.
	 *
	 * Since we introduced additional query sources to the Products Widget,
	 * some of these query sources can now be used outside of the Single Product template.
	 *
	 * For example the Related Products and Cross-Sells.
	 *
	 * But now we'll need to make those sections also update when the Cart is updated. So
	 * we'll do this by creating fragments for each of these.
	 *
	 * @since 3.7.0
	 *
	 * @param array $fragments
	 *
	 * @return array
	 */
	public function products_query_sources_fragments( $fragments ) {
		if ( WC()->cart->get_cart_contents_count() !== 0 ) {
			$document = Plugin::elementor()->documents->get( url_to_postid( wp_get_referer() ) );

			if ( is_object( $document ) ) {
				$data = $document->get_elements_data();

				Plugin::elementor()->db->iterate_data( $data, function( $element ) use ( &$fragments ) {
					if (
						isset( $element['widgetType'] )
						&& 'woocommerce-products' === $element['widgetType']
					) {
						$settings = $element['settings'];
						if ( isset( $settings[ Products_Renderer::QUERY_CONTROL_NAME . '_post_type' ] ) ) {
							$query_type = $settings[ Products_Renderer::QUERY_CONTROL_NAME . '_post_type' ];
							$query_types_to_check = [ 'related', 'upsells', 'cross_sells' ];

							if ( in_array( $query_type, $query_types_to_check, true ) ) {
								switch ( $query_type ) {
									case 'related':
										$content = self::get_products_related_content( $settings );
										break;
									case 'upsells':
										$content = self::get_upsells_content( $settings );
										break;
									case 'cross_sells':
										$content = self::get_cross_sells_content( $settings );
										break;
									default:
										$content = null;
								}

								if ( $content ) {
									$fragments[ 'div.elementor-element-' . $element['id'] . ' div.elementor-widget-container' ] = '<div class="elementor-widget-container">' . $content . '</div>';
								}
							}
						}
					}
				} );
			}
		} else {
			$fragments['div.elementor-widget-container .woocommerce .cross-sells'] = '<div class="cross-sells"></div>';

			$fragments['div.elementor-widget-container .woocommerce section.up-sells'] = '<section class="up-sells upsells products"></section>';
		}

		return $fragments;
	}

	/**
	 * Get Products Related Content.
	 *
	 * A function to return content for the 'related' products query type in the Products widget.
	 * This function is declared in the Module file so it can be accessed during a WC fragment refresh
	 * and also be used in the Product widget's render method.
	 *
	 * @since 3.7.0
	 * @access public
	 *
	 * @param array $settings
	 *
	 * @return mixed The content or false
	 */
	public static function get_products_related_content( $settings ) {
		global $product;

		$product = wc_get_product();

		if ( ! $product ) {
			return;
		}

		return self::get_product_widget_content(
			$settings,
			'related',
			'woocommerce_product_related_products_heading',
			'products_related_title_text'
		);
	}

	/**
	 * Get Upsells Content.
	 *
	 * A function to return content for the 'upsell' query type in the Products widget.
	 * This function is declared in the Module file so it can be accessed during a WC fragment refresh
	 * and also be used in the Product widget's render method.
	 *
	 * @since 3.7.0
	 * @access public
	 *
	 * @param array $settings
	 *
	 * @return mixed The content or false
	 */
	public static function get_upsells_content( $settings ) {
		return self::get_product_widget_content(
			$settings,
			'upsells',
			'woocommerce_product_upsells_products_heading',
			'products_upsells_title_text'
		);
	}

	/**
	 * Get Cross Sells Content.
	 *
	 * A function to return content for the 'cross_sells' query type in the Products widget.
	 * This function is declared in the Module file so it can be accessed during a WC fragment refresh
	 * and also be used in the Product widget's render method.
	 *
	 * @since 3.7.0
	 * @access public
	 *
	 * @param array $settings
	 *
	 * @return mixed The content or false
	 */
	public static function get_cross_sells_content( $settings ) {
		return self::get_product_widget_content(
			$settings,
			'cross_sells',
			'woocommerce_product_cross_sells_products_heading',
			'products_cross_sells_title_text'
		);
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
	 * Should load WC Notices Styles
	 *
	 * Determine if we should load the WooCommerce notices CSS.
	 * It should only load:
	 * - When we are in the Editor, regardless if any notices have been activated.
	 * - If WooCoomerce is active.
	 * - When we are on the front end, if at least one notice is activated.
	 *
	 * It should not load in WP Admin.
	 *
	 * @return boolean
	 */
	private function should_load_wc_notices_styles() {
		$woocommerce_active = in_array( 'woocommerce/woocommerce.php', apply_filters( 'active_plugins', get_option( 'active_plugins' ) ) );
		$is_editor = ! empty( $_GET['elementor-preview'] );

		// Editor checks.
		if ( $woocommerce_active && $is_editor ) {
			return true;
		}

		$kit = Plugin::elementor()->kits_manager->get_active_kit_for_frontend();
		$this->woocommerce_notices_elements = is_array( $kit->get_settings_for_display( 'woocommerce_notices_elements' ) ) ? $kit->get_settings_for_display( 'woocommerce_notices_elements' ) : [];

		// Front end checks.
		if (
			0 < count( $this->woocommerce_notices_elements ) // At least one notice has been activated.
			&& $woocommerce_active // WooCommerce is active.
			&& ( ! is_admin() || $is_editor ) // We are not in WP Admin.
		) {
			return true;
		}

		return false;
	}

	/**
	 * Get Product Widget Content.
	 *
	 * A general function to create markup for the new query types in the Products widget.
	 *
	 * @since 3.7.0
	 * @access private
	 *
	 * @param array $settings The widget settings.
	 * @param string $type The query type to create content for.
	 * @param string $title_hook The hook name to filter in the widget title.
	 * @param string $title_key The control ID for the section title.
	 *
	 * @return mixed The content or false
	 */
	private static function get_product_widget_content( $settings, $type, $title_hook, $title_key = '' ) {
		add_filter( $title_hook, function ( $heading ) use ( $settings, $title_key ) {
			$title_text = isset( $settings[ $title_key ] ) ? $settings[ $title_key ] : '';

			if ( ! empty( $title_text ) ) {
				return $title_text;
			}

			return $heading;
		}, 10, 1 );

		ob_start();

		$args = self::parse_product_widget_args( $settings, $type );

		if ( 'related' === $type ) {
			woocommerce_related_products( $args );
		} elseif ( 'upsells' === $type ) {
			woocommerce_upsell_display( $args['limit'], $args['columns'], $args['orderby'], $args['order'] );
		} else {
			/**
			 * We need to wrap this content in the 'woocommerce' class for the layout to have the correct styling.
			 * Because this will only be used as a separate widget on the Cart page,
			 * the normal 'woocommerce' div from the cart widget will be closed before this content.
			 */
			echo '<div class="woocommerce">';
				woocommerce_cross_sell_display( $args['limit'], $args['columns'], $args['orderby'], $args['order'] );
			echo '</div>';
		}

		$products_html = ob_get_clean();

		remove_filter( $title_hook, function(){}, 10 );

		if ( $products_html ) {
			$products_html = str_replace( '<ul class="products', '<ul class="products elementor-grid', $products_html );

			return wp_kses_post( $products_html );
		}

		return false;
	}

	/**
	 * Parse Product Widget Args.
	 *
	 * A general function to construct an arguments array for the new query types in the
	 * Products widget according to the widget's settings.
	 * These arguments will later be passed to the WooCommerce template functions.
	 *
	 * @since 3.7.0
	 * @access private
	 *
	 * @param array $settings The widget settings.
	 * @param string $type The query type to create arguments for.
	 *
	 * @return array $args
	 */
	private static function parse_product_widget_args( $settings, $type = 'related' ) {
		$limit_key = 'related' === $type ? 'posts_per_page' : 'limit';

		$args = [
			$limit_key => '-1',
			'columns' => ! empty( $settings['columns'] ) ? $settings['columns'] : 4,
			'orderby' => ! empty( $settings['orderby'] ) ? $settings['orderby'] : 'rand',
			'order' => ! empty( $settings['order'] ) ? $settings['order'] : 'desc',
		];

		if ( ! empty( $settings['rows'] ) ) {
			$args[ $limit_key ] = $args['columns'] * $settings['rows'];
		}

		return $args;
	}

	/**
	 * Get Fragment Data.
	 *
	 * A function that will return the selector and HTML for WC fragments.
	 *
	 * @since 3.7.0
	 * @access private
	 *
	 * @param array $element
	 *
	 * @return array $fragment_data
	 */
	private function get_fragment_data( $element ) {
		$fragment_data = [];

		if ( 'woocommerce-menu-cart' === $element['widgetType'] ) {
			ob_start();
			self::render_menu_cart_toggle_button( $element['settings'] );
			$fragment_data['html'] = ob_get_clean();

			$fragment_data['selector'] = 'div.elementor-element-' . $element['id'] . ' div.elementor-menu-cart__toggle';
		}

		return $fragment_data;
	}

	/**
	 * Is Preview
	 *
	 * Helper to check if we are doing either:
	 * - Viewing the WP Preview page - also used as the Elementor preview page when clicking "Preview Changes" in the editor
	 * - Viewing the page in the editor, but not the active page being edited e.g. if you click Edit Header while editing a page
	 *
	 * @since 3.7.0
	 *
	 * @return bool
	 */
	public static function is_preview() {
		return Plugin::elementor()->preview->is_preview_mode() || is_preview();
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
		add_action( 'elementor/dynamic_tags/register', [ $this, 'register_tags' ] );
		add_action( 'elementor/documents/register', [ $this, 'register_documents' ] );
		add_action( 'elementor/theme/register_conditions', [ $this, 'register_conditions' ] );

		add_action( 'wp_ajax_elementor_woocommerce_checkout_login_user', [ $this, 'elementor_woocommerce_checkout_login_user' ] );
		add_action( 'wp_ajax_nopriv_elementor_woocommerce_checkout_login_user', [ $this, 'elementor_woocommerce_checkout_login_user' ] );

		add_action( 'wp_ajax_elementor_menu_cart_fragments', [ $this, 'menu_cart_fragments' ] );
		add_action( 'wp_ajax_nopriv_elementor_menu_cart_fragments', [ $this, 'menu_cart_fragments' ] );

		add_filter( 'elementor/theme/need_override_location', [ $this, 'theme_template_include' ], 10, 2 );

		add_filter( 'elementor_pro/frontend/localize_settings', [ $this, 'localized_settings_frontend' ] );

		// Add `elementor_page_id` query arg to WC Ajax Endpoint.
		add_filter( 'woocommerce_ajax_get_endpoint', [ $this, 'add_query_arg_to_wc_ajax_endpoint' ] );

		// Load our widget Before WooCommerce Ajax. See the variable's PHPDoc for details.
		add_action( 'woocommerce_checkout_update_order_review', [ $this, 'load_widget_before_wc_ajax' ] );
		add_action( 'woocommerce_before_calculate_totals', [ $this, 'load_widget_before_wc_ajax' ] );

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
			add_filter( 'woocommerce_locate_template', [ $this, 'woocommerce_locate_template' ], 10, 3 );
		}

		if ( ! empty( $_REQUEST['wc-ajax'] ) && 'get_refreshed_fragments' === $_REQUEST['wc-ajax'] ) {
			add_action( 'woocommerce_add_to_cart_fragments', [ $this, 'products_query_sources_fragments' ] );
			// Render the Empty Cart Template on WC fragment refresh
			add_action( 'woocommerce_add_to_cart_fragments', [ $this, 'empty_cart_fragments' ] );
		}

		add_filter( 'elementor/widgets/wordpress/widget_args', [ $this, 'woocommerce_wordpress_widget_css_class' ], 10, 2 );

		add_action( 'elementor/ajax/register_actions', [ $this, 'register_ajax_actions' ] );

		// Make the Logout redirect go to our my account widget page instead of the set My Account Page.
		add_action( 'init', [ $this, 'elementor_wc_my_account_logout' ], 5 );

		add_filter( 'elementor_pro/editor/localize_settings', [ $this, 'add_localize_data' ] );

		add_action( 'wp', [ $this, 'maybe_define_woocommerce_checkout' ] );

		add_filter( 'woocommerce_get_endpoint_url', [ $this, 'get_order_received_endpoint_url' ], 10, 3 );

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

		add_action( 'woocommerce_add_to_cart', [ $this, 'localize_added_to_cart_on_product_single' ] );

		// WooCommerce Notice Site Settings
		add_filter( 'body_class', [ $this, 'e_notices_body_classes' ] );
		add_filter( 'wp_enqueue_scripts', [ $this, 'e_notices_css' ] );
	}
}
