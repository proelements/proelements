<?php
namespace ElementorPro\Modules\AtomicForm\Classes;

use Elementor\Modules\AtomicWidgets\Controls\Types\Notice_Control;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Mailchimp_Api_Key_Notice_Control extends Notice_Control {
	const CONTROL_TYPE = 'mailchimp-api-key-notice';

	private bool $has_global_api_key = false;

	public function get_type(): string {
		return self::CONTROL_TYPE;
	}

	public function set_has_global_api_key( bool $has_global_api_key ): self {
		$this->has_global_api_key = $has_global_api_key;

		return $this;
	}

	public function get_props(): array {
		return array_merge( parent::get_props(), [
			'hasGlobalApiKey' => $this->has_global_api_key,
		] );
	}
}
