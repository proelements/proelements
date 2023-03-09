<?php
namespace ElementorPro\Modules\Countdown\Widgets;

use Elementor\Controls_Manager;
use Elementor\Core\Kits\Documents\Tabs\Global_Colors;
use Elementor\Core\Kits\Documents\Tabs\Global_Typography;
use Elementor\Group_Control_Border;
use Elementor\Group_Control_Typography;
use Elementor\Group_Control_Text_Stroke;
use Elementor\Utils;
use ElementorPro\Base\Base_Widget;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Countdown extends Base_Widget {

	public function get_name() {
		return 'countdown';
	}

	public function get_title() {
		return esc_html__( 'Countdown', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-countdown';
	}

	public function get_keywords() {
		return [ 'countdown', 'number', 'timer', 'time', 'date', 'evergreen' ];
	}

	protected function register_controls() {
		$this->start_controls_section(
			'section_countdown',
			[
				'label' => esc_html__( 'Countdown', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'countdown_type',
			[
				'label' => esc_html__( 'Type', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'due_date' => esc_html__( 'Due Date', 'elementor-pro' ),
					'evergreen' => esc_html__( 'Evergreen Timer', 'elementor-pro' ),
				],
				'default' => 'due_date',
			]
		);

		$this->add_control(
			'due_date',
			[
				'label' => esc_html__( 'Due Date', 'elementor-pro' ),
				'type' => Controls_Manager::DATE_TIME,
				'default' => gmdate( 'Y-m-d H:i', strtotime( '+1 month' ) + ( get_option( 'gmt_offset' ) * HOUR_IN_SECONDS ) ),
				/* translators: %s: Time zone. */
				'description' => sprintf( esc_html__( 'Date set according to your timezone: %s.', 'elementor-pro' ), Utils::get_timezone_string() ),
				'condition' => [
					'countdown_type' => 'due_date',
				],
				'dynamic' => [
					'active' => true,
				],
			]
		);

		$this->add_control(
			'evergreen_counter_hours',
			[
				'label' => esc_html__( 'Hours', 'elementor-pro' ),
				'type' => Controls_Manager::NUMBER,
				'default' => 47,
				'placeholder' => esc_html__( 'Hours', 'elementor-pro' ),
				'condition' => [
					'countdown_type' => 'evergreen',
				],
				'dynamic' => [
					'active' => true,
				],
			]
		);

		$this->add_control(
			'evergreen_counter_minutes',
			[
				'label' => esc_html__( 'Minutes', 'elementor-pro' ),
				'type' => Controls_Manager::NUMBER,
				'default' => 59,
				'placeholder' => esc_html__( 'Minutes', 'elementor-pro' ),
				'condition' => [
					'countdown_type' => 'evergreen',
				],
				'dynamic' => [
					'active' => true,
				],
			]
		);

		$this->add_control(
			'label_display',
			[
				'label' => esc_html__( 'View', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'block' => esc_html__( 'Block', 'elementor-pro' ),
					'inline' => esc_html__( 'Inline', 'elementor-pro' ),
				],
				'default' => 'block',
				'prefix_class' => 'elementor-countdown--label-',
			]
		);

		$this->add_control(
			'show_days',
			[
				'label' => esc_html__( 'Days', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Show', 'elementor-pro' ),
				'label_off' => esc_html__( 'Hide', 'elementor-pro' ),
				'default' => 'yes',
			]
		);

		$this->add_control(
			'show_hours',
			[
				'label' => esc_html__( 'Hours', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Show', 'elementor-pro' ),
				'label_off' => esc_html__( 'Hide', 'elementor-pro' ),
				'default' => 'yes',
			]
		);

		$this->add_control(
			'show_minutes',
			[
				'label' => esc_html__( 'Minutes', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Show', 'elementor-pro' ),
				'label_off' => esc_html__( 'Hide', 'elementor-pro' ),
				'default' => 'yes',
			]
		);

		$this->add_control(
			'show_seconds',
			[
				'label' => esc_html__( 'Seconds', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Show', 'elementor-pro' ),
				'label_off' => esc_html__( 'Hide', 'elementor-pro' ),
				'default' => 'yes',
			]
		);

		$this->add_control(
			'show_labels',
			[
				'label' => esc_html__( 'Show Label', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Show', 'elementor-pro' ),
				'label_off' => esc_html__( 'Hide', 'elementor-pro' ),
				'default' => 'yes',
				'separator' => 'before',
			]
		);

		$this->add_control(
			'custom_labels',
			[
				'label' => esc_html__( 'Custom Label', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'condition' => [
					'show_labels!' => '',
				],
			]
		);

		$this->add_control(
			'label_days',
			[
				'label' => esc_html__( 'Days', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => esc_html__( 'Days', 'elementor-pro' ),
				'placeholder' => esc_html__( 'Days', 'elementor-pro' ),
				'condition' => [
					'show_labels!' => '',
					'custom_labels!' => '',
					'show_days' => 'yes',
				],
				'dynamic' => [
					'active' => true,
				],
			]
		);

		$this->add_control(
			'label_hours',
			[
				'label' => esc_html__( 'Hours', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => esc_html__( 'Hours', 'elementor-pro' ),
				'placeholder' => esc_html__( 'Hours', 'elementor-pro' ),
				'condition' => [
					'show_labels!' => '',
					'custom_labels!' => '',
					'show_hours' => 'yes',
				],
				'dynamic' => [
					'active' => true,
				],
			]
		);

		$this->add_control(
			'label_minutes',
			[
				'label' => esc_html__( 'Minutes', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => esc_html__( 'Minutes', 'elementor-pro' ),
				'placeholder' => esc_html__( 'Minutes', 'elementor-pro' ),
				'condition' => [
					'show_labels!' => '',
					'custom_labels!' => '',
					'show_minutes' => 'yes',
				],
				'dynamic' => [
					'active' => true,
				],
			]
		);

		$this->add_control(
			'label_seconds',
			[
				'label' => esc_html__( 'Seconds', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => esc_html__( 'Seconds', 'elementor-pro' ),
				'placeholder' => esc_html__( 'Seconds', 'elementor-pro' ),
				'condition' => [
					'show_labels!' => '',
					'custom_labels!' => '',
					'show_seconds' => 'yes',
				],
				'dynamic' => [
					'active' => true,
				],
			]
		);

		$this->add_control(
			'expire_actions',
			[
				'label' => esc_html__( 'Actions After Expire', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT2,
				'options' => [
					'redirect' => esc_html__( 'Redirect', 'elementor-pro' ),
					'hide' => esc_html__( 'Hide', 'elementor-pro' ),
					'message' => esc_html__( 'Show Message', 'elementor-pro' ),
				],
				'label_block' => true,
				'separator' => 'before',
				'render_type' => 'none',
				'multiple' => true,
			]
		);

		$this->add_control(
			'message_after_expire',
			[
				'label' => esc_html__( 'Message', 'elementor-pro' ),
				'type' => Controls_Manager::TEXTAREA,
				'separator' => 'before',
				'dynamic' => [
					'active' => true,
				],
				'condition' => [
					'expire_actions' => 'message',
				],
			]
		);

		$this->add_control(
			'expire_redirect_url',
			[
				'label' => esc_html__( 'Redirect URL', 'elementor-pro' ),
				'type' => Controls_Manager::URL,
				'separator' => 'before',
				'options' => false,
				'dynamic' => [
					'active' => true,
				],
				'condition' => [
					'expire_actions' => 'redirect',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_box_style',
			[
				'label' => esc_html__( 'Boxes', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_responsive_control(
			'container_width',
			[
				'label' => esc_html__( 'Container Width', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'default' => [
					'unit' => '%',
					'size' => 100,
				],
				'tablet_default' => [
					'unit' => '%',
				],
				'mobile_default' => [
					'unit' => '%',
				],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 2000,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'size_units' => [ '%', 'px' ],
				'selectors' => [
					'{{WRAPPER}} .elementor-countdown-wrapper' => 'max-width: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'box_background_color',
			[
				'label' => esc_html__( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'global' => [
					'default' => Global_Colors::COLOR_PRIMARY,
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-countdown-item' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(),
			[
				'name' => 'box_border',
				'selector' => '{{WRAPPER}} .elementor-countdown-item',
				'separator' => 'before',
			]
		);

		$this->add_control(
			'box_border_radius',
			[
				'label' => esc_html__( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em' ],
				'selectors' => [
					'{{WRAPPER}} .elementor-countdown-item' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'box_spacing',
			[
				'label' => esc_html__( 'Space Between', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'default' => [
					'size' => 10,
				],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'selectors' => [
					'body:not(.rtl) {{WRAPPER}} .elementor-countdown-item:not(:first-of-type)' => 'margin-left: calc( {{SIZE}}{{UNIT}}/2 );',
					'body:not(.rtl) {{WRAPPER}} .elementor-countdown-item:not(:last-of-type)' => 'margin-right: calc( {{SIZE}}{{UNIT}}/2 );',
					'body.rtl {{WRAPPER}} .elementor-countdown-item:not(:first-of-type)' => 'margin-right: calc( {{SIZE}}{{UNIT}}/2 );',
					'body.rtl {{WRAPPER}} .elementor-countdown-item:not(:last-of-type)' => 'margin-left: calc( {{SIZE}}{{UNIT}}/2 );',
				],
			]
		);

		$this->add_responsive_control(
			'box_padding',
			[
				'label' => esc_html__( 'Padding', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em' ],
				'selectors' => [
					'{{WRAPPER}} .elementor-countdown-item' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_content_style',
			[
				'label' => esc_html__( 'Content', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'heading_digits',
			[
				'label' => esc_html__( 'Digits', 'elementor-pro' ),
				'type' => Controls_Manager::HEADING,
			]
		);

		$this->add_control(
			'digits_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-countdown-digits' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'digits_typography',
				'selector' => '{{WRAPPER}} .elementor-countdown-digits',
				'global' => [
					'default' => Global_Typography::TYPOGRAPHY_TEXT,
				],
			]
		);

		$this->add_control(
			'heading_label',
			[
				'label' => esc_html__( 'Label', 'elementor-pro' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->add_control(
			'label_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-countdown-label' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'label_typography',
				'selector' => '{{WRAPPER}} .elementor-countdown-label',
				'global' => [
					'default' => Global_Typography::TYPOGRAPHY_SECONDARY,
				],
			]
		);

		$this->add_group_control(
			Group_Control_Text_Stroke::get_type(),
			[
				'name' => 'text_stroke',
				'selector' => '{{WRAPPER}} .elementor-countdown-label',
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_expire_message_style',
			[
				'label' => esc_html__( 'Message', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
				'condition' => [
					'expire_actions' => 'message',
				],
			]
		);

		$this->add_responsive_control(
			'align',
			[
				'label' => esc_html__( 'Alignment', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'options' => [
					'left' => [
						'title' => esc_html__( 'Left', 'elementor-pro' ),
						'icon' => 'eicon-text-align-left',
					],
					'center' => [
						'title' => esc_html__( 'Center', 'elementor-pro' ),
						'icon' => 'eicon-text-align-center',
					],
					'right' => [
						'title' => esc_html__( 'Right', 'elementor-pro' ),
						'icon' => 'eicon-text-align-right',
					],
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-countdown-expire--message' => 'text-align: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'text_color',
			[
				'label' => esc_html__( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}} .elementor-countdown-expire--message' => 'color: {{VALUE}};',
				],
				'global' => [
					'default' => Global_Colors::COLOR_TEXT,
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'typography',
				'global' => [
					'default' => Global_Typography::TYPOGRAPHY_TEXT,
				],
				'selector' => '{{WRAPPER}} .elementor-countdown-expire--message',
			]
		);

		$this->add_responsive_control(
			'message_padding',
			[
				'label' => esc_html__( 'Padding', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em' ],
				'selectors' => [
					'{{WRAPPER}} .elementor-countdown-expire--message' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();
	}

	private function get_strftime( $instance ) {
		$string = '';
		if ( $instance['show_days'] ) {
			$string .= $this->render_countdown_item( $instance, 'label_days', 'elementor-countdown-days' );
		}
		if ( $instance['show_hours'] ) {
			$string .= $this->render_countdown_item( $instance, 'label_hours', 'elementor-countdown-hours' );
		}
		if ( $instance['show_minutes'] ) {
			$string .= $this->render_countdown_item( $instance, 'label_minutes', 'elementor-countdown-minutes' );
		}
		if ( $instance['show_seconds'] ) {
			$string .= $this->render_countdown_item( $instance, 'label_seconds', 'elementor-countdown-seconds' );
		}

		return $string;
	}

	private $_default_countdown_labels;

	private function init_default_countdown_labels() {
		$this->_default_countdown_labels = [
			'label_months' => esc_html__( 'Months', 'elementor-pro' ),
			'label_weeks' => esc_html__( 'Weeks', 'elementor-pro' ),
			'label_days' => esc_html__( 'Days', 'elementor-pro' ),
			'label_hours' => esc_html__( 'Hours', 'elementor-pro' ),
			'label_minutes' => esc_html__( 'Minutes', 'elementor-pro' ),
			'label_seconds' => esc_html__( 'Seconds', 'elementor-pro' ),
		];
	}

	public function get_default_countdown_labels() {
		if ( ! $this->_default_countdown_labels ) {
			$this->init_default_countdown_labels();
		}

		return $this->_default_countdown_labels;
	}

	private function render_countdown_item( $instance, $label, $part_class ) {
		$string = '<div class="elementor-countdown-item"><span class="elementor-countdown-digits ' . $part_class . '"></span>';

		if ( $instance['show_labels'] ) {
			$default_labels = $this->get_default_countdown_labels();
			$label = ( $instance['custom_labels'] ) ? $instance[ $label ] : $default_labels[ $label ];
			$string .= ' <span class="elementor-countdown-label">' . $label . '</span>';
		}

		$string .= '</div>';

		return $string;
	}

	private function get_evergreen_interval( $instance ) {
		$hours = empty( $instance['evergreen_counter_hours'] ) ? 0 : ( $instance['evergreen_counter_hours'] * HOUR_IN_SECONDS );
		$minutes = empty( $instance['evergreen_counter_minutes'] ) ? 0 : ( $instance['evergreen_counter_minutes'] * MINUTE_IN_SECONDS );
		$evergreen_interval = $hours + $minutes;

		return $evergreen_interval;
	}

	private function get_actions( $settings ) {
		if ( empty( $settings['expire_actions'] ) || ! is_array( $settings['expire_actions'] ) ) {
			return false;
		}

		$actions = [];

		foreach ( $settings['expire_actions'] as $action ) {
			$action_to_run = [ 'type' => $action ];
			if ( 'redirect' === $action ) {
				if ( empty( $settings['expire_redirect_url']['url'] ) ) {
					continue;
				}
				$action_to_run['redirect_url'] = $settings['expire_redirect_url']['url'];
			}
			$actions[] = $action_to_run;
		}

		return $actions;
	}

	protected function render() {
		$instance = $this->get_settings_for_display();
		$due_date = $instance['due_date'];
		$string = $this->get_strftime( $instance );

		if ( 'evergreen' === $instance['countdown_type'] ) {
			$this->add_render_attribute( 'div', 'data-evergreen-interval', $this->get_evergreen_interval( $instance ) );
		} else {
			$wp_timezone = new \DateTimeZone( wp_timezone_string() );
			$due_date = new \DateTime( $due_date, $wp_timezone );
			$due_date = $due_date->getTimestamp();
		}

		$actions = false;

		if ( ! Plugin::elementor()->editor->is_edit_mode() ) {
			$actions = $this->get_actions( $instance );
		}

		if ( $actions ) {
			$this->add_render_attribute( 'div', 'data-expire-actions', wp_json_encode( $actions ) );
		}

		$this->add_render_attribute( 'div', [
			'class' => 'elementor-countdown-wrapper',
			'data-date' => $due_date,
		] );

		?>
		<div <?php $this->print_render_attribute_string( 'div' ); ?>>
			<?php echo wp_kses_post( $string ); ?>
		</div>
		<?php
		if ( $actions && is_array( $actions ) ) {
			foreach ( $actions as $action ) {
				if ( 'message' !== $action['type'] ) {
					continue;
				} ?>
				<div class="elementor-countdown-expire--message">
					<?php // PHPCS - the main text of a widget should not be escaped.
					echo $instance['message_after_expire']; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
				</div>
				<?php
			}
		}
	}
}
