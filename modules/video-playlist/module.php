<?php
namespace ElementorPro\Modules\VideoPlaylist;

use ElementorPro\Base\Module_Base;
use Elementor\Core\Experiments\Manager;
use ElementorPro\Plugin;


if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Module extends Module_Base {
	/**
	 * Module constructor.
	 */
	public function __construct() {
		$experiments_manager = Plugin::elementor()->experiments;

		$experiments_manager->add_feature( [
			'name' => $this->get_name(),
			'title' => __( 'Video Playlist', 'elementor-pro' ),
			'description' => __( 'Adds a video playlist widget that allow showing a list of videos.', 'elementor-pro' ),
			'release_status' => Manager::RELEASE_STATUS_BETA,
			'default' => Manager::STATE_ACTIVE,
		] );

		if ( ! $experiments_manager->is_feature_active( $this->get_name() ) ) {
			return;
		}

		parent::__construct();
	}

	public function get_name() {
		return 'video-playlist';
	}

	public function get_widgets() {
		return [
			'Video_Playlist',
		];
	}
}
