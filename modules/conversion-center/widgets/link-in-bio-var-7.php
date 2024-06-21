<?php

namespace ElementorPro\Modules\ConversionCenter\Widgets;

use Elementor\Controls_Manager;
use Elementor\Group_Control_Typography;
use Elementor\Modules\ConversionCenter\Base\Widget_Link_In_Bio_Base;
use Elementor\Modules\ConversionCenter\Classes\Providers\Social_Network_Provider;
use ElementorPro\Modules\ConversionCenter\Classes\Render\Single_Button_Cta_Render;
use Elementor\Shapes;


if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Link_In_Bio_Var_7 extends Widget_Link_In_Bio_Base {

	public static function get_configuration() {
		$config = parent::get_configuration();
		$config['content']['identity_section']['identity_image_style'] = false;
		$config['content']['identity_section']['has_profile_image_controls'] = true;
		$config['content']['identity_section']['has_heading_text'] = esc_html__( 'Profile', 'elementor-pro' );
		$config['content']['bio_section']['description']['default'] = esc_html__(
			'I combine my love of food and storytelling to create beautiful photos.',
			'elementor-pro'
		);
		$config['content']['icon_section']['platform']['group-1'][] = Social_Network_Provider::URL;
		$config['content']['icon_section']['platform']['limit'] = 0;
		$config['content']['icon_section']['default'] = self::get_default_icons();
		$config['content']['icon_section']['has_text'] = true;
		$config['content']['bio_section']['has_about_field'] = true;
		$config['content']['bio_section']['description']['position'] = 'bottom';
		$config['style']['identity_section']['has_profile_image_shape'] = false;

		// Temporarily supressing CTAs for this variant
		$config['content']['cta_section'] = false;
		$config['style']['cta_section'] = false;

		// $config['style']['cta_section']['has_link_type'] = false;
		// $config['style']['cta_section']['has_corners']['default'] = 'round';
		// $config['style']['cta_section']['has_padding'] = true;
		// $config['style']['cta_section']['has_border_control']['label'] = esc_html__( 'Image Border', 'elementor-pro' );
		// $config['style']['cta_section']['has_border_control']['show_border_args'] = [];
		// $config['style']['cta_section']['has_border_control']['border_width_args'] = [];
		// $config['style']['cta_section']['has_border_control']['border_color_args'] = [];

		return $config;
	}

	private static function get_default_icons(): array {
		return [
			[
				'icon_platform' => Social_Network_Provider::TELEPHONE,
				'icon_text' => 'Call',
			],
			[
				'icon_platform' => Social_Network_Provider::EMAIL,
				'icon_text' => 'Email',
			],
			[
				'icon_platform' => Social_Network_Provider::WHATSAPP,
				'icon_text' => 'WhatsApp',
			],
			[
				'icon_platform' => Social_Network_Provider::INSTAGRAM,
				'icon_text' => 'Instagram',
			],
			[
				'icon_platform' => Social_Network_Provider::LINKEDIN,
				'icon_text' => 'LinkedIn',
			],
			[
				'icon_platform' => Social_Network_Provider::BEHANCE,
				'icon_text' => 'Behance',
			],
		];
	}

	public function get_description_position() {
		return 'bottom';
	}

	public function get_name(): string {
		return 'link-in-bio-var-7';
	}

	public function get_title(): string {
		return esc_html__( 'Link In Bio Variation 7', 'elementor-pro' );
	}

	public function render(): void {
		$render_strategy = new Single_Button_Cta_Render( $this );

		$render_strategy->render();
	}

	protected function register_controls(): void {
		parent::register_controls();

		$this->start_injection(
			[
				'type' => 'section',
				'at' => 'start',
				'of' => 'icons_section',
			]
		);

		$this->add_icons_per_row_control();

		$this->end_injection();
	}

	protected function add_cta_controls() {

		$config = static::get_configuration();

		if ( empty( $config['content']['cta_section'] ) ) {
			return;
		}

		$this->start_controls_section(
			'cta_section',
			[
				'label' => esc_html__( 'CTA Button', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_CONTENT,
			]
		);

		$this->add_control(
			'cta_section_button_text',
			[
				'label' => esc_html__( 'Button Text', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => esc_html__( 'Save Contact', 'elementor-pro' ),
				'dynamic' => [
					'active' => true,
				],
				'ai' => [
					'active' => false,
				],
			]
		);

		$this->add_control(
			'cta_link_type',
			[
				'label' => esc_html__( 'Link Type', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'groups' => [

					[
						'label' => '',
						'options' => Social_Network_Provider::get_social_networks_text(
							[
								Social_Network_Provider::VCF,
								Social_Network_Provider::URL,
							]
						),
					],
					[
						'label' => '   --',
						'options' => Social_Network_Provider::get_social_networks_text(
							[
								Social_Network_Provider::EMAIL,
								Social_Network_Provider::TELEPHONE,
								Social_Network_Provider::MESSENGER,
								Social_Network_Provider::WAZE,
								Social_Network_Provider::WHATSAPP,
							]
						),
					],
				],
				'default' => Social_Network_Provider::VCF,
			],
		);

		$this->add_control(
			'cta_section_alert',
			[
				'type' => Controls_Manager::ALERT,
				'alert_type' => 'info',
				'content' => sprintf(
					__( 'Upload your card in .vcf format', 'elementor-pro' ),
					4
				),
			]
		);

		$this->add_control(
			'cta_link_file',
			[
				'label' => esc_html__( 'Choose File', 'elementor-pro' ),
				'type' => Controls_Manager::MEDIA,
				'label_block' => true,
				'media_type' => [ 'application/vcf' ],
				'condition' => [
					'cta_link_type' => Social_Network_Provider::VCF,
				],
			],
		);

		$this->add_control(
			'cta_link_url',
			[
				'label' => esc_html__( 'Link', 'elementor-pro' ),
				'type' => Controls_Manager::URL,
				'options' => false,
				'dynamic' => [
					'active' => true,
				],
				'autocomplete' => true,
				'label_block' => true,
				'condition' => [
					'cta_link_type' => [
						Social_Network_Provider::URL,
					],
				],
				'placeholder' => esc_html__( 'Enter your link', 'elementor-pro' ),
			],
		);

		$this->add_control(
			'cta_link_mail',
			[
				'label' => esc_html__( 'Email', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
				],
				'label_block' => true,
				'condition' => [
					'cta_link_type' => [
						Social_Network_Provider::EMAIL,
					],
				],
				'placeholder' => esc_html__( 'Enter your email', 'elementor-pro' ),
			],
		);

		$this->add_control(
			'cta_link_mail_subject',
			[
				'label' => esc_html__( 'Subject', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
				],
				'label_block' => true,
				'condition' => [
					'cta_link_type' => [
						Social_Network_Provider::EMAIL,
					],
				],
				'placeholder' => esc_html__( 'Subject', 'elementor-pro' ),
			],
		);

		$this->add_control(
			'cta_link_mail_body',
			[
				'label' => esc_html__( 'Message', 'elementor-pro' ),
				'type' => Controls_Manager::TEXTAREA,
				'dynamic' => [
					'active' => true,
				],
				'label_block' => true,
				'condition' => [
					'cta_link_type' => [
						Social_Network_Provider::EMAIL,
					],
				],
				'placeholder' => esc_html__( 'Message', 'elementor-pro' ),
			],
		);

		$this->add_control(
			'cta_link_number',
			[
				'label' => esc_html__( 'Number', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
				],
				'label_block' => true,
				'condition' => [
					'cta_link_type' => [
						Social_Network_Provider::TELEPHONE,
						Social_Network_Provider::WHATSAPP,
					],
				],
				'placeholder' => esc_html__( 'Enter your number', 'elementor-pro' ),
			],
		);

		$this->add_control(
			'cta_link_location',
			[
				'label' => esc_html__( 'Location', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
				],
				'label_block' => true,
				'condition' => [
					'cta_link_type' => [
						Social_Network_Provider::WAZE,
					],
				],
				'placeholder' => esc_html__( 'Enter your location', 'elementor-pro' ),
			],
		);

		$this->add_control(
			'cta_link_username',
			[
				'label' => esc_html__( 'Username', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
				],
				'label_block' => true,
				'condition' => [
					'cta_link_type' => [
						Social_Network_Provider::MESSENGER,
					],
				],
				'placeholder' => esc_html__( 'Enter your username', 'elementor-pro' ),
			],
		);

		$this->end_controls_section();
	}

	protected function add_style_identity_controls(): void {
		$this->start_controls_section(
			'identity_section_style',
			[
				'label' => esc_html__( 'Identity', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'identity_section_style_cover_heading',
			[
				'label' => esc_html__( 'Cover', 'elementor-pro' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'none',
			]
		);

		$this->add_identity_image_cover_control( [] );

		$this->add_control(
			'identity_section_style_profile_heading',
			[
				'label' => esc_html__( 'Profile', 'elementor-pro' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->add_identity_image_profile_controls( [] );

		$this->add_control(
			'identity_section_style_divider_heading',
			[
				'label' => esc_html__( 'Shape Divider', 'elementor-pro' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$shapes_options = [
			'' => esc_html__( 'None', 'elementor-pro' ),
		];

		foreach ( Shapes::get_shapes() as $shape_name => $shape_props ) {
			$shapes_options[ $shape_name ] = $shape_props['title'];
		}

		$shape_divider_side = 'bottom';
		$shape_divider_base_control_key = "identity_section_style_cover_divider_$shape_divider_side";

		$this->add_control(
			$shape_divider_base_control_key,
			[
				'label' => esc_html__( 'Type', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => $shapes_options,
			]
		);

		$this->add_control(
			$shape_divider_base_control_key . '_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'condition' => [
					"$shape_divider_base_control_key!" => '',
				],
				'selectors' => [
					"{{WRAPPER}} .e-link-in-bio__identity-image .elementor-shape-$shape_divider_side .elementor-shape-fill" => 'fill: {{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			$shape_divider_base_control_key . '_width',
			[
				'label' => esc_html__( 'Width', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ '%', 'vw', 'custom' ],
				'default' => [
					'unit' => '%',
				],
				'tablet_default' => [
					'unit' => '%',
				],
				'mobile_default' => [
					'unit' => '%',
				],
				'range' => [
					'%' => [
						'min' => 100,
						'max' => 300,
						'step' => 1,
					],
					'vw' => [
						'min' => 100,
						'max' => 300,
						'step' => 1,
					],
				],
				'condition' => [
					"$shape_divider_base_control_key" => array_keys( Shapes::filter_shapes( 'height_only', Shapes::FILTER_EXCLUDE ) ),
				],
				'selectors' => [
					"{{WRAPPER}} .e-link-in-bio__identity-image .elementor-shape-$shape_divider_side svg" => 'width: calc({{SIZE}}{{UNIT}} + 1.3px)',
				],
			]
		);

		$this->add_responsive_control(
			$shape_divider_base_control_key . '_height',
			[
				'label' => esc_html__( 'Height', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'max' => 500,
					],
					'em' => [
						'max' => 50,
					],
					'rem' => [
						'max' => 50,
					],
				],
				'condition' => [
					"$shape_divider_base_control_key!" => '',
				],
				'selectors' => [
					"{{WRAPPER}} .e-link-in-bio__identity-image .elementor-shape-$shape_divider_side svg" => 'height: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			$shape_divider_base_control_key . '_negative',
			[
				'label' => esc_html__( 'Invert', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'condition' => [
					"$shape_divider_base_control_key" => array_keys( Shapes::filter_shapes( 'has_negative' ) ),
				],
			]
		);

		$this->end_controls_section();
	}

	protected function add_style_bio_controls(): void {
		parent::add_style_bio_controls();

		$this->start_injection(
			[
				'type' => 'control',
				'at' => 'before',
				'of' => 'bio_description_heading',
			]
		);

		$this->add_control(
			'bio_about_heading',
			[
				'label' => esc_html__( 'About Heading', 'elementor-pro' ),
				'type' => Controls_Manager::HEADING,
				'separator' => 'before',
			]
		);

		$this->add_control(
			'bio_about_text_color',
			[
				'label' => esc_html__( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .e-link-in-bio' => '--e-link-in-bio-about-heading-color: {{VALUE}}',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'bio_about_typography',
				'selector' => '{{WRAPPER}} .e-link-in-bio__about-heading',
			]
		);

		$this->end_injection();
	}

	public function add_style_icons_controls(): void {
		parent::add_style_icons_controls();

		$this->start_injection(
			[
				'type' => 'control',
				'at' => 'after',
				'of' => 'icons_color',
			]
		);

		$this->add_control(
			'icons_color_background',
			[
				'label' => esc_html__( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .e-link-in-bio' => '--e-link-in-bio-icon-background-color: {{VALUE}}',
				],
			]
		);

		$this->add_borders_control(
			'icons_border',
			[
				'selectors' => [],
			],
			[
				'selectors' => [
					'{{WRAPPER}} .e-link-in-bio' => '--e-link-in-bio-icon-border-width: {{SIZE}}{{UNIT}}',
				],
			],
			[
				'selectors' => [
					'{{WRAPPER}} .e-link-in-bio' => '--e-link-in-bio-icon-border-color: {{VALUE}}',
				],
			]
		);

		$this->end_injection();
	}

}
