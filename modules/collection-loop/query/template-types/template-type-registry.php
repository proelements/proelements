<?php

namespace ElementorPro\Modules\CollectionLoop\Query\TemplateTypes;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Template_Type_Registry {

	const REGISTER_ACTION = 'elementor_pro/collection_loop/register_template_types';

	private static ?self $instance = null;

	private array $template_types = [];

	private string $default_id = '';

	private function __construct() {
		$this->register( new Post_Template_Type(), true );
	}

	public static function instance(): self {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	public static function reset(): void {
		self::$instance = null;
	}

	public function register( Template_Type_Base $template_type, bool $is_default = false ): void {
		$id = $template_type->get_id();

		$this->template_types[ $id ] = $template_type;

		if ( $is_default || '' === $this->default_id ) {
			$this->default_id = $id;
		}
	}

	public function get( string $id ): ?Template_Type_Base {
		return $this->template_types[ $id ] ?? null;
	}

	/**
	 * @return Template_Type_Base[]
	 */
	public function all(): array {
		return $this->template_types;
	}

	/**
	 * @return string[]
	 */
	public function get_ids(): array {
		return array_keys( $this->template_types );
	}

	/**
	 * @return string[] Ids of registered template types whose data source doesn't paginate.
	 */
	public function get_ids_without_pagination(): array {
		return array_keys( array_filter(
			$this->template_types,
			static fn( Template_Type_Base $type ) => ! $type->supports_pagination()
		) );
	}

	public function get_default_id(): string {
		return $this->default_id;
	}

	public function get_default(): ?Template_Type_Base {
		return $this->get( $this->get_default_id() );
	}
}
