<?php

namespace ElementorPro\Modules\FloatingButtons\Classes\Render;

use Elementor\Core\Base\Providers\Social_Network_Provider;
use Elementor\Icons_Manager;
use Elementor\Modules\FloatingButtons\Classes\Render\Contact_Buttons_Core_Render;

class Contact_Buttons_Var_10_Render extends Contact_Buttons_Core_Render {

	protected function build_layout_render_attribute(): void {
		$layout_classnames = 'e-contact-buttons e-' . $this->widget->get_name();
		$alignment_position_horizontal = $this->settings['advanced_horizontal_position'];
		$alignment_position_vertical = $this->settings['advanced_vertical_position'];
		$custom_classes = $this->settings['advanced_custom_css_classes'] ?? '';

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

	protected function render_contact_section(): void {
		$contact_icons = $this->settings['contact_repeater'] ?? [];
		$button_size = $this->settings['style_contact_button_size'];
		$button_corners = $this->settings['style_contact_corners'];

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

					$icon_classnames = 'e-contact-buttons__contact-icon-link e-contact-buttons__contact-box-shadow';

					if ( ! empty( $button_size ) ) {
						$icon_classnames .= ' has-size-' . $button_size;
					}

					if ( ! empty( $button_corners ) ) {
						$icon_classnames .= ' has-corners-' . $button_corners;
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
						<?php if ( ! empty( $icon_title ) ) { ?>
							<span class="e-contact-buttons__contact-title"><?php echo esc_html( $icon_title ); ?></span>
						<?php } ?>
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
					</a>
				<?php } ?>
			</div>
		</div>
		<?php
	}

	public function render(): void {
		$this->build_layout_render_attribute();

		$this->widget->add_render_attribute( 'content', [
			'class' => 'e-contact-buttons__content',
		] );
		?>
		<div <?php echo $this->widget->get_render_attribute_string( 'layout' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
			<?php $this->render_contact_section(); ?>
		</div>
		<?php
	}
}
