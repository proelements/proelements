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
		return esc_html__( 'Facebook Comments', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-facebook-comments';
	}

	public function get_keywords() {
		return [ 'facebook', 'comments', 'embed' ];
	}

	/**
	 * Get style dependencies.
	 *
	 * Retrieve the list of style dependencies the widget requires.
	 *
	 * @since 3.24.0
	 * @access public
	 *
	 * @return array Widget style dependencies.
	 */
	public function get_style_depends(): array {
		return [ 'widget-social' ];
	}

	protected function register_controls() {
		$this->start_controls_section(
			'section_content',
			[
				'label' => esc_html__( 'Comments Box', 'elementor-pro' ),
			]
		);

		Facebook_SDK_Manager::add_app_id_control( $this );

		$this->add_control(
			'comments_number',
			[
				'label' => esc_html__( 'Comment Count', 'elementor-pro' ),
				'type' => Controls_Manager::NUMBER,
				'min' => 5,
				'max' => 100,
				'default' => '10',
				'description' => esc_html__( 'Minimum number of comments: 5', 'elementor-pro' ),
				'dynamic' => [
					'active' => true,
				],
			]
		);

		$this->add_control(
			'order_by',
			[
				'label' => esc_html__( 'Order By', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'social',
				'options' => [
					'social' => esc_html__( 'Social', 'elementor-pro' ),
					'reverse_time' => esc_html__( 'Reverse Time', 'elementor-pro' ),
					'time' => esc_html__( 'Time', 'elementor-pro' ),
				],
			]
		);

		$this->add_control(
			'url_type',
			[
				'label' => esc_html__( 'Target URL', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					Module::URL_TYPE_CURRENT_PAGE => esc_html__( 'Current Page', 'elementor-pro' ),
					Module::URL_TYPE_CUSTOM => esc_html__( 'Custom', 'elementor-pro' ),
				],
				'default' => Module::URL_TYPE_CURRENT_PAGE,
				'separator' => 'before',
			]
		);

		$this->add_control(
			'url_format',
			[
				'label' => esc_html__( 'URL Format', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					Module::URL_FORMAT_PLAIN => esc_html__( 'Plain Permalink', 'elementor-pro' ),
					Module::URL_FORMAT_PRETTY => esc_html__( 'Pretty Permalink', 'elementor-pro' ),
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
				'label' => esc_html__( 'Link', 'elementor-pro' ),
				'placeholder' => esc_html__( 'https://your-link.com', 'elementor-pro' ),
				'label_block' => true,
				'condition' => [
					'url_type' => Module::URL_TYPE_CUSTOM,
				],
			]
		);

		$this->end_controls_section();
	}

	public function render() {
		$settings = $this->get_settings_for_display();

		if ( Module::URL_TYPE_CURRENT_PAGE === $settings['url_type'] ) {
			$permalink = Facebook_SDK_Manager::get_permalink( $settings );
		} else {
			if ( ! filter_var( $settings['url'], FILTER_VALIDATE_URL ) ) {
				echo $this->get_title() . ': ' . esc_html__( 'Please enter a valid URL', 'elementor-pro' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped

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
		?>
		<div <?php $this->print_render_attribute_string( 'embed_div' ); ?>></div>
		<?php
	}

	public function render_plain_content() {}

	public function get_group_name() {
		return 'social';
	}
}
