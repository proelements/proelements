<?php
namespace ElementorPro\Modules\DynamicTags\Tags;

use Elementor\Controls_Manager;
use ElementorPro\Modules\DynamicTags\Tags\Base\Tag;
use ElementorPro\Core\Utils;
use ElementorPro\Modules\DynamicTags\Module;
use ElementorPro\Modules\LoopBuilder\Providers\Taxonomy_Loop_Provider;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Archive_Title extends Tag {
	public function get_name() {
		return 'archive-title';
	}

	public function get_title() {
		return esc_html__( 'Archive Title', 'elementor-pro' );
	}

	public function get_group() {
		return Module::ARCHIVE_GROUP;
	}

	public function get_categories() {
		return [ Module::TEXT_CATEGORY ];
	}

	public function get_editor_config() {
		$config = parent::get_editor_config();

		$config['display_conditions'] = [
			'archive_title' => [
				'label' => esc_html__( 'Title', 'elementor-pro' ),
				'settings' => [ 'include_context' => 'no' ],
				'group' => 'archive',
			],
		];

		return $config;
	}

	public function render() {
		if ( Taxonomy_Loop_Provider::is_loop_taxonomy() ) {
			$this->render_loop_taxonomy();
			return;
		}

		$this->render_post();
	}

	private function render_post() {
		$include_context = 'yes' === $this->get_settings( 'include_context' );

		$title = Utils::get_page_title( $include_context );

		echo wp_kses_post( $title );
	}

	private function render_loop_taxonomy() {
		$this->render_taxonomy_content_by_key( 'name' );
	}

	protected function register_controls() {
		$this->add_control(
			'include_context',
			[
				'label' => esc_html__( 'Include Context', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'default' => 'yes',
			]
		);
	}
}
