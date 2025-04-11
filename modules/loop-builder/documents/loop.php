<?php
namespace ElementorPro\Modules\LoopBuilder\Documents;

use Elementor\Controls_Manager;
use Elementor\Core\Base\Document;
use ElementorPro\Modules\LoopBuilder\Files\Css\Loop as Loop_CSS;
use ElementorPro\Modules\LoopBuilder\Files\Css\Loop_Preview;
use ElementorPro\Modules\QueryControl\Module as QueryModule;
use ElementorPro\Modules\ThemeBuilder\Documents\Theme_Document;
use ElementorPro\Core\Utils;
use ElementorPro\Plugin;
use ElementorPro\Modules\LoopBuilder\Module as LoopBuilderModule;
use ElementorPro\Modules\LoopBuilder\Providers\Taxonomy_Loop_Provider;
use ElementorPro\Modules\LoopFilter\Traits\Taxonomy_Filter_Trait;
use ElementorPro\Modules\DynamicTags\Tags\Base\Tag_Trait;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Loop extends Theme_Document {

	use Taxonomy_Filter_Trait;
	use Tag_Trait;

	const DOCUMENT_TYPE = 'loop-item';
	const SINGLE_PREFIX = 'single/';

	const RECOMMENDED_POSTS_WIDGET_NAMES = [
		'theme-post-title',
		'theme-post-excerpt',
		'theme-post-featured-image',
		'theme-post-content',
		'post-info',
	];

	const WIDGETS_TO_HIDE = [
		'loop-grid',
		'woocommerce-product-data-tabs',
		'loop-carousel',
	];

	const PREVIEW_TYPE = 'preview_type';
	const PREVIEW_ID = 'preview_id';

	public static function get_type() {
		return static::DOCUMENT_TYPE;
	}

	public static function get_title() {
		return esc_html__( 'Loop Item', 'elementor-pro' );
	}

	public static function get_plural_title() {
		return esc_html__( 'Loop Items', 'elementor-pro' );
	}

	protected static function get_site_editor_icon() {
		return 'eicon-loop-builder';
	}

	public static function get_site_editor_tooltip_data() {
		return [
			'title' => esc_html__( 'What is a loop?', 'elementor-pro' ),
			'content' => esc_html__( 'A Loop is a layout you can customize to display recurring dynamic content - like listings, posts, portfolios, products, , etc.', 'elementor-pro' ),
			'tip' => esc_html__( 'Start by creating a master item. All the other instances in the grid will match this design. Then go back to the widget in the editor panel and assign both a template and a source of content. Your grid should populate automatically.', 'elementor-pro' ),
			'docs' => 'https://go.elementor.com/app-theme-builder-loop',
			'video_url' => 'https://www.youtube.com/embed/zMvY9XaE1YY',
		];
	}

	protected static function get_site_editor_thumbnail_url() {
		return ELEMENTOR_PRO_MODULES_URL . 'loop-builder/assets/images/loop-item.svg';
	}

	public static function get_properties() {
		$properties = parent::get_properties();

		$properties['support_conditions'] = false;

		return $properties;
	}

	public function save( $data ) {
		if ( isset( $data['settings']['source'] ) ) {
			update_post_meta( $this->get_main_id(), '_elementor_source', $data['settings']['source'] );
		}

		parent::save( $data );
	}

	private function get_data_id() {
		if ( Taxonomy_Loop_Provider::is_loop_taxonomy() ) {
			return $this->get_data_id_from_taxonomy_loop_query();
		}

		return get_the_ID();
	}

	public function get_container_attributes() {
		$attributes = Document::get_container_attributes();
		$post_id = $this->get_data_id();

		$attributes['class'] .= ' e-loop-item';
		$attributes['class'] .= ' e-loop-item-' . $post_id;
		$attributes['class'] .= ' ' . esc_attr( implode( ' ', get_post_class( [], $post_id ) ) );

		$attributes['data-custom-edit-handle'] = true;

		return $attributes;
	}

	public function get_initial_config() {
		$config = parent::get_initial_config();
		$loop_builder_module = new LoopBuilderModule();

		if ( 'post' === $loop_builder_module->get_source_type_from_post_meta( $this->get_main_id() ) ) {
			foreach ( static::RECOMMENDED_POSTS_WIDGET_NAMES as $recommended_posts_widget_name ) {
				$config['panel']['widgets_settings'][ $recommended_posts_widget_name ] = [
					'categories' => [ 'recommended' ],
					'show_in_panel' => true,
				];
			}
		}

		$config['panel']['widgets_settings']['container'] = [
			'categories' => [ 'layout' ],
		];

		foreach ( static::WIDGETS_TO_HIDE as $widget_to_hide ) {
			$config['panel']['widgets_settings'][ $widget_to_hide ] = [
				'show_in_panel' => false,
			];
		}

		$config['container_attributes'] = $this->get_container_attributes();

		return $config;
	}

	public static function get_site_editor_config() {
		$config = parent::get_site_editor_config();

		$config['show_instances'] = false;

		return $config;
	}

	public function get_location_label() {
		return '';
	}

	public function get_css_wrapper_selector() {
		return '.e-loop-item-' . $this->get_main_id();
	}

	public static function get_preview_as_options() {
		$post_types = Utils::get_public_post_types();

		$post_types_options = [];

		foreach ( $post_types as $post_type => $label ) {
			$post_types_options[ self::SINGLE_PREFIX . $post_type ] = get_post_type_object( $post_type )->labels->singular_name;
		}

		return [
			'single' => [
				'label' => esc_html__( 'Single', 'elementor-pro' ),
				'options' => $post_types_options,
			],
		];
	}

	protected function get_remote_library_config() {
		$config = parent::get_remote_library_config();

		$config['type'] = self::DOCUMENT_TYPE;
		$config['default_route'] = 'templates/loop-items';

		return $config;
	}

	/**
	 * Get Edit Url
	 *
	 * Disable the Library modal for non-container (section) users.
	 *
	 * @return string
	 */
	public function get_edit_url() {
		$url = parent::get_edit_url();

		if ( ! Plugin::elementor()->experiments->is_feature_active( 'container' ) ) {
			$url = str_replace( '#library', '', $url );
		}

		return $url;
	}

	protected static function get_editor_panel_categories() {
		$new_categories = [
			'recommended' => [
				'title' => esc_html__( 'Recommended', 'elementor-pro' ),
			],
			'layout' => [
				'title' => esc_html__( 'Layout', 'elementor-pro' ),
				'hideIfEmpty' => true,
			],
		];
		return static::insert_categories_after_favorites( $new_categories );
	}

	protected function register_controls() {
		parent::register_controls();

		$this->remove_control( 'content_wrapper_html_tag' );

		$this->update_preview_control();

		$this->inject_width_control();

		$this->add_query_section();

		Plugin::elementor()->controls_manager->add_custom_css_controls( $this );

	}

	/**
	 * Get Wrapper Tags
	 *
	 * We remove the `content_wrapper_html_tag` control in this document and default to using a `div`.
	 * The setting no longer exists when printing the document element, so we need to override this method so that
	 * the extended document class defaults to using a `div` when printing the element.
	 *
	 * @since 3.8.0
	 *
	 * @return false
	 */
	public function get_wrapper_tags() {
		return false;
	}

	/**
	 * Print elements with wrapper.
	 *
	 * Overwrite method from theme-document.php to render some custom markup if a variable
	 * $elements_data['empty_loop_template'] is set. This variable is set via a filter hook
	 * 'elementor/frontend/builder_content_data' in the loop builder module.
	 *
	 * @since 3.8.0
	 *
	 * @param $elements_data
	 *
	 * @return void
	 */
	public function print_elements_with_wrapper( $elements_data = null ) {
		if ( isset( $elements_data['empty_loop_template'] ) ) {
			$this->print_empty_loop_template_markup( $elements_data['empty_loop_template_id'] );
		} else {
			parent::print_elements_with_wrapper( $elements_data );
		}
	}

	private function enqueue_loop_css() {
		if ( $this->is_autosave() ) {
			$css_file = Loop_Preview::create( $this->post->ID );
		} else {
			$css_file = Loop_CSS::create( $this->post->ID );
		}

		$css_file->print_all_css( $this->post->ID );
	}

	/**
	 * Get content.
	 *
	 * Override the parent method to retrieve the content with CSS in the Editor.
	 *
	 * @since 3.8.0
	 */
	public function get_content( $with_css = false ) {
		$edit_mode = Plugin::elementor()->editor->is_edit_mode();

		$document = Plugin::elementor()->documents->get_current();

		$should_switch_document = $document && $document::get_type() !== self::DOCUMENT_TYPE;

		if ( $should_switch_document ) {
			Plugin::elementor()->documents->switch_to_document( $this );
		}

		add_filter( 'elementor/frontend/builder_content/before_print_css', [ $this, 'prevent_inline_css_printing' ] );

		$this->enqueue_loop_css();

		Plugin::elementor()->editor->set_edit_mode( false );

		$content = parent::get_content();

		remove_filter( 'elementor/frontend/builder_content/before_print_css', [ $this, 'prevent_inline_css_printing' ] );

		Plugin::elementor()->editor->set_edit_mode( $edit_mode );

		if ( $should_switch_document ) {
			Plugin::elementor()->documents->restore_document();
		}

		return $content;
	}

	/**
	 * Runs on the 'elementor/frontend/builder_content/before_print_css' hook.
	 *
	 * @return false
	 */
	public function prevent_inline_css_printing() {
		return false;
	}

	/**
	 * Print empty loop template markup.
	 *
	 * This function is used to render markup in the editor when a loop template is empty/blank.
	 * Currently, nothing will be rendered in the editor if the template is empty.
	 * This markup is needed in the DOM for us to be able to switch to this document in place.
	 *
	 * @since 3.8.0
	 *
	 * @param int $post_id The post ID of the document.
	 *
	 * @return void
	 */
	protected function print_empty_loop_template_markup( $post_id ) {
		?>
		<div
			data-elementor-type="<?php echo esc_attr( static::get_type() ); ?>"
			data-elementor-post-type="<?php echo esc_attr( $this->get_post()->post_type ); ?>"
			data-elementor-id="<?php echo esc_attr( $post_id ); ?>"
			class="elementor elementor-<?php echo esc_attr( $post_id ); ?> elementor-edit-area elementor-edit-mode elementor-edit-area-active e-loop-first-edit"
			data-elementor-title="<?php echo esc_attr( ucfirst( static::get_type() ) ); ?>"
		>
			<div class="elementor-section-wrap ui-sortable"></div>
		</div>
		<?php
	}

	/**
	 * @return void
	 */
	protected function add_query_section() {
		$this->start_controls_section(
			'_section_query',
			[
				'label' => esc_html__( 'Query', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_SETTINGS,
			]
		);

		$loop_builder_module = new LoopBuilderModule();
		$source_type = $loop_builder_module->get_source_type_from_post_meta( $this->get_main_id() );

		$this->add_control(
			'source',
			[
				'label' => esc_html__( 'Source Type', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'post' => esc_html__( 'Posts', 'elementor-pro' ),
				],
				'default' => $source_type,
				'prefix_class' => 'elementor-view-',
			]
		);

		do_action( 'elementor-pro/modules/loop-builder/documents/loop/query_settings', $this );

		$this->add_control(
			'apply_query_source',
			[
				'type' => Controls_Manager::BUTTON,
				'label' => esc_html__( 'Apply', 'elementor-pro' ),
				'label_block' => true,
				'show_label' => false,
				'text' => esc_html__( 'Apply', 'elementor-pro' ),
				'event' => 'elementorLoopBuilder:ApplySourceChange',
			]
		);

		$this->add_control(
			'query_source_description',
			[
				'raw' => esc_html__( 'This affects the types of widgets and templates you can use for your master item.', 'elementor-pro' ),
				'type' => Controls_Manager::RAW_HTML,
				'content_classes' => 'elementor-descriptor',
			]
		);

		$this->end_controls_section();
	}

	/**
	 * @return void
	 */
	protected function inject_width_control() {
		$this->start_injection([
			'type' => 'section',
			'at' => 'start',
			'of' => 'preview_settings',
		]);

		$this->add_responsive_control(
			'preview_width',
			[
				'label' => esc_html__( 'Width', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'vw', 'custom' ],
				'range' => [
					'px' => [
						'min' => 200,
						'max' => 1140,
					],
					'em' => [
						'min' => 20,
						'max' => 100,
					],
					'rem' => [
						'min' => 20,
						'max' => 100,
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--preview-width: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->end_injection();
	}

	/**
	 * @return void
	 */
	protected function update_preview_control() {
		$loop_builder_module = new LoopBuilderModule();
		$source_type = $loop_builder_module->get_source_type_from_post_meta( $this->get_main_id() );

		if ( Taxonomy_Loop_Provider::is_source_type_taxonomy( $source_type ) ) {
			$this->update_taxonomy_settings_controls( $source_type );
		} else {
			$this->update_post_settings_controls( $source_type );
		}
	}

	/**
	 * @param array $new_categories
	 * @return array
	 */
	private static function insert_categories_after_favorites( array $new_categories ) {
		$existing_categories = parent::get_editor_panel_categories();
		$category_keys = array_keys( $existing_categories );
		$index = array_search( 'favorites', $category_keys, true );
		return array_splice( $existing_categories, 0, $index + 1 ) + $new_categories + array_splice( $existing_categories, $index + 1 );
	}

	private function update_post_settings_controls( $source_type ) {
		$this->update_control(
			self::PREVIEW_TYPE,
			[
				'default' => self::SINGLE_PREFIX . $source_type,
				'label' => esc_html__( 'Preview a specific post or item', 'elementor-pro' ),
			]
		);

		$latest_posts = get_posts( [
			'posts_per_page' => 1,
			'post_type' => $source_type,
		] );

		if ( ! empty( $latest_posts ) ) {
			$this->update_control(
				self::PREVIEW_ID,
				[
					'default' => $latest_posts[0]->ID,
				]
			);
		}
	}

	private function update_taxonomy_settings_controls( $source_type ) {
		$this->update_taxonomy_preview_type_control( $source_type );
		$this->update_taxonomy_preview_id_control( $source_type );
	}

	private function update_taxonomy_preview_type_control( $source_type ) {
		$post_type_slug = $this->extract_taxonomy_type( $source_type );
		$allowed_post_types = Taxonomy_Loop_Provider::get_supported_cpts( $post_type_slug );
		$options_prefix = $source_type . '/';
		$taxonomy_options = $this->get_taxonomy_options( $allowed_post_types, $options_prefix );

		$this->update_control(
			self::PREVIEW_TYPE,
			[
				'default' => Taxonomy_Loop_Provider::get_default_source_type( $source_type, $options_prefix ),
				'groups' => [
					'archive' => [
						'label' => esc_html__( 'Archive', 'elementor-pro' ),
						'options' => $taxonomy_options,
					],
				],
				'label' => esc_html__( 'Preview a specific post or item', 'elementor-pro' ),
			]
		);
	}

	private function update_taxonomy_preview_id_control( $source_type ) {
		$term_id = $this->get_settings_for_display( self::PREVIEW_ID ) ?? null;

		$filter_args = [
			'taxonomy' => Taxonomy_Loop_Provider::get_default_source_type( $source_type ),
			'show_empty_items' => 'yes',
			'show_child_taxonomy' => 'yes',
		];

		if ( $term_id ) {
			$filter_args['term_taxonomy_id'] = $term_id;
		}

		$latest_terms = $this->get_filtered_taxonomies( $filter_args, [] );

		if ( ! empty( $latest_terms ) ) {
			$term = array_values( $latest_terms )[0];
			$this->update_control(
				self::PREVIEW_ID,
				[
					'default' => $term->term_id,
					'autocomplete' => [
						'object' => QueryModule::QUERY_OBJECT_TAX,
					],
				],
			);
		}
	}

	private function extract_taxonomy_type( $source_type ) {
		return str_replace( '_taxonomy', '', $source_type );
	}
}
