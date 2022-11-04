<?php
namespace ElementorPro\Modules\GlobalWidget\Documents;

use Elementor\Core\Base\Document;
use Elementor\Modules\Library\Documents\Library_Document;
use Elementor\User;
use ElementorPro\Core\Behaviors\Feature_Lock;
use ElementorPro\Modules\GlobalWidget\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Widget extends Library_Document {

	public static function get_properties() {
		$properties = parent::get_properties();

		$properties['admin_tab_group'] = 'library';
		$properties['show_in_library'] = false;
		$properties['is_editable'] = false;

		// Since, created in the editor environment.
		$properties['show_in_finder'] = false;

		return $properties;
	}

	public function get_name() {
		return 'widget';
	}

	public static function get_title() {
		return esc_html__( 'Global Widget', 'elementor-pro' );
	}

	public static function get_plural_title() {
		return esc_html__( 'Global Widgets', 'elementor-pro' );
	}

	public static function get_lock_behavior_v2() {
		return new Feature_Lock( [
			'type' => static::get_type(),
		] );
	}

	public function is_editable_by_current_user() {
		return User::is_current_user_can_edit( $this->get_main_id() );
	}

	public function import( array $data ) {
		parent::import( $data );

		$this->update_main_meta( Module::WIDGET_TYPE_META_KEY, $data['content'][0]['widgetType'] );
	}

	public function save( $data ) {
		// Since the method of 'modules/usage::before_document_save' will remove from global if new_status is the same as old.
		$data['settings'] = [ 'post_status' => Document::STATUS_PUBLISH ];

		return parent::save( $data );
	}
}
