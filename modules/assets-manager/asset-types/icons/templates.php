<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
?>
<script type="text/template" id="elementor-custom-icons-template-footer">
	<div class="elementor-icon-set-footer"><?php echo __( 'Created on', 'elementor-pro' ); ?>: {{day}}/{{mm}}/{{year}}, {{hour}}:{{minute}}</div>
</script>

<script type="text/template" id="elementor-custom-icons-template-header">
	<div class="elementor-icon-set-header">
		<div><span class="elementor-icon-set-header-meta"><?php echo __( 'Name', 'elementor-pro' ); ?>: </span><span class="elementor-icon-set-header-meta-value">{{name}}</span></div>
		<div><span class="elementor-icon-set-header-meta"><?php echo __( 'CSS Prefix', 'elementor-pro' ); ?>: </span><span class="elementor-icon-set-header-meta-value">{{prefix}}</span></div>
		<div><span class="elementor-icon-set-header-meta"><?php echo __( 'Icons Count', 'elementor-pro' ); ?>: </span><span class="elementor-icon-set-header-meta-value">{{count}}</span></div>
		<div class="elementor-icon-set-header-meta-remove"><div class="remove"><i class="eicon-trash"></i> <?php echo __( 'Remove', 'elementor-pro' ); ?></div></div>
	</div>
</script>

<script type="text/template" id="elementor-custom-icons-template-duplicate-prefix">
	<div class="elementor-icon-set-duplicate-prefix"><?php echo __( 'The Icon Set prefix already exists in your site. In order to avoid conflicts we recommend to use a unique prefix per Icon Set.', 'elementor-pro' ); ?></div>
</script>
