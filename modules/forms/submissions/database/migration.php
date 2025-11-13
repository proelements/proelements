<?php
namespace ElementorPro\Modules\Forms\Submissions\Database;

use Elementor\Core\Base\Base_Object;
use Elementor\Core\Utils\Collection;

class Migration extends Base_Object {
	const OPTION_DB_VERSION = 'elementor_submissions_db_version';

	// This version must be updated when new migration created.
	const CURRENT_DB_VERSION = 5;

	private static $migrations = [
		1 => Migrations\Initial::class,
		// It jumps from version 1 to 4 because some users already migrated the DB when the migrations system worked with the Elementor Pro version
		// when the int value of the version "3.2.0" was 3.
		4 => Migrations\Referer_Extra::class,
		5 => Migrations\Fix_Indexes::class,
	];

	/**
	 * Checks if there is a need to run migrations.
	 */
	public static function install() {
		$installed_version = intval( get_option( self::OPTION_DB_VERSION ) );

		// Up to date. Nothing to do.
		if ( static::CURRENT_DB_VERSION <= $installed_version ) {
			return;
		}

		global $wpdb;

		( new Collection( static::$migrations ) )
			->filter( function ( $_, $version ) use ( $installed_version ) {
				// Filter all the migrations that already done.
				return $version > $installed_version;
			} )
			->map( function ( $migration_class_name, $version ) use ( $wpdb ) {
				/** @var Migrations\Base_Migration $migration */
				$migration = new $migration_class_name( $wpdb );
				$migration->run();

				// In case some migration failed it updates version every migration.
				update_option( static::OPTION_DB_VERSION, $version );
			} );

		update_option( static::OPTION_DB_VERSION, self::CURRENT_DB_VERSION );
	}
}
