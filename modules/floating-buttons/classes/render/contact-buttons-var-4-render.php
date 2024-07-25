<?php

namespace ElementorPro\Modules\FloatingButtons\Classes\Render;

use Elementor\Core\Base\Providers\Social_Network_Provider;
use Elementor\Icons_Manager;
use Elementor\Modules\FloatingButtons\Classes\Render\Contact_Buttons_Core_Render;

class Contact_Buttons_Var_4_Render extends Contact_Buttons_Core_Render {

	protected function render_chat_button_icon(): void {
		$custom_icon = $this->settings['chat_button_icon'] ?? '';

		Icons_Manager::render_icon( $custom_icon );
	}

	protected function build_layout_render_attribute(): void {
		$layout_classnames = 'e-contact-buttons e-' . $this->widget->get_name();
		$has_animations = ! empty( $this->settings['style_chat_box_exit_animation'] ) || ! empty( $this->settings['style_chat_box_entrance_animation'] );
		$alignment_position_horizontal = $this->settings['advanced_horizontal_position'];
		$alignment_position_vertical = $this->settings['advanced_vertical_position'];

		$custom_classes = $this->settings['advanced_custom_css_classes'] ?? '';

		if ( $has_animations ) {
			$layout_classnames .= ' has-animations';
		}

		if ( ! empty( $alignment_position_horizontal ) ) {
			$layout_classnames .= ' has-h-alignment-' . $alignment_position_horizontal;
		}

		if ( ! empty( $alignment_position_vertical ) ) {
			$layout_classnames .= ' has-v-alignment-' . $alignment_position_vertical;
		}

		if ( $custom_classes ) {
			$layout_classnames .= ' ' . $custom_classes;
		}

		$this->add_layout_render_attribute( $layout_classnames );
	}

