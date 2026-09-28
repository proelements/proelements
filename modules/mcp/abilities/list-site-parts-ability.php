<?php
namespace ElementorPro\Modules\Mcp\Abilities;

use Elementor\Plugin as CorePlugin;
use Elementor\TemplateLibrary\Source_Local;
use ElementorPro\Modules\ThemeBuilder\Documents\Theme_Document;
use ElementorPro\Modules\ThemeBuilder\Module as ThemeBuilderModule;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class List_Site_Parts_Ability extends Abstract_Ability {

	protected function get_ability_id(): string {
		return 'elementor/list-site-parts';
	}

	protected function get_definition(): Ability_Definition {
		return new Ability_Definition(
			__( 'List Site Parts', 'elementor-pro' ),
			__(
				'Lists Theme Builder site parts like header, footer, 404 page and more. Each row includes type, title, assignment, publish state, and whether it is rendered. is_active means the site part is published and matches a Theme Builder location on the front end. has_conditions means display conditions are saved on the document regardless of publish state. post_status is the raw WordPress status (draft, publish, private). A draft row with has_conditions true and is_active false means assignment succeeded but the site part will not render until published. Pass active: true to return only site parts that are currently rendered.',
				'elementor-pro'
			),
			'elementor',
			[ 'type' => 'array' ],
			[
				'annotations' => [
					'readonly' => true,
					'idempotent' => true,
					'destructive' => false,
				],
			],
			fn () => current_user_can( 'edit_posts' ),
			[
				'type' => 'object',
				'properties' => [
					'active' => [
						'type' => 'boolean',
						'description' => 'When true, return only site parts that are currently rendered on the front end (published and matching a Theme Builder location).',
					],
				],
			]
		);
	}

	public function execute( $input = [] ) {
		$input = is_array( $input ) ? $input : [];
		$filter_active = ! empty( $input['active'] );
		$active_ids = $this->collect_active_ids();

		$query = new \WP_Query( [
			'post_type' => Source_Local::CPT,
			'post_status' => [ 'publish', 'draft', 'private' ],
			'posts_per_page' => -1,
			'meta_query' => [
				[
					'key' => Source_Local::TYPE_META_KEY,
					'value' => $this->theme_builder_types(),
					'compare' => 'IN',
				],
			],
			'no_found_rows' => true,
			'fields' => 'ids',
		] );

		$rows = [];
		foreach ( $query->posts as $post_id ) {
			$document = CorePlugin::$instance->documents->get( $post_id );
			if ( ! $document instanceof Theme_Document ) {
				continue;
			}

			$conditions_meta = $document->get_main_meta( '_elementor_conditions' );
			$conditions = is_array( $conditions_meta ) ? $conditions_meta : [];
			$is_active = isset( $active_ids[ $post_id ] );

			if ( $filter_active && ! $is_active ) {
				continue;
			}

			$rows[] = [
				'id' => (int) $post_id,
				'type' => Source_Local::get_template_type( $post_id ),
				'title' => get_the_title( $post_id ),
				'edit_url' => $document->get_edit_url(),
				'post_status' => get_post_status( $post_id ),
				'has_conditions' => ! empty( $conditions ),
				'is_active' => $is_active,
				'conditions' => $conditions,
			];
		}

		return $rows;
	}

	private function collect_active_ids(): array {
		$theme_builder = ThemeBuilderModule::instance();
		$conditions_manager = $theme_builder->get_conditions_manager();
		$active = [];

		foreach ( $theme_builder->get_locations_manager()->get_locations() as $slug => $_settings ) {
			foreach ( $conditions_manager->get_documents_for_location( $slug ) as $doc_id => $_doc ) {
				$active[ $doc_id ] = true;
			}
		}

		return $active;
	}

	private function theme_builder_types(): array {
		return array_keys( ThemeBuilderModule::instance()->get_types_manager()->get_types_config() );
	}
}
