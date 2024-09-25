<?php
namespace ElementorPro\Modules\Social\Widgets;

use Elementor\Controls_Manager;
use ElementorPro\Base\Base_Widget;
use ElementorPro\Modules\Social\Classes\Facebook_SDK_Manager;
use ElementorPro\Modules\Social\Module;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Facebook_Button extends Base_Widget {

	public function get_name() {
		return 'facebook-button';
	}

	public function get_title() {
		return esc_html__( 'Facebook Button', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-facebook-like-box';
	}

	public function get_keywords() {
		return [ 'facebook', 'social', 'embed', 'button', 'like', 'share', 'recommend', 'follow' ];
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
				'label' => esc_html__( 'Button', 'elementor-pro' ),
			]
		);

		Facebook_SDK_Manager::add_app_id_control( $this );

		$this->add_control(
			'type',
			[
				'label' => esc_html__( 'Type', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'like',
				'options' => [
					'like' => esc_html__( 'Like', 'elementor-pro' ),
					'recommend' => esc_html__( 'Recommend', 'elementor-pro' ),
				],
			]
		);

		$this->add_control(
			'layout',
			[
				'label' => esc_html__( 'Layout', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'standard',
				'options' => [
					'standard' => esc_html__( 'Standard', 'elementor-pro' ),
					'button' => esc_html__( 'Button', 'elementor-pro' ),
					'button_count' => esc_html__( 'Button Count', 'elementor-pro' ),
					'box_count' => esc_html__( 'Box Count', 'elementor-pro' ),
				],
			]
		);

		$this->add_control(
			'size',
			[
				'label' => esc_html__( 'Size', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'small',
				'options' => [
					'small' => esc_html__( 'Small', 'elementor-pro' ),
					'large' => esc_html__( 'Large', 'elementor-pro' ),
				],
			]
		);

		$this->add_control(
			'color_scheme',
			[
				'label' => esc_html__( 'Color Scheme', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'light',
				'options' => [
					'light' => esc_html__( 'Light', 'elementor-pro' ),
					'dark' => esc_html__( 'Dark', 'elementor-pro' ),
				],
			]
		);

		$this->add_control(
			'show_share',
			[
				'label' => esc_html__( 'Share Button', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'default' => '',
				'condition' => [
					'type!' => 'follow',
				],
			]
		);

		$this->add_control(
			'show_faces',
			[
				'label' => esc_html__( 'Faces', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'default' => '',
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
				'condition' => [
					'type' => [ 'like', 'recommend' ],
				],
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
					'type' => [ 'like', 'recommend' ],
					'url_type' => Module::URL_TYPE_CUSTOM,
				],
			]
		);

		$this->end_controls_section();
	}

	public function render() {
		$settings = $this->get_settings();

		// Validate URL
		switch ( $settings['type'] ) {
			case 'like':
			case 'recommend':
				if ( Module::URL_TYPE_CUSTOM === $settings['url_type'] && ! filter_var( $settings['url'], FILTER_VALIDATE_URL ) ) {
					if ( Plugin::elementor()->editor->is_edit_mode() ) {
						echo $this->get_title() . ': ' . esc_html__( 'Please enter a valid URL', 'elementor-pro' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
					}

					return;
				}
				break;
		}

		$attributes = [
			'data-layout' => $settings['layout'],
			'data-colorscheme' => $settings['color_scheme'],
			'data-size' => $settings['size'],
			'data-show-faces' => $settings['show_faces'] ? 'true' : 'false',
		];

		switch ( $settings['type'] ) {
			case 'like':
			case 'recommend':
				if ( Module::URL_TYPE_CURRENT_PAGE === $settings['url_type'] ) {
					$permalink = Facebook_SDK_Manager::get_permalink( $settings );
				} else {
					$permalink = esc_url( $settings['url'] );
				}

				$attributes['class'] = 'elementor-facebook-widget fb-like';
				$attributes['data-href'] = $permalink;
				$attributes['data-share'] = $settings['show_share'] ? 'true' : 'false';
				$attributes['data-action'] = $settings['type'];
				break;
		}

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
