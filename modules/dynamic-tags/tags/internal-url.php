<?php
namespace ElementorPro\Modules\DynamicTags\Tags;

use Elementor\Controls_Manager;
use ElementorPro\Modules\DynamicTags\Tags\Base\Data_Tag;
use ElementorPro\Modules\DynamicTags\Module;
use ElementorPro\Modules\QueryControl\Module as QueryModule;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Internal_URL extends Data_Tag {

	public function get_name() {
		return 'internal-url';
	}

	public function get_group() {
		return Module::SITE_GROUP;
	}

	public function get_categories() {
		return [ Module::URL_CATEGORY ];
	}

	public function get_title() {
		return esc_html__( 'Internal URL', 'elementor-pro' );
	}

	public function get_panel_template() {
		return ' ({{ url }})';
	}

	public static function on_import_replace_dynamic_content( $config, $map_old_new_post_ids ) {
		if ( isset( $config['settings']['post_id'] ) ) {
			$config['settings']['post_id'] = $map_old_new_post_ids[ $config['settings']['post_id'] ];
		}

		return $config;
	}

	public function get_value( array $options = [] ) {
		$settings = $this->get_settings();

		$type = $settings['type'];
		$url = '';

		if ( 'post' === $type && ! empty( $settings['post_id'] ) ) {
			$url = get_permalink( (int) $settings['post_id'] );
		} elseif ( 'taxonomy' === $type && ! empty( $settings['taxonomy_id'] ) ) {
			$url = get_term_link( (int) $settings['taxonomy_id'] );
		} elseif ( 'attachment' === $type && ! empty( $settings['attachment_id'] ) ) {
			$url = get_attachment_link( (int) $settings['attachment_id'] );
		} elseif ( 'author' === $type && ! empty( $settings['author_id'] ) ) {
			$url = get_author_posts_url( (int) $settings['author_id'] );
		}

		if ( ! is_wp_error( $url ) ) {
			return $url;
		}

		return '';
	}

	protected function register_controls() {
		$this->add_control( 'type', [
			'label' => esc_html__( 'Type', 'elementor-pro' ),
			'type' => Controls_Manager::SELECT,
			'options' => [
				'post' => esc_html__( 'Content', 'elementor-pro' ),
				'taxonomy' => esc_html__( 'Taxonomy', 'elementor-pro' ),
				'attachment' => esc_html__( 'Media', 'elementor-pro' ),
				'author' => esc_html__( 'Author', 'elementor-pro' ),
			],
		] );

		$this->add_control( 'post_id', [
			'label' => esc_html__( 'Search & Select', 'elementor-pro' ),
			'type' => QueryModule::QUERY_CONTROL_ID,
			'options' => [],
			'label_block' => true,
			'autocomplete' => [
				'object' => QueryModule::QUERY_OBJECT_POST,
				'display' => 'detailed',
				'query' => [
					'post_type' => 'any',
				],
			],
			'condition' => [
				'type' => 'post',
			],
		] );

		$this->add_control( 'taxonomy_id', [
			'label' => esc_html__( 'Search & Select', 'elementor-pro' ),
			'type' => QueryModule::QUERY_CONTROL_ID,
			'options' => [],
			'label_block' => true,
			'autocomplete' => [
				'object' => QueryModule::QUERY_OBJECT_TAX,
				'display' => 'detailed',
			],
			'condition' => [
				'type' => 'taxonomy',
			],
		] );

		$this->add_control( 'attachment_id', [
			'label' => esc_html__( 'Search & Select', 'elementor-pro' ),
			'type' => QueryModule::QUERY_CONTROL_ID,
			'options' => [],
			'label_block' => true,
			'autocomplete' => [
				'object' => QueryModule::QUERY_OBJECT_ATTACHMENT,
				'display' => 'detailed',
			],
			'condition' => [
				'type' => 'attachment',
			],
		] );

		$this->add_control( 'author_id', [
			'label' => esc_html__( 'Search & Select', 'elementor-pro' ),
			'type' => QueryModule::QUERY_CONTROL_ID,
			'options' => [],
			'label_block' => true,
			'autocomplete' => [
				'object' => QueryModule::QUERY_OBJECT_AUTHOR,
				'display' => 'detailed',
			],
			'condition' => [
				'type' => 'author',
			],
		] );
	}
}
