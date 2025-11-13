<?php

namespace ElementorPro\Modules\Notes\Database\Query;

use Elementor\Core\Utils\Collection;
use ElementorPro\Core\Database\Join_Clause;
use ElementorPro\Modules\Notes\User\Capabilities;
use ElementorPro\Core\Database\Model_Query_Builder;
use ElementorPro\Core\Database\Query_Builder;
use ElementorPro\Modules\Notes\Database\Models\Note;
use ElementorPro\Modules\Notes\Database\Models\User;
use ElementorPro\Modules\Notes\Module;
use ElementorPro\Modules\Notes\Database\Models\Document;
use Elementor\Core\Base\Document as BaseDocument;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * @method Note|null first()
 * @method Note|null find( $id, $field = 'id' )
 */
class Note_Query_Builder extends Model_Query_Builder {

	/**
	 * Determine if the query should include trashed notes.
	 *
	 * @var bool
	 */
	private $with_trashed = false;

	/**
	 * Note_Query_Builder constructor.
	 *
	 * @param \wpdb|null $connection
	 */
	public function __construct( \wpdb $connection = null ) {
		parent::__construct( Note::class, $connection );
	}

	/**
	 * Override the default `compile_wheres()` to handle `with_trashed()`.
	 *
	 * @inheritDoc
	 */
	public function compile_wheres() {
		// Don't show trashed notes.
		// TODO: Should be called before `get()`, `update()`, `delete()` using `apply_scopes()`.
		if ( ! $this->with_trashed ) {
			$this->where( 'status', '!=', Note::STATUS_TRASH );
		}

		return parent::compile_wheres();
	}

	/**
	 * Set the `with_trashed` flag to `true`.
	 *
	 * @return $this
	 */
	public function with_trashed() {
		$this->with_trashed = true;

		return $this;
	}

	/**
	 * Eager load the Note's replies.
	 *
	 * @param callable|null $callback - Callback that gets a `Note_Query_Builder` to customize the replies query.
	 *
	 * @return $this
	 */
	public function with_replies( callable $callback = null ) {
		$key = 'replies';
		$foreign_key = 'parent_id';
		$local_key = 'id';
		$builder = Note::query();

		return $this->add_with( $key, function ( Collection $notes ) use ( $callback, $key, $foreign_key, $local_key, $builder ) {
			// Get all the replies.
			$replies = $builder
				->where_in(
					$foreign_key,
					$notes->pluck( $local_key )->all()
				)
				->when( $callback, function ( Note_Query_Builder $q, callable $callback ) {
					// Execute any user-defined callback.
					// Used to extend the query (e.g. add another `where` or eager load relations).
					call_user_func( $callback, $q );
				} )
				->get()
				->group_by( $foreign_key ); // Group the replies by their thread.

			// Add the replies to each Note object.
			return $notes->map( function ( $note ) use ( $replies, $key, $local_key ) {
				$note[ $key ] = $replies->get( $note[ $local_key ], [] );

				return $note;
			} );
		} );
	}

	/**
	 * Eager load the Note's replies count.
	 *
	 * @return $this
	 */
	public function with_replies_count() {
		return $this->add_sub_select( function ( Query_Builder $q ) {
			$q->from( Module::TABLE_NOTES, 'replies' )
				->select( [ 'replies.id' ], static::COLUMN_COUNT )
				->where_column( 'replies.parent_id', '=', Module::TABLE_NOTES . '.id' );
		}, 'replies_count' );
	}

	/**
	 * Eager load the Note's readers.
	 *
	 * @return $this
	 */
	public function with_readers() {
		return $this->add_with( 'readers', function ( Collection $notes ) {
			$ids = $notes->pluck( 'id' )->all();

			// Get all relations.
			$pivot = ( new Query_Builder() )
				->from( Module::TABLE_NOTES_USERS_RELATIONS )
				->select( [ 'note_id', 'user_id' ] )
				->where( 'type', '=', Note::USER_RELATION_READ )
				->where_in( 'note_id', $ids )
				->get();

			$ids = $pivot->pluck( 'user_id' )->all();

			// Exit if there are no readers.
			if ( empty( $ids ) ) {
				return $notes;
			}

			// Get all users that are associated with the relations, and map them into `$user_id => User`.
			$readers = User::query()
				->where_in( 'ID', $ids )
				->get()
				->key_by( 'ID' );

			// Attach a user to each pivot row & group by note id.
			$pivot = $pivot->map( function ( $item ) use ( $readers ) {
				$item['user'] = $readers->get( $item['user_id'], [] );

				return $item;
			} )->filter( function ( $item ) {
				// Make sure that relations with non-existing users won't be returned.
				return ! empty( $item['user'] );
			} )->group_by( 'note_id' );

			// Add the readers to the note.
			return $notes->map( function ( $note ) use ( $pivot ) {
				$users = $pivot->get( $note['id'], [] );

				$readers = ( new Collection( $users ) )
					->unique( 'user_id' )
					->pluck( 'user' )
					->all();

				$note['readers'] = $readers;

				return $note;
			} );
		} );
	}

