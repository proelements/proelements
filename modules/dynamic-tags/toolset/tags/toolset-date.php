<?php
namespace ElementorPro\Modules\DynamicTags\Toolset\Tags;

use Elementor\Controls_Manager;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Toolset_Date extends Toolset_Base {

	public function get_name() {
		return 'toolset-date';
	}

	public function get_title() {
		return esc_html__( 'Toolset', 'elementor-pro' ) . ' ' . esc_html__( 'Date Field', 'elementor-pro' );
	}

	public function render() {
		// Toolset Embedded version loads its bootstrap later
		if ( ! function_exists( 'types_render_field' ) ) {
			return;
		}

		$key = $this->get_settings( 'key' );
		if ( empty( $key ) ) {
			return;
		}

		list( $field_group, $field_key ) = explode( ':', $key );

		$field = wpcf_admin_fields_get_field( $field_key );
		$value = '';

		if ( $field && ! empty( $field['type'] ) && 'date' === $field['type'] ) {

			$format = $this->get_settings( 'format' );

			$timestamp = types_render_field( $field_key, [
				'output' => 'raw',
				'style' => 'text',
			] );

			if ( empty( $timestamp ) ) {
				return $value;
			}

			if ( 'human' === $format ) {
				/* translators: %s: Human readable date/time. */
				$value = human_time_diff( $timestamp );
			} else {
				switch ( $format ) {
					case 'default':
						$date_format = get_option( 'date_format' );
						break;
					case 'custom':
						$date_format = $this->get_settings( 'custom_format' );
						break;
					default:
						$date_format = $format;
						break;
				}

				$value = date_i18n( $date_format, $timestamp );
			}
		}
		echo wp_kses_post( $value );
	}

	public function get_panel_template_setting_key() {
		return 'key';
	}

	protected function register_controls() {
		parent::register_controls();

		$this->add_control(
			'format',
			[
				'label' => esc_html__( 'Format', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'default' => esc_html__( 'Default', 'elementor-pro' ),
					'F j, Y' => gmdate( 'F j, Y' ),
					'Y-m-d' => gmdate( 'Y-m-d' ),
					'm/d/Y' => gmdate( 'm/d/Y' ),
					'd/m/Y' => gmdate( 'd/m/Y' ),
					'human' => esc_html__( 'Human Readable', 'elementor-pro' ),
					'custom' => esc_html__( 'Custom', 'elementor-pro' ),
				],
				'default' => 'default',
			]
		);

		$this->add_control(
			'custom_format',
			[
				'label' => esc_html__( 'Custom Format', 'elementor-pro' ),
				'default' => '',
				'description' => sprintf( '<a href="https://go.elementor.com/wordpress-date-time/" target="_blank">%s</a>', esc_html__( 'Documentation on date and time formatting', 'elementor-pro' ) ),
				'condition' => [
					'format' => 'custom',
				],
			]
		);
	}

	protected function get_supported_fields() {
		return [ 'date' ];
	}
}
