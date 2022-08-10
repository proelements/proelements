<?php
namespace ElementorPro\Modules\ShareButtons\Widgets;

use Elementor\Controls_Manager;
use Elementor\Group_Control_Typography;
use Elementor\Icons_Manager;
use Elementor\Repeater;
use Elementor\Utils;
use ElementorPro\Base\Base_Widget;
use ElementorPro\Modules\ShareButtons\Module;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Share_Buttons extends Base_Widget {

	private static $networks_class_dictionary = [
		'pocket' => [
			'value' => 'fa fa-get-pocket',
		],
		'email' => [
			'value' => 'fa fa-envelope',
		],
	];

	private static $networks_icon_mapping = [
		'pocket' => [
			'value' => 'fab fa-get-pocket',
			'library' => 'fa-brands',
		],
		'email' => [
			'value' => 'fas fa-envelope',
			'library' => 'fa-solid',
		],
		'print' => [
			'value' => 'fas fa-print',
			'library' => 'fa-solid',
		],
	];

	public function get_style_depends() {
		if ( Icons_Manager::is_migration_allowed() ) {
			return [
				'elementor-icons-fa-solid',
				'elementor-icons-fa-brands',
			];
		}
		return [];
	}

	private static function get_network_icon_data( $network_name ) {
		$prefix = 'fa ';
		$library = '';

		if ( Icons_Manager::is_migration_allowed() ) {
			if ( isset( self::$networks_icon_mapping[ $network_name ] ) ) {
				return self::$networks_icon_mapping[ $network_name ];
			}
			$prefix = 'fab ';
			$library = 'fa-brands';
		}
		if ( isset( self::$networks_class_dictionary[ $network_name ] ) ) {
			return self::$networks_class_dictionary[ $network_name ];
		}

		return [
			'value' => $prefix . 'fa-' . $network_name,
			'library' => $library,
		];
	}

	public function get_name() {
		return 'share-buttons';
	}

	public function get_title() {
		return esc_html__( 'Share Buttons', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-share';
	}

	public function get_keywords() {
		return [ 'sharing', 'social', 'icon', 'button', 'like' ];
	}

	protected function register_controls() {
		$this->start_controls_section(
			'section_buttons_content',
			[
				'label' => esc_html__( 'Share Buttons', 'elementor-pro' ),
			]
		);

		$repeater = new Repeater();

		$networks = Module::get_networks();

		$networks_names = array_keys( $networks );

		$repeater->add_control(
			'button',
			[
				'label' => esc_html__( 'Network', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => array_reduce( $networks_names, function( $options, $network_name ) use ( $networks ) {
					$options[ $network_name ] = $networks[ $network_name ]['title'];

					return $options;
				}, [] ),
				'default' => 'facebook',
			]
		);

		$repeater->add_control(
			'text',
			[
				'label' => esc_html__( 'Custom Label', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
				],
			]
		);

		$this->add_control(
			'share_buttons',
			[
				'type' => Controls_Manager::REPEATER,
				'fields' => $repeater->get_controls(),
				'default' => [
					[
						'button' => 'facebook',
					],
					[
						'button' => 'twitter',
					],
					[
						'button' => 'linkedin',
					],
				],
				'title_field' => '<i class="{{ elementorPro.modules.shareButtons.getNetworkClass( button ) }}" aria-hidden="true"></i> {{{ elementorPro.modules.shareButtons.getNetworkTitle( obj ) }}}',
			]
		);

		$this->add_control(
			'view',
			[
				'label' => esc_html__( 'View', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'icon-text' => 'Icon & Text',
					'icon' => 'Icon',
					'text' => 'Text',
				],
				'default' => 'icon-text',
				'separator' => 'before',
				'prefix_class' => 'elementor-share-buttons--view-',
				'render_type' => 'template',
			]
		);

		$this->add_control(
			'show_label',
			[
				'label' => esc_html__( 'Label', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => esc_html__( 'Show', 'elementor-pro' ),
				'label_off' => esc_html__( 'Hide', 'elementor-pro' ),
				'default' => 'yes',
				'condition' => [
					'view' => 'icon-text',
				],
			]
		);

		$this->add_control(
			'skin',
			[
				'label' => esc_html__( 'Skin', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'gradient' => esc_html__( 'Gradient', 'elementor-pro' ),
					'minimal' => esc_html__( 'Minimal', 'elementor-pro' ),
					'framed' => esc_html__( 'Framed', 'elementor-pro' ),
					'boxed' => esc_html__( 'Boxed Icon', 'elementor-pro' ),
					'flat' => esc_html__( 'Flat', 'elementor-pro' ),
				],
				'default' => 'gradient',
				'prefix_class' => 'elementor-share-buttons--skin-',
			]
		);

		$this->add_control(
			'shape',
			[
				'label' => esc_html__( 'Shape', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'square' => esc_html__( 'Square', 'elementor-pro' ),
					'rounded' => esc_html__( 'Rounded', 'elementor-pro' ),
					'circle' => esc_html__( 'Circle', 'elementor-pro' ),
				],
				'default' => 'square',
				'prefix_class' => 'elementor-share-buttons--shape-',
			]
		);

		$this->add_responsive_control(
			'columns',
			[
				'label' => esc_html__( 'Columns', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => '0',
				'options' => [
					'0' => 'Auto',
					'1' => '1',
					'2' => '2',
					'3' => '3',
					'4' => '4',
					'5' => '5',
					'6' => '6',
				],
				'prefix_class' => 'elementor-grid%s-',
			]
		);

		$this->add_responsive_control(
			'alignment',
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
					'justify' => [
						'title' => esc_html__( 'Justify', 'elementor-pro' ),
						'icon' => 'eicon-text-align-justify',
					],
				],
				/* TODO: `prefix_class` is redundant since v3.1.0
				 * It is only here for backwards compatibility reasons.
				 * It should be removed in the future.
				 */
				'prefix_class' => 'elementor-share-buttons%s--align-',
				/*---------------------------------------------------*/
				'condition' => [
					'columns' => '0',
				],
				/* `selectors` was added on v3.1.0 as a superior alternative to the previous `prefix_class` solution */
				'selectors' => [
					'{{WRAPPER}}' => '--alignment: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'share_url_type',
			[
				'label' => esc_html__( 'Target URL', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'current_page' => esc_html__( 'Current Page', 'elementor-pro' ),
					'custom' => esc_html__( 'Custom', 'elementor-pro' ),
				],
				'default' => 'current_page',
				'separator' => 'before',
			]
		);

		$this->add_control(
			'share_url',
			[
				'label' => esc_html__( 'Link', 'elementor-pro' ),
				'type' => Controls_Manager::URL,
				'dynamic' => [
					'active' => true,
				],
				'options' => false,
				'placeholder' => esc_html__( 'https://your-link.com', 'elementor-pro' ),
				'condition' => [
					'share_url_type' => 'custom',
				],
				'show_label' => false,
				'frontend_available' => true,
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_buttons_style',
			[
				'label' => esc_html__( 'Share Buttons', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_responsive_control(
			'column_gap',
			[
				'label' => esc_html__( 'Columns Gap', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'default' => [
					'size' => 10,
				],
				'selectors' => [
					'{{WRAPPER}}' => '--grid-side-margin: {{SIZE}}{{UNIT}}; --grid-column-gap: {{SIZE}}{{UNIT}}; --grid-row-gap: {{SIZE}}{{UNIT}}',
					'(tablet) {{WRAPPER}}' => '--grid-side-margin: {{SIZE}}{{UNIT}}; --grid-column-gap: {{SIZE}}{{UNIT}}',
					'(mobile) {{WRAPPER}}' => '--grid-side-margin: {{SIZE}}{{UNIT}}; --grid-column-gap: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_responsive_control(
			'row_gap',
			[
				'label' => esc_html__( 'Rows Gap', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'default' => [
					'size' => 10,
				],
				'selectors' => [
					'{{WRAPPER}}' => '--grid-row-gap: {{SIZE}}{{UNIT}}; --grid-bottom-margin: {{SIZE}}{{UNIT}}',
					'(tablet) {{WRAPPER}}' => '--grid-row-gap: {{SIZE}}{{UNIT}}; --grid-bottom-margin: {{SIZE}}{{UNIT}}',
					'(mobile) {{WRAPPER}}' => '--grid-row-gap: {{SIZE}}{{UNIT}}; --grid-bottom-margin: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_responsive_control(
			'button_size',
			[
				'label' => esc_html__( 'Button Size', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'range' => [
					'px' => [
						'min' => 0.5,
						'max' => 2,
						'step' => 0.05,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-share-btn' => 'font-size: calc({{SIZE}}{{UNIT}} * 10);',
				],
			]
		);

		$this->add_responsive_control(
			'icon_size',
			[
				'label' => esc_html__( 'Icon Size', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'range' => [
					'em' => [
						'min' => 0.5,
						'max' => 4,
						'step' => 0.1,
					],
					'px' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'default' => [
					'unit' => 'em',
				],
				'tablet_default' => [
					'unit' => 'em',
				],
				'mobile_default' => [
					'unit' => 'em',
				],
				'size_units' => [ 'em', 'px' ],
				'selectors' => [
					'{{WRAPPER}} .elementor-share-btn__icon' => '--e-share-buttons-icon-size: {{SIZE}}{{UNIT}};',
				],
				'condition' => [
					'view!' => 'text',
				],
			]
		);

		$this->add_responsive_control(
			'button_height',
			[
				'label' => esc_html__( 'Button Height', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'range' => [
					'em' => [
						'min' => 1,
						'max' => 7,
						'step' => 0.1,
					],
					'px' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'default' => [
					'unit' => 'em',
				],
				'tablet_default' => [
					'unit' => 'em',
				],
				'mobile_default' => [
					'unit' => 'em',
				],
				'size_units' => [ 'em', 'px' ],
				'selectors' => [
					'{{WRAPPER}} .elementor-share-btn' => 'height: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'border_size',
			[
				'label' => esc_html__( 'Border Size', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em' ],
				'default' => [
					'size' => 2,
				],
				'range' => [
					'px' => [
						'min' => 1,
						'max' => 20,
					],
					'em' => [
						'max' => 2,
						'step' => 0.1,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-share-btn' => 'border-width: {{SIZE}}{{UNIT}};',
				],
				'condition' => [
					'skin' => [ 'framed', 'boxed' ],
				],
			]
		);

		$this->add_control(
			'color_source',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'official' => esc_html__( 'Official', 'elementor-pro' ),
					'custom' => esc_html__( 'Custom', 'elementor-pro' ),
				],
				'default' => 'official',
				'prefix_class' => 'elementor-share-buttons--color-',
				'separator' => 'before',
			]
		);

		$this->start_controls_tabs(
			'tabs_button_style',
			[
				'condition' => [
					'color_source' => 'custom',
				],
			]
		);

		$this->start_controls_tab(
			'tab_button_normal',
			[
				'label' => esc_html__( 'Normal', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'primary_color',
			[
				'label' => esc_html__( 'Primary Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}}' => '--e-share-buttons-primary-color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'secondary_color',
			[
				'label' => esc_html__( 'Secondary Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}}' => '--e-share-buttons-secondary-color: {{VALUE}}',
				],
				'separator' => 'after',
				'condition' => [
					'skin!' => 'framed',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'tab_button_hover',
			[
				'label' => esc_html__( 'Hover', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'primary_color_hover',
			[
				'label' => esc_html__( 'Primary Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-share-btn:hover' => '--e-share-buttons-primary-color: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'secondary_color_hover',
			[
				'label' => esc_html__( 'Secondary Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-share-btn:hover' => '--e-share-buttons-secondary-color: {{VALUE}}',
				],
				'separator' => 'after',
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'typography',
				'selector' => '{{WRAPPER}} .elementor-share-btn__title',
				'exclude' => [ 'line_height' ],
			]
		);

		$this->add_control(
			'text_padding',
			[
				'label' => esc_html__( 'Text Padding', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					'{{WRAPPER}} a.elementor-button' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
				'separator' => 'before',
				'condition' => [
					'view' => 'text',
				],
			]
		);

		$this->end_controls_section();

	}

	protected function render() {
		$settings = $this->get_settings_for_display();

		if ( empty( $settings['share_buttons'] ) ) {
			return;
		}

		$button_classes = 'elementor-share-btn';

		$show_text = 'text' === $settings['view'] || 'yes' === $settings['show_label'];
		?>
		<div class="elementor-grid">
			<?php
			$networks_data = Module::get_networks();

			foreach ( $settings['share_buttons'] as $button ) {
				$network_name = $button['button'];

				// A deprecated network.
				if ( ! isset( $networks_data[ $network_name ] ) ) {
					continue;
				}

				$social_network_class = ' elementor-share-btn_' . $network_name;
				?>
					<div class="elementor-grid-item">
						<div class="<?php echo esc_attr( $button_classes . $social_network_class ); ?>" tabindex="0" aria-label="<?php echo sprintf( esc_attr__( 'Share on %s', 'elementor-pro' ), esc_attr( $network_name ) ); ?>">
							<?php if ( 'icon' === $settings['view'] || 'icon-text' === $settings['view'] ) : ?>
								<span class="elementor-share-btn__icon">
								<?php self::render_share_icon( $network_name ); ?>
							</span>
							<?php endif; ?>
							<?php if ( $show_text ) : ?>
								<div class="elementor-share-btn__text">
									<?php if ( 'yes' === $settings['show_label'] || 'text' === $settings['view'] ) : ?>
										<span class="elementor-share-btn__title">
										<?php
										// PHPCS - the main text of a widget should not be escaped.
										echo $button['text'] ? $button['text'] : $networks_data[ $network_name ]['title']; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
										?>
									</span>
									<?php endif; ?>
								</div>
							<?php endif; ?>
						</div>
					</div>
				<?php
			}
			?>
		</div>
		<?php
	}

	/**
	 * Render Share Buttons widget output in the editor.
	 *
	 * Written as a Backbone JavaScript template and used to generate the live preview.
	 *
	 * @since 2.9.0
	 * @access protected
	 */
	protected function content_template() {
		?>
		<#
			var shareButtonsEditorModule = elementorPro.modules.shareButtons,
				buttonClass = 'elementor-share-btn';

			var showText = 'icon-text' === settings.view ? 'yes' === settings.show_label : 'text' === settings.view;
		#>
		<div class="elementor-grid">
			<#
				_.each( settings.share_buttons, function( button ) {
					// A deprecated network.
					if ( ! shareButtonsEditorModule.getNetworkData( button ) ) {
						return;
					}

					var networkName = button.button,
						socialNetworkClass = 'elementor-share-btn_' + networkName;
					#>
					<div class="elementor-grid-item">
						<div class="{{ buttonClass }} {{ socialNetworkClass }}" tabindex="0" aria-label="Share on {{{ networkName }}}">
							<# if ( 'icon' === settings.view || 'icon-text' === settings.view ) { #>
							<span class="elementor-share-btn__icon">
								<i class="{{ shareButtonsEditorModule.getNetworkClass( networkName ) }}" aria-hidden="true"></i>
							</span>
							<# } #>
							<# if ( showText ) { #>
								<div class="elementor-share-btn__text">
									<# if ( 'yes' === settings.show_label || 'text' === settings.view ) { #>
										<span class="elementor-share-btn__title">{{{ shareButtonsEditorModule.getNetworkTitle( button ) }}}</span>
									<# } #>
								</div>
							<# } #>
						</div>
					</div>
			<#  } ); #>
		</div>
		<?php
	}

	private static function render_share_icon( $network_name ) {
		$network_icon_data = self::get_network_icon_data( $network_name );

		if ( Plugin::elementor()->experiments->is_feature_active( 'e_font_icon_svg' ) ) {
			$icon = Icons_Manager::render_font_icon( $network_icon_data );
		} else {
			$icon = sprintf( '<i class="%s" aria-hidden="true"></i>', $network_icon_data['value'] );
		}

		Utils::print_unescaped_internal_string( $icon );
	}
}
