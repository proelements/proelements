<?php
namespace ElementorPro\Modules\AtomicForm;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

trait Has_Default_Field_Id {
	public function __construct( $data = [], $args = null ) {
		parent::__construct( Default_Id_Provider::with_field_id( $data, static::get_element_type() ), $args );
	}
}
