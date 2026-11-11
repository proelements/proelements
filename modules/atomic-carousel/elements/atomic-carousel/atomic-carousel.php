<?php

namespace ElementorPro\Modules\AtomicCarousel\Elements\Atomic_Carousel;

use Elementor\Core\Utils\Collection;
use Elementor\Modules\AtomicWidgets\ChildrenDependencies\Child_Dependency;
use Elementor\Modules\AtomicWidgets\Controls\Section;
use Elementor\Modules\AtomicWidgets\Controls\Types\Number_Control;
use Elementor\Modules\AtomicWidgets\Controls\Types\Select_Control;
use Elementor\Modules\AtomicWidgets\Controls\Types\Switch_Control;
use Elementor\Modules\AtomicWidgets\Controls\Types\Text_Control;
use Elementor\Modules\AtomicWidgets\Controls\Types\Toggle_Control;
use Elementor\Modules\AtomicWidgets\DynamicTags\Dynamic_Prop_Type;
use Elementor\Modules\AtomicWidgets\Elements\Base\Atomic_Element_Base;
use Elementor\Modules\AtomicWidgets\Elements\Base\Element_Builder;
use Elementor\Modules\AtomicWidgets\Elements\Base\Has_Element_Template;
use Elementor\Modules\AtomicWidgets\Elements\Loader\Frontend_Assets_Loader;
use Elementor\Modules\AtomicWidgets\PropDependencies\Manager as Dependency_Manager;
use Elementor\Modules\AtomicWidgets\PropTypes\Attributes_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Classes_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Grid_Track_Size_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\Boolean_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\Number_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\String_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Size_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Responsive_Prop_Type;
use Elementor\Modules\AtomicWidgets\Styles\Size_Constants;
use Elementor\Modules\AtomicWidgets\Styles\Style_Definition;
use Elementor\Modules\AtomicWidgets\Styles\Style_Variant;
use Elementor\Modules\AtomicWidgets\Utils\Element_Position;
use Elementor\Modules\Components\PropTypes\Overridable_Prop_Type;
use Elementor\Plugin;
use Elementor\Utils;
use ElementorPro\Modules\AtomicCarousel\Carousel_I18n;
use ElementorPro\Modules\AtomicCarousel\Controls\Slides_Control;
use ElementorPro\Modules\AtomicCarousel\Elements\Atomic_Carousel_Arrow_Next\Atomic_Carousel_Arrow_Next;
use ElementorPro\Modules\AtomicCarousel\Elements\Atomic_Carousel_Arrow_Prev\Atomic_Carousel_Arrow_Prev;
use ElementorPro\Modules\AtomicCarousel\Elements\Atomic_Carousel_Autoplay_Controls\Atomic_Carousel_Autoplay_Controls;
use ElementorPro\Modules\AtomicCarousel\Elements\Atomic_Carousel_Container\Atomic_Carousel_Container;
use ElementorPro\Modules\AtomicCarousel\Elements\Atomic_Carousel_Pagination\Atomic_Carousel_Pagination;
use ElementorPro\Modules\AtomicCarousel\Elements\Atomic_Carousel_Slide\Atomic_Carousel_Slide;
use ElementorPro\Modules\AtomicCarousel\Elements\Atomic_Carousel_Viewport\Atomic_Carousel_Viewport;
use ElementorPro\Modules\AtomicCarousel\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * V4 Carousel root element (ED-25236).
 */
class Atomic_Carousel extends Atomic_Element_Base {
	use Has_Element_Template {
		get_initial_config as private get_template_initial_config;
	}

	const ELEMENT_TYPE = 'e-carousel';
	const BASE_STYLE_KEY = 'base';

	const TRANSITION_SLIDE = 'slide';
	const TRANSITION_FADE = 'fade';
	const TRANSITION_NONE = 'none';

	const PAGINATION_NONE = 'none';
	const PAGINATION_DOTS = 'dots';

	const AUTOPLAY_STATE_PLAYING = 'playing';
	const AUTOPLAY_STATE_PAUSED = 'paused';

