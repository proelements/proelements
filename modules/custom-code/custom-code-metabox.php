<?php
namespace ElementorPro\Modules\CustomCode;

use Elementor\Utils;
use ElementorPro\Modules\AssetsManager\Classes\Assets_Base;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Custom_Code_Metabox extends Assets_Base {
	const FIELD_LOCATION = 'location';
	const FIELD_PRIORITY = 'priority';
	const FIELD_CODE = 'code';

	const OPTION_LOCATION_HEAD = 'elementor_head';
	const OPTION_LOCATION_BODY_START = 'elementor_body_start';
	const OPTION_LOCATION_BODY_END = 'elementor_body_end';

	const OPTION_PRIORITY_LENGTH = 10;

	const INPUT_FIELDS = [
		self::FIELD_LOCATION,
		self::FIELD_PRIORITY,
		self::FIELD_CODE,
	];

	public function get_name() {
		return Module::MODULE_NAME;
	}

	public function get_type() {
		return Module::CPT;
	}

	public function get_field_label( $field ) {
		$label = parent::get_field_label( $field );

		if ( ! empty( $field['info'] ) ) {
			$label = '<p class="elementor-field-label"><i data-info="' . $field['info'] . '" class="eicon-info-circle"></i>' . $label . '</p>';
		}

		return $label;
	}

	public function get_location_labels() {
		return [
			self::OPTION_LOCATION_HEAD => __( 'Head', 'elementor-pro' ),
			self::OPTION_LOCATION_BODY_START => __( 'Body Start', 'elementor-pro' ),
			self::OPTION_LOCATION_BODY_END => __( 'Body End', 'elementor-pro' ),
		];
	}

	public function get_location_options() {
		return [
			self::OPTION_LOCATION_HEAD => __( '<head>', 'elementor-pro' ),
			self::OPTION_LOCATION_BODY_START => __( '<body> - Start', 'elementor-pro' ),
			self::OPTION_LOCATION_BODY_END => __( '<body> - End', 'elementor-pro' ),
		];
	}

	public function get_priority_options() {
		$start = 1;
		$result = range( $start, self::OPTION_PRIORITY_LENGTH );

		$result = array_combine( $result, $result );

		return $result;
	}

	/**
	 * Add script integrity.
	 *
	 * This is method is public, since its has to remove its own filter.
	 *
	 * @param string $html
	 * @param mixed $handle
	 *
	 * @return string
	 */
	public function add_script_integrity( $html, $handle ) {
		if ( 'jshint' === $handle ) {
			$html = str_replace( '></script>', ' integrity="sha512-qcoitUjhkmNyPmbIOlUV/zd8MJvrVcKrNqnveMWS3C6MYOl5+HLwliRKUm/Ae/dfIok6+E54hjgVrAeS+sBAGA==" crossorigin="anonymous"></script>', $html );

			remove_filter( 'script_loader_tag', [ $this, 'add_script_integrity' ] );
		}

		return $html;
	}

	protected function actions() {
		add_action( 'add_meta_boxes_' . Module::CPT, function () {
			$this->add_meta_boxes();
		} );

		add_action( 'save_post_' . Module::CPT, function( $post_id, $post, $update ) {
			return $this->save_post_meta( $post_id, $post );
		}, 10, 3 );

		add_action('post_submitbox_misc_actions', function ( $post ) {
			$this->add_meta_publish_options( $post );
		} );
	}

	private function get_fields() {
		return [
			[
				'id' => 'open-div-meta-box',
				'field_type' => 'html_tag',
				'label' => false,
				'tag' => 'div',
				'attributes' => [
					'class' => 'elementor-custom-code-meta-box',
				],
			],
			[
				'id' => 'open-div-panel',
				'field_type' => 'html_tag',
				'label' => false,
				'tag' => 'div',
				'attributes' => [
					'class' => 'elementor-custom-code-panel',
				],
			],
			[
				'id' => 'open-div-placement',
				'field_type' => 'html_tag',
				'label' => false,
				'tag' => 'div',
				'attributes' => [
					'class' => 'elementor-custom-code-panel-placement',
				],
			],
			[
				'id' => self::FIELD_LOCATION,
				'field_type' => 'select',
				'label' => __( 'Location', 'elementor-pro' ) . ':',
				'options' => $this->get_location_options(),
				'info' => __( 'Define where the Custom Code will appear', 'elementor-pro' ),
			],
			[
				'id' => self::FIELD_PRIORITY,
				'field_type' => 'select',
				'label' => __( 'Priority', 'elementor-pro' ) . ':',
				'options' => $this->get_priority_options(),
				'info' => __( 'Define in which order the Custom Code will appear', 'elementor-pro' ),
			],
			[
				'id' => 'close-div-placement',
				'field_type' => 'html_tag',
				'label' => false,
				'tag' => 'div',
				'close' => true,
			],
			[
				'id' => 'close-div-panel',
				'field_type' => 'html_tag',
				'label' => false,
				'tag' => 'div',
				'close' => true,
			],
			[
				'id' => 'close-div-meta-box',
				'field_type' => 'html_tag',
				'label' => false,
				'tag' => 'div',
				'close' => true,
			],
			[
				'id' => 'open-div-code-mirror-holder',
				'field_type' => 'html_tag',
				'label' => false,
				'tag' => 'div',
				'attributes' => [
					'class' => 'elementor-custom-code-codemirror-holder',
				],
			],
			[
				'id' => 'open-div-code-mirror',
				'field_type' => 'html_tag',
				'label' => false,
				'tag' => 'div',
				'attributes' => [
					'class' => 'elementor-custom-code-codemirror',
				],
			],
			[
				'id' => self::FIELD_CODE,
				'field_type' => 'textarea',
				'label' => '',
				'extra_attributes' => [
					'class' => 'hidden',
				],
			],
			[
				'id' => 'close-div-code-mirror',
				'field_type' => 'html_tag',
				'label' => false,
				'tag' => 'div',
				'close' => true,
			],
			[
				'id' => 'close-div-code-mirror-holder',
				'field_type' => 'html_tag',
				'label' => false,
				'tag' => 'div',
				'close' => true,
			],
		];
	}

	private function get_code_editor_settings() {
		// TODO: Handle `enqueue_code_editor_scripts` to work with `lint => 'true'`.
		return [
			'type' => 'text/html',
			'codemirror' => [
				'indentUnit' => 2,
				'tabSize' => 2,
				'gutters' => [ 'CodeMirror-lint-markers' ],
			],
		];
	}

	private function enqueue_code_editor_scripts( $field_code_id ) {
		// Add integrity attribute to jshint.
		add_filter( 'script_loader_tag', [ $this, 'add_script_integrity' ], 10, 2 );

		wp_enqueue_script( 'htmlhint' );
		wp_enqueue_script( 'csslint' );

		wp_deregister_script( 'jshint' );

		wp_enqueue_script( 'jshint',
			'https://cdnjs.cloudflare.com/ajax/libs/jshint/2.12.0/jshint.min.js',
			[],
			'2.12.0'
		);

		/**
		 * Some of the plugins may load 'code-editor' for their needs and change the default behavior, so it should
		 * re-initialize the code editor with 'custom code' settings.
		 */
		if ( wp_script_is( 'code-editor' ) ) {
			wp_add_inline_script( 'custom-code-metabox', sprintf( 'wp.codeEditor.initialize( jQuery( "#%s"), %s );', $field_code_id, wp_json_encode( wp_get_code_editor_settings( $this->get_code_editor_settings() ) ) ) );
		} else {
			wp_enqueue_code_editor( $this->get_code_editor_settings() );

			wp_add_inline_script( 'code-editor', sprintf( 'wp.codeEditor.initialize( jQuery( "#%s") );', $field_code_id ) );
		}
	}

	private function render_meta_box() {
		$fields = $this->get_fields();

		if ( ! empty( $_REQUEST['action'] ) && 'edit' == $_REQUEST['action'] ) {
			$post = get_post( $_REQUEST['post'] );

			foreach ( self::INPUT_FIELDS as $input_field ) {
				$field_meta = get_post_meta( $post->ID, "_elementor_$input_field", true );

				if ( ! empty( $field_meta ) ) {
					$key = array_search( $input_field, array_column( $fields, 'id' ) );
					if ( false !== $key ) {
						$fields[ $key ]['saved'] = $field_meta;
					}
				}
			}
		}

		// The method, support fields only.
		$this->print_metabox( $fields );

		// Render before enqueue, since enqueue depends on render handlers.
		do_action( 'elementor-pro/metabox/render', $this, get_the_ID() );

		// Init codemirror.
		$this->enqueue_code_editor_scripts( self::FIELD_CODE );
	}

	private function save_post_meta( $post_id, $post ) {
		if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
			return $post_id;
		}

		// Check the user's permissions.
		if ( ! current_user_can( 'edit_post', $post_id ) ) {
			return $post_id;
		}

		if ( get_post_status( $post->ID ) === 'auto-draft' ) {
			return $post_id;
		}

		foreach ( self::INPUT_FIELDS as $field ) {
			if ( isset( $_POST[ $field ] ) && ! Utils::is_empty( $_POST[ $field ] ) ) {
				if ( self::FIELD_CODE === $field ) {
					$post_meta = $_POST[ $field ];
				} else {
					$post_meta = sanitize_text_field( $_POST[ $field ] );
				}

				if ( ! current_user_can( 'unfiltered_html' ) ) {
					$post_meta = wp_kses_post( $post_meta );
				}
				update_post_meta( $post->ID, "_elementor_$field", $post_meta );
			}
		}

		// Temporary workaround for applying conditions for draft custom code post.
		if ( ! empty( $_POST['_conditions'] ) ) {
			$conditions = (array) json_decode( wp_unslash( $_POST['_conditions'] ) );

			foreach ( $conditions as $key => $item ) {
				$conditions[ $key ] = array_values( (array) $item );
			}

			/** @var \ElementorPro\Modules\ThemeBuilder\Module $theme_builder */
			$theme_builder = Plugin::instance()->modules_manager->get_modules( 'theme-builder' );

			$theme_builder->get_conditions_manager()->save_conditions( $post_id, $conditions );
		}
	}

	private function add_meta_boxes() {
		add_meta_box(
			'elementor-custom-code',
			__( 'Custom code', 'elementor-pro' ),
			function() {
				$this->render_meta_box();
			},
			module::CPT,
			'normal',
			'default'
		);
	}

	private function add_meta_publish_options( $post ) {
		if ( Module::CPT === $post->post_type ) {
			?>
			<div class="misc-pub-section misc-pub-post-conditions">
				<i class="dashicons dashicons-networking" aria-hidden="true"></i>
				<?php echo __( 'Conditions:', 'elementor-pro' ); ?>
				<span class="post-conditions"></span>
			</div>
			<?php
		}
	}
}
