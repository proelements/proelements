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
		add_action( 'elementor/frontend/after_register_styles', [ $this, 'register_styles' ] );
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

	/**
	 * Get the base URL for assets.
	 *
	 * @return string
	 */
	public function get_assets_base_url(): string {
		return ELEMENTOR_PRO_URL;
	}

	/**
	 * Register styles.
	 *
	 * At build time, Elementor compiles `/modules/off-canvas/assets/scss/frontend.scss`
	 * to `/assets/css/widget-off-canvas.min.css`.
	 *
	 * @return void
	 */
	public function register_styles() {
		wp_register_style(
			'widget-off-canvas',
			$this->get_css_assets_url( 'widget-off-canvas', null, true, true ),
			[ 'elementor-frontend' ],
			ELEMENTOR_PRO_VERSION
		);
	}
}
