<?php
namespace ElementorPro\Modules\Forms\Widgets;

use Elementor\Controls_Manager;
use Elementor\Core\Kits\Documents\Tabs\Global_Colors;
use Elementor\Core\Kits\Documents\Tabs\Global_Typography;
use Elementor\Group_Control_Border;
use Elementor\Group_Control_Typography;
use Elementor\Icons_Manager;
use Elementor\Repeater;
use ElementorPro\Core\Utils;
use ElementorPro\Modules\Forms\Classes\Ajax_Handler;
use ElementorPro\Modules\Forms\Classes\Form_Base;
use ElementorPro\Modules\Forms\Controls\Fields_Repeater;
use ElementorPro\Modules\Forms\Module;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Form extends Form_Base {

	public function get_name() {
		return 'form';
	}

	public function get_title() {
		return __( 'Form', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-form-horizontal';
	}

	public function get_keywords() {
		return [ 'form', 'forms', 'field', 'button', 'mailchimp', 'drip', 'mailpoet', 'convertkit', 'getresponse', 'recaptcha', 'zapier', 'webhook', 'activecampaign', 'slack', 'discord', 'mailerlite' ];
	}

	protected function register_controls() {
		$repeater = new Repeater();

		$field_types = [
			'text' => __( 'Text', 'elementor-pro' ),
			'email' => __( 'Email', 'elementor-pro' ),
			'textarea' => __( 'Textarea', 'elementor-pro' ),
			'url' => __( 'URL', 'elementor-pro' ),
			'tel' => __( 'Tel', 'elementor-pro' ),
			'radio' => __( 'Radio', 'elementor-pro' ),
			'select' => __( 'Select', 'elementor-pro' ),
			'checkbox' => __( 'Checkbox', 'elementor-pro' ),
			'acceptance' => __( 'Acceptance', 'elementor-pro' ),
			'number' => __( 'Number', 'elementor-pro' ),
			'date' => __( 'Date', 'elementor-pro' ),
			'time' => __( 'Time', 'elementor-pro' ),
			'upload' => __( 'File Upload', 'elementor-pro' ),
			'password' => __( 'Password', 'elementor-pro' ),
			'html' => __( 'HTML', 'elementor-pro' ),
			'hidden' => __( 'Hidden', 'elementor-pro' ),
		];

		/**
		 * Forms field types.
		 *
		 * Filters the list of field types displayed in the form `field_type` control.
		 *
		 * @since 1.0.0
		 *
		 * @param array $field_types Field types.
		 */
		$field_types = apply_filters( 'elementor_pro/forms/field_types', $field_types );

		$repeater->start_controls_tabs( 'form_fields_tabs' );

		$repeater->start_controls_tab( 'form_fields_content_tab', [
			'label' => __( 'Content', 'elementor-pro' ),
		] );

		$repeater->add_control(
			'field_type',
			[
				'label' => __( 'Type', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => $field_types,
				'default' => 'text',
			]
		);

		$repeater->add_control(
			'field_label',
			[
				'label' => __( 'Label', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => '',
			]
		);

		$repeater->add_control(
			'placeholder',
			[
				'label' => __( 'Placeholder', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => '',
				'conditions' => [
					'terms' => [
						[
							'name' => 'field_type',
							'operator' => 'in',
							'value' => [
								'tel',
								'text',
								'email',
								'textarea',
								'number',
								'url',
								'password',
							],
						],
					],
				],
			]
		);

		$repeater->add_control(
			'required',
			[
				'label' => __( 'Required', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'return_value' => 'true',
				'default' => '',
				'conditions' => [
					'terms' => [
						[
							'name' => 'field_type',
							'operator' => '!in',
							'value' => [
								'checkbox',
								'recaptcha',
								'recaptcha_v3',
								'hidden',
								'html',
								'step',
							],
						],
					],
				],
			]
		);

		$repeater->add_control(
			'field_options',
			[
				'label' => __( 'Options', 'elementor-pro' ),
				'type' => Controls_Manager::TEXTAREA,
				'default' => '',
				'description' => __( 'Enter each option in a separate line. To differentiate between label and value, separate them with a pipe char ("|"). For example: First Name|f_name', 'elementor-pro' ),
				'conditions' => [
					'terms' => [
						[
							'name' => 'field_type',
							'operator' => 'in',
							'value' => [
								'select',
								'checkbox',
								'radio',
							],
						],
					],
				],
			]
		);

		$repeater->add_control(
			'allow_multiple',
			[
				'label' => __( 'Multiple Selection', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'return_value' => 'true',
				'conditions' => [
					'terms' => [
						[
							'name' => 'field_type',
							'value' => 'select',
						],
					],
				],
			]
		);

		$repeater->add_control(
			'select_size',
			[
				'label' => __( 'Rows', 'elementor-pro' ),
				'type' => Controls_Manager::NUMBER,
				'min' => 2,
				'step' => 1,
				'conditions' => [
					'terms' => [
						[
							'name' => 'field_type',
							'value' => 'select',
						],
						[
							'name' => 'allow_multiple',
							'value' => 'true',
						],
					],
				],
			]
		);

		$repeater->add_control(
			'inline_list',
			[
				'label' => __( 'Inline List', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'return_value' => 'elementor-subgroup-inline',
				'default' => '',
				'conditions' => [
					'terms' => [
						[
							'name' => 'field_type',
							'operator' => 'in',
							'value' => [
								'checkbox',
								'radio',
							],
						],
					],
				],
			]
		);

		$repeater->add_control(
			'field_html',
			[
				'label' => __( 'HTML', 'elementor-pro' ),
				'type' => Controls_Manager::TEXTAREA,
				'dynamic' => [
					'active' => true,
				],
				'conditions' => [
					'terms' => [
						[
							'name' => 'field_type',
							'value' => 'html',
						],
					],
				],
			]
		);

		$repeater->add_responsive_control(
			'width',
			[
				'label' => __( 'Column Width', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'' => __( 'Default', 'elementor-pro' ),
					'100' => '100%',
					'80' => '80%',
					'75' => '75%',
					'70' => '70%',
					'66' => '66%',
					'60' => '60%',
					'50' => '50%',
					'40' => '40%',
					'33' => '33%',
					'30' => '30%',
					'25' => '25%',
					'20' => '20%',
				],
				'default' => '100',
				'conditions' => [
					'terms' => [
						[
							'name' => 'field_type',
							'operator' => '!in',
							'value' => [
								'hidden',
								'recaptcha',
								'recaptcha_v3',
								'step',
							],
						],
					],
				],
			]
		);

		$repeater->add_control(
			'rows',
			[
				'label' => __( 'Rows', 'elementor-pro' ),
				'type' => Controls_Manager::NUMBER,
				'default' => 4,
				'conditions' => [
					'terms' => [
						[
							'name' => 'field_type',
							'value' => 'textarea',
						],
					],
				],
			]
		);

		$repeater->add_control(
			'recaptcha_size', [
				'label' => __( 'Size', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'normal',
				'options' => [
					'normal' => __( 'Normal', 'elementor-pro' ),
					'compact' => __( 'Compact', 'elementor-pro' ),
				],
				'conditions' => [
					'terms' => [
						[
							'name' => 'field_type',
							'value' => 'recaptcha',
						],
					],
				],
			]
		);

		$repeater->add_control(
			'recaptcha_style',
			[
				'label' => __( 'Style', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'light',
				'options' => [
					'light' => __( 'Light', 'elementor-pro' ),
					'dark' => __( 'Dark', 'elementor-pro' ),
				],
				'conditions' => [
					'terms' => [
						[
							'name' => 'field_type',
							'value' => 'recaptcha',
						],
					],
				],
			]
		);

		$repeater->add_control(
			'recaptcha_badge', [
				'label' => __( 'Badge', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'bottomright',
				'options' => [
					'bottomright' => __( 'Bottom Right', 'elementor-pro' ),
					'bottomleft' => __( 'Bottom Left', 'elementor-pro' ),
					'inline' => __( 'Inline', 'elementor-pro' ),
				],
				'description' => __( 'To view the validation badge, switch to preview mode', 'elementor-pro' ),
				'conditions' => [
					'terms' => [
						[
							'name' => 'field_type',
							'value' => 'recaptcha_v3',
						],
					],
				],
			]
		);

		$repeater->add_control(
			'css_classes',
			[
				'label' => __( 'CSS Classes', 'elementor-pro' ),
				'type' => Controls_Manager::HIDDEN,
				'default' => '',
				'title' => __( 'Add your custom class WITHOUT the dot. e.g: my-class', 'elementor-pro' ),
			]
		);

		$repeater->end_controls_tab();

		$repeater->start_controls_tab(
			'form_fields_advanced_tab',
			[
				'label' => __( 'Advanced', 'elementor-pro' ),
				'condition' => [
					'field_type!' => 'html',
				],
			]
		);

		$repeater->add_control(
			'field_value',
			[
				'label' => __( 'Default Value', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => '',
				'dynamic' => [
					'active' => true,
				],
				'conditions' => [
					'terms' => [
						[
							'name' => 'field_type',
							'operator' => 'in',
							'value' => [
								'text',
								'email',
								'textarea',
								'url',
								'tel',
								'radio',
								'select',
								'number',
								'date',
								'time',
								'hidden',
							],
						],
					],
				],
			]
		);

		$repeater->add_control(
			'custom_id',
			[
				'label' => __( 'ID', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'description' => __( 'Please make sure the ID is unique and not used elsewhere in this form. This field allows <code>A-z 0-9</code> & underscore chars without spaces.', 'elementor-pro' ),
				'render_type' => 'none',
			]
		);

		$shortcode_template = '{{ view.container.settings.get( \'custom_id\' ) }}';
		$repeater->add_control(
			'shortcode',
			[
				'label' => __( 'Shortcode', 'elementor-pro' ),
				'type' => Controls_Manager::RAW_HTML,
				'classes' => 'forms-field-shortcode',
				'raw' => '<input class="elementor-form-field-shortcode" value=\'[field id="' . $shortcode_template . '"]\' readonly />',
			]
		);

		$repeater->end_controls_tab();

		$repeater->end_controls_tabs();

		$this->start_controls_section(
			'section_form_fields',
			[
				'label' => __( 'Form Fields', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'form_name',
			[
				'label' => __( 'Form Name', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => __( 'New Form', 'elementor-pro' ),
				'placeholder' => __( 'Form Name', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'form_fields',
			[
				'type' => Fields_Repeater::CONTROL_TYPE,
				'fields' => $repeater->get_controls(),
				'default' => [
					[
						'custom_id' => 'name',
						'field_type' => 'text',
						'field_label' => __( 'Name', 'elementor-pro' ),
						'placeholder' => __( 'Name', 'elementor-pro' ),
						'width' => '100',
					],
					[
						'custom_id' => 'email',
						'field_type' => 'email',
						'required' => 'true',
						'field_label' => __( 'Email', 'elementor-pro' ),
						'placeholder' => __( 'Email', 'elementor-pro' ),
						'width' => '100',
					],
					[
						'custom_id' => 'message',
						'field_type' => 'textarea',
						'field_label' => __( 'Message', 'elementor-pro' ),
						'placeholder' => __( 'Message', 'elementor-pro' ),
						'width' => '100',
					],
				],
				'title_field' => '{{{ field_label }}}',
			]
		);

		$this->add_control(
			'input_size',
			[
				'label' => __( 'Input Size', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'xs' => __( 'Extra Small', 'elementor-pro' ),
					'sm' => __( 'Small', 'elementor-pro' ),
					'md' => __( 'Medium', 'elementor-pro' ),
					'lg' => __( 'Large', 'elementor-pro' ),
					'xl' => __( 'Extra Large', 'elementor-pro' ),
				],
				'default' => 'sm',
				'separator' => 'before',
			]
		);

		$this->add_control(
			'show_labels',
			[
				'label' => __( 'Label', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => __( 'Show', 'elementor-pro' ),
				'label_off' => __( 'Hide', 'elementor-pro' ),
				'return_value' => 'true',
				'default' => 'true',
				'separator' => 'before',
			]
		);

		$this->add_control(
			'mark_required',
			[
				'label' => __( 'Required Mark', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => __( 'Show', 'elementor-pro' ),
				'label_off' => __( 'Hide', 'elementor-pro' ),
				'default' => '',
				'condition' => [
					'show_labels!' => '',
				],
			]
		);

		$this->add_control(
			'label_position',
			[
				'label' => __( 'Label Position', 'elementor-pro' ),
				'type' => Controls_Manager::HIDDEN,
				'options' => [
					'above' => __( 'Above', 'elementor-pro' ),
					'inline' => __( 'Inline', 'elementor-pro' ),
				],
				'default' => 'above',
				'condition' => [
					'show_labels!' => '',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_buttons',
			[
				'label' => __( 'Buttons', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'button_size',
			[
				'label' => __( 'Size', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'sm',
				'options' => self::get_button_sizes(),
			]
		);

		$this->add_responsive_control(
			'button_width',
			[
				'label' => __( 'Column Width', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'' => __( 'Default', 'elementor-pro' ),
					'100' => '100%',
					'80' => '80%',
					'75' => '75%',
					'70' => '70%',
					'66' => '66%',
					'60' => '60%',
					'50' => '50%',
					'40' => '40%',
					'33' => '33%',
					'30' => '30%',
					'25' => '25%',
					'20' => '20%',
				],
				'default' => '100',
				'frontend_available' => true,
			]
		);

		$this->add_responsive_control(
			'button_align',
			[
				'label' => __( 'Alignment', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'options' => [
					'start' => [
						'title' => __( 'Left', 'elementor-pro' ),
						'icon' => 'eicon-text-align-left',
					],
					'center' => [
						'title' => __( 'Center', 'elementor-pro' ),
						'icon' => 'eicon-text-align-center',
					],
					'end' => [
						'title' => __( 'Right', 'elementor-pro' ),
						'icon' => 'eicon-text-align-right',
					],
					'stretch' => [
						'title' => __( 'Justified', 'elementor-pro' ),
						'icon' => 'eicon-text-align-justify',
					],
				],
				'default' => 'stretch',
				'prefix_class' => 'elementor%s-button-align-',
			]
		);

		$this->add_control(
			'heading_steps_buttons',
			[
				'label' => __( 'Step Buttons', 'elementor-pro' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->add_control(
			'step_next_label',
			[
				'label' => __( 'Next', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'frontend_available' => true,
				'render_type' => 'none',
				'default' => __( 'Next', 'elementor-pro' ),
				'placeholder' => __( 'Next', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'step_previous_label',
			[
				'label' => __( 'Previous', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'frontend_available' => true,
				'render_type' => 'none',
				'default' => __( 'Previous', 'elementor-pro' ),
				'placeholder' => __( 'Previous', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'heading_submit_button',
			[
				'label' => __( 'Submit Button', 'elementor-pro' ),
				'type' => Controls_Manager::HEADING,
			]
		);

		$this->add_control(
			'button_text',
			[
				'label' => __( 'Submit', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => __( 'Send', 'elementor-pro' ),
				'placeholder' => __( 'Send', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'selected_button_icon',
			[
				'label' => __( 'Icon', 'elementor-pro' ),
				'type' => Controls_Manager::ICONS,
				'skin' => 'inline',
				'label_block' => false,
			]
		);

		$this->add_control(
			'button_icon_align',
			[
				'label' => __( 'Icon Position', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'left',
				'options' => [
					'left' => __( 'Before', 'elementor-pro' ),
					'right' => __( 'After', 'elementor-pro' ),
				],
				'condition' => [
					'selected_button_icon[value]!' => '',
				],
			]
		);

		$this->add_control(
			'button_icon_indent',
			[
				'label' => __( 'Icon Spacing', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'range' => [
					'px' => [
						'max' => 50,
					],
				],
				'condition' => [
					'selected_button_icon[value]!' => '',
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-button .elementor-align-icon-right' => 'margin-left: {{SIZE}}{{UNIT}};',
					'{{WRAPPER}} .elementor-button .elementor-align-icon-left' => 'margin-right: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'button_css_id',
			[
				'label' => __( 'Button ID', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => '',
				'title' => __( 'Add your custom id WITHOUT the Pound key. e.g: my-id', 'elementor-pro' ),
				'description' => __( 'Please make sure the ID is unique and not used elsewhere on the page this form is displayed. This field allows <code>A-z 0-9</code> & underscore chars without spaces.', 'elementor-pro' ),
				'separator' => 'before',

			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_integration',
			[
				'label' => __( 'Actions After Submit', 'elementor-pro' ),
			]
		);

		$actions = Module::instance()->get_form_actions();

		$actions_options = [];

		foreach ( $actions as $action ) {
			$actions_options[ $action->get_name() ] = $action->get_label();
		}

		$this->add_control(
			'submit_actions',
			[
				'label' => __( 'Add Action', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT2,
				'multiple' => true,
				'options' => $actions_options,
				'render_type' => 'none',
				'label_block' => true,
				'default' => apply_filters( 'elementor_pro/forms/default_submit_actions', [
					'email',
				] ),
				'description' => __( 'Add actions that will be performed after a visitor submits the form (e.g. send an email notification). Choosing an action will add its setting below.', 'elementor-pro' ),
			]
		);

		$this->end_controls_section();

		foreach ( $actions as $action ) {
			$action->register_settings_section( $this );
		}

		// Steps settings.
		$this->start_controls_section(
			'section_steps_settings',
			[
				'label' => __( 'Steps Settings', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'step_type',
			[
				'label' => __( 'Type', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'frontend_available' => true,
				'render_type' => 'none',
				'options' => [
					'none' => 'None',
					'text' => 'Text',
					'icon' => 'Icon',
					'number' => 'Number',
					'progress_bar' => 'Progress Bar',
					'number_text' => 'Number & Text',
					'icon_text' => 'Icon & Text',
				],
				'default' => 'number_text',
			]
		);

		$this->add_control(
			'step_icon_shape',
			[
				'label' => __( 'Shape', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'frontend_available' => true,
				'render_type' => 'none',
				'options' => [
					'circle' => 'Circle',
					'square' => 'Square',
					'rounded' => 'Rounded',
					'none' => 'None',
				],
				'default' => 'circle',
				'conditions' => [
					'terms' => [
						[
							'name' => 'step_type',
							'operator' => '!in',
							'value' => [
								'progress_bar',
								'text',
							],
						],
					],
				],
			]
		);

		$repeater->add_control(
			'display_percentage',
			[
				'label' => __( 'Display Percentage', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'frontend_available' => true,
				'render_type' => 'none',
				'return_value' => 'true',
				'default' => '',
				'condition' => [
					'step_type' => 'progress_bar',
				],
			]
		);

		// End of steps settings.
		$this->end_controls_section();

		$this->start_controls_section(
			'section_form_options',
			[
				'label' => __( 'Additional Options', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'form_id',
			[
				'label' => __( 'Form ID', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'placeholder' => 'new_form_id',
				'description' => __( 'Please make sure the ID is unique and not used elsewhere on the page this form is displayed. This field allows <code>A-z 0-9</code> & underscore chars without spaces.', 'elementor-pro' ),
				'separator' => 'after',
			]
		);

		$this->add_control(
			'custom_messages',
			[
				'label' => __( 'Custom Messages', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'default' => '',
				'separator' => 'before',
				'render_type' => 'none',
			]
		);

		$default_messages = Ajax_Handler::get_default_messages();

		$this->add_control(
			'success_message',
			[
				'label' => __( 'Success Message', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => $default_messages[ Ajax_Handler::SUCCESS ],
				'placeholder' => $default_messages[ Ajax_Handler::SUCCESS ],
				'label_block' => true,
				'condition' => [
					'custom_messages!' => '',
				],
				'render_type' => 'none',
			]
		);

		$this->add_control(
			'error_message',
			[
				'label' => __( 'Error Message', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => $default_messages[ Ajax_Handler::ERROR ],
				'placeholder' => $default_messages[ Ajax_Handler::ERROR ],
				'label_block' => true,
				'condition' => [
					'custom_messages!' => '',
				],
				'render_type' => 'none',
			]
		);

		$this->add_control(
			'required_field_message',
			[
				'label' => __( 'Required Message', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => $default_messages[ Ajax_Handler::FIELD_REQUIRED ],
				'placeholder' => $default_messages[ Ajax_Handler::FIELD_REQUIRED ],
				'label_block' => true,
				'condition' => [
					'custom_messages!' => '',
				],
				'render_type' => 'none',
			]
		);

		$this->add_control(
			'invalid_message',
			[
				'label' => __( 'Invalid Message', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => $default_messages[ Ajax_Handler::INVALID_FORM ],
				'placeholder' => $default_messages[ Ajax_Handler::INVALID_FORM ],
				'label_block' => true,
				'condition' => [
					'custom_messages!' => '',
				],
				'render_type' => 'none',
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_form_style',
			[
				'label' => __( 'Form', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'column_gap',
			[
				'label' => __( 'Columns Gap', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'default' => [
					'size' => 10,
				],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 60,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-field-group' => 'padding-right: calc( {{SIZE}}{{UNIT}}/2 ); padding-left: calc( {{SIZE}}{{UNIT}}/2 );',
					'{{WRAPPER}} .elementor-form-fields-wrapper' => 'margin-left: calc( -{{SIZE}}{{UNIT}}/2 ); margin-right: calc( -{{SIZE}}{{UNIT}}/2 );',
				],
			]
		);

		$this->add_control(
			'row_gap',
			[
				'label' => __( 'Rows Gap', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'default' => [
					'size' => 10,
				],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 60,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-field-group' => 'margin-bottom: {{SIZE}}{{UNIT}};',
					'{{WRAPPER}} .elementor-field-group.recaptcha_v3-bottomleft, {{WRAPPER}} .elementor-field-group.recaptcha_v3-bottomright' => 'margin-bottom: 0;',
					'{{WRAPPER}} .elementor-form-fields-wrapper' => 'margin-bottom: -{{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'heading_label',
			[
				'label' => __( 'Label', 'elementor-pro' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->add_control(
			'label_spacing',
			[
				'label' => __( 'Spacing', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'default' => [
					'size' => 0,
				],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 60,
					],
				],
				'selectors' => [
					'body.rtl {{WRAPPER}} .elementor-labels-inline .elementor-field-group > label' => 'padding-left: {{SIZE}}{{UNIT}};',
					// for the label position = inline option
					'body:not(.rtl) {{WRAPPER}} .elementor-labels-inline .elementor-field-group > label' => 'padding-right: {{SIZE}}{{UNIT}};',
					// for the label position = inline option
					'body {{WRAPPER}} .elementor-labels-above .elementor-field-group > label' => 'padding-bottom: {{SIZE}}{{UNIT}};',
					// for the label position = above option
				],
			]
		);

		$this->add_control(
			'label_color',
			[
				'label' => __( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-field-group > label, {{WRAPPER}} .elementor-field-subgroup label' => 'color: {{VALUE}};',
				],
				'global' => [
					'default' => Global_Colors::COLOR_TEXT,
				],
			]
		);

		$this->add_control(
			'mark_required_color',
			[
				'label' => __( 'Mark Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}} .elementor-mark-required .elementor-field-label:after' => 'color: {{COLOR}};',
				],
				'condition' => [
					'mark_required' => 'yes',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'label_typography',
				'selector' => '{{WRAPPER}} .elementor-field-group > label',
				'global' => [
					'default' => Global_Typography::TYPOGRAPHY_TEXT,
				],
			]
		);

		$this->add_control(
			'heading_html',
			[
				'label' => __( 'HTML Field', 'elementor-pro' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->add_control(
			'html_spacing',
			[
				'label' => __( 'Spacing', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'default' => [
					'size' => 0,
				],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 60,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-field-type-html' => 'padding-bottom: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'html_color',
			[
				'label' => __( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-field-type-html' => 'color: {{VALUE}};',
				],
				'global' => [
					'default' => Global_Colors::COLOR_TEXT,
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'html_typography',
				'selector' => '{{WRAPPER}} .elementor-field-type-html',
				'global' => [
					'default' => Global_Typography::TYPOGRAPHY_TEXT,
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_field_style',
			[
				'label' => __( 'Field', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'field_text_color',
			[
				'label' => __( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-field-group .elementor-field' => 'color: {{VALUE}};',
				],
				'global' => [
					'default' => Global_Colors::COLOR_TEXT,
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'field_typography',
				'selector' => '{{WRAPPER}} .elementor-field-group .elementor-field, {{WRAPPER}} .elementor-field-subgroup label',
				'global' => [
					'default' => Global_Typography::TYPOGRAPHY_TEXT,
				],
			]
		);

		$this->add_control(
			'field_background_color',
			[
				'label' => __( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'default' => '#ffffff',
				'selectors' => [
					'{{WRAPPER}} .elementor-field-group:not(.elementor-field-type-upload) .elementor-field:not(.elementor-select-wrapper)' => 'background-color: {{VALUE}};',
					'{{WRAPPER}} .elementor-field-group .elementor-select-wrapper select' => 'background-color: {{VALUE}};',
				],
				'separator' => 'before',
			]
		);

		$this->add_control(
			'field_border_color',
			[
				'label' => __( 'Border Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-field-group:not(.elementor-field-type-upload) .elementor-field:not(.elementor-select-wrapper)' => 'border-color: {{VALUE}};',
					'{{WRAPPER}} .elementor-field-group .elementor-select-wrapper select' => 'border-color: {{VALUE}};',
					'{{WRAPPER}} .elementor-field-group .elementor-select-wrapper::before' => 'color: {{VALUE}};',
				],
				'separator' => 'before',
			]
		);

		$this->add_control(
			'field_border_width',
			[
				'label' => __( 'Border Width', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'placeholder' => '1',
				'size_units' => [ 'px' ],
				'selectors' => [
					'{{WRAPPER}} .elementor-field-group:not(.elementor-field-type-upload) .elementor-field:not(.elementor-select-wrapper)' => 'border-width: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
					'{{WRAPPER}} .elementor-field-group .elementor-select-wrapper select' => 'border-width: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'field_border_radius',
			[
				'label' => __( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%' ],
				'selectors' => [
					'{{WRAPPER}} .elementor-field-group:not(.elementor-field-type-upload) .elementor-field:not(.elementor-select-wrapper)' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
					'{{WRAPPER}} .elementor-field-group .elementor-select-wrapper select' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_button_style',
			[
				'label' => __( 'Buttons', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'button_typography',
				'global' => [
					'default' => Global_Typography::TYPOGRAPHY_ACCENT,
				],
				'selector' => '{{WRAPPER}} .elementor-button',
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(), [
				'name' => 'button_border',
				'selector' => '{{WRAPPER}} .elementor-button',
				'exclude' => [
					'color',
				],
			]
		);

		$this->start_controls_tabs( 'tabs_button_style' );

		$this->start_controls_tab(
			'tab_button_normal',
			[
				'label' => __( 'Normal', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'heading_next_submit_button',
			[
				'label' => __( 'Next & Submit Button', 'elementor-pro' ),
				'type' => Controls_Manager::HEADING,
			]
		);

		$this->add_control(
			'button_background_color',
			[
				'label' => __( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'global' => [
					'default' => Global_Colors::COLOR_ACCENT,
				],
				'selectors' => [
					'{{WRAPPER}} .e-form__buttons__wrapper__button-next' => 'background-color: {{VALUE}};',
					'{{WRAPPER}} .elementor-button[type="submit"]' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'button_text_color',
			[
				'label' => __( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'default' => '#ffffff',
				'selectors' => [
					'{{WRAPPER}} .e-form__buttons__wrapper__button-next' => 'color: {{VALUE}};',
					'{{WRAPPER}} .elementor-button[type="submit"]' => 'color: {{VALUE}};',
					'{{WRAPPER}} .elementor-button[type="submit"] svg *' => 'fill: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'button_border_color',
			[
				'label' => __( 'Border Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}} .e-form__buttons__wrapper__button-next' => 'border-color: {{VALUE}};',
					'{{WRAPPER}} .elementor-button[type="submit"]' => 'border-color: {{VALUE}};',
				],
				'condition' => [
					'button_border_border!' => '',
				],
			]
		);

		$this->add_control(
			'heading_previous_button',
			[
				'label' => __( 'Previous Button', 'elementor-pro' ),
				'type' => Controls_Manager::HEADING,
			]
		);

		$this->add_control(
			'previous_button_background_color',
			[
				'label' => __( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'global' => [
					'default' => Global_Colors::COLOR_ACCENT,
				],
				'selectors' => [
					'{{WRAPPER}} .e-form__buttons__wrapper__button-previous' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'previous_button_text_color',
			[
				'label' => __( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'default' => '#ffffff',
				'selectors' => [
					'{{WRAPPER}} .e-form__buttons__wrapper__button-previous' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'previous_button_border_color',
			[
				'label' => __( 'Border Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}} .e-form__buttons__wrapper__button-previous' => 'border-color: {{VALUE}};',
				],
				'condition' => [
					'button_border_border!' => '',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'tab_button_hover',
			[
				'label' => __( 'Hover', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'heading_next_submit_button_hover',
			[
				'label' => __( 'Next & Submit Button', 'elementor-pro' ),
				'type' => Controls_Manager::HEADING,
			]
		);

		$this->add_control(
			'button_background_hover_color',
			[
				'label' => __( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}} .e-form__buttons__wrapper__button-next:hover' => 'background-color: {{VALUE}};',
					'{{WRAPPER}} .elementor-button[type="submit"]:hover' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'button_hover_color',
			[
				'label' => __( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'default' => '#ffffff',
				'selectors' => [
					'{{WRAPPER}} .e-form__buttons__wrapper__button-next:hover' => 'color: {{VALUE}};',
					'{{WRAPPER}} .elementor-button[type="submit"]:hover' => 'color: {{VALUE}};',
					'{{WRAPPER}} .elementor-button[type="submit"]:hover svg *' => 'fill: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'button_hover_border_color',
			[
				'label' => __( 'Border Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}} .e-form__buttons__wrapper__button-next:hover' => 'border-color: {{VALUE}};',
					'{{WRAPPER}} .elementor-button[type="submit"]:hover' => 'border-color: {{VALUE}};',
				],
				'condition' => [
					'button_border_border!' => '',
				],
			]
		);

		$this->add_control(
			'heading_previous_button_hover',
			[
				'label' => __( 'Previous Button', 'elementor-pro' ),
				'type' => Controls_Manager::HEADING,
			]
		);

		$this->add_control(
			'previous_button_background_color_hover',
			[
				'label' => __( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}} .e-form__buttons__wrapper__button-previous:hover' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'previous_button_text_color_hover',
			[
				'label' => __( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'default' => '#ffffff',
				'selectors' => [
					'{{WRAPPER}} .e-form__buttons__wrapper__button-previous:hover' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'previous_button_border_color_hover',
			[
				'label' => __( 'Border Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}} .e-form__buttons__wrapper__button-previous:hover' => 'border-color: {{VALUE}};',
				],
				'condition' => [
					'button_border_border!' => '',
				],
			]
		);

		$this->add_control(
			'button_hover_animation',
			[
				'label' => __( 'Animation', 'elementor-pro' ),
				'type' => Controls_Manager::HOVER_ANIMATION,
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->add_control(
			'button_border_radius',
			[
				'label' => __( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%' ],
				'selectors' => [
					'{{WRAPPER}} .elementor-button' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
				'separator' => 'before',
			]
		);

		$this->add_control(
			'button_text_padding',
			[
				'label' => __( 'Text Padding', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					'{{WRAPPER}} .elementor-button' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_messages_style',
			[
				'label' => __( 'Messages', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'message_typography',
				'global' => [
					'default' => Global_Typography::TYPOGRAPHY_TEXT,
				],
				'selector' => '{{WRAPPER}} .elementor-message',
			]
		);

		$this->add_control(
			'success_message_color',
			[
				'label' => __( 'Success Message Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-message.elementor-message-success' => 'color: {{COLOR}};',
				],
			]
		);

		$this->add_control(
			'error_message_color',
			[
				'label' => __( 'Error Message Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-message.elementor-message-danger' => 'color: {{COLOR}};',
				],
			]
		);

		$this->add_control(
			'inline_message_color',
			[
				'label' => __( 'Inline Message Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-message.elementor-help-inline' => 'color: {{COLOR}};',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_steps_style',
			[
				'label' => __( 'Steps', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'steps_typography',
				'global' => [
					'default' => Global_Typography::TYPOGRAPHY_ACCENT,
				],
				'selector' => '{{WRAPPER}} .e-form__indicators__indicator, {{WRAPPER}} .e-form__indicators__indicator__label',
				'conditions' => [
					'terms' => [
						[
							'name' => 'step_type',
							'operator' => '!in',
							'value' => [
								'icon',
								'progress_bar',
							],
						],
					],
				],
			]
		);

		$this->add_responsive_control(
			'steps_gap',
			[
				'label' => __( 'Spacing', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'default' => [
					'size' => 20,
				],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-form-steps-indicators-spacing: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_responsive_control(
			'steps_icon_size',
			[
				'label' => __( 'Icon Size', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'default' => [
					'size' => 15,
					'unit' => 'px',
				],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'size_units' => [ 'px' ],
				'conditions' => [
					'terms' => [
						[
							'name' => 'step_type',
							'operator' => 'in',
							'value' => [
								'icon',
								'icon_text',
							],
						],
					],
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-form-steps-indicator-icon-size: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_responsive_control(
			'steps_padding',
			[
				'label' => __( 'Padding', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'default' => [
					'size' => 30,
					'unit' => 'px',
				],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'size_units' => [ 'px' ],
				'selectors' => [
					'{{WRAPPER}}' => '--e-form-steps-indicator-padding: {{SIZE}}{{UNIT}}',
				],
				'conditions' => [
					'terms' => [
						[
							'name' => 'step_type',
							'operator' => '!in',
							'value' => [
								'text',
								'progress_bar',
							],
						],
					],
				],
			]
		);

		$this->start_controls_tabs( 'steps_state', [
			'condition' => [
				'step_type!' => 'progress_bar',
			],
		] );

		$this->start_controls_tab(
			'tab_steps_state_inactive',
			[
				'label' => __( 'Inactive', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'step_inactive_primary_color',
			[
				'label' => __( 'Primary Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'global' => [
					'default' => Global_Colors::COLOR_TEXT,
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-form-steps-indicator-inactive-primary-color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'step_inactive_secondary_color',
			[
				'label' => __( 'Secondary Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'default' => '#ffffff',
				'selectors' => [
					'{{WRAPPER}}' => '--e-form-steps-indicator-inactive-secondary-color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'tab_steps_state_active',
			[
				'label' => __( 'Active', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'step_active_primary_color',
			[
				'label' => __( 'Primary Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'global' => [
					'default' => Global_Colors::COLOR_ACCENT,
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-form-steps-indicator-active-primary-color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'step_active_secondary_color',
			[
				'label' => __( 'Secondary Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'default' => '#ffffff',
				'selectors' => [
					'{{WRAPPER}}' => '--e-form-steps-indicator-active-secondary-color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'tab_steps_state_completed',
			[
				'label' => __( 'Completed', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'step_completed_primary_color',
			[
				'label' => __( 'Primary Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'global' => [
					'default' => Global_Colors::COLOR_ACCENT,
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-form-steps-indicator-completed-primary-color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'step_completed_secondary_color',
			[
				'label' => __( 'Secondary Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'default' => '#ffffff',
				'condition' => [
					'step_icon_shape!' => 'none',
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-form-steps-indicator-completed-secondary-color: {{VALUE}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->add_responsive_control(
			'step_divider_width',
			[
				'label' => __( 'Divider Width', 'elementor-pro' ),
				'separator' => 'before',
				'type' => Controls_Manager::SLIDER,
				'default' => [
					'size' => 1,
					'unit' => 'px',
				],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'size_units' => [ 'px' ],
				'condition' => [
					'step_type!' => 'progress_bar',
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-form-steps-divider-width: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_responsive_control(
			'step_divider_gap',
			[
				'label' => __( 'Divider Gap', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'default' => [
					'size' => 10,
					'unit' => 'px',
				],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
					],
					'%' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'size_units' => [ 'px', '%' ],
				'condition' => [
					'step_type!' => 'progress_bar',
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-form-steps-divider-gap: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_control(
			'step_progress_bar_color',
			[
				'label' => __( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'global' => [
					'default' => Global_Colors::COLOR_ACCENT,
				],
				'condition' => [
					'step_type' => 'progress_bar',
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-form-steps-indicator-progress-color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'step_progress_bar_background_color',
			[
				'label' => __( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'global' => [
					'default' => Global_Colors::COLOR_TEXT,
				],
				'condition' => [
					'step_type' => 'progress_bar',
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-form-steps-indicator-progress-background-color: {{VALUE}};',
				],
			]
		);

		$this->add_responsive_control(
			'step_progress_bar_height',
			[
				'label' => __( 'Height', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'default' => [
					'size' => 20,
					'unit' => 'px',
				],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'size_units' => [ 'px' ],
				'condition' => [
					'step_type' => 'progress_bar',
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-form-steps-indicator-progress-height: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_control(
			'step_progress_bar_border_radius',
			[
				'label' => __( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'default' => [
					'size' => 0,
					'unit' => 'px',
				],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'size_units' => [ 'px' ],
				'condition' => [
					'step_type' => 'progress_bar',
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-form-steps-indicator-progress-border-radius: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_control(
			'step_progress_bar_percentage_heading',
			[
				'label' => __( 'Percentage', 'elementor-pro' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
				'condition' => [
					'step_type' => 'progress_bar',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'step_progress_bar_percentage__typography',
				'global' => [
					'default' => Global_Typography::TYPOGRAPHY_ACCENT,
				],
				'selector' => '{{WRAPPER}} .e-form__indicators__indicator__progress__meter',
				'condition' => [
					'step_type' => 'progress_bar',
				],
			]
		);

		$this->add_control(
			'step_progress_bar_percentage_color',
			[
				'label' => __( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'global' => [
					'default' => Global_Colors::COLOR_TEXT,
				],
				'condition' => [
					'step_type' => 'progress_bar',
				],
				'selectors' => [
					'{{WRAPPER}}' => '--e-form-steps-indicator-progress-meter-color: {{VALUE}};',
				],
			]
		);

		// End of steps style.
		$this->end_controls_section();

	}

	private function render_icon_with_fallback( $settings ) {
		$migrated = isset( $settings['__fa4_migrated']['selected_button_icon'] );
		$is_new = empty( $settings['button_icon'] ) && Icons_Manager::is_migration_allowed();

		if ( $is_new || $migrated ) {
			Icons_Manager::render_icon( $settings['selected_button_icon'], [ 'aria-hidden' => 'true' ] );
		} else {
			?><i class="<?php echo esc_attr( $settings['button_icon'] ); ?>" aria-hidden="true"></i><?php
		}
	}

	protected function render() {
		$instance = $this->get_settings_for_display();

		if ( ! Plugin::elementor()->editor->is_edit_mode() ) {
			/**
			 * Elementor form Pre render.
			 *
			 * Fires before the from is rendered in the frontend
			 *
			 * @since 2.4.0
			 *
			 * @param array $instance current form settings
			 * @param Form $this current form widget instance
			 */
			do_action( 'elementor-pro/forms/pre_render', $instance, $this );
		}

		$this->add_render_attribute(
			[
				'wrapper' => [
					'class' => [
						'elementor-form-fields-wrapper',
						'elementor-labels-' . $instance['label_position'],
					],
				],
				'submit-group' => [
					'class' => [
						'elementor-field-group',
						'elementor-column',
						'elementor-field-type-submit',
					],
				],
				'button' => [
					'class' => 'elementor-button',
				],
				'icon-align' => [
					'class' => [
						empty( $instance['button_icon_align'] ) ? '' :
							'elementor-align-icon-' . $instance['button_icon_align'],
						'elementor-button-icon',
					],
				],
			]
		);

		if ( empty( $instance['button_width'] ) ) {
			$instance['button_width'] = '100';
		}

		$this->add_render_attribute( 'submit-group', 'class', 'elementor-col-' . $instance['button_width'] . ' e-form__buttons' );

		if ( ! empty( $instance['button_width_tablet'] ) ) {
			$this->add_render_attribute( 'submit-group', 'class', 'elementor-md-' . $instance['button_width_tablet'] );
		}

		if ( ! empty( $instance['button_width_mobile'] ) ) {
			$this->add_render_attribute( 'submit-group', 'class', 'elementor-sm-' . $instance['button_width_mobile'] );
		}

		if ( ! empty( $instance['button_size'] ) ) {
			$this->add_render_attribute( 'button', 'class', 'elementor-size-' . $instance['button_size'] );
		}

		if ( ! empty( $instance['button_type'] ) ) {
			$this->add_render_attribute( 'button', 'class', 'elementor-button-' . $instance['button_type'] );
		}

		if ( $instance['button_hover_animation'] ) {
			$this->add_render_attribute( 'button', 'class', 'elementor-animation-' . $instance['button_hover_animation'] );
		}

		if ( ! empty( $instance['form_id'] ) ) {
			$this->add_render_attribute( 'form', 'id', $instance['form_id'] );
		}

		if ( ! empty( $instance['form_name'] ) ) {
			$this->add_render_attribute( 'form', 'name', $instance['form_name'] );
		}

		if ( ! empty( $instance['button_css_id'] ) ) {
			$this->add_render_attribute( 'button', 'id', $instance['button_css_id'] );
		}

		$referer_title = trim( wp_title( '', false ) );

		if ( ! $referer_title && is_home() ) {
			$referer_title = get_option( 'blogname' );
		}

		?>
		<form class="elementor-form" method="post" <?php echo $this->get_render_attribute_string( 'form' ); ?>>
			<input type="hidden" name="post_id" value="<?php echo Utils::get_current_post_id(); ?>"/>
			<input type="hidden" name="form_id" value="<?php echo $this->get_id(); ?>"/>
			<input type="hidden" name="referer_title" value="<?php echo $referer_title; ?>" />

			<?php if ( is_singular() ) {
				// `queried_id` may be different from `post_id` on Single theme builder templates.
				?>
				<input type="hidden" name="queried_id" value="<?php echo get_the_ID(); ?>"/>
			<?php } ?>

			<div <?php echo $this->get_render_attribute_string( 'wrapper' ); ?>>
				<?php
				foreach ( $instance['form_fields'] as $item_index => $item ) :
					$item['input_size'] = $instance['input_size'];
					$this->form_fields_render_attributes( $item_index, $instance, $item );

					$field_type = $item['field_type'];

					/**
					 * Render form field.
					 *
					 * Filters the field rendered by Elementor Forms.
					 *
					 * @since 1.0.0
					 *
					 * @param array $item       The field value.
					 * @param int   $item_index The field index.
					 * @param Form  $this       An instance of the form.
					 */
					$item = apply_filters( 'elementor_pro/forms/render/item', $item, $item_index, $this );

					/**
					 * Render form field.
					 *
					 * Filters the field rendered by Elementor Forms.
					 *
					 * The dynamic portion of the hook name, `$field_type`, refers to the field type.
					 *
					 * @since 1.0.0
					 *
					 * @param array $item       The field value.
					 * @param int   $item_index The field index.
					 * @param Form  $this       An instance of the form.
					 */
					$item = apply_filters( "elementor_pro/forms/render/item/{$field_type}", $item, $item_index, $this );

					$print_label = ! in_array( $item['field_type'], [ 'hidden', 'html', 'step' ], true );
					?>
				<div <?php echo $this->get_render_attribute_string( 'field-group' . $item_index ); ?>>
					<?php
					if ( $print_label && $item['field_label'] ) {
						echo '<label ' . $this->get_render_attribute_string( 'label' . $item_index ) . '>' . $item['field_label'] . '</label>';
					}

					switch ( $item['field_type'] ) :
						case 'html':
							echo do_shortcode( $item['field_html'] );
							break;
						case 'textarea':
							echo $this->make_textarea_field( $item, $item_index );
							break;

						case 'select':
							echo $this->make_select_field( $item, $item_index );
							break;

						case 'radio':
						case 'checkbox':
							echo $this->make_radio_checkbox_field( $item, $item_index, $item['field_type'] );
							break;
						case 'text':
						case 'email':
						case 'url':
						case 'password':
						case 'hidden':
						case 'search':
							$this->add_render_attribute( 'input' . $item_index, 'class', 'elementor-field-textual' );
							echo '<input size="1" ' . $this->get_render_attribute_string( 'input' . $item_index ) . '>';
							break;
						default:
							$field_type = $item['field_type'];

							/**
							 * Elementor form field render.
							 *
							 * Fires when a field is rendered.
							 *
							 * The dynamic portion of the hook name, `$field_type`, refers to the field type.
							 *
							 * @since 1.0.0
							 *
							 * @param array $item       The field value.
							 * @param int   $item_index The field index.
							 * @param Form  $this       An instance of the form.
							 */
							do_action( "elementor_pro/forms/render_field/{$field_type}", $item, $item_index, $this );
					endswitch;
					?>
				</div>
				<?php endforeach; ?>
				<div <?php echo $this->get_render_attribute_string( 'submit-group' ); ?>>
					<button type="submit" <?php echo $this->get_render_attribute_string( 'button' ); ?>>
						<span <?php echo $this->get_render_attribute_string( 'content-wrapper' ); ?>>
							<?php if ( ! empty( $instance['button_icon'] ) || ! empty( $instance['selected_button_icon'] ) ) : ?>
								<span <?php echo $this->get_render_attribute_string( 'icon-align' ); ?>>
									<?php $this->render_icon_with_fallback( $instance ); ?>
									<?php if ( empty( $instance['button_text'] ) ) : ?>
										<span class="elementor-screen-only"><?php _e( 'Submit', 'elementor-pro' ); ?></span>
									<?php endif; ?>
								</span>
							<?php endif; ?>
							<?php if ( ! empty( $instance['button_text'] ) ) : ?>
								<span class="elementor-button-text"><?php echo $instance['button_text']; ?></span>
							<?php endif; ?>
						</span>
					</button>
				</div>
			</div>
		</form>
		<?php
	}

	/**
	 * Render Form widget output in the editor.
	 *
	 * Written as a Backbone JavaScript template and used to generate the live preview.
	 *
	 * @since 2.9.0
	 * @access protected
	 */
	protected function content_template() {
		$submit_text = esc_html__( 'Submit', 'elementor-pro' );
		?>
		<form class="elementor-form" id="{{settings.form_id}}" name="{{settings.form_name}}">
			<div class="elementor-form-fields-wrapper elementor-labels-{{settings.label_position}}">
				<#
					for ( var i in settings.form_fields ) {
						var item = settings.form_fields[ i ];
						item = elementor.hooks.applyFilters( 'elementor_pro/forms/content_template/item', item, i, settings );

						var options = item.field_options ? item.field_options.split( '\n' ) : [],
							itemClasses = _.escape( item.css_classes ),
							labelVisibility = '',
							placeholder = '',
							required = '',
							inputField = '',
							multiple = '',
							fieldGroupClasses = 'elementor-field-group elementor-column elementor-field-type-' + item.field_type,
							printLabel = settings.show_labels && ! [ 'hidden', 'html', 'step' ].includes( item.field_type );

						fieldGroupClasses += ' elementor-col-' + ( ( '' !== item.width ) ? item.width : '100' );

						if ( item.width_tablet ) {
							fieldGroupClasses += ' elementor-md-' + item.width_tablet;
						}

						if ( item.width_mobile ) {
							fieldGroupClasses += ' elementor-sm-' + item.width_mobile;
						}

						if ( item.required ) {
							required = 'required';
							fieldGroupClasses += ' elementor-field-required';

							if ( settings.mark_required ) {
								fieldGroupClasses += ' elementor-mark-required';
							}
						}

						if ( item.placeholder ) {
							placeholder = 'placeholder="' + _.escape( item.placeholder ) + '"';
						}

						if ( item.allow_multiple ) {
							multiple = ' multiple';
							fieldGroupClasses += ' elementor-field-type-' + item.field_type + '-multiple';
						}

						switch ( item.field_type ) {
							case 'step':
								inputField = `<div
									class="e-field-step elementor-hidden"
									data-label="${ item.field_label }"
									data-previousButton="${ item.previous_button || '' }"
									data-nextButton="${ item.next_button || '' }"
									data-iconUrl="${ 'svg' === item.selected_icon.library && item.selected_icon.value ? item.selected_icon.value.url : '' }"
									data-iconLibrary="${ 'svg' !== item.selected_icon.library && item.selected_icon.value ? item.selected_icon.value : '' }"></div>`;
								break;
							case 'html':
								inputField = item.field_html;
								break;

							case 'textarea':
								inputField = '<textarea class="elementor-field elementor-field-textual elementor-size-' + settings.input_size + ' ' + itemClasses + '" name="form_field_' + i + '" id="form_field_' + i + '" rows="' + item.rows + '" ' + required + ' ' + placeholder + '>' + item.field_value + '</textarea>';
								break;

							case 'select':
								if ( options ) {
									var size = '';
									if ( item.allow_multiple && item.select_size ) {
										size = ' size="' + item.select_size + '"';
									}
									inputField = '<div class="elementor-field elementor-select-wrapper ' + itemClasses + '">';
									inputField += '<select class="elementor-field-textual elementor-size-' + settings.input_size + '" name="form_field_' + i + '" id="form_field_' + i + '" ' + required + multiple + size + ' >';
									for ( var x in options ) {
										var option_value = options[ x ];
										var option_label = options[ x ];
										var option_id = 'form_field_option' + i + x;

										if ( options[ x ].indexOf( '|' ) > -1 ) {
											var label_value = options[ x ].split( '|' );
											option_label = label_value[0];
											option_value = label_value[1];
										}

										view.addRenderAttribute( option_id, 'value', option_value );
										if ( item.field_value.split( ',' ) .indexOf( option_value ) ) {
											view.addRenderAttribute( option_id, 'selected', 'selected' );
										}
										inputField += '<option ' + view.getRenderAttributeString( option_id ) + '>' + option_label + '</option>';
									}
									inputField += '</select></div>';
								}
								break;

							case 'radio':
							case 'checkbox':
								if ( options ) {
									var multiple = '';

									if ( 'checkbox' === item.field_type && options.length > 1 ) {
										multiple = '[]';
									}

									inputField = '<div class="elementor-field-subgroup ' + itemClasses + ' ' + item.inline_list + '">';

									for ( var x in options ) {
										var option_value = options[ x ];
										var option_label = options[ x ];
										var option_id = 'form_field_' + item.field_type + i + x;
										if ( options[x].indexOf( '|' ) > -1 ) {
											var label_value = options[x].split( '|' );
											option_label = label_value[0];
											option_value = label_value[1];
										}

										view.addRenderAttribute( option_id, {
											value: option_value,
											type: item.field_type,
											id: 'form_field_' + i + '-' + x,
											name: 'form_field_' + i + multiple
										} );

										if ( option_value ===  item.field_value ) {
											view.addRenderAttribute( option_id, 'checked', 'checked' );
										}

										inputField += '<span class="elementor-field-option"><input ' + view.getRenderAttributeString( option_id ) + ' ' + required + '> ';
										inputField += '<label for="form_field_' + i + '-' + x + '">' + option_label + '</label></span>';

									}

									inputField += '</div>';
								}
								break;

							case 'text':
							case 'email':
							case 'url':
							case 'password':
							case 'number':
							case 'search':
								itemClasses = 'elementor-field-textual ' + itemClasses;
								inputField = '<input size="1" type="' + item.field_type + '" value="' + item.field_value + '" class="elementor-field elementor-size-' + settings.input_size + ' ' + itemClasses + '" name="form_field_' + i + '" id="form_field_' + i + '" ' + required + ' ' + placeholder + ' >';
								break;
							default:
								inputField = elementor.hooks.applyFilters( 'elementor_pro/forms/content_template/field/' + item.field_type, '', item, i, settings );
						}

						if ( inputField ) {
							#>
							<div class="{{ fieldGroupClasses }}">

								<# if ( printLabel && item.field_label ) { #>
									<label class="elementor-field-label" for="form_field_{{ i }}" {{{ labelVisibility }}}>{{{ item.field_label }}}</label>
								<# } #>

								{{{ inputField }}}
							</div>
							<#
						}
					}


					var buttonClasses = 'elementor-field-group elementor-column elementor-field-type-submit e-form__buttons';

					buttonClasses += ' elementor-col-' + ( ( '' !== settings.button_width ) ? settings.button_width : '100' );

					if ( settings.button_width_tablet ) {
						buttonClasses += ' elementor-md-' + settings.button_width_tablet;
					}

					if ( settings.button_width_mobile ) {
						buttonClasses += ' elementor-sm-' + settings.button_width_mobile;
					}

					var iconHTML = elementor.helpers.renderIcon( view, settings.selected_button_icon, { 'aria-hidden': true }, 'i' , 'object' ),
						migrated = elementor.helpers.isIconMigrated( settings, 'selected_button_icon' );

					#>

					<div class="{{ buttonClasses }}">
						<button id="{{ settings.button_css_id }}" type="submit" class="elementor-button elementor-size-{{ settings.button_size }} elementor-button-{{ settings.button_type }} elementor-animation-{{ settings.button_hover_animation }}">
							<span>
								<# if ( settings.button_icon || settings.selected_button_icon ) { #>
									<span class="elementor-button-icon elementor-align-icon-{{ settings.button_icon_align }}">
										<# if ( iconHTML && iconHTML.rendered && ( ! settings.button_icon || migrated ) ) { #>
											{{{ iconHTML.value }}}
										<# } else { #>
											<i class="{{ settings.button_icon }}" aria-hidden="true"></i>
										<# } #>
										<span class="elementor-screen-only"><?php echo $submit_text; ?></span>
									</span>
								<# } #>

								<# if ( settings.button_text ) { #>
									<span class="elementor-button-text">{{{ settings.button_text }}}</span>
								<# } #>
							</span>
						</button>
					</div>
			</div>
		</form>
		<?php
	}
}
