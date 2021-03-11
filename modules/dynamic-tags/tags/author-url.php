<?php
namespace ElementorPro\Modules\DynamicTags\Tags;

use Elementor\Controls_Manager;
use ElementorPro\Modules\DynamicTags\Tags\Base\Data_Tag;
use ElementorPro\Modules\DynamicTags\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Author_URL extends Data_Tag {

	public function get_name() {
		return 'author-url';
	}

	public function get_group() {
		return Module::AUTHOR_GROUP;
	}

	public function get_categories() {
		return [ Module::URL_CATEGORY ];
	}

	public function get_title() {
		return __( 'Author URL', 'elementor-pro' );
	}

	public function get_panel_template_setting_key() {
		return 'url';
	}

	public function get_value( array $options = [] ) {
		$value = '';

		if ( 'archive' === $this->get_settings( 'url' ) ) {
			global $authordata;

			if ( $authordata ) {
				$value = get_author_posts_url( $authordata->ID, $authordata->user_nicename );
			}
		} else {
			$value = get_the_author_meta( 'url' );
		}

		return $value;
	}

	protected function register_controls() {
		$this->add_control(
			'url',
			[
				'label' => __( 'URL', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'archive',
				'options' => [
					'archive' => __( 'Author Archive', 'elementor-pro' ),
					'website' => __( 'Author Website', 'elementor-pro' ),
				],
			]
		);
	}
}
