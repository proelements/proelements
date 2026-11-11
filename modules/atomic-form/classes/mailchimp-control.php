<?php
namespace ElementorPro\Modules\AtomicForm\Classes;

use Elementor\Modules\AtomicWidgets\Controls\Base\Atomic_Control_Base;
use Elementor\Utils as Elementor_Utils;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Mailchimp_Control extends Atomic_Control_Base {
	const AUDIENCE = 'mailchimp-audience';
	const GROUPS = 'mailchimp-groups';
	const FIELDS_MAP = 'mailchimp-fields-map';

	const CONTROL_TYPE_AUDIENCE = 'mailchimp-audience';
	const CONTROL_TYPE_GROUPS = 'mailchimp-groups';
	const CONTROL_TYPE_FIELDS_MAP = 'mailchimp-fields-map';

	const CONTROL_TYPES = [
		self::AUDIENCE => self::CONTROL_TYPE_AUDIENCE,
		self::GROUPS => self::CONTROL_TYPE_GROUPS,
		self::FIELDS_MAP => self::CONTROL_TYPE_FIELDS_MAP,
	];

	public function get_type(): string {
		$bind = $this->get_bind();

		if ( ! isset( self::CONTROL_TYPES[ $bind ] ) ) {
			Elementor_Utils::safe_throw( "Unsupported Mailchimp control bind: {$bind}" );

			return self::CONTROL_TYPE_AUDIENCE;
		}

		return self::CONTROL_TYPES[ $bind ];
	}

	public function get_props(): array {
		return [];
	}
}
