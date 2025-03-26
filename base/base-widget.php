<?php
namespace ElementorPro\Base;

use Elementor\Widget_Base;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

abstract class Base_Widget extends Widget_Base {

	use Base_Widget_Trait;
	use On_Import_Trait;

}
