# Payment-Button.php
 
## Technical Description:

This is an abstract class that every payment button widget will inherit from.

Because every payment button is, after all, a button, this class inherits from `Widget_Button` 
in order to keep it as close as possible to the default button widget ( and of course to avoid unnecessary code duplications ).

This class is responsible for creating the universal sections && controls of the payment buttons.
In addition, it has some abstract functions to make sure that every payment button will work as it should.

## Attention Needed / Known Issues:

- Use the `register_account_section()` function in order to add the API controls for your payment provider. 
  
	See `widgets/paypal-button.php` for reference.


- Use the `register_sandbox_controls()` function if you need more sandbox controls than the default `sandbox_mode` switch.
  
	By default, they will be registered just after the switch.
  

- Use the `after_product_type()` function when you need to add something after the product type select-box. This is useful when you want to add a 
  note to the user.
  
  See `widgets/paypal-button.php` for reference. 

- Use the `after_custom_messages_toggle()` function when you need to add something after the `custom_messages` control. 

- The currencies list **defaults to PayPal's supported currencies**, so when you extend it, make sure that this list
  is also supported in the payment method you are using, or override it with the appropriate one.
  

- The `get_custom_message( $id )` returns a custom message that is set in the `Custom Messages` control under the `Additional Settings` section, and will default to
  the default errors messages that returned from `get_default_error_messages()`.
  
	You can override this function in order to extend the default custom messages. Don't forget to extend the `register_settings_section()` and `register_messages_style_section()` functions as well.


- You should use `is_sandbox()` to determine if it's on sandbox mode.
