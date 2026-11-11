<?php
namespace ElementorPro\Modules\Mcp\Abilities\Utils;

use Elementor\Base_Data_Control;
use Elementor\Controls_Manager;
use Elementor\Controls_Stack;
use ElementorPro\Modules\Popup\DisplaySettings\Timing;
use ElementorPro\Modules\Popup\DisplaySettings\Triggers;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Popup_Display_Settings_Schema {

	public const SWITCHER_ON = 'yes';
	public const SWITCHER_OFF = '';

	private const GROUP_HEADING_SUFFIX = '_heading';
	private const DATE_TIME_FORMAT = 'Y-m-d H:i';

	public function get_input_schema(): array {
		$schema = [];

		foreach ( $this->create_stacks() as $type => $stack ) {
			$schema[ $type ] = [
				'type' => 'object',
				'additionalProperties' => false,
				'properties' => $this->get_properties_schema( $stack ),
			];
		}

		return $schema;
	}

	public function get_writable_controls( Controls_Stack $stack ): array {
		$controls_manager = Plugin::elementor()->controls_manager;

		return array_filter(
			$stack->get_controls(),
			fn ( array $control ) => Controls_Manager::HIDDEN !== $control['type']
				&& $controls_manager->get_control( $control['type'] ) instanceof Base_Data_Control
		);
	}

	private function create_stacks(): array {
		$data = [
			'id' => 0,
			'settings' => [],
		];

		return [
			'triggers' => new Triggers( $data ),
			'timing' => new Timing( $data ),
		];
	}

	private function get_properties_schema( Controls_Stack $stack ): array {
		$all_controls = $stack->get_controls();
		$properties = [];

		foreach ( $this->get_writable_controls( $stack ) as $name => $control ) {
			$properties[ $name ] = array_merge(
				$this->get_value_schema( $control ),
				[ 'description' => $this->get_field_description( $name, $control, $all_controls ) ]
			);
		}

		return $properties;
	}

	private function get_value_schema( array $control ): array {
		switch ( $control['type'] ) {
			case Controls_Manager::SWITCHER:
				return [
					'type' => [ 'string', 'boolean' ],
					'enum' => [ self::SWITCHER_ON, self::SWITCHER_OFF, true, false ],
				];

			case Controls_Manager::NUMBER:
				return $this->get_number_schema( $control );

			case Controls_Manager::SELECT:
			case Controls_Manager::SELECT2:
				return $this->get_options_schema( $control );

			case Controls_Manager::TEXT:
			case Controls_Manager::DATE_TIME:
				return [ 'type' => 'string' ];

			default:
				return [];
		}
	}

	private function get_number_schema( array $control ): array {
		$schema = [ 'type' => 'number' ];

		if ( isset( $control['min'] ) ) {
			$schema['minimum'] = $control['min'];
		}

		if ( isset( $control['max'] ) ) {
			$schema['maximum'] = $control['max'];
		}

		return $schema;
	}

	private function get_options_schema( array $control ): array {
		$value_schema = [ 'type' => 'string' ];
		$options = array_map( 'strval', array_keys( $control['options'] ?? [] ) );

		if ( ! empty( $options ) ) {
			$value_schema['enum'] = $options;
		}

		if ( empty( $control['multiple'] ) ) {
			return $value_schema;
		}

		return [
			'type' => 'array',
			'items' => $value_schema,
		];
	}

	private function get_field_description( string $name, array $control, array $all_controls ): string {
		$group = $this->find_group( $control, $all_controls );

		if ( null === $group ) {
			return sprintf(
				'Group toggle for "%s". Set to "yes" (or true) to enable; its options are the fields prefixed with "%s_".',
				$this->get_group_title( $name, $all_controls ),
				$name
			);
		}

		$parts = [ $this->get_group_title( $group, $all_controls ) ];

		if ( ! empty( $control['label'] ) ) {
			$parts[] = $control['label'];
		}

		$description = implode( ': ', $parts ) . '. Requires ' . $this->format_requirements( $control['condition'] ) . '.';

		if ( Controls_Manager::DATE_TIME === $control['type'] ) {
			$description .= ' Format: "' . self::DATE_TIME_FORMAT . '".';
		}

		return $description;
	}

	private function find_group( array $control, array $all_controls ): ?string {
		foreach ( array_keys( $control['condition'] ?? [] ) as $condition_key ) {
			if ( isset( $all_controls[ $condition_key . self::GROUP_HEADING_SUFFIX ] ) ) {
				return $condition_key;
			}
		}

		return null;
	}

	private function get_group_title( string $group, array $all_controls ): string {
		return (string) ( $all_controls[ $group . self::GROUP_HEADING_SUFFIX ]['label'] ?? $group );
	}

	private function format_requirements( array $condition ): string {
		$requirements = [];

		foreach ( $condition as $key => $value ) {
			$requirements[] = $key . ' = ' . wp_json_encode( $value );
		}

		return implode( ' and ', $requirements );
	}
}