	const DEFAULT_SLIDE_COUNT = 4;
	const DEFAULT_SLIDES_PER_VIEW = 3;
	const DEFAULT_AUTOPLAY_DELAY = 5000;
	const DEFAULT_CAROUSEL_NAME = 'Carousel';

	const NEW_UNTIL_VERSION = '4.4';

	public static $widget_description = 'A carousel of slides with arrow navigation and dot pagination. REQUIRED child: e-carousel-viewport, which contains a single e-carousel-container holding the e-carousel-slide elements. Optional direct children: e-carousel-arrow-prev, e-carousel-arrow-next (each wraps any element as the arrow content), e-carousel-pagination (one e-carousel-dot prototype; the handler clones it per snap and never persists the clones) and e-carousel-autoplay-controls. When autoplay and show_autoplay_button are both true, add e-carousel-autoplay-controls as a direct child containing exactly one e-carousel-autoplay-play and one e-carousel-autoplay-pause; each button wraps any element (SVG, text) as its content. Setting those props through MCP does not add the elements: write the subtree yourself. Arrows, pagination and the autoplay controls are siblings of the viewport, never children of it, so dragging a slide never starts on a control.';

	public function __construct( $data = [], $args = null ) {
		parent::__construct( $data, $args );
		$this->meta( 'is_container', true );
		$this->meta( 'is_compound', true );
	}

	public function get_initial_config() {
		$config = $this->get_template_initial_config();

		$config['new_until_version'] = self::NEW_UNTIL_VERSION;

		return $config;
	}

	public static function get_type() {
		return self::ELEMENT_TYPE;
	}

	public static function get_element_type(): string {
		return self::ELEMENT_TYPE;
	}

	public function get_title() {
		return esc_html__( 'Carousel', 'elementor-pro' );
	}

	protected function build_template_context(): array {
		return array_merge( $this->build_base_template_context(), [
			'carousel_i18n' => Carousel_I18n::bag(),
			// States is design time only. A published page starts as playing and the handler follows the real
			// state; the canvas (client Twig, no PHP context) and editor-side PHP renders keep the stored value.
			'autoplay_initial_state' => $this->is_editor_render() ? null : self::AUTOPLAY_STATE_PLAYING,
		] );
	}

	private function is_editor_render(): bool {
		return Plugin::$instance->editor->is_edit_mode() || Plugin::$instance->preview->is_preview_mode();
	}

	public function get_keywords() {
		return [ 'ato', 'atom', 'atoms', 'atomic', 'carousel', 'slider', 'slides' ];
	}

	public function get_icon() {
		return 'eicon-nested-carousel';
	}

