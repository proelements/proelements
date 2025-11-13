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
						class="elementor-button"
						data-action="new"
						data-after-action="{{ data.actions.new.after_action }}"
					>
						{{ data.actions.new.label }}
					</button>
				<# } #>
				<# if ( data.actions.edit.visible ) { #>
					<button
						type="button"
						class="elementor-button"
						data-action="edit"
						data-after-action="{{ data.actions.edit.after_action }}"
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
						'after_action' => 'switch_document',
					],
					'edit' => [
						'visible' => false,
						'label' => __( 'Edit template', 'elementor-pro' ),
						'after_action' => 'switch_document',
					],
				],
			]
		);
	}
}
