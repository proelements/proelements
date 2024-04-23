<?php
namespace ElementorPro\Modules\DynamicTags\Tags;

use Elementor\Controls_Manager;
use ElementorPro\Modules\DynamicTags\Tags\Base\Tag;
use ElementorPro\Modules\DynamicTags\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Shortcode extends Tag {
	public function get_name() {
		return 'shortcode';
	}

	public function get_title() {
		return esc_html__( 'Shortcode', 'elementor-pro' );
	}

	public function get_group() {
		return Module::SITE_GROUP;
	}

	public function get_categories() {
		return [
			Module::TEXT_CATEGORY,
			Module::NUMBER_CATEGORY,
			Module::URL_CATEGORY,
			Module::POST_META_CATEGORY,
			Module::DATETIME_CATEGORY,
		];
	}

	protected function register_controls() {
		$this->add_control(
			'shortcode',
			[
				'label' => esc_html__( 'Shortcode', 'elementor-pro' ),
				'type'  => Controls_Manager::TEXTAREA,
				'ai' => [
					'active' => false,
				],
			],
		);
	}

	public function render() {
		$settings = $this->get_settings();

		if ( empty( $settings['shortcode'] ) ) {
			return;
		}

		$shortcode_string = $settings['shortcode'];

		$value = do_shortcode( $shortcode_string );

		$should_escape = true;

		/**
		 * Should escape shortcodes.
		 *
		 * By default shortcodes in dynamic tags are escaped. This hook allows developers
		 * to avoid shortcodes from beeing escaped. Defaults to true.
		 *
		 * @since 2.2.1
		 *
		 * @param bool $should_escape Whether to escape shortcodes in dynamic tags.
		 */
		$should_escape = apply_filters( 'elementor_pro/dynamic_tags/shortcode/should_escape', $should_escape );

		if ( $should_escape ) {
			$value = wp_kses_post( $value );
		}
		// PHPCS - the variable $value is safe.
		echo $value; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}
}
