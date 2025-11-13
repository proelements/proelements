<?php

namespace ElementorPro\Modules\FloatingButtons\Classes\Render;

use Elementor\Modules\FloatingButtons\Classes\Render\Contact_Buttons_Core_Render;
use Elementor\Icons_Manager;

class Contact_Buttons_Var_1_Render extends Contact_Buttons_Core_Render {

	protected function render_message_bubble(): void {
		$message_bubble_classnames = 'e-contact-buttons__message-bubble';

		$this->widget->add_render_attribute( 'message-bubble', [
			'class' => $message_bubble_classnames,
		] );
		?>
		<div <?php echo $this->widget->get_render_attribute_string( 'message-bubble' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
			<?php
				$this->render_message_bubble_container();
			?>
		</div>
		<?php
	}

	protected function render_chat_button_icon(): void {
		$custom_icon = $this->settings['chat_button_icon'] ?? '';

		Icons_Manager::render_icon( $custom_icon );
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
					$this->render_top_bar();
					$this->render_message_bubble();
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
