<?php
namespace ElementorPro\Modules\LoopBuilder\Widgets;

use Elementor\Controls_Manager;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Loop_Grid extends Base {

	public function get_name() {
		return 'loop-grid';
	}

	public function get_title() {
		return esc_html__( 'Loop Grid', 'elementor-pro' );
	}

	public function get_keywords() {
		return [ 'loop', 'dynamic', 'listing', 'archive', 'blog', 'repeater', 'grid', 'products', 'posts', 'portfolio', 'cpt', 'query', 'custom post type' ];
	}

	public function get_icon() {
		return 'eicon-loop-builder';
	}

	protected function register_layout_section() {
		parent::register_layout_section();

		$this->start_injection( [
			'of' => 'posts_per_page',
		] );

		$this->add_control(
			'masonry',
			[
				'label' => esc_html__( 'Masonry', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_off' => esc_html__( 'Off', 'elementor-pro' ),
				'label_on' => esc_html__( 'On', 'elementor-pro' ),
				'condition' => [
					'columns!' => 1,
					'template_id!' => '',
				],
				'render_type' => 'ui',
				'frontend_available' => true,
			]
		);

		$this->end_injection();
	}
}
