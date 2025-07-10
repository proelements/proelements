<?php

namespace ElementorPro\Modules\Notes;

use Elementor\Core\Base\Document;
use ElementorPro\Core\Database\Join_Clause;
use ElementorPro\Core\Database\Query_Builder;
use ElementorPro\Core\Utils\Collection;
use ElementorPro\Modules\Notes\Database\Models\Note;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Usage {

	const THREADS = 'threads';
	const REPLIES = 'replies';

	/**
	 * Register hooks.
	 *
	 * @return void
	 */
	public function register() {
		add_filter( 'elementor/tracker/send_tracking_data_params', function ( array $params ) {
			$params['usages']['notes_feature'] = $this->get_usage_data();

			return $params;
		} );
	}

	/**
	 * Get the Notes feature usage data.
	 *
	 * @return array
	 */
	private function get_usage_data() {
		return [
			'threads' => $this->get_threads_usage(),
			'replies' => $this->get_replies_usage(),
			'mentions' => $this->get_mentions_usage(),
			'first_interaction' => $this->get_first_interaction(),
			'last_interaction' => $this->get_last_interaction(),
		];
	}

	/**
	 * Get the Threads' usage data.
	 *
	 * @return array
	 */
	private function get_threads_usage() {
		return [
			'total' => Note::query()
				->only_threads()
				->count(),

			'resolved' => Note::query()
				->only_threads()
				->where( 'is_resolved', '=', true )
				->count(),

			'trashed' => Note::query()
				->only_threads()
				->only_trashed()
				->count(),

			'users_used' => $this->get_notes_users_used( static::THREADS ),

			'document_type' => $this->get_notes_document_types( static::THREADS ),
		];
	}

	/**
	 * Get the replies' usage data.
	 *
	 * @return array
	 */
	private function get_replies_usage() {
		return [
			'total' => Note::query()
				->only_replies()
				->count(),

			'trashed' => Note::query()
				->only_replies()
				->only_trashed()
				->count(),

			'replied_threads' => (int) Note::query()
				->disable_model_initiation()
				->only_replies()
				->select_raw( [ 'COUNT(DISTINCT `parent_id`) AS `count`' ] )
				->first()['count'],

			'users_used' => $this->get_notes_users_used( static::REPLIES ),

			'document_type' => $this->get_notes_document_types( static::REPLIES ),
		];
	}

	/**
	 * Get the mentions' usage data.
	 *
	 * @return array
	 */
	private function get_mentions_usage() {
		return [
			'total' => ( new Query_Builder() )
				->table( Module::TABLE_NOTES_USERS_RELATIONS, 'e_notes_relations' )
				->join( function ( Join_Clause $j ) {
					$j->table( Module::TABLE_NOTES, 'e_notes' )
						->on_column( 'e_notes.id', '=', 'e_notes_relations.note_id' );
				} )
				->where( 'type', '=', Note::USER_RELATION_MENTION )
				->where( 'e_notes.status', '!=', Note::STATUS_TRASH )
				->count(),

			'users_used' => $this->get_mentions_users_used(),

			'document_type' => ( new Query_Builder() )
				->select( [ 'type' => 'postmeta.meta_value' ] )
				->add_count_select( '*', 'count' )
				->from( Module::TABLE_NOTES_USERS_RELATIONS, 'e_notes_relations' )
				->join( function ( Join_Clause $j ) {
					$j->table( Module::TABLE_NOTES, 'e_notes' )
						->on_column( 'e_notes.id', '=', 'e_notes_relations.note_id' );
				} )
				->join( function ( Join_Clause $j ) {
					$j->table( 'posts' )
						->on_column( 'posts.ID', '=', 'e_notes.post_id' );
				} )
				->join( function ( Join_Clause $j ) {
					$j->table( 'postmeta' )
						->on_column( 'posts.ID', '=', 'postmeta.post_id' )
						->on( 'postmeta.meta_key', '=', Document::TYPE_META_KEY );
				} )
				->where( 'e_notes.status', '!=', Note::STATUS_TRASH )
				->group_by( 'postmeta.meta_value' )
				->get()
				->map_with_keys( function ( $row ) {
					return [ $row['type'] => (int) $row['count'] ];
				} )
				->all(),
		];
	}

	/**
	 * Get the first user interaction with the Notes feature.
	 *
	 * @return string|null
	 */
	private function get_first_interaction() {
		$note = Note::query()
			->with_trashed()
			->select( [ 'created_at' ] )
			->order_by( 'created_at' )
			->first();

		return $note && $note->created_at
			? $note->created_at->format( 'Y-m-d\TH:i:sO' )
			: null;
	}

	/**
	 * Get the last user interaction with the Notes feature.
	 *
	 * @return string|null
	 */
	private function get_last_interaction() {
		$note = Note::query()
			->with_trashed()
			->select( [ 'last_activity_at' ] )
			->order_by( 'last_activity_at', 'desc' )
			->first();

		return $note && $note->last_activity_at
			? $note->last_activity_at->format( 'Y-m-d\TH:i:sO' )
			: null;
	}

	/**
	 * Get the count of `$type` usages grouped by user role.
	 *
	 * e.g. for 10 replies it can be something like: `{ admin: 7, subscriber: 3 }`
	 *
	 * @param string $type - Threads or replies.
	 *
	 * @return array
	 */
	private function get_notes_users_used( $type ) {
		$query = Note::query()
			->disable_model_initiation()
			->select( [ 'user_used_id' => Module::TABLE_NOTES . '.author_id' ] )
			->add_count_select( Module::TABLE_NOTES . '.id', 'count' )
			->group_by( 'user_used_id' );

		switch ( $type ) {
			case static::THREADS:
				$query->only_threads();
				break;

			case static::REPLIES:
				$query->only_replies();
				break;
		}

		return $this->normalize_users_used( $query->get() );
	}

	/**
	 * Get the count of mentions usages grouped by user role.
	 *
	 * e.g. for 10 mentions it can be something like: `{ admin: 7, subscriber: 3 }`
	 *
	 * @return array
	 */
	private function get_mentions_users_used() {
		$query = ( new Query_Builder() )
			->from( Module::TABLE_NOTES_USERS_RELATIONS, 'e_notes_relations' )
			->select( [ 'user_used_id' => 'e_notes.author_id' ] )
			->add_count_select( 'e_notes_relations.id', 'count' )
			->join( function ( Join_Clause $j ) {
				$j->table( Module::TABLE_NOTES, 'e_notes' )
					->on_column( 'e_notes_relations.note_id', '=', 'e_notes.id' );
			} )
			->where( 'e_notes_relations.type', '=', Note::USER_RELATION_MENTION )
			->where( 'e_notes.status', '!=', Note::STATUS_TRASH )
			->group_by( 'e_notes.author_id' );

		return $this->normalize_users_used( $query->get() );
	}

	/**
	 * Normalize `users_used` query results into counts array grouped by user role.
	 *
	 * @param Collection $query_results
	 *
	 * @return array
	 */
	private function normalize_users_used( Collection $query_results ) {
		if ( $query_results->is_empty() ) {
			return [];
		}

		$results = $query_results->map_with_keys( function ( $row ) {
			return [ $row['user_used_id'] => (int) $row['count'] ];
		} );

		/**
		 * @type \WP_User[] $users
		 */
		$users = get_users( [
			'include' => $results->keys()->all(),
		] );

		$counts = [];

		foreach ( $users as $user ) {
			/**
			 * WordPress also uses the first role.
			 *
			 * @see https://github.com/WordPress/WordPress/blob/57039311720709d55e96e1a074414ebadba64e00/wp-admin/user-edit.php#L419-L435
			 */
			$role = reset( $user->roles );

			if ( ! isset( $counts[ $role ] ) ) {
				$counts[ $role ] = 0;
			}

			$counts[ $role ] += $results->get( $user->ID );
		}

		return $counts;
	}

	/**
	 * Get the count of `$type` usages grouped by document type.
	 *
	 * @param string $type - Threads or replies.
	 *
	 * @return array
	 */
	private function get_notes_document_types( $type ) {
		$query = Note::query()
			->disable_model_initiation()
			->select( [ 'type' => 'postmeta.meta_value' ] )
			->add_count_select( '*', 'count' )
			->join( function ( Join_Clause $j ) {
				$j->table( 'posts' )
					->on_column( 'posts.ID', '=', Module::TABLE_NOTES . '.post_id' );
			} )
			->join( function ( Join_Clause $j ) {
				$j->table( 'postmeta' )
					->on_column( 'posts.ID', '=', 'postmeta.post_id' )
					->on( 'postmeta.meta_key', '=', Document::TYPE_META_KEY );
			} )
			->group_by( 'postmeta.meta_value' );

		switch ( $type ) {
			case static::THREADS:
				$query->only_threads();
				break;

			case static::REPLIES:
				$query->only_replies();
				break;
		}

		return $query->get()
			->map_with_keys( function ( $row ) {
				return [ $row['type'] => (int) $row['count'] ];
			} )
			->all();
	}
}
