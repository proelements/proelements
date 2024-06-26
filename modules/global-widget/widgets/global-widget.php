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
			$template_data = Plugin::elementor()->templates_manager->get_template_data( [
				'source' => 'local',
				'template_id' => $data['templateID'],
			] );

			if ( is_wp_error( $template_data ) ) {
				throw new \Exception( $template_data->get_error_message() );
			}

			if ( empty( $template_data['content'] ) ) {
				throw new \Exception( 'Template content not found.' );
			}

			$this->set_template_data( $template_data );

			$template_widget_type = $this->get_template_widget_type();
			$original_widget_type = Plugin::elementor()->widgets_manager->get_widget_types(
				$template_widget_type
			);

			if ( ! $original_widget_type ) {
				throw new \Exception( 'Original widget type not found.' );
			}

			// If it saved as draft it already have the recent settings.
			if ( empty( $data['draft'] ) ) {
				if ( empty( $data['originalWidgetType'] ) ) {
					// If: `$data['originalWidgetType']` exists it means that the data was manipulated in saving process, from the backend.
					// so `widgetType` is 'global' and have to be changed.
					$data['widgetType'] = $template_widget_type;
				}

				if ( ! $this->is_draft_or_autosave_process() ) {
					// If its not 'draft saving process' then settings should be according the template.
					// Since draft saving process, already have the recent settings to save.
					$data['settings'] = $this->get_template_settings();
				}
			}

			$this->original_widget_type = $original_widget_type;
			$this->data = $data;
		}

		parent::__construct( $data, $args );
	}

	public function show_in_panel() {
		return false;
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
			// If: Item saved as draft
			// Then: the the `$raw_data` hold recently saved draft template, with original widget type.
			$raw_data['widgetType'] = $this->get_template_widget_type();

			return $raw_data;
		}

		if ( apply_filters( 'elementor/element/should_render_shortcode', false ) ) {
			$raw_data['widgetType'] = $this->get_name();

			return $raw_data;
		}

		return $raw_data;
	}

	public function render_content() {
		$this->get_original_element_instance()->render_content();
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
		if ( $this->is_type_instance() ) {
			return [];
		}

		return $this->get_original_element_instance()->get_script_depends();
	}

	public function get_style_depends() {
		if ( $this->is_type_instance() ) {
			return [];
		}

		return $this->get_original_element_instance()->get_style_depends();
	}

	public function get_controls( $control_id = null ) {
		if ( $this->is_type_instance() ) {
			return [];
		}

		return $this->get_original_element_instance()->get_controls();
	}

	public function get_original_element_instance() {
		if ( ! $this->original_element_instance ) {
			$this->init_original_element_instance();
		}

		return $this->original_element_instance;
	}

	public function on_export() {
		return $this->get_template_content();
	}

	public function render_plain_content() {
		$this->get_original_element_instance()->render_plain_content();
	}

	protected function add_render_attributes() {
		// Never called from editor, this method is used only for frontend/preview.
		parent::add_render_attributes();

		$skin_type = $this->get_settings( '_skin' );

		$original_widget_type = $this->get_original_element_instance()->get_data( 'widgetType' );

		$this->set_render_attribute( '_wrapper', 'data-widget_type', $original_widget_type . '.' . ( $skin_type ? $skin_type : 'default' ) );

		$this->add_render_attribute( '_wrapper', [
			'class' => [
				'elementor-global-' . $this->get_data( 'templateID' ),
				'elementor-widget-' . $original_widget_type,
			],
		] );
	}

	private function init_original_element_instance() {
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
			$draft_data['widgetType'] = $this->get_template_widget_type();

			return $draft_data;
		}

		return $this->get_template_content();
	}
}
