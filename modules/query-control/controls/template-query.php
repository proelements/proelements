<?php
namespace ElementorPro\Modules\QueryControl\Controls;

use Elementor\Control_Select2;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Template_Query extends Control_Select2 {

	const CONTROL_ID = 'template_query';

	/**
	 * @return string
	 */
	public function get_type() {
		return static::CONTROL_ID;
	}

	public function content_template() {
		parent::content_template();
		?>
			<div class="elementor-template-query-control-actions">
				<# if ( data.actions.new.visible ) { #>
					<button
						type="button"
						class="elementor-button elementor-button-default"
						data-action="new"
					>
						{{ data.actions.new.label }}
					</button>
				<# } #>
				<# if ( data.actions.edit.visible ) { #>
					<button
						type="button"
						class="elementor-button elementor-button-default"
						data-action="edit"
					>
						{{ data.actions.edit.label }}
					</button>
				<# } #>
			</div>
		<?php
	}

	/**
	 * @return array
	 */
	protected function get_default_settings() {
		return array_replace_recursive(
			parent::get_default_settings(),
			[
				'query' => '',
				'actions' => [
					'new' => [
						'visible' => false,
						'label' => __( 'Create template', 'elementor-pro' ),
						'document_config' => [
							'type' => null,
						],
					],
					'edit' => [
						'visible' => false,
						'label' => __( 'Edit template', 'elementor-pro' ),
					],
				],
			]
		);
	}
}
