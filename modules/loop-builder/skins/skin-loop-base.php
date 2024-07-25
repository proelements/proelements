<?php
namespace ElementorPro\Modules\LoopBuilder\Skins;

use ElementorPro\Modules\LoopBuilder\Documents\Loop;
use ElementorPro\Modules\LoopBuilder\Documents\Loop as LoopDocument;
use ElementorPro\Modules\LoopBuilder\Files\Css\Loop as Loop_CSS;
use ElementorPro\Modules\LoopBuilder\Files\Css\Loop_Preview;
use ElementorPro\Modules\LoopBuilder\Module;
use ElementorPro\Modules\LoopBuilder\Widgets\Base as Loop_Widget_Base;
use ElementorPro\Modules\Posts\Skins\Skin_Base;
use ElementorPro\Modules\QueryControl\Controls\Group_Control_Related;
use ElementorPro\Plugin;
use ElementorPro\Modules\LoopBuilder\Traits\Alternate_Templates_Trait;
use Elementor\Utils;
use Elementor\Core\Files\CSS\Post as Post_CSS;
use ElementorPro\Modules\LoopBuilder\Files\Css\Loop_Css_Trait;

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

	use Alternate_Templates_Trait;
	use Loop_Css_Trait;

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

	protected function maybe_add_load_more_wrapper_class() {
		$settings = $this->parent->get_settings_for_display();
		/** @var Loop_Widget_Base $widget */
		$widget = $this->parent;

		if ( isset( $settings['pagination_type'] ) && 'load_more_on_click' === $settings['pagination_type'] ) {
			// If Pagination is enabled with the Load More On Click option, a class is needed for targeting.
			// The 'wrapper' element tag is used by the Button Widget Trait.
			$widget->add_render_attribute( 'wrapper', 'class', 'e-loop__load-more' );
		}
	}

	public function query_posts() {
		return $this->query_posts_for_alternate_templates();
	}

	/**
	 * Enqueue Loop Document CSS Meta
	 *
	 * Process the template before beginning to loop through the items. This ensures that
	 * elements with dynamic CSS are identified before each individual item is rendered.
	 *
	 * @param int $post_id
	 *
	 * @return void
	 */
	protected function enqueue_loop_document_css_meta( $post_id ) {
		if ( $this->post_meta_css_exists( $post_id ) ) {
			return;
		}

		if ( wp_is_post_autosave( $post_id ) ) {
			$css_file = Loop_Preview::create( $post_id );
		} else {
			$css_file = Loop_CSS::create( $post_id );
		}

		/** @var Loop|Loop_Preview $css_file */
		$css_file->update();
	}

	private function post_meta_css_exists( $post_id ) {
		return ! empty( get_post_meta( $post_id, Post_CSS::META_KEY ) );
	}

	public function render() {
		$template_id = $this->parent->get_settings_for_display( 'template_id' );
		$is_edit_mode = Plugin::elementor()->editor->is_edit_mode();
		/** @var Loop_Widget_Base $widget */
		$widget = $this->parent;
		$current_document = Plugin::elementor()->documents->get_current();

		if ( $template_id ) {
			$this->enqueue_loop_document_css_meta( $template_id );
			$this->alternate_template_before_skin_render();

			$this->maybe_add_load_more_wrapper_class();

			$widget->before_skin_render();

			parent::render();

			$widget->after_skin_render();

			$this->alternate_template_after_skin_render();
		} elseif ( $is_edit_mode ) {
			$this->render_empty_view();
		}

		if ( $current_document ) {
			Plugin::elementor()->documents->switch_to_document( $current_document );
		}
	}

	protected function handle_no_posts_found() {
		$settings = $this->parent->get_settings_for_display();

		?>
		<div class="e-loop-nothing-found-message">
		<?php
		if ( isset( $settings['enable_nothing_found_message'] ) && 'yes' === $settings['enable_nothing_found_message'] ) {
			$nothing_found_message_html_tag = Utils::validate_html_tag( $settings['nothing_found_message_html_tag'] ); ?>
			<<?php Utils::print_validated_html_tag( $nothing_found_message_html_tag ); ?> class="e-loop-nothing-found-message__text">
				<?php Utils::print_unescaped_internal_string( $settings['nothing_found_message_text'] ); ?>
			</<?php Utils::print_validated_html_tag( $nothing_found_message_html_tag ); ?>>
			<?php
		}
		?></div>
		<?php
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

	/**
	 * Render Post
	 *
	 * Uses the chosen custom template to render Loop posts.
	 *
	 * @since 3.8.0
	 */
	protected function render_post() {
		if ( $this->has_alternate_templates() ) {
			$this->render_post_if_widget_has_alternate_templates();
		} else {
			$this->render_post_content( $this->parent->get_settings_for_display( 'template_id' ) );
		}
	}

	private function render_post_content( $template_id ) {
		$post_id = get_the_ID();

		/** @var LoopDocument $document */
		$document = Plugin::elementor()->documents->get( $template_id );

		if ( ! $document ) {
			return;
		}

		$this->print_dynamic_css( $post_id, $template_id );
		$document->print_content();
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
