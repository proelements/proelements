<?php
namespace ElementorPro\Modules\DynamicTags\Tags\Base;

use ElementorPro\Modules\DynamicTags\Tags\Base\Tag;
use ElementorPro\Modules\DynamicTags\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

abstract class Author_Tag extends Tag {

	public function get_categories() {
		return [ Module::TEXT_CATEGORY ];
	}

	public function get_panel_template_setting_key() {
		return 'key';
	}

	public function get_group() {
		return Module::AUTHOR_GROUP;
	}

	private function is_field_allowed( $field ) {
		return ! in_array( $field, $this->get_not_allowed_fields(), true );
	}

	private function get_not_allowed_fields() {
		$not_allowed_fields = [
			'user_login',
			'user_pass',
			'user_registered',
			'user_activation_key',
			'user_status',
			'user_email',
			// WordPress allows these aliases.
			'login',
			'pass',
			'registered',
			'activation_key',
			'status',
			'email',
		];

		if ( $this->allow_email_key_for_admins_only() ) {
			unset( $not_allowed_fields[ array_search( 'user_email', $not_allowed_fields ) ] );
			unset( $not_allowed_fields[ array_search( 'email', $not_allowed_fields ) ] );
		}

		return $not_allowed_fields;
	}

	private function allow_email_key_for_admins_only() {
		return current_user_can( 'manage_options' ) || $this->is_post_authored_by_admin();
	}

	private function is_post_authored_by_admin() {
		global $post;

		$post_author_id = $post->post_author ?? 0;

		return user_can( $post_author_id, 'manage_options' );
	}

	public function render() {
		$key = $this->get_settings( 'key' );

		if ( empty( $key ) || ! $this->is_field_allowed( $key ) ) {
			return;
		}

		$value = get_the_author_meta( $key );

		echo wp_kses_post( $value );
	}
}
