<?php

namespace ElementorPro\Modules\LinkInBio;

use Elementor\Core\Base\Module as BaseModule;
use Elementor\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends BaseModule {

	const EXPERIMENT_NAME = 'link-in-bio';

	public function get_name(): string {
		return static::EXPERIMENT_NAME;
	}

	public function get_widgets(): array {
		return [
			'Link_In_Bio_Var_2',
			'Link_In_Bio_Var_3',
			'Link_In_Bio_Var_4',
			'Link_In_Bio_Var_5',
			'Link_In_Bio_Var_6',
			'Link_In_Bio_Var_7',
		];
	}
}
