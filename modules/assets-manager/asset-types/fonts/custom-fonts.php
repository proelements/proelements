<?php
namespace ElementorPro\Modules\AssetsManager\AssetTypes\Fonts;

use Elementor\Core\Files\Assets\Files_Upload_Handler;
use Elementor\Core\Files\CSS\Base;
use ElementorPro\Modules\AssetsManager\Classes;
use ElementorPro\Modules\AssetsManager\AssetTypes\Fonts_Manager;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Custom_Fonts extends Classes\Font_Base {

	const FONT_META_KEY = 'elementor_font_files';
	const FONT_FACE_META_KEY = 'elementor_font_face';

	public function get_name() {
		return esc_html__( 'Custom Fonts', 'elementor-pro' );
	}

	public function get_type() {
		return 'custom';
	}

	private function get_file_types() {
		return [
			'woff' => 'font/woff|application/font-woff|application/x-font-woff|application/octet-stream',
			'woff2' => 'font/woff2|application/octet-stream|font/x-woff2',
			'ttf' => 'application/x-font-ttf|application/octet-stream|font/ttf',
			'svg' => 'image/svg+xml|application/octet-stream|image/x-svg+xml',
			'eot' => 'application/vnd.ms-fontobject|application/octet-stream|application/x-vnd.ms-fontobject',
		];
	}

	public function add_meta_box() {
		add_meta_box(
			'elementor-font-' . $this->get_type() . 'metabox',
			__( 'Manage Your Font Files', 'elementor-pro' ),
			[ $this, 'render_metabox' ],
			Fonts_Manager::CPT,
			'normal',
			'default'
		);
	}

	public function render_metabox( $post ) {
		wp_enqueue_media();

		$fields = [
			[
				'id' => 'font_type',
				'field_type' => 'input',
				'input_type' => 'hidden',
			],
			[
				'id' => 'open_div',
				'field_type' => 'html_tag',
				'label' => false,
				'tag' => 'div',
				'attributes' => [
					'class' => 'repeater-content-top',
				],
			],
			[
				'id' => 'font_weight',
				'field_type' => 'select',
				'label' => esc_html__( 'Weight', 'elementor-pro' ) . ':',
				'extra_attributes' => [
					'class' => 'font_weight',
				],
				'options' => $this->get_font_weight_options(),
			],
			[
				'id' => 'font_style',
				'field_type' => 'select',
				'label' => esc_html__( 'Style', 'elementor-pro' ) . ':',
				'extra_attributes' => [
					'class' => 'font_style',
				],
				'options' => $this->get_font_style_options(),
			],
			[
				'id' => 'preview_label',
				'field_type' => 'html',
				'label' => false,
				'raw_html' => sprintf( '<div class="inline-preview">%s</div>', esc_html__( 'Elementor Is Making the Web Beautiful', 'elementor-pro' ) ),
			],
			[
				'id' => 'toolbar',
				'field_type' => 'toolbar',
				'label' => false,
			],
			[
				'id' => 'close_div',
				'field_type' => 'html_tag',
				'label' => false,
				'tag' => 'div',
				'close' => true,
			],
			[
				'id' => 'open_div',
				'field_type' => 'html_tag',
				'label' => false,
				'tag' => 'div',
				'attributes' => [
					'class' => 'repeater-content-bottom',
				],
			],
			[
				'id' => 'variable_description',
				'field_type' => 'html',
				'label' => false,
				'raw_html' => sprintf( '<div class="variable-description">%s %s</div>',
					esc_html__( 'Check the boxes to enable Width and Weight, then define the minimum and maximum values for each.', 'elementor-pro' ),
					'<a href="https://go.elementor.com/wp-dash-variable-fonts-help/" target="_blank">' . esc_html__( 'Learn More', 'elementor-pro' ) . '.</a>'
				),
			],
			[
				'id' => 'open_div',
				'field_type' => 'html_tag',
				'label' => false,
				'tag' => 'div',
				'attributes' => [
					'class' => 'variable-width-wrap',
				],
			],
			[
				'id' => 'variable_width',
				'field_type' => 'input',
				'input_type' => 'checkbox',
				'label' => esc_html__( 'Width', 'elementor-pro' ),
				'value' => 'yes',
			],
			[
				'id' => 'variable_width_min',
				'field_type' => 'input',
				'input_type' => 'number',
				'label' => esc_html__( 'Min Width', 'elementor-pro' ),
			],
			[
				'id' => 'variable_width_max',
				'field_type' => 'input',
				'input_type' => 'number',
				'label' => esc_html__( 'Max Width', 'elementor-pro' ),
			],
			[
				'id' => 'close_div',
				'field_type' => 'html_tag',
				'label' => false,
				'tag' => 'div',
				'close' => true,
			],
			[
				'id' => 'open_div',
				'field_type' => 'html_tag',
				'label' => false,
				'tag' => 'div',
				'attributes' => [
					'class' => 'variable-weight-wrap',
				],
			],
			[
				'id' => 'variable_weight',
				'field_type' => 'input',
				'input_type' => 'checkbox',
				'label' => esc_html__( 'Weight', 'elementor-pro' ),
				'value' => 'yes',
			],
			[
				'id' => 'variable_weight_min',
				'field_type' => 'input',
				'input_type' => 'number',
				'label' => esc_html__( 'Min Weight', 'elementor-pro' ),
			],
			[
				'id' => 'variable_weight_max',
				'field_type' => 'input',
				'input_type' => 'number',
				'label' => esc_html__( 'Max Weight', 'elementor-pro' ),
			],
			[
				'id' => 'close_div',
				'field_type' => 'html_tag',
				'label' => false,
				'tag' => 'div',
				'close' => true,
			],
		];

		foreach ( $this->get_file_types() as $type => $mine ) {
			$fields[] = [
				'id' => $type,
				'field_type' => 'file',
				'mine' => str_replace( '|', ',', $mine ),
				'ext' => $type,
				/* translators: %s: Font file format. */
				'label' => sprintf( esc_html__( '%s File', 'elementor-pro' ), strtoupper( $type ) ),
				/* translators: %s: Font file format. */
				'box_title' => sprintf( esc_html__( 'Upload font .%s file', 'elementor-pro' ), $type ),
				/* translators: %s: Font file format. */
				'box_action' => sprintf( esc_html__( 'Select .%s file', 'elementor-pro' ), $type ),
				'preview_anchor' => 'none',
				'description' => $this->get_file_type_description( $type ),
			];
		}

		$fields[] = [
			'id' => 'close_div',
			'field_type' => 'html_tag',
			'label' => false,
			'tag' => 'div',
			'close' => true,
		];

		$font_data = get_post_meta( $post->ID, self::FONT_META_KEY, true );

		$repeater = [
			'fields' => $fields,
			'id' => 'font_face',
			'label' => false,
			'add_label' => esc_html__( 'Add Static Font', 'elementor-pro' ),
			'toggle_title' => esc_html__( 'Edit', 'elementor-pro' ),
			'remove_title' => esc_html__( 'Delete', 'elementor-pro' ),
			'field_type' => 'repeater',
			'row_label' => [
				'default' => 'Settings',
				'selector' => '.font_weight',
			],
			'saved' => $font_data,
		];

		$add_variable_font_button = [
			'id' => 'add-variable-font',
			'field_type' => 'input',
			'input_type' => 'button',
			'value' => esc_html__( 'Add Variable Font', 'elementor-pro' ),
			'class' => 'button button-secondary',
		];

		$this->print_metabox( [ $repeater, $add_variable_font_button ] );

		// PHPCS - Dedicated for CSS.
		printf( '<style>%s</style>', get_post_meta( $post->ID, self::FONT_FACE_META_KEY, true ) ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}

	public function save_meta( $post_id, $data ) {
		if ( ! isset( $data['font_face'] ) || ! is_array( $data['font_face'] ) ) {
			return;
		}

		// Sanitize a little
		$font_face = [];
		foreach ( $data['font_face'] as $font_data ) {
			$font_face[] = $this->sanitize_text_field_recursive( $font_data );
		}

		// All good save the files array
		update_post_meta( $post_id, self::FONT_META_KEY, $font_face );

		// Save font face
		update_post_meta( $post_id, self::FONT_FACE_META_KEY, $this->generate_font_face( $post_id ) );
	}

	public function upload_mimes( $mine_types ) {
		if ( current_user_can( Fonts_Manager::CAPABILITY ) && $this->is_elementor_font_upload() ) {
			foreach ( $this->get_file_types() as $type => $mine ) {
				if ( ! isset( $mine_types[ $type ] ) ) {
					$mine_types[ $type ] = $mine;
				}
			}
		}

		return $mine_types;
	}

	public function wp_handle_upload_prefilter( $file ) {
		if ( ! $this->is_elementor_font_upload() ) {
			return $file;
		}

		$ext = pathinfo( $file['name'], PATHINFO_EXTENSION );

		if ( 'svg' !== $ext ) {
			return $file;
		}

		/**
		 * @var \Elementor\Core\Files\Assets\Svg\Svg_Handler $svg_handler;
		 */
		$svg_handler = Plugin::elementor()->assets_manager->get_asset( 'svg-handler' );

		if ( Files_Upload_Handler::file_sanitizer_can_run() && ! $svg_handler->sanitize_svg( $file['tmp_name'] ) ) {
			$file['error'] = esc_html__( 'Invalid SVG Format, file not uploaded for security reasons', 'elementor-pro' );
		}

		return $file;
	}

	private function is_elementor_font_upload() {
		return isset( $_POST['uploadTypeCaller'] ) && 'elementor-admin-font-upload' === $_POST['uploadTypeCaller']; // phpcs:ignore
	}

	/**
	 * A workaround for upload validation which relies on a PHP extension (fileinfo) with inconsistent reporting behaviour.
	 * ref: https://core.trac.wordpress.org/ticket/39550
	 * ref: https://core.trac.wordpress.org/ticket/40175
	 */
	public function filter_fix_wp_check_filetype_and_ext( $data, $file, $filename, $mimes ) {
		if ( ! empty( $data['ext'] ) && ! empty( $data['type'] ) ) {
			return $data;
		}

		$registered_file_types = $this->get_file_types();
		$filetype = wp_check_filetype( $filename, $mimes );

		if ( ! isset( $registered_file_types[ $filetype['ext'] ] ) ) {
			return $data;
		}
		// Fix incorrect file mime type
		$filetype['type'] = explode( '|', $filetype['type'] )[0];

		return [
			'ext' => $filetype['ext'],
			'type' => $filetype['type'],
			'proper_filename' => $data['proper_filename'],
		];
	}

	public function generate_font_face( $post_id ) {
		$saved = get_post_meta( $post_id, self::FONT_META_KEY, true );
		if ( ! is_array( $saved ) ) {
			return false;
		}

		$font_family = get_the_title( $post_id );
		$font_face = '';

		foreach ( $saved as $font_data ) {
			$font_face .= $this->get_font_face_from_data( $font_family, $font_data ) . PHP_EOL;
		}

		return $font_face;
	}

	private function get_font_variables( $post_id ) {
		$saved = get_post_meta( $post_id, self::FONT_META_KEY, true );
		if ( ! is_array( $saved ) ) {
			return false;
		}

		$variables = [];

		foreach ( $saved as $font_data ) {
			if ( ! empty( $font_data['variable_weight'] ) ) {
				$variables[] = 'weight';
			}

			if ( ! empty( $font_data['variable_width'] ) ) {
				$variables[] = 'width';
			}

			break;
		}

		return $variables;
	}

	private function get_font_variable_ranges( $post_id ) {
		$saved = get_post_meta( $post_id, self::FONT_META_KEY, true );
		if ( ! is_array( $saved ) ) {
			return false;
		}

		$variable_ranges = [];

		foreach ( $saved as $font_data ) {
			if ( ! empty( $font_data['variable_weight'] ) ) {
				$variable_ranges['weight'] = [
					'min' => 1,
					'max' => 1000,
				];

				if ( ! empty( $font_data['variable_weight_min'] ) ) {
					$variable_ranges['weight']['min'] = (int) $font_data['variable_weight_min'];
				}

				if ( ! empty( $font_data['variable_weight_max'] ) ) {
					$variable_ranges['weight']['max'] = (int) $font_data['variable_weight_max'];
				}
			}

			if ( ! empty( $font_data['variable_width'] ) ) {
				$variable_ranges['width'] = [
					'min' => 0,
					'max' => 150,
				];

				if ( ! empty( $font_data['variable_width_min'] ) ) {
					$variable_ranges['width']['min'] = (int) $font_data['variable_width_min'];
				}

				if ( ! empty( $font_data['variable_width_max'] ) ) {
					$variable_ranges['width']['max'] = (int) $font_data['variable_width_max'];
				}
			}

			break;
		}

		return $variable_ranges;
	}

	private function is_font_variable( $post_id ): bool {
		$saved = get_post_meta( $post_id, self::FONT_META_KEY, true );
		if ( ! is_array( $saved ) ) {
			return false;
		}

		foreach ( $saved as $font_data ) {
			return ! empty( $font_data['font_type'] ) && 'variable' === $font_data['font_type'];
		}

		return false;
	}

	public function get_font_face_from_data( $font_family, $data ) {
		$src = [];
		foreach ( [ 'eot', 'woff2', 'woff', 'ttf', 'svg' ] as $type ) {
			if ( ! isset( $data[ $type ] ) || ! isset( $data[ $type ]['url'] ) || empty( $data[ $type ]['url'] ) ) {
				continue;
			}

			if ( 'svg' === $type ) {
				$data[ $type ]['url'] .= '#' . str_replace( ' ', '', $font_family );
			}

			$src[] = $this->get_font_src_per_type( $type, $data[ $type ]['url'] );
		}

		$font_face = '@font-face {' . PHP_EOL;
		$font_face .= "\tfont-family: '" . $font_family . "';" . PHP_EOL;

		if ( empty( $data['font_type'] ) || 'variable' !== $data['font_type'] ) {
			$font_face .= "\tfont-style: " . $data['font_style'] . ';' . PHP_EOL;
			$font_face .= "\tfont-weight: " . $data['font_weight'] . ';' . PHP_EOL;
		}

		$font_face .= "\tfont-display: " . apply_filters( 'elementor_pro/custom_fonts/font_display', 'auto', $font_family, $data ) . ';' . PHP_EOL;

		if ( isset( $data['eot'] ) && isset( $data['eot']['url'] ) && ! empty( $data['eot']['url'] ) ) {
			$font_face .= "\tsrc: url('" . esc_attr( $data['eot']['url'] ) . "');" . PHP_EOL;
		}

		$font_face .= "\tsrc: " . implode( ',' . PHP_EOL . "\t\t", $src ) . ';' . PHP_EOL . '}';

		return $font_face;
	}

	private function get_font_src_per_type( $type, $url ) {
		$src = 'url(\'' . esc_attr( $url ) . '\') ';
		switch ( $type ) {
			case 'woff':
			case 'woff2':
			case 'svg':
				$src .= 'format(\'' . $type . '\')';
				break;

			case 'ttf':
				$src .= 'format(\'truetype\')';
				break;

			case 'eot':
				$src = 'url(\'' . esc_attr( $url ) . '?#iefix\') format(\'embedded-opentype\')';
				break;
		}

		return $src;
	}

	public function get_fonts( $force = false ) {
		$fonts = get_option( self::FONTS_OPTION_NAME, false );
		if ( $fonts && ! $force ) {
			return $fonts;
		}

		$fonts = new \WP_Query( [
			'post_type' => Fonts_Manager::CPT,
			'posts_per_page' => -1,
		] );

		$new_fonts = [];
		foreach ( $fonts->posts as $font ) {
			$new_fonts[ $font->post_title ] = 'custom';
		}

		update_option( self::FONTS_OPTION_NAME, $new_fonts );

		return $new_fonts;
	}

	private function get_font_face_by_font_family( $font_family ) {
		global $wpdb;

		$id = $wpdb->get_var( $wpdb->prepare( "SELECT ID FROM $wpdb->posts WHERE post_title = %s AND post_type = %s LIMIT 1", $font_family, Fonts_Manager::CPT ) );

		if ( $id ) {
			return get_post_meta( $id, self::FONT_FACE_META_KEY, true );
		}

		return '';
	}

	public function render_preview_column( $post_id ) {
		$font_face = get_post_meta( $post_id, self::FONT_FACE_META_KEY, true );

		if ( ! $font_face ) {
			return;
		}

		// PHPCS - the variable $font_face is CSS. the property $this->font_preview_phrase is safe.
		printf( '<style>%s</style><span style="font-family: \'%s\';">%s</span>', $font_face, esc_html( get_the_title( $post_id ) ), $this->font_preview_phrase ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}

	public function render_type_column( $post_id ) {
		echo $this->is_font_variable( $post_id ) ? esc_html__( 'Variable', 'elementor-pro' ) : esc_html__( 'Static', 'elementor-pro' );
	}

	public function get_font_family_type( $post_id, $post_title ) {
		$type = $this->get_type();

		if ( $this->is_font_variable( $post_id ) ) {
			$type = 'variable';
		}

		return [
			$post_title => $type,
		];
	}

	public function get_font_data( $post_id, $post_title ) {
		$font_data = [
			'font_face' => $this->generate_font_face( $post_id ),
			'post_id' => $post_id,
		];

		$variables = $this->get_font_variables( $post_id );
		if ( ! empty( $variables ) ) {
			$font_data['variables'] = $variables;
		}

		$variable_ranges = $this->get_font_variable_ranges( $post_id );
		if ( ! empty( $variable_ranges ) ) {
			$font_data['variable_ranges'] = $variable_ranges;
		}

		return [
			$post_title => $font_data,
		];
	}

	public function get_font_variations_count( $post_id ) {
		$data = get_post_meta( $post_id, self::FONT_META_KEY, true );
		if ( ! empty( $data ) && count( $data ) > 0 ) {
			echo sprintf( '<span class="font-variations-count">%d</span>', count( $data ) );
		}
	}

	/**
	 * @param string $font_family
	 * @param array  $font_data
	 * @param Base   $post_css
	 */
	public function enqueue_font( $font_family, $font_data, $post_css ) {
		$font_faces = isset( $font_data['font_face'] ) ? $font_data['font_face'] : $this->get_font_face_by_font_family( $font_family );
		// Add a css comment
		$custom_css = '/* Start Custom Fonts CSS */' . $font_faces . '/* End Custom Fonts CSS */';
		$post_css->get_stylesheet()->add_raw_css( $custom_css );
	}

	/**
	 * @param array $data
	 *
	 * @return array
	 * @throws \Exception
	 */
	public function handle_panel_request( array $data ) {
		$font_family = sanitize_text_field( $data['font'] );

		$font_face = $this->get_font_face_by_font_family( $font_family );

		if ( empty( $font_face ) ) {
			/* translators: %s: Font family. */
			$error_message = sprintf( esc_html__( 'Font %s was not found.', 'elementor-pro' ), $font_family );

			throw new \Exception( $error_message );
		}

		return [
			'font_face' => $font_face,
		];
	}

	private function get_font_style_options() {
		return [
			'normal' => esc_html__( 'Normal', 'elementor-pro' ),
			'italic' => esc_html__( 'Italic', 'elementor-pro' ),
			'oblique' => esc_html__( 'Oblique', 'elementor-pro' ),
		];
	}

	private function get_font_weight_options() {
		return [
			'normal' => esc_html__( 'Normal', 'elementor-pro' ),
			'bold' => esc_html__( 'Bold', 'elementor-pro' ),
			'100' => '100',
			'200' => '200',
			'300' => '300',
			'400' => '400',
			'500' => '500',
			'600' => '600',
			'700' => '700',
			'800' => '800',
			'900' => '900',
		];
	}

	private function get_file_type_description( $file_type ) {
		$descriptions = [
			'eot' => esc_html__( 'Embedded OpenType, Used by IE6-IE9 Browsers', 'elementor-pro' ),
			'woff2' => esc_html__( 'The Web Open Font Format 2, Used by Super Modern Browsers', 'elementor-pro' ),
			'woff' => esc_html__( 'The Web Open Font Format, Used by Modern Browsers', 'elementor-pro' ),
			'ttf' => esc_html__( 'TrueType Fonts, Used for better supporting Safari, Android, iOS', 'elementor-pro' ),
			'svg' => esc_html__( 'SVG fonts allow SVG to be used as glyphs when displaying text, Used by Legacy iOS', 'elementor-pro' ),
		];

		return isset( $descriptions[ $file_type ] ) ? $descriptions[ $file_type ] : '';
	}

	private function replace_urls( $rows_affected, $from, $to ) {
		global $wpdb;

		$rows_affected = $wpdb->query(
			"UPDATE {$wpdb->postmeta} " .
			$wpdb->prepare( 'SET `meta_value` = REPLACE(`meta_value`, %s, %s) ', $from, $to ) .
			'WHERE `meta_key` = \'' . self::FONT_FACE_META_KEY . '\''
		);

		return $rows_affected;
	}

	protected function actions() {
		parent::actions();

		add_filter( 'elementor/tools/replace-urls', function( $rows_affected, $from, $to ) {
			return $this->replace_urls( $rows_affected, $from, $to );
		}, 10, 3 );
		add_filter( 'wp_check_filetype_and_ext', [ $this, 'filter_fix_wp_check_filetype_and_ext' ], 10, 4 );
		add_filter( 'wp_handle_upload_prefilter', [ $this, 'wp_handle_upload_prefilter' ] );
		add_filter( 'upload_mimes', [ $this, 'upload_mimes' ] );
		add_action( 'add_meta_boxes_' . Fonts_Manager::CPT, [ $this, 'add_meta_box' ] );
	}
}
