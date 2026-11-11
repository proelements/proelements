<?php
namespace ElementorPro\Modules\AtomicForm\Actions;

use Elementor\Core\Base\Document;
use ElementorPro\License\API;
use ElementorPro\Modules\AtomicForm\Module;
use ElementorPro\Modules\Popup\Module as Popup_Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Popup_Action extends Action_Base {

	const NONE = 'none';
	const OPEN = 'open';
	const CLOSE = 'close';

	public function get_type(): string {
		return Action_Type::POPUP;
	}

	public function execute( array $form_data, array $widget_settings, array $context ): array {
		if ( ! API::is_licence_has_feature( Module::POPUP_ACTION_LICENSE_FEATURE_NAME ) ) {
			return $this->success( __( 'Popup action is not available', 'elementor-pro' ) );
		}

		$popup_action = $widget_settings['popup-action'] ?? self::NONE;

		if ( self::OPEN === $popup_action ) {
			return $this->open_popup( $widget_settings );
		}

		if ( self::CLOSE === $popup_action ) {
			return $this->success(
				__( 'Popup will close', 'elementor-pro' ),
				[
					'popup' => [
						'action' => self::CLOSE,
						'do_not_show_again' => ! empty( $widget_settings['popup-do-not-show-again'] ),
					],
				]
			);
		}

		return $this->success( __( 'No popup action selected', 'elementor-pro' ) );
	}

	/**
	 * Returns the selected popup ID, or 0 when the popup is missing, deleted or not published.
	 *
	 * @param mixed $value Resolved `popup-id` setting: the ID itself or the query value `{ id, label }`.
	 */
	public static function get_popup_id( $value ): int {
		$popup_id = absint( is_array( $value ) ? ( $value['id'] ?? 0 ) : $value );

		return $popup_id && self::is_published_popup( $popup_id ) ? $popup_id : 0;
	}

	private function open_popup( array $widget_settings ): array {
		$popup_id = self::get_popup_id( $widget_settings['popup-id'] ?? null );

		if ( ! $popup_id ) {
			return $this->success( __( 'Selected popup is not available', 'elementor-pro' ) );
		}

		return $this->success(
			__( 'Popup will open', 'elementor-pro' ),
			[
				'popup' => [
					'action' => self::OPEN,
					'id' => $popup_id,
				],
			]
		);
	}

	private static function is_published_popup( int $popup_id ): bool {
		return 'publish' === get_post_status( $popup_id )
			&& Popup_Module::DOCUMENT_TYPE === get_post_meta( $popup_id, Document::TYPE_META_KEY, true );
	}
}
