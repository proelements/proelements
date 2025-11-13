<?php

namespace ElementorPro\Modules\DynamicTags\Components;

use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Author_Meta_Filter {

	const DYNAMIC_TAG_SHORTCODE_PATTERN = '/\[elementor-tag.*?name=.*?"(author-meta|author-info).*?".*?settings=.*?".*?(user_email|email).*?".*?\]/';

	public function filter( $data, $document ) : array {
		if ( current_user_can( 'manage_options' ) || empty( $data['elements'] ) ) {
			return $data;
		}

		$dynamic_tag = $this->get_dynamic_tag( $data['elements'] );

		if ( ! $dynamic_tag ) {
			return $data;
		}

		if ( $this->is_dynamic_tag_authored_by_admin( $document, $dynamic_tag ) ) {
			return $data;
		}

		return Plugin::elementor()->db->iterate_data( $data, function ( $element ) {
			if ( $this->is_dynamic_tag_to_escape( $element ) ) {
				$element['settings']['__dynamic__'] = [];
			}

			return $element;
		});
	}

	private function is_dynamic_tag_authored_by_admin( $document, string $needle_tag ): bool {
		global $post;

		$post_author_id = $post->post_author ?? 0;
		$is_post_authored_by_admin = user_can( $post_author_id, 'manage_options' );

		if ( ! $is_post_authored_by_admin ) {
			return false;
		}

		$json = wp_json_encode( $document->get_elements_data() );

		return false !== strpos( $json, $needle_tag );
	}

	private function is_dynamic_tag_to_escape( array $element ): bool {
		if ( 'widget' !== $element['elType'] ) {
			return false;
		}

		return ! empty( $element['settings']['__dynamic__'] ) && ! empty( preg_match( self::DYNAMIC_TAG_SHORTCODE_PATTERN, $element['settings']['__dynamic__']['title'] ) );
	}

	private function get_dynamic_tag( array $elements ): ?string {
		$json = wp_json_encode( $elements );

		preg_match( self::DYNAMIC_TAG_SHORTCODE_PATTERN, $json, $matches );

		if ( empty( $matches ) ) {
			return false;
		}

		return $matches[0];
	}
}
