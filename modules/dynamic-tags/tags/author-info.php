<?php
namespace ElementorPro\Modules\DynamicTags\Tags;

use Elementor\Controls_Manager;
use ElementorPro\Modules\DynamicTags\Tags\Base\Author_Tag;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Author_Info extends Author_Tag {

	public function get_name() {
		return 'author-info';
	}

	public function get_title() {
		return esc_html__( 'Author Info', 'elementor-pro' );
	}

	public function get_editor_config() {
		$config = parent::get_editor_config();

		$config['display_conditions'] = [
			'author_info_bio' => [
				'label' => esc_html__( 'Author Bio', 'elementor-pro' ),
				'settings' => [ 'key' => 'description' ],
				'group' => 'author',
			],
			'author_info_email' => [
				'label' => esc_html__( 'Author Email', 'elementor-pro' ),
				'settings' => [ 'key' => 'email' ],
				'group' => 'author',
			],
			'author_info_website' => [
				'label' => esc_html__( 'Author Website', 'elementor-pro' ),
				'settings' => [ 'key' => 'url' ],
				'group' => 'author',
			],
		];

		return $config;
	}

	protected function register_controls() {
		$this->add_control(
			'key',
			[
				'label' => esc_html__( 'Field', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'description',
				'options' => $this->get_key_options(),
			]
		);
	}

	private function get_key_options() {
		$options = [];
		$options['description'] = esc_html__( 'Bio', 'elementor-pro' );

		if ( current_user_can( 'manage_options' ) ) {
			$options['email'] = esc_html__( 'Email', 'elementor-pro' );
		}

		$options['url'] = esc_html__( 'Website', 'elementor-pro' );

		return $options;
	}
}
