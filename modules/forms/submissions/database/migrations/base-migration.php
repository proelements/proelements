<?php
namespace ElementorPro\Modules\Forms\Submissions\Database\Migrations;

use Elementor\Core\Base\Base_Object;
use ElementorPro\Modules\Forms\Submissions\Database\Query;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

abstract class Base_Migration extends Base_Object {
	/*
	 * Ref: wp-admin/includes/schema.php::wp_get_db_schema
	 *
	 * Indexes have a maximum size of 767 bytes. Historically, we haven't need to be concerned about that.
	 * As of 4.2, however, we moved to utf8mb4, which uses 4 bytes per character. This means that an index which
	 * used to have room for floor(767/3) = 255 characters, now only has room for floor(767/4) = 191 characters.
	 */
	const MAX_INDEX_LENGTH = 191;

	/**
	 * @var \wpdb
	 */
	protected $wpdb;

	/**
	 * @var Query
	 */
	protected $query;

	/**
	 * Base_Migration constructor.
	 *
	 * @param \wpdb $wpdb
	 */
	public function __construct( \wpdb $wpdb ) {
		$this->wpdb = $wpdb;
		$this->query = Query::get_instance();
	}

	/**
	 * Run migration.
	 *
	 * @return void
	 */
	abstract public function run();
}
