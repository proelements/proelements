<?php
namespace ElementorPro\Modules\AtomicForm\Classes;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Composite_Shortcode_Resolver implements Shortcode_Resolver {
	/**
	 * @var Shortcode_Resolver[]
	 */
	private array $resolvers;

	public function __construct( array $form_data, bool $is_html, array $field_metadata, array $cssid_map ) {
		$this->resolvers = [
			new All_Fields_Shortcode_Resolver( $form_data, $is_html, $field_metadata ),
			new Field_Id_Shortcode_Resolver( $form_data, false, $cssid_map, $is_html ),
			new Cssid_Shortcode_Resolver( $form_data, $is_html, $cssid_map ),
		];
	}

	public function resolve( string $message ): string {
		foreach ( $this->resolvers as $resolver ) {
			$message = $resolver->resolve( $message );
		}

		return $message;
	}
}
