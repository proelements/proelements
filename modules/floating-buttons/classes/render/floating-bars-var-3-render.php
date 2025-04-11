<?php

namespace ElementorPro\Modules\FloatingButtons\Classes\Render;

use Elementor\Modules\FloatingButtons\Classes\Render\Floating_Bars_Core_Render;
use Elementor\Icons_Manager;

class Floating_Bars_Var_3_Render extends Floating_Bars_Core_Render {

	public function render_shape(): void {
		$style_type = $this->settings['style_coupon_type'];

		if ( 'price-tag' === $style_type ) {
			?>
			<svg class="e-floating-bars__shape e-floating-bars__price-tag" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.67 42"><path class="shape path" d="M124.67 1H21.37c-1.3 0-2.56.51-3.49 1.42l-15.37 15a5.005 5.005 0 0 0 0 7.16l15.38 15c.93.91 2.19 1.42 3.49 1.42h103.29c2.76 0 5-2.24 5-5V6c0-2.76-2.24-5-5-5ZM15.34 25c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4Z"/></svg>
		<?php } else if ( 'gift-tag' === $style_type ) {
			?>
			<svg class="e-floating-bars__shape e-floating-bars__gift-tag" viewBox="0 0 111 40" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1 20C1 9.50229 9.50229 1 20 1H110V39H20C9.50229 39 1 30.4977 1 20ZM11 20C11 22.7623 13.2377 25 16 25C18.7623 25 21 22.7623 21 20C21 17.2377 18.7623 15 16 15C13.2377 15 11 17.2377 11 20Z" class="shape path"/>
			</svg>
		<?php } else if ( 'round-ticket' === $style_type ) {
			?>
			<svg class="e-floating-bars__shape e-floating-bars__round-ticket" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 104 40"><path class="shape path" d="M96.5 8.51v.522l.428.298A12.972 12.972 0 0 1 102.5 20c0 4.42-2.199 8.319-5.572 10.67l-.428.298V39h-89v-8.032l-.428-.298A12.972 12.972 0 0 1 1.5 20c0-4.42 2.199-8.319 5.572-10.67l.428-.298V1h89v7.51Z"/></svg>
		<?php } else if ( 'square-ticket' === $style_type ) {
			?>
			<svg class="e-floating-bars__shape e-floating-bars__square-ticket" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 106 40"><path class="shape path" d="M7.429 1H99.57a7.003 7.003 0 0 0 4.929 5.712v26.576A7.015 7.015 0 0 0 99.57 39H7.43A7.011 7.011 0 0 0 1.5 33.071V6.93A7.012 7.012 0 0 0 7.429 1Z"/></svg>
		<?php }
	}

	public function render_coupon_button(): void {
		$text = $this->settings['coupon_code'] ?? '';
		$success_message = $this->settings['coupon_success_message'] ?? '';
		$accessible_name = $this->settings['accessible_name'];
		$copy_icon = $this->settings['coupon_copy_icon'] ?? '';
		$success_icon = $this->settings['coupon_success_icon'] ?? '';
		$entrance_animation = $this->settings['style_coupon_animation'];
		$style_type = $this->settings['style_coupon_type'];
		$has_border = $this->settings['style_coupon_show_border'];

		$coupon_classnames = 'e-floating-bars__coupon-button';

		if ( ! empty( $entrance_animation ) && 'none' !== $entrance_animation ) {
			$coupon_classnames .= ' has-entrance-animation';
		}

		if ( ! empty( $style_type ) ) {
			$coupon_classnames .= ' is-type-' . $style_type;
		}

		if ( 'yes' == $has_border ) {
			$coupon_classnames .= ' has-border';
		}

		$this->widget->add_render_attribute( 'coupon-button', [
			'class' => $coupon_classnames,
			'type' => 'button',
			'aria-label' => sprintf(
				/* translators: 1: Accessible name. */
				esc_attr__( 'Copy %1$s coupon code', 'elementor-pro' ),
				$accessible_name,
			),
		] );

		if ( '' !== $text ) {
			?>
				<button <?php echo $this->widget->get_render_attribute_string( 'coupon-button' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
					<?php $this->render_shape(); ?>
					<span class="e-floating-bars__coupon-text-group e-floating-bars__coupon-code">
						<?php if ( '' !== $copy_icon['value'] ) : ?>
							<span class="e-floating-bars__coupon-icon"><?php Icons_Manager::render_icon( $copy_icon, [ 'aria-hidden' => 'true' ] ); ?></span>
						<?php endif; ?>
						<span class="e-floating-bars__coupon-text"><?php echo esc_html( $text ); ?></span>
					</span>
					<span class="e-floating-bars__coupon-text-group e-floating-bars__coupon-success is-hidden">
						<?php if ( '' !== $success_icon['value'] ) : ?>
							<span class="e-floating-bars__coupon-icon e-floating-bars__coupon-success-icon"><?php Icons_Manager::render_icon( $success_icon, [ 'aria-hidden' => 'true' ] ); ?></span>
						<?php endif; ?>
						<span class="e-floating-bars__coupon-text e-floating-bars__coupon-success-message"><?php echo esc_html( $success_message ); ?></span>
					</span>
				</button>
			<?php
		}
	}

	public function render(): void {
		$this->build_layout_render_attribute();
		$has_close_button = $this->settings['floating_bar_close_switch'];

		?>
		<div <?php echo $this->widget->get_render_attribute_string( 'layout' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
			<?php
				$this->render_announcement_text();

				$this->render_announcement_icon();

				$this->render_coupon_button();

			if ( 'yes' == $has_close_button ) {
				$this->render_close_button();
			}
			?>
			<div class="e-floating-bars__overlay"></div>
		</div>
		<?php
	}
}
