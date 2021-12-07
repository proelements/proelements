<?php
namespace ElementorPro\Modules\VideoPlaylist;

use ElementorPro\Base\Module_Base;
use Elementor\Core\Experiments\Manager;
use ElementorPro\Plugin;


if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Module extends Module_Base {
	public function get_name() {
		return 'video-playlist';
	}

	public function get_widgets() {
		return [
			'Video_Playlist',
		];
	}
}
