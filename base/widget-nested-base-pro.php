<?php
namespace ElementorPro\Base;

use Elementor\Modules\NestedElements\Base\Widget_Nested_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

abstract class Widget_Nested_Base_Pro extends Widget_Nested_Base {

	public function render_markdown(): string {
		$content = \Elementor\Element_Base::render_markdown();

		return Markdown_Utils::widget_section( $this->get_title(), $content );
	}
}