	protected static function define_props_schema(): array {
		$when_autoplay_on = Dependency_Manager::make()
			->where( [
				'operator' => 'eq',
				'path' => [ 'autoplay' ],
				'value' => true,
				'effect' => 'hide',
			] )
			->get();

		$when_autoplay_controls_shown = Dependency_Manager::make( Dependency_Manager::RELATION_AND )
			->where( [
				'operator' => 'eq',
				'path' => [ 'autoplay' ],
				'value' => true,
				'effect' => 'hide',
			] )
			->where( [
				'operator' => 'eq',
				'path' => [ 'show_autoplay_button' ],
				'value' => true,
				'effect' => 'hide',
			] )
			->get();

		$when_transition_is_not_fade = Dependency_Manager::make()
			->where( [
				'operator' => 'ne',
				'path' => [ 'transition_type' ],
				'value' => self::TRANSITION_FADE,
			] )
			->get();

		$when_transition_animates = Dependency_Manager::make()
			->where( [
				'operator' => 'ne',
				'path' => [ 'transition_type' ],
				'value' => self::TRANSITION_NONE,
				'effect' => 'hide',
			] )
			->get();

		return [
			'classes' => Classes_Prop_Type::make()->default( [] ),
			'carousel_name' => String_Prop_Type::make()
				->default( '' )
				->description( 'The accessible name of the carousel, used as the root aria-label. Falls back to "Carousel" when empty.' ),
			'transition_type' => String_Prop_Type::make()
				->enum( [ self::TRANSITION_SLIDE, self::TRANSITION_FADE, self::TRANSITION_NONE ] )
				->default( self::TRANSITION_SLIDE )
				->description( 'How the carousel moves between slides. `slide` scrolls horizontally, `fade` cross-fades and forces a single slide per view, `none` switches instantly with the `slide` layout and no animation.' ),
			// Not exposable in components until Core reconciles dependent children and responsive overrides in instances (ED-25809).
			// The ignore meta is set on the inner prop type so Responsive_Prop_Type::create_from() copies it both to
			// the outer prop and to every cloned per-breakpoint shape entry (desktop, tablet, mobile, …).
			'slides_per_view' => Responsive_Prop_Type::create_from(
				Number_Prop_Type::make()->default( self::DEFAULT_SLIDES_PER_VIEW )
					->meta( Overridable_Prop_Type::ignore() )
			)
				->set_dependencies( $when_transition_is_not_fade )
				->meta( Dynamic_Prop_Type::ignore() )
				->description( 'How many slides are visible at once at each breakpoint, 1 to 10. Unset breakpoints inherit from the next wider one, ending at desktop.' ),
			'slides_to_scroll' => Responsive_Prop_Type::create_from(
				Number_Prop_Type::make()->default( 1 )
					->meta( Overridable_Prop_Type::ignore() )
			)
				->set_dependencies( $when_transition_is_not_fade )
				->meta( Dynamic_Prop_Type::ignore() )
				->description( 'How many slides each arrow or dot click advances at each breakpoint, 1 to 10. Unset breakpoints inherit from the next wider one, ending at desktop.' ),
			'equal_height' => Boolean_Prop_Type::make()
				->default( true )
				->description( 'Stretch every slide to the height of the tallest one. Affects the slides only; the viewport height does not follow the active slide.' ),
			'loop' => Boolean_Prop_Type::make()
				->default( false )
				->description( 'Scroll past the last slide back to the first. Implemented by repositioning slides, so no slide is ever duplicated.' ),
			'autoplay' => Boolean_Prop_Type::make()
				->default( false )
				->meta( Overridable_Prop_Type::ignore() )
				->description( 'Advance slides automatically. Always off inside the editor.' ),
			'autoplay_delay' => Number_Prop_Type::make()
				->default( self::DEFAULT_AUTOPLAY_DELAY )
				->set_dependencies( $when_autoplay_on )
				->meta( Dynamic_Prop_Type::ignore() )
				->meta( 'suffix', 'MS' )
				->description( 'Milliseconds each slide stays on screen while autoplay runs.' ),
			'pause_on_hover' => Boolean_Prop_Type::make()
				->default( true )
				->set_dependencies( $when_autoplay_on )
				->description( 'Pause autoplay while the pointer is over the carousel.' ),
			'pause_on_interaction' => Boolean_Prop_Type::make()
				->default( true )
				->set_dependencies( $when_autoplay_on )
				->description( 'Pause autoplay once the visitor drags or clicks their way through the slides.' ),
			'show_autoplay_button' => Boolean_Prop_Type::make()
				->default( false )
				->set_dependencies( $when_autoplay_on )
				->meta( Overridable_Prop_Type::ignore() )
				->description( 'Show a pause/play button while autoplay runs. Off by default; turn it on unless the visitor has another way to stop the motion: WCAG 2.2.2 requires one whenever content moves on its own. Through MCP, setting this prop does not create the button: also add e-carousel-autoplay-controls as a direct child of e-carousel, containing e-carousel-autoplay-play and e-carousel-autoplay-pause.' ),
			'autoplay_state' => String_Prop_Type::make()
				->enum( [ self::AUTOPLAY_STATE_PLAYING, self::AUTOPLAY_STATE_PAUSED ] )
				->default( self::AUTOPLAY_STATE_PLAYING )
				->set_dependencies( $when_autoplay_controls_shown )
				->meta( Overridable_Prop_Type::ignore() )
				->meta( Dynamic_Prop_Type::ignore() )
				->description( 'Design time only: which autoplay control the editor canvas shows so it can be styled. `playing` shows the Pause button, `paused` shows the Play button. No effect on the published page, where the control follows the real autoplay state.' ),
			'transition_speed' => Number_Prop_Type::make()
				->default( 600 )
				->set_dependencies( $when_transition_animates )
				->meta( Dynamic_Prop_Type::ignore() )
				->meta( 'suffix', 'MS' )
				->description( 'How long one transition takes, in milliseconds (100-3000).' ),
			'show_arrows' => Boolean_Prop_Type::make()
				->default( true )
				->meta( Overridable_Prop_Type::ignore() )
				->description( 'Show the previous/next arrow elements. Turning this off removes them from the DOM and the Structure panel.' ),
			'pagination_type' => String_Prop_Type::make()
				->enum( [ self::PAGINATION_NONE, self::PAGINATION_DOTS ] )
				->default( self::PAGINATION_DOTS )
				->meta( Overridable_Prop_Type::ignore() )
				->description( 'Which pagination to render. `dots` shows one dot per snap position, `none` removes pagination from the DOM and the Structure panel.' ),
			'attributes' => Attributes_Prop_Type::make()->meta( Overridable_Prop_Type::ignore() ),
		];
	}

