<?php
namespace ElementorPro\Base;

use Elementor\Element_Base;
use ElementorPro\Modules\QueryControl\Controls\Query;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

trait On_Import_Trait {

	/**
	 * On import update dynamic content (e.g. post and term IDs).
	 *
	 * @since 3.8.0
	 *
	 * @param array              $element_config The config of the passed element.
	 * @param array              $data           The data that requires updating/replacement when imported.
	 * @param array|Element_Base $controls       The available controls.
	 *
	 * @return array
	 */
	public static function on_import_update_dynamic_content( array $element_config, array $data, $controls = null ) : array {
		if ( $controls instanceof Element_Base ) {
			$element_config = $controls->on_import_update_dynamic_content( $element_config, $data );
			$controls = $controls->get_controls();
		}

		if ( ! is_array( $controls ) ) {
			return $element_config;
		}

		$available_control_types = Plugin::elementor()->controls_manager->get_controls();

		foreach ( $controls as $control ) {
			$element_config = static::on_import_update_control( $element_config, $data, $control, $available_control_types );
		}

		return $element_config;
	}

	/**
	 * Check if a control requires updating, and do so if needed.
	 *
	 * @param array $element_config
	 * @param array $data
	 * @param array $control
	 * @param array $available_control_types
	 *
	 * @return array
	 */
	private static function on_import_update_control( array $element_config, array $data, array $control, array $available_control_types ) : array {
		$control_value = $element_config['settings'][ $control['name'] ] ?? null;

		if ( empty( $control_value ) || ! $available_control_types[ $control['type'] ] instanceof Query ) {
			return $element_config;
		}

		$required_data = static::on_import_get_required_data( $data, $control['name'] );

		if ( empty( $required_data ) ) {
			return $element_config;
		}

		if ( is_array( $control_value ) ) {
			foreach ( $control_value as $value ) {
				$element_config = static::on_import_update_control_value( $element_config, $required_data, $control['name'], $value );
			}
		} else {
			$element_config = static::on_import_update_control_value( $element_config, $required_data, $control['name'], $control_value );
		}

		return $element_config;
	}

	/**
	 * Returns the data type that is required for updating.
	 *
	 * @param array $data
	 * @param string $control_name
	 *
	 * @return array
	 */
	private static function on_import_get_required_data( array $data, string $control_name ) : array {
		if ( strpos( $control_name, 'term_ids' ) !== false ) {
			return $data['term_ids'];
		}

		if ( static::on_import_check_post_type( $control_name ) ) {
			return $data['post_ids'];
		}

		return [];
	}

	/**
	 * Are the control values post IDs?
	 *
	 * @param string $control_name
	 *
	 * @return bool
	 */
	private static function on_import_check_post_type( string $control_name ) : bool {
		return strpos( $control_name, 'post_ids' ) !== false || in_array( $control_name, [ 'post_id', 'template_id', 'popup' ] );
	}

	/**
	 * Update the value for the dynamic control.
	 *
	 * @param array $element_config
	 * @param array $data
	 * @param string $control_name
	 * @param $current_value
	 *
	 * @return array
	 */
	private static function on_import_update_control_value( array $element_config, array $data, string $control_name, $current_value ) : array {
		if ( ! isset( $data[ $current_value ] ) ) {
			return $element_config;
		}

		if ( is_array( $element_config['settings'][ $control_name ] ) ) {
			$element_config['settings'][ $control_name ] = array_map( function( $item ) use ( $data, $current_value ) {
				return $item === $current_value ? $data[ $current_value ] : $item;
			}, $element_config['settings'][ $control_name ] );
		} else {
			$element_config['settings'][ $control_name ] = $data[ $current_value ];
		}

		return $element_config;
	}
}
