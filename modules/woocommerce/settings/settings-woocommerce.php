<?php
namespace ElementorPro\Modules\Woocommerce\Settings;

use Elementor\Core\Base\Document;
use Elementor\Controls_Manager;
use Elementor\Core\Kits\Documents\Tabs\Tab_Base;
use ElementorPro\Plugin;
use ElementorPro\Modules\QueryControl\Module as QueryModule;


if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Settings_Woocommerce extends Tab_Base {

	public function get_id() {
		return 'settings-woocommerce';
	}

	public function get_title() {
		return esc_html__( 'WooCommerce', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-woo-settings';
	}

	public function get_group() {
		return 'settings';
	}

	public function get_help_url() {
		return 'https://go.elementor.com/global-woocommerce';
	}

	protected function register_tab_controls() {

		$this->start_controls_section(
			'section_woocommerce_pages',
			[
				'label' => esc_html__( 'WooCommerce Pages', 'elementor-pro' ),
				'tab' => $this->get_id(),
			]
		);

		$this->add_control(
			'woocommerce_pages_intro',
			[
				'raw' => esc_html__( 'Select the pages you want to use as your default WooCommerce shop pages', 'elementor-pro' ),
				'type' => Controls_Manager::RAW_HTML,
				'content_classes' => 'elementor-descriptor',
			]
		);

		$autocomplete = [
			'object' => QueryModule::QUERY_OBJECT_POST,
			'query' => [
				'post_type' => [ 'page' ],
			],
		];

		$this->add_control(
			'woocommerce_cart_page_id',
			[
				'label' => esc_html__( 'Cart', 'elementor-pro' ),
				'type' => QueryModule::QUERY_CONTROL_ID,
				'select2options' => [
					'placeholder' => esc_html__( 'Select a page', 'elementor-pro' ),
				],
				'autocomplete' => $autocomplete,
				'default' => get_option( 'woocommerce_cart_page_id' ),
			]
		);

		$this->add_control(
			'woocommerce_checkout_page_id',
			[
				'label' => esc_html__( 'Checkout', 'elementor-pro' ),
				'type' => QueryModule::QUERY_CONTROL_ID,
				'select2options' => [
					'placeholder' => esc_html__( 'Select a page', 'elementor-pro' ),
				],
				'autocomplete' => $autocomplete,
				'default' => get_option( 'woocommerce_checkout_page_id' ),
			]
		);

		$this->add_control(
			'woocommerce_myaccount_page_id',
			[
				'label' => esc_html__( 'My Account', 'elementor-pro' ),
				'type' => QueryModule::QUERY_CONTROL_ID,
				'select2options' => [
					'placeholder' => esc_html__( 'Select a page', 'elementor-pro' ),
				],
				'autocomplete' => $autocomplete,
				'default' => get_option( 'woocommerce_myaccount_page_id' ),
			]
		);

		$this->add_control(
			'woocommerce_terms_page_id',
			[
				'label' => esc_html__( 'Terms & Conditions', 'elementor-pro' ),
				'type' => QueryModule::QUERY_CONTROL_ID,
				'select2options' => [
					'placeholder' => esc_html__( 'Select a page', 'elementor-pro' ),
				],
				'autocomplete' => $autocomplete,
				'default' => get_option( 'woocommerce_terms_page_id' ),
			]
		);

		$this->add_control(
			'woocommerce_pages_notice',
			[
				'type' => Controls_Manager::RAW_HTML,
				'raw' => esc_html__( 'Note: Changes you make here will also be reflected in the WooCommerce settings on your WP dashboard', 'elementor-pro' ),
				'content_classes' => 'elementor-panel-alert elementor-panel-alert-info',
			]
		);

		$this->end_controls_section();
	}

	public function on_save( $data ) {
		if (
			! isset( $data['settings']['post_status'] ) ||
			Document::STATUS_PUBLISH !== $data['settings']['post_status'] ||
			// Should check for the current action to avoid infinite loop
			// when updating options like: "blogname" and "blogdescription".
			strpos( current_action(), 'update_option_' ) === 0
		) {
			return;
		}

		$ec_wc_key_mapping = [
			'woocommerce_cart_page_id' => 'woocommerce_cart_page_id',
			'woocommerce_checkout_page_id' => 'woocommerce_checkout_page_id',
			'woocommerce_myaccount_page_id' => 'woocommerce_myaccount_page_id',
			'woocommerce_terms_page_id' => 'woocommerce_terms_page_id',
		];
		foreach ( $ec_wc_key_mapping as $ec_key => $wc_key ) {
			if ( array_key_exists( $ec_key, $data['settings'] ) ) {
				$value = $data['settings'][ $ec_key ] ? $data['settings'][ $ec_key ] : '';
				update_option( $wc_key, $value );
			}
		}
	}
}
