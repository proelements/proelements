<?php
namespace ElementorPro\Modules\RoleManager;

use ElementorPro\Plugin;
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
