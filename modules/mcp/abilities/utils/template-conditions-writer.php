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

	public function write( Theme_Document $document, int $post_id, $raw_conditions ) {
		$conditions = $this->normalize( $raw_conditions );
		$conditions_manager = ThemeBuilderModule::instance()->get_conditions_manager();

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
