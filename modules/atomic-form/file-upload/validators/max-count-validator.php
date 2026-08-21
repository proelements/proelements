<?php
namespace ElementorPro\Modules\AtomicForm\File_Upload\Validators;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Max_Count_Validator implements Validator {

	private int $max;

	public function __construct( int $max ) {
		$this->max = $max;
	}

	public function validate( array $files ): ?string {
		if ( $this->max <= 0 || count( $files ) <= $this->max ) {
			return null;
		}

		return sprintf(
			/* translators: %d: Maximum number of allowed files. */
			_n( 'You can upload only %d file.', 'You can upload only %d files.', $this->max, 'elementor-pro' ),
			$this->max
		);
	}
}
