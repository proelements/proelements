<?php
namespace ElementorPro\Modules\ThemeBuilder\Documents;

use Elementor\DB;
use ElementorPro\Base\MarkerInterfaces\Template_With_Post_Content_Interface;
use ElementorPro\Modules\ThemeBuilder\Module;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
abstract class Single_Base extends Archive_Single_Base  implements Template_With_Post_Content_Interface {


	public static function get_properties() {
		$properties = parent::get_properties();

		$properties['location'] = 'single';
		$properties['condition_type'] = 'singular';

		return $properties;
	}

	public static function get_title() {
		return esc_html__( 'Single', 'elementor-pro' );
	}

	public static function get_plural_title() {
		return esc_html__( 'Singles', 'elementor-pro' );
	}

	public static function get_editor_panel_config() {
		$config = parent::get_editor_panel_config();

		$config['widgets_settings']['theme-post-content'] = [
			'show_in_panel' => true,
		];

		return $config;
	}

	protected static function get_editor_panel_categories() {
		$categories = [
			'theme-elements-single' => [
				'title' => esc_html__( 'Single', 'elementor-pro' ),
			],
		];

		return $categories + parent::get_editor_panel_categories();
	}

	public function before_get_content() {
		parent::before_get_content();

		// For `loop_start` hook.
		if ( have_posts() ) {
			the_post();
		}
	}

	public function after_get_content() {
		wp_reset_postdata();

		parent::after_get_content();
	}

	public function get_container_attributes() {
		$attributes = parent::get_container_attributes();

		if ( is_singular() /* Not 404 */ ) {
			$post_classes = get_post_class( '', get_the_ID() );
			$attributes['class'] .= ' ' . implode( ' ', $post_classes );
		}

		return $attributes;
	}

	public function print_content() {
		$requested_post_id = get_the_ID();
		if ( $requested_post_id !== $this->post->ID ) {
			$requested_document = Module::instance()->get_document( $requested_post_id );

			/**
			 * if current requested document is theme-document & it's not a content type ( like header/footer/sidebar )
			 * show a placeholder instead of content.
			 */
			if ( $requested_document && ! $requested_document instanceof Section && $requested_document->get_location() !== $this->get_location() ) {
				echo '<div class="elementor-theme-builder-content-area">' . esc_html__( 'Content Area', 'elementor-pro' ) . '</div>';

				return;
			}
		}

		parent::print_content();
	}

	protected function register_controls() {
		parent::register_controls();

		$post_type = $this->get_main_meta( self::REMOTE_CATEGORY_META_KEY );

		$latest_posts = get_posts( [
			'posts_per_page' => 1,
			'post_type' => $post_type,
		] );

		if ( ! empty( $latest_posts ) ) {
			$this->update_control(
				'preview_type',
				[
					'default' => 'single/' . $post_type,
				]
			);

			$this->update_control(
				'preview_id',
				[
					'default' => $latest_posts[0]->ID,
				]
			);
		}
	}

	public static function get_preview_as_options() {
		$post_types = Module::get_public_post_types();

		$post_types['attachment'] = get_post_type_object( 'attachment' )->label;
		$post_types_options = [];

		foreach ( $post_types as $post_type => $label ) {
			$post_types_options[ 'single/' . $post_type ] = get_post_type_object( $post_type )->labels->singular_name;
		}

		return [
			'single' => [
				'label' => esc_html__( 'Single', 'elementor-pro' ),
				'options' => $post_types_options,
			],
			'page/404' => esc_html__( '404', 'elementor-pro' ),
		];
	}

	public function get_depended_widget() {
		return Plugin::elementor()->widgets_manager->get_widget_types( 'theme-post-content' );
	}

	public function get_elements_data( $status = DB::STATUS_PUBLISH ) {
		$data = parent::get_elements_data();

		if ( Plugin::elementor()->preview->is_preview_mode() && self::get_property( 'location' ) === Module::instance()->get_locations_manager()->get_current_location() ) {
			$has_the_content = false;

			$depended_widget = $this->get_depended_widget();

			Plugin::elementor()->db->iterate_data( $data, function( $element ) use ( &$has_the_content, $depended_widget ) {
				if ( isset( $element['widgetType'] ) && $depended_widget->get_name() === $element['widgetType'] ) {
					$has_the_content = true;
				}
			} );

			if ( ! $has_the_content ) {
				add_action( 'wp_footer', [ $this, 'preview_error_handler' ] );
			}
		}

		return $data;
	}

	public function preview_error_handler() {
		$depended_widget_title = $this->get_depended_widget()->get_title();

		wp_localize_script( 'elementor-frontend', 'elementorPreviewErrorArgs', [
			/* translators: %s: Widget name. */
			'headerMessage' => sprintf( esc_html__( 'The %s Widget was not found in your template.', 'elementor-pro' ), $depended_widget_title ),
			/* translators: 1: Widget name, 2: Template name.  */
			'message' => sprintf( esc_html__( 'You must include the %1$s Widget in your template (%2$s), in order for Elementor to work on this page.', 'elementor-pro' ), $depended_widget_title, '<strong>' . static::get_title() . '</strong>' ),
			'strings' => [
				'confirm' => esc_html__( 'Edit Template', 'elementor-pro' ),
			],
			'confirmURL' => $this->get_edit_url(),
		] );
	}
}
