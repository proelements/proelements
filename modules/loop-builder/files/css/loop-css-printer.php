<?php
namespace ElementorPro\Modules\LoopBuilder\Files\Css;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Loop_Css_Printer {

	public static function print_for_post( int $post_id, bool $is_autosave ): void {
		if ( $is_autosave ) {
			$css_file = Loop_Preview::create( $post_id );
		} else {
			$css_file = Loop::create( $post_id );
		}

		$css_file->print_all_css( $post_id );
	}
}
