<?php
namespace ElementorPro\Modules\RoleManager;

use ElementorPro\Plugin;
use ElementorPro\License\API;
use ElementorPro\Base\Module_Base;
use Elementor\Core\RoleManager\Role_Manager as RoleManagerBase;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {

	const ROLE_MANAGER_OPTION_NAME = 'role-manager';

	public function get_role_manager_options() {
		return get_option( 'elementor_' . self::ROLE_MANAGER_OPTION_NAME, [] );
	}

	public function get_name() {
		return 'role-manager';
	}

	public function save_advanced_options( $input ) {
		return $input;
	}

	public function get_user_restrictions() {
		return $this->get_role_manager_options();
	}

	public function display_role_controls( $role_slug, $role_data ) {
		static $options = false;

		if ( ! API::is_license_active() || ! API::is_licence_has_feature( static::ROLE_MANAGER_OPTION_NAME, API::BC_VALIDATION_CALLBACK ) ) {
			// Promotions for PRO when the license not active.
			$this->print_role_controls_promotion();

			return;
		}

		if ( ! $options ) {
			$options = [
				'excluded_options' => Plugin::elementor()->role_manager->get_role_manager_options(),
				'advanced_options' => $this->get_role_manager_options(),
			];
		}
		$id = self::ROLE_MANAGER_OPTION_NAME . '_' . $role_slug . '_design';
		$name = 'elementor_' . self::ROLE_MANAGER_OPTION_NAME . '[' . $role_slug . '][]';
		$checked = isset( $options['advanced_options'][ $role_slug ] ) ? $options['advanced_options'][ $role_slug ] : [];

		?>
		<label for="<?php echo esc_attr( $id ); ?>">
			<input type="checkbox" name="<?php echo esc_attr( $name ); ?>" id="<?php echo esc_attr( $id ); ?>" value="design" <?php checked( in_array( 'design', $checked ), true ); ?>>
			<?php esc_html_e( 'Access to edit content only', 'elementor-pro' ); ?>
		</label>
		<?php
	}

	public function register_admin_fields( RoleManagerBase $role_manager ) {
		$role_manager->add_section( 'general', 'advanced-role-manager', [
			'fields' => [
				self::ROLE_MANAGER_OPTION_NAME => [
					'field_args' => [
						'type' => 'raw_html',
						'html' => '',
					],
					'setting_args' => [
						'sanitize_callback' => [ $this, 'save_advanced_options' ],
					],
				],
			],
		] );
	}

	private function print_role_controls_promotion() {
		?>
		<div class="elementor-role-go-pro">
			<div class="elementor-role-go-pro__desc">
				<?php echo esc_html__( 'Want to give access only to content?', 'elementor-pro' ); ?>
			</div>
			<div class="elementor-role-go-pro__link ">
				<a
					class="elementor-button go-pro"
					target="_blank"
					href="<?php echo esc_url( $this->get_cta_url() ); ?>"
				>
					<?php echo esc_html( $this->get_cta_label() ); ?>
				</a>
			</div>
		</div>
		<?php
	}

	private function get_cta_label() {
		if ( ! API::active_licence_has_feature( static::ROLE_MANAGER_OPTION_NAME ) ) {
			return esc_html__( 'Upgrade', 'elementor-pro' );
		}

		return API::is_license_expired()
			? esc_html__( 'Renew now', 'elementor-pro' )
			: esc_html__( 'Connect & Activate', 'elementor-pro' );
	}

	private function get_cta_url() {
		if ( ! API::active_licence_has_feature( static::ROLE_MANAGER_OPTION_NAME ) ) {
			return 'https://go.elementor.com/go-pro-advanced-role-manager/';
		}

		return API::is_license_expired()
			? 'https://go.elementor.com/renew-role-manager/'
			: $this->get_connect_url();
	}

	private function get_connect_url() {
		return Plugin::instance()->license_admin->get_connect_url( [
			'utm_source' => 'wp-role-manager',
			'utm_medium' => 'wp-dash',
			'utm_campaign' => 'connect-and-activate-license',
		] );
	}

	public function __construct() {
		parent::__construct();
		if ( is_admin() ) {
			add_action( 'elementor/admin/after_create_settings/' . RoleManagerBase::PAGE_ID, [ $this, 'register_admin_fields' ], 100 );
		}
		remove_action( 'elementor/role/restrictions/controls', [ Plugin::elementor()->role_manager, 'get_go_pro_link_html' ] );
		add_action( 'elementor/role/restrictions/controls', [ $this, 'display_role_controls' ], 10, 2 );
		add_filter( 'elementor/editor/user/restrictions', [ $this, 'get_user_restrictions' ] );
	}
}
