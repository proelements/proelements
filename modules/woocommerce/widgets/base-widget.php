<?php
namespace ElementorPro\Modules\Woocommerce\Widgets;

use Elementor\Controls_Manager;
use Elementor\Controls_Stack;
use Elementor\Core\Breakpoints\Manager as Breakpoints_Manager;
use ElementorPro\Modules\Woocommerce\Classes\Products_Renderer;
use ElementorPro\Modules\Woocommerce\Traits\Product_Id_Trait;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

abstract class Base_Widget extends \ElementorPro\Base\Base_Widget {

	use Product_Id_Trait;

	protected $gettext_modifications;

	public function get_categories() {
		return [ 'woocommerce-elements-single' ];
	}

	protected function get_devices_default_args() {
		$devices_required = [];

		// Make sure device settings can inherit from larger screen sizes' breakpoint settings.
		foreach ( Breakpoints_Manager::get_default_config() as $breakpoint_name => $breakpoint_config ) {
			$devices_required[ $breakpoint_name ] = [
				'required' => false,
			];
		}

		return $devices_required;
	}

	protected function add_columns_responsive_control() {
		$this->add_responsive_control(
			'columns',
			[
				'label' => esc_html__( 'Columns', 'elementor-pro' ),
				'type' => Controls_Manager::NUMBER,
				'prefix_class' => 'elementor-grid%s-',
				'min' => 1,
				'max' => 12,
				'default' => Products_Renderer::DEFAULT_COLUMNS_AND_ROWS,
				'tablet_default' => '3',
				'mobile_default' => '2',
				'required' => true,
				'device_args' => $this->get_devices_default_args(),
				'min_affected_device' => [
					Controls_Stack::RESPONSIVE_DESKTOP => Controls_Stack::RESPONSIVE_TABLET,
					Controls_Stack::RESPONSIVE_TABLET => Controls_Stack::RESPONSIVE_TABLET,
				],
			]
		);
	}

	/**
	 * Is WooCommerce Feature Active.
	 *
	 * Checks whether a specific WooCommerce feature is active. These checks can sometimes look at multiple WooCommerce
	 * settings at once so this simplifies and centralizes the checking.
	 *
	 * @since 3.5.0
	 *
	 * @param string $feature
	 * @return bool
	 */
	protected function is_wc_feature_active( $feature ) {
		switch ( $feature ) {
			case 'checkout_login_reminder':
				return 'yes' === get_option( 'woocommerce_enable_checkout_login_reminder' );
			case 'shipping':
				if ( class_exists( 'WC_Shipping_Zones' ) ) {
					$all_zones = \WC_Shipping_Zones::get_zones();
					if ( count( $all_zones ) > 0 ) {
						return true;
					}
				}
				break;
			case 'coupons':
				return function_exists( 'wc_coupons_enabled' ) && wc_coupons_enabled();
			case 'signup_and_login_from_checkout':
				return 'yes' === get_option( 'woocommerce_enable_signup_and_login_from_checkout' );
			case 'ship_to_billing_address_only':
				return wc_ship_to_billing_address_only();
		}

		return false;
	}

	/**
	 * Get Custom Border Type Options
	 *
	 * Return a set of border options to be used in different WooCommerce widgets.
	 *
	 * This will be used in cases where the Group Border Control could not be used.
	 *
	 * @since 3.5.0
	 *
	 * @return array
	 */
	public static function get_custom_border_type_options() {
		return [
			'none' => esc_html__( 'None', 'elementor-pro' ),
			'solid' => esc_html__( 'Solid', 'elementor-pro' ),
			'double' => esc_html__( 'Double', 'elementor-pro' ),
			'dotted' => esc_html__( 'Dotted', 'elementor-pro' ),
			'dashed' => esc_html__( 'Dashed', 'elementor-pro' ),
			'groove' => esc_html__( 'Groove', 'elementor-pro' ),
		];
	}

	/**
	 * Init Gettext Modifications
	 *
	 * Should be overridden by a method in the Widget class.
	 *
	 * @since 3.5.0
	 */
	protected function init_gettext_modifications() {
		$this->gettext_modifications = [];
	}

	/**
	 * Filter Gettext.
	 *
	 * Filter runs when text is output to the page using the translation functions (`_e()`, `__()`, etc.)
	 * used to apply text changes from the widget settings.
	 *
	 * This allows us to make text changes without having to ovveride WooCommerce templates, which would
	 * lead to dev tax to keep all the templates up to date with each future WC release.
	 *
	 * @since 3.5.0
	 *
	 * @param string $translation
	 * @param string $text
	 * @param string $domain
	 * @return string
	 */
	public function filter_gettext( $translation, $text, $domain ) {
		if ( 'woocommerce' !== $domain && 'elementor-pro' !== $domain ) {
			return $translation;
		}

		if ( ! isset( $this->gettext_modifications ) ) {
			$this->init_gettext_modifications();
		}

		return array_key_exists( $text, $this->gettext_modifications ) ? $this->gettext_modifications[ $text ] : $translation;
	}
}
