<?php
namespace ElementorPro\Modules\AtomicForm\Actions;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Action_Type {
	const EMAIL = 'email';
	const COLLECT_SUBMISSIONS = 'collect-submissions';
	const WEBHOOK = 'webhook';

	/**
	 * Get all registered action types.
	 *
	 * @return array
	 */
	public static function get_all_types(): array {
		return [
			self::EMAIL,
			self::COLLECT_SUBMISSIONS,
			self::WEBHOOK,
		];
	}

	public static function normalize_email_actions( string $type ): string {
		if ( preg_match( '/^' . preg_quote( self::EMAIL, '/' ) . '_\d+$/', $type ) ) {
			return self::EMAIL;
		}

		return $type;
	}

	/**
	 * Check if an action type is valid.
	 *
	 * @param string $type Action type to validate.
	 * @return bool
	 */
	public static function is_valid( string $type ): bool {
		$type = self::normalize_email_actions( $type );

		return in_array( $type, self::get_all_types(), true );
	}
}
