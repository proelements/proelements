<?php
namespace ElementorPro\Modules\ThemeBuilder\Documents;

use Elementor\Controls_Manager;
use Elementor\App\Modules\ImportExport\Module as Import_Export_Module;
use Elementor\Modules\Library\Documents\Library_Document;
use Elementor\TemplateLibrary\Source_Local;
use Elementor\Utils;
use ElementorPro\Core\Behaviors\Feature_Lock;
use ElementorPro\Modules\QueryControl\Module as QueryModule;
use ElementorPro\Modules\ThemeBuilder\Module;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

abstract class Theme_Document extends Library_Document {

	const LOCATION_META_KEY = '_elementor_location';

	public static function get_properties() {
		$properties = parent::get_properties();

		$properties['admin_tab_group'] = Module::ADMIN_LIBRARY_TAB_GROUP;
		$properties['support_kit'] = true;
		$properties['support_site_editor'] = true;
		$properties['support_conditions'] = true;

		return $properties;
	}

	protected static function get_site_editor_route() {
		return '/site-editor/templates/' . static::get_type();
	}

	protected static function get_site_editor_icon() {
		return 'eicon eicon-custom';
	}

	protected static function get_site_editor_layout() {
		return 'grid';
	}

	protected static function get_site_editor_thumbnail_url() {
		return ELEMENTOR_ASSETS_URL . 'images/app/site-editor/' . static::get_type() . '.svg';
	}

	public static function get_site_editor_config() {
		return [
			'type' => static::get_type(),
			'icon' => static::get_site_editor_icon(),
			'title' => static::get_title(),
			'page_title' => static::get_title(),
			'page_layout' => static::get_site_editor_layout(),

			// Todo: Remove. Core plugin should use `urls.route`.
			'url' => static::get_site_editor_route(),

			'urls' => [
				'route' => static::get_site_editor_route(),
				'create' => static::get_create_url(),
				'thumbnail' => static::get_site_editor_thumbnail_url(),
			],
			'tooltip_data' => static::get_site_editor_tooltip_data(),
			'show_instances' => true,
		];
	}

	public static function get_editor_panel_config() {
		$panel_config = parent::get_editor_panel_config();
		$document_config = static::get_properties();

		if ( true === $document_config['support_site_editor'] ) {
			$panel_config['messages']['publish_notification'] = esc_html__( 'Congrats! Your Site Part is Live', 'elementor-pro' );
		}

		return $panel_config;
	}

	protected function get_have_a_look_url() {
		$document_config = static::get_properties();

		if ( true === $document_config['support_site_editor'] ) {
			return '';
		}

		return parent::get_have_a_look_url();
	}

	public static function get_create_url() {
		$base_create_url = Plugin::elementor()->documents->get_create_new_post_url( Source_Local::CPT );

		return add_query_arg( [ 'template_type' => static::get_type() ], $base_create_url );
	}

	protected static function get_site_editor_tooltip_data() {
		return [
			'title' => '',
			'content' => '',
			'tip' => '',
			'video_url' => '',
		];
	}

	public function get_name() {
		return static::get_type();
	}

	public static function get_lock_behavior_v2() {
		return new Feature_Lock( [
			'type' => static::get_type(),
		] );
	}

	public function get_location_label() {
		$location = $this->get_location();
		$locations_settings = Module::instance()->get_locations_manager()->get_location( $location );
		$label = '';
		$is_section_doc_type = 'section' === $this->get_name();

		if ( $location ) {
			if ( $is_section_doc_type ) {
				$label .= isset( $locations_settings['label'] ) ? $locations_settings['label'] : $location;
			}
		}

		$supported = true;

		if ( $is_section_doc_type ) {
			if ( $location && ! $locations_settings ) {
				$supported = false;
			}
		} elseif ( ! $location || ! $locations_settings ) {
			$supported = false;
		}

		if ( ! $supported ) {
			$label .= ' (' . esc_html__( 'Unsupported', 'elementor-pro' ) . ')';
		}

		return $label;
	}

	public function before_get_content() {
		$preview_manager = Module::instance()->get_preview_manager();
		$preview_manager->switch_to_preview_query();
	}

	public function after_get_content() {
		$preview_manager = Module::instance()->get_preview_manager();
		$preview_manager->restore_current_query();
	}

	public function get_content( $with_css = false ) {
		$this->before_get_content();

		$content = parent::get_content( $with_css );

		$this->after_get_content();

		return $content;
	}

