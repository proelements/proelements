<?php

namespace ElementorPro\Modules\FloatingButtons;

use Elementor\Core\Base\Module as BaseModule;
use Elementor\Core\Documents_Manager;
use Elementor\Plugin;
use Elementor\Utils as ElementorUtils;
use ElementorPro\License\API;
use ElementorPro\Modules\FloatingButtons\Documents\Floating_Buttons;
use ElementorPro\Modules\ThemeBuilder\Classes\Locations_Manager;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends BaseModule {

	const EXPERIMENT_NAME = 'floating-buttons';

	const FLOATING_BUTTONS_DOCUMENT_TYPE = 'floating-buttons';

	const CPT_FLOATING_BUTTONS = 'e-floating-buttons';

	public static function is_active(): bool {
		return class_exists( 'Elementor\Modules\FloatingButtons\Module' ) &&
		Plugin::$instance->experiments->is_feature_active( 'container' );
	}

	public function get_name(): string {
		return static::EXPERIMENT_NAME;
	}

	public function get_widgets(): array {
		$floating_buttons = [
			'Contact_Buttons_Var_1',
			'Contact_Buttons_Var_3',
			'Contact_Buttons_Var_4',
			'Contact_Buttons_Var_5',
			'Contact_Buttons_Var_6',
			'Contact_Buttons_Var_7',
			'Contact_Buttons_Var_8',
			'Contact_Buttons_Var_9',
			'Contact_Buttons_Var_10',
		];

		$floating_bars = [
			'Floating_Bars_Var_2',
			'Floating_Bars_Var_3',
		];

		return class_exists( 'Elementor\Modules\FloatingButtons\Base\Widget_Floating_Bars_Base' ) ? array_merge( $floating_buttons, $floating_bars ) : $floating_buttons;
	}

	public static function get_floating_elements_types() {
		return [
			'floating-buttons' => esc_html__( 'Floating Buttons', 'elementor-pro' ),
			'floating-bars' => esc_html__( 'Floating Bars', 'elementor-pro' ),
		];
	}

	public function is_preview_for_document( $post_id ) {
		$preview_id = ElementorUtils::get_super_global_value( $_GET, 'preview_id' );
		$preview = ElementorUtils::get_super_global_value( $_GET, 'preview' );

		 return 'true' === $preview && (int) $post_id === (int) $preview_id;
	}

	public function __construct() {
		parent::__construct();

		add_action( 'elementor/theme/register_locations', [ $this, 'register_location' ] );
		add_action( 'wp_footer', [ $this, 'print_floating_buttons' ] );

		if ( API::is_license_active() ) {
			add_action( 'elementor/documents/register', function ( Documents_Manager $documents_manager ) {
				$documents_manager->register_document_type(
					self::FLOATING_BUTTONS_DOCUMENT_TYPE,
					Floating_Buttons::class
				);
			}, 11 );
		}

		add_action( 'elementor/theme/before_do_floating_buttons', function ( Locations_Manager $locations_manager ) {
			$documents = $locations_manager->get_documents_for_location( 'floating_buttons' );
			foreach ( $documents as $post_id ) {
				if ( $this->is_preview_for_document( $post_id ) || get_the_ID() === $post_id ) {
					$locations_manager->skip_doc_in_location( 'floating_buttons', $post_id );
				}
			}
		} );
	}

	public function print_floating_buttons() {
		elementor_theme_do_location( 'floating_buttons' );
	}

	public function register_location( Locations_Manager $location_manager ) {
		$location_manager->register_location(
			'floating_buttons',
			[
				'label' => esc_html__( 'Floating Buttons', 'elementor-pro' ),
				'multiple' => true,
				'public' => false,
				'edit_in_content' => true,
			]
		);
	}
}