	protected function render_close_button(): void {
		$button_size = $this->settings['style_chat_button_size'];
		$button_classnames = 'e-contact-buttons__close-button e-contact-buttons__chat-button-shadow';

		if ( ! empty( $button_size ) ) {
			$button_classnames .= ' has-size-' . $button_size;
		}

		$this->widget->add_render_attribute( 'close-button', [
			'class' => $button_classnames,
			'aria-controls' => 'e-contact-buttons__content-wrapper',
		] );

		?>
			<button <?php echo $this->widget->get_render_attribute_string( 'close-button' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?> type="button" aria-label="<?php echo esc_attr__( 'Close Links Popup', 'elementor-pro' ); ?>" aria-expanded="false">
				<i class="eicon-close"></i>
			</button>
		<?php
	}

	protected function render_chat_button(): void {
		$platform = $this->settings['chat_button_platform'] ?? '';
		$button_size = $this->settings['style_chat_button_size'];
		$hover_animation = $this->settings['style_button_color_hover_animation'];
		$entrance_animation = $this->settings['style_chat_button_animation'];
		$entrance_animation_duration = $this->settings['style_chat_button_animation_duration'];
		$entrance_animation_delay = $this->settings['style_chat_button_animation_delay'];

		$button_classnames = 'e-contact-buttons__chat-button e-contact-buttons__chat-button-shadow';

		if ( ! empty( $button_size ) ) {
			$button_classnames .= ' has-size-' . $button_size;
		}

		if ( ! empty( $hover_animation ) ) {
			$button_classnames .= ' elementor-animation-' . $hover_animation;
		}

		if ( ! empty( $entrance_animation ) && 'none' != $entrance_animation ) {
			$button_classnames .= ' has-entrance-animation';
		}

		if ( ! empty( $entrance_animation_delay ) ) {
			$button_classnames .= ' has-entrance-animation-delay';
		}

		if ( ! empty( $entrance_animation_duration ) ) {
			$button_classnames .= ' has-entrance-animation-duration-' . $entrance_animation_duration;
		}

		$this->widget->add_render_attribute( 'button-', [
			'class' => $button_classnames,
			'aria-controls' => 'e-contact-buttons__content-wrapper',
		] );

		?>
		<div class="e-contact-buttons__chat-button-container">
			<button <?php echo $this->widget->get_render_attribute_string( 'button-' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?> type="button" aria-label="<?php echo esc_attr__( 'Open Links Popup', 'elementor-pro' ); ?>" aria-expanded="true">
				<?php
					$this->render_chat_button_icon();
				?>
			</button>
			<?php
				$this->render_close_button();
			?>
		</div>
		<?php
	}

	protected function render_contact_section(): void {
		$contact_icons = $this->settings['contact_repeater'] ?? [];
		$button_size = $this->settings['style_chat_button_size'];

		?>
		<div class="e-contact-buttons__contact">
		<div class="e-contact-buttons__contact-links">
				<?php
				foreach ( $contact_icons as $key => $icon ) {

					$link = [
						'platform' => $icon['contact_icon_platform'],
						'number' => $icon['contact_icon_number'] ?? '',
						'username' => $icon['contact_icon_username'] ?? '',
						'email_data' => [
							'contact_icon_mail' => $icon['contact_icon_mail'] ?? '',
							'contact_icon_mail_subject' => $icon['contact_icon_mail_subject'] ?? '',
							'contact_icon_mail_body' => $icon['contact_icon_mail_body'] ?? '',
						],
						'viber_action' => $icon['contact_icon_viber_action'] ?? '',
						'url' => $icon['contact_icon_url'] ?? '',
						'location' => $icon['contact_icon_waze'] ?? '',
					];

					$icon_classnames = 'e-contact-buttons__contact-icon-link has-size-' . $button_size;
					$icon_tooltip = $icon['contact_tooltip'] ?? '';

					if ( $this->is_url_link( $icon['contact_icon_platform'] ) ) {
						$this->render_link_attributes( $link, 'icon-link-' . $key );

						$this->widget->add_render_attribute( 'icon-link-' . $key, [
							'class' => $icon_classnames,
						] );
					} else {
						$formatted_link = $this->get_formatted_link( $link, 'contact_icon' );

						$this->widget->add_render_attribute( 'icon-link-' . $key, [
							'aria-label' => esc_attr( $icon['contact_icon_platform'] ),
							'class' => $icon_classnames,
							'href' => $formatted_link,
							'rel' => 'noopener noreferrer',
							'target' => '_blank',
						] );
					}

					?>

					<a <?php echo $this->widget->get_render_attribute_string( 'icon-link-' . $key ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
						<?php if ( ! empty( $icon_tooltip ) ) { ?>
							<span class="e-contact-buttons__contact-tooltip e-contact-buttons__contact-box-shadow"><?php echo esc_html( $icon_tooltip ); ?></span>
						<?php } ?>
						<span class="e-contact-buttons__contact-icon-container e-contact-buttons__contact-box-shadow">
							<?php
								$mapping = Social_Network_Provider::get_icon_mapping( $icon['contact_icon_platform'] );
								$icon_lib = explode( ' ', $mapping )[0];
								$library = 'fab' === $icon_lib ? 'fa-brands' : 'fa-solid';
								Icons_Manager::render_icon(
									[
										'library' => $library,
										'value' => $mapping,
									],
									[ 'aria-hidden' => 'true' ]
								);
							?>
						</span>
					</a>
				<?php } ?>
			</div>
		</div>
		<?php
	}

	public function render(): void {
		$this->build_layout_render_attribute();
		$this->add_content_wrapper_render_attribute();

		$content_classnames = 'e-contact-buttons__content';
		$animation_duration = $this->settings['style_chat_box_animation_duration'];

		if ( ! empty( $animation_duration ) ) {
			$content_classnames .= ' has-animation-duration-' . $animation_duration;
		}

		$this->widget->add_render_attribute( 'content', [
			'class' => $content_classnames,
		] );
		?>
		<div <?php echo $this->widget->get_render_attribute_string( 'layout' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
			<div <?php echo $this->widget->get_render_attribute_string( 'content-wrapper' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
				<div <?php echo $this->widget->get_render_attribute_string( 'content' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
					<?php
						$this->render_contact_section();
					?>
				</div>
			</div>
			<?php
				$this->render_chat_button();
			?>
		</div>
		<?php
	}
}
