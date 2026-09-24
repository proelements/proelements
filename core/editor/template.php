<?php

use ElementorPro\License\Admin as LicenseAdmin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
?>
<script type="text/template" id="tmpl-elementor-pro-template-library-activate-license-button">
	<a class="elementor-template-library-template-action elementor-button go-pro" href="<?php
	echo esc_url( LicenseAdmin::get_url() ); ?>" target="_blank" rel="noopener noreferrer">
		<i class="eicon-external-link-square"></i>
		<span class="elementor-button-title"><?php echo esc_html__( 'Activate License', 'elementor-pro' ); ?></span>
	</a>
</script>