	public function print_content() {
		$plugin = Plugin::elementor();

		if ( $plugin->preview->is_preview_mode( $this->get_main_id() ) ) {
			// PHPCS - the method builder_wrapper is safe.
			echo $plugin->preview->builder_wrapper( '' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		} else {
			// PHPCS - the method get_content is safe.
			echo $this->get_content(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		}
	}

	public static function get_preview_as_default() {
		return '';
	}

	public static function get_preview_as_options() {
		return [];
	}

	public function get_container_attributes() {
		$attributes = parent::get_container_attributes();

		$location = Module::instance()->get_locations_manager()->get_current_location();

		if ( $location ) {
			$attributes['class'] .= ' elementor-location-' . $location;
		}

		return $attributes;
	}

	/**
	 * @static
	 * @since  2.0.0
	 * @access public
	 *
	 * @return string
	 */
	public function get_edit_url() {
		$url = parent::get_edit_url();

		if ( isset( $_GET['action'] ) && 'elementor_new_post' === $_GET['action'] ) {
			$url .= '#library';
		}

		return $url;

	}

	public function get_export_summary() {
		$summary = parent::get_export_summary();

		$summary['location'] = $this->get_location();

		$theme_builder = Plugin::instance()->modules_manager->get_modules( 'theme-builder' );

		$conditions = $theme_builder->get_conditions_manager()->get_document_conditions( $this );

		foreach ( $conditions as $condition ) {
			if ( 'include' === $condition['type'] && ! $condition['sub_id'] ) {
				$summary['conditions'][] = $condition;

				break;
			}
		}

		return $summary;
	}

	public function import( array $data ) {
		parent::import( $data );

		/** @var Module $theme_builder */
		$theme_builder = Plugin::instance()->modules_manager->get_modules( 'theme-builder' );

		$conditions = isset( $data['import_settings']['conditions'] ) ? $data['import_settings']['conditions'] : [];

		if ( ! empty( $conditions ) ) {
			$condition = $conditions[0];

			$condition = rtrim( implode( '/', $condition ), '/' );

			$conflicts = $theme_builder->get_conditions_manager()->get_conditions_conflicts_by_location( $condition, $this->get_location() );

			if ( $conflicts ) {
				/** @var Import_Export_Module $import_export_module */
				$import_export_module = Plugin::elementor()->app->get_component( 'import-export' );

				$override_conditions = $import_export_module->import->get_settings( 'overrideConditions' );

				if ( ! $override_conditions || ! in_array( $data['id'], $override_conditions, true ) ) {
					return;
				}

				foreach ( $conflicts as $template ) {
					/** @var Theme_Document $template_document */
					$template_document = Plugin::elementor()->documents->get( $template['template_id'] );

					$template_conditions = $theme_builder->get_conditions_manager()->get_document_conditions( $template_document );

					foreach ( $template_conditions as $index => $template_condition ) {
						if ( in_array( $template_condition, $conditions, true ) ) {
							unset( $template_conditions[ $index ] );
						}
					}

					$theme_builder->get_conditions_manager()->save_conditions( $template_document->get_main_id(), $template_conditions );
				}
			}
		}

		$theme_builder->get_conditions_manager()->save_conditions( $this->get_main_id(), $conditions );
	}

	protected function register_controls() {
		parent::register_controls();

		$this->start_controls_section(
			'preview_settings',
			[
				'label' => esc_html__( 'Preview Settings', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_SETTINGS,
			]
		);

		$this->add_control(
			'preview_type',
			[
				'label' => esc_html__( 'Preview Dynamic Content as', 'elementor-pro' ),
				'label_block' => true,
				'type' => Controls_Manager::SELECT,
				'default' => $this::get_preview_as_default(),
				'groups' => $this::get_preview_as_options(),
				'export' => false,
			]
		);

		$this->add_control(
			'preview_id',
			[
				'type' => QueryModule::QUERY_CONTROL_ID,
				'label_block' => true,
				'autocomplete' => [
					'object' => QueryModule::QUERY_OBJECT_JS,
				],
				'separator' => 'none',
				'export' => false,
				'condition' => [
					'preview_type!' => [
						'',
						'search',
					],
				],
			]
		);

		$this->add_control(
			'preview_search_term',
			[
				'label' => esc_html__( 'Search Term', 'elementor-pro' ),
				'export' => false,
				'condition' => [
					'preview_type' => 'search',
				],
			]
		);

		$this->add_control(
			'apply_preview',
			[
				'type' => Controls_Manager::BUTTON,
				'label' => esc_html__( 'Apply & Preview', 'elementor-pro' ),
				'label_block' => true,
				'show_label' => false,
				'text' => esc_html__( 'Apply & Preview', 'elementor-pro' ),
				'separator' => 'none',
				'event' => 'elementorThemeBuilder:ApplyPreview',
			]
		);

		$this->end_controls_section();

		$this->inject_html_tag_control();
	}

	/**
	 * @since 2.9.0
	 *
	 * If the implementing document uses optional wrapper HTML tags, this method injects the control to choose the tag
	 */
	private function inject_html_tag_control() {
		$wrapper_tags = $this->get_wrapper_tags();

		// Only proceed if the implementing document has optional wrapper HTML tags to replace 'div'
		if ( ! $wrapper_tags ) {
			return;
		}

		// Add 'div' to the beginning of the list of wrapper tags
		array_unshift( $wrapper_tags, 'div' );

		/**
		 * Inject the control that sets the HTML tag for the header/footer wrapper element
		 */
		$this->start_injection( [
			'of' => 'post_status',
			'fallback' => [
				'of' => 'post_title',
			],
		] );

		$this->add_control(
			'content_wrapper_html_tag',
			[
				'label' => esc_html__( 'HTML Tag', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'div',
				'options' => array_combine( $wrapper_tags, $wrapper_tags ),
			]
		);

		$this->end_injection();
	}

	/**
	 * @param null $elements_data
	 * @since 2.9.0
	 * @access public
	 *
	 * Overwrite method from document.php to check for user-selected tags to use as the document wrapper element
	 */
	public function print_elements_with_wrapper( $elements_data = null ) {
		// Check if the implementing document has optional wrapper tags
		$has_wrapper_tags = $this->get_wrapper_tags();
		$settings = $this->get_settings_for_display();
		$wrapper_tag = 'div';

		// Only proceed if the inheriting document has optional wrapper HTML tags to replace 'div'
		if ( $has_wrapper_tags ) {
			$wrapper_tag = Utils::validate_html_tag( $settings['content_wrapper_html_tag'] );
		}

		if ( ! $elements_data ) {
			$elements_data = $this->get_elements_data();
		}

		$is_dom_optimization_active = Plugin::elementor()->experiments->is_feature_active( 'e_dom_optimization' );
		?>
		<<?php Utils::print_validated_html_tag( $wrapper_tag ); ?> <?php Utils::print_html_attributes( $this->get_container_attributes() ); ?>>
		<?php if ( ! $is_dom_optimization_active ) : ?>
			<div class="elementor-section-wrap">
		<?php endif; ?>
				<?php $this->print_elements( $elements_data ); ?>
		<?php if ( ! $is_dom_optimization_active ) : ?>
			</div>
		<?php endif; ?>
		</<?php Utils::print_validated_html_tag( $wrapper_tag ); ?>>
		<?php
	}

	public function get_wrapper_tags() {
		// 'div' is added later, no need to include it in this list
		return [
			'main',
			'article',
			'header',
			'footer',
			'section',
			'aside',
			'nav',
		];
	}

	public function get_elements_raw_data( $data = null, $with_html_content = false ) {
		$preview_manager = Module::instance()->get_preview_manager();

		$preview_manager->switch_to_preview_query();

		$editor_data = parent::get_elements_raw_data( $data, $with_html_content );

		$preview_manager->restore_current_query();

		return $editor_data;
	}

	public function render_element( $data ) {
		$preview_manager = Module::instance()->get_preview_manager();

		$preview_manager->switch_to_preview_query();

		$render_html = parent::render_element( $data );

		$preview_manager->restore_current_query();

		return $render_html;
	}

	public function get_wp_preview_url() {
		// Ajax request from editor.
		// PHPCS - the method is safe - just retrieving a value.
		if ( ! empty( $_POST['initial_document_id'] ) ) { // phpcs:ignore WordPress.Security.NonceVerification.Missing
			return parent::get_wp_preview_url();
		}

		$preview_id = (int) $this->get_settings( 'preview_id' );
		$post_id = $this->get_main_id();

		list( $preview_category, $preview_object_type ) = array_pad( explode( '/', $this->get_settings( 'preview_type' ) ), 2, '' );

		$home_url = trailingslashit( home_url() );

		switch ( $preview_category ) {
			case 'archive':
				switch ( $preview_object_type ) {
					case 'author':
						if ( empty( $preview_id ) ) {
							$preview_id = get_current_user_id();
						}
						$preview_url = get_author_posts_url( $preview_id );
						break;
					case 'date':
						$preview_url = add_query_arg( 'year', gmdate( 'Y' ), $home_url );
						break;
				}
				break;
			case 'search':
				$preview_url = add_query_arg( 's', $this->get_settings( 'preview_search_term' ), $home_url );
				break;
			case 'taxonomy':
				$term = get_term( $preview_id );

				if ( $term && ! is_wp_error( $term ) ) {
					$preview_url = get_term_link( $preview_id );
				}

				break;
			case 'page':
				switch ( $preview_object_type ) {
					case 'home':
						$preview_url = get_post_type_archive_link( 'post' );
						break;
					case 'front':
						$preview_url = $home_url;
						break;
					case '404':
						$preview_url = add_query_arg( 'p', '-1', $home_url );
						break;
				}
				break;
			case 'post_type_archive':
				$post_type = $preview_object_type;
				if ( post_type_exists( $post_type ) ) {
					$preview_url = get_post_type_archive_link( $post_type );
				}
				break;
			case 'single':
				$post = get_post( $preview_id );
				if ( $post ) {
					$preview_url = get_permalink( $post );
				}
				break;
		} // End switch().

		if ( empty( $preview_url ) ) {
			$preview_url = $this->get_permalink();
		}

		$query_args = [
			'preview' => true,
			'preview_nonce' => wp_create_nonce( 'post_preview_' . $post_id ),
			'theme_template_id' => $post_id,
		];

		$preview_url = set_url_scheme( add_query_arg( $query_args, $preview_url ) );

		/**
		 * Document "WordPress preview" URL.
		 *
		 * Filters the WordPress preview URL.
		 *
		 * @since 2.0.0
		 *
		 * @param string        $preview_url Document preview URL.
		 * @param Theme_Document $this       An instance of the theme document.
		 */
		$preview_url = apply_filters( 'elementor/document/wp_preview_url', $preview_url, $this );

		return $preview_url;
	}

	public function get_preview_as_query_args() {
		$preview_id = (int) $this->get_settings( 'preview_id' );

		list( $preview_category, $preview_object_type ) = array_pad( explode( '/', $this->get_settings( 'preview_type' ) ), 2, '' );

		switch ( $preview_category ) {
			case 'archive':
				switch ( $preview_object_type ) {
					case 'author':
						if ( empty( $preview_id ) ) {
							$preview_id = get_current_user_id();
						}

						$query_args = [
							'author' => $preview_id,
						];
						break;
					case 'date':
						$query_args = [
							'year' => gmdate( 'Y' ),
						];
						break;
					case 'recent_posts':
						$query_args = [
							'post_type' => 'post',
						];
						break;
				}
				break;
			case 'search':
				$query_args = [
					's' => $this->get_settings( 'preview_search_term' ),
				];
				break;
			case 'taxonomy':
				$term = get_term( $preview_id );

				if ( $term && ! is_wp_error( $term ) ) {
					$query_args = [
						'tax_query' => [
							[
								'taxonomy' => $term->taxonomy,
								'terms' => [ $preview_id ],
								'field' => 'id',
							],
						],
					];
				}
				break;
			case 'page':
				switch ( $preview_object_type ) {
					case 'home':
						$query_args = [];
						break;
					case 'front':
						$query_args = [
							'p' => get_option( 'page_on_front' ),
							'post_type' => 'page',
						];
						break;
					case '404':
						$query_args = [
							'p' => -1,
						];
						break;
				}
				break;
			case 'post_type_archive':
				$post_type = $preview_object_type;
				if ( post_type_exists( $post_type ) ) {
					$query_args = [
						'post_type' => $post_type,
					];
				}
				break;
			case 'single':
				$query_args = [
					'post_type' => $preview_object_type,
					'p' => $preview_id,
				];
				break;
		} // End switch().

		if ( empty( $query_args ) ) {
			$query_args = [
				'p' => $this->get_main_id(),
				'post_type' => $this->get_main_post()->post_type,
			];
		}

		return $query_args;
	}

	public function after_preview_switch_to_query() {
		global $wp_query;
		if ( 'archive/recent_posts' === $this->get_settings( 'preview_type' ) ) {
			$wp_query->is_archive = true;
		}
	}

	public function get_location() {
		$value = self::get_property( 'location' );
		if ( ! $value ) {
			$value = $this->get_main_meta( self::LOCATION_META_KEY );
		}

		return $value;
	}

	public function get_initial_config() {
		$config = parent::get_initial_config();

		$config['support_site_editor'] = static::get_property( 'support_site_editor' );

		return $config;
	}
}