	protected function define_atomic_controls(): array {
		return [
			Section::make()
				->set_label( __( 'Content', 'elementor-pro' ) )
				->set_id( 'content' )
				->set_items( [
					Text_Control::bind_to( 'carousel_name' )
						->set_label( esc_html__( 'Carousel Name', 'elementor-pro' ) )
						->set_placeholder( esc_html__( 'Carousel', 'elementor-pro' ) ),
					Slides_Control::make()
						->set_label( esc_html__( 'Slides', 'elementor-pro' ) )
						->set_meta( [
							'layout' => 'custom',
						] ),
					Switch_Control::bind_to( 'show_arrows' )
						->set_label( esc_html__( 'Show Arrows', 'elementor-pro' ) ),
					Select_Control::bind_to( 'pagination_type' )
						->set_label( esc_html__( 'Pagination', 'elementor-pro' ) )
						->set_options( [
							[
								'value' => self::PAGINATION_NONE,
								'label' => esc_html__( 'None', 'elementor-pro' ),
							],
							[
								'value' => self::PAGINATION_DOTS,
								'label' => esc_html__( 'Dots', 'elementor-pro' ),
							],
						] ),
				] ),
			Section::make()
				->set_label( __( 'Settings', 'elementor-pro' ) )
				->set_id( 'settings' )
				->set_items( [
					Number_Control::bind_to( 'slides_per_view' )
						->set_label( esc_html__( 'Slides Per View', 'elementor-pro' ) )
						->set_min( 1 )
						->set_max( 10 )
						->set_should_force_int( true ),
					Number_Control::bind_to( 'slides_to_scroll' )
						->set_label( esc_html__( 'Slides Per Scroll', 'elementor-pro' ) )
						->set_min( 1 )
						->set_max( 10 )
						->set_should_force_int( true ),
					Switch_Control::bind_to( 'equal_height' )
						->set_label( esc_html__( 'Equal Height', 'elementor-pro' ) ),
					Switch_Control::bind_to( 'loop' )
						->set_label( esc_html__( 'Loop', 'elementor-pro' ) ),
					Select_Control::bind_to( 'transition_type' )
						->set_label( esc_html__( 'Transition', 'elementor-pro' ) )
						->set_options( [
							[
								'value' => self::TRANSITION_SLIDE,
								'label' => esc_html__( 'Slide', 'elementor-pro' ),
							],
							[
								'value' => self::TRANSITION_FADE,
								'label' => esc_html__( 'Fade', 'elementor-pro' ),
							],
							[
								'value' => self::TRANSITION_NONE,
								'label' => esc_html__( 'None', 'elementor-pro' ),
							],
						] ),
					Number_Control::bind_to( 'transition_speed' )
						->set_label( esc_html__( 'Transition Speed', 'elementor-pro' ) )
						->set_min( 100 )
						->set_max( 3000 )
						->set_step( 1 ),
					Switch_Control::bind_to( 'autoplay' )
						->set_label( esc_html__( 'Autoplay', 'elementor-pro' ) ),
					Number_Control::bind_to( 'autoplay_delay' )
						->set_label( esc_html__( 'Autoplay Delay', 'elementor-pro' ) )
						->set_min( 100 )
						->set_max( 60000 )
						->set_step( 100 ),
					Switch_Control::bind_to( 'pause_on_hover' )
						->set_label( esc_html__( 'Pause on Hover', 'elementor-pro' ) ),
					Switch_Control::bind_to( 'pause_on_interaction' )
						->set_label( esc_html__( 'Pause on Interaction', 'elementor-pro' ) ),
					Switch_Control::bind_to( 'show_autoplay_button' )
						->set_label( esc_html__( 'Show Play/Pause Controls', 'elementor-pro' ) ),
					Toggle_Control::bind_to( 'autoplay_state' )
						->set_label( esc_html__( 'States', 'elementor-pro' ) )
						->add_options( [
							self::AUTOPLAY_STATE_PLAYING => [ 'title' => esc_html__( 'Play', 'elementor-pro' ) ],
							self::AUTOPLAY_STATE_PAUSED => [ 'title' => esc_html__( 'Pause', 'elementor-pro' ) ],
						] )
						->set_exclusive( true )
						->set_allow_empty( false )
						->set_convert_options( true )
						->set_size( 'tiny' )
						->set_full_width( true ),
					Text_Control::bind_to( '_cssid' )
						->set_label( __( 'ID', 'elementor-pro' ) )
						->set_meta( $this->get_css_id_control_meta() ),
				] ),
		];
	}

