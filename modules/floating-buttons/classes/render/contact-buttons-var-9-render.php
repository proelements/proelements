<?php

namespace ElementorPro\Modules\FloatingButtons\Classes\Render;

use Elementor\Core\Base\Providers\Social_Network_Provider;
use Elementor\Modules\FloatingButtons\Classes\Render\Contact_Buttons_Core_Render;

class Contact_Buttons_Var_9_Render extends Contact_Buttons_Core_Render {

	protected function render_chat_button(): void {
		$platform = $this->settings['chat_button_platform'] ?? '';
		$button_size = $this->settings['style_chat_button_size'];
		$chat_button_text = $this->settings['chat_button_display_text'];

		$button_classnames = 'e-contact-buttons__chat-button e-contact-buttons__chat-button-drop-shadow';

		if ( ! empty( $button_size ) ) {
			$button_classnames .= ' has-size-' . $button_size;
		}

		$link = [
			'platform' => $platform,
			'number' => $this->settings['chat_button_number'] ?? '',
			'username' => $this->settings['chat_button_username'] ?? '',
			'email_data' => [
				'chat_button_mail' => $this->settings['chat_button_mail'] ?? '',
				'chat_button_mail_subject' => $this->settings['chat_button_mail_subject'] ?? '',
				'chat_button_mail_body' => $this->settings['chat_button_mail_body'] ?? '',
			],
			'viber_action' => $this->settings['chat_button_viber_action'] ?? '',
			'location' => $this->settings['chat_button_waze'] ?? '',
			'url' => $this->settings['chat_button_url'] ?? '',
		];

		if ( $this->is_url_link( $platform ) ) {
			$this->render_link_attributes( $link, 'formatted-cta' );

			$this->widget->add_render_attribute( 'formatted-cta', [
				'class' => $button_classnames,
			] );
		} else {
			$formatted_link = $this->get_formatted_link( $link, 'chat_button' );

			$this->widget->add_render_attribute( 'formatted-cta', [
				'class' => $button_classnames,
				'href' => $formatted_link,
				'rel' => 'noopener noreferrer',
				'target' => '_blank',
			] );
		}

		?>
		<div class="e-contact-buttons__chat-button-container">
			<a <?php echo $this->widget->get_render_attribute_string( 'formatted-cta' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
				<span class="e-contact-buttons__chat-button-icon-container"><?php
					$this->render_chat_button_icon();
				?></span>
				<span class="e-contact-buttons__chat-button-text"><?php echo esc_html( $chat_button_text ); ?></span>
			</a>
		</div>
		<?php
	}

	protected function build_layout_render_attribute(): void {
		$layout_classnames = 'e-contact-buttons e-' . $this->widget->get_name();
		$platform = $this->settings['chat_button_platform'] ?? '';
		$alignment_position_horizontal = $this->settings['advanced_horizontal_position'];
		$alignment_position_vertical = $this->settings['advanced_vertical_position'];
		$has_animations = ! empty( $this->settings['style_chat_box_exit_animation'] ) || ! empty( $this->settings['style_chat_box_entrance_animation'] );
		$custom_classes = $this->settings['advanced_custom_css_classes'] ?? '';
		$icon_name_mapping = Social_Network_Provider::get_name_mapping( $platform );

		if ( ! empty( $alignment_position_horizontal ) ) {
			$layout_classnames .= ' has-h-alignment-' . $alignment_position_horizontal;
		}

		if ( ! empty( $alignment_position_vertical ) ) {
			$layout_classnames .= ' has-v-alignment-' . $alignment_position_vertical;
		}

		if ( $has_animations ) {
			$layout_classnames .= ' has-animations';
		}

		if ( $custom_classes ) {
			$layout_classnames .= ' ' . $custom_classes;
		}

		if ( ! empty( $platform ) ) {
			$layout_classnames .= ' has-platform-' . $icon_name_mapping;
		}

		$this->add_layout_render_attribute( $layout_classnames );
	}

	public function render(): void {
		$this->build_layout_render_attribute();

		$content_classnames = 'e-contact-buttons__content';

		$this->widget->add_render_attribute( 'content', [
			'class' => $content_classnames,
		] );
		?>
		<div <?php echo $this->widget->get_render_attribute_string( 'layout' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
			<?php
				$this->render_chat_button();
			?>
		</div>
		<?php
	}
}
