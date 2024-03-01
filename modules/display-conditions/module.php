<?php
namespace ElementorPro\Modules\DisplayConditions;

use Elementor\Controls_Manager;
use Elementor\Utils;
use ElementorPro\Base\Module_Base;
use ElementorPro\License\API;
use ElementorPro\Plugin;
use Elementor\Core\Experiments\Manager;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {

	private $hidden_elements_ids = array();
	const LICENSE_FEATURE_NAME = 'display-conditions';

	public function __construct() {
		parent::__construct();

		if ( self::can_use_display_conditions() ) {
			$this->maybe_add_actions_and_components();
		} else {
			$this->add_common_actions();
		}
	}

	public static function is_experiment_active(): bool {
		return Plugin::elementor()::$instance->experiments->is_feature_active( self::LICENSE_FEATURE_NAME );
	}

	public static function should_show_promo(): bool {
		return ! self::can_use_display_conditions();
	}

	private function add_actions() {
		$this->add_render_actions();

		add_action( 'elementor/ajax/register_actions', [ $this, 'register_ajax_actions' ] );
	}

	private function add_components() {
		$this->add_component( 'conditions', new Classes\Conditions_Manager( $this ) );
		$this->add_component( 'cache_notice', new Classes\Cache_Notice() );
	}

	private function add_common_actions() {
		$this->add_advanced_tab_actions();

		add_action( 'elementor/editor/before_enqueue_scripts', function() {
			$this->enqueue_main_script();
		} );
	}

	private function enqueue_main_script() {
		$min_suffix = Utils::is_script_debug() ? '' : '.min';

		wp_enqueue_script(
			'e-display-conditions',
			ELEMENTOR_PRO_ASSETS_URL . 'js/display-conditions' . $min_suffix . '.js',
			[
				'react',
				'react-dom',
				'backbone-marionette',
				'elementor-web-cli',
				'wp-date',
				'elementor-common',
				'elementor-editor-modules',
				'elementor-editor-document',
				'elementor-v2-ui',
				'elementor-v2-icons',
			],
			ELEMENTOR_PRO_VERSION,
			true
		);

		wp_set_script_translations( 'e-display-conditions', 'elementor-pro' );
	}

	private function add_advanced_tab_actions() {
		$hooks = array(
			'elementor/element/section/section_advanced/after_section_end' => 'css_classes', // Sections
			'elementor/element/column/section_advanced/after_section_end' => 'css_classes', // Columns
			'elementor/element/common/_section_style/after_section_end' => '_css_classes', // Widgets
			'elementor/element/container/section_layout/after_section_end' => 'css_classes', // Containers
		);

		foreach ( $hooks as $hook => $injection_position ) {
			add_action(
				$hook,
				function( $element, $args ) use ( $injection_position ) {
					$this->add_control_to_advanced_tab( $element, $args, $injection_position );
				},
				10,
				2
			);
		}
	}

	protected function add_render_actions() {
		$element_types = array(
			'section',
			'column',
			'widget',
			'container',
		);

		foreach ( $element_types as $el ) {
			add_action( 'elementor/frontend/' . $el . '/before_render', array( $this, 'before_element_render' ) );
			add_action( 'elementor/frontend/' . $el . '/after_render', array( $this, 'after_element_render' ) );
		}
	}

	private function add_control_to_advanced_tab( $element, $args, $injection_position ) {
		$element->start_injection(
			array(
				'of' => $injection_position,
			)
		);

		$element->add_control(
			'e_display_conditions_trigger',
			array(
				'type'      => Controls_Manager::RAW_HTML,
				'separator' => 'before',
				'raw'       => $this->get_display_conditions_control_template(),
			)
		);

		$element->add_control(
			'e_display_conditions',
			array(
				'type'      => Controls_Manager::HIDDEN,
			)
		);

		$element->end_injection();
	}

	private function get_display_conditions_control_template() {
		$icon_class = 'e-control-display-conditions';
		$show_promo = self::should_show_promo();

		if ( $show_promo ) {
			$icon_class .= '-promo';
		}

		ob_start();
		?>
		<div class="e-control-display-conditions__wrapper">
			<span class="e-control-display-conditions__desc">
				<?php echo esc_html__( 'Display Conditions', 'elementor-pro' ); ?>
				<?php if ( $show_promo ) : ?>
					<i class="eicon-lock"></i>
				<?php endif; ?>
			</span>
			<i class="eicon-flow <?php echo esc_attr( $icon_class ); ?>"></i>
		</div>
		<?php
		return ob_get_clean();
	}

	protected function get_saved_conditions( $settings ) {
		$conditions_json = ! empty( $settings['e_display_conditions'] ) ? $settings['e_display_conditions'] : [];

		return ! empty( $conditions_json ) && ! empty( $conditions_json[0] )
			? json_decode( $conditions_json[0], true )
			: [];
	}

	public function before_element_render( $element ) {
		$settings   = $element->get_settings_for_display();
		$is_visible = true;

		if ( empty( $settings['e_display_conditions'] ) || Plugin::elementor()->editor->is_edit_mode() ) {
			return $is_visible;
		}

		$conditions_manager = $this->get_conditions_manager();
		$conditions = $this->get_saved_conditions( $settings );

		foreach ( $conditions as $options ) {
			if ( ! isset( $options['condition'] ) ) {
				continue;
			}

			$condition_instance = $conditions_manager->get_condition( $options['condition'] );

			if ( ! $condition_instance || $condition_instance->check( $options ) ) {
				continue;
			}

			$is_visible = false;
			break;
		}

		if ( ! $is_visible ) {
			add_filter( 'elementor/element/get_child_type', '__return_false' ); // Prevent getting content of inner elements.
			add_filter( 'elementor/frontend/' . $element->get_type() . '/should_render', '__return_false' );

			$this->hidden_elements_ids[] = $element->get_id();
		}
	}

	public function after_element_render( $element ) {
		if ( ! in_array( $element->get_id(), $this->hidden_elements_ids, true ) ) {
			return;
		}

		remove_filter( 'elementor/element/get_child_type', '__return_false' );
		remove_filter( 'elementor/frontend/' . $element->get_type() . '/should_render', '__return_false' );
	}

	public static function get_experimental_data() {
		if ( ! self::can_use_display_conditions() ) {
			return [];
		}

		$experiment_data = [
			'name'           => self::LICENSE_FEATURE_NAME,
			'title'          => esc_html__( 'Display Conditions', 'elementor-pro' ),
			'description' => sprintf(
			/* translators: 1: opening link tag, 2: closing link tag, 3: line break, 4: opening span tag, 5: closing span tag. */
				esc_html__( 'Define one or multiple conditions per widget, controlling when they\'re visible. Widgets will only appear on the front end if these conditions are met. It\'s ideal for showing content to specific audiences based on time, date, user role, and more. %1$sLearn More%2$s%3$s%4$sRequires: Elementor version 3.19%5$s', 'elementor-pro' ),
				'<a href="https://go.elementor.com/wp-dash-display-conditions/" target="_blank">',
				'</a>',
				'<br>',
				'<span style="display: block; font-weight: 700; color: #21759b; font-style: italic; line-height: 18px; padding-block-start: 10px; margin-block-end: -5px;">',
				'</span>',
			),
			'release_status' => Manager::RELEASE_STATUS_ALPHA,
			'default'        => Manager::STATE_INACTIVE,
		];

		return $experiment_data;
	}

	/**
	 * @return string
	 */
	public function get_name() {
		return static::LICENSE_FEATURE_NAME;
	}

	/**
	 * @return Classes\Conditions_Manager
	 */
	public function get_conditions_manager() {
		return $this->get_component( 'conditions' );
	}

	/**
	 * @param Ajax $ajax_manager
	 */
	public function register_ajax_actions( $ajax_manager ) {
		$ajax_manager->register_ajax_action( 'display_conditions_set_cache_notice_status', [ $this->get_component( 'cache_notice' ), 'set_notice_status' ] );
	}

	/**
	 * @return bool
	 */
	public static function can_use_display_conditions(): bool {
		return API::is_license_active() && API::is_licence_has_feature( self::LICENSE_FEATURE_NAME, API::BC_VALIDATION_CALLBACK );
	}

	/**
	 * @return void
	 */
	private function maybe_add_actions_and_components(): void {
		if ( self::is_experiment_active() ) {
			$this->add_common_actions();
			$this->add_actions();
			$this->add_components();
		}
	}
}
