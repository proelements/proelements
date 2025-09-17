<?php
namespace ElementorPro\Modules\ThemeBuilder\Conditions;

use ElementorPro\Modules\QueryControl\Module as QueryModule;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Post_Type_By_Author extends Condition_Base {

	private $post_type;

	public static function get_type() {
		return 'singular';
	}

	public static function get_priority() {
		return 40;
	}

	public function __construct( $post_type ) {
		parent::__construct();

		$this->post_type = $post_type;
	}

	public function get_name() {
		return $this->post_type->name . '_by_author';
	}

	public function get_label() {
		/* translators: %s: Post type label. */
		return sprintf( esc_html__( '%s by author', 'elementor-pro' ), $this->post_type->label );
	}

	public function check( $args = null ) {
		return is_singular( $this->post_type->name ) && get_post_field( 'post_author' ) === $args['id'];
	}

	protected function register_controls() {
		$this->add_control(
			'author_id',
			[
				'section' => 'settings',
				'type' => QueryModule::QUERY_CONTROL_ID,
				'select2options' => [
					'dropdownCssClass' => 'elementor-conditions-select2-dropdown',
				],
				'autocomplete' => [
					'object' => QueryModule::QUERY_OBJECT_AUTHOR,
				],
			]
		);
	}
}
