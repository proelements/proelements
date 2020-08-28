<?php
namespace ElementorPro\Modules\Social\Widgets;

use Elementor\Controls_Manager;
use ElementorPro\Base\Base_Widget;
use ElementorPro\Modules\Social\Classes\Facebook_SDK_Manager;
use ElementorPro\Modules\Social\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Facebook_Comments extends Base_Widget {

	public function get_name() {
		return 'facebook-comments';
	}

	public function get_title() {
		return __( 'Facebook Comments', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-facebook-comments';
	}

	public function get_keywords() {
		return [ 'facebook', 'comments', 'embed' ];
	}

	protected function _register_controls() {
		$this->start_controls_section(
			'section_content',
			[
				'label' => __( 'Comments Box', 'elementor-pro' ),
			]
		);

		Facebook_SDK_Manager::add_app_id_control( $this );

		$this->add_control(
			'comments_number',
			[
				'label' => __( 'Comment Count', 'elementor-pro' ),
				'type' => Controls_Manager::NUMBER,
				'min' => 5,
				'max' => 100,
				'default' => '10',
				'description' => __( 'Minimum number of comments: 5', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'order_by',
			[
				'label' => __( 'Order By', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'social',
				'options' => [
					'social' => __( 'Social', 'elementor-pro' ),
					'reverse_time' => __( 'Reverse Time', 'elementor-pro' ),
					'time' => __( 'Time', 'elementor-pro' ),
				],
			]
		);

		$this->add_control(
			'url_type',
			[
				'label' => __( 'Target URL', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					Module::URL_TYPE_CURRENT_PAGE => __( 'Current Page', 'elementor-pro' ),
					Module::URL_TYPE_CUSTOM => __( 'Custom', 'elementor-pro' ),
				],
				'default' => Module::URL_TYPE_CURRENT_PAGE,
				'separator' => 'before',
			]
		);

		$this->add_control(
			'url_format',
			[
				'label' => __( 'URL Format', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					Module::URL_FORMAT_PLAIN => __( 'Plain Permalink', 'elementor-pro' ),
					Module::URL_FORMAT_PRETTY => __( 'Pretty Permalink', 'elementor-pro' ),
				],
				'default' => Module::URL_FORMAT_PLAIN,
				'condition' => [
					'url_type' => Module::URL_TYPE_CURRENT_PAGE,
				],
			]
		);

		$this->add_control(
			'url',
			[
				'label' => __( 'Link', 'elementor-pro' ),
				'placeholder' => __( 'https://your-link.com', 'elementor-pro' ),
				'label_block' => true,
				'condition' => [
					'url_type' => Module::URL_TYPE_CUSTOM,
				],
			]
		);

		$this->end_controls_section();
	}

	public function render() {
		$settings = $this->get_settings();

		if ( Module::URL_TYPE_CURRENT_PAGE === $settings['url_type'] ) {
			$permalink = Facebook_SDK_Manager::get_permalink( $settings );
		} else {
			if ( ! filter_var( $settings['url'], FILTER_VALIDATE_URL ) ) {
				echo $this->get_title() . ': ' . esc_html__( 'Please enter a valid URL', 'elementor-pro' ); // XSS ok.

				return;
			}

			$permalink = esc_url( $settings['url'] );
		}

		$attributes = [
			'class' => 'elementor-facebook-widget fb-comments',
			'data-href' => $permalink,
			'data-width' => '100%',
			'data-numposts' => $settings['comments_number'],
			'data-order-by' => $settings['order_by'],
			// The style prevent's the `widget.handleEmptyWidget` to set it as an empty widget
			'style' => 'min-height: 1px',
		];

		$this->add_render_attribute( 'embed_div', $attributes );

		echo '<div ' . $this->get_render_attribute_string( 'embed_div' ) . '></div>'; // XSS ok.
	}

	public function render_plain_content() {}
}
