<?php

namespace ElementorPro\Modules\Forms\Registrars;

use ElementorPro\Core\Utils\Registrar;
use ElementorPro\Modules\Forms\Actions;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Basic form actions registration manager.
 */
class Form_Actions_Registrar extends Registrar {

	/**
	 * Form_Actions_Registrar constructor.
	 *
	 * @return void
	 */
	public function __construct() {
		parent::__construct();

		$this->init();
	}

	/**
	 * Initialize the default fields.
	 *
	 * @return void
	 */
	public function init() {
		// Register the actions handlers using a hook since some actions need to be registered before those actions (e.g: save-to-database).
		add_action( 'elementor_pro/forms/actions/register', function ( Form_Actions_Registrar $actions_registrar ) {
			$actions_registrar->register( new Actions\Email() );
			$actions_registrar->register( new Actions\Email2() );
			$actions_registrar->register( new Actions\Redirect() );
			$actions_registrar->register( new Actions\Webhook() );
			$actions_registrar->register( new Actions\Mailchimp() );
			$actions_registrar->register( new Actions\Drip() );
			$actions_registrar->register( new Actions\Activecampaign() );
			$actions_registrar->register( new Actions\Getresponse() );
			$actions_registrar->register( new Actions\Convertkit() );
			$actions_registrar->register( new Actions\Mailerlite() );
			$actions_registrar->register( new Actions\Slack() );
			$actions_registrar->register( new Actions\Discord() );
		} );

		/**
		 * Deprecated actions registration hook.
		 *
		 * @deprecated 3.5.0
		 */
		Plugin::elementor()->modules_manager->get_modules( 'dev-tools' )->deprecation->do_deprecated_action(
			'elementor_pro/forms/register_action',
			[ $this ],
			'3.5.0',
			'elementor_pro/forms/actions/register'
		);

		/**
		 * Elementor Pro form actions registration.
		 * Passes the Actions_Registrar as a parameter in order to register new actions using `$registrar->register()`.
		 *
		 * @since 3.5.0
		 *
		 * @param Form_Actions_Registrar $this An instance of form actions registrar.
		 */
		do_action( 'elementor_pro/forms/actions/register', $this );

		// MailPoet
		if ( class_exists( '\WYSIJA' ) ) {
			$this->register( new Actions\Mailpoet() );
		}

		// MailPoet
		if ( class_exists( '\MailPoet\API\API' ) ) {
			$this->register( new Actions\Mailpoet3() );
		}
	}
}
