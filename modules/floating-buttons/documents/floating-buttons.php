<?php

namespace ElementorPro\Modules\FloatingButtons\Documents;

use Elementor\Modules\Library\Traits\Library as Library_Trait;
use Elementor\Modules\FloatingButtons\Module as FloatingButtonsModule;
use Elementor\Modules\PageTemplates\Module as Page_Templates_Module;
use ElementorPro\Modules\ThemeBuilder\Documents\Theme_Document;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Floating_Buttons extends Theme_Document {
	use Library_Trait;

	public static function get_properties() {
		$properties = parent::get_properties();

		$properties['cpt'] = [ FloatingButtonsModule::CPT_FLOATING_BUTTONS ];
		$properties['support_kit'] = true;
		$properties['support_site_editor'] = false;

		$properties['show_navigator'] = false;
		$properties['allow_adding_widgets'] = false;
		$properties['support_page_layout'] = false;
		$properties['support_conditions'] = true;
		$properties['condition_type'] = 'general';
		$properties['library_close_title'] = esc_html__( 'Go To Dashboard', 'elementor-pro' );
		$properties['publish_button_title'] = esc_html__( 'After publishing this widget, you will be able to set it as visible on the entire site in the Admin Table.', 'elementor-pro' );
		$properties['allow_closing_remote_library'] = false;
		$properties['location'] = 'floating_buttons';

		return $properties;
	}


	public function print_content() {
		$plugin = \Elementor\Plugin::$instance;

		if ( $plugin->preview->is_preview_mode( $this->get_main_id() ) ) {
			// PHPCS - the method builder_wrapper is safe.
			echo $plugin->preview->builder_wrapper( '' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		} else {
			// PHPCS - the method get_content is safe.
			echo $this->get_content(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		}
	}

	public function get_location() {
		return self::get_property( 'location' );
	}

	public static function get_type() {
		return FloatingButtonsModule::FLOATING_BUTTONS_DOCUMENT_TYPE;
	}

	public static function register_post_fields_control( $document ) {}

	public static function register_hide_title_control( $document ) {}

	public function get_name() {
		return FloatingButtonsModule::FLOATING_BUTTONS_DOCUMENT_TYPE;
	}

	public function filter_admin_row_actions( $actions ) {
		unset( $actions['edit'] );
		unset( $actions['inline hide-if-no-js'] );
		$built_with_elementor = $this->add_built_with_elementor( [] );

		if ( isset( $actions['trash'] ) ) {
			$delete = $actions['trash'];
			unset( $actions['trash'] );
			$actions['trash'] = $delete;
		}

		return $built_with_elementor + $actions;
	}

	public function add_built_with_elementor( $actions ) {
		if ( $this->is_built_with_elementor() && $this->is_editable_by_current_user() ) {
			$edit_url = $this->get_edit_url();

			if ( ! $this->get_post()->post_content ) {
				$edit_url .= '#library';
			}

			$actions['edit_with_elementor'] = sprintf(
				'<a href="%1$s">%2$s</a>',
				$edit_url,
				__( 'Edit with Elementor', 'elementor-pro' )
			);
		}

		return $actions;
	}

	public static function get_title() {
		return esc_html__( 'Floating Button', 'elementor-pro' );
	}

	public static function get_plural_title() {
		return esc_html__( 'Floating Buttons', 'elementor-pro' );
	}

	public static function get_create_url() {
		return parent::get_create_url();
	}

	public function save( $data ) {
		if ( empty( $data['settings']['template'] ) ) {
			$data['settings']['template'] = Page_Templates_Module::TEMPLATE_CANVAS;
		}

		return parent::save( $data );
	}

	public function admin_columns_content( $column_name ) {
		if ( 'elementor_library_type' === $column_name ) {
			$this->print_admin_column_type();
		}
	}

	protected function get_remote_library_config() {
		$config = [
			'type' => 'floating_button',
			'default_route' => 'templates/floating-buttons',
			'autoImportSettings' => true,
		];

		return array_replace_recursive( parent::get_remote_library_config(), $config );
	}
}
