<?php
namespace ElementorPro\Modules\AtomicForm\Recaptcha_Score;

use ElementorPro\Modules\AtomicForm\Classes\Form_Elements_Finder;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Recaptcha_Score_Handler {
	// Must match the action the frontend passes to grecaptcha.enterprise.execute().
	const ACTION = 'atomic_form_submit';

	const TOKEN_FIELD = 'recaptcha_score_token';

	private bool $is_protected;

	public function __construct( array $form_element ) {
		$this->is_protected = ! empty( Form_Elements_Finder::find_by_type( $form_element['elements'] ?? [], Recaptcha_Score::get_element_type() ) );
	}

	public function is_rejected( string $token ): bool {
		if ( ! $this->is_protected ) {
			return false;
		}

		if ( '' === $token || ! Recaptcha_Score_Settings::has_credentials() ) {
			return true;
		}

		$assessment = Recaptcha_Score_Settings::create_client()->create_assessment( $token, self::ACTION );

		return ! $this->is_assessment_passed( $assessment );
	}

	private function is_assessment_passed( ?array $assessment ): bool {
		if ( null === $assessment ) {
			return false;
		}

		$token_properties = $assessment['tokenProperties'] ?? [];

		if ( empty( $token_properties['valid'] ) || self::ACTION !== ( $token_properties['action'] ?? '' ) ) {
			return false;
		}

		$score = $assessment['riskAnalysis']['score'] ?? null;

		return is_numeric( $score ) && (float) $score >= Recaptcha_Score_Settings::get_threshold();
	}
}
