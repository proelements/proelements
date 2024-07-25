<?php

namespace ElementorPro\Modules\FloatingButtons\Classes\Render;

use Elementor\Core\Base\Providers\Social_Network_Provider;
use Elementor\Modules\FloatingButtons\Classes\Render\Contact_Buttons_Core_Render;

class Contact_Buttons_Var_7_Render extends Contact_Buttons_Core_Render {

	protected function build_layout_render_attribute(): void {
		$layout_classnames = 'e-contact-buttons e-' . $this->widget->get_name();
		$platform = $this->settings['chat_button_platform'] ?? '';
		$alignment_position_horizontal = $this->settings['advanced_horizontal_position'];
		$alignment_position_vertical = $this->settings['advanced_vertical_position'];
		$custom_classes = $this->settings['advanced_custom_css_classes'] ?? '';
		$icon_name_mapping = Social_Network_Provider::get_name_mapping( $platform );
		$mobile_full_width = $this->settings['advanced_mobile_full_width'];

		if ( ! empty( $alignment_position_horizontal ) ) {
			$layout_classnames .= ' has-h-alignment-' . $alignment_position_horizontal;
		}

		if ( ! empty( $alignment_position_vertical ) ) {
			$layout_classnames .= ' has-v-alignment-' . $alignment_position_vertical;
		}

		if ( ! empty( $mobile_full_width ) ) {
			$layout_classnames .= ' has-mobile-full-width';
		}

		if ( $custom_classes ) {
			$layout_classnames .= ' ' . $custom_classes;
		}

		if ( ! empty( $platform ) ) {
			$layout_classnames .= ' has-platform-' . $icon_name_mapping;
		}

		$this->add_layout_render_attribute( $layout_classnames );
	}

	protected function get_platform_text(): string {
		$platform = $this->settings['chat_button_platform'];

		switch ( $platform ) {
			case Social_Network_Provider::EMAIL:
				$platform_text = $this->settings['chat_button_mail'];
				break;
			case Social_Network_Provider::SMS:
				$platform_text = $this->settings['chat_button_number'];
				break;
			case Social_Network_Provider::MESSENGER:
				$platform_text = $this->settings['chat_button_username'];
				break;
			case Social_Network_Provider::WHATSAPP:
				$platform_text = $this->settings['chat_button_number'];
				break;
			case Social_Network_Provider::VIBER:
				$platform_text = $this->settings['chat_button_number'];
				break;
			case Social_Network_Provider::SKYPE:
				$platform_text = $this->settings['chat_button_username'];
				break;
			case Social_Network_Provider::WAZE:
				$platform_text = $this->settings['chat_button_waze']['url'];
				break;
			case Social_Network_Provider::URL:
				$platform_text = $this->settings['chat_button_url']['url'];
				break;
			case Social_Network_Provider::TELEPHONE:
				$platform_text = $this->settings['chat_button_number'];
				break;
			default:
				break;
		}

		return $platform_text;
	}

	protected function get_chat_button_text(): string {
		if ( 'cta' == $this->settings['chat_button_display_text_select'] ) {
			$button_text = $this->settings['chat_button_display_text'];
		} else {
			$button_text = $this->get_platform_text();
		}

		return $button_text;
	}

	protected function render_chat_button(): void {
		$platform = $this->settings['chat_button_platform'] ?? '';
		$hover_animation = $this->settings['style_button_color_hover_animation'];
		$icon_position = $this->settings['style_chat_button_horizontal_position'];

		$button_classnames = 'e-contact-buttons__chat-button';

		if ( ! empty( $hover_animation ) ) {
			$button_classnames .= ' elementor-animation-' . $hover_animation;
		}

		if ( ! empty( $icon_position ) ) {
			$button_classnames .= ' has-icon-position-' . $icon_position;
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

		$chat_button_text = $this->get_chat_button_text();

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
				<?php
					$this->render_chat_button_icon();
				?>
				<?php if ( ! empty( $chat_button_text ) ) : ?>
					<span class="e-contact-buttons__chat-button-text">
						<?php echo esc_html( $chat_button_text ); ?>
					</span>
				<?php endif; ?>
			</a>
		</div>
		<?php
	}

	public function render(): void {
		$this->build_layout_render_attribute();
		?>
		<div <?php echo $this->widget->get_render_attribute_string( 'layout' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
			<?php
				$this->render_chat_button();
			?>
		</div>
		<?php
	}
}
