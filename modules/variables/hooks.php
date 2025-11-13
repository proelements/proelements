<?php

namespace ElementorPro\Modules\Variables;

use Elementor\Modules\Variables\Classes\Variable_Types_Registry;
use ElementorPro\Modules\Variables\Classes\Style_Schema;
use ElementorPro\Modules\Variables\PropTypes\Size_Variable_Prop_Type;
use Elementor\Modules\Variables\Transformers\Global_Variable_Transformer;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Hooks {
	const PACKAGES = [
		'editor-variables-extended',
	];

	public function register() {
		$this->register_styles_transformers()
			->register_packages()
			->filter_for_style_schema()
			->register_size_variable_types();

		return $this;
	}

	private function register_size_variable_types() {
		add_action( 'elementor/variables/register', function ( Variable_Types_Registry $registry ) {
			$registry->register( Size_Variable_Prop_Type::get_key(), new Size_Variable_Prop_Type() );
		} );

		return $this;
	}

	private function register_styles_transformers() {
		add_action( 'elementor/atomic-widgets/styles/transformers/register', function ( $registry ) {
			$registry->register( Size_Variable_Prop_Type::get_key(), new Global_Variable_Transformer() );
		} );

		return $this;
	}

	private function register_packages() {
		add_filter( 'elementor-pro/editor/v2/packages', function ( $packages ) {
			return array_merge( $packages, self::PACKAGES );
		} );

		return $this;
	}

	private function filter_for_style_schema() {
		add_filter( 'elementor/atomic-widgets/styles/schema', function ( array $schema ) {
			return ( new Style_Schema() )->augment( $schema );
		} );

		return $this;
	}
}
