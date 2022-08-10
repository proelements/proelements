<?php
namespace ElementorPro\Modules\Payments\Widgets;

use Elementor\Widget_Base;
use Elementor\Controls_Manager;
use Elementor\Plugin;
use Elementor\Utils;
use ElementorPro\Modules\Payments\Classes\Payment_Button;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Paypal_Button extends Payment_Button {

	// API integration types.
	const API_TYPE_SIMPLE = 'simple';
	const API_TYPE_ADVANCED = 'advanced';

	// PayPal constants.
	const PROD_URL = 'https://www.paypal.com/cgi-bin/webscr';
	const SANDBOX_URL = 'https://sandbox.paypal.com/cgi-bin/webscr';
	const CMD_CHECKOUT = '_xclick';
	const CMD_DONATION = '_donations';
	const CMD_SUBSCRIPTION = '_xclick-subscriptions';

	const BILLING_CYCLE_TYPES = [
		self::BILLING_CYCLE_DAYS => 'D',
		self::BILLING_CYCLE_WEEKS => 'W',
		self::BILLING_CYCLE_MONTHS => 'M',
		self::BILLING_CYCLE_YEARS => 'Y',
	];

	public function get_name() {
		return 'paypal-button';
	}

	public function get_title() {
		return esc_html__( 'PayPal Button', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-paypal-button';
	}

	public function get_keywords() {
		return [ 'paypal', 'payment', 'sell', 'donate' ];
	}

	protected function get_merchant_name() {
		return 'PayPal';
	}

	// Retrieve a numerical field from settings, and default to $min if it's too small.
	protected function get_numeric_setting( $key, $min = 0 ) {
		$num = doubleval( $this->get_settings_for_display( $key ) );

		return ( $min > $num ) ? $min : $num;
	}

	// Print a numerical field from settings, using `get_numeric_setting`.
	protected function print_numeric_setting( $key, $min = 0 ) {
		// PHPCS - the get_numeric_setting function is safe.
		echo $this->get_numeric_setting( $key, $min ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}

	// Get the currently selected API communication method ( legacy / SDK ).
	protected function get_api_method() {
		$settings = $this->get_settings_for_display();

		return ( self::API_TYPE_ADVANCED === $settings['merchant_account'] ) ? 'sdk' : 'legacy';
	}

	// Get validation errors.
	protected function get_errors( $squash_errors = true ) {
		$settings = $this->get_settings_for_display();
		$errors = [];

		// Don't render errors in the editor.
		if ( Plugin::instance()->editor->is_edit_mode() ) {
			return $errors;
		}

		// No payment method provided.
		if ( 'legacy' === $this->get_api_method() ) {
			$empty_email = empty( $settings['email'] );
			$empty_sandbox_email = $this->is_sandbox() && empty( $settings['sandbox_email'] );

			if ( $empty_email || $empty_sandbox_email ) {
				$errors[ self::ERROR_MESSAGE_PAYMENT_METHOD ] = $this->get_custom_message( self::ERROR_MESSAGE_PAYMENT_METHOD );
			}
		}

		// Other errors.
		$empty_product_price = ( self::PAYMENT_TYPE_DONATION !== $settings['type'] && empty( $settings['product_price'] ) );
		$empty_donation_amount = ( self::DONATION_TYPE_FIXED === $settings['donation_type'] && empty( $settings['donation_amount'] ) );
		$empty_tax = ( ! empty( $settings['tax_type'] ) && empty( $settings['tax_rate'] ) );

		if ( $empty_product_price || $empty_donation_amount || $empty_tax ) {
			$errors[ self::ERROR_MESSAGE_GLOBAL ] = $this->get_custom_message( self::ERROR_MESSAGE_GLOBAL );
		}

		// Squash errors to show only a global error.
		if ( $squash_errors && 1 < count( $errors ) ) {
			return [
				self::ERROR_MESSAGE_GLOBAL => $this->get_custom_message( self::ERROR_MESSAGE_GLOBAL ),
			];
		}

		return $errors;
	}

	// Render PayPal's legacy checkout form.
	protected function render_legacy_form() {
		$settings = $this->get_settings_for_display();

		// Handle sandbox mode.
		if ( ! $this->is_sandbox() ) {
			$form_action = self::PROD_URL;
			$email = $settings['email'];
		} else {
			$form_action = self::SANDBOX_URL;
			$email = $settings['sandbox_email'];
			$this->add_render_attribute( 'button', 'class', 'elementor-payment-sandbox-mode' );
		}

		if ( 'yes' === $settings['open_in_new_window'] ) {
			$target = '_blank';
		} else {
			$target = '_top';
		}

		// Set PayPal payment settings by payment type.
		switch ( $settings['type'] ) {
			case self::PAYMENT_TYPE_CHECKOUT:
				$cmd = self::CMD_CHECKOUT;
				$price_field = [
					'name' => 'amount',
					'value' => $settings['product_price'],
				];
				break;

			case self::PAYMENT_TYPE_DONATION:
				$cmd = self::CMD_DONATION;
				$donation_amount = '';

				// phpcs:ignore
				if ( self::DONATION_TYPE_FIXED === $settings['donation_type'] ) {
					$donation_amount = $settings['donation_amount'];
				}

				$price_field = [
					'name' => 'amount',
					'value' => $donation_amount,
				];
				break;

			case self::PAYMENT_TYPE_SUBSCRIPTION:
				$cmd = self::CMD_SUBSCRIPTION;
				$price_field = [
					'name' => 'a3',
					'value' => $settings['product_price'],
				];
				$auto_renewal = ( 'yes' === $settings['auto_renewal'] ) ? 1 : 0;
				$billing_cycle = self::BILLING_CYCLE_TYPES[ $settings['billing_cycle'] ];
				break;
		}

		// PayPal HTML reference:
		// https://developer.paypal.com/docs/paypal-payments-standard/integration-guide/html-reference-landing/

		?>
		<form action="<?php echo esc_attr( $form_action ); ?>" method="post" target="<?php echo esc_attr( $target ); ?>">
			<input type="hidden" name="cmd" value="<?php echo esc_attr( $cmd ); ?>" />
			<input type="hidden" name="business" value="<?php echo esc_attr( $email ); ?>" />
			<input type="hidden" name="lc" value="US" />
			<input type="hidden" name="item_name" value="<?php echo esc_attr( $settings['product_name'] ); ?>" />
			<input type="hidden" name="item_number" value="<?php echo esc_attr( $settings['product_sku'] ); ?>" />
			<input type="hidden" name="currency_code" value="<?php echo esc_attr( $settings['currency'] ); ?>" />
			<input type="hidden" name="<?php echo esc_attr( $price_field['name'] ); ?>" value="<?php echo esc_attr( $price_field['value'] ); ?>" />
			<input type="hidden" name="no_note" value="1">

			<?php if ( self::PAYMENT_TYPE_CHECKOUT === $settings['type'] ) { ?>
				<input type="hidden" name="shipping" value="<?php $this->print_numeric_setting( 'shipping_price' ); ?>" />
				<input type="hidden" name="tax_rate" value="<?php $this->print_numeric_setting( 'tax_rate' ); ?>" />
				<input type="hidden" name="quantity" value="<?php $this->print_numeric_setting( 'quantity', 1 ); ?>" />
				<?php
			} elseif ( self::PAYMENT_TYPE_SUBSCRIPTION === $settings['type'] ) { ?>
				<?php // PHPCS - the $auto_renewal variable is a safe. ?>
				<input type="hidden" name="src" value="<?php echo $auto_renewal; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>" />
				<input type="hidden" name="p3" value="1" />
				<?php // PHPCS - the $billing_cycle variable is a constant value from self::BILLING_CYCLE_TYPES. ?>
				<input type="hidden" name="t3" value="<?php echo $billing_cycle; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>" />
				<input type="hidden" name="no-shipping" value="1" />
				<?php
			}

			if ( ! empty( $settings['redirect_after_success']['url'] ) ) { ?>
				<input type="hidden" name="return" value="<?php echo esc_url( $settings['redirect_after_success']['url'] ); ?>">
				<?php
			}

			$this->add_render_attribute( 'button', 'type', 'submit' );
			$this->add_render_attribute( 'button', 'class', 'elementor-paypal-legacy' );
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

	// Render the payment button.
	protected function render_button( Widget_Base $instance = null, $tag = 'a' ) {
		switch ( $this->get_api_method() ) {
			case 'legacy':
				$this->render_legacy_form();
				break;
		}
	}

	// Account details section.
	protected function register_account_section() {
		$this->start_controls_section(
			'section_account',
			[
				'label' => esc_html__( 'Pricing & Payments', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'merchant_account',
			[
				'label' => esc_html__( 'Merchant Account', 'elementor-pro' ),
				'type' => Controls_Manager::HIDDEN,
				'default' => self::API_TYPE_SIMPLE,
				'options' => [
					self::API_TYPE_SIMPLE => esc_html__( 'Default (Simple)', 'elementor-pro' ),
					self::API_TYPE_ADVANCED => esc_html__( 'Custom (Advanced)', 'elementor-pro' ),
				],
				'frontend_available' => true,
			]
		);

		$this->add_control(
			'email',
			[
				'label' => esc_html__( 'PayPal Account', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
				],
				'description' => esc_html__( 'Transactions made through your PayPal button will be registered under this account.', 'elementor-pro' ),
				'label_block' => true,
				'condition' => [
					'merchant_account' => self::API_TYPE_SIMPLE,
				],
				'placeholder' => 'yours@email.com',
			]
		);

		$this->add_control(
			'sdk_token',
			[
				'label' => esc_html__( 'SDK Token', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
				],
				'label_block' => true,
				'condition' => [
					'merchant_account' => self::API_TYPE_ADVANCED,
				],
			]
		);

		$this->register_product_controls();

		$this->end_controls_section();
	}

	/**
	 * Updates Button tab controls in 'Style' tab
	 *
	 * @since 3.7.0
	 */
	public function register_paypal_button_controls() {
		parent::register_controls();

		$this->update_control( 'selected_icon', [
			'default' => [
				'value' => 'fab fa-paypal',
				'library' => 'fa-brands',
			],
		] );

		$this->update_control( 'background_color', [
			'default' => '#032E82',
		] );
	}

	/**
	 * Edit button control initial UI
	 *
	 * @since 3.7.0
	 *
	 */
	protected function register_controls() {
		$this->register_paypal_button_controls();
	}

	// Custom sandbox controls.
	protected function register_sandbox_controls() {
		$this->add_control(
			'sandbox_email',
			[
				'label' => esc_html__( 'Sandbox Email Account', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'dynamic' => [
					'active' => true,
				],
				'description' => esc_html__( 'This is the address given to you by PayPal when you set up a sandbox with your developer account. You can use the sandbox to test your purchase flow.', 'elementor-pro' ),
				'label_block' => true,
				'condition' => [
					'sandbox_mode' => 'yes',
				],
			]
		);
	}

	// This widget extends the button core widget and therefore needs to overwrite the widget-base core CSS config.
	public function get_css_config() {
		$widget_name = 'payments';

		$direction = is_rtl() ? '-rtl' : '';

		$css_file_path = 'css/widget-' . $widget_name . $direction . '.min.css';

		/*
		 * Currently this widget does not support custom-breakpoints in its CSS file.
		 * In order to support it, this widget needs to get the CSS config from the base-widget-trait.php.
		 * But to make sure that it implements the Pro assets-path due to the fact that it extends a Core widget.
		*/
		return [
			'key' => $widget_name,
			'version' => ELEMENTOR_PRO_VERSION,
			'file_path' => ELEMENTOR_PRO_ASSETS_PATH . $css_file_path,
			'data' => [
				'file_url' => ELEMENTOR_PRO_ASSETS_URL . $css_file_path,
			],
		];
	}
}
