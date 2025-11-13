<?php
namespace ElementorPro\Modules\Forms\Submissions\Database\Repositories;

use Elementor\Core\Base\Base_Object;
use Elementor\Core\Utils\Collection;
use ElementorPro\Modules\Forms\Submissions\Database\Entities\Form_Snapshot;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Form_Snapshot_Repository extends Base_Object {
	// There are two underscore prefix to avoid duplicate the meta when the post will be published.
	const POST_META_KEY = '__elementor_forms_snapshot';

	/**
	 * @var static
	 */
	private static $instance = null;

	/**
	 * @var Collection
	 */
	private $cache;

	/**
	 * @return static
	 */
	public static function instance() {
		if ( null === static::$instance ) {
			static::$instance = new static();
		}

		return static::$instance;
	}

	/**
	 * Get specific form.
	 *
	 * @param      $post_id
	 * @param      $form_id
	 * @param bool $from_cache
	 *
	 * @return Form_Snapshot|null
	 */
	public function find( $post_id, $form_id, $from_cache = true ) {
		$key = Form_Snapshot::generate_key( $post_id, $form_id );

		if ( $from_cache && $this->cache->get( $key, false ) ) {
			return $this->cache->get( $key, false );
		}

		return $this->save_in_cache(
			$this->get_post_forms( $post_id )
		)->get( $key );
	}

	/**
	 * Get all the forms.
	 *
	 * @return Collection
	 */
	public function all() {
		global $wpdb;

		$result = $wpdb->get_results(
			$wpdb->prepare(
				"SELECT pm.meta_value, pm.post_id FROM {$wpdb->postmeta} pm WHERE pm.meta_key = %s",
				static::POST_META_KEY
			)
		);

		if ( ! $result ) {
			return new Collection( [] );
		}

		foreach ( $result as $post_forms ) {
			$this->save_in_cache(
				$this->parse_meta( $post_forms->meta_value, $post_forms->post_id )
			);
		}

		return $this->cache;
	}

	/**
	 * @param $post_id
	 * @param $form_id
	 * @param $data
	 *
	 * @return Form_Snapshot
	 */
	public function create_or_update( $post_id, $form_id, $data ) {
		$forms = $this->get_post_forms( $post_id )
			->filter( function ( Form_Snapshot $form ) use ( $form_id ) {
				return $form->id !== $form_id;
			} );

		$form = new Form_Snapshot( $post_id, $data + [ 'id' => $form_id ] );
		$forms[] = $form;

		update_post_meta(
			$post_id,
			self::POST_META_KEY,
			// Use `wp_slash` in order to avoid the unslashing during the `update_post_meta`
			wp_slash( wp_json_encode( $forms->values() ) )
		);

		$this->save_in_cache( $forms );

		return $form;
	}

	public function clear_cache() {
		$this->cache = new Collection( [] );
	}

	/**
	 * @param $post_id
	 *
	 * @return Collection
	 */
	private function get_post_forms( $post_id ) {
		$meta_value = get_post_meta( $post_id, self::POST_META_KEY, true );

		if ( ! $meta_value ) {
			return new Collection( [] );
		}

		return $this->parse_meta( $meta_value, $post_id );
	}

	/**
	 * Receive a meta value and transform it to an array of Form objects.
	 *
	 * @param $meta_value
	 * @param $post_id
	 *
	 * @return Collection
	 */
	private function parse_meta( $meta_value, $post_id ) {
		return ( new Collection( json_decode( $meta_value, true ) ) )
			->map( function ( $item ) use ( $post_id ) {
				return new Form_Snapshot( $post_id, $item );
			} );
	}

	/**
	 * @param $forms
	 *
	 * @return Collection
	 */
	private function save_in_cache( Collection $forms ) {
		/** @var Form_Snapshot $form */
		foreach ( $forms as $form ) {
			$this->cache[ $form->get_key() ] = $form;
		}

		return $this->cache;
	}

	/**
	 * Forms_Repository constructor.
	 */
	public function __construct() {
		$this->cache = new Collection( [] );
	}
}
