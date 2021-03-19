# Paypal-Button.php

## Product Knowledge Base:

- [PayPal Legacy Button HTML Reference](https://developer.paypal.com/docs/paypal-payments-standard/integration-guide/html-reference-landing/)


- [PayPal API Reference](https://developer.paypal.com/docs/api/overview)

## Technical Description:

This class handles the PayPal button widget.

As of writing those lines, it only supports the **legacy** payments API of PayPal.

We planned on adding support for the `Payments API` using the [PHP](https://developer.paypal.com/docs/api/payments/v2/) || [JavaScript](https://developer.paypal.com/docs/checkout/) SDKs but 
unfortunately both of them where not suitable for our needs.

### JavaScript SDK ( AKA "Smart Buttons" ):

- The fast & easy-to-use option, but lack the support of button styling.


- Forces you to pass basic argument like `currency` or `locale` as a query parameter to the script ( [See here](https://developer.paypal.com/docs/checkout/reference/customize-sdk/) ).
  
	That means you are limited to a single currency type for each page.

### PHP SDK:
- You **can** style the button ( well, you use it with AJAX and you are not bounded to PayPal's style, so... ).
  

- PayPal created a nice [Checkout SDK](https://github.com/paypal/Checkout-PHP-SDK) which works well, but luckily for us, it doesn't support anything other than a simple checkout request. Hurray! 🎉
  
	We tried extending the SDK to at least support subscriptions, but creating a subscription in PayPal is complicated for the goal of a simple widget:
  
	You need to [create a Product](https://developer.paypal.com/docs/api/catalog-products/v1/#products_create), attach to 
  	[a Plan](https://developer.paypal.com/docs/api/subscriptions/v1/#plans_create) and finally pass it to [a Subscription](https://developer.paypal.com/docs/api/subscriptions/v1/#subscriptions_create).
  

#### They both also don't support donations, so we dropped this idea.


## Attention Needed / Known Issues:

- `get_numeric_setting( $key, $min )` retrieves a value by `key` from `get_settings()`, and return it as a numeric value, or defaults to `$min` if it's non-existent or invalid.


- `get_errors()` handles basic validations and returns an array of errors.


- `get_api_method()` && `render_legacy_form()` are leftovers from the time we tried using the `Payments API` and might be used in the future if PayPal will provide a simpler API.
