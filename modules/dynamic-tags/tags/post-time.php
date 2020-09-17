<?php
namespace ElementorPro\Modules\DynamicTags\Tags;

use Elementor\Controls_Manager;
use ElementorPro\Modules\DynamicTags\Tags\Base\Tag;
use ElementorPro\Modules\DynamicTags\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Post_Time extends Tag {
	public function get_name() {
		return 'post-time';
	}

	public function get_title() {
		return __( 'Post Time', 'elementor-pro' );
	}

	public function get_group() {
		return Module::POST_GROUP;
	}

	public function get_categories() {
		return [ Module::TEXT_CATEGORY ];
	}

	protected function _register_controls() {
		$this->add_control(
			'type',
			[
				'label' => __( 'Type', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'post_date_gmt' => __( 'Post Published', 'elementor-pro' ),
					'post_modified_gmt' => __( 'Post Modified', 'elementor-pro' ),
				],
				'default' => 'post_date_gmt',
			]
		);

		$this->add_control(
			'format',
			[
				'label' => __( 'Format', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'default' => __( 'Default', 'elementor-pro' ),
					'g:i a' => gmdate( 'g:i a' ),
					'g:i A' => gmdate( 'g:i A' ),
					'H:i' => gmdate( 'H:i' ),
					'custom' => __( 'Custom', 'elementor-pro' ),
				],
				'default' => 'default',
			]
		);

		$this->add_control(
			'custom_format',
			[
				'label' => __( 'Custom Format', 'elementor-pro' ),
				'default' => '',
				'description' => sprintf( '<a href="https://go.elementor.com/wordpress-date-time/" target="_blank">%s</a>', __( 'Documentation on date and time formatting', 'elementor-pro' ) ),
				'condition' => [
					'format' => 'custom',
				],
			]
		);
	}

	public function render() {
		$time_type = $this->get_settings( 'type' );
		$format = $this->get_settings( 'format' );

		switch ( $format ) {
			case 'default':
				$date_format = '';
				break;
			case 'custom':
				$date_format = $this->get_settings( 'custom_format' );
				break;
			default:
				$date_format = $format;
				break;
		}

		if ( 'post_date_gmt' === $time_type ) {
			$value = get_the_time( $date_format );
		} else {
			$value = get_the_modified_time( $date_format );
		}

		echo wp_kses_post( $value );
	}
}
