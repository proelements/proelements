<?php
namespace ElementorPro\Modules\DynamicTags\Tags;

use Elementor\Controls_Manager;
use ElementorPro\Modules\DynamicTags\Tags\Base\Tag;
use ElementorPro\Modules\DynamicTags\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class User_Info extends Tag {

	public function get_name() {
		return 'user-info';
	}

	public function get_title() {
		return __( 'User Info', 'elementor-pro' );
	}

	public function get_group() {
		return Module::SITE_GROUP;
	}

	public function get_categories() {
		return [ Module::TEXT_CATEGORY ];
	}

	public function render() {
		$type = $this->get_settings( 'type' );
		$user = wp_get_current_user();
		if ( empty( $type ) || 0 === $user->ID ) {
			return;
		}

		$value = '';
		switch ( $type ) {
			case 'login':
			case 'email':
			case 'url':
			case 'nicename':
				$field = 'user_' . $type;
				$value = isset( $user->$field ) ? $user->$field : '';
				break;
			case 'id':
				$value = $user->ID;
				break;
			case 'description':
			case 'first_name':
			case 'last_name':
			case 'display_name':
				$value = isset( $user->$type ) ? $user->$type : '';
				break;
			case 'meta':
				$key = $this->get_settings( 'meta_key' );
				if ( ! empty( $key ) ) {
					$value = get_user_meta( $user->ID, $key, true );
				}
				break;
		}

		echo wp_kses_post( $value );
	}

	public function get_panel_template_setting_key() {
		return 'type';
	}

	protected function register_controls() {
		$this->add_control(
			'type',
			[
				'label' => __( 'Field', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'' => __( 'Choose', 'elementor-pro' ),
					'id' => __( 'ID', 'elementor-pro' ),
					'display_name' => __( 'Display Name', 'elementor-pro' ),
					'login' => __( 'Username', 'elementor-pro' ),
					'first_name' => __( 'First Name', 'elementor-pro' ),
					'last_name' => __( 'Last Name', 'elementor-pro' ),
					'description' => __( 'Bio', 'elementor-pro' ),
					'email' => __( 'Email', 'elementor-pro' ),
					'url' => __( 'Website', 'elementor-pro' ),
					'meta' => __( 'User Meta', 'elementor-pro' ),
				],
			]
		);

		$this->add_control(
			'meta_key',
			[
				'label' => __( 'Meta Key', 'elementor-pro' ),
				'condition' => [
					'type' => 'meta',
				],
			]
		);
	}
}