	protected function define_base_styles(): array {
		return [
			static::BASE_STYLE_KEY => Style_Definition::make()
				->add_variant(
					Style_Variant::make()
						->add_props( [
							'display' => String_Prop_Type::generate( 'grid' ),
							'grid-template-columns' => Grid_Track_Size_Prop_Type::generate( [
								'size' => 1,
								'unit' => Size_Constants::UNIT_FR,
							] ),
							'position' => String_Prop_Type::generate( 'relative' ),
							// `.e-con` adds 10px padding. The editor outline is drawn on that outer
							// box, so a second frame sits outside the viewport.
							'padding' => Size_Prop_Type::generate( [
								'size' => 0,
								'unit' => 'px',
							] ),
						] )
				),
		];
	}

	protected function define_default_children() {
		$slides = [];

		foreach ( range( 1, self::DEFAULT_SLIDE_COUNT ) as $i ) {
			$slides[] = Atomic_Carousel_Slide::generate()
				->editor_settings( [
					/* translators: %d: Slide number. */
					'title' => sprintf( esc_html__( 'Slide %d', 'elementor-pro' ), $i ),
					'initial_position' => $i,
				] )
				->build();
		}

		$viewport = Atomic_Carousel_Viewport::generate()
			->meta( [ 'required' => true ] )
			->editor_settings( [
				'title' => esc_html__( 'Viewport', 'elementor-pro' ),
			] )
			->children( [
				Atomic_Carousel_Container::generate()
					->meta( [ 'required' => true ] )
					->editor_settings( [
						'title' => esc_html__( 'Slides', 'elementor-pro' ),
					] )
					->children( $slides )
					->build(),
			] )
			->build();

		return [
			$viewport,
			Atomic_Carousel_Arrow_Prev::build_default_element(),
			Atomic_Carousel_Arrow_Next::build_default_element(),
			Atomic_Carousel_Pagination::build_default_element(),
		];
	}

