<?php
namespace ElementorPro\Modules\DynamicTags\Pods;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Dynamic_Value_Provider {

	// Copied from the Module with some modifications & improvements.
	// TODO: Refactor the Tags to use this class instead of the Module.
	public function get_value( $key ) {
		if ( ! $this->is_valid_field_key( $key ) ) {
			return [];
		}

		list( $pod_name, , $meta_key ) = explode( ':', $key );

		$pod = $this->get_pods_value( $pod_name, get_the_ID() );

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

	/**
	 * Retrieve the Pod value from `Pods` plugin.
	 * Used for testing.
	 *
	 * @param $type
	 * @param $id
	 *
	 * @return bool|\Pods
	 */
	protected function get_pods_value( $type, $id ) {
		return pods( $type, $id );
	}

	private function is_valid_field_key( $key ) {
		$key = trim( $key );

		if ( empty( $key ) ) {
			return false;
		}

		$colon_count = substr_count( $key, ':' );

		// Key structure looks like: `page:699:pods_date_time`.
		return ( 2 === $colon_count );
	}
}
