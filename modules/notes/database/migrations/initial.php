<?php
namespace ElementorPro\Modules\Notes\Database\Migrations;

use ElementorPro\Core\Database\Base_Migration;
use ElementorPro\Modules\Notes\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Initial extends Base_Migration {
	/**
	 * @inheritDoc
	 */
	public function up() {
		$this->create_table( Module::TABLE_NOTES, [
			'id' => 'bigint(20) unsigned auto_increment primary key',
			'route_url' => 'text null comment "Clean url where the note was created."',
			'route_title' => 'varchar(255) null',
			'post_id' => 'bigint(20) unsigned null',
			'element_id' => 'varchar(60) null comment "The Elementor element ID the note is attached to."',
			'parent_id' => 'bigint(20) unsigned default 0 not null',
			'author_id' => 'bigint(20) unsigned null',
			'status' => 'varchar(20) default "publish" not null',
			'content' => 'longtext null',
			'is_resolved' => 'tinyint(1) default 0 not null',
			'is_public' => 'tinyint(1) default 1 not null',
			'last_activity_at' => 'datetime null',
			'created_at' => 'datetime not null',
			'updated_at' => 'datetime not null',
		] );

		$this->create_indexes(
			Module::TABLE_NOTES,
			[
				'route_url',
				'post_id',
				'element_id',
				'parent_id',
				'author_id',
				'status',
				'is_resolved',
				'is_public',
				'created_at',
				'updated_at',
				'last_activity_at',
			]
		);

		$this->create_table( Module::TABLE_NOTES_USERS_RELATIONS, [
			'id' => 'bigint(20) unsigned auto_increment primary key',
			'type' => 'varchar(60) not null comment "The relation type between user and note (e.g mention, watch, read)."',
			'note_id' => 'bigint(20) unsigned not null',
			'user_id' => 'bigint(20) unsigned not null',
			'created_at' => 'datetime not null',
			'updated_at' => 'datetime not null',
		] );

		$this->create_indexes(
			Module::TABLE_NOTES_USERS_RELATIONS,
			[ 'type', 'note_id', 'user_id' ]
		);
	}

	/**
	 * @inheritDoc
	 */
	public function down() {
		$this->drop_table( Module::TABLE_NOTES );
		$this->drop_table( Module::TABLE_NOTES_USERS_RELATIONS );
	}
}
