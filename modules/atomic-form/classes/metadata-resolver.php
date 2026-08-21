<?php
namespace ElementorPro\Modules\AtomicForm\Classes;

use Elementor\Utils as ElementorUtils;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Metadata_Resolver {
	private array $meta_keys;
	private array $context;
	private bool $is_html;

	public function __construct( array $meta_keys, array $context, bool $is_html ) {
		$this->meta_keys = $meta_keys;
		$this->context = $context;
		$this->is_html = $is_html;
	}

	public function resolve( string $message ): string {
		$block = $this->build_block();

		if ( '' === $block ) {
			return $message;
		}

		$line_break = $this->line_break();

		return $message . $line_break . '---' . $line_break . $line_break . $block;
	}

	private function build_block(): string {
		$line_break = $this->line_break();
		$output = '';

		foreach ( $this->meta_keys as $key ) {
			$item = $this->get_item( $key );

			if ( null === $item || '' === $item['value'] ) {
				continue;
			}

			$title = $item['title'];
			$value = $item['value'];

			if ( $this->is_html ) {
				$title = esc_html( $title );
				$value = nl2br( esc_html( $value ) );
			}

			$output .= sprintf( '%s: %s%s', $title, $value, $line_break );
		}

		return $output;
	}

	private function line_break(): string {
		return $this->is_html ? '<br>' : "\n";
	}

	private function get_item( string $key ): ?array {
		switch ( $key ) {
			case 'date':
				return [
					'title' => __( 'Date', 'elementor-pro' ),
					'value' => date_i18n( get_option( 'date_format' ) ),
				];

			case 'time':
				return [
					'title' => __( 'Time', 'elementor-pro' ),
					'value' => date_i18n( get_option( 'time_format' ) ),
				];

			case 'page-url':
				return [
					'title' => __( 'Page URL', 'elementor-pro' ),
					'value' => $this->context['referrer'] ?? '',
				];

			case 'user-agent':
				return [
					'title' => __( 'User Agent', 'elementor-pro' ),
					'value' => $this->get_user_agent(),
				];

			case 'credit':
				return [
					'title' => __( 'Powered by', 'elementor-pro' ),
					'value' => __( 'Elementor', 'elementor-pro' ),
				];

			default:
				return null;
		}
	}

	private function get_user_agent(): string {
		$user_agent = ElementorUtils::get_super_global_value( $_SERVER, 'HTTP_USER_AGENT' );

		return $user_agent ? sanitize_textarea_field( wp_unslash( $user_agent ) ) : '';
	}
}
