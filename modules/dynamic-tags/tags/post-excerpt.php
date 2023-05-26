<?php
namespace ElementorPro\Modules\DynamicTags\Tags;

use Elementor\Controls_Manager;
use ElementorPro\Core\Utils;
use ElementorPro\Modules\DynamicTags\Tags\Base\Tag;
use ElementorPro\Modules\DynamicTags\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Post_Excerpt extends Tag {
	public function get_name() {
		return 'post-excerpt';
	}

	public function get_title() {
		return esc_html__( 'Post Excerpt', 'elementor-pro' );
	}

	public function get_group() {
		return Module::POST_GROUP;
	}

	protected function register_controls() {

		$this->add_control(
			'max_length',
			[
				'label' => esc_html__( 'Excerpt Length', 'elementor-pro' ),
				'type' => Controls_Manager::NUMBER,
			]
		);

		$this->add_control(
			'apply_to_post_content',
			[
				'label' => esc_html__( 'Apply to post content', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Yes', 'elementor-pro' ),
				'label_off' => esc_html__( 'No', 'elementor-pro' ),
				'default' => 'no',
			]
		);
	}

	public function get_categories() {
		return [ Module::TEXT_CATEGORY ];
	}

	public function should_get_excerpt_from_post_content( $settings ) {
		return 'yes' === $settings['apply_to_post_content'];
	}

	public function is_post_excerpt_valid( $settings, $post ) {
		if ( ! $post ) {
			return false;
		}

		if ( empty( $post->post_excerpt ) && ! $this->should_get_excerpt_from_post_content( $settings ) ) {
			return false;
		}

		if ( empty( $post->post_excerpt ) && empty( $post->post_content ) && $this->should_get_excerpt_from_post_content( $settings ) ) {
			return false;
		}

		if ( empty( $post->post_excerpt ) && empty( $post->post_content ) ) {
			return false;
		}

		return true;
	}

	public function get_post_excerpt( $settings, $post ) {
		$post_excerpt = $post->post_excerpt ?? '';

		if ( empty( $post_excerpt ) && ! empty( $post->post_content ) && $this->should_get_excerpt_from_post_content( $settings ) ) {
			$post_excerpt = apply_filters( 'the_excerpt', get_the_excerpt( $post ) );
		}

		return $post_excerpt;
	}

	public function render() {
		// Allow only a real `post_excerpt` and not the trimmed `post_content` from the `get_the_excerpt` filter
		$post = get_post();
		$settings = $this->get_settings_for_display();

		if ( ! $this->is_post_excerpt_valid( $settings, $post ) ) {
			return;
		}

		$max_length = (int) $settings['max_length'];
		$excerpt = $this->get_post_excerpt( $settings, $post );

		$excerpt = Utils::trim_words( $excerpt, $max_length );

		echo wp_kses_post( $excerpt );
	}
}
