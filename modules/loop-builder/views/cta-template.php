<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
?>

<script type="text/template" id="tmpl-loop-grid-cta">
	<div class="e-loop-empty-view__box e-loop-empty-view__box--active">
		<div class="e-loop-empty-view__box-inner">
			<img src="<?php echo ELEMENTOR_ASSETS_URL . 'images/information.svg'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>" />
			<div class="e-loop-empty-view__box-title">
				<?php echo esc_html__( 'Loop Grid starts with a template.', 'elementor-pro' ); ?>
			</div>
			<div class="e-loop-empty-view__box-description">
				<?php
				echo esc_html__( 'Either choose an existing template or create a new one and use it as the main item for your loop.', 'elementor-pro' );
				?>
			</div>
			<a href="#" class="e-loop-empty-view__box-cta">
				<?php echo esc_html__( 'Create a template', 'elementor-pro' ); ?>
			</a>
		</div>
	</div>
	<div class="e-loop-empty-view__box">
		<div class="e-loop-empty-view__box-inner"></div>
	</div>
	<div class="e-loop-empty-view__box">
		<div class="e-loop-empty-view__box-inner"></div>
	</div>
</script>
