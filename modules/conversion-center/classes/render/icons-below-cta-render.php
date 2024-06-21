<?php

namespace ElementorPro\Modules\ConversionCenter\Classes\Render;

use Elementor\Modules\ConversionCenter\Classes\Render\Render_Base;

class Icons_Below_Cta_Render extends Render_Base {

	public function render(): void {
		$this->build_layout_render_attribute();
		?>
		<div <?php echo $this->widget->get_render_attribute_string( 'layout' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
			<div class="e-link-in-bio__content">

				<?php
				$this->render_identity_image();

				$this->render_bio();

				$this->render_ctas();

				$this->render_icons();

				?>

			</div>
			<div class="e-link-in-bio__bg">
				<div class="e-link-in-bio__bg-overlay"></div>
			</div>
		</div>
		<?php
	}
}
