<?php
namespace ElementorPro\Modules\ThemeBuilder\Widgets;

use Elementor\Controls_Manager;
use Elementor\Core\Kits\Documents\Tabs\Global_Colors;
use Elementor\Core\Kits\Documents\Tabs\Global_Typography;
use Elementor\Group_Control_Typography;
use ElementorPro\Modules\Posts\Widgets\Posts_Base;
use ElementorPro\Modules\ThemeBuilder\Skins;
use ElementorPro\Modules\QueryControl\Module as Query_Control;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Class Posts
 */
class Archive_Posts extends Posts_Base {

	public function get_name() {
		return 'archive-posts';
	}

	public function get_title() {
		return esc_html__( 'Archive Posts', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-archive-posts';
	}

	public function get_categories() {
		return [ 'theme-elements-archive' ];
	}

	public function get_keywords() {
		return [ 'posts', 'cpt', 'archive', 'loop', 'query', 'cards', 'custom post type' ];
	}

	public function get_inline_css_depends() {
		return [ 'posts' ];
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
		return [ 'widget-posts' ];
	}

	protected function register_skins() {
		$this->add_skin( new Skins\Posts_Archive_Skin_Classic( $this ) );
		$this->add_skin( new Skins\Posts_Archive_Skin_Cards( $this ) );
		$this->add_skin( new Skins\Posts_Archive_Skin_Full_Content( $this ) );
	}

	protected function register_controls() {
		parent::register_controls();

		$this->register_pagination_section_controls();

		$this->register_advanced_section_controls();

		$this->update_control(
			'pagination_type',
			[
				'default' => 'numbers',
			]
		);
	}

	public function register_advanced_section_controls() {
		$this->start_controls_section(
			'section_advanced',
			[
				'label' => esc_html__( 'Advanced', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'nothing_found_message',
			[
				'label' => esc_html__( 'Nothing Found Message', 'elementor-pro' ),
				'type' => Controls_Manager::TEXTAREA,
				'default' => esc_html__( 'It seems we can\'t find what you\'re looking for.', 'elementor-pro' ),
				'dynamic' => [
					'active' => true,
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_nothing_found_style',
			[
				'tab' => Controls_Manager::TAB_STYLE,
				'label' => esc_html__( 'Nothing Found Message', 'elementor-pro' ),
				'condition' => [
					'nothing_found_message!' => '',
				],
			]
		);

		$this->add_control(
			'nothing_found_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'global' => [
					'default' => Global_Colors::COLOR_TEXT,
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-posts-nothing-found' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'nothing_found_typography',
				'global' => [
					'default' => Global_Typography::TYPOGRAPHY_TEXT,
				],
				'selector' => '{{WRAPPER}} .elementor-posts-nothing-found',
			]
		);

		$this->end_controls_section();
	}

	public function query_posts() {
		global $wp_query;

		$query_vars = $wp_query->query_vars;

		/**
		 * Posts archive query vars.
		 *
		 * Filters the post query variables when the theme loads the posts archive page.
		 *
		 * @since 2.0.0
		 *
		 * @param array $query_vars The query variables for the `WP_Query`.
		 */
		$query_vars = apply_filters( 'elementor/theme/posts_archive/query_posts/query_vars', $query_vars );

		if ( $query_vars !== $wp_query->query_vars ) {
			$this->query = new \WP_Query( $query_vars ); // SQL_CALC_FOUND_ROWS is used.
		} else {
			$this->query = $wp_query;
		}

		Query_Control::add_to_avoid_list( wp_list_pluck( $this->query->posts, 'ID' ) );
	}
}
