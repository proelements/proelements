<?php
namespace ElementorPro\Modules\AtomicCarousel;

use Elementor\Modules\AtomicWidgets\Module as AtomicWidgetsModule;
use ElementorPro\Base\Module_Base;
use ElementorPro\License\API;
use ElementorPro\Modules\AtomicCarousel\Elements\Atomic_Carousel\Atomic_Carousel;
use ElementorPro\Modules\AtomicCarousel\Elements\Atomic_Carousel_Arrow_Next\Atomic_Carousel_Arrow_Next;
use ElementorPro\Modules\AtomicCarousel\Elements\Atomic_Carousel_Arrow_Prev\Atomic_Carousel_Arrow_Prev;
use ElementorPro\Modules\AtomicCarousel\Elements\Atomic_Carousel_Autoplay_Controls\Atomic_Carousel_Autoplay_Controls;
use ElementorPro\Modules\AtomicCarousel\Elements\Atomic_Carousel_Autoplay_Pause\Atomic_Carousel_Autoplay_Pause;
use ElementorPro\Modules\AtomicCarousel\Elements\Atomic_Carousel_Autoplay_Play\Atomic_Carousel_Autoplay_Play;
use ElementorPro\Modules\AtomicCarousel\Elements\Atomic_Carousel_Container\Atomic_Carousel_Container;
use ElementorPro\Modules\AtomicCarousel\Elements\Atomic_Carousel_Dot\Atomic_Carousel_Dot;
use ElementorPro\Modules\AtomicCarousel\Elements\Atomic_Carousel_Pagination\Atomic_Carousel_Pagination;
use ElementorPro\Modules\AtomicCarousel\Elements\Atomic_Carousel_Slide\Atomic_Carousel_Slide;
use ElementorPro\Modules\AtomicCarousel\Elements\Atomic_Carousel_Viewport\Atomic_Carousel_Viewport;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * V4 Carousel, a Pro element (ED-25236).
 */
class Module extends Module_Base {
	const MODULE_NAME = 'e-atomic-carousel';
	const LICENSE_FEATURE_NAME = 'atomic-carousel';
	const MIN_ELEMENTOR_VERSION = '4.4';
	const HANDLER_SCRIPT_HANDLE = 'elementor-pro-carousel-handler';
	const PREVIEW_HANDLER_SCRIPT_HANDLE = 'elementor-pro-carousel-preview-handler';
	const PACKAGE_HANDLE = 'editor-atomic-carousel';
	const STYLE_HANDLE = 'elementor-pro-atomic-carousel';

	// An arrow's icon points the way of the slide, so RTL mirrors it. The SVG element is the target: the SVG wrapper
	// carries no `data-e-type`, only its classes. `:where()` keeps the rule at zero specificity, leaving a transform
	// set on the icon wrapper in the editor in charge.
	// Default arrow and play/pause icon sizes. A variable, so the SVG's own Width and Height still win.
	// The root's autoplay state class shows one of Play and Pause. Child combinators keep a nested
	// carousel's controls out of reach, and the selectors outrank the buttons' own `display`.
	// Without a state class (autoplay or the controls switched off) the controls stay hidden, and so do
	// they under reduced motion, where autoplay never starts: before the handler runs, a Pause button
	// would flash. The editor keeps them so they can be styled. A button left without content has
	// nothing to show, so it is not left as an invisible tab stop.
	const INLINE_CSS = '.e-carousel__arrow { --e-svg-width: 25px; --e-svg-height: 25px; }'
		. ':where([dir="rtl"] .e-carousel__arrow svg) { transform: scaleX(-1); }'
		. '.e-carousel__autoplay-play, .e-carousel__autoplay-pause { --e-svg-width: 20px; --e-svg-height: 20px; appearance: none; -webkit-appearance: none; }'
		. '.e-carousel.e-carousel--autoplay-playing > .e-carousel__autoplay-controls > .e-carousel__autoplay-play { display: none; }'
		. '.e-carousel.e-carousel--autoplay-paused > .e-carousel__autoplay-controls > .e-carousel__autoplay-pause { display: none; }'
		. '.e-carousel:not(.e-carousel--autoplay-playing):not(.e-carousel--autoplay-paused) > .e-carousel__autoplay-controls { display: none; }'
		. '@media (prefers-reduced-motion: reduce) { .elementor:not(.elementor-edit-mode) .e-carousel > .e-carousel__autoplay-controls { display: none; } }'
		. '.e-carousel > .e-carousel__autoplay-controls > :is(.e-carousel__autoplay-play, .e-carousel__autoplay-pause):not(:has(*)) { display: none; }';

	public function get_name() {
		return self::MODULE_NAME;
	}

	public function __construct() {
		parent::__construct();

		if ( ! $this->is_atomic_widgets_active() || ! $this->is_license_feature_enabled() ) {
			return;
		}

		add_action(
			'elementor/elements/elements_registered',
			fn ( $elements_manager ) => $this->register_elements( $elements_manager )
		);

		add_filter(
			'elementor-pro/editor/v2/packages',
			fn ( $packages ) => array_merge( $packages, [ self::PACKAGE_HANDLE ] )
		);

		add_action( 'elementor/frontend/after_register_styles', fn () => $this->register_styles() );
	}

	// Inline only, and loaded through the carousel's style dependencies, so pages without a carousel skip it.
	private function register_styles() {
		wp_register_style( self::STYLE_HANDLE, false, [], ELEMENTOR_PRO_VERSION );
		wp_add_inline_style( self::STYLE_HANDLE, self::INLINE_CSS . Atomic_Carousel_Slide::get_layout_css() );
	}

	private function is_atomic_widgets_active(): bool {
		return version_compare( ELEMENTOR_VERSION, self::MIN_ELEMENTOR_VERSION, '>=' )
			&& Plugin::elementor()->experiments->is_feature_active( AtomicWidgetsModule::EXPERIMENT_NAME );
	}

	private function is_license_feature_enabled(): bool {
		return API::is_licence_has_feature( self::LICENSE_FEATURE_NAME );
	}

	public static function get_element_classes(): array {
		return [
			Atomic_Carousel::class,
			Atomic_Carousel_Viewport::class,
			Atomic_Carousel_Container::class,
			Atomic_Carousel_Slide::class,
			Atomic_Carousel_Arrow_Prev::class,
			Atomic_Carousel_Arrow_Next::class,
			Atomic_Carousel_Pagination::class,
			Atomic_Carousel_Dot::class,
			Atomic_Carousel_Autoplay_Controls::class,
			Atomic_Carousel_Autoplay_Play::class,
			Atomic_Carousel_Autoplay_Pause::class,
		];
	}

	private function register_elements( $elements_manager ) {
		foreach ( self::get_element_classes() as $class ) {
			$elements_manager->register_element_type( new $class() );
		}
	}
}
