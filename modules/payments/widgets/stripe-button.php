<?php

namespace ElementorPro\Modules\Payments\Widgets;

use Elementor\Controls_Manager;
use Elementor\Widget_Base;
use Elementor\Plugin;
use Elementor\Utils;
use ElementorPro\Core\Utils as ProUtils;
use ElementorPro\Modules\Payments\Classes\Payment_Button;
use ElementorPro\Modules\Payments\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Stripe_Button.
 *
 * @since 3.7.0
 */
class Stripe_Button extends Payment_Button {

	/**
	 * Stripe constants.
	 */
	const STRIPE_PAYMENT_TYPE_CHECKOUT = 'payment';

	public function get_name() {
		return 'stripe-button';
	}

	public function get_title() {
		return esc_html__( 'Stripe Button', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-stripe-button';
	}

	public function get_keywords() {
		return [ 'stripe', 'payment', 'sell', 'donate' ];
	}

	protected function get_merchant_name() {
		return 'Stripe';
	}

	/**
	 * Stripe currency supported list
	 *
	 * @since 3.7.0
	 *
	 * @return array
	 */
	protected function get_stripe_currencies() {
		return [
			'AED' => _x( 'AED', 'Currency', 'elementor-pro' ),
			'AFN' => _x( 'AFN', 'Currency', 'elementor-pro' ),
			'ALL' => _x( 'ALL', 'Currency', 'elementor-pro' ),
			'AMD' => _x( 'AMD', 'Currency', 'elementor-pro' ),
			'ANG' => _x( 'ANG', 'Currency', 'elementor-pro' ),
			'AOA' => _x( 'AOA', 'Currency', 'elementor-pro' ),
			'ARS' => _x( 'ARS', 'Currency', 'elementor-pro' ),
			'AUD' => _x( 'AUD', 'Currency', 'elementor-pro' ),
			'AWG' => _x( 'AWG', 'Currency', 'elementor-pro' ),
			'AZN' => _x( 'AZN', 'Currency', 'elementor-pro' ),
			'BAM' => _x( 'BAM', 'Currency', 'elementor-pro' ),
			'BBD' => _x( 'BBD', 'Currency', 'elementor-pro' ),
			'BDT' => _x( 'BDT', 'Currency', 'elementor-pro' ),
			'BGN' => _x( 'BGN', 'Currency', 'elementor-pro' ),
			'BIF' => _x( 'BIF', 'Currency', 'elementor-pro' ),
			'BMD' => _x( 'BMD', 'Currency', 'elementor-pro' ),
			'BND' => _x( 'BND', 'Currency', 'elementor-pro' ),
			'BOB' => _x( 'BOB', 'Currency', 'elementor-pro' ),
			'BRL' => _x( 'BRL', 'Currency', 'elementor-pro' ),
			'BSD' => _x( 'BSD', 'Currency', 'elementor-pro' ),
			'BWP' => _x( 'BWP', 'Currency', 'elementor-pro' ),
			'BYN' => _x( 'BYN', 'Currency', 'elementor-pro' ),
			'BZD' => _x( 'BZD', 'Currency', 'elementor-pro' ),
			'CAD' => _x( 'CAD', 'Currency', 'elementor-pro' ),
			'CDF' => _x( 'CDF', 'Currency', 'elementor-pro' ),
			'CHF' => _x( 'CHF', 'Currency', 'elementor-pro' ),
			'CLP' => _x( 'CLP', 'Currency', 'elementor-pro' ),
			'CNY' => _x( 'CNY', 'Currency', 'elementor-pro' ),
			'COP' => _x( 'COP', 'Currency', 'elementor-pro' ),
			'CRC' => _x( 'CRC', 'Currency', 'elementor-pro' ),
			'CVE' => _x( 'CVE', 'Currency', 'elementor-pro' ),
			'CZK' => _x( 'CZK', 'Currency', 'elementor-pro' ),
			'DJF' => _x( 'DJF', 'Currency', 'elementor-pro' ),
			'DKK' => _x( 'DKK', 'Currency', 'elementor-pro' ),
			'DOP' => _x( 'DOP', 'Currency', 'elementor-pro' ),
			'DZD' => _x( 'DZD', 'Currency', 'elementor-pro' ),
			'EGP' => _x( 'EGP', 'Currency', 'elementor-pro' ),
			'ETB' => _x( 'ETB', 'Currency', 'elementor-pro' ),
			'EUR' => _x( 'EUR', 'Currency', 'elementor-pro' ),
			'FJD' => _x( 'FJD', 'Currency', 'elementor-pro' ),
			'FKP' => _x( 'FKP', 'Currency', 'elementor-pro' ),
			'GBP' => _x( 'GBP', 'Currency', 'elementor-pro' ),
			'GEL' => _x( 'GEL', 'Currency', 'elementor-pro' ),
			'GIP' => _x( 'GIP', 'Currency', 'elementor-pro' ),
			'GMD' => _x( 'GMD', 'Currency', 'elementor-pro' ),
			'GNF' => _x( 'GNF', 'Currency', 'elementor-pro' ),
			'GTQ' => _x( 'GTQ', 'Currency', 'elementor-pro' ),
			'GYD' => _x( 'GYD', 'Currency', 'elementor-pro' ),
			'HKD' => _x( 'HKD', 'Currency', 'elementor-pro' ),
			'HNL' => _x( 'HNL', 'Currency', 'elementor-pro' ),
			'HRK' => _x( 'HRK', 'Currency', 'elementor-pro' ),
			'HTG' => _x( 'HTG', 'Currency', 'elementor-pro' ),
			'IDR' => _x( 'IDR', 'Currency', 'elementor-pro' ),
			'ILS' => _x( 'ILS', 'Currency', 'elementor-pro' ),
			'INR' => _x( 'INR', 'Currency', 'elementor-pro' ),
			'ISK' => _x( 'ISK', 'Currency', 'elementor-pro' ),
			'JMD' => _x( 'JMD', 'Currency', 'elementor-pro' ),
			'JPY' => _x( 'JPY', 'Currency', 'elementor-pro' ),
			'KES' => _x( 'KES', 'Currency', 'elementor-pro' ),
			'KGS' => _x( 'KGS', 'Currency', 'elementor-pro' ),
			'KHR' => _x( 'KHR', 'Currency', 'elementor-pro' ),
			'KMF' => _x( 'KMF', 'Currency', 'elementor-pro' ),
			'KRW' => _x( 'KRW', 'Currency', 'elementor-pro' ),
			'KYD' => _x( 'KYD', 'Currency', 'elementor-pro' ),
			'KZT' => _x( 'KZT', 'Currency', 'elementor-pro' ),
			'LAK' => _x( 'LAK', 'Currency', 'elementor-pro' ),
			'LBP' => _x( 'LBP', 'Currency', 'elementor-pro' ),
			'LKR' => _x( 'LKR', 'Currency', 'elementor-pro' ),
			'LRD' => _x( 'LRD', 'Currency', 'elementor-pro' ),
			'LSL' => _x( 'LSL', 'Currency', 'elementor-pro' ),
			'MAD' => _x( 'MAD', 'Currency', 'elementor-pro' ),
			'MDL' => _x( 'MDL', 'Currency', 'elementor-pro' ),
			'MGA' => _x( 'MGA', 'Currency', 'elementor-pro' ),
			'MKD' => _x( 'MKD', 'Currency', 'elementor-pro' ),
			'MMK' => _x( 'MMK', 'Currency', 'elementor-pro' ),
			'MNT' => _x( 'MNT', 'Currency', 'elementor-pro' ),
			'MOP' => _x( 'MOP', 'Currency', 'elementor-pro' ),
			'MRO' => _x( 'MRO', 'Currency', 'elementor-pro' ),
			'MUR' => _x( 'MUR', 'Currency', 'elementor-pro' ),
			'MVR' => _x( 'MVR', 'Currency', 'elementor-pro' ),
			'MWK' => _x( 'MWK', 'Currency', 'elementor-pro' ),
			'MXN' => _x( 'MXN', 'Currency', 'elementor-pro' ),
			'MYR' => _x( 'MYR', 'Currency', 'elementor-pro' ),
			'MZN' => _x( 'MZN', 'Currency', 'elementor-pro' ),
			'NAD' => _x( 'NAD', 'Currency', 'elementor-pro' ),
			'NGN' => _x( 'NGN', 'Currency', 'elementor-pro' ),
			'NIO' => _x( 'NIO', 'Currency', 'elementor-pro' ),
			'NOK' => _x( 'NOK', 'Currency', 'elementor-pro' ),
			'NPR' => _x( 'NPR', 'Currency', 'elementor-pro' ),
			'NZD' => _x( 'NZD', 'Currency', 'elementor-pro' ),
			'PAB' => _x( 'PAB', 'Currency', 'elementor-pro' ),
			'PEN' => _x( 'PEN', 'Currency', 'elementor-pro' ),
			'PGK' => _x( 'PGK', 'Currency', 'elementor-pro' ),
			'PHP' => _x( 'PHP', 'Currency', 'elementor-pro' ),
			'PKR' => _x( 'PKR', 'Currency', 'elementor-pro' ),
			'PLN' => _x( 'PLN', 'Currency', 'elementor-pro' ),
			'PYG' => _x( 'PYG', 'Currency', 'elementor-pro' ),
			'QAR' => _x( 'QAR', 'Currency', 'elementor-pro' ),
			'RON' => _x( 'RON', 'Currency', 'elementor-pro' ),
			'RSD' => _x( 'RSD', 'Currency', 'elementor-pro' ),
			'RUB' => _x( 'RUB', 'Currency', 'elementor-pro' ),
			'RWF' => _x( 'RWF', 'Currency', 'elementor-pro' ),
			'SAR' => _x( 'SAR', 'Currency', 'elementor-pro' ),
			'SBD' => _x( 'SBD', 'Currency', 'elementor-pro' ),
			'SCR' => _x( 'SCR', 'Currency', 'elementor-pro' ),
			'SEK' => _x( 'SEK', 'Currency', 'elementor-pro' ),
			'SGD' => _x( 'SGD', 'Currency', 'elementor-pro' ),
			'SHP' => _x( 'SHP', 'Currency', 'elementor-pro' ),
			'SLL' => _x( 'SLL', 'Currency', 'elementor-pro' ),
			'SOS' => _x( 'SOS', 'Currency', 'elementor-pro' ),
			'SRD' => _x( 'SRD', 'Currency', 'elementor-pro' ),
			'STD' => _x( 'STD', 'Currency', 'elementor-pro' ),
			'SZL' => _x( 'SZL', 'Currency', 'elementor-pro' ),
			'THB' => _x( 'THB', 'Currency', 'elementor-pro' ),
			'TJS' => _x( 'TJS', 'Currency', 'elementor-pro' ),
			'TOP' => _x( 'TOP', 'Currency', 'elementor-pro' ),
			'TRY' => _x( 'TRY', 'Currency', 'elementor-pro' ),
			'TTD' => _x( 'TTD', 'Currency', 'elementor-pro' ),
			'TWD' => _x( 'TWD', 'Currency', 'elementor-pro' ),
			'TZS' => _x( 'TZS', 'Currency', 'elementor-pro' ),
			'UAH' => _x( 'UAH', 'Currency', 'elementor-pro' ),
			'UYU' => _x( 'UYU', 'Currency', 'elementor-pro' ),
			'UZS' => _x( 'UZS', 'Currency', 'elementor-pro' ),
			'VND' => _x( 'VND', 'Currency', 'elementor-pro' ),
			'VUV' => _x( 'VUV', 'Currency', 'elementor-pro' ),
			'WST' => _x( 'WST', 'Currency', 'elementor-pro' ),
			'XAF' => _x( 'XAF', 'Currency', 'elementor-pro' ),
			'XCD' => _x( 'XCD', 'Currency', 'elementor-pro' ),
			'XOF' => _x( 'XOF', 'Currency', 'elementor-pro' ),
			'XPF' => _x( 'XPF', 'Currency', 'elementor-pro' ),
			'YER' => _x( 'YER', 'Currency', 'elementor-pro' ),
			'ZAR' => _x( 'ZAR', 'Currency', 'elementor-pro' ),
			'ZMW' => _x( 'ZMW', 'Currency', 'elementor-pro' ),
			'USD' => _x( 'USD', 'Currency', 'elementor-pro' ),
		];
	}

	/**
	 * Global error message.
	 *
	 * @since 3.7.0
	 *
	 * @return string
	 */
	protected function stripe_global_error_massage() {
		return esc_html__( 'Something went wrong', 'elementor-pro' );
	}

	/**
	 * Gateway error message.
	 *
	 * @since 3.7.0
	 *
	 * @return string
	 */
	protected function stripe_gateway_error_massage() {
		return esc_html__( 'Gateway not connected. Contact seller', 'elementor-pro' );
	}

	/**
	 * Get validation errors.
	 *
	 * @since 3.7.0
	 *
	 * @return array
	 */
	protected function get_errors() {
		$settings = $this->get_settings_for_display();
		$errors = [];

		if ( empty( $settings['product_name'] ) || empty( $settings['stripe_product_price'] ) ) {
			$errors[ self::ERROR_MESSAGE_GLOBAL ] = $this->get_custom_message( self::ERROR_MESSAGE_GLOBAL );
		}

		return $errors;
	}

	/**
	 * Render the payment button.
	 *
	 * @param string $tag - this is an inheritance from the payment_button class
	 *
	 * @since 3.7.0
	 *
	 * @return array
	 */
	protected function render_button( Widget_Base $instance = null, $tag = 'a' ) {
		$settings = $this->get_settings_for_display();
		?>

		<form class="elementor-stripe-form">
			<input type="hidden" name="url" value="<?php echo esc_attr( admin_url( 'admin-ajax.php' ) ); ?>">
			<input type="hidden" name="action" value="submit_stripe_form"/>
			<input type="hidden" name="widget_id" value="<?php echo esc_attr( $this->get_id() ); ?>"/>
			<input type="hidden" name="current_url" value="<?php echo esc_attr( ProUtils::_unstable_get_super_global_value( $_SERVER, 'PHP_SELF' ) ); ?>"/>
			<input type="hidden" name="custom_error_msg" value="<?php echo esc_attr( $settings['custom_messages'] ); ?>" />
			<input type="hidden" name="custom_error_msg_global" value="<?php echo esc_attr( $settings['error_message_global'] ); ?>" />
			<input type="hidden" name="custom_error_msg_payment" value="<?php echo esc_attr( $settings['error_message_payment'] ); ?>" />
			<?php wp_nonce_field( 'stripe_form_submit', 'stripe_form_submit_nonce' ); ?>
			<input type="hidden" name="open_in_new_window" value="<?php echo esc_attr( $settings['open_in_new_window'] ); ?>"/>
			<?php
				$this->add_render_attribute( 'input', 'type', 'submit' );
				$this->add_render_attribute( 'input', 'class', 'elementor-stripe' );
				parent::render_button( null, 'button' );

			foreach ( $this->get_errors() as $type => $message ) {
				?>
				<div class="elementor-message elementor-message-danger elementor-hidden elementor-error-message-<?php Utils::print_unescaped_internal_string( $type ); ?>">
					<?php echo esc_html( $message ); ?>
				</div>
				<?php
			}
			?>
		</form>
		<?php
	}

	/**
	 * Registers account section
	 *
	 * @since 3.7.0
	 */
	protected function register_account_section() {
		$this->start_controls_section(
			'section_stripe_account',
			[
				'label' => esc_html__( 'Pricing & Payments', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'test_environment_msg',
			[
				'type' => Controls_Manager::RAW_HTML,
				'raw' => sprintf(
					/* translators: 1: Elementor's integrations settings link opening tab, 2: Link closing tag. */
					esc_html__( 'For this widget to work, you need to set your Stripe API keys in the %1$sIntegrations Settings%2$s.', 'elementor-pro' ),
					sprintf( '<a href="%s" target="_blank">', admin_url( 'admin.php?page=elementor#tab-integrations' ) ),
					'</a>'
				),
				'content_classes' => 'elementor-panel-alert elementor-panel-alert-info',
				'separator' => 'after',
			]
		);

		$this->register_product_controls();

		$this->remove_control( 'type' );

		$this->update_control(
			'type',
			[
				'default' => self::STRIPE_PAYMENT_TYPE_CHECKOUT,
				'options' => [
					self::STRIPE_PAYMENT_TYPE_CHECKOUT => esc_html__( 'Checkout', 'elementor-pro' ),
				],
			]
		);

		$this->update_control(
			'product_name',
			[
				'label' => esc_html__( 'Product Name', 'elementor-pro' ),
				'required' => true,
			]
		);

		$this->add_control(
			'stripe_currency',
			[
				'label' => esc_html__( 'Currency', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT2,
				'options' => $this->get_stripe_currencies(),
				'frontend_available' => true,
				'multiple' => false,
				'default' => 'USD',
				'description' => sprintf(
					/* translators: 1: Stripe api key explanation link opening tag, 2: Link closing tag. */
					esc_html__( 'Notice! Please make sure to meet Stripe\'s guidelines regarding minimum charge amounts. %1$s Learn more. %2$s', 'elementor-pro' ),
					sprintf( '<a href="%s" target="_blank">', Module::STRIPE_TRANSACTIONS_LINK ),
					'</a>'
				),
				'render_type' => 'none',
				'required' => true,
				'select2options' => [
					'placeholder' => esc_html__( 'USD', 'elementor-pro' ),
				],
			]
		);

		$this->add_control(
			'stripe_product_price',
			[
				'label' => esc_html__( 'Product Price', 'elementor-pro' ),
				'type' => Controls_Manager::NUMBER,
				'default' => '0.00',
				'dynamic' => [
					'active' => true,
				],
				'min' => 0,
			]
		);

		$this->remove_control( 'product_price' );

		$this->remove_control( 'currency' );

		$this->remove_control( 'billing_cycle' );

		$this->remove_control( 'auto_renewal' );

		$this->remove_control( 'product_sku' );

		$this->remove_control( 'quantity' );

		$this->add_control(
			'stripe_quantity',
			[
				'label' => esc_html__( 'Quantity', 'elementor-pro' ),
				'type' => Controls_Manager::NUMBER,
				'default' => 1,
			]
		);

		$this->remove_control( 'tax_type' );

		$this->add_control(
			'shipping_amount',
			[
				'label' => esc_html__( 'Shipping Price', 'elementor-pro' ),
				'type' => Controls_Manager::NUMBER,
				'default' => 0,
				'dynamic' => [
					'active' => true,
				],
				'min' => 0,
			]
		);

		$this->add_control(
			'stripe_test_env_tax_rates_list',
			[
				'label' => esc_html__( 'Tax Rate', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [ '' => esc_html__( 'None', 'elementor-pro' ) ],
				'condition' => [
					'sandbox_mode[value]' => 'yes',
				],
				'description' => esc_html__( 'To manage these options, go to your Stripe account > Products >  Tax Rates.', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'stripe_live_env_tax_rates_list',
			[
				'label' => esc_html__( 'Tax Rate', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [ '' => esc_html__( 'None', 'elementor-pro' ) ],
				'condition' => [
					'sandbox_mode[value]!' => 'yes',
				],
				'description' => esc_html__( 'To manage these options, go to your Stripe account > Products >  Tax Rates.', 'elementor-pro' ),
			]
		);

		$this->end_controls_section();
	}
	/**
	 * Updates Button tab controls in 'Style' tab
	 *
	 * @since 3.7.0
	 */
	public function register_stripe_button_controls() {
		parent::register_controls();

		$this->update_control( 'selected_icon', [
			'default' => [
				'value' => 'fab fa-stripe-s',
				'library' => 'fa-brands',
			],
			'recommended' => [
				'fa-brands' => [
					'stripe-s',
					'stripe',
					'cc-stripe',
				],
			],
		] );

		$this->update_control( 'background_color', [
			'default' => '#635bff',
		] );
	}

	/**
	 * Edit button control initial UI
	 *
	 * @since 3.7.0
	 *
	 */
	protected function register_controls() {
		$this->register_stripe_button_controls();
	}

	/**
	 * Update error messages controls text and placeholders.
	 *
	 * @since 3.7.0
	 *
	 */
	protected function update_error_massages() {
		$this->update_control(
			'error_message_' . self::ERROR_MESSAGE_GLOBAL,
			[
				'placeholder' => $this->stripe_global_error_massage(),
				'default' => $this->stripe_global_error_massage(),
			]
		);

		$this->update_control(
			'error_message_' . self::ERROR_MESSAGE_PAYMENT_METHOD,
			[
				'placeholder' => $this->stripe_gateway_error_massage(),
				'default' => $this->stripe_gateway_error_massage(),
			]
		);
	}

	/**
	 * Custom sandbox controls.
	 *
	 * @since 3.7.0
	 *
	 */
	protected function after_custom_messages_toggle() {
		$this->add_control(
			'custom_error_on_notice',
			[
				'type' => Controls_Manager::RAW_HTML,
				'raw' => esc_html__( 'These messages override Stripe\'s error messages.', 'elementor-pro' ) . '<br/>' . esc_html__( 'Use them on your live site - not while testing.', 'elementor-pro' ),
				'content_classes' => 'elementor-descriptor',
				'condition' => [
					'custom_messages!' => '',
				],
			]
		);
	}

	protected function register_sandbox_controls() {
		$this->update_control( 'sandbox_mode',
			[
				'label' => esc_html__( 'Stripe test environment', 'elementor-pro' ),
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'sandbox_mode_on_notice',
			[
				'type' => Controls_Manager::RAW_HTML,
				'raw' => sprintf(
					/* translators: 1: Elementor's integrations settings link opening tab, 2: Link closing tag. */
					esc_html__( 'Complete the entire checkout experience on your site with a mock payment method, using the Stripe Test key in the %1$sIntegrations Settings%2$s.', 'elementor-pro' ),
					sprintf( '<a href="%s" target="_blank">', admin_url( 'admin.php?page=elementor#tab-integrations' ) ),
					'</a>'
				),
				'content_classes' => 'elementor-descriptor',
				'condition' => [
					'sandbox_mode' => 'yes',
				],
			]
		);

		$this->remove_control( 'sandbox_email' );
	}
}
