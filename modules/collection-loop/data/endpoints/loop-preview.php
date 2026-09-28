<?php
namespace ElementorPro\Modules\CollectionLoop\Data\Endpoints;

use Elementor\Element_Base;
use Elementor\Plugin;
use ElementorPro\Core\Data\Endpoints\Base;
use ElementorPro\Core\Data\Interfaces\Endpoint;
use ElementorPro\Modules\CollectionLoop\Query\Loop_Query_Args_Builder;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Loop_Preview extends Base implements Endpoint {
	public function get_name(): string {
		return 'loop-preview';
	}

	public function get_route(): string {
		return 'collection-loop/loop-preview';
	}

	public function get_preview( \WP_REST_Request $request ): array {
		$query_settings = $request->get_param( 'query' );

		if ( ! is_array( $query_settings ) ) {
			$query_settings = [];
		}

		$query_id = Loop_Query_Args_Builder::extract_query_id( $query_settings );
		$items = [];

		$document_id = (int) $request->get_param( 'document_id' );
		$element_id = (string) $request->get_param( 'element_id' );
		$force_empty = rest_sanitize_boolean( $request->get_param( 'force_empty' ) );
		$document = $document_id > 0 ? Plugin::$instance->documents->get_doc_or_auto_save( $document_id ) : null;
		$element = $this->resolve_element_from_document( $document, $element_id );

		try {
			if ( $document ) {
				Plugin::$instance->db->switch_to_query( [
					'p' => $document_id,
					'post_type' => 'any',
				], true );

				Plugin::$instance->documents->switch_to_document( $document );

				do_action( 'elementor/atomic_widgets/before_render', $document );
			}

			$item_provider = Loop_Query_Args_Builder::item_provider_from_resolved( $query_settings, $element );

			$items = $force_empty ? [] : $item_provider->items();
		} finally {
			if ( $document ) {
				do_action( 'elementor/atomic_widgets/after_render', $document );

				Plugin::$instance->db->restore_current_query();

				Plugin::$instance->documents->restore_document();
			}
		}

		return [
			'data' => [
				'query_id' => $query_id,
				'has_items' => ! empty( $items ),
				'items' => $items,
			],
		];
	}

	private function resolve_element_from_document( $document, string $element_id ): ?Element_Base {
		if ( ! $document || '' === $element_id ) {
			return null;
		}

		$element_data = null;

		Plugin::$instance->db->iterate_data( $document->get_elements_data(), function ( $data ) use ( $element_id, &$element_data ) {
			if ( null === $element_data && isset( $data['id'] ) && $data['id'] === $element_id ) {
				$element_data = $data;
			}

			return $data;
		} );

		if ( ! is_array( $element_data ) ) {
			return null;
		}

		return Plugin::$instance->elements_manager->create_element_instance( $element_data );
	}

	protected function register() {
		register_rest_route( $this->controller->get_namespace(), $this->get_route(), [
			[
				'args' => [
					'query' => [
						'description' => 'Resolved collection loop query settings.',
						'type' => 'object',
						'required' => true,
					],
					'document_id' => [
						'description' => 'ID of the document the loop element belongs to. Required to pass the element instance to element-scoped query hooks.',
						'type' => 'integer',
						'required' => false,
					],
					'element_id' => [
						'description' => 'ID of the collection-loop element. Required to pass the element instance to element-scoped query hooks.',
						'type' => 'string',
						'required' => false,
					],
					'force_empty' => [
						'description' => 'When true, return an empty preview payload so the editor can design the empty state.',
						'type' => 'boolean',
						'required' => false,
						'default' => false,
					],
				],
				'methods' => \WP_REST_Server::CREATABLE,
				'callback' => [ $this, 'get_preview' ],
				'permission_callback' => fn () => current_user_can( 'edit_posts' ),
			],
		] );
	}
}
