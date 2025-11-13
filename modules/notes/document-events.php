<?php
namespace ElementorPro\Modules\Notes;

use ElementorPro\Plugin;
use ElementorPro\Modules\Notes\Database\Models\Note;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Document_Events {

	/**
	 * Register all the actions
	 */
	public function register() {
		add_action( 'updated_post_meta', function ( $_, $post_id, $meta_key ) {
			$this->clear_after_post_meta_update( $post_id, $meta_key );
		}, 10, 3 );

		add_action( 'deleted_post_meta', function ( $_, $post_id, $meta_key ) {
			$this->clear_after_post_meta_update( $post_id, $meta_key );
		}, 10, 3 );

		add_action( 'deleted_post', function ( $post_id ) {
			$this->clear_after_post_deleted( $post_id );
		} );

		add_action( 'trashed_post', function ( $post_id ) {
			$this->move_to_trash_after_post_trashed( $post_id );
		} );

		add_action( 'untrashed_post', function ( $post_id ) {
			$this->restore_from_trash_after_post_untrashed( $post_id );
		} );
	}

	/**
	 * Remove all the notes that their elements is not exist in the document anymore.
	 *
	 * @param $post_id
	 * @param $meta_key
	 */
	private function clear_after_post_meta_update( $post_id, $meta_key ) {
		if ( '_elementor_data' !== $meta_key ) {
			return;
		}

		$document = Plugin::elementor()->documents->get( $post_id );

		if ( ! $document || $document->is_revision() ) {
			return;
		}

		$elements_ids = $this->get_elements_ids(
			$document->get_elements_data()
		);

		Note::query()
			->where( 'post_id', '=', $document->get_id() )
			->where_not_in( 'element_id', $elements_ids )
			->delete( true );
	}

	/**
	 * Remove all the notes that related to the post that was deleted.
	 *
	 * @param $post_id
	 */
	private function clear_after_post_deleted( $post_id ) {
		Note::query()
			->where( 'post_id', '=', $post_id )
			->delete( true );
	}

	/**
	 * Move notes to trash when their post trashed.
	 *
	 * @param $post_id
	 */
	private function move_to_trash_after_post_trashed( $post_id ) {
		Note::query()
			->where( 'post_id', '=', $post_id )
			->trash();
	}

	/**
	 * Restore notes when their post untrashed.
	 *
	 * @param $post_id
	 */
	private function restore_from_trash_after_post_untrashed( $post_id ) {
		Note::query()
			->where( 'post_id', '=', $post_id )
			->restore();
	}

	/**
	 * Get recursively all the ids of the elements.
	 *
	 * @param $elements
	 *
	 * @return array
	 */
	private function get_elements_ids( $elements ) {
		if ( empty( $elements ) ) {
			return [];
		}

		return array_reduce( $elements, function ( $ids, $element ) {
			if ( empty( $element['id'] ) ) {
				return $ids;
			}

			return array_merge(
				$ids,
				[ $element['id'] ],
				empty( $element['elements'] ) ? [] : $this->get_elements_ids( $element['elements'] )
			);
		}, [] );
	}
}
