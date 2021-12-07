<?php
namespace ElementorPro\Modules\Library;

use Elementor\Core\Base\Document;
use Elementor\TemplateLibrary\Source_Local;
use ElementorPro\Base\Module_Base;
use ElementorPro\Modules\Library\Classes\Shortcode;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {

	public function get_widgets() {
		return [
			'Template',
		];
	}

	public function __construct() {
		parent::__construct();

		$this->add_filters();
		$this->add_actions();

		new Shortcode();
	}

	public function get_name() {
		return 'library';
	}

	public function register_wp_widgets() {
		register_widget( 'ElementorPro\Modules\Library\WP_Widgets\Elementor_Library' );
	}

	public function localize_settings( $settings ) {
		$settings = array_replace_recursive( $settings, [
			'i18n' => [
				'home_url' => home_url(),
				'edit_template' => esc_html__( 'Edit Template', 'elementor-pro' ),
			],
		] );

		return $settings;
	}

	public function add_to_results_for_library_widget_templates( $val, $post, $request ) {
		$document = Plugin::elementor()->documents->get( $post->ID );
		if ( $document ) {
			return true;
		}

		return false;
	}

	public function format_post_title_for_library_widget_templates( $post_title, $post_id, $request ) {
		$document = Plugin::elementor()->documents->get( $post_id );
		return $post_title . ' (' . $document->get_post_type_title() . ')';
	}

	public function add_actions() {
		add_action( 'widgets_init', [ $this, 'register_wp_widgets' ] );
	}

	/**
	 * @deprecated 2.6.0 No longer used by internal code. See Autocomplete documentation in Query-Control Module.
	 * @param array $results
	 * @param array $data
	 *
	 * @return array
	 */
	public function get_autocomplete_for_library_widget_templates( array $results, array $data ) {
		$document_types = Plugin::elementor()->documents->get_document_types( [
			'show_in_library' => true,
		] );

		$query_params = [
			's' => $data['q'],
			'post_type' => Source_Local::CPT,
			'posts_per_page' => -1,
			'orderby' => 'meta_value',
			'order' => 'ASC',
			'meta_query' => [
				[
					'key' => Document::TYPE_META_KEY,
					'value' => array_keys( $document_types ),
					'compare' => 'IN',
				],
			],
		];

		$query = new \WP_Query( $query_params );

		$results = [];

		foreach ( $query->posts as $post ) {
			$document = Plugin::elementor()->documents->get( $post->ID );
			if ( $document ) {
				$results[] = [
					'id' => $post->ID,
					'text' => esc_html( $post->post_title ) . ' (' . $document->get_post_type_title() . ')',
				];
			}
		}

		return $results;
	}

	/**
	 * @deprecated 2.6.0 No longer used by internal code. See Autocomplete documentation in Query-Control Module.
	 * @param $results
	 * @param $request
	 *
	 * @return mixed
	 */
	public function get_value_title_for_library_widget_templates( $results, $request ) {
		$ids = (array) $request['id'];

		$query = new \WP_Query(
			[
				'post_type' => Source_Local::CPT,
				'post__in' => $ids,
				'posts_per_page' => -1,
			]
		);

		foreach ( $query->posts as $post ) {
			$document = Plugin::elementor()->documents->get( $post->ID );
			if ( $document ) {
				$results[ $post->ID ] = esc_html( $post->post_title ) . ' (' . $document->get_post_type_title() . ')';
			}
		}

		return $results;
	}

	public function add_filters() {
		add_filter( 'elementor_pro/editor/localize_settings', [ $this, 'localize_settings' ] );
		add_filter( 'elementor_pro/admin/localize_settings', [ $this, 'localize_settings' ] ); // For WordPress Widgets and Customizer
		add_filter( 'elementor/widgets/black_list', function( $black_list ) {
			$black_list[] = 'ElementorPro\Modules\Library\WP_Widgets\Elementor_Library';

			return $black_list;
		} );
	}

	public static function get_templates() {
		return Plugin::elementor()->templates_manager->get_source( 'local' )->get_items();
	}

	public static function empty_templates_message() {
		return '<div id="elementor-widget-template-empty-templates">
				<div class="elementor-widget-template-empty-templates-icon"><i class="eicon-nerd" aria-hidden="true"></i></div>
				<div class="elementor-widget-template-empty-templates-title">' . esc_html__( 'You Haven’t Saved Templates Yet.', 'elementor-pro' ) . '</div>
				<div class="elementor-widget-template-empty-templates-footer">' . esc_html__( 'Want to learn more about Elementor library?', 'elementor-pro' ) . ' <a class="elementor-widget-template-empty-templates-footer-url" href="https://go.elementor.com/docs-library/" target="_blank">' . esc_html__( 'Click Here', 'elementor-pro' ) . '</a>
				</div>
				</div>';
	}
}
