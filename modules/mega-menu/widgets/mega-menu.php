<?php
namespace ElementorPro\Modules\MegaMenu\Widgets;

use ElementorPro\Plugin;
use Elementor\Controls_Manager;
use Elementor\Modules\NestedElements\Base\Widget_Nested_Base;
use Elementor\Modules\NestedElements\Controls\Control_Nested_Repeater;
use Elementor\Icons_Manager;
use Elementor\Repeater;
use Elementor\Core\Breakpoints\Manager as Breakpoints_Manager;


if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Mega_Menu extends Widget_Nested_Base {

	public function get_name() {
		return 'mega-menu';
	}

	public function get_title() {
		return esc_html__( 'Mega Menu', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-mega-menu';
	}

	public function get_categories() {
		return [ 'theme-elements' ];
	}

	public function get_keywords() {
		return [ 'Mega Menu', 'Nav', 'Nested', 'Tabs' ];
	}

	protected function get_default_children_elements() {
		return [
			[
				'elType' => 'container',
				'settings' => [
					'_title' => __( 'Item #1', 'elementor-pro' ),
				],
			],
			[
				'elType' => 'container',
				'settings' => [
					'_title' => __( 'Item #2', 'elementor-pro' ),
				],
			],
			[
				'elType' => 'container',
				'settings' => [
					'_title' => __( 'Item #3', 'elementor-pro' ),
				],
			],
		];
	}

	protected function get_default_repeater_title_setting_key() {
		return 'item_title';
	}

	protected function get_default_children_title() {
		return esc_html__( 'Item #%d', 'elementor-pro' );
	}

	protected function get_default_children_placeholder_selector() {
		return '.e-n-menu-items-content';
	}

	protected function get_html_wrapper_class() {
		return 'elementor-widget-n-menu';
	}

	protected function register_controls() {
		$this->start_controls_section(
			'section_layout',
			[
				'label' => esc_html__( 'Layout', 'elementor-pro' ),
			]
		);

		$repeater = new Repeater();

		$repeater->add_control(
			'item_title',
			[
				'label' => esc_html__( 'Title', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => esc_html__( 'Item Title', 'elementor-pro' ),
				'dynamic' => [
					'active' => true,
				],
				'label_block' => true,
			]
		);

		$repeater->add_control(
			'element_id',
			[
				'label' => esc_html__( 'CSS ID', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => '',
				'dynamic' => [
					'active' => true,
				],
				'title' => esc_html__( 'Add your custom id WITHOUT the Pound key. e.g: my-id', 'elementor-pro' ),
				'style_transfer' => false, // What is this?
			]
		);

		$repeater->add_control(
			'item_link',
			[
				'label' => esc_html__( 'Link', 'elementor-pro' ),
				'type' => Controls_Manager::URL,
				'placeholder' => esc_html__( 'Paste URL or type', 'elementor-pro' ),
				'dynamic' => [
					'active' => true,
				],
				'frontend_available' => true,
			]
		);

		$repeater->add_control(
			'item_link_only',
			[
				'label' => esc_html__( 'Link Only', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'default' => 'no',
				'description' => esc_html__( 'Turn the menu item into a link without a content area.', 'elementor-pro' ),
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'menu_items',
			[
				'label' => esc_html__( 'Menu Items', 'elementor-pro' ),
				'type' => Control_Nested_Repeater::CONTROL_TYPE,
				'fields' => $repeater->get_controls(),
				'default' => [
					[
						'item_title' => esc_html__( 'Item #1', 'elementor-pro' ),
					],
					[
						'item_title' => esc_html__( 'Item #2', 'elementor-pro' ),
					],
					[
						'item_title' => esc_html__( 'Item #3', 'elementor-pro' ),
					],
				],
				'title_field' => '{{{ item_title }}}',
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'content_width',
			[
				'label' => esc_html__( 'Content Width', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'full_width',
				'options' => [
					'full_width' => esc_html__( 'Full Width', 'elementor-pro' ),
					'fit_to_content' => esc_html__( 'Fit To Content', 'elementor-pro' ),
				],
			]
		);

		$this->add_control(
			'item_layout',
			[
				'label' => esc_html__( 'Item Layout', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'horizontal',
				'options' => [
					'horizontal' => esc_html__( 'Horizontal', 'elementor-pro' ),
					'dropdown' => esc_html__( 'Dropdown', 'elementor-pro' ),
				],
				'prefix_class' => 'e-n-menu-layout-',
			]
		);

		$this->add_responsive_control( 'item_position_horizontal', [
			'label' => esc_html__( 'Item Position', 'elementor-pro' ),
			'type' => Controls_Manager::CHOOSE,
			'options' => [
				'start' => [
					'title' => esc_html__( 'Start', 'elementor-pro' ),
					'icon' => 'eicon-flex eicon-align-start-h',
				],
				'center' => [
					'title' => esc_html__( 'Center', 'elementor-pro' ),
					'icon' => 'eicon-h-align-center',
				],
				'end' => [
					'title' => esc_html__( 'End', 'elementor-pro' ),
					'icon' => 'eicon-flex eicon-align-end-h',
				],
				'stretch' => [
					'title' => esc_html__( 'Stretch', 'elementor-pro' ),
					'icon' => 'eicon-h-align-stretch',
				],
			],
			'selectors_dictionary' => [
				'start' => '--n-menu-items-heading-justify-content: initial; --n-menu-item-title-width: initial; --n-menu-item-title-justify-content: initial; --n-menu-item-title-justify-content-mobile: initial;',
				'center' => '--n-menu-items-heading-justify-content: center; --n-menu-item-title-width: initial; --n-menu-item-title-justify-content: initial; --n-menu-item-title-justify-content-mobile: center;',
				'end' => '--n-menu-items-heading-justify-content: flex-end; --n-menu-item-title-width: initial; --n-menu-item-title-justify-content: initial; --n-menu-item-title-justify-content-mobile: flex-end;',
				'stretch' => '--n-menu-items-heading-justify-content: space-between; --n-menu-item-title-width: 100%; --n-menu-item-title-justify-content: center; --n-menu-item-title-justify-content-mobile: center;',
			],
			'selectors' => [
				'{{WRAPPER}}' => '{{VALUE}}',
			],
			'condition' => [
				'item_layout' => 'horizontal',
			],
		]);

		$this->add_responsive_control( 'item_position_dropdown', [
			'label' => esc_html__( 'Item Position', 'elementor-pro' ),
			'type' => Controls_Manager::CHOOSE,
			'options' => [
				'start' => [
					'title' => esc_html__( 'Start', 'elementor-pro' ),
					'icon' => 'eicon-flex eicon-align-start-h',
				],
				'center' => [
					'title' => esc_html__( 'Center', 'elementor-pro' ),
					'icon' => 'eicon-h-align-center',
				],
				'end' => [
					'title' => esc_html__( 'End', 'elementor-pro' ),
					'icon' => 'eicon-flex eicon-align-end-h',
				],
			],
			'selectors_dictionary' => [
				'start' => '--n-menu-item-title-justify-content: initial;  --n-menu-item-title-justify-content-mobile: initial;',
				'center' => '--n-menu-item-title-justify-content: center; --n-menu-item-title-justify-content-mobile: center;',
				'end' => '--n-menu-item-title-justify-content: flex-end; --n-menu-item-title-justify-content-mobile: flex-end;',
			],
			'selectors' => [
				'{{WRAPPER}}' => '{{VALUE}}',
			],
			'condition' => [
				'item_layout' => 'dropdown',
			],
		]);

		$this->add_control(
			'menu_item_icon',
			[
				'label' => esc_html__( 'Icon', 'elementor-pro' ),
				'type' => Controls_Manager::ICONS,
				'separator' => 'before',
				'default' => [
					'value' => 'fas fa-caret-down',
					'library' => 'fa-solid',
				],
				'recommended' => [
					'fa-solid' => [
						'chevron-down',
						'angle-down',
						'angle-double-down',
						'caret-down',
						'caret-square-down',
					],
					'fa-regular' => [
						'caret-square-down',
					],
				],
				'skin' => 'inline',
				'label_block' => false,
			]
		);

		$this->add_control(
			'menu_item_icon_active',
			[
				'label' => esc_html__( 'Active Icon', 'elementor-pro' ),
				'type' => Controls_Manager::ICONS,
				'fa4compatibility' => 'icon_active',
				'default' => [
					'value' => 'fas fa-caret-up',
					'library' => 'fa-solid',
				],
				'recommended' => [
					'fa-solid' => [
						'chevron-up',
						'angle-up',
						'angle-double-up',
						'caret-up',
						'caret-square-up',
					],
					'fa-regular' => [
						'caret-square-up',
					],
				],
				'skin' => 'inline',
				'label_block' => false,
			]
		);

		$this->add_control(
			'open_on',
			[
				'label' => esc_html__( 'Open On', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'hover',
				'options' => [
					'hover' => esc_html__( 'Hover', 'elementor-pro' ),
					'click' => esc_html__( 'Click', 'elementor-pro' ),
				],
				'frontend_available' => true,
			]
		);

		$this->end_controls_section();

		$this->start_controls_section( 'section_responsive_mega_menu', [
			'label' => esc_html__( 'Responsive Settings', 'elementor-pro' ),
		] );

		$dropdown_options = [];
		$excluded_breakpoints = [
			'laptop',
			'tablet_extra',
			'widescreen',
		];

		foreach ( Plugin::elementor()->breakpoints->get_active_breakpoints() as $breakpoint_key => $breakpoint_instance ) {
			// Exclude the larger breakpoints from the dropdown selector.
			if ( in_array( $breakpoint_key, $excluded_breakpoints, true ) ) {
				continue;
			}

			$dropdown_options[ $breakpoint_key ] = sprintf(
			/* translators: 1: Breakpoint label, 2: `>` character, 3: Breakpoint value. */
				esc_html__( '%1$s (%2$s %3$dpx)', 'elementor-pro' ),
				$breakpoint_instance->get_label(),
				'>',
				$breakpoint_instance->get_value()
			);
		}

		$this->add_control(
			'breakpoint_selector',
			[
				'label' => esc_html__( 'Breakpoint', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'description' => esc_html__( 'Note: Item layout will switch to dropdown on any screen smaller than the selected breakpoint.', 'elementor-pro' ),
				'options' => $dropdown_options,
				'default' => 'tablet',
				'prefix_class' => 'e-n-menu-',
			]
		);

		$this->end_controls_section();
	}

	protected function render() {
		$settings = $this->get_settings_for_display();
		$desktop_menu_titles = '';
		$mobile_menu_titles_and_content = '';

		foreach ( $settings['menu_items'] as $index => $item ) {
			$desktop_menu_titles .= $this->create_desktop_menu_titles( $index, $item );
			$mobile_menu_titles_and_content .= $this->create_mobile_menu_titles_and_content( $index, $item );
		}

		?>
		<div class="e-n-menu">
			<div class="e-n-menu-items-heading">
				<?php echo $desktop_menu_titles; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
			</div>
			<div class="e-n-menu-items-content" aria-orientation="vertical">
				<?php echo $mobile_menu_titles_and_content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
			</div>
		</div>
		<?php
	}

	protected function create_desktop_menu_titles( $index, $item ) {
		$args = [
			'isMobile' => false,
			'setting_key' => 'item_title',
			'class' => 'e-normal',
		];
		return $this->render_menu_titles_html( $index, $item, $args );
	}

	protected function create_mobile_menu_titles_and_content( $index, $item ) {
		$args = [
			'isMobile' => true,
			'setting_key' => 'item_title_mobile',
			'class' => 'e-collapse',
		];
		return $this->render_menu_titles_html( $index, $item, $args );
	}

	protected function render_menu_titles_html( $index, $item, $args ) {
		$settings = $this->get_settings_for_display();
		$icon_html = Icons_Manager::try_get_icon_html( $settings['menu_item_icon'], [ 'aria-hidden' => 'true' ] );
		$icon_active_html = Icons_Manager::try_get_icon_html( $settings['menu_item_icon_active'], [ 'aria-hidden' => 'true' ] );
		$display_index = $index + 1;
		$id_int = substr( $this->get_id_int(), 0, 3 );
		$menu_item_id = empty( $item['element_id'] ) ? 'e-n-menu-item-title-' . $id_int . $display_index : $item['element_id'];
		$key = $this->get_repeater_setting_key( $args['setting_key'], 'menu_items', $display_index );

		$this->add_attributes_to_item( $key, $args['class'], $menu_item_id, $display_index, $id_int );

		ob_start();
		?>
			<div <?php echo wp_kses_post( $this->get_render_attribute_string( $key ) ); ?> >
				<span class="e-n-menu-item-title-text" >
					<?php echo wp_kses_post( $this->render_item_title( $item ) ); ?>
				</span>
				<span class="e-n-menu-item-icon">
					<span class="e-n-menu-item-icon-opened" ><?php echo $icon_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></span>
					<span class="e-n-menu-item-icon-closed"><?php echo $icon_active_html; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></span>
				</span>
			</div>
		<?php
		if ( $args['isMobile'] ) {
			$this->print_child( $index );
		}

		return ob_get_clean();
	}

	public function add_attributes_to_item( $key, $class, $menu_item_id, $display_index, $id_int ) {
		$this->add_render_attribute( $key, [
			'id' => $menu_item_id,
			'class' => [ 'e-n-menu-item-title', $class ],
			'aria-selected' => 1 === $display_index ? 'true' : 'false',
			'data-tab' => $display_index,
			'role' => 'tab',
			'tabindex' => 1 === $display_index ? '0' : '-1',
			'aria-controls' => 'e-n-tab-content-' . $id_int . $display_index,
			'aria-expanded' => 'false',
		] );
	}

	protected function render_item_title( $item ) {
		$link_id = 'e-n-menu-item-title-' . $item['_id'];
		$this->add_render_attribute( $link_id, 'class', 'e-n-menu-item-title-link' );
		$this->add_link_attributes( $link_id, $item['item_link'] );

		$title = $item['item_title'];

		if ( $item['item_link']['url'] ) {
			$title = '<a ' . $this->get_render_attribute_string( $link_id ) . '>' . $item['item_title'] . ' </a>';
		}

		return $title;
	}

	protected function content_template() {
		?>
		<div class="e-n-menu" role="tablist" aria-orientation="vertical">
			<# if ( settings['menu_items'] ) {
			const menuItemIcon = elementor.helpers.renderIcon( view, settings['menu_item_icon'], { 'aria-hidden': true }, 'i' , 'object' ) ?? '',
				menuItemIconActive = elementor.helpers.renderIcon( view, settings['menu_item_icon_active'], { 'aria-hidden': true }, 'i' , 'object' ) ?? '',
				elementUid = view.getIDInt().toString().substr( 0, 3 ); #>
			<div class="e-n-menu-items-heading" role="tablist">
				<# _.each( settings[ 'menu_items' ], function( item, index ) {
					const menuItemCount = index + 1,
						menuItemUid = elementUid + menuItemCount,
						menuItemWrapperKey = menuItemUid,
						menuItemTitleKey = 'menu-item-title-' + menuItemUid,
						menuItemId = 'e-n-menu-item-title-' + menuItemUid,
						menuItemIconKey = 'menu-item-icon-' + menuItemUid,
						menuItemLink = item[ 'item_link' ];

					if ( '' !== item.element_id ) {
						menuItemId = item.element_id;
					}

					view.addRenderAttribute( menuItemWrapperKey, {
						'id': menuItemId,
						'class': [ 'e-n-menu-item-title','e-normal' ],
						'data-tab': menuItemCount,
						'role': 'tab',
						'tabindex': 1 === menuItemCount ? '0' : '-1',
						'aria-controls': 'e-n-menu-item-content-' + menuItemUid,
						'aria-expanded': 'false',
					} );

					view.addRenderAttribute( menuItemTitleKey, {
						'class': [ 'e-n-menu-item-title-text' ],
						'data-binding-type': 'repeater-item',
						'data-binding-repeater-name': 'menu_items',
						'data-binding-setting': [ 'item_title' ],
						'data-binding-index': menuItemCount,
						'href': [ 'item_title' ],
					} );
				#>

				<div {{{ view.getRenderAttributeString( menuItemWrapperKey ) }}}>
					<span {{{ view.getRenderAttributeString( menuItemTitleKey ) }}}>
						<# if ( menuItemLink.url ) { #>
							<a href="{{ menuItemLink.url }}">{{{ item.item_title }}}</a>
						<# } else { #>
							{{{ item.item_title }}}
						<# } #>
					</span>
					<span class="e-n-menu-item-icon">
						<span class="e-n-menu-item-icon-closed">{{{ menuItemIcon.value }}}</span>
						<span class="e-n-menu-item-icon-opened">{{{  menuItemIconActive.value }}}</span>
					</span>
				</div>
				<# } ); #>
			</div>
			<div class="e-n-menu-items-content"></div>
			<# } #>
		</div>
		<?php
	}
}
