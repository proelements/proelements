<?php
namespace ElementorPro\Modules\DynamicTags\Tags;

use ElementorPro\Modules\DynamicTags\Tags\Base\Data_Tag;
use ElementorPro\Modules\DynamicTags\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Post_Gallery extends Data_Tag {

	public function get_name() {
		return 'post-gallery';
	}

	public function get_title() {
		return esc_html__( 'Post Image Attachments', 'elementor-pro' );
	}

	public function get_categories() {
		return [ Module::GALLERY_CATEGORY ];
	}

	public function get_group() {
		return Module::POST_GROUP;
	}

	public function get_value( array $options = [] ) {

		$value = [];
		$images = [];
		$blocks = parse_blocks( get_the_content() );

		foreach ( $blocks as $block ) {
			if ( 'core/image' === $block['blockName'] ) {
				$images[] = get_post( $block['attrs']['id'] );
			}
			if ( 'core/gallery' === $block['blockName'] ) {
				foreach ( $block['innerBlocks'] as $inner_block ) {
					if ( 'core/image' === $inner_block['blockName'] ) {
						$images[] = get_post( $inner_block['attrs']['id'] );
					}
				}
			}
		}

		$images = array_merge( $images, get_attached_media( 'image', get_the_ID() ) );

		foreach ( $images as $image ) {
			if ( ! in_array( $image->ID, array_column( $value, 'id' ), true ) ) {
				$value[] = [
					'id' => $image->ID,
				];
			}
		}

		return $value;
	}
}
