<?php
use ElementorPro\Modules\ThemeBuilder\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$location_manager = Module::instance()->get_locations_manager();
$location_manager->do_location( 'footer' ); ?>

<?php wp_footer(); ?>

</body>
</html>
