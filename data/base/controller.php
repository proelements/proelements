<?php
namespace ElementorPro\Data\Base;

use Elementor\Data\Base\Controller as Controller_Base;

abstract class Controller extends Controller_Base {

	public function __construct() {
		parent::__construct();

		$this->namespace = 'elementor-pro/v1';
	}
}
