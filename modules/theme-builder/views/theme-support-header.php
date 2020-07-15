<?php
use ElementorPro\Modules\ThemeBuilder\Module;
use Elementor\Utils;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$location_manager = Module::instance()->get_locations_manager();
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<?php echo Utils::get_meta_viewport( 'theme-builder' ); ?>
	<?php if ( ! current_theme_supports( 'title-tag' ) ) : ?>
		<title>
			<?php echo wp_get_document_title(); ?>
		</title>
	<?php endif; ?>
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<?php $location_manager->do_location( 'header' ); ?>
