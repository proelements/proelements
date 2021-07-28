<?php
namespace ElementorPro\Base;

use Elementor\Core\Base\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

abstract class Module_Base extends Module {
	// This class was needed in the past and not being removed for future functionalities that might be needed for all classes that still extend it.
}
