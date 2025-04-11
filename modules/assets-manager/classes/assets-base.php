<?php
namespace ElementorPro\Modules\AssetsManager\Classes;

use Elementor\Utils;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

abstract class Assets_Base {

	abstract public function get_name();

	abstract public function get_type();

	protected function actions() { }

	public function print_metabox( $fields ) {
		?>
		<div class="elementor-metabox-content">
			<?php
			foreach ( $fields as $field ) :
				$field['saved'] = isset( $field['saved'] ) ? $field['saved'] : '';
				// PHPCS - admin fields
				echo $this->get_metabox_field_html( $field, $field['saved'] ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			endforeach;
			?>
		</div>
		<?php
	}

	public function get_metabox_field_html( $field, $saved ) {
		$html = '';

		switch ( $field['field_type'] ) {
			case 'html':
				$html = $this->get_html_field( $field );

				return $html;
				break;

			case 'html_tag':
				$html = $this->get_html_tag( $field );

				return $html;
				break;

			case 'toolbar':
				$html = $this->get_repeater_tools( $field );
				break;

			case 'input':
				$html = $this->get_input_field( $field, $saved );
				break;

			case 'select':
				$html = $this->get_select_field( $field, $saved );
				break;

			case 'textarea':
				$html = $this->get_textarea_field( $field, $saved );
				break;

			case 'file':
				$html = $this->get_file_field( $field, $saved );
				break;

			case 'repeater':
				$html = $this->get_repeater_field( $field, $saved );
				break;

			case 'dropzone':
				$html = $this->get_dropzone_field( $field, $saved );
				break;

			case 'checkbox':
				$html = $this->get_checkbox_field( $field, $saved );
				break;

			default:
				$method = 'get_' . $field['field_type'] . 'field';
				if ( method_exists( $this, $method ) ) {
					$html = call_user_func( [ $this, $method ], $field, $saved );
				}
				break;
		}

		return $this->get_field_row( $field, $html );
	}

	public function get_field_label( $field ) {
		if ( ! isset( $field['label'] ) || false === $field['label'] ) {
			return '';
		}
		$id = $field['id'];
		if ( 'file' === $field['field_type'] ) {
			$id .= $field['field_type'];
		}

		return '<label class="elementor-field-label" for="' . esc_attr( $id ) . '">' . $field['label'] . '</label>';
	}

	public function get_input_field( $attributes, $saved = '' ) {
		if ( isset( $attributes['input_type'] ) ) {
			$attributes['type'] = $attributes['input_type'];
			unset( $attributes['input_type'], $attributes['field_type'] );
		}

		if ( 'checkbox' === $attributes['type'] && ! empty( $saved ) ) {
			$attributes['checked'] = 'checked';
		} else {
			if ( empty( $attributes['value'] ) && ! empty( $saved ) ) {
				$attributes['value'] = $saved;
			}
		}

		if ( empty( $attributes['name'] ) ) {
			$attributes['name'] = $attributes['id'];
		}

		$input = '<input ' . $this->get_attribute_string( $attributes ) . '>';

		return $input;
	}

	public function get_attribute_string( $attributes, $field = [] ) {
		if ( isset( $field['extra_attributes'] ) && is_array( $field['extra_attributes'] ) ) {
			$attributes = array_merge( $attributes, $field['extra_attributes'] );
		}
		$attributes_array = [];
		foreach ( $attributes as $name => $value ) {
			$attributes_array[] = sprintf( '%s="%s"', $name, esc_attr( $value ) );
		}

		return implode( ' ', $attributes_array );
	}

	public function get_select_field( $field, $selected = '' ) {
		$input = '<select ';
		$input .= $this->get_attribute_string( [
			'name' => $field['id'],
			'id' => $field['id'],
		], $field );

		$input .= '>' . "\n";
		foreach ( $field['options'] as $value => $label ) {
			$input .= '<option value="' . $value . '" ' . selected( $selected, $value, false ) . '>' . esc_attr( $label ) . '</option>' . PHP_EOL;
		}

		return $input . '</select>';
	}

	public function get_textarea_field( $field, $html ) {
		$input = '<textarea ';
		$input .= $this->get_attribute_string( [
			'name' => $field['id'],
			'id' => $field['id'],
		], $field );

		$input .= '>' . esc_textarea( $html ) . '</textarea>';

		return $input;
	}

	public function get_file_field( $field, $saved ) {
		$value = [
			'id' => '',
			'url' => '',
		];

		if ( isset( $saved['id'] ) && isset( $saved['url'] ) ) {
			$value = $saved;
		}

		$html = '<ul></ul>';
		$html .= $this->get_input_field(
			[
				'type' => 'hidden',
				'name' => $field['id'] . '[id]',
				'value' => $value['id'],
			]
		);

		$html .= $this->get_input_field(
			[
				'type' => 'text',
				'name' => $field['id'] . '[url]',
				'value' => $value['url'],
				'placeholder' => $field['description'],
				'class' => 'elementor-field-input',
			]
		);

		$html .= $this->get_input_field(
			[
				'type' => 'button',
				'class' => 'button elementor-upload-btn',
				'name' => $field['id'],
				'id' => $field['id'],
				'value' => '',
				'data-preview_anchor' => isset( $field['preview_anchor'] ) ? $field['preview_anchor'] : 'none',
				'data-mime_type' => isset( $field['mine'] ) ? $field['mine'] : '',
				'data-ext' => isset( $field['ext'] ) ? $field['ext'] : '',
				'data-upload_text' => esc_html__( 'Upload', 'elementor-pro' ),
				'data-remove_text' => esc_html__( 'Delete', 'elementor-pro' ),
				'data-box_title' => isset( $field['box_title'] ) ? $field['box_title'] : '',
				'data-box_action' => isset( $field['box_action'] ) ? $field['box_action'] : '',
			]
		);

		return $html;
	}

	public function get_html_field( $field ) {
		return $field['raw_html'];
	}

	public function get_dropzone_field( $field ) {
		ob_start();
		$input_attributes = [
			'type' => 'file',
			'name' => $field['id'],
			'id' => $field['id'],
			'accept' => $field['accept'],
			'class' => 'box__file',
		];
		if ( ! empty( $field['multiple'] ) ) {
			$input_attributes['multiple'] = true;
		}
		$input_html = $this->get_input_field( $input_attributes );
		$field['label'] = '<h4><span class="box__dragndrop">' . esc_html__( 'Drag & Drop to Upload', 'elementor-pro' ) . '</span></h4>';
		if ( ! empty( $field['sub-label'] ) ) {
			$field['label'] .= '<h5>' . $field['sub-label'] . '</h5>';
		}
		?>
		<div class="elementor-dropzone-field">
			<div class="box__input">
				<div class="elementor--dropzone--upload__icon">
					<i class="eicon-library-upload"></i>
				</div>
				<?php echo $input_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
				<?php echo $this->get_field_label( $field ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
				<div class="elementor-button elementor--dropzone--upload__browse">
					<span><?php echo esc_html__( 'Click here to browse', 'elementor-pro' ); ?></span>
				</div>
			</div>
			<div class="box__uploading"><?php echo esc_html__( 'Uploading&hellip;', 'elementor-pro' ); ?></div>
			<div class="box__success"><?php echo esc_html__( 'Done!', 'elementor-pro' ); ?></div>
			<div class="box__error"><?php echo esc_html__( 'Error!', 'elementor-pro' ); ?> <span></span>.</div>
		</div>
		<?php
		return ob_get_clean();
	}

	public function get_repeater_field( $field, $saved ) {
		$id = $field['id'];
		$js_id = 'repeater_' . Utils::generate_random_string();
		$add_label = isset( $field['add_label'] ) ? $field['add_label'] : esc_html__( 'Add item', 'elementor-pro' );
		$row_label = isset( $field['row_label'] ) ? $field['row_label'] : esc_html__( 'Row', 'elementor-pro' );
		$row_label_html_args = [
			'id' => 'row_label_' . $js_id,
			'class' => 'repeater-title hidden',
		];

		if ( is_array( $row_label ) ) {
			$label = $row_label['default'];
			$row_label_html_args['data-default'] = $row_label['default'];
			$row_label_html_args['data-selector'] = $row_label['selector'];
		} else {
			$label = $row_label;
			$row_label_html_args['data-default'] = $row_label;
		}

		$row_label_html = '<span ' . $this->get_attribute_string( $row_label_html_args ) . '>' . $label . '</span>';
		ob_start();
		?>
		<script type="text/template" id="<?php echo esc_attr( $js_id . '_block' ); ?>">
			<div class="repeater-block block-visible">
				<?php
				echo $row_label_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				echo $this->get_repeater_tools( $field ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				?>
				<div class="repeater-content form-table">
					<?php
					foreach ( $field['fields'] as $sub_field ) {
						$sub_field['real_id'] = $sub_field['id'];
						$sub_field['id'] = $id . '[__counter__][' . $sub_field['id'] . ']';
						echo $this->get_metabox_field_html( $sub_field, '' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
					}
					?>
				</div>
			</div>
		</script>
		<?php
		$counter = 0;
		$row_label_html_args['class'] = 'repeater-title';

		$row_label_html = '<span ' . $this->get_attribute_string( $row_label_html_args ) . '>' . $label . '</span>';
		if ( is_array( $saved ) && count( $saved ) > 0 ) {
			foreach ( (array) $saved as $key => $item ) {
				echo '<div class="repeater-block">';
				echo $row_label_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				echo $this->get_repeater_tools( $field ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				echo '<div class="repeater-content hidden form-table">';
				foreach ( $field['fields'] as $sub_field ) {
					$default = isset( $sub_field['default'] ) ? $sub_field['default'] : '';
					$item_meta = isset( $item[ $sub_field['id'] ] ) ? $item[ $sub_field['id'] ] : $default;
					$sub_field['real_id'] = $sub_field['id'];
					$sub_field['id'] = $id . '[' . $counter . '][' . $sub_field['id'] . ']';
					echo $this->get_metabox_field_html( $sub_field, $item_meta ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
				}
				echo '</div>'; // end table
				echo '</div>';
				$counter++;
			}
		}
		echo '<input type="button" class="button button-primary add-repeater-row" value="' . esc_attr( $add_label ) . '" data-template-id="' . esc_html( $js_id ) . '_block">';

		return ob_get_clean();
	}

	public function get_checkbox_field( $field, $saved ) {
		Utils::print_unescaped_internal_string( $this->get_field_row( $field, '' ) );

		$html = '<div id="' . esc_attr( $field['id'] ) . '" class="elementor-field-checkboxes">';

		foreach ( $field['options'] as $checkbox_key => $label ) {
			$name = $field['id'] . '_' . $checkbox_key;

			$checked = ! empty( $saved ) && in_array( $checkbox_key, $saved, true ) ? 'checked' : '';

			$html .= '<input name="' . esc_attr( $name ) . '" type="checkbox" ' . esc_attr( $checked ) . '><span class="label">' . esc_html( $label ) . '</span></input>';
		}

		$html .= '</div>';

		return $html;
	}

	private function get_html_tag( $field ) {
		$tag = isset( $field['tag'] ) ? $field['tag'] : 'div';
		if ( isset( $field['close'] ) && true === $field['close'] ) {
			return '</' . $tag . '>';
		}

		return '<' . $tag . ' ' . $this->get_attribute_string( $field['attributes'] ) . '>';
	}

	private function get_repeater_tools( $field ) {
		$confirm = isset( $field['confirm'] ) ? $field['confirm'] : esc_html__( 'Are you sure?', 'elementor-pro' );
		$remove_title = isset( $field['remove_title'] ) ? $field['remove_title'] : esc_html__( 'Delete', 'elementor-pro' );
		$toggle_title = isset( $field['toggle_title'] ) ? $field['toggle_title'] : esc_html__( 'Edit', 'elementor-pro' );
		$close_title = isset( $field['close_title'] ) ? $field['close_title'] : esc_html__( 'Close', 'elementor-pro' );

		return '<span class="elementor-repeater-tool-btn close-repeater-row" title="' . esc_attr( $close_title ) . '">
                    <i class="eicon-close" aria-hidden="true"></i>' . $close_title . '
                </span>
                <span class="elementor-repeater-tool-btn toggle-repeater-row" title="' . esc_attr( $toggle_title ) . '">
                    <i class="eicon-edit" aria-hidden="true"></i>' . $toggle_title . '
                </span>
                <span class="elementor-repeater-tool-btn remove-repeater-row" data-confirm="' . $confirm . '" title="' . esc_attr( $remove_title ) . '">
                    <i class="eicon-trash" aria-hidden="true"></i>' . $remove_title . '
                </span>';
	}

	public function get_field_row( $field, $field_html ) {
		$description = '';
		$css_id = isset( $field['id'] ) ? ' ' . $field['id'] : '';

		if ( isset( $field['real_id'] ) ) {
			$css_id = ' ' . $field['real_id'];
		}

		$css_id .= ' elementor-field-' . $field['field_type'];

		return '<div class="elementor-field' . $css_id . '">' . $this->get_field_label( $field ) . $field_html . $description . '</div>';
	}

	public function sanitize_text_field_recursive( $data ) {
		if ( is_array( $data ) ) {
			foreach ( $data as $key => $value ) {
				$data[ $key ] = $this->sanitize_text_field_recursive( $value );
			}

			return $data;
		}

		return sanitize_text_field( $data );
	}

	public function __construct() {
		$this->actions();
	}
}
