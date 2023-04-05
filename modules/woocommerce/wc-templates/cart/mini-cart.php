<?php

defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'elementor_pro_render_mini_cart_item' ) ) {
	function elementor_pro_render_mini_cart_item( $cart_item_key, $cart_item, $product_remove_class = 'elementor-menu-cart__product-remove', $icon = '' ) {
		$_product = apply_filters( 'woocommerce_cart_item_product', $cart_item['data'], $cart_item, $cart_item_key );
		$is_product_visible = ( $_product && $_product->exists() && $cart_item['quantity'] > 0 && apply_filters( 'woocommerce_widget_cart_item_visible', true, $cart_item, $cart_item_key ) );

		if ( ! $is_product_visible ) {
			return;
		}

		$product_id = apply_filters( 'woocommerce_cart_item_product_id', $cart_item['product_id'], $cart_item, $cart_item_key );
		$product_price = apply_filters( 'woocommerce_cart_item_price', WC()->cart->get_product_price( $_product ), $cart_item, $cart_item_key );
		$product_permalink = apply_filters( 'woocommerce_cart_item_permalink', $_product->is_visible() ? $_product->get_permalink( $cart_item ) : '', $cart_item, $cart_item_key );
		$product_sku = $_product->get_sku();
		?>
		<div class="elementor-menu-cart__product woocommerce-cart-form__cart-item <?php echo esc_attr( apply_filters( 'woocommerce_cart_item_class', 'cart_item', $cart_item, $cart_item_key ) ); ?>">

			<div class="elementor-menu-cart__product-image product-thumbnail">
				<?php
				$thumbnail = apply_filters( 'woocommerce_cart_item_thumbnail', $_product->get_image(), $cart_item, $cart_item_key );

				if ( ! $product_permalink ) :
					echo wp_kses_post( $thumbnail );
				else :
					printf( '<a href="%s">%s</a>', esc_url( $product_permalink ), wp_kses_post( $thumbnail ) );
				endif;
				?>
			</div>

			<div class="elementor-menu-cart__product-name product-name" data-title="<?php esc_attr_e( 'Product', 'elementor-pro' ); ?>">
				<?php
				if ( ! $product_permalink ) :
					echo wp_kses_post( apply_filters( 'woocommerce_cart_item_name', $_product->get_name(), $cart_item, $cart_item_key ) . '&nbsp;' );
				else :
					echo wp_kses_post( apply_filters( 'woocommerce_cart_item_name', sprintf( '<a href="%s">%s</a>', esc_url( $product_permalink ), $_product->get_name() ), $cart_item, $cart_item_key ) );
				endif;

				do_action( 'woocommerce_after_cart_item_name', $cart_item, $cart_item_key );

				// Meta data.
				echo wc_get_formatted_cart_item_data( $cart_item ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				?>
			</div>

			<div class="elementor-menu-cart__product-price product-price" data-title="<?php esc_attr_e( 'Price', 'elementor-pro' ); ?>">
				<?php echo apply_filters( 'woocommerce_widget_cart_item_quantity', '<span class="quantity">' . sprintf( '<span class="product-quantity">%s &times;</span> %s', $cart_item['quantity'], $product_price ) . '</span>', $cart_item, $cart_item_key ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
			</div>

			<div class="<?php echo sanitize_html_class( $product_remove_class ); ?> product-remove">
				<?php
				$cart_item_remove_link = sprintf( // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
					'<a href="%s" class="e-temp-class" aria-label="%s" data-product_id="%s" data-cart_item_key="%s" data-product_sku="%s">%s</a>',
					esc_url( wc_get_cart_remove_url( $cart_item_key ) ),
					__( 'Remove this item', 'elementor-pro' ),
					esc_attr( $product_id ),
					esc_attr( $cart_item_key ),
					esc_attr( $product_sku ),
					$icon
				);

				foreach ( [ 'elementor_remove_from_cart_button', 'remove_from_cart_button' ] as $class ) {
					echo apply_filters( // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
						'woocommerce_cart_item_remove_link',
						str_replace( 'e-temp-class', $class, $cart_item_remove_link ),
						$cart_item_key
					);
				}
				?>
			</div>
		</div>
		<?php
	}
}

$cart_items = WC()->cart->get_cart();
$settings = isset( $args['settings'] ) ? $args['settings'] : $args;

if ( empty( $cart_items ) ) { ?>
	<div class="woocommerce-mini-cart__empty-message"><?php esc_attr_e( 'No products in the cart.', 'elementor-pro' ); ?></div>
<?php } else { ?>
	<div class="elementor-menu-cart__products woocommerce-mini-cart cart woocommerce-cart-form__contents">
		<?php
		do_action( 'woocommerce_before_mini_cart_contents' );

		$has_custom_icon = ! empty( $settings['remove_item_icon_svg']['value'] );
		$product_remove_class = 'elementor-menu-cart__product-remove';
		$icon = '';

		if ( $has_custom_icon ) {
			$product_remove_class .= '-custom';

			ob_start();
			\Elementor\Icons_Manager::render_icon( $settings['remove_item_icon_svg'], [
				'class' => 'e-remove-item-custom-icon',
				'aria-hidden' => 'true',
			] );
			$icon = ob_get_clean();
		}

		foreach ( $cart_items as $cart_item_key => $cart_item ) {
			elementor_pro_render_mini_cart_item( $cart_item_key, $cart_item, $product_remove_class, $icon );
		}

		do_action( 'woocommerce_mini_cart_contents' );
		?>
	</div>

	<div class="elementor-menu-cart__subtotal">
		<strong><?php echo esc_html__( 'Subtotal', 'woocommerce' ); // phpcs:ignore WordPress.WP.I18n ?>:</strong>
		<?php echo WC()->cart->get_cart_subtotal(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
	</div>
	<div class="elementor-menu-cart__footer-buttons">
		<a href="<?php echo esc_url( wc_get_cart_url() ); ?>" class="elementor-button elementor-button--view-cart elementor-size-md">
			<span class="elementor-button-text"><?php echo esc_html__( 'View cart', 'woocommerce' ); // phpcs:ignore WordPress.WP.I18n ?></span>
		</a>
		<a href="<?php echo esc_url( wc_get_checkout_url() ); ?>" class="elementor-button elementor-button--checkout elementor-size-md">
			<span class="elementor-button-text"><?php echo esc_html__( 'Checkout', 'woocommerce' ); // phpcs:ignore WordPress.WP.I18n ?></span>
		</a>
	</div>
	<?php
} // empty( $cart_items )

?>
