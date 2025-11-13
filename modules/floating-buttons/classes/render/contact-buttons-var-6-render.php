<?php

namespace ElementorPro\Modules\FloatingButtons\Classes\Render;

use Elementor\Core\Base\Providers\Social_Network_Provider;
use Elementor\Icons_Manager;
use Elementor\Modules\FloatingButtons\Classes\Render\Contact_Buttons_Core_Render;

class Contact_Buttons_Var_6_Render extends Contact_Buttons_Core_Render {

	protected function build_layout_render_attribute(): void {
		$layout_classnames = 'e-contact-buttons e-' . $this->widget->get_name();
		$custom_classes = $this->settings['advanced_custom_css_classes'] ?? '';
		$alignment_position_horizontal = $this->settings['advanced_horizontal_position'];
		$alignment_position_vertical = $this->settings['advanced_vertical_position'];

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

	protected function render_contact_links(): void {
		$contact_icons = $this->settings['contact_repeater'] ?? [];
		$icons_size = $this->settings['style_contact_button_size'] ?? 'small';
		$hover_animation = $this->settings['style_contact_button_hover_animation'];
		$border_radius = $this->settings['style_contact_button_bar_corners'];
		$accessible_name = $this->settings['contact_aria_label'];

		$links_classnames = 'e-contact-buttons__contact-links';

		if ( ! empty( $border_radius ) ) {
			$links_classnames .= ' has-corners-' . $border_radius;
		}

		$this->widget->add_render_attribute( 'contact-links', [
			'class' => $links_classnames,
		] );

		?>
			<div <?php echo $this->widget->get_render_attribute_string( 'contact-links' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
				<?php
				foreach ( $contact_icons as $key => $icon ) {
					$icon_text_mapping = Social_Network_Provider::get_text_mapping( $icon['contact_icon_platform'] );
					$aria_label = sprintf(
						/* translators: 1: Accessible name, 2: Platform name */
						esc_attr__( 'Access %1$s %2$s', 'elementor-pro' ),
						$accessible_name,
						$icon_text_mapping
					);

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
						'location' => $icon['contact_icon_waze'] ?? '',
					];

					$icon_classnames = 'e-contact-buttons__contact-icon-link has-size-' . $icons_size;

					if ( ! empty( $hover_animation ) ) {
						$icon_classnames .= ' elementor-animation-' . $hover_animation;
					}

					if ( $this->is_url_link( $icon['contact_icon_platform'] ) ) {
						$this->render_link_attributes( $link, 'icon-link-' . $key );

						$this->widget->add_render_attribute( 'icon-link-' . $key, [
							'class' => $icon_classnames,
							'aria-label' => $aria_label,
						] );
					} else {
						$formatted_link = $this->get_formatted_link( $link, 'contact_icon' );

						$this->widget->add_render_attribute( 'icon-link-' . $key, [
							'class' => $icon_classnames,
							'href' => $formatted_link,
							'rel' => 'noopener noreferrer',
							'target' => '_blank',
							'aria-label' => $aria_label,
						] );
					}

					?>

					<a <?php echo $this->widget->get_render_attribute_string( 'icon-link-' . $key ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
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
					</a>
				<?php } ?>
			</div>
		<?php
	}

	public function render(): void {
		$this->build_layout_render_attribute();
		?>
		<div <?php echo $this->widget->get_render_attribute_string( 'layout' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
			<?php
				$this->render_contact_links();
			?>
		</div>
		<?php
	}
}
