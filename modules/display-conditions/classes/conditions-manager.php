<?php
namespace ElementorPro\Modules\DisplayConditions\Classes;

use ElementorPro\Core\Isolation\Wordpress_Adapter;
use ElementorPro\Modules\DisplayConditions\Conditions\Base\Condition_Base;
use ElementorPro\Modules\DisplayConditions\Module;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Conditions_Manager {
	/**
	 * @var Condition_Base[]
	 */
	private $conditions = [];

	private $groups;

	private const CONDITIONS = [
		// Page
		'Page_Title_Condition',
		'Page_Parent_Condition',
		'Page_Author_Condition',

		// Post
		'Post_Title_Condition',
		'In_Categories_Condition',
		'In_Tags_Condition',
		'Date_Of_Modification_Condition',
		'Date_Of_Publish_Condition',
		'Post_Author_Condition',
		'Post_Number_Of_Comments_Condition',
		'Featured_Image_Condition',

		// User
		'Login_Status_Condition',
		'User_Role_Condition',
		'User_Registration_Date_Condition',

		// Date and time
		'Day_Of_The_Week_Condition',
		'Time_Of_The_Day_Condition',
		'Current_Date_Condition',

		// Archive
		'Archive_Of_Category_Condition',
		'Archive_Of_Tag_Condition',
		'Archive_Of_Author_Condition',

		// Other
		'From_URL_Condition',
		'Dynamic_Tags_Condition',
	];

	private Module $display_conditions_module;

	public function __construct( $display_conditions_module ) {
		$this->display_conditions_module = $display_conditions_module;
		$this->register_conditions();
	}

	private function init_groups() {
		$this->groups = [
			'page' => [
				'label' => esc_html__( 'Page', 'elementor-pro' ),
			],
			'post' => [
				'label' => esc_html__( 'Post', 'elementor-pro' ),
			],
			'user' => [
				'label' => esc_html__( 'User', 'elementor-pro' ),
			],
			'date' => [
				'label' => esc_html__( 'Date and Time', 'elementor-pro' ),
			],
			'archive' => [
				'label' => esc_html__( 'Archive', 'elementor-pro' ),
			],
		];

		/**
		 * Registration of a group for the display conditions.
		 *
		 * Fires when a new display condition groups is registered. This hook allows developers
		 * to register new display conditions groups using add_group().
		 *
		 * @param Conditions_Manager $this An instance of conditions manager.
		 */
		do_action( 'elementor/display_conditions/register_groups', $this );

		$this->groups['other'] = [ 'label' => esc_html__( 'Other', 'elementor-pro' ) ];
	}

	private function register_condition( $id, $args = [] ) {
		if ( isset( $this->conditions[ $id ] ) ) {
			return;
		}

		$container = Plugin::instance()->get_elementor_pro_container();

		if ( $container->has( Wordpress_Adapter::class ) ) {
			$args[] = $container->get( Wordpress_Adapter::class );
		} else {
			$args[] = new Wordpress_Adapter();
		}

		$class_name = '\\ElementorPro\\Modules\\DisplayConditions\\Conditions\\' . $id;

		/** @var Condition_Base $condition */
		$condition = new $class_name( $args );

		$this->register_condition_instance( $condition );
	}

	/**
	 * @param Condition_Base $instance
	 * @return false|void
	 */
	public function register_condition_instance( Condition_Base $instance ) {
		$id = $instance->get_name();
		$is_exist = $this->get_condition( $id );

		if ( false !== $is_exist ) {
			return false; // Already registered.
		}

		$this->conditions[ $id ] = $instance;
	}

	/**
	 * Add condition group.
	 *
	 * Register new group for the condition.
	 *
	 * @access public
	 *
	 * @param string $group_name       Group name.
	 * @param array  $group_properties Group properties.
	 */
	public function add_group( $group_name, $group_properties ) {
		if ( null === $this->groups ) {
			$this->get_groups();
		}

		if ( ! isset( $this->groups[ $group_name ] ) ) {
			$this->groups[ $group_name ] = $group_properties;
		}
	}

	/**
	 * Get condition groups.
	 *
	 * Retrieve the list of groups for the conditions.
	 *
	 * @access private
	 *
	 * @return array Condition groups.
	 */
	private function get_groups() {
		if ( null === $this->groups ) {
			$this->init_groups();
		}

		return $this->groups;
	}

	/**
	 * @param $id
	 *
	 * @return Condition_Base|bool
	 */
	public function get_condition( $id ) {
		return isset( $this->conditions[ $id ] ) ? $this->conditions[ $id ] : false;
	}

	public function get_conditions_config() {
		$config = [];

		$config['conditions'] = [];

		foreach ( $this->conditions as $condition ) {
			$config['conditions'][ $condition->get_name() ] = $condition->get_config();
		}

		$config['groups'] = $this->get_groups();
		$config['show_cache_notice'] = $this->display_conditions_module->get_component( 'cache_notice' )->should_show_notice();

		return $config;
	}

	public function register_conditions() {
		$conditions = self::CONDITIONS;

		foreach ( $conditions as $condition ) {
			$this->register_condition( $condition );
		}

		/**
		 * Elementor display conditions registration.
		 *
		 * Fires when a new display condition is registered. This hook allows developers
		 * to register new display conditions using register_condition_instance().
		 *
		 * @param Conditions_Manager $this An instance of conditions manager.
		 */
		do_action( 'elementor/display_conditions/register', $this );
	}
}
