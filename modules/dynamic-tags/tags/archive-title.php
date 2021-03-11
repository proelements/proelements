<?php
namespace ElementorPro\Modules\DynamicTags\Tags;

use Elementor\Controls_Manager;
use ElementorPro\Modules\DynamicTags\Tags\Base\Tag;
use ElementorPro\Core\Utils;
use ElementorPro\Modules\DynamicTags\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Archive_Title extends Tag {
	public function get_name() {
		return 'archive-title';
	}

	public function get_title() {
		return __( 'Archive Title', 'elementor-pro' );
	}

	public function get_group() {
		return Module::ARCHIVE_GROUP;
	}

	public function get_categories() {
		return [ Module::TEXT_CATEGORY ];
	}

	public function render() {
		$include_context = 'yes' === $this->get_settings( 'include_context' );

		$title = Utils::get_page_title( $include_context );

		echo wp_kses_post( $title );
	}

	protected function register_controls() {
		$this->add_control(
			'include_context',
			[
				'label' => __( 'Include Context', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'default' => 'yes',
			]
		);
	}
}
