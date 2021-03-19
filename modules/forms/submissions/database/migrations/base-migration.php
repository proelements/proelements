<?php
namespace ElementorPro\Modules\Forms\Submissions\Database\Migrations;

use Elementor\Core\Base\Base_Object;
use ElementorPro\Modules\Forms\Submissions\Database\Query;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

abstract class Base_Migration extends Base_Object {
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
