<?php
namespace ElementorPro\Modules\Notes\Database\Models;

use ElementorPro\Modules\Notes\Module;
use ElementorPro\Core\Database\Model_Base;
use ElementorPro\Modules\Notes\Database\Query\Note_Query_Builder;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Note_Summary extends Model_Base {
	/**
	 * @var string
	 */
	public $url = null;

	/**
	 * @var string
	 */
	public $full_url = null;

	/**
	 * @var string
	 */
	public $title = null;

	/**
	 * @var int
	 */
	public $notes_count = 0;

	/**
	 * Casts array.
	 *
	 * @var array
	 */
	protected static $casts = [
		'notes_count' => self::TYPE_INTEGER,
	];

	/**
	 * @inheritDoc
	 */
	public function __construct( array $fields ) {
		// Make sure each model comes with the full url alongside with the relative url.
		$fields['full_url'] = get_site_url( null, $fields['url'] );

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
		$table_name = static::get_table();

		return ( new Note_Query_Builder( $connection ) )
			->set_model( static::class )
			->from( $table_name )
			->select( [
				'title' => 'route_title',
				'url' => 'route_url',
			] )
			->add_count_select( "{$table_name}.id", 'notes_count' )
			->group_by( 'route_url' );
	}

	/**
	 * Get the notes table name.
	 *
	 * @return string
	 */
	public static function get_table() {
		return Module::TABLE_NOTES;
	}
}
