<?php
namespace ElementorPro\Modules\Posts\Widgets;

use Elementor\Controls_Manager;
use ElementorPro\Modules\QueryControl\Module as Module_Query;
use ElementorPro\Modules\QueryControl\Controls\Group_Control_Related;
use ElementorPro\Modules\Posts\Skins;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Class Posts
 */
class Posts extends Posts_Base {

	public function get_name() {
		return 'posts';
	}

	public function get_title() {
		return esc_html__( 'Posts', 'elementor-pro' );
	}

	public function get_keywords() {
		return [ 'posts', 'cpt', 'item', 'loop', 'query', 'cards', 'custom post type' ];
	}

	public function on_import( $element ) {
		if ( isset( $element['settings']['posts_post_type'] ) && ! get_post_type_object( $element['settings']['posts_post_type'] ) ) {
			$element['settings']['posts_post_type'] = 'post';
		}

		return $element;
	}

	protected function register_skins() {
		$this->add_skin( new Skins\Skin_Classic( $this ) );
		$this->add_skin( new Skins\Skin_Cards( $this ) );
		$this->add_skin( new Skins\Skin_Full_Content( $this ) );
	}

	protected function register_controls() {
		parent::register_controls();

		$this->register_query_section_controls();
		$this->register_pagination_section_controls();
	}

	/**
	 * Get Query Name
	 *
	 * Returns the query control name used in the widget's main query.
	 *
	 * @since 3.8.0
	 *
	 * @return string
	 */
	public function get_query_name() {
		return $this->get_name();
	}

	public function query_posts() {
		$query_args = [
			'posts_per_page' => $this->get_posts_per_page_value(),
			'paged' => $this->get_current_page(),
		];

		/** @var Module_Query $elementor_query */
		$elementor_query = Module_Query::instance();
		$this->query = $elementor_query->get_query( $this, $this->get_query_name(), $query_args, [] );
	}

	/**
	 * Get Posts Per Page Value
	 *
	 * Returns the value of the Posts Per Page control of the widget. This method was created because in some cases,
	 * the control is registered in the widget, and in some cases, it is registered in a widget skin.
	 *
	 * @since 3.8.0
	 * @access protected
	 *
	 * @return mixed
	 */
	protected function get_posts_per_page_value() {
		return $this->get_current_skin()->get_instance_value( 'posts_per_page' );
	}

	protected function register_query_section_controls() {
		$this->start_controls_section(
			'section_query',
			[
				'label' => esc_html__( 'Query', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_group_control(
			Group_Control_Related::get_type(),
			[
				'name' => $this->get_name(),
				'presets' => [ 'full' ],
				'exclude' => [
					'posts_per_page', //use the one from Layout section
				],
			]
		);

		$this->end_controls_section();
	}
}
