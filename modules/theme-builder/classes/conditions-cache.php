<?php
namespace ElementorPro\Modules\ThemeBuilder\Classes;

use Elementor\TemplateLibrary\Source_Local;
use ElementorPro\Modules\ThemeBuilder\Documents\Theme_Document;
use ElementorPro\Modules\ThemeBuilder\Module;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Conditions_Cache {

	const OPTION_NAME = 'elementor_pro_theme_builder_conditions';

	protected $conditions = [];

	public function __construct() {
		$this->refresh();
	}

	/**
	 * @param Theme_Document $document
	 * @param array          $conditions
	 *
	 * @return $this
	 */
	public function add( Theme_Document $document, array $conditions ) {
		$location = $document->get_location();
		if ( $location ) {
			if ( ! isset( $this->conditions[ $location ] ) ) {
				$this->conditions[ $location ] = [];
			}
			$this->conditions[ $location ][ $document->get_main_id() ] = $conditions;
		}

		return $this;
	}

	/**
	 * @param int $post_id
	 *
	 * @return $this
	 */
	public function remove( $post_id ) {
		$post_id = absint( $post_id );

		foreach ( $this->conditions as $location => $templates ) {
			foreach ( $templates as $id => $template ) {
				if ( $post_id === $id ) {
					unset( $this->conditions[ $location ][ $id ] );
				}
			}
		}

		return $this;
	}

	/**
	 * @param Theme_Document $document
	 * @param array          $conditions
	 *
	 * @return $this
	 */
	public function update( $document, $conditions ) {
		return $this->remove( $document->get_main_id() )->add( $document, $conditions );
	}

	public function save() {
		return update_option( self::OPTION_NAME, $this->conditions );
	}

	public function refresh() {
		$this->conditions = get_option( self::OPTION_NAME, [] );

		return $this;
	}

	public function clear() {
		$this->conditions = [];

		return $this;
	}

	public function get_by_location( $location ) {
		if ( isset( $this->conditions[ $location ] ) ) {
			return $this->conditions[ $location ];
		}

		return [];
	}

	public function regenerate() {
		$this->clear();

		$document_types = Plugin::elementor()->documents->get_document_types();

		$post_types = [
			Source_Local::CPT,
		];

		foreach ( $document_types as $document_type ) {
			if ( $document_type::get_property( 'support_conditions' ) && $document_type::get_property( 'cpt' ) ) {
				$post_types = array_merge( $post_types, $document_type::get_property( 'cpt' ) );
			}
		}

		$query = new \WP_Query( [
			'posts_per_page' => -1,
			'post_type' => $post_types,
			'fields' => 'ids',
			'meta_key' => '_elementor_conditions',
		] );

		foreach ( $query->posts as $post_id ) {
			$document = Module::instance()->get_document( $post_id );

			if ( $document ) {
				$conditions = $document->get_meta( '_elementor_conditions' );
				$this->add( $document, $conditions );
			}
		}

		$this->save();

		return $this;
	}
}
