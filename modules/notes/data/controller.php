<?php
namespace ElementorPro\Modules\Notes\Data;

use Elementor\Core\Utils\Collection;
use ElementorPro\Modules\Notes\Data\Endpoints\Users_Endpoint;
use ElementorPro\Modules\Notes\Database\Transformers\User_Transformer;
use ElementorPro\Modules\Notes\Utils;
use Elementor\Data\V2\Base\Controller as Base_Controller;
use Elementor\Data\V2\Base\Exceptions\Data_Exception;
use Elementor\Data\V2\Base\Exceptions\Error_404;
use ElementorPro\Data\Http_Status;
use ElementorPro\Modules\Notes\Data\Endpoints\Read_Status_Endpoint;
use ElementorPro\Modules\Notes\Data\Endpoints\Summary_Endpoint;
use ElementorPro\Modules\Notes\Database\Models\Note;
use ElementorPro\Modules\Notes\Database\Models\User;
use ElementorPro\Modules\Notes\Database\Query\Note_Query_Builder;
use ElementorPro\Modules\Notes\Notifications\User_Mentioned_Notification;
use ElementorPro\Modules\Notes\Notifications\User_Replied_Notification;
use ElementorPro\Modules\Notes\Notifications\User_Resolved_Notification;
use ElementorPro\Modules\Notes\User\Capabilities;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Controller extends Base_Controller {
	public function get_name() {
		return 'notes';
	}

	public function __construct() {
		parent::__construct();

		$this->user_transformer = new User_Transformer();
	}

	public function register_endpoints() {
		$this->register_endpoint( new Read_Status_Endpoint( $this ) );
		$this->register_endpoint( new Summary_Endpoint( $this ) );
		$this->register_endpoint( new Users_Endpoint( $this ) );

		$this->index_endpoint->register_item_route( \WP_REST_Server::READABLE, [
			'id' => [
				'type' => 'integer',
				'description' => 'Note ID to find.',
				'required' => true,
			],
		] );

		$this->index_endpoint->register_items_route( \WP_REST_Server::CREATABLE, [
			'post_id' => [
				'type' => 'integer',
				'description' => 'The id of the post where the note was created at (can be template, post, page, etc.).',
				'required' => true,
				'validate_callback' => function ( $value ) {
					return Plugin::elementor()->documents->get( $value );
				},
			],
			'element_id' => [
				'type' => 'string',
				'description' => 'Each note must be attached to an elementor element.',
				'required' => true,
				'sanitize_callback' => function( $value ) {
					return trim( $value );
				},
				'validate_callback' => function ( $value ) {
					return (bool) preg_match( '/^[a-z0-9]{7,9}$/', $value );
				},
			],
			'content' => [
				'type' => 'string',
				'description' => 'The content of the note.',
				'required' => true,
				'sanitize_callback' => function ( $value ) {
					return $this->sanitize_content( $value );
				},
				'validate_callback' => function ( $value ) {
					return ! empty( $value );
				},
			],
			'position' => [
				'type' => 'object',
				'properties' => [
					'x' => [
						'required' => true,
						'type' => 'number',
					],
					'y' => [
						'required' => true,
						'type' => 'number',
					],
				],
				'required' => true,
				'description' => 'The position of the note.',
			],
			'mentioned_usernames' => [
				'type' => 'array',
				'description' => 'List of user names that have been mentioned in the note\'s content.',
				'default' => [],
				'items' => [
					'type' => 'string',
					'sanitize_callback' => function ( $value ) {
						return wp_strip_all_tags( $value, true );
					},
				],
				'required' => false,
			],
			'route_post_id' => [
				'description' => 'The ID of the post that\'s associated with the route (doesn\'t always exist, e.g: home page, archive)',
				'required' => false,
				'validate_callback' => function ( $value ) {
					if ( ! $value ) {
						return true;
					}

					return is_numeric( $value ) && Plugin::elementor()->documents->get( $value );
				},
				'sanitize_callback' => function ( $value ) {
					if ( ! $value ) {
						return null;
					}

					return intval( $value );
				},
			],
			'route_url' => [
				'type' => 'string',
				'description' => 'The URL of the route where the note was created at.',
				'required' => false,
				'validate_callback' => function ( $value ) {
					return Utils::validate_url_or_relative_url( $value );
				},
				'sanitize_callback' => function ( $value ) {
					return Utils::clean_url( $value );
				},
			],
			'route_title' => [
				'type' => 'string',
				'description' => 'The title of the route where the note was created at.',
				'required' => false,
				'sanitize_callback' => function ( $value ) {
					return wp_strip_all_tags( $value, true );
				},
			],
			'parent_id' => [
				'type' => 'integer',
				'description' => 'If the new note is a reply to another note, the parent_id should be the thread\'s id.',
				'required' => false,
				'default' => 0,
			],
			'is_public' => [
				'type' => 'boolean',
				'description' => 'Should this note be visible for everyone or just for its author.',
				'required' => false,
			],
		] );

		$this->index_endpoint->register_item_route( \WP_REST_Server::EDITABLE, [
			'id' => [
				'type' => 'integer',
				'description' => 'The id the note.',
				'required' => true,
			],
			'content' => [
				'type' => 'string',
				'description' => 'The content of the note.',
				'required' => false,
				'sanitize_callback' => function ( $value ) {
					return $this->sanitize_content( $value );
				},
			],
			'mentioned_usernames' => [
				'type' => 'array',
				'description' => 'List of user names that have been mentioned in the note\'s content.',
				'items' => [
					'type' => 'string',
					'sanitize_callback' => function ( $value ) {
						return wp_strip_all_tags( $value, true );
					},
				],
				'required' => false,
			],
			'status' => [
				'type' => 'string',
				'description' => 'Note status can be draft or publish.',
				'required' => false,
				'enum' => [
					Note::STATUS_PUBLISH,
					Note::STATUS_DRAFT,
				],
			],
			'is_public' => [
				'type' => 'boolean',
				'description' => 'Should this note be visible for everyone or just for its author.',
				'required' => false,
			],
			'is_resolved' => [
				'type' => 'boolean',
				'description' => 'Is this note resolved and should be hidden.',
				'required' => false,
			],
		] );

		$this->index_endpoint->register_item_route( \WP_REST_Server::DELETABLE, [
			'id' => [
				'type' => 'integer',
				'description' => 'The id of the note.',
				'required' => true,
			],
			'force' => [
				'type' => 'boolean',
				'description' => 'Determine if it should be deleted permanently or change the status to trash.',
				'default' => false,
				'required' => false,
			],
		] );
	}

	/**
	 * Notes index route params.
	 *
	 * @return array[]
	 */
	public function get_collection_params() {
		return [
			'route_url' => [
				'type' => 'string',
				'description' => 'The URL of the route where the note was created at.',
				'required' => false,
				'validate_callback' => function ( $value ) {
					return Utils::validate_url_or_relative_url( $value );
				},
				'sanitize_callback' => function ( $value ) {
					return Utils::clean_url( $value );
				},
			],
			'status' => [
				'type' => 'string',
				'description' => 'The note status (e.g. "publish", "draft").',
				'required' => false,
				'enum' => [
					Note::STATUS_PUBLISH,
					Note::STATUS_DRAFT,
				],
				'default' => Note::STATUS_PUBLISH,
			],
			'is_resolved' => [
				'type' => 'boolean',
				'description' => 'Whether the note is resolved or not.',
				'required' => false,
			],
			'parent_id' => [
				'type' => 'integer',
				'description' => 'The note\'s parent id (use 0 for top-level).',
				'required' => false,
			],
			'post_id' => [
				'type' => 'integer',
				'description' => 'The ID of the post that the note is attached to.',
				'required' => false,
				'validate_callback' => function ( $value ) {
					return Plugin::elementor()->documents->get( $value );
				},
			],
			'only_unread' => [
				'type' => 'boolean',
				'description' => 'Show only unread notes (represents an unread thread if one of its replies is unread).',
				'required' => false,
			],
			'only_relevant' => [
				'type' => 'boolean',
				'description' => 'Show only notes that are relevant to the current user.',
				'required' => false,
			],
			'order_by' => [
				'type' => 'string',
				'description' => 'A column to order the results by.',
				'required' => false,
				'default' => 'last_activity_at',
				'enum' => [
					'last_activity_at',
					'created_at',
				],
			],
			'order' => [
				'type' => 'string',
				'description' => 'Results order direction.',
				'required' => false,
				'default' => 'desc',
				'enum' => [
					'asc',
					'desc',
				],
			],
		];
	}

	/**
	 * Get all Notes by filters.
	 *
	 * GET `/notes`
	 *
	 * @param \WP_REST_Request $request
	 *
	 * @return array
	 */
	public function get_items( $request ) {
		$user_id = get_current_user_id();

		$notes_query = Note::query()
			->with_replies_count()
			->with_unread_replies_count( $user_id )
			->with_is_read( $user_id )
			->with_author()
			->only_visible( $user_id )
			->order_by(
				$request->get_param( 'order_by' ),
				$request->get_param( 'order' )
			);

		foreach ( $this->get_filters() as $param => $callback ) {
			if ( $request->has_param( $param ) ) {
				call_user_func( $callback, $notes_query, $request->get_param( $param ) );
			}
		}

		$notes = $notes_query->get()->filter( function ( Note $note ) {
			return current_user_can( Capabilities::READ_NOTES, $note );
		} )->map( function ( Note $note ) {
			return $this->transform_users( $note );
		} );

		return [
			'data' => $notes,
			'meta' => [],
		];
	}

	/**
	 * Get a single note.
	 *
	 * GET `/notes/{id}`
	 *
	 * @param \WP_REST_Request $request
	 *
	 * @return array
	 */
	public function get_item( $request ) {
		$user_id = get_current_user_id();

		/**
		 * @var $note Note|null
		 */
		$note = Note::query()
			->where( 'id', '=', $request->get_param( 'id' ) )
			->with_replies( function ( Note_Query_Builder $q ) use ( $user_id ) {
				$q->with_author()->with_is_read( $user_id )->with_readers();
			} )
			->with_replies_count()
			->with_unread_replies_count( $user_id )
			->with_is_read( $user_id )
			->with_author()
			->with_readers()
			->with_document()
			->first();

		if ( ! $note ) {
			throw new Error_404();
		}

		$note = $this->transform_users( $note );
		$note->attach_user_capabilities( $user_id );

		return [
			'data' => $note,
			'meta' => [],
		];
	}

	/**
	 * Run all user models in the note through user transformer.
	 *
	 * @param Note $note
	 *
	 * @return Note
	 */
	protected function transform_users( Note $note ) {
		if ( ! empty( $note->author ) ) {
			$note->author = $this->user_transformer->transform( $note->author );
		}

		if ( ! $note->readers->is_empty() ) {
			$note->readers = $note->readers->map( function ( User $user ) {
				return $this->user_transformer->transform( $user );
			} );
		}

		// If the note has replies, recursively run the function for each reply note.
		if ( ! $note->replies->is_empty() ) {
			$note->replies = $note->replies->map( function ( Note $reply ) {
				return $this->transform_users( $reply );
			} );
		}

		return $note;
	}

	/**
	 * Create a note.
	 *
	 * POST `/notes`
	 *
	 * @param \WP_REST_Request $request
	 *
	 * @return array
	 * @throws \Exception
	 */
	public function create_items( $request ) {
		$this->validate_create_items( $request );

		$now = gmdate( 'Y-m-d H:i:s' );

		$values = ( new Collection( $request->get_body_params() ) )
			->only( [
				'post_id',
				'element_id',
				'content',
				'route_post_id',
				'route_url',
				'route_title',
				'status',
				'parent_id',
				'is_public',
			] )
			->merge( [
				'author_id' => get_current_user_id(),
				'created_at' => $now,
				'updated_at' => $now,
				'last_activity_at' => $now,
				'position' => wp_json_encode( $request->get_param( 'position' ) ),
			] )
			->all();

		$id = Note::query()->insert( $values );

		/** @var Note $note */
		$note = Note::query()->with_author()->find( $id );

		$note = $this->transform_users( $note );

		$mentioned = $note->sync_mentions(
			$request->get_param( 'mentioned_usernames' ),
			'user_nicename'
		);

		// Set the note as read by its author.
		$note->add_readers( [ get_current_user_id() ] );

		// If it's a reply, the thread's `last_activity_at` should be updated as well.
		if ( $note->is_reply() ) {
			Note::query()
				->where( 'id', '=', $note->parent_id )
				->update( [ 'last_activity_at' => $now ] );
		}

		// TODO: Use events system.
		$this->on_note_created( [
			'note' => $note,
			'mentioned' => $mentioned,
			'actor' => User::from_wp_user( wp_get_current_user() ),
		] );

		return [
			'data' => $note,
			'meta' => [],
		];
	}

	/**
	 * Update a note.
	 *
	 * PATCH `/notes/{id}`
	 *
	 * @param \WP_REST_Request $request
	 *
	 * @return array
	 */
	public function update_item( $request ) {
		$this->validate_update_items( $request );

		$now = gmdate( 'Y-m-d H:i:s' );

		$values = ( new Collection( $request->get_params() ) )
			->only( [
				'content',
				'status',
				'is_public',
				'is_resolved',
			] )
			->merge( [
				'updated_at' => $now,
			] )
			->merge( $request->has_param( 'is_resolved' ) ? [
				'last_activity_at' => $now,
			] : [] )
			->all();

		Note::query()
			->where( 'id', '=', $request->get_param( 'id' ) )
			->update( $values );

		// Need to refetch the note after update
		/** @var Note $note */
		$note = Note::query()->with_author()->find( $request->get_param( 'id' ) );

		if ( $request->has_param( 'mentioned_usernames' ) ) {
			$mentioned = $note->sync_mentions(
				$request->get_param( 'mentioned_usernames' ),
				'user_nicename'
			);
		}

		// TODO: Use events system.
		$this->on_note_updated( [
			'note' => $note,
			'actor' => User::from_wp_user( wp_get_current_user() ),
			'mentioned' => isset( $mentioned ) ? $mentioned : null,
			'resolved' => ! ! $request->get_param( 'is_resolved' ),
		] );

		return [
			'data' => $note,
			'meta' => [],
		];
	}

	/**
	 * Delete a note.
	 *
	 * DELETE `/notes/{id}`
	 *
	 * @param \WP_REST_Request $request
	 *
	 * @return \WP_REST_Response
	 * @throws \Elementor\Data\V2\Base\Exceptions\Error_404
	 */
	public function delete_item( $request ) {
		/** @var Note $note */
		$note = Note::query()->find( $request->get_param( 'id' ) );

		if ( ! $note ) {
			throw new Error_404();
		}

		Note::query()
			->where( 'id', '=', $note->id )
			->when(
				$request->get_param( 'force' ),
				function ( Note_Query_Builder $query ) {
					$query->delete( true );
				},
				function ( Note_Query_Builder $query ) {
					$query->trash();
				}
			);

		// TODO: Should return status 204 when the $e.data will support it
		return new \WP_REST_Response( [], Http_Status::OK );
	}

	/**
	 * @inheritDoc
	 */
	public function get_permission_callback( $request ) {
		$capability = null;
		$id = $request->get_param( 'id' );

		switch ( $request->get_method() ) {
			case 'GET':
				$capability = Capabilities::READ_NOTES;
				break;
			case 'POST':
				// When creating a note it checks if the user can create note for the parent note if 'parent_id' is provided.
				$id = $request->get_param( 'parent_id' );
				$capability = Capabilities::CREATE_NOTES;
				break;
			case 'PUT':
			case 'PATCH':
				$capability = Capabilities::EDIT_NOTES;
				break;
			case 'DELETE':
				$capability = Capabilities::DELETE_NOTES;
				break;
		}

		return $capability && current_user_can( $capability, $id );
	}

	/**
	 * Get the Notes filters.
	 *
	 * @return array
	 */
	public function get_filters() {
		return [
			'route_url' => function ( Note_Query_Builder $q, $url ) {
				$q->where( 'route_url', '=', $url );
			},
			'is_resolved' => function ( Note_Query_Builder $q, $is_resolved ) {
				$q->where( 'is_resolved', '=', $is_resolved );
			},
			'parent_id' => function ( Note_Query_Builder $q, $parent_id ) {
				$q->where( 'parent_id', '=', $parent_id );
			},
			'post_id' => function ( Note_Query_Builder $q, $post_id ) {
				$q->where( 'post_id', '=', $post_id );
			},
			'only_unread' => function ( Note_Query_Builder $q ) {
				$q->only_unread( get_current_user_id() );
			},
			'only_relevant' => function ( Note_Query_Builder $q ) {
				$q->only_relevant( get_current_user_id() );
			},
		];
	}

	/**
	 * Validates the create items endpoint.
	 *
	 * @param \WP_REST_Request $request
	 *
	 * @throws Data_Exception
	 * @throws Error_404
	 */
	private function validate_create_items( \WP_REST_Request $request ) {
		$parent_id = $request->get_param( 'parent_id' );

		if ( ! $parent_id ) {
			// The validation is related only if the new note should be reply.
			return;
		}

		/** @var Note $parent */
		$parent = Note::query()->find( $parent_id );

		if ( ! $parent ) {
			throw new Error_404();
		}

		if ( $parent->is_reply() ) {
			throw new Data_Exception(
				'Cannot create reply on reply.',
				'rest_invalid_param',
				[ 'status' => Http_Status::BAD_REQUEST ]
			);
		}

		if ( $request->has_param( 'is_public' ) ) {
			throw new Data_Exception(
				"Cannot update 'is_public' on reply.",
				'rest_invalid_param',
				[ 'status' => Http_Status::BAD_REQUEST ]
			);
		}
	}

	/**
	 * Validates the update item endpoint.
	 *
	 * @param \WP_REST_Request $request
	 *
	 * @throws Data_Exception
	 * @throws Error_404
	 */
	private function validate_update_items( \WP_REST_Request $request ) {
		/** @var Note $note */
		$note = Note::query()->find( $request->get_param( 'id' ) );

		if ( ! $note ) {
			throw new Error_404();
		}

		$has_invalid_reply_attributes = $request->has_param( 'is_resolved' ) || $request->has_param( 'is_public' );

		if ( $note->is_reply() && $has_invalid_reply_attributes ) {
			throw new Data_Exception(
				"Cannot update 'is_resolved' or 'is_public' on reply.",
				'rest_invalid_param',
				[ 'status' => Http_Status::BAD_REQUEST ]
			);
		}

		// For notifications - To make sure that there are no redundant resolve notifications.
		if ( $note->is_resolved === $request->get_param( 'is_resolved' ) ) {
			throw new Data_Exception(
				"'is_resolved' was already set on '{$note->is_resolved}'.",
				'rest_invalid_param',
				[ 'status' => Http_Status::BAD_REQUEST ]
			);
		}
	}

	/**
	 * Handle note creation side-effects.
	 *
	 * @param array $event
	 *
	 * @return void
	 */
	protected function on_note_created( array $event ) {
		foreach ( $event['mentioned'] as $user ) {
			$user->notify( new User_Mentioned_Notification( $event['note'], $event['actor'] ) );
		}

		if ( $event['note']->is_reply() ) {
			$relevant = User::query()->only_relevant_to_note( $event['note'] )->get();

			foreach ( $relevant as $user ) {
				$user->notify( new User_Replied_Notification(
					$event['note'],
					$event['actor'],
					$event['mentioned']->pluck( 'ID' )->all()
				) );
			}
		}
	}

	/**
	 * Handle note update side-effects.
	 *
	 * @param array $event
	 *
	 * @return void
	 */
	protected function on_note_updated( array $event ) {
		if ( ! empty( $event['mentioned'] ) ) {
			foreach ( $event['mentioned'] as $user ) {
				$user->notify( new User_Mentioned_Notification( $event['note'], $event['actor'] ) );
			}
		}

		if ( ! empty( $event['resolved'] ) ) {
			$relevant = User::query()->only_relevant_to_note( $event['note'] )->get();

			foreach ( $relevant as $user ) {
				$user->notify( new User_Resolved_Notification(
					$event['note'],
					$event['actor']
				) );
			}
		}
	}

	/**
	 * Sanitize note content.
	 *
	 *  - Trims empty lines & spaces from start/end of the string.
	 *  - Encodes HTML entities.
	 *
	 * @param string $raw_content
	 *
	 * @return string
	 */
	private function sanitize_content( $raw_content ) {
		return htmlentities( preg_replace( '/(^[\n\s]+|[\n\s]+$)/', '', $raw_content ) );
	}
}
