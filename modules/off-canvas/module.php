<?php
namespace ElementorPro\Modules\OffCanvas;

use Elementor\Core\Experiments\Manager;
use ElementorPro\Base\Module_Base;
use ElementorPro\Modules\OffCanvas\Widgets\Off_Canvas;
use ElementorPro\Plugin;
use Elementor\Core\DynamicTags\Manager as DynamicTagsManager;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {
	const FEATURE_ID = 'off-canvas';

	public function __construct() {
		parent::__construct();

		add_action( 'elementor/dynamic_tags/register', [ $this, 'register_tag' ] );
	}

	public function get_name() {
		return self::FEATURE_ID;
	}

	protected function get_widgets() {
		return [ Off_Canvas::WIDGET_ID ];
	}

	public static function is_active() {
		return Plugin::elementor()->experiments->is_feature_active( 'nested-elements' );
	}

	public function register_tag( DynamicTagsManager $dynamic_tags ) {
		$tag = __NAMESPACE__ . '\Tag';

		$dynamic_tags->register( new $tag() );
	}
}
