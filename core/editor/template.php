<?php

use ElementorPro\License\Admin as LicenseAdmin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
?>
<script type="text/template" id="tmpl-elementor-pro-template-library-activate-license-button">
	<a class="elementor-template-library-template-action elementor-go-pro" href="<?php echo Elementor\Utils::get_pro_link( 'https://elementor.com/pro/?utm_source=wp-plugins&utm_campaign=gopro&utm_medium=wp-dash' ); ?>" target="_blank">
		<i class="eicon-external-link-square"></i>
		<span class="elementor-button-title"><?php _e( ' Get Elementor Pro', 'elementor-pro' );?></span>
	</a>
</script>