	/**
	 * Eager load the Note's author.
	 *
	 * @return $this
	 */
	public function with_author() {
		return $this->add_with( 'author', function ( Collection $notes ) {
			$ids = $notes
				->pluck( 'author_id' )
				->unique()
				->values();

			$authors = User::query()
				->where_in( 'ID', $ids )
				->get()
				->key_by( 'ID' );

			return $notes->map( function ( $note ) use ( $authors ) {
				$note['author'] = $authors->get( $note['author_id'] );

				return $note;
			} );
		} );
	}

	/**
	 * Eager load the Note's document.
	 *
	 * @return $this
	 */
	public function with_document() {
		return $this->add_with( 'document', function ( Collection $notes ) {
			$ids = $notes
				->pluck( 'post_id' )
				->unique()
				->values();

			$documents = Document::query()
				->where_in( 'ID', $ids )
				->get()
				->key_by( 'ID' );

			return $notes->map( function ( $note ) use ( $documents ) {
				$note['document'] = $documents->get( $note['post_id'] );

				return $note;
			} );
		} );
	}

	/**
	 * Eager load the Note's read state by a user ID.
	 *
	 * @param int $user_id - User ID to check.
	 *
	 * @return $this
	 */
	public function with_is_read( $user_id ) {
		$alias = 'is_read';

		if ( $this->is_column_selected( $alias ) ) {
			return $this;
		}

		// TODO: Maybe use JOIN.
		return $this->add_sub_select( function ( Query_Builder $q ) use ( $user_id ) {
			$q->from( Module::TABLE_NOTES_USERS_RELATIONS, 'users_relations' )
				->select( [ 'users_relations.id' ], static::COLUMN_COUNT )
				->where( 'type', '=', Note::USER_RELATION_READ )
				->where_column( Module::TABLE_NOTES . '.id', '=', 'users_relations.note_id' )
				->where( 'user_id', '=', $user_id );
		}, $alias );
	}

	/**
	 * Make sure that users without permissions to read private notes won't get them.
	 *
	 * @param integer $user_id - User ID to check.
	 *
	 * @return Note_Query_Builder
	 */
	public function only_visible( $user_id ) {
		// User can read private notes - do nothing.
		if ( user_can( $user_id, Capabilities::READ_OTHERS_PRIVATE_NOTES ) ) {
			return $this;
		}

		// User can read only public or their note.
		return $this->where( function ( Query_Builder $q ) use ( $user_id ) {
			$q->where( 'is_public', '=', true )
				->or_where( 'author_id', '=', $user_id );
		} );
	}

