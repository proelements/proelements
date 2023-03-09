<?php
namespace ElementorPro\Modules\ThemeBuilder\Classes;

use Elementor\Control_Media;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Control_Media_Preview extends Control_Media {

	const CONTROL_TYPE = 'media-preview';

	public function get_type() {
		return self::CONTROL_TYPE;
	}

	public function content_template() {
		?>
		<div class="elementor-control-field elementor-control-media">
			<label class="elementor-control-title">{{{ data.label }}}</label>
			<div class="elementor-control-input-wrapper elementor-aspect-ratio-219">
				<div class="elementor-control-media-area">
					<div class="elementor-control-media__preview elementor-fit-aspect-ratio" style="background-image: url('{{ data.src }}');"></div>
				</div>
			</div>
			<# if ( data.description ) { #>
			<div class="elementor-control-field-description">{{{ data.description }}}</div>
			<# } #>
			<input type="hidden" data-setting="{{ data.name }}"/>
		</div>
		<?php
	}


}
