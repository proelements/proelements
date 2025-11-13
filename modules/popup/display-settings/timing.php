<?php

namespace ElementorPro\Modules\Popup\DisplaySettings;

use ElementorPro\Plugin;
use Elementor\Controls_Manager;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Timing extends Base {

	/**
	 * Get element name.
	 *
	 * Retrieve the element name.
	 *
	 * @since  2.4.0
	 * @access public
	 *
	 * @return string The name.
	 */
	public function get_name() {
		return 'popup_timing';
	}

	protected function register_controls() {
		$this->start_controls_section( 'timing' );

		$this->start_settings_group( 'page_views', esc_html__( 'Show after X page views', 'elementor-pro' ) );

		$this->add_settings_group_control(
			'views',
			[
				'type' => Controls_Manager::NUMBER,
				'label' => esc_html__( 'Page Views', 'elementor-pro' ),
				'default' => 3,
				'min' => 1,
			]
		);

		$this->end_settings_group();

		$this->start_settings_group( 'sessions', esc_html__( 'Show after X sessions', 'elementor-pro' ) );

		$this->add_settings_group_control(
			'sessions',
			[
				'type' => Controls_Manager::NUMBER,
				'label' => esc_html__( 'Sessions', 'elementor-pro' ),
				'default' => 2,
				'min' => 1,
			]
		);

		$this->end_settings_group();

		$this->start_settings_group( 'times', esc_html__( 'Show up to X times', 'elementor-pro' ) );

		$this->add_settings_group_control(
			'times',
			[
				'type' => Controls_Manager::NUMBER,
				'label' => esc_html__( 'Times', 'elementor-pro' ),
				'default' => 3,
				'min' => 1,
			]
		);

		$this->add_settings_group_control(
			'period',
			[
				'type' => Controls_Manager::SELECT,
				'label' => esc_html__( 'Per', 'elementor-pro' ),
				'default' => '', // Backward Compatibility - Persisting is old default value.
				'options' => [
					'' => esc_html__( 'Persisting', 'elementor-pro' ),
					'session' => esc_html__( 'Session', 'elementor-pro' ),
					'day' => esc_html__( 'Day', 'elementor-pro' ),
					'week' => esc_html__( 'Week', 'elementor-pro' ),
					'month' => esc_html__( 'Month', 'elementor-pro' ),
				],
			]
		);

		$this->add_settings_group_control(
			'count',
			[
				'type' => Controls_Manager::SELECT,
				'label' => esc_html__( 'Count', 'elementor-pro' ),
				'options' => [
					'' => esc_html__( 'On Open', 'elementor-pro' ),
					'close' => esc_html__( 'On Close', 'elementor-pro' ),
				],
			]
		);

		$this->end_settings_group();

		$this->start_settings_group( 'url', esc_html__( 'When arriving from specific URL', 'elementor-pro' ) );

		$this->add_settings_group_control(
			'action',
			[
				'type' => Controls_Manager::SELECT,
				'default' => 'show',
				'options' => [
					'show' => esc_html__( 'Show', 'elementor-pro' ),
					'hide' => esc_html__( 'Hide', 'elementor-pro' ),
					'regex' => esc_html__( 'Regex', 'elementor-pro' ),
				],
			]
		);

		$this->add_settings_group_control(
			'url',
			[
				'type' => Controls_Manager::TEXT,
				'placeholder' => esc_html__( 'URL', 'elementor-pro' ),
			]
		);

		$this->end_settings_group();

		$this->start_settings_group( 'sources', esc_html__( 'Show when arriving from', 'elementor-pro' ) );

		$this->add_settings_group_control(
			'sources',
			[
				'type' => Controls_Manager::SELECT2,
				'multiple' => true,
				'default' => [ 'search', 'external', 'internal' ],
				'options' => [
					'search' => esc_html__( 'Search Engines', 'elementor-pro' ),
					'external' => esc_html__( 'External Links', 'elementor-pro' ),
					'internal' => esc_html__( 'Internal Links', 'elementor-pro' ),
				],
			]
		);

		$this->end_settings_group();

		$this->start_settings_group( 'logged_in', esc_html__( 'Hide for logged in users', 'elementor-pro' ) );

		$this->add_settings_group_control(
			'users',
			[
				'type' => Controls_Manager::SELECT,
				'default' => 'all',
				'options' => [
					'all' => esc_html__( 'All Users', 'elementor-pro' ),
					'custom' => esc_html__( 'Custom', 'elementor-pro' ),
				],
			]
		);

		global $wp_roles;

		$roles = array_map( function( $role ) {
			return $role['name'];
		}, $wp_roles->roles );

		$this->add_settings_group_control(
			'roles',
			[
				'type' => Controls_Manager::SELECT2,
				'multiple' => true,
				'default' => [],
				'options' => $roles,
				'select2options' => [
					'placeholder' => esc_html__( 'Select Roles', 'elementor-pro' ),
				],
				'condition' => [
					'users' => 'custom',
				],
			]
		);

		$this->end_settings_group();

		$available_devices = [
			'desktop' => esc_html__( 'Desktop', 'elementor-pro' ),
		];

		$default_devices = [ 'desktop' ];

		$active_breakpoints = Plugin::elementor()->breakpoints->get_active_breakpoints();

		foreach ( $active_breakpoints as $breakpoint_key => $breakpoint ) {
			$available_devices[ $breakpoint_key ] = $breakpoint->get_label();
			$default_devices[] = $breakpoint_key;
		}

		$this->start_settings_group( 'devices', esc_html__( 'Show on devices', 'elementor-pro' ) );

		$this->add_settings_group_control(
			'devices',
			[
				'type' => Controls_Manager::SELECT2,
				'multiple' => true,
				'default' => $default_devices,
				'options' => $available_devices,
			]
		);

		$this->end_settings_group();

		$this->start_settings_group( 'browsers', esc_html__( 'Show on browsers', 'elementor-pro' ) );

		$this->add_settings_group_control(
			'browsers',
			[
				'type' => Controls_Manager::SELECT,
				'default' => 'all',
				'options' => [
					'all' => esc_html__( 'All Browsers', 'elementor-pro' ),
					'custom' => esc_html__( 'Custom', 'elementor-pro' ),
				],
			]
		);

		$this->add_settings_group_control(
			'browsers_options',
			[
				'type' => Controls_Manager::SELECT2,
				'multiple' => true,
				'default' => [],
				'options' => [
					'ie' => esc_html__( 'Internet Explorer', 'elementor-pro' ),
					'chrome' => esc_html__( 'Chrome', 'elementor-pro' ),
					'edge' => esc_html__( 'Edge', 'elementor-pro' ),
					'firefox' => esc_html__( 'Firefox', 'elementor-pro' ),
					'safari' => esc_html__( 'Safari', 'elementor-pro' ),
				],
				'condition' => [
					'browsers' => 'custom',
				],
			]
		);

		$this->end_settings_group();

		$this->start_settings_group( 'schedule', esc_html__( 'Schedule date and time', 'elementor-pro' ) );

		$this->add_settings_group_control(
			'timezone',
			[
				'type' => Controls_Manager::SELECT,
				'label' => esc_html__( 'Timezone', 'elementor-pro' ),
				'default' => 'site',
				'options' => [
					'site' => esc_html__( 'Site', 'elementor-pro' ),
					'visitor' => esc_html__( 'Visitor', 'elementor-pro' ),
				],
			]
		);

		$this->add_settings_group_control(
			'start_date',
			[
				'label' => esc_html__( 'Start', 'elementor-pro' ),
				'type' => Controls_Manager::DATE_TIME,
				'picker_options' => [
					'enableTime' => true,
					'minDate' => 'today',
				],
				'validation' => [
					'date_time' => [
						'control_name' => $this->get_prefixed_control_id( 'end_date' ),
						'operator' => '<=',
					],
				],
			]
		);

		$this->add_settings_group_control(
			'end_date',
			[
				'label' => esc_html__( 'End', 'elementor-pro' ),
				'type' => Controls_Manager::DATE_TIME,
				'picker_options' => [
					'enableTime' => true,
					'minDate' => 'today',
				],
				'validation' => [
					'date_time' => [
						'control_name' => $this->get_prefixed_control_id( 'start_date' ),
						'operator' => '>=',
					],
				],
			]
		);

		$datetime = new \DateTime( 'now', new \DateTimeZone( wp_timezone_string() ) );
		$datetime = $datetime->format( 'Y-m-d H:i:s' );

		$this->add_settings_group_control(
			'server_datetime',
			[
				'type' => Controls_Manager::HIDDEN,
				'default' => $datetime,
			]
		);

		$this->end_settings_group();

		$this->end_controls_section();
	}
}
