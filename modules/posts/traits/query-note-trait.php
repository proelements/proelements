<?php
namespace ElementorPro\Modules\Posts\Traits;

use ElementorPro\Modules\Posts\Widgets\Posts_Base;
use ElementorPro\Plugin;
use ElementorPro\Core\Utils;
use Elementor\Controls_Manager;
use Elementor\Core\Base\Document;

trait Query_Note_Trait {
	public function is_editing_archive_template() {
		if ( Plugin::elementor()->documents->get_current() ) {
			$id = Utils::get_current_post_id();
		} else {
			$id = get_the_ID();
		}

		return 'archive' === get_post_meta( $id, Document::TYPE_META_KEY, true );
	}

	public function inject_archive_query_note( $placement_id, $condition_id, $widget ) {
		$archive_setting_url = admin_url( 'options-reading.php' );

		$widget->start_injection( [
			'of' => $placement_id,
			'at' => 'before',
		] );

		$widget->add_control(
			'archive_query_note',
			[
				'type' => Controls_Manager::RAW_HTML,
				'raw' => sprintf(
					esc_html__( 'The amount of items displayed in your Archive is set in your WordPress settings. %s', 'elementor-pro' ),
					'<a target="_blank" href="' . esc_url( $archive_setting_url ) . '">' . esc_html__( 'Take me there', 'elementor-pro' ) . '</a>'
				),
				'content_classes' => 'elementor-descriptor',
				'condition' => [
					$condition_id => 'current_query',
				],
			]
		);

		$widget->end_injection();
	}
}
