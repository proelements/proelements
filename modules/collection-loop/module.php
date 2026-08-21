<?php
namespace ElementorPro\Modules\CollectionLoop;

use Elementor\Core\Experiments\Manager as ExperimentsManager;
use Elementor\Modules\AtomicWidgets\Module as AtomicWidgetsModule;
use ElementorPro\Base\Module_Base;
use ElementorPro\Modules\CollectionLoop\Data\Controller as Collection_Loop_Data_Controller;
use ElementorPro\Modules\CollectionLoop\Elements\Collection_Loop\Collection_Loop;
use ElementorPro\Modules\CollectionLoop\Elements\Collection_Loop_Item\Collection_Loop_Item;
use ElementorPro\Modules\CollectionLoop\Elements\Collection_Loop_Layout\Collection_Loop_Layout;
use ElementorPro\Modules\CollectionLoop\Elements\Collection_Loop_Pagination\Collection_Loop_Pagination;
use ElementorPro\Modules\CollectionLoop\Elements\Collection_Loop_Pagination_Next\Collection_Loop_Pagination_Next;
use ElementorPro\Modules\CollectionLoop\Elements\Collection_Loop_Pagination_Prev\Collection_Loop_Pagination_Prev;
use ElementorPro\Modules\CollectionLoop\Query\Loop_Query_Prop_Type;
use ElementorPro\Modules\CollectionLoop\Query\Loop_Query_Transformer;
use ElementorPro\License\API;
use ElementorPro\Modules\CollectionLoop\Query\TemplateTypes\Template_Type_Registry;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Module extends Module_Base {
	const MODULE_NAME = 'e-collection-loop';
	const EXPERIMENT_NAME = 'e_pro_collection_loop';
	const PACKAGE_HANDLE = 'editor-collection-loop';
	const LICENSE_FEATURE_NAME = 'atomic-loop';
	const MIN_ELEMENTOR_VERSION = '4.2';
	const PAGINATION_SCRIPT_HANDLE = 'elementor-pro-collection-loop-pagination-handler';

	public function get_name() {
		return self::MODULE_NAME;
	}

	public static function get_experimental_data(): array {
		return [
			'name' => self::EXPERIMENT_NAME,
			'title' => esc_html__( 'Loop', 'elementor-pro' ),
			'description' => esc_html__( 'Loop element for repeating dynamic content. Note: This feature requires the "Atomic Widgets" experiment to be enabled.', 'elementor-pro' ),
			'hidden' => true,
			'default' => ExperimentsManager::STATE_ACTIVE,
			'release_status' => ExperimentsManager::RELEASE_STATUS_BETA,
		];
	}

	public function __construct() {
		parent::__construct();

		if ( ! $this->is_experiment_active() || ! $this->is_license_feature_enabled() ) {
			return;
		}

		add_action( 'init', fn() => $this->init_template_type_registry() );

		add_action(
			'elementor/elements/elements_registered',
			fn ( $elements_manager ) => $this->register_elements( $elements_manager )
		);

		add_filter(
			'elementor-pro/editor/v2/packages',
			fn ( $packages ) => array_merge( $packages, [ self::PACKAGE_HANDLE ] )
		);

		add_action(
			'elementor/atomic-widgets/settings/transformers/register',
			fn ( $transformers ) => $transformers->register(
				Loop_Query_Prop_Type::get_key(),
				new Loop_Query_Transformer()
			)
		);

		new Collection_Loop_Data_Controller();

		( new Embedded_Loop_Item_Css() )->register_hooks();
	}

	private function is_experiment_active(): bool {
		return version_compare( ELEMENTOR_VERSION, self::MIN_ELEMENTOR_VERSION, '>=' )
			&& Plugin::elementor()->experiments->is_feature_active( self::EXPERIMENT_NAME )
			&& Plugin::elementor()->experiments->is_feature_active( AtomicWidgetsModule::EXPERIMENT_NAME );
	}

	private function is_license_feature_enabled(): bool {
		return API::is_licence_has_feature( self::LICENSE_FEATURE_NAME );
	}

	private function init_template_type_registry(): void {
		do_action( Template_Type_Registry::REGISTER_ACTION, Template_Type_Registry::instance() );
	}

	private function register_elements( $elements_manager ) {
		$elements_manager->register_element_type( new Collection_Loop() );
		$elements_manager->register_element_type( new Collection_Loop_Layout() );
		$elements_manager->register_element_type( new Collection_Loop_Item() );
		$elements_manager->register_element_type( new Collection_Loop_Pagination() );
		$elements_manager->register_element_type( new Collection_Loop_Pagination_Prev() );
		$elements_manager->register_element_type( new Collection_Loop_Pagination_Next() );
	}
}
