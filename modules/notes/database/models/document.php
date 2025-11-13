<?php

namespace ElementorPro\Modules\Notes\Database\Models;

use ElementorPro\Plugin;
use ElementorPro\Core\Database\Model_Base;
use ElementorPro\Core\Database\Join_Clause;
use ElementorPro\Core\Database\Query_Builder;
use Elementor\Core\Base\Document as OriginalDocument;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Document extends Model_Base {
	/**
	 * The document id (post_id)
	 *
	 * @var integer
	 */
	public $ID;

	/**
	 * The type of the document (post meta key = '_elementor_template_type')
	 *
	 * @var string
	 */
	public $type;

	/**
	 * Casts array.
	 *
	 * @var array
	 */
	protected static $casts = [
		'ID' => self::TYPE_INTEGER,
	];

	/**
	 * Override the default Query Builder.
	 *
	 * @param \wpdb|null $connection
	 *
	 * @return Query_Builder
	 */
	public static function query( \wpdb $connection = null ) {
		// PHPCS has an error without any reason, the method 'query' is not related to the `wpdb` object.
		return parent::query( $connection ) // phpcs:ignore WordPress.DB.PreparedSQL.NotPrepared
			->select( [
				'ID',
				'type' => 'postmeta.meta_value',
			] )
			->left_join( function ( Join_Clause $j ) {
				return $j->table( 'postmeta' )
					->on_column( 'posts.ID', '=', 'postmeta.post_id' )
					->on( 'postmeta.meta_key', '=', OriginalDocument::TYPE_META_KEY );
			} );
	}

	/**
	 * Get the posts table name.
	 *
	 * @return string
	 */
	public static function get_table() {
		return 'posts';
	}

	/**
	 * Get the label of a document.
	 *
	 * @return string|null
	 */
	public function get_type_title() {
		if ( ! $this->type ) {
			return null;
		}

		$type_classname = Plugin::elementor()->documents->get_document_type( $this->type );

		return $type_classname ? $type_classname::get_title() : null;
	}

	/**
	 * Return a JSON serialized representation of the User.
	 *
	 * @return array
	 */
	#[\ReturnTypeWillChange]
	public function jsonSerialize() {
		return [
			'id' => $this->ID,
			'type' => $this->type,
			'type_title' => $this->get_type_title(),
		];
	}
}
