<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

// TODO: Remove after moving to Route API
?>
<script type="text/template" id="tmpl-elementor-publish">
	<# if ( screens.length > 1 ) { #>
	<div id="elementor-publish__tabs" class="elementor-templates-modal__sidebar">
		<# screens.forEach( function( screen ) { #>
		<div class="elementor-publish__tab" data-screen="{{ screen.name }}">
			<div class="elementor-publish__tab__image">
				<img src="{{ screen.image }}" loading="lazy">
			</div>
			<div class="elementor-publish__tab__content">
				<div class="elementor-publish__tab__title">{{{ screen.title }}}</div>
				<div class="elementor-publish__tab__description">{{{ screen.description }}}</div>
			</div>
		</div>
		<# } ); #>
	</div>
	<# } #>
	<div id="elementor-publish__screen" class="elementor-templates-modal__content"></div>
</script>

<script type="text/template" id="tmpl-elementor-component-publish">
	<# if ( Object.keys( tabs ).length > 1 ) { #>
	<div id="elementor-publish__tabs" class="elementor-templates-modal__sidebar">
		<# jQuery.each( tabs, ( tab, args ) => { #>
		<div class="elementor-component-tab elementor-publish__tab" data-tab="{{ tab }}">
			<div class="elementor-publish__tab__image">
				<img src="{{ args.image }}" loading="lazy">
			</div>
			<div class="elementor-publish__tab__content">
				<div class="elementor-publish__tab__title">{{{ args.title }}}</div>
				<div class="elementor-publish__tab__description">{{{ args.description }}}</div>
			</div>
		</div>
		<# } ); #>
	</div>
	<# } #>
	<div id="elementor-publish__screen" class="elementor-templates-modal__content"></div>
</script>

<script type="text/template" id="tmpl-elementor-theme-builder-conditions-view">
	<div class="elementor-template-library-blank-icon">
		<img src="<?php echo ELEMENTOR_PRO_MODULES_URL; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>theme-builder/assets/images/conditions-tab.svg" loading="lazy">
	</div>
	<div class="elementor-template-library-blank-title">
		{{ sprintf(
			'<?php echo esc_html__( 'Where Do You Want to Display Your %s?', 'elementor-pro' ); ?>',
			elementor.config.document.post_type_title
		) }}
	</div>
	<div class="elementor-template-library-blank-message">
		{{ sprintf(
			'<?php echo esc_html__( 'Set the conditions that determine where your %s is used throughout your site.', 'elementor-pro' ); ?>',
			elementor.config.document.post_type_title
		) }}

		<br />

		<?php echo esc_html__( "For example, choose 'Entire Site' to display the template across your site.", 'elementor-pro' ); ?>
	</div>
	<div id="elementor-theme-builder-conditions">
		<div id="elementor-theme-builder-conditions-controls"></div>
	</div>
</script>

<script type="text/template" id="tmpl-elementor-theme-builder-conditions-repeater-row">
	<div class="elementor-theme-builder-conditions-repeater-row-controls"></div>
	<div class="elementor-repeater-row-tool elementor-repeater-tool-remove">
		<i class="eicon-close" aria-hidden="true"></i>
		<span class="elementor-screen-only"><?php echo esc_html__( 'Remove this item', 'elementor-pro' ); ?></span>
	</div>
</script>

<script type="text/template" id="tmpl-elementor-theme-builder-button-preview">
	<i class="eicon-preview-medium tooltip-target" aria-hidden="true"  data-tooltip="<?php echo esc_attr__( 'Preview Changes', 'elementor-pro' ); ?>"></i>
	<span class="elementor-screen-only">
		<?php echo esc_attr__( 'Preview Changes', 'elementor-pro' ); ?>
	</span>
	<div class="elementor-panel-footer-sub-menu-wrapper">
		<div class="elementor-panel-footer-sub-menu">
			<div onclick="$e.run( 'theme-builder-publish/preview-settings' );" id="elementor-panel-footer-theme-builder-button-preview-settings" class="elementor-panel-footer-sub-menu-item">
				<i class="eicon-wrench" aria-hidden="true"></i>
				<span class="elementor-title"><?php echo esc_html__( 'Settings', 'elementor-pro' ); ?></span>
			</div>
			<div onclick="$e.run( 'editor/documents/preview', { id: elementor.documents.getCurrent().id, force: true } );" id="elementor-panel-footer-theme-builder-button-open-preview" class="elementor-panel-footer-sub-menu-item">
				<i class="eicon-editor-external-link" aria-hidden="true"></i>
				<span class="elementor-title"><?php echo esc_html__( 'Preview', 'elementor-pro' ); ?></span>
			</div>
		</div>
	</div>
</script>
