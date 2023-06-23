<?php
namespace ElementorPro\Modules\LoopBuilder\Files\Css;

use ElementorPro\Modules\ThemeBuilder\Files\CSS\Template;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Loop extends Template {

	use Loop_Css_Trait;

	/**
	 * Elementor Loop CSS file prefix.
	 */
	const FILE_PREFIX = 'loop-';

	/**
	 * Get CSS file name.
	 *
	 * Retrieve the CSS file name.
	 *
	 * @access public
	 *
	 * @return string CSS file name.
	 */
	public function get_name() {
		return 'loop';
	}

	/**
	 * Get file handle ID.
	 *
	 * Retrieve the handle ID for the post CSS file.
	 *
	 * @since 1.2.0
	 * @access protected
	 *
	 * @return string CSS file handle ID.
	 */
	protected function get_file_handle_id() {
		return static::FILE_PREFIX . $this->post_id;
	}

	/**
	 * Loop CSS file constructor.
	 *
	 * Initializing the CSS file of the loop widget. Set the post ID and initiate the stylesheet.
	 *
	 * @since 1.2.0
	 * @access public
	 *
	 * @param int $post_id Post ID.
	 */
	public function __construct( $loop_template_id ) {
		$this->post_id = $loop_template_id;

		parent::__construct( $loop_template_id );
	}
}
