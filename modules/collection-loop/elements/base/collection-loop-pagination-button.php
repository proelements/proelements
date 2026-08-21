<?php
namespace ElementorPro\Modules\CollectionLoop\Elements\Base;

use Elementor\Modules\AtomicWidgets\Controls\Section;
use Elementor\Modules\AtomicWidgets\Controls\Types\Text_Control;
use Elementor\Modules\AtomicWidgets\Elements\Atomic_Paragraph\Atomic_Paragraph;
use Elementor\Modules\AtomicWidgets\Elements\Base\Atomic_Element_Base;
use Elementor\Modules\AtomicWidgets\Elements\Base\Has_Element_Template;
use Elementor\Modules\AtomicWidgets\PropTypes\Attributes_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Classes_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Color_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Dimensions_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Html_V3_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\String_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Size_Prop_Type;
use Elementor\Modules\AtomicWidgets\Styles\Style_Definition;
use Elementor\Modules\AtomicWidgets\Styles\Style_States;
use Elementor\Modules\AtomicWidgets\Styles\Style_Variant;
use ElementorPro\Modules\CollectionLoop\Traits\Has_Pagination_Context;
use ElementorPro\Modules\CollectionLoop\Utils\Non_Overridable_Props;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

abstract class Collection_Loop_Pagination_Button extends Atomic_Element_Base {
	use Has_Element_Template;
	use Has_Pagination_Context;

	const BASE_STYLE_KEY = 'base';

	abstract protected static function get_default_label(): string;

	abstract protected function get_direction(): string;

	abstract protected function get_target_page( int $current_page, int $max_pages ): int;

	public function __construct( $data = [], $args = null ) {
		parent::__construct( $data, $args );
		$this->meta( 'is_container', true );
		$this->meta( 'permanently_locked', true );
	}

	public function should_show_in_panel() {
		return false;
	}

	public function get_icon() {
		return 'eicon-e-button';
	}

	protected static function define_props_schema(): array {
		return Non_Overridable_Props::apply_to_schema( [
			'classes' => Classes_Prop_Type::make()->default( [] ),
			'attributes' => Attributes_Prop_Type::make(),
		] );
	}

	protected function define_atomic_style_states(): array {
		return [ Style_States::get_class_states_map()['disabled'] ];
	}

	protected function define_atomic_controls(): array {
		return [
			Section::make()
				->set_label( __( 'Settings', 'elementor-pro' ) )
				->set_id( 'settings' )
				->set_items( [
					Text_Control::bind_to( '_cssid' )
						->set_label( __( 'ID', 'elementor-pro' ) )
						->set_meta( $this->get_css_id_control_meta() ),
				] ),
		];
	}

	protected function define_base_styles(): array {
		$padding = Dimensions_Prop_Type::generate( [
			'block-start' => Size_Prop_Type::generate( [
				'size' => 8,
				'unit' => 'px',
			] ),
			'inline-end' => Size_Prop_Type::generate( [
				'size' => 12,
				'unit' => 'px',
			] ),
			'block-end' => Size_Prop_Type::generate( [
				'size' => 8,
				'unit' => 'px',
			] ),
			'inline-start' => Size_Prop_Type::generate( [
				'size' => 12,
				'unit' => 'px',
			] ),
		] );

		return [
			static::BASE_STYLE_KEY => Style_Definition::make()
				->add_variant(
					Style_Variant::make()
						->add_prop( 'display', String_Prop_Type::generate( 'inline-flex' ) )
						->add_prop( 'align-items', String_Prop_Type::generate( 'center' ) )
						->add_prop( 'gap', Size_Prop_Type::generate( [
							'size' => 8,
							'unit' => 'px',
						] ) )
						->add_prop( 'padding', $padding )
						->add_prop( 'border-radius', Size_Prop_Type::generate( [
							'size' => 4,
							'unit' => 'px',
						] ) )
						->add_prop( 'border-width', Size_Prop_Type::generate( [
							'size' => 1,
							'unit' => 'px',
						] ) )
						->add_prop( 'border-style', String_Prop_Type::generate( 'solid' ) )
						->add_prop( 'border-color', Color_Prop_Type::generate( '#E5E7EB' ) )
						->add_prop( 'color', Color_Prop_Type::generate( '#1F2937' ) )
						->add_prop( 'font-size', Size_Prop_Type::generate( [
							'size' => 14,
							'unit' => 'px',
						] ) )
						->add_prop( 'text-align', String_Prop_Type::generate( 'center' ) )
						->add_prop( 'text-decoration', String_Prop_Type::generate( 'none' ) )
				),
		];
	}

	protected function define_default_children() {
		return [
			Atomic_Paragraph::generate()
				->settings( [
					'paragraph' => Html_V3_Prop_Type::generate( [
						'content' => String_Prop_Type::generate( static::get_default_label() ),
						'children' => [],
					] ),
					'tag' => String_Prop_Type::generate( 'span' ),
				] )
				->build(),
		];
	}

	protected function get_templates(): array {
		return [
			'elementor/elements/collection-loop-pagination-button' => __DIR__ . '/collection-loop-pagination-button.html.twig',
		];
	}

	protected function build_template_context(): array {
		return array_merge(
			$this->build_base_template_context(),
			[
				'pagination' => $this->build_pagination_view_model(),
			]
		);
	}

	private function build_pagination_view_model(): array {
		$direction = $this->get_direction();
		$aria_label = $this->get_pagination_aria_label( $direction );

		if ( ! $this->has_pagination_context() ) {
			return [
				'aria_controls' => '',
				'aria_label' => $aria_label,
				'direction' => $direction,
				'has_context' => false,
				'href' => '',
				'is_disabled' => false,
			];
		}

		$context = $this->get_pagination_context();
		$current_page = (int) ( $context['current_page'] ?? 1 );
		$max_pages = (int) ( $context['max_pages'] ?? 1 );
		$target_page = $this->get_target_page( $current_page, $max_pages );
		$is_disabled = $target_page < 1 || $target_page > $max_pages;
		$href = $is_disabled ? '' : $this->build_page_url( $target_page );
		$layout_content_id = (string) ( $context['layout_content_id'] ?? '' );

		return [
			'aria_controls' => $layout_content_id,
			'aria_label' => $aria_label,
			'direction' => $direction,
			'has_context' => true,
			'href' => $href,
			'is_disabled' => $is_disabled,
		];
	}

	private function get_pagination_aria_label( string $direction ): string {
		if ( 'prev' === $direction ) {
			return __( 'Previous page', 'elementor-pro' );
		}

		return __( 'Next page', 'elementor-pro' );
	}
}
