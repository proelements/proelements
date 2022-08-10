<?php

namespace ElementorPro\Modules\Notes\Database\Models;

use ElementorPro\Core\Database\Model_Base;
use ElementorPro\Core\Database\Query_Builder;
use ElementorPro\Core\Utils\Collection;
use ElementorPro\Modules\Notes\Admin_Page;
use ElementorPro\Modules\Notes\Database\Query\Note_Query_Builder;
use ElementorPro\Modules\Notes\Module;
use ElementorPro\Modules\Notes\User\Capabilities;
use ElementorPro\Modules\Notes\Utils;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Note extends Model_Base {
	// Note statuses.
	const STATUS_PUBLISH = 'publish';
	const STATUS_DRAFT = 'draft';
	const STATUS_TRASH = 'trash';

	// Note user relations.
	const USER_RELATION_READ = 'read';
	const USER_RELATION_MENTION = 'mention';

	/**
	 * Note ID.
	 *
	 * @var int
	 */
	public $id;

	/**
	 * Note's post ID.
	 *
	 * @var null|int
	 */
	public $post_id = null;

	/**
	 * Note's element ID.
	 *
	 * @var null|int
	 */
	public $element_id = null;

	/**
	 * Note's parent ID.
	 *
	 * @var int
	 */
	public $parent_id = 0;

	/**
	 * Note's author ID.
	 *
	 * @var null|int
	 */
	public $author_id = null;

	/**
	 * @var null|string
	 */
	public $author_display_name = null;

	/**
	 * Note's route post ID.
	 *
	 * @var null|integer
	 */
	public $route_post_id = null;

	/**
	 * @var string
	 */
	public $route_url = null;

	/**
	 * @var string
	 */
	public $route_title = null;

	/**
	 * Note's status.
	 *
	 * @var string
	 */
	public $status = self::STATUS_PUBLISH;

	/**
	 * Note's position in the element.
	 *
	 * @var array{x: int, y: int}
	 */
	public $position = [
		'x' => 0,
		'y' => 0,
	];

	/**
	 * Note's content.
	 *
	 * @var null|string
	 */
	public $content = null;

	/**
	 * Note's resolve status.
	 *
	 * @var bool
	 */
	public $is_resolved = false;

	/**
	 * Note's public status.
	 *
	 * @var bool
	 */
	public $is_public = true;

	/**
	 * Is the note read by the user.
	 *
	 * @var boolean
	 */
	public $is_read = false;

	/**
	 * Note's replies.
	 *
	 * @var Collection <Note>
	 */
	public $replies;

	/**
	 * Note's mentions.
	 *
	 * @var Collection<User>
	 */
	public $mentions;

	/**
	 * Note's author.
	 *
	 * @var User
	 */
	public $author;

	/**
	 * Note's document
	 *
	 * @var Document
	 */
	public $document;

	/**
	 * Note's replies count.
	 *
	 * @var int
	 */
	public $replies_count = 0;

	/**
	 * Note's unread replies count.
	 *
	 * @var int
	 */
	public $unread_replies_count = 0;

	/**
	 * Note's readers.
	 *
	 * @var Collection <User>
	 */
	public $readers;

	/**
	 * Note's creation time.
	 *
	 * @var \DateTime
	 */
	public $created_at;

	/**
	 * Note's last update time.
	 *
	 * @var \DateTime
	 */
	public $updated_at;

	/**
	 * Note's last activity time.
	 *
	 * @var \DateTime
	 */
	public $last_activity_at;

	/**
	 * User's capabilities for the current note.
	 * [
	 *  'edit' => boolean,
	 *  'delete' => boolean,
	 * ]
	 *
	 * @var array
	 */
	public $user_can = [];

	/**
	 * Casts array.
	 *
	 * @var array
	 */
	protected static $casts = [
		'id' => self::TYPE_INTEGER,
		'post_id' => self::TYPE_INTEGER,
		'route_post_id' => self::TYPE_INTEGER,
		'parent_id' => self::TYPE_INTEGER,
		'author_id' => self::TYPE_INTEGER,
		'position' => self::TYPE_JSON,
		'is_resolved' => self::TYPE_BOOLEAN,
		'is_public' => self::TYPE_BOOLEAN,
		'is_read' => self::TYPE_BOOLEAN,
		'replies' => self::TYPE_COLLECTION,
		'mentions' => self::TYPE_COLLECTION,
		'readers' => self::TYPE_COLLECTION,
		'replies_count' => self::TYPE_INTEGER,
		'unread_replies_count' => self::TYPE_INTEGER,
		'created_at' => self::TYPE_DATETIME_GMT,
		'updated_at' => self::TYPE_DATETIME_GMT,
		'last_activity_at' => self::TYPE_DATETIME_GMT,
	];

	public function __construct( array $fields ) {
		// Defaults must be empty collection, when there is no replies or mentions it should remain empty.
		$this->replies = new Collection( [] );
		$this->mentions = new Collection( [] );
		$this->readers = new Collection( [] );

		parent::__construct( $fields );
	}

	/**
	 * Override the default Query Builder.
	 *
	 * @param \wpdb|null $connection
	 *
	 * @return Note_Query_Builder
	 */
	public static function query( \wpdb $connection = null ) {
		return ( new Note_Query_Builder( $connection ) )->from( static::get_table() );
	}

	/**
	 * Get the notes table name.
	 *
	 * @return string
	 */
	public static function get_table() {
		return Module::TABLE_NOTES;
	}

	/**
	 * Is the current note is top level note.
	 *
	 * @return bool
	 */
	public function is_thread() {
		return 0 === $this->parent_id;
	}

	/**
	 * Determine if the current note is a reply.
	 *
	 * @return bool
	 */
	public function is_reply() {
		return ! $this->is_thread();
	}

	/**
	 * Get the thread ID of the current note.
	 *
	 * @return int
	 */
	public function get_thread_id() {
		return $this->is_thread() ? $this->id : $this->parent_id;
	}

	/**
	 * Get the note deep link.
	 *
	 * @param bool $force_auth - Whether to force authentication. Defaults to `true`.
	 *
	 * @return string
	 */
	public function get_url( $force_auth = true ) {
		// NOTICE: Make sure that the returned URL is not dynamic!
		return static::generate_url(
			$this->get_thread_id(),
			$this->route_url,
			$force_auth
		);
	}

	/**
	 * Generate a note deep link URL.
	 *
	 * @param string|int $id - Note ID.
	 * @param string $route_url - Note route URL. Required if `$force_auth = false`.
	 * @param bool $force_auth - Whether to force authentication. Defaults to `true`. Used in cases where the user
	 *                           should be passed through the proxy in order to force their authentication (since the
	 *                           "Notes" feature and the Web-CLI are available only for logged-in users).
	 *
	 * @return string
	 */
	public static function generate_url( $id = null, $route_url = '', $force_auth = true ) {
		// Add a placeholder if ID doesn't exist (used for passing the note URL as a pattern).
		$id = ( null === $id ) ? '{{NOTE_ID}}' : (int) $id;

		if ( $force_auth ) {
			$page = sprintf( 'admin.php?page=%s&note-id=%s', Admin_Page::PAGE_ID, $id );

			return admin_url( $page );
		}

		$command = sprintf( '#e:run:notes/open?{"id":%s}', $id );
		$base_url = get_site_url( null, Utils::clean_url( $route_url ) );

		return $base_url . $command;
	}

	/**
	 * @shortcut `$this->add_user_relation()`
	 */
	public function add_readers( $user_ids = [] ) {
		$this->add_user_relation( static::USER_RELATION_READ, $user_ids );
	}

	/**
	 * @shortcut `$this->remove_user_relation()`
	 */
	public function remove_readers( $user_ids = [] ) {
		$this->remove_user_relation( static::USER_RELATION_READ, $user_ids );
	}

	/**
	 * @shortcut `$this->sync_user_relation()`
	 */
	public function sync_mentions( $user_keys = [], $key = 'ID' ) {
		return $this->sync_user_relation( static::USER_RELATION_MENTION, $user_keys, $key );
	}

	/**
	 * @shortcut `$this->add_user_relation()`
	 */
	public function add_mentions( $user_ids = [] ) {
		$this->add_user_relation( static::USER_RELATION_MENTION, $user_ids );
	}

	/**
	 * Remove old relations and add new ones.
	 *
	 * @param        $type
	 * @param array  $user_keys
	 * @param string $key
	 *
	 * @return Collection Only users with a newly created relation (excluding the existing ones).
	 */
	public function sync_user_relation( $type, array $user_keys, $key = 'ID' ) {
		$users = User::query()
			->where_in( $key, $user_keys )
			->get();

		$already_has_relation = ( new Query_Builder() )
			->select( [ 'user_id' ] )
			->from( Module::TABLE_NOTES_USERS_RELATIONS )
			->where( 'type', '=', $type )
			->where( 'note_id', '=', $this->id )
			->get()
			->pluck( 'user_id' );

		$should_have_relation = $users
			->pluck( 'ID' )
			->unique();

		$should_remove = $already_has_relation->diff( $should_have_relation )->values();
		$should_insert = $should_have_relation->diff( $already_has_relation )->values();

		// Delete all the previous relations.
		$this->remove_user_relation( $type, $should_remove );

		// Only the users that not already in relation.
		$this->add_user_relation( $type, $should_insert );

		// Return only the users that were inserted in the users_relations DB table.
		return $users->filter( function ( User $user ) use ( $should_insert ) {
			return in_array( $user->ID, $should_insert, true );
		} );
	}

	/**
	 * Remove user relation.
	 *
	 * @param       $type
	 * @param array $user_ids
	 */
	public function remove_user_relation( $type, array $user_ids ) {
		( new Query_Builder() )
			->table( Module::TABLE_NOTES_USERS_RELATIONS )
			->where( 'note_id', '=', $this->id )
			->where( 'type', '=', $type )
			->where_in( 'user_id', $user_ids )
			->delete();
	}

	/**
	 * Add user relation.
	 *
	 * @param       $type
	 * @param array $user_ids
	 *
	 * @throws \Exception
	 */
	public function add_user_relation( $type, array $user_ids ) {
		$now = gmdate( 'Y-m-d H:i:s' );

		foreach ( $user_ids as $user_id ) {
			( new Query_Builder() )
				->table( Module::TABLE_NOTES_USERS_RELATIONS )
				->insert( [
					'note_id' => $this->id,
					'user_id' => $user_id,
					'type' => $type,
					'created_at' => $now,
					'updated_at' => $now,
				] );
		}
	}

	/**
	 * Add user capabilities to the Note and its replies.
	 *
	 * @param integer $user_id - User ID to use.
	 * @param bool $recursive - Whether to add the capabilities also to the replies.
	 *
	 * @return Note
	 */
	public function attach_user_capabilities( $user_id, $recursive = true ) {
		$this->user_can = [
			'edit' => user_can( $user_id, Capabilities::EDIT_NOTES, $this ),
			'delete' => user_can( $user_id, Capabilities::DELETE_NOTES, $this ),
		];

		// Add the capabilities also to the replies.
		if ( $recursive ) {
			$this->replies = $this->replies->map( function ( Note $reply ) use ( $user_id ) {
				$reply->user_can = [
					'edit' => user_can( $user_id, Capabilities::EDIT_NOTES, $reply ),
					'delete' => user_can( $user_id, Capabilities::DELETE_NOTES, $reply ),
				];

				return $reply;
			} );
		}

		return $this;
	}
}
