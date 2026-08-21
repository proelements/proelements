<?php
namespace ElementorPro\Modules\AtomicForm\File_Upload;

use Elementor\Modules\AtomicWidgets\Controls\Section;
use Elementor\Modules\AtomicWidgets\Controls\Types\Attachment_Type_Control;
use Elementor\Modules\AtomicWidgets\Controls\Types\Number_Control;
use Elementor\Modules\AtomicWidgets\Controls\Types\Switch_Control;
use Elementor\Modules\AtomicWidgets\Controls\Types\Text_Control;
use Elementor\Modules\AtomicWidgets\Elements\Base\Atomic_Widget_Base;
use Elementor\Modules\AtomicWidgets\Elements\Base\Has_Template;
use Elementor\Modules\AtomicWidgets\PropTypes\Attributes_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Classes_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\Boolean_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\Number_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Primitives\String_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropDependencies\Manager as Dependency_Manager;
use Elementor\Modules\AtomicWidgets\Styles\Style_Definition;
use Elementor\Modules\AtomicWidgets\Styles\Style_Variant;
use Elementor\Modules\AtomicWidgets\PropTypes\Size_Prop_Type;
use Elementor\Modules\AtomicWidgets\PropTypes\Color_Prop_Type;
use Elementor\Modules\AtomicWidgets\Styles\Style_States;
use Elementor\Modules\Components\PropTypes\Overridable_Prop_Type;
use ElementorPro\Modules\AtomicForm\Default_Id_Provider;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class File_Upload extends Atomic_Widget_Base {
	use Has_Template;

	public const DEFAULT_MAX_FILE_SIZE_MB = 5;
	public const DEFAULT_FILE_TYPES = 'jpg, png, pdf, zip';

	public static $widget_description = 'Display a file upload input with configurable allowed types, size limit, multiple-file support, and required flag.';

	public static function get_element_type(): string {
		return 'e-form-file-upload';
	}

	public function get_title(): string {
		return esc_html__( 'File Upload', 'elementor-pro' );
	}

	public function get_icon(): string {
		return 'eicon-atomic-file-upload';
	}

	public function get_categories(): array {
		return [ 'atomic-form' ];
	}

	public function get_keywords() {
		return [ 'atomic', 'form', 'file', 'upload' ];
	}

	protected static function define_props_schema(): array {
		$max_files_dependencies = Dependency_Manager::make()
			->where( [
				'operator' => 'eq',
				'path' => [ 'multiple' ],
				'value' => true,
				'effect' => 'hide',
			] )
			->get();

		return [
			'classes' => Classes_Prop_Type::make()
				->default( [] ),
			'attachment-type' => String_Prop_Type::make()
				->default( 'link' )
				->enum( [ 'link', 'attach', 'both' ] ),
			'max-file-size' => Number_Prop_Type::make()
				->default( self::DEFAULT_MAX_FILE_SIZE_MB )
				->meta( 'suffix', 'MB' ),
			'file-types' => String_Prop_Type::make()
				->default( self::DEFAULT_FILE_TYPES ),
			'multiple' => Boolean_Prop_Type::make()
				->default( false ),
			'max-files' => Number_Prop_Type::make()
				->default( 1 )
				->set_dependencies( $max_files_dependencies ),
			'required' => Boolean_Prop_Type::make()
				->default( false ),
			'attributes' => Attributes_Prop_Type::make()->meta( Overridable_Prop_Type::ignore() ),
			'_cssid' => Default_Id_Provider::get_default_id_prop( self::get_element_type() ),
		];
	}

	protected function define_atomic_controls(): array {
		return [
			Section::make()
				->set_label( __( 'Content', 'elementor-pro' ) )
				->set_id( 'content' )
				->set_items( [
					Attachment_Type_Control::bind_to( 'attachment-type' )
						->set_label( __( 'Send file', 'elementor-pro' ) )
						->set_options( [
							[
								'label' => __( 'Email with link', 'elementor-pro' ),
								'value' => 'link',
							],
							[
								'label' => __( 'Email with attachment', 'elementor-pro' ),
								'value' => 'attach',
							],
							[
								'label' => __( 'Email with both', 'elementor-pro' ),
								'value' => 'both',
							],
						] ),
					Number_Control::bind_to( 'max-file-size' )
						->set_label( __( 'Max file size', 'elementor-pro' ) )
						->set_min( 1 ),
					Text_Control::bind_to( 'file-types' )
						->set_label( __( 'Allowed file types', 'elementor-pro' ) )
						->set_placeholder( 'pdf, docx, doc, jpeg, jpg…' ),
					Switch_Control::bind_to( 'multiple' )
						->set_label( __( 'Multiple files', 'elementor-pro' ) ),
					Number_Control::bind_to( 'max-files' )
						->set_label( __( 'Max files', 'elementor-pro' ) )
						->set_placeholder( 'specify number' )
						->set_min( 1 ),
					Switch_Control::bind_to( 'required' )
						->set_label( __( 'Required', 'elementor-pro' ) ),
				] ),
			Section::make()
				->set_label( __( 'Settings', 'elementor-pro' ) )
				->set_id( 'settings' )
				->set_items( $this->get_settings_controls() ),
		];
	}

	protected function get_settings_controls(): array {
		return [
			Text_Control::bind_to( '_cssid' )
				->set_label( __( 'ID', 'elementor-pro' ) )
				->set_meta( $this->get_css_id_control_meta() ),
		];
	}

	protected function get_templates(): array {
		return [
			'file_upload' => __DIR__ . '/file-upload.html.twig',
		];
	}

	protected function define_base_styles(): array {
		$border_radius_value = Size_Prop_Type::generate( [
			'size' => 0,
			'unit' => 'px',
		] );

		$height_value = Size_Prop_Type::generate( [
			'size' => 36,
			'unit' => 'px',
		] );

		$border_color_value = Color_Prop_Type::generate( '#D6D5D5' );

		return [
			'base' => Style_Definition::make()
				->add_variant(
					Style_Variant::make()
						->add_props( [
							'border-radius' => $border_radius_value,
							'height' => $height_value,
							'border-color' => $border_color_value,
							'font-size' => Size_Prop_Type::generate( [
								'size' => 12,
								'unit' => 'px',
							] ),
							'color' => Color_Prop_Type::generate( '#0c0d0e' ),
						] ),
				)
				->add_variant(
					Style_Variant::make()
						->set_state( Style_States::FOCUS )
						->add_props( [
							'border-color' => Color_Prop_Type::generate( '#706F6F' ),
							'outline-style' => String_Prop_Type::generate( 'none' ),
						] ),
				),
		];
	}

	protected function get_css_id_control_meta(): array {
		return [
			'layout' => 'two-columns',
			'topDivider' => false,
		];
	}
}
