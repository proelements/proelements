<?php
namespace ElementorPro\Modules\AtomicForm\Recaptcha_Score;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Recaptcha_Score_Settings {
	const FIELD_SITE_KEY = 'pro_recaptcha_score_site_key';
	const FIELD_PROJECT_ID = 'pro_recaptcha_score_project_id';
	const FIELD_API_KEY = 'pro_recaptcha_score_api_key';
	const FIELD_THRESHOLD = 'pro_recaptcha_score_threshold';

	const OPTION_NAME_SITE_KEY = 'elementor_' . self::FIELD_SITE_KEY;
	const OPTION_NAME_PROJECT_ID = 'elementor_' . self::FIELD_PROJECT_ID;
	const OPTION_NAME_API_KEY = 'elementor_' . self::FIELD_API_KEY;
	const OPTION_NAME_THRESHOLD = 'elementor_' . self::FIELD_THRESHOLD;

	const DEFAULT_THRESHOLD = 0.5;

	public static function get_site_key(): string {
		return trim( (string) get_option( self::OPTION_NAME_SITE_KEY, '' ) );
	}

	public static function get_project_id(): string {
		return trim( (string) get_option( self::OPTION_NAME_PROJECT_ID, '' ) );
	}

	public static function get_api_key(): string {
		return trim( (string) get_option( self::OPTION_NAME_API_KEY, '' ) );
	}

	public static function get_threshold(): float {
		$threshold = get_option( self::OPTION_NAME_THRESHOLD, self::DEFAULT_THRESHOLD );

		if ( ! is_numeric( $threshold ) || 0 > $threshold || 1 < $threshold ) {
			return self::DEFAULT_THRESHOLD;
		}

		return (float) $threshold;
	}

	public static function sanitize_threshold( $value ): float {
		if ( ! is_numeric( $value ) ) {
			return self::DEFAULT_THRESHOLD;
		}

		return min( 1.0, max( 0.0, (float) $value ) );
	}

	public static function has_credentials(): bool {
		return '' !== self::get_site_key()
			&& '' !== self::get_project_id()
			&& '' !== self::get_api_key();
	}

	public static function create_client(): Recaptcha_Score_Client {
		return new Recaptcha_Score_Client( self::get_project_id(), self::get_api_key(), self::get_site_key() );
	}
}
