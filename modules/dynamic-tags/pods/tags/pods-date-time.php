<?php
namespace ElementorPro\Modules\DynamicTags\Pods\Tags;

use Elementor\Controls_Manager;
use ElementorPro\Modules\DynamicTags\Pods\Dynamic_Value_Provider;
use ElementorPro\Modules\DynamicTags\Pods\Module;
use ElementorPro\Modules\DynamicTags\Tags\Base\Data_Tag;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Pods_Date_Time extends Data_Tag {

	/**
	 * @var Dynamic_Value_Provider
	 */
	private $dynamic_value_provider;

	public function get_name() {
		return 'pods-date-time';
	}

	public function get_title() {
		return esc_html__( 'Pods', 'elementor-pro' ) . ' ' . esc_html__( 'Date Time Field', 'elementor-pro' );
	}

	public function get_group() {
		return Module::PODS_GROUP;
	}

	public function get_categories() {
		return [
			Module::DATETIME_CATEGORY,
		];
	}

	/**
	 * @param array $options
	 *
	 * @return string - date time in format Y-m-d H:i:s
	 */
	public function get_value( array $options = [] ) {
		$field = $this->dynamic_value_provider->get_value(
			$this->get_settings( 'key' )
		);

		$value = $field['value'] ?? '';

		if ( ! empty( $value ) ) {
			$value = gmdate( 'Y-m-d H:i:s', strtotime( $value ) );
		}

		if ( empty( $value ) && $this->get_settings( 'fallback' ) ) {
			$value = $this->get_settings( 'fallback' );
		}

		return wp_kses_post( $value );
	}

	public function get_panel_template_setting_key() {
		return 'key';
	}

	protected function register_controls() {
		$this->add_control(
			'key',
			[
				'label' => esc_html__( 'Key', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'groups' => Module::get_control_options( $this->get_supported_fields() ),
			]
		);

		$this->add_control(
			'fallback',
			[
				'type' => Controls_Manager::DATE_TIME,
				'label' => esc_html__( 'Fallback', 'elementor-pro' ),
			]
		);
	}

	protected function get_supported_fields() {
		return [
			'datetime',
		];
	}

	public function __construct( array $data = [], $dynamic_value_provider = null ) {
		parent::__construct( $data );

		$this->dynamic_value_provider = $dynamic_value_provider ?? new Dynamic_Value_Provider();
	}
}
