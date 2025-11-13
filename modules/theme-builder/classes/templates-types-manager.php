<?php
namespace ElementorPro\Modules\ThemeBuilder\Classes;

use ElementorPro\Modules\ThemeBuilder\Documents;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Templates_Types_Manager {
	private $docs_types = [];

	public function __construct() {
		add_action( 'elementor/documents/register', [ $this, 'register_documents' ] );
	}

	public function get_types_config( $args = [] ) {
		$config = [];

		$document_types = Plugin::elementor()->documents->get_document_types( $args );

		foreach ( $document_types as $type => $document_type ) {
			$properties = $document_type::get_properties();

			if ( ( new $document_type() ) instanceof Documents\Theme_Document ) {
				$config[ $type ] = $properties;
			}
		}

		return $config;
	}

	public function register_documents() {
		$this->docs_types = [
			'section' => Documents\Section::get_class_full_name(),
			'header' => Documents\Header::get_class_full_name(),
			'footer' => Documents\Footer::get_class_full_name(),
			'single' => Documents\Single::get_class_full_name(),
			'single-post' => Documents\Single_Post::get_class_full_name(),
			'single-page' => Documents\Single_Page::get_class_full_name(),
			'archive' => Documents\Archive::get_class_full_name(),
			'search-results' => Documents\Search_Results::get_class_full_name(),
			'error-404' => Documents\Error_404::get_class_full_name(),
		];

		foreach ( $this->docs_types as $type => $class_name ) {
			Plugin::elementor()->documents->register_document_type( $type, $class_name );
		}
	}
}