	protected function define_children_dependencies(): array {
		$shown = fn( string $prop ) => Dependency_Manager::make()->where( [
			'operator' => 'ne',
			'path' => [ $prop ],
			'value' => false,
		] );

		$pagination_is_dots = Dependency_Manager::make()->where( [
			'operator' => 'ne',
			'path' => [ 'pagination_type' ],
			'value' => self::PAGINATION_NONE,
		] );

		$autoplay_controls_shown = Dependency_Manager::make( Dependency_Manager::RELATION_AND )
			->where( [
				'operator' => 'eq',
				'path' => [ 'autoplay' ],
				'value' => true,
			] )
			->where( [
				'operator' => 'eq',
				'path' => [ 'show_autoplay_button' ],
				'value' => true,
			] );

		return [
			Child_Dependency::for( Atomic_Carousel_Arrow_Prev::ELEMENT_TYPE )
				->when( $shown( 'show_arrows' ) )
				->position( Element_Position::last() )
				->stash( true )
				->default_model(
					Element_Builder::make( Atomic_Carousel_Arrow_Prev::ELEMENT_TYPE )
						->is_locked( true )
						->hydrate_default_children( true )
						->build()
				),
			Child_Dependency::for( Atomic_Carousel_Arrow_Next::ELEMENT_TYPE )
				->when( $shown( 'show_arrows' ) )
				->position( Element_Position::last() )
				->stash( true )
				->default_model(
					Element_Builder::make( Atomic_Carousel_Arrow_Next::ELEMENT_TYPE )
						->is_locked( true )
						->hydrate_default_children( true )
						->build()
				),
			Child_Dependency::for( Atomic_Carousel_Pagination::ELEMENT_TYPE )
				->when( $pagination_is_dots )
				->position( Element_Position::last() )
				->stash( true )
				->default_model(
					Element_Builder::make( Atomic_Carousel_Pagination::ELEMENT_TYPE )
						->is_locked( true )
						->hydrate_default_children( true )
						->build()
				),
			// Empty and hydrated, like the arrows: the editor ids only the top node of a `default_model`, and
			// hydration builds Play and Pause with ids. Component instances insert the model verbatim on the
			// server, so the controls render default buttons when they have none.
			Child_Dependency::for( Atomic_Carousel_Autoplay_Controls::ELEMENT_TYPE )
				->when( $autoplay_controls_shown )
				->position( Element_Position::last() )
				->stash( true )
				->default_model(
					Element_Builder::make( Atomic_Carousel_Autoplay_Controls::ELEMENT_TYPE )
						->is_locked( true )
						->hydrate_default_children( true )
						->editor_settings( [
							'title' => esc_html__( 'Play/Pause Controls', 'elementor-pro' ),
						] )
						->build()
				),
		];
	}

	protected function define_allowed_child_types() {
		return [
			Atomic_Carousel_Viewport::ELEMENT_TYPE,
			Atomic_Carousel_Arrow_Prev::ELEMENT_TYPE,
			Atomic_Carousel_Arrow_Next::ELEMENT_TYPE,
			Atomic_Carousel_Pagination::ELEMENT_TYPE,
			Atomic_Carousel_Autoplay_Controls::ELEMENT_TYPE,
		];
	}

	public function get_style_depends() {
		return array_merge( parent::get_style_depends(), [ Module::STYLE_HANDLE ] );
	}

	public function get_script_depends() {
		$global_depends = parent::get_script_depends();
		$depends = [ Module::HANDLER_SCRIPT_HANDLE ];

		if ( Plugin::$instance->preview->is_preview_mode() ) {
			$depends[] = Module::PREVIEW_HANDLER_SCRIPT_HANDLE;
		}

		return array_merge( $global_depends, $depends );
	}

