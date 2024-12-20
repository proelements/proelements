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

	// TODO: Remove this in v3.28 [ED-15983].
	public function is_swiper_upgrade_experiment_state_inactive() {
		$experiment_exists = ! empty( Plugin::elementor()->experiments->get_features( 'e_swiper_latest' ) );

		if ( ! $experiment_exists ) {
			return false;
		}

		$is_experiment_active = Plugin::elementor()->experiments->is_feature_active( 'e_swiper_latest' );

		return ! $is_experiment_active;
	}
}
