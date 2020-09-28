<?php
namespace ElementorPro\Modules\Social\Widgets;

use Elementor\Controls_Manager;
use ElementorPro\Base\Base_Widget;
use ElementorPro\Modules\Social\Classes\Facebook_SDK_Manager;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Facebook_Page extends Base_Widget {

	public function get_name() {
		return 'facebook-page';
	}

	public function get_title() {
		return esc_html__( 'Facebook Page', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-fb-feed';
	}

	public function get_keywords() {
		return [ 'facebook', 'social', 'embed', 'page' ];
	}

	protected function _register_controls() {
		$this->start_controls_section(
			'section_content',
			[
				'label' => __( 'Page', 'elementor-pro' ),
			]
		);

		Facebook_SDK_Manager::add_app_id_control( $this );

		$this->add_control(
			'url',
			[
				'label' => __( 'Link', 'elementor-pro' ),
				'placeholder' => 'https://www.facebook.com/your-page/',
				'default' => 'https://www.facebook.com/elemntor/',
				'label_block' => true,
				'description' => __( 'Paste the URL of the Facebook page.', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'tabs',
			[
				'label' => __( 'Layout', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT2,
				'multiple' => true,
				'label_block' => true,
				'default' => [
					'timeline',
				],
				'options' => [
					'timeline' => __( 'Timeline', 'elementor-pro' ),
					'events' => __( 'Events', 'elementor-pro' ),
					'messages' => __( 'Messages', 'elementor-pro' ),
				],
			]
		);

		$this->add_control(
			'small_header',
			[
				'label' => __( 'Small Header', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'default' => '',
			]
		);

		$this->add_control(
			'show_cover',
			[
				'label' => __( 'Cover Photo', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'default' => 'yes',
			]
		);

		$this->add_control(
			'show_facepile',
			[
				'label' => __( 'Profile Photos', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'default' => 'yes',
			]
		);

		$this->add_control(
			'show_cta',
			[
				'label' => __( 'Custom CTA Button', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'default' => 'yes',
			]
		);

		$this->add_control(
			'height',
			[
				'label' => __( 'Height', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'default' => [
					'unit' => 'px',
					'size' => 500,
				],
				'range' => [
					'px' => [
						'min' => 70,
						'max' => 1000,
					],
				],
				'size_units' => [ 'px' ],
			]
		);

		$this->end_controls_section();
	}

	public function render() {
		$settings = $this->get_settings();

		if ( empty( $settings['url'] ) ) {
			echo $this->get_title() . ': ' . esc_html__( 'Please enter a valid URL', 'elementor-pro' ); // XSS ok.

			return;
		}

		$height = $settings['height']['size'] . $settings['height']['unit'];

		$attributes = [
			'class' => 'elementor-facebook-widget fb-page',
			'data-href' => $settings['url'],
			'data-tabs' => implode( ',', $settings['tabs'] ),
			'data-height' => $height,
			'data-width' => '500px', // Try the max possible width
			'data-small-header' => $settings['small_header'] ? 'true' : 'false',
			'data-hide-cover' => $settings['show_cover'] ? 'false' : 'true', // if `show` - don't hide.
			'data-show-facepile' => $settings['show_facepile'] ? 'true' : 'false',
			'data-hide-cta' => $settings['show_cta'] ? 'false' : 'true', // if `show` - don't hide.
			// The style prevent's the `widget.handleEmptyWidget` to set it as an empty widget.
			'style' => 'min-height: 1px;height:' . $height,
		];

		$this->add_render_attribute( 'embed_div', $attributes );

		echo '<div ' . $this->get_render_attribute_string( 'embed_div' ) . '></div>'; // XSS ok.
	}

	public function render_plain_content() {}
}
