<?php

namespace ElementorPro\Modules\FloatingButtons\Classes\Render;

use Elementor\Modules\FloatingButtons\Classes\Render\Floating_Bars_Core_Render;
use Elementor\Icons_Manager;

class Floating_Bars_Var_2_Render extends Floating_Bars_Core_Render {

	protected function render_headlines(): void {
		$headlines = $this->settings['headlines_repeater'] ?? [];
		$has_pause_hover = $this->settings['style_ticker_pause_hover'];

		$headlines_classnames = 'e-floating-bars__headlines';

		if ( 'yes' == $has_pause_hover ) {
			$headlines_classnames .= ' has-pause-hover';
		}

		$this->widget->add_render_attribute( 'headlines', [
			'class' => $headlines_classnames,
		] );

		?>
		<div <?php echo $this->widget->get_render_attribute_string( 'headlines' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
			<div class="e-floating-bars__headlines-inner">
			<?php
			foreach ( $headlines as $key => $headline ) {
				$link = $headline['headlines_url'];
				$text = $headline['headlines_text'];
				$icon = $headline['headlines_icon'];

				$headline_classnames = 'e-floating-bars__headline';

				$this->widget->add_render_attribute( 'headline-' . $key, [
					'class' => $headline_classnames,
				] );

				$this->widget->add_link_attributes( 'headline-' . $key, $link );
				?>

				<?php if ( ! empty( $text ) ) : ?>
					<a <?php echo $this->widget->get_render_attribute_string( 'headline-' . $key ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
						<?php if ( ! empty( $icon['value'] ) ) : ?>
							<span class="e-floating-bars__headline-icon"><?php Icons_Manager::render_icon( $icon, [ 'aria-hidden' => 'true' ] ); ?></span>
						<?php endif; ?>
						<span class="e-floating-bars__headline-text"><?php echo esc_html( $text ); ?></span>
					</a>
				<?php endif; ?>
			<?php } ?>
			</div>
			<div class="e-floating-bars__overlay"></div>
		</div>
		<?php
	}

	protected function render_pause_play_buttons(): void {
		$pause_icon = $this->settings['floating_bar_pause_icon'];
		$play_icon = $this->settings['floating_bar_play_icon'];
		$accessible_name = $this->settings['accessible_name'];

		$this->widget->add_render_attribute( 'pause-button', [
			'class' => 'e-floating-bars__pause-button',
			'aria-label' => sprintf(
				/* translators: 1: Accessible name. */
				esc_html__( 'Pause %1$s', 'elementor-pro' ),
				$accessible_name,
			),
		] );

		$this->widget->add_render_attribute( 'play-button', [
			'class' => 'e-floating-bars__play-button',
			'aria-label' => sprintf(
				/* translators: 1: Accessible name. */
				esc_html__( 'Play %1$s', 'elementor-pro' ),
				$accessible_name,
			),
		] );
		?>
		<div class="e-floating-bars__play-pause-controls">
			<button <?php echo $this->widget->get_render_attribute_string( 'pause-button' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>><?php Icons_Manager::render_icon( $pause_icon, [ 'aria-hidden' => 'true' ] ); ?></button>
			<button <?php echo $this->widget->get_render_attribute_string( 'play-button' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>><?php Icons_Manager::render_icon( $play_icon, [ 'aria-hidden' => 'true' ] ); ?></button>
		</div>
		<?php
	}

	public function render(): void {
		$this->build_layout_render_attribute();
		$has_close_button = $this->settings['floating_bar_close_switch'];
		$has_pause_play_buttons = $this->settings['floating_bar_pause_switch'];

		?>
		<div <?php echo $this->widget->get_render_attribute_string( 'layout' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
			<?php
			$this->render_headlines();

			if ( 'yes' == $has_pause_play_buttons || 'yes' == $has_close_button ) {
				?>
				<div class="e-floating-bars__ticker-controls">
					<?php
					if ( 'yes' == $has_pause_play_buttons ) {
						$this->render_pause_play_buttons();
					}
					if ( 'yes' == $has_close_button ) {
						$this->render_close_button();
					}
					?>
					
				</div>
				<?php
			}
			?>
		</div>
		<?php
	}
}
