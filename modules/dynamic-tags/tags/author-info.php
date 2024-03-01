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
