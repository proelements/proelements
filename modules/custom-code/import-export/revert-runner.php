<?php

namespace ElementorPro\Modules\CustomCode\ImportExport;

use Elementor\App\Modules\ImportExport\Runners\Revert\Revert_Runner_Base;
use ElementorPro\Modules\CustomCode\Module as Custom_Code_Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Revert_Runner extends Revert_Runner_Base {

	public static function get_name(): string {
		return 'custom-code';
	}

	public function should_revert( array $data ): bool {
		return (
			isset( $data['runners'] ) &&
			array_key_exists( static::get_name(), $data['runners'] )
		);
	}

	public function revert( array $data ) {
		$metadata = $data['runners'][ static::get_name() ] ?? [];

		$this->revert_imported_snippets( $metadata );
	}

	private function revert_imported_snippets( $metadata ) {
		$imported_snippets = $metadata['imported_snippets'] ?? [];

		foreach ( $imported_snippets as $snippet ) {
			wp_delete_post( $snippet['id'], true );
		}
	}
}
