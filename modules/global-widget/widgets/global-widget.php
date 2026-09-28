<?php
namespace ElementorPro\Modules\GlobalWidget\Widgets;

use Elementor\Core\Base\Document;
use Elementor\Widget_Base;
use ElementorPro\Base\Base_Widget;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Global_Widget extends Base_Widget {
	/**
	 * @var Widget_Base
	 */
	private $original_element_instance;

	/**
	 * @var array
	 */
	private $template_data;

	/**
	 * @var array
	 */
	private $data;

	/**
	 * @var Widget_Base
	 */
	private $original_widget_type;

	public function __construct( $data = [], $args = null ) {
		if ( $data && ! empty( $data['templateID'] ) ) {
			if ( ! $this->try_load_from_template( $data ) ) {
				$this->resolve_original_widget_type_from_data( $data );
			}
		} elseif ( $data ) {
			$this->resolve_original_widget_type_from_data( $data );
		}

		parent::__construct( $data, $args );
	}

	private function try_load_from_template( array $data ): bool {
		$template_data = Plugin::elementor()->templates_manager->get_template_data( [
			'source' => 'local',
			'template_id' => $data['templateID'],
			'check_permissions' => false,
		] );

		if ( is_wp_error( $template_data ) || empty( $template_data['content'] ) ) {
			return false;
		}

		$this->set_template_data( $template_data );

		$template_widget_type = $this->get_template_widget_type();
		$original_widget_type = Plugin::elementor()->widgets_manager->get_widget_types(
			$template_widget_type
		);

		if ( ! $original_widget_type ) {
			return false;
		}

		if ( empty( $data['draft'] ) ) {
			if ( empty( $data['originalWidgetType'] ) ) {
				$data['widgetType'] = $template_widget_type;
			}

			if ( ! $this->is_draft_or_autosave_process() ) {
				$data['settings'] = $this->get_template_settings();
			}
		}

		$this->original_widget_type = $original_widget_type;
		$this->data = $data;

		return true;
	}

	private function resolve_original_widget_type_from_data( array $data ): void {
		$widget_type_name = $data['originalWidgetType'] ?? null;

		if ( ! $widget_type_name && ! empty( $data['widgetType'] ) && 'global' !== $data['widgetType'] ) {
			$widget_type_name = $data['widgetType'];
		}

		if ( ! $widget_type_name ) {
			return;
		}

		$original_widget_type = Plugin::elementor()->widgets_manager->get_widget_types( $widget_type_name );

		if ( ! $original_widget_type ) {
			return;
		}

		$this->original_widget_type = $original_widget_type;
		$this->data = $data;
	}

	private function can_resolve_original_element(): bool {
		return ! $this->is_type_instance() && $this->original_widget_type;
	}

	public function show_in_panel() {
		return false;
	}

	public function has_widget_inner_wrapper(): bool {
		return ! Plugin::elementor()->experiments->is_feature_active( 'e_optimized_markup' );
	}

	public function get_raw_data( $with_html_content = false ) {
		$raw_data = parent::get_raw_data( $with_html_content );

		// Save 'templateID' in all situations.
		$raw_data['templateID'] = $this->get_data( 'templateID' );

		if ( $this->is_draft_or_autosave_process() ) {
			$raw_data['draft'] = true;

			// Keep the current snapshot, just mark it as a draft.
			return $raw_data;
		}

		if ( $this->is_saved_as_draft() ) {
			$raw_data['widgetType'] = $this->template_data
				? $this->get_template_widget_type()
				: ( $this->data['originalWidgetType'] ?? $this->get_name() );

			return $raw_data;
		}

		if ( apply_filters( 'elementor/element/should_render_shortcode', false ) ) {
			$raw_data['widgetType'] = $this->get_name();

			return $raw_data;
		}

		return $raw_data;
	}

	public function render_content() {
		$original_element_instance = $this->get_original_element_instance();

		if ( ! $original_element_instance ) {
			return;
		}

		$original_element_instance->render_content();
	}

	public function get_unique_selector() {
		return '.elementor-global-' . $this->get_data( 'templateID' );
	}

	public function get_name() {
		return 'global';
	}

	public function get_title() {
		return esc_html__( 'Global', 'elementor-pro' );
	}

	public function get_script_depends() {
		if ( ! $this->can_resolve_original_element() ) {
			return [];
		}

		return $this->get_original_element_instance()->get_script_depends();
	}

	public function get_style_depends() {
		if ( ! $this->can_resolve_original_element() ) {
			return [];
		}

		return $this->get_original_element_instance()->get_style_depends();
	}

	public function get_controls( $control_id = null ) {
		if ( ! $this->can_resolve_original_element() ) {
			return [];
		}

		return $this->get_original_element_instance()->get_controls();
	}

	public function get_original_element_instance() {
		if ( ! $this->can_resolve_original_element() ) {
			return null;
		}

		if ( ! $this->original_element_instance ) {
			$this->init_original_element_instance();
		}

		return $this->original_element_instance;
	}

	public function on_export() {
		if ( $this->template_data ) {
			return $this->get_template_content();
		}

		return $this->data;
	}

	public function render_plain_content() {
		$original_element_instance = $this->get_original_element_instance();

		if ( ! $original_element_instance ) {
			return;
		}

		$original_element_instance->render_plain_content();
	}

	protected function add_render_attributes() {
		// Never called from editor, this method is used only for frontend/preview.
		parent::add_render_attributes();

		$original_element_instance = $this->get_original_element_instance();

		if ( ! $original_element_instance ) {
			return;
		}

		$skin_type = $this->get_settings( '_skin' );

		$original_widget_type = $original_element_instance->get_data( 'widgetType' );

		$this->set_render_attribute( '_wrapper', 'data-widget_type', $original_widget_type . '.' . ( $skin_type ? $skin_type : 'default' ) );

		$this->add_render_attribute( '_wrapper', [
			'class' => [
				'elementor-global-' . $this->get_data( 'templateID' ),
				'elementor-widget-' . $original_widget_type,
			],
		] );
	}

	private function init_original_element_instance() {
		if ( ! $this->original_widget_type ) {
			return;
		}

		$widget_class = $this->original_widget_type->get_class_name();

		$template_content = $this->get_template_or_draft_content();
		$template_content['id'] = $this->get_id();

		$this->original_element_instance = new $widget_class(
			$template_content,
			$this->original_widget_type->get_default_args()
		);
	}

	private function is_draft_or_autosave_process() {
		/**
		 * `Plugin::elementor()->common` is not available for guest/logged out users.
		 */
		if ( ! Plugin::elementor()->common ) {
			return false;
		}

		$ajax = Plugin::elementor()->common->get_component( 'ajax' );
		$ajax_data = $ajax->get_current_action_data();

		// Is draft or autosave?
		return $ajax_data && 'save_builder' === $ajax_data['action'] && in_array( $ajax_data['data']['status'], [
			Document::STATUS_DRAFT,
			Document::STATUS_AUTOSAVE,
		], true );
	}

	private function is_saved_as_draft() {
		return $this->get_data( 'draft' );
	}

	private function set_template_data( $template_data ) {
		$this->template_data = $template_data;
	}

	private function get_template_widget_type() {
		return $this->template_data['content'][0]['widgetType'];
	}

	private function get_template_settings() {
		return $this->template_data['content'][0]['settings'];
	}

	private function get_template_content() {
		return $this->template_data['content'][0];
	}

	private function get_template_or_draft_content() {
		if ( $this->is_saved_as_draft() ) {
			$draft_data = $this->data;

			if ( $this->template_data ) {
				$draft_data['widgetType'] = $this->get_template_widget_type();
			}

			return $draft_data;
		}

		if ( $this->template_data ) {
			return $this->get_template_content();
		}

		return $this->data;
	}

	public function render_markdown(): string {
		$original = $this->get_original_element_instance();

		if ( ! $original ) {
			return '';
		}

		return $original->render_markdown();
	}
}
