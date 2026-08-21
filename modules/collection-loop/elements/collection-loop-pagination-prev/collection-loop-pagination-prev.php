<?php
namespace ElementorPro\Modules\CollectionLoop\Elements\Collection_Loop_Pagination_Prev;

use ElementorPro\Modules\CollectionLoop\Elements\Base\Collection_Loop_Pagination_Button;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Collection_Loop_Pagination_Prev extends Collection_Loop_Pagination_Button {

	const ELEMENT_TYPE = 'e-pagination-prev';

	public static $widget_description = 'Pagination previous-page control. Container for custom label, icons, or other atomic content.';

	public static function get_type() {
		return self::ELEMENT_TYPE;
	}

	public static function get_element_type(): string {
		return self::ELEMENT_TYPE;
	}

	public function get_title() {
		return esc_html__( 'Previous', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-before';
	}

	protected static function get_default_label(): string {
		return __( 'Previous', 'elementor-pro' );
	}

	protected function get_direction(): string {
		return 'prev';
	}

	protected function get_target_page( int $current_page, int $max_pages ): int {
		return $current_page - 1;
	}
}
