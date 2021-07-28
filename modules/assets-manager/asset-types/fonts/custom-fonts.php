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
		return __( 'Custom Fonts', 'elementor-pro' );
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
				'label' => __( 'Weight', 'elementor-pro' ) . ':',
				'extra_attributes' => [
					'class' => 'font_weight',
				],
				'options' => $this->get_font_weight_options(),
			],
			[
				'id' => 'font_style',
				'field_type' => 'select',
				'label' => __( 'Style', 'elementor-pro' ) . ':',
				'extra_attributes' => [
					'class' => 'font_style',
				],
				'options' => $this->get_font_style_options(),
			],
			[
				'id' => 'preview_label',
				'field_type' => 'html',
				'label' => false,
				'raw_html' => sprintf( '<div class="inline-preview">%s</div>', __( 'Elementor Is Making the Web Beautiful!!!', 'elementor-pro' ) ),
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
		];

		foreach ( $this->get_file_types() as $type => $mine ) {
			$fields[] = [
				'id' => $type,
				'field_type' => 'file',
				'mine' => str_replace( '|', ',', $mine ),
				'ext' => $type,
				/* translators: %s: Font file format. */
				'label' => sprintf( __( '%s File', 'elementor-pro' ), strtoupper( $type ) ),
				/* translators: %s: Font file format. */
				'box_title' => sprintf( __( 'Upload font .%s file', 'elementor-pro' ), $type ),
				/* translators: %s: Font file format. */
				'box_action' => sprintf( __( 'Select .%s file', 'elementor-pro' ), $type ),
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
			'add_label' => __( 'Add Font Variation', 'elementor-pro' ),
			'toggle_title' => __( 'Edit', 'elementor-pro' ),
			'remove_title' => __( 'Delete', 'elementor-pro' ),
			'field_type' => 'repeater',
			'row_label' => [
				'default' => 'Settings',
				'selector' => '.font_weight',
			],
			'saved' => $font_data,
		];

		$this->print_metabox( [ $repeater ] );

		printf( '<style>%s</style>', get_post_meta( $post->ID, self::FONT_FACE_META_KEY, true ) );
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
			$file['error'] = __( 'Invalid SVG Format, file not uploaded for security reasons', 'elementor-pro' );
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
		$font_face .= "\tfont-style: " . $data['font_style'] . ';' . PHP_EOL;
		$font_face .= "\tfont-weight: " . $data['font_weight'] . ';' . PHP_EOL;
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

		add_filter( 'posts_fields', [ $this, 'posts_fields' ] );
		$fonts = new \WP_Query( [
			'post_type' => Fonts_Manager::CPT,
			'posts_per_page' => -1,
		] );
		remove_filter( 'posts_fields', [ $this, 'posts_fields' ] );

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

		printf( '<style>%s</style><span style="font-family: \'%s\';">%s</span>', $font_face, esc_html( get_the_title( $post_id ) ), $this->font_preview_phrase );
	}

	public function get_font_family_type( $post_id, $post_title ) {
		return [
			$post_title => $this->get_type(),
		];
	}

	public function get_font_data( $post_id, $post_title ) {
		return [
			$post_title => [
				'font_face' => $this->generate_font_face( $post_id ),
				'post_id' => $post_id,
			],
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
			$error_message = sprintf( __( 'Font %s was not found.', 'elementor-pro' ), $font_family );

			throw new \Exception( $error_message );
		}

		return [
			'font_face' => $font_face,
		];
	}

	private function get_font_style_options() {
		return [
			'normal' => __( 'Normal', 'elementor-pro' ),
			'italic' => __( 'Italic', 'elementor-pro' ),
			'oblique' => __( 'Oblique', 'elementor-pro' ),
		];
	}

	private function get_font_weight_options() {
		return [
			'normal' => __( 'Normal', 'elementor-pro' ),
			'bold' => __( 'Bold', 'elementor-pro' ),
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
			'eot' => __( 'Embedded OpenType, Used by IE6-IE9 Browsers', 'elementor-pro' ),
			'woff2' => __( 'The Web Open Font Format 2, Used by Super Modern Browsers', 'elementor-pro' ),
			'woff' => __( 'The Web Open Font Format, Used by Modern Browsers', 'elementor-pro' ),
			'ttf' => __( 'TrueType Fonts, Used for better supporting Safari, Android, iOS', 'elementor-pro' ),
			'svg' => __( 'SVG fonts allow SVG to be used as glyphs when displaying text, Used by Legacy iOS', 'elementor-pro' ),
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
