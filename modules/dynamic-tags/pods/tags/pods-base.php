<?php
namespace ElementorPro\Modules\DynamicTags\Pods\Tags;

use Elementor\Controls_Manager;
use ElementorPro\Modules\DynamicTags\Tags\Base\Tag;
use ElementorPro\Modules\DynamicTags\Pods\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

abstract class Pods_Base extends Tag {

	public function get_group() {
		return Module::PODS_GROUP;
	}

	public function get_field() {
		$key = $this->get_settings( 'key' );
		if ( empty( $key ) ) {
			return false;
		}

		list( $pod_name, $pod_id, $meta_key ) = explode( ':', $key );
		/**
		 * @var \Pods
		 */
		$pod = pods( $pod_name, get_the_ID() );

		if ( false === $pod ) {
			return [];
		}

		return [
			'field' => $pod->fields[ $meta_key ],
			'value' => $pod->field( $meta_key ),
			'display' => $pod->display( $meta_key ),
			'pod' => $pod,
			'key' => $meta_key,
		];
	}

	public function get_categories() {
		return [
			Module::TEXT_CATEGORY,
			Module::POST_META_CATEGORY,
		];
	}

	protected function _register_controls() {
		$this->add_control(
			'key',
			[
				'label' => __( 'Key', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'groups' => Module::get_control_options( $this->get_supported_fields() ),
			]
		);
	}

	protected function get_supported_fields() {
		return [];
	}
}