	/**
	 * Filter only notes that their post is visible to the user.
	 *
	 * @param $user_id
	 *
	 * @return $this
	 */
	public function only_visible_posts( $user_id ) {
		$post_types = ( new Collection( get_post_types() ) )
			->map( function ( $post_type_value ) {
				return get_post_type_object( $post_type_value );
			} );

		$can_read_unpublished_post_types = $post_types
			->filter( function ( $post_type ) use ( $user_id ) {
				return $post_type && user_can( $user_id, $post_type->cap->edit_posts );
			} )
			->keys()
			->all();

		$can_read_private_post_types = $post_types
			->filter( function ( $post_type ) use ( $user_id ) {
				return $post_type && user_can( $user_id, $post_type->cap->read_private_posts );
			} )
			->keys()
			->all();

		foreach ( [ 'route_post_id', 'post_id' ] as $column ) {
			$table_alias = "posts_{$column}_visible";

			$this
				->left_join(
					function ( Join_Clause $join ) use ( $table_alias, $column ) {
						return $join->table( 'posts', $table_alias )
							->on_column( "{$table_alias}.ID", '=', $column );
					}
				)
				->where(
					function ( Query_Builder $query ) use ( $can_read_unpublished_post_types, $table_alias ) {
						// If there is no post ID, there is nothing to check,
						// OR if the post is published the user can view the post,
						// OR if the user is allowed to view unpublished post (for the current `post_type`).
						$query->where_null( "{$table_alias}.ID" )
							->or_where( "{$table_alias}.post_status", '=', BaseDocument::STATUS_PUBLISH )
							->or_where_in( "{$table_alias}.post_type", $can_read_unpublished_post_types );
					}
				)
				->where(
					function ( Query_Builder $query ) use ( $user_id, $can_read_private_post_types, $table_alias ) {
						// If there is no post ID, there is nothing to check,
						// OR if the post is not private the user can see view post,
						// OR if the current user is the author of the private post, so he can view the post,
						// OR if the user is allowed to view private posts (for the current `post_type`).
						$query->where_null( "{$table_alias}.ID" )
							->or_where( "{$table_alias}.post_status", '!=', BaseDocument::STATUS_PRIVATE )
							->or_where( "{$table_alias}.post_author", '=', $user_id )
							->or_where_in( "{$table_alias}.post_type", $can_read_private_post_types );
					}
				);
		}

		return $this;
	}

	/**
	 * Filter only the notes that are relevant to the user.
	 *
	 * @param int $user_id - User ID to check.
	 *
	 * @return Note_Query_Builder
	 */
	public function only_relevant( $user_id ) {
		// User replied to the thread.
		$replied_to_thread = function ( Query_Builder $q ) use ( $user_id ) {
			$q->select_raw( [ 1 ] )
				->from( Module::TABLE_NOTES, 'e_notes_relevant_replies' )
				->where_column( 'e_notes_relevant_replies.parent_id', '=', Module::TABLE_NOTES . '.id' )
				->where( 'e_notes_relevant_replies.author_id', '=', $user_id )
				->where( 'e_notes_relevant_replies.status', '!=', Note::STATUS_TRASH );
		};

		// User is mentioned in the thread.
		$mentioned_in_thread = function ( Query_Builder $q ) use ( $user_id ) {
			$q->select_raw( [ 1 ] )
				->table( Module::TABLE_NOTES_USERS_RELATIONS, 'e_notes_relevant_relation' )
				->where_column( 'e_notes_relevant_relation.note_id', '=', Module::TABLE_NOTES . '.id' )
				->where( 'e_notes_relevant_relation.user_id', '=', $user_id )
				->where( 'e_notes_relevant_relation.type', '=', Note::USER_RELATION_MENTION );
		};

		// User is mentioned in one of the replies.
		$mentioned_in_replies = function ( Query_Builder $q ) use ( $user_id ) {
			$q->select_raw( [ 1 ] )
				->table( Module::TABLE_NOTES_USERS_RELATIONS, 'e_notes_relevant_relation_replies' )
				->where_in( 'e_notes_relevant_relation_replies.note_id', function ( Query_Builder $q ) use ( $user_id ) {
					$q->select( [ 'e_notes_relevant_replies_ids.id' ] )
						->from( Module::TABLE_NOTES, 'e_notes_relevant_replies_ids' )
						->where_column( 'e_notes_relevant_replies_ids.parent_id', '=', Module::TABLE_NOTES . '.id' )
						->where( 'e_notes_relevant_replies_ids.status', '!=', Note::STATUS_TRASH );
				} )
				->where( 'e_notes_relevant_relation_replies.user_id', '=', $user_id )
				->where( 'e_notes_relevant_relation_replies.type', '=', Note::USER_RELATION_MENTION );
		};

		return $this->where( function ( Query_Builder $q ) use ( $user_id, $replied_to_thread, $mentioned_in_thread, $mentioned_in_replies ) {
			$q->where( 'author_id', '=', $user_id ) // User created the thread.
				->or_where_exists( $replied_to_thread )
				->or_where_exists( $mentioned_in_thread )
				->or_where_exists( $mentioned_in_replies );
		} );
	}

