<?php
namespace ElementorPro\Modules\LoopBuilder\Skins;

use Elementor\Core\Files\CSS\Post;
use Elementor\Core\Files\CSS\Post as Post_CSS;
use Elementor\Core\Files\CSS\Post_Preview;
use Elementor\Icons_Manager;
use ElementorPro\Modules\LoopBuilder\Documents\Loop;
use ElementorPro\Modules\LoopBuilder\Documents\Loop as LoopDocument;
use ElementorPro\Modules\LoopBuilder\Module;
use ElementorPro\Modules\LoopBuilder\Widgets\Base as Loop_Widget_Base;
use ElementorPro\Modules\Posts\Skins\Skin_Base;
use ElementorPro\Modules\QueryControl\Controls\Group_Control_Related;
use ElementorPro\Plugin;
use ElementorPro\Modules\LoopBuilder\Files\Css\Loop_Dynamic_CSS;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Loop Base
 *
 * Base Skin for Loop widgets.
 *
 * @since 3.8.0
 */
class Skin_Loop_Base extends Skin_Base {

	public $already_added_border = [];
	private $current_alternate_template_repetaer_id = null;

	public function get_id() {
		return MODULE::LOOP_BASE_SKIN_ID;
	}

	public function get_title() {
		return esc_html__( 'Loop Base', 'elementor-pro' );
	}

	/**
	 * Register Query Controls
	 *
	 * Registers the controls for the query used by the Loop.
	 *
	 * @since 3.8.0
	 */
	public function register_query_controls( Loop_Widget_Base $widget ) {
		$this->parent = $widget;

		$this->add_group_control(
			Group_Control_Related::get_type(),
			[
				'name' => Module::QUERY_ID,
				'presets' => [ 'full' ],
				'exclude' => [
					'posts_per_page', // Use the one from Layout section
				],
			]
		);
	}

	private function maybe_add_load_more_wrapper_class() {
		$settings = $this->parent->get_settings_for_display();
		/** @var Loop_Widget_Base $widget */
		$widget = $this->parent;

		if ( isset( $settings['pagination_type'] ) && 'load_more_on_click' === $settings['pagination_type'] ) {
			// If Pagination is enabled with the Load More On Click option, a class is needed for targeting.
			// The 'wrapper' element tag is used by the Button Widget Trait.
			$widget->add_render_attribute( 'wrapper', 'class', 'e-loop__load-more' );
		}
	}

	public function render() {
		$settings = $this->parent->get_settings_for_display();
		$is_edit_mode = Plugin::elementor()->editor->is_edit_mode();
		/** @var Loop_Widget_Base $widget */
		$widget = $this->parent;
		$current_document = Plugin::elementor()->documents->get_current();

		if ( ! empty( $settings['template_id'] ) ) {
			$this->maybe_add_load_more_wrapper_class();

			$widget->before_skin_render();

			parent::render();

			$widget->after_skin_render();
		} elseif ( $is_edit_mode ) {
			$this->render_empty_view();
		}

		if ( $current_document ) {
			Plugin::elementor()->documents->switch_to_document( $current_document );
		}
	}

	/**
	 * @param $at
	 * @param $current_item_index
	 * @param int $template_id
	 * @return int
	 */
	private function get_template_id_for_repeating_template( $at, $current_item_index, int $template_id ): int {
		if ( $this->is_need_to_show_alternate_template( $at['repeat_template'], $current_item_index ) ) {
			$template_id = $at['template_id'];
			$this->current_alternate_template_repetaer_id = $at['_id'];
		}
		return $template_id;
	}

	public function add_alternate_template_border_wrapper_class( $attributes, $document ) {
		$attributes['class'] .= ' e-loop-alternate-template';

		return $attributes;
	}

	/**
	 * @param $attributes
	 * @param $document
	 * @return mixed
	 */
	public function add_alternate_template_col_span_wrapper_class( $attributes, $document ) {

		$attributes['class'] .= ' elementor-repeater-item-' . $this->current_alternate_template_repetaer_id;

		return $attributes;
	}

	private function item_has_alternate_template() {
		return isset( $this->current_alternate_template_repetaer_id );
	}

	/**
	 * @param $at
	 * @param $current_item_index
	 * @param int $template_id
	 * @return int
	 */
	private function get_template_id_to_show_once( $at, $current_item_index, int $template_id ): int {
		if ( $at['repeat_template'] === $current_item_index ) {
			$template_id = $at['template_id'];
			$this->current_alternate_template_repetaer_id = $at['_id'];
		}
		return $template_id;
	}

	/**
	 * @param $at
	 * @param $current_item_index
	 * @param int $template_id
	 * @return int
	 */
	private function get_template_id( $at, $current_item_index, int $template_id ): int {
		$at['repeat_template'] = (int) $at['repeat_template'];
		$at['template_id'] = (int) $at['template_id'];

		if ( $this->is_valid_template_id( $at ) ) {
			$template_id = $this->is_show_once( $at ) ?
					$this->get_template_id_to_show_once( $at, $current_item_index, $template_id ) :
					$this->get_template_id_for_repeating_template( $at, $current_item_index, $template_id );
		}
		return $template_id;
	}

	/**
	 * @param $repeat_template
	 * @param $current_item_index
	 * @return bool
	 */
	private function is_need_to_show_alternate_template( $repeat_template, $current_item_index ): bool {
		return $this->is_multiple_of( $repeat_template, $current_item_index );
	}

	/**
	 * @param $at
	 * @return bool
	 */
	private function is_show_once( $at ): bool {
		return isset( $at['show_once'] ) && 'yes' === $at['show_once'];
	}

