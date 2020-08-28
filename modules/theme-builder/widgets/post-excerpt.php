<?php
namespace ElementorPro\Modules\ThemeBuilder\Widgets;

use Elementor\Controls_Manager;
use Elementor\Core\Kits\Documents\Tabs\Global_Colors;
use Elementor\Core\Kits\Documents\Tabs\Global_Typography;
use Elementor\Group_Control_Typography;
use ElementorPro\Base\Base_Widget;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Post_Excerpt extends Base_Widget {

	public function get_name() {
		// `theme` prefix is to avoid conflicts with a dynamic-tag with same name.
		return 'theme-post-excerpt';
	}

	public function get_title() {
		return __( 'Post Excerpt', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-post-excerpt';
	}

	public function get_categories() {
		return [ 'theme-elements-single' ];
	}

	public function get_keywords() {
		return [ 'post', 'excerpt', 'description' ];
	}

	protected function _register_controls() {
		$this->start_controls_section(
			'section_content',
			[
				'label' => __( 'Content', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'excerpt',
			[
				'type' => Controls_Manager::TEXT,
				'label_block' => true,
				'dynamic' => [
					'active' => true,
					'default' => Plugin::elementor()->dynamic_tags->tag_data_to_tag_text( null, 'post-excerpt' ),
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_style',
			[
				'label' => __( 'Style', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'title_color',
			[
				'label' => __( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'global' => [
					'default' => Global_Colors::COLOR_TEXT,
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-widget-container' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'typography',
				'global' => [
					'default' => Global_Typography::TYPOGRAPHY_TEXT,
				],
				'selector' => '{{WRAPPER}} .elementor-widget-container',
			]
		);

		$this->end_controls_section();
	}

	protected function render() {
		echo $this->get_settings_for_display( 'excerpt' );
	}
}