	/**
	 * Filter only unread notes.
	 *
	 * @param integer $user_id - User id that the notes are unread by.
	 *
	 * @return Note_Query_Builder
	 */
	public function only_unread( $user_id ) {
		return $this
			->with_unread_replies_count( $user_id )
			->with_is_read( $user_id )
			->having_raw( '`unread_replies_count` > 0 OR `is_read` = 0' );
	}

	/**
	 * Filter only threads.
	 *
	 * @return Note_Query_Builder
	 */
	public function only_threads() {
		return $this->where( 'parent_id', '=', 0 );
	}

	/**
	 * Filter only replies.
	 *
	 * @return Note_Query_Builder
	 */
	public function only_replies() {
		return $this->where( 'parent_id', '!=', 0 );
	}

	/**
	 * Filter only trashed notes.
	 *
	 * @return Note_Query_Builder
	 */
	public function only_trashed() {
		return $this->with_trashed()
			->where( 'status', '=', Note::STATUS_TRASH );
	}

	/**
	 * Eager load the Note's unread replies count by a user ID.
	 *
	 * @param int $user_id - User ID to check.
	 *
	 * @return Note_Query_Builder
	 */
	public function with_unread_replies_count( $user_id ) {
		$alias = 'unread_replies_count';

		if ( $this->is_column_selected( $alias ) ) {
			return $this;
		}

		return $this->add_sub_select( function ( Query_Builder $q ) use ( $user_id ) {
			$q->select( [ 'e_replies_count.id' ], static::COLUMN_COUNT )
				->from( Module::TABLE_NOTES, 'e_replies_count' )
				->left_join( function ( Join_Clause $j ) use ( $user_id ) {
					$j->table(
						Module::TABLE_NOTES_USERS_RELATIONS,
						'e_replies_count_user_relations'
					)
					->on_column(
						'e_replies_count_user_relations.note_id',
						'=',
						'e_replies_count.id'
					)
					->on(
						'e_replies_count_user_relations.type',
						'=',
						Note::USER_RELATION_READ
					)
					->on(
						'e_replies_count_user_relations.user_id',
						'=',
						$user_id
					);
				} )
			->where_column( 'e_replies_count.parent_id', '=', Module::TABLE_NOTES . '.id' )
			->where_null( 'e_replies_count_user_relations.id' );
		}, $alias );
	}

	/**
	 * Extends base delete method to allow deleting all the related entities
	 * of the notes, including 'user relations' and 'replies'.
	 *
	 * @param false $include_related_entities
	 *
	 * @return bool|int
	 */
	public function delete( $include_related_entities = false ) {
		if ( ! $include_related_entities ) {
			return parent::delete();
		}

		// Get all the ids of the notes it wishes to delete.
		$notes_ids = $this->select( [ 'id' ] )
			->with_trashed()
			->get()
			->pluck( 'id' );

		if ( $notes_ids->is_empty() ) {
			return 0;
		}

		// Get all the replies ids.
		$replies_ids = Note::query()
			->with_trashed()
			->select( [ 'id' ] )
			->where_in( 'parent_id', $notes_ids->values() )
			->get()
			->pluck( 'id' );

		// Merge the thread ids with the replies.
		$all_relevant_notes_ids = $notes_ids->merge( $replies_ids );

		// Delete all the users relations of the notes.
		( new Query_Builder() )
			->table( Module::TABLE_NOTES_USERS_RELATIONS )
			->where_in( 'note_id', $all_relevant_notes_ids->values() )
			->delete();

		// Delete all the notes.
		return Note::query()
			->with_trashed()
			->where_in( 'id', $all_relevant_notes_ids->values() )
			->delete();
	}

	/**
	 * Move notes to trash.
	 *
	 * @return bool|int
	 */
	public function trash() {
		$now = gmdate( 'Y-m-d H:i:s' );

		return $this->update( [
			'status' => Note::STATUS_TRASH,
			'updated_at' => $now,
		] );
	}

	/**
	 * Restore notes from trash.
	 *
	 * @return bool|int
	 */
	public function restore() {
		$now = gmdate( 'Y-m-d H:i:s' );

		return $this
			->with_trashed()
			->where( 'status', '=', Note::STATUS_TRASH )
			->update( [
				'status' => Note::STATUS_PUBLISH, // TODO: It should be the last status
				'updated_at' => $now,
			] );
	}
}