	/**
	 * @param $at
	 * @return bool
	 */
	private function is_valid_template_id( $at ): bool {
		return $at['repeat_template'] > 0 && $at['template_id'] > 0;
	}

	protected function get_loop_header_widget_classes() {
		/** @var Loop_Widget_Base $widget */
		$widget = $this->parent;

		$classes = $widget->get_loop_header_widget_classes();

		$classes[] = 'elementor-loop-container';

		return $classes;
	}

	protected function _register_controls_actions() {
		add_action( 'elementor/element/' . $this->parent->get_name() . '/section_query/after_section_start', [ $this, 'register_query_controls' ] );
	}

	private function add_alternate_template_wrapper_classes( $template_id ) {
		if ( $this->item_has_alternate_template() ) {
			add_filter( 'elementor/document/wrapper_attributes', [ $this, 'add_alternate_template_col_span_wrapper_class' ], 10, 2 );
		}

		if ( $this->should_add_border_around_alternate_template( $template_id ) ) {
			add_filter( 'elementor/document/wrapper_attributes', [ $this, 'add_alternate_template_border_wrapper_class' ], 10, 2 );
			$this->already_added_border[] = $template_id;
		}
	}

	private function remove_alternate_template_wrapper_classes( $template_id ) {
		if ( $this->added_border_around_alternate_template( $template_id ) ) {
			remove_filter( 'elementor/document/wrapper_attributes', [ $this, 'add_alternate_template_border_wrapper_class' ] );
		}

		if ( $this->item_has_alternate_template() ) {
			remove_filter( 'elementor/document/wrapper_attributes', [ $this, 'add_alternate_template_col_span_wrapper_class' ] );
			$this->current_alternate_template_repetaer_id = null;
		}
	}

	/**
	 * Render Post
	 *
	 * Uses the chosen custom template to render Loop posts.
	 *
	 * @since 3.8.0
	 */
	protected function render_post() {
		$loop_item_id = get_the_ID();
		$template_id = $this->get_template_id_for_current_item();

		$this->add_alternate_template_wrapper_classes( $template_id );

		/** @var LoopDocument $document */
		$document = Plugin::elementor()->documents->get( $template_id );

		if ( ! $document ) {
			return;
		}

		$this->print_dynamic_css( $loop_item_id, $template_id );
		$document->print_content();

		$this->remove_alternate_template_wrapper_classes( $template_id );
	}

	private function should_add_border_around_alternate_template( $template_id ) {
		return $this->item_has_alternate_template()
			&& ! in_array( $template_id, $this->already_added_border )
			&& $this->parent->get_settings_for_display( 'template_id' ) !== $template_id
			&& Plugin::elementor()->editor->is_edit_mode();
	}

	private function added_border_around_alternate_template( $template_id ) {
		return in_array( $template_id, $this->already_added_border );
	}

	protected function get_template_id_for_current_item() {
		$settings = $this->parent->get_settings_for_display();
		$template_id = $settings['template_id'];

		if ( empty( $settings['alternate_template'] ) || ! is_array( $settings['alternate_templates'] ) ) {
			return $template_id;
		}

		$current_item_index = $this->get_current_item_index();

		foreach ( $settings['alternate_templates'] as $at ) {
			$template_id = $this->get_template_id( $at, $current_item_index, $template_id );
		}

		return $template_id;
	}

	protected function get_current_item_index() {
		/** @var \WP_Query $query */
		$query = $this->parent->get_query();

		$current_item = 0;

		if ( isset( $query->current_post ) ) {
			$current_item += $query->current_post + 1;
		}

		if ( isset( $query->query['paged'] ) && $query->query['paged'] > 1 && isset( $query->query['posts_per_page'] ) ) {
			$current_item += $query->query['posts_per_page'] * ( $query->query['paged'] - 1 );
		}

		return $current_item;
	}

	private function is_multiple_of( $input, $to_be_checked ) {
		return 0 === $to_be_checked % $input;
	}

	protected function print_dynamic_css( $post_id, $post_id_for_data ) {
		$document = Plugin::elementor()->documents->get_doc_for_frontend( $post_id_for_data );

		if ( ! $document ) {
			return;
		}

		Plugin::elementor()->documents->switch_to_document( $document );

		$css_file = Loop_Dynamic_CSS::create( $post_id, $post_id_for_data );
		$post_css = $css_file->get_content();

		if ( empty( $post_css ) ) {
			return;
		}

		$css = '';
		$css = str_replace( '.elementor-' . $post_id, '.e-loop-item-' . $post_id, $post_css );
		$css = sprintf( '<style id="%s">%s</style>', 'loop-dynamic-' . $post_id_for_data, $css );

		echo $css; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped

		Plugin::elementor()->documents->restore_document();
	}

	protected function render_loop_header() {
		/** @var Loop_Widget_Base $widget */
		$widget = $this->parent;
		$config = $widget->get_config();

		if ( $config['add_parent_render_header'] ) {
			parent::render_loop_header();
		}

		$widget->render_loop_header();
	}

	protected function render_loop_footer() {
		/** @var Loop_Widget_Base $widget */
		$widget = $this->parent;
		$config = $widget->get_config();

		if ( $config['add_parent_render_footer'] ) {
			parent::render_loop_footer();
		}

		$widget->render_loop_footer();
	}

	/**
	 * Render Empty View
	 *
	 * Renders the Loop widget's view if there is no default template (empty view).
	 *
	 * @since 3.8.0
	 */
	protected function render_empty_view() {
		?>
		<div class="e-loop-empty-view__wrapper"><!-- Will be filled with JS --></div>
		<?php
	}
}
