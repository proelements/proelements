<?php

namespace ElementorPro\Modules\FloatingButtons\Classes\Render;

use Elementor\Core\Base\Providers\Social_Network_Provider;
use Elementor\Icons_Manager;
use Elementor\Modules\FloatingButtons\Classes\Render\Contact_Buttons_Core_Render;

class Contact_Buttons_Var_8_Render extends Contact_Buttons_Core_Render {

	protected function render_chat_button_icon(): void {
		$custom_icon = $this->settings['chat_button_icon'] ?? '';

		Icons_Manager::render_icon( $custom_icon );
	}

	protected function render_close_button(): void {
		$button_size = $this->settings['style_chat_button_size'];
		$button_classnames = 'e-contact-buttons__close-button e-contact-buttons__chat-button-shadow';
		$accessible_name = $this->settings['chat_aria_label'];

		if ( ! empty( $button_size ) ) {
			$button_classnames .= ' has-size-' . $button_size;
		}

		$this->widget->add_render_attribute( 'close-button', [
			'class' => $button_classnames,
			'aria-controls' => 'e-contact-buttons__content-wrapper',
			'aria-label' => sprintf(
				/* translators: 1: Accessible name */
				esc_attr__( 'Close %1$s', 'elementor-pro' ),
				$accessible_name,
			),
			'type' => 'button',
			'aria-expanded' => 'false',
		] );

		?>
			<button <?php echo $this->widget->get_render_attribute_string( 'close-button' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
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
		$accessible_name = $this->settings['chat_aria_label'];

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
			'aria-label' => sprintf(
				/* translators: 1: Accessible name */
				esc_attr__( 'Open %1$s', 'elementor-pro' ),
				$accessible_name,
			),
			'type' => 'button',
			'aria-expanded' => 'true',
		] );

		?>
		<div class="e-contact-buttons__chat-button-container">
			<button <?php echo $this->widget->get_render_attribute_string( 'button-' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
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

	protected function build_layout_render_attribute(): void {
		$layout_classnames = 'e-contact-buttons e-' . $this->widget->get_name();
		$has_animations = ! empty( $this->settings['style_chat_box_exit_animation'] ) || ! empty( $this->settings['style_chat_box_entrance_animation'] );
		$border_radius = $this->settings['style_chat_box_corners'];
		$alignment_position_horizontal = $this->settings['advanced_horizontal_position'];
		$alignment_position_vertical = $this->settings['advanced_vertical_position'];

		$custom_classes = $this->settings['advanced_custom_css_classes'] ?? '';

		if ( ! empty( $border_radius ) ) {
			$layout_classnames .= ' has-corners-' . $border_radius;
		}

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

		$this->add_layout_render_attribute( $layout_classnames );
	}

	protected function render_top_bar(): void {
		$top_bar_title = $this->settings['top_bar_title'] ?? '';
		$top_bar_subtitle = $this->settings['top_bar_subtitle'] ?? '';

		$has_top_bar_title = ! empty( $top_bar_title );
		$has_top_bar_subtitle = ! empty( $top_bar_subtitle );
		?>
		<div class="e-contact-buttons__top-bar">
			<div class="e-contact-buttons__top-bar-details">
				<?php if ( $has_top_bar_title ) { ?>
					<p class="e-contact-buttons__top-bar-title"><?php echo esc_html( $top_bar_title ); ?></p>
				<?php } ?>
				<?php if ( $has_top_bar_subtitle ) { ?>
					<p class="e-contact-buttons__top-bar-subtitle"><?php echo esc_html( $top_bar_subtitle ); ?></p>
				<?php } ?>
			</div>
		</div>
		<?php
	}

	protected function render_contact_section(): void {
		$contact_icons = $this->settings['contact_repeater'] ?? [];
		$button_size = $this->settings['style_resource_links_button_size'];
		$hover_animation = $this->settings['style_resource_links_hover_animation'];

		?>
		<div class="e-contact-buttons__links-container">
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

					$icon_title = $icon['contact_title'] ?? '';
					$icon_description = $icon['contact_description'] ?? '';
					$icon_name_mapping = Social_Network_Provider::get_name_mapping( $icon['contact_icon_platform'] );
					$colors_type = $this->settings['style_resource_links_color_select'];

					$icon_classnames = 'e-contact-buttons__contact-icon-link';

					if ( ! empty( $button_size ) ) {
						$icon_classnames .= ' has-size-' . $button_size;
					}

					if ( ! empty( $icon_name_mapping ) ) {
						$icon_classnames .= ' has-platform-' . $icon_name_mapping;
					}

					if ( ! empty( $colors_type ) ) {
						$icon_classnames .= ' has-colors-type-' . $colors_type;
					}

					if ( ! empty( $hover_animation ) ) {
						$icon_classnames .= ' elementor-animation-' . $hover_animation;
					}

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
						<span class="e-contact-buttons__contact-icon-container">
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
						<?php if ( ! empty( $icon_title ) ) { ?>
							<span class="e-contact-buttons__contact-title"><?php echo esc_html( $icon_title ); ?></span>
						<?php } ?>
						<?php if ( ! empty( $icon_description ) ) { ?>
							<span class="e-contact-buttons__contact-description"><?php echo esc_html( $icon_description ); ?></span>
						<?php } ?>
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

		$this->widget->add_render_attribute( 'content', [
			'class' => $content_classnames,
		] );
		?>
		<div <?php echo $this->widget->get_render_attribute_string( 'layout' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
			<div <?php echo $this->widget->get_render_attribute_string( 'content-wrapper' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
				<div <?php echo $this->widget->get_render_attribute_string( 'content' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
					<?php
					$this->render_top_bar();
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
