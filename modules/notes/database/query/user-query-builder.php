<?php

namespace ElementorPro\Modules\Notes\Database\Query;

use ElementorPro\Core\Database\Model_Query_Builder;
use ElementorPro\Core\Database\Query_Builder;
use ElementorPro\Modules\Notes\Database\Models\Note;
use ElementorPro\Modules\Notes\Database\Models\User;
use ElementorPro\Modules\Notes\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * @method User|null find( $id, $field = 'id' )
 */
class User_Query_Builder extends Model_Query_Builder {

	/**
	 * Note_Query_Builder constructor.
	 *
	 * @param \wpdb|null $connection
	 */
	public function __construct( \wpdb $connection = null ) {
		parent::__construct( User::class, $connection );
	}

	/**
	 * Filter only users who are relevant to note (created / replied to / mention in thread).
	 *
	 * @param Note $note
	 *
	 * @return $this
	 */
	public function only_relevant_to_note( Note $note ) {
		// Get all notes that are related to `$note` (its thread / replies / sibling replies).
		$notes = Note::query()
			->select( [ 'id', 'author_id' ] )
			->where( 'id', '=', $note->id )
			->when( $note->is_thread(), function ( Note_Query_Builder $q ) use ( $note ) {
				$q->or_where( 'parent_id', '=', $note->id );
			} )
			->when( $note->is_reply(), function ( Note_Query_Builder $q ) use ( $note ) {
				$q->or_where( 'parent_id', '=', $note->parent_id )
					->or_where( 'id', '=', $note->parent_id );
			} )
			->get();

		return $this->where_exists( function ( Query_Builder $q ) use ( $notes ) {
			// User is mentioned in thread or in one of the replies.
			$q->select_raw( [ 1 ] )
				->table( Module::TABLE_NOTES_USERS_RELATIONS, 'relations' )
				->where_in( 'relations.note_id', $notes->pluck( 'id' )->all() )
				->where_column( 'relations.user_id', '=', 'users.id' )
				->where( 'relations.type', '=', Note::USER_RELATION_MENTION );
		} )
		// User created the thread or one of the replies.
		->or_where_in( 'users.id', $notes->pluck( 'author_id' )->all() );
	}
}
