<?php
namespace ElementorPro\Modules\DynamicTags\Tags;

use Elementor\Controls_Manager;
use ElementorPro\Modules\DynamicTags\Tags\Base\Tag;
use ElementorPro\Modules\DynamicTags\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Current_Date_Time extends Tag {
	public function get_name() {
		return 'current-date-time';
	}

	public function get_title() {
		return __( 'Current Date Time', 'elementor-pro' );
	}

	public function get_group() {
		return Module::SITE_GROUP;
	}

	public function get_categories() {
		return [ Module::TEXT_CATEGORY ];
	}

	protected function register_controls() {
		$this->add_control(
			'date_format',
			[
				'label' => __( 'Date Format', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'default' => __( 'Default', 'elementor-pro' ),
					'' => __( 'None', 'elementor-pro' ),
					'F j, Y' => gmdate( 'F j, Y' ),
					'Y-m-d' => gmdate( 'Y-m-d' ),
					'm/d/Y' => gmdate( 'm/d/Y' ),
					'd/m/Y' => gmdate( 'd/m/Y' ),
					'custom' => __( 'Custom', 'elementor-pro' ),
				],
				'default' => 'default',
			]
		);

		$this->add_control(
			'time_format',
			[
				'label' => __( 'Time Format', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'default' => __( 'Default', 'elementor-pro' ),
					'' => __( 'None', 'elementor-pro' ),
					'g:i a' => gmdate( 'g:i a' ),
					'g:i A' => gmdate( 'g:i A' ),
					'H:i' => gmdate( 'H:i' ),
				],
				'default' => 'default',
				'condition' => [
					'date_format!' => 'custom',
				],
			]
		);

		$this->add_control(
			'custom_format',
			[
				'label' => __( 'Custom Format', 'elementor-pro' ),
				'default' => get_option( 'date_format' ) . ' ' . get_option( 'time_format' ),
				'description' => sprintf( '<a href="https://go.elementor.com/wordpress-date-time/" target="_blank">%s</a>', __( 'Documentation on date and time formatting', 'elementor-pro' ) ),
				'condition' => [
					'date_format' => 'custom',
				],
			]
		);
	}

	public function render() {
		$settings = $this->get_settings();

		if ( 'custom' === $settings['date_format'] ) {
			$format = $settings['custom_format'];
		} else {
			$date_format = $settings['date_format'];
			$time_format = $settings['time_format'];
			$format = '';

			if ( 'default' === $date_format ) {
				$date_format = get_option( 'date_format' );
			}

			if ( 'default' === $time_format ) {
				$time_format = get_option( 'time_format' );
			}

			if ( $date_format ) {
				$format = $date_format;
				$has_date = true;
			} else {
				$has_date = false;
			}

			if ( $time_format ) {
				if ( $has_date ) {
					$format .= ' ';
				}
				$format .= $time_format;
			}
		}

		$value = date_i18n( $format );

		echo wp_kses_post( $value );
	}
}
