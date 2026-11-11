<?php
namespace ElementorPro\Modules\AtomicForm\Classes;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Field_Id_Shortcode_Resolver implements Shortcode_Resolver {
	private array $form_data;
	private bool $urlencode;
	private array $cssid_map;
	private bool $is_html;

	public function __construct( array $form_data, bool $urlencode = false, array $cssid_map = [], bool $is_html = false ) {
		$this->form_data = $form_data;
		$this->urlencode = $urlencode;
		$this->cssid_map = $cssid_map;
		$this->is_html = $is_html;
	}

	public function resolve( string $message ): string {
		return preg_replace_callback(
			'/\[field[^\]]*id=["\']([^"\']+)["\'][^\]]*\]/',
			function ( $matches ) {
				$field_id = $this->cssid_map[ $matches[1] ] ?? $matches[1];
				$value = '';

				if ( isset( $this->form_data[ $field_id ] ) ) {
					$field_value = $this->form_data[ $field_id ];
					$value = is_array( $field_value ) ? implode( ', ', $field_value ) : (string) $field_value;
				}

				if ( $this->is_html ) {
					$value = nl2br( esc_html( $value ) );
				}

				return $this->urlencode ? urlencode( $value ) : $value;
			},
			$message
		);
	}
}
