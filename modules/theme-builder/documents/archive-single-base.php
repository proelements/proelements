<?php
namespace ElementorPro\Modules\ThemeBuilder\Documents;

use ElementorPro\Modules\ThemeBuilder\Module as ThemeBuilderModule;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

abstract class Archive_Single_Base extends Theme_Page_Document {

	/**
	 * Document sub type meta key.
	 */
	const REMOTE_CATEGORY_META_KEY = '_elementor_template_sub_type';

	public static function get_sub_type() {
		return '';
	}

	protected static function get_create_url() {
		$create_url = parent::get_create_url();

		$sub_type = static::get_sub_type();

		if ( $sub_type ) {
			$create_url = add_query_arg( static::REMOTE_CATEGORY_META_KEY, static::get_sub_type(), $create_url );
		}

		return $create_url;
	}

	/**
	 * @access public
	 */
	public function save_template_type() {
		parent::save_template_type();

		$this->save_sub_type_condition();
	}

	private function save_sub_type_condition() {
		$conditions_manager = ThemeBuilderModule::instance()->get_conditions_manager();

		if ( ! empty( $_REQUEST[ self::REMOTE_CATEGORY_META_KEY ] ) ) {
			$sub_type = $_REQUEST[ self::REMOTE_CATEGORY_META_KEY ];

			if ( $conditions_manager->get_condition( $sub_type ) ) {
				$this->update_meta( self::REMOTE_CATEGORY_META_KEY, $sub_type );

				$conditions_manager->save_conditions( $this->post->ID, [
					[
						'include',
						$this->get_property( 'condition_type' ),
						$sub_type,
					],
				] );
			}
		}
	}
}