	public function register_frontend_handlers() {
		$min_suffix = ( Utils::is_script_debug() || Utils::is_elementor_tests() ) ? '' : '.min';

		wp_register_script(
			Module::HANDLER_SCRIPT_HANDLE,
			ELEMENTOR_PRO_URL . "assets/js/carousel-handler{$min_suffix}.js",
			[ Frontend_Assets_Loader::FRONTEND_HANDLERS_HANDLE ],
			ELEMENTOR_PRO_VERSION,
			true
		);

		wp_register_script(
			Module::PREVIEW_HANDLER_SCRIPT_HANDLE,
			ELEMENTOR_PRO_URL . "assets/js/carousel-preview-handler{$min_suffix}.js",
			[ Frontend_Assets_Loader::FRONTEND_HANDLERS_HANDLE, Module::HANDLER_SCRIPT_HANDLE ],
			ELEMENTOR_PRO_VERSION,
			true
		);
	}

	public function render_markdown(): string {
		$settings = $this->get_atomic_settings();
		$slides = $this->get_slide_elements();
		$blocks = [ $this->build_markdown_header( $settings, count( $slides ) ) ];

		foreach ( $slides as $index => $slide ) {
			$content = trim( $slide->render_markdown() );
			$heading = '### Slide ' . ( $index + 1 );

			$blocks[] = '' === $content ? $heading : $heading . "\n\n" . $content;
		}

		return implode( "\n\n", $blocks );
	}

	/**
	 * Configuration line for agents reading the page back: name, slide count, transition, and autoplay.
	 *
	 * @param array<string, mixed> $settings
	 */
	private function build_markdown_header( array $settings, int $slide_count ): string {
		$name = trim( (string) ( $settings['carousel_name'] ?? '' ) );

		if ( '' === $name ) {
			$name = self::DEFAULT_CAROUSEL_NAME;
		}

		$transition = (string) ( $settings['transition_type'] ?? self::TRANSITION_SLIDE );
		$parts = [
			sprintf(
				'Carousel "%s": %d %s',
				$name,
				$slide_count,
				1 === $slide_count ? 'slide' : 'slides'
			),
			sprintf( '%s transition', $transition ),
		];

		if ( self::TRANSITION_FADE !== $transition ) {
			$slides_per_view = $settings['slides_per_view'] ?? null;

			// A responsive value resolves to its breakpoint map; the desktop value describes the carousel.
			if ( is_array( $slides_per_view ) ) {
				$slides_per_view = $slides_per_view['desktop'] ?? null;
			}

			$parts[] = sprintf( '%s per view', $slides_per_view ?? self::DEFAULT_SLIDES_PER_VIEW );
		}

		if ( ! empty( $settings['autoplay'] ) ) {
			$delay = $settings['autoplay_delay'] ?? self::DEFAULT_AUTOPLAY_DELAY;
			$has_button = true === ( $settings['show_autoplay_button'] ?? false );

			$parts[] = $has_button
				? sprintf( 'autoplay on (%sms)', $delay )
				: sprintf( 'autoplay on (%sms, no play/pause control)', $delay );
		} else {
			$parts[] = 'autoplay off';
		}

		return implode( ', ', $parts );
	}

	/**
	 * @return list<object>
	 */
	private function get_slide_elements(): array {
		$viewport = $this->first_child_of_type( $this, Atomic_Carousel_Viewport::ELEMENT_TYPE );

		if ( null === $viewport ) {
			return [];
		}

		$container = $this->first_child_of_type( $viewport, Atomic_Carousel_Container::ELEMENT_TYPE );

		if ( null === $container ) {
			return [];
		}

		return Collection::make( $container->get_children() )
			->filter( fn( $child ) => Atomic_Carousel_Slide::ELEMENT_TYPE === $child->get_type() )
			->all();
	}

	/**
	 * @param object $element
	 */
	private function first_child_of_type( $element, string $type ) {
		return Collection::make( $element->get_children() )
			->filter( fn( $child ) => $type === $child->get_type() )
			->first();
	}

	protected function get_templates(): array {
		return [
			'elementor/elements/atomic-carousel' => __DIR__ . '/atomic-carousel.html.twig',
		];
	}
}
