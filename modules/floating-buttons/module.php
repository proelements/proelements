<?php

namespace ElementorPro\Modules\FloatingButtons;

use Elementor\Core\Base\Module as BaseModule;
use Elementor\Core\Documents_Manager;
use Elementor\Plugin;
use ElementorPro\Modules\FloatingButtons\Documents\Floating_Buttons;
use ElementorPro\Modules\ThemeBuilder\Classes\Locations_Manager;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends BaseModule {

	const EXPERIMENT_NAME = 'floating-buttons';

	const FLOATING_BUTTONS_DOCUMENT_TYPE = 'floating-buttons';

	public static function is_active(): bool {
		return class_exists( 'Elementor\Modules\FloatingButtons\Module' ) &&
		Plugin::$instance->experiments->is_feature_active( static::EXPERIMENT_NAME );
	}

	public function get_name(): string {
		return static::EXPERIMENT_NAME;
	}

	public function get_widgets(): array {
		return [
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
	}

	public function __construct() {
		parent::__construct();

		add_action( 'elementor/theme/register_locations', [ $this, 'register_location' ] );
		add_action( 'wp_footer', [ $this, 'print_floating_buttons' ] );

		add_action( 'elementor/documents/register', function ( Documents_Manager $documents_manager ) {
			$documents_manager->register_document_type(
				self::FLOATING_BUTTONS_DOCUMENT_TYPE,
				Floating_Buttons::class
			);
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
