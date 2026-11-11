<?php
namespace ElementorPro\Modules\Mcp\Abilities\Utils;

use ElementorPro\Modules\ThemeBuilder\Classes\Conditions_Manager;
use ElementorPro\Modules\ThemeBuilder\Documents\Theme_Document;
use ElementorPro\Modules\ThemeBuilder\Module as ThemeBuilderModule;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Template_Conditions_Writer {

	public const DEFAULT_CONDITIONS = [ 'include/general' ];

	public const CONDITION_TYPES = [ 'include', 'exclude' ];

	public function write( Theme_Document $document, int $post_id, $raw_conditions ) {
		$conditions = $this->normalize( $raw_conditions );
		$conditions_manager = $this->get_conditions_manager();

		$error = $this->find_invalid_condition( $conditions_manager, $conditions );

		if ( $error ) {
			return $error;
		}

		$existing = (array) $document->get_main_meta( '_elementor_conditions' );

		if ( $existing !== $conditions ) {
			$parsed = array_map(
				fn ( string $condition ) => $this->parse( $condition ),
				$conditions
			);

			$is_saved = $conditions_manager->save_conditions( $post_id, $parsed );

			if ( false === $is_saved ) {
				return new \WP_Error(
					'save_failed',
					__( 'Failed to save conditions.', 'elementor-pro' ),
					[ 'status' => \WP_Http::INTERNAL_SERVER_ERROR ]
				);
			}
		}

		$conditions_manager->clear_location_cache();

		return [
			'conditions' => $conditions,
			'conflicts' => $this->collect_conflicts( $conditions_manager, $document, $post_id, $conditions ),
		];
	}

	private function normalize( $raw ): array {
		if ( ! is_array( $raw ) || empty( $raw ) ) {
			return self::DEFAULT_CONDITIONS;
		}

		$normalized = [];
		foreach ( $raw as $entry ) {
			if ( ! is_string( $entry ) ) {
				continue;
			}
			$trimmed = trim( $entry, '/ ' );
			if ( '' !== $trimmed ) {
				$normalized[] = $trimmed;
			}
		}

		if ( empty( $normalized ) ) {
			return self::DEFAULT_CONDITIONS;
		}

		return $normalized;
	}

	public function validate( $raw_conditions ): ?\WP_Error {
		return $this->find_invalid_condition( $this->get_conditions_manager(), $this->normalize( $raw_conditions ) );
	}

	private function get_conditions_manager(): Conditions_Manager {
		return ThemeBuilderModule::instance()->get_conditions_manager();
	}

	private function find_invalid_condition( Conditions_Manager $conditions_manager, array $conditions ): ?\WP_Error {
		foreach ( $conditions as $condition ) {
			$error = $this->validate_condition( $conditions_manager, $condition );

			if ( $error ) {
				return $error;
			}
		}

		return null;
	}

	private function validate_condition( Conditions_Manager $conditions_manager, string $condition ): ?\WP_Error {
		[ 'type' => $type, 'name' => $name, 'sub_name' => $sub_name ] = $this->parse( $condition );

		if ( ! in_array( $type, self::CONDITION_TYPES, true ) ) {
			return $this->invalid_condition(
				sprintf(
					/* translators: 1: submitted condition type, 2: full condition string, 3: comma-separated allowed types. */
					__( 'Unknown condition type "%1$s" in "%2$s". Allowed types: %3$s.', 'elementor-pro' ),
					$type,
					$condition,
					implode( ', ', self::CONDITION_TYPES )
				)
			);
		}

		if ( '' === $name ) {
			return $this->invalid_condition(
				sprintf(
					/* translators: %s: full condition string. */
					__( 'Missing condition name in "%s". Expected "type/name[/sub_name[/sub_id]]".', 'elementor-pro' ),
					$condition
				)
			);
		}

		if ( ! $conditions_manager->get_condition( $name ) ) {
			return $this->invalid_condition(
				sprintf(
					/* translators: 1: unregistered condition name, 2: full condition string. */
					__( 'Unknown condition "%1$s" in "%2$s".', 'elementor-pro' ),
					$name,
					$condition
				)
			);
		}

		$targets_all_of_name = '' === $sub_name;

		if ( ! $targets_all_of_name && ! $this->is_selectable_sub_name( $conditions_manager, $name, $sub_name ) ) {
			return $this->invalid_condition(
				sprintf(
					/* translators: 1: submitted sub-condition, 2: parent condition name, 3: full condition string. */
					__( 'Unknown sub-condition "%1$s" for "%2$s" in "%3$s".', 'elementor-pro' ),
					$sub_name,
					$name,
					$condition
				)
			);
		}

		return null;
	}

	private function is_selectable_sub_name( Conditions_Manager $conditions_manager, string $name, string $sub_name ): bool {
		$children = $this->get_sub_condition_names( $conditions_manager, $name );
		$grandchildren = array_map(
			fn ( string $child ) => $this->get_sub_condition_names( $conditions_manager, $child ),
			$children
		);

		return in_array( $sub_name, array_merge( $children, ...$grandchildren ), true );
	}

	private function get_sub_condition_names( Conditions_Manager $conditions_manager, string $name ): array {
		$condition = $conditions_manager->get_condition( $name );

		return $condition ? $condition->get_sub_conditions() : [];
	}

	private function invalid_condition( string $message ): \WP_Error {
		return new \WP_Error( 'invalid_condition', $message, [ 'status' => \WP_Http::BAD_REQUEST ] );
	}

	private function parse( string $condition ): array {
		[ $type, $name, $sub_name, $sub_id ] = array_pad( explode( '/', $condition ), 4, '' );

		return compact( 'type', 'name', 'sub_name', 'sub_id' );
	}

	private function collect_conflicts( Conditions_Manager $conditions_manager, Theme_Document $document, int $post_id, array $conditions ): array {
		$location = $document->get_location();
		$conflicts = [];

		foreach ( $conditions as $condition_string ) {
			$found = $conditions_manager->get_conditions_conflicts_by_location( $condition_string, $location, $post_id );
			if ( $found ) {
				$conflicts[] = [
					'condition' => $condition_string,
					'templates' => array_values( $found ),
				];
			}
		}

		return $conflicts;
	}
}
