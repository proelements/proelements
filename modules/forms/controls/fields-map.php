<?php
namespace ElementorPro\Modules\Forms\Controls;

use Elementor\Control_Repeater;
use Elementor\Controls_Manager;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Class Fields_Map
 * @package ElementorPro\Modules\Forms\Controls
 *
 * each item needs the following properties:
 *   remote_id,
 *   remote_label
 *   remote_type
 *   remote_required
 *   local_id
 */
class Fields_Map extends Control_Repeater {

	const CONTROL_TYPE = 'fields_map';

	public function get_type() {
		return self::CONTROL_TYPE;
	}

	protected function get_default_settings() {
		return array_merge( parent::get_default_settings(), [
			'render_type' => 'none',
			'fields' => [
				[
					'name' => 'remote_id',
					'type' => Controls_Manager::HIDDEN,
				],
				[
					'name' => 'local_id',
					'type' => Controls_Manager::SELECT,
				],
			],
		] );
	}
}
