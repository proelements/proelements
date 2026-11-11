<?php

namespace ElementorPro\Modules\AtomicCustomIcons;

use Elementor\Icons_Manager;
use Elementor\Modules\AtomicWidgets\Module as AtomicWidgetsModule;
use Elementor\Modules\AtomicWidgets\PropsResolver\Font_Awesome_7_Icon_Resolver;
use Elementor\Modules\AtomicWidgets\PropsResolver\Icon_Libraries;
use Elementor\Modules\AtomicWidgets\PropsResolver\Transformers\Icon_Transformer;
use ElementorPro\Base\Module_Base;
use ElementorPro\License\API;
use ElementorPro\Modules\AssetsManager\AssetTypes\Icons\Font_Awesome_Pro;
use ElementorPro\Modules\AssetsManager\AssetTypes\Icons_Manager as Custom_Icons_Manager;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {
	const LICENSE_FEATURE_NAME = 'atomic-custom-icons';

	const SKIPPED_TAB_NAMES = [ 'all', 'recommended', 'GoPro' ];

	private ?array $supported_tabs = null;

	public function get_name() {
		return 'atomic-custom-icons';
	}

	public function __construct() {
		parent::__construct();

		if ( ! $this->is_core_seam_available() ) {
			return;
		}

		add_filter( 'elementor/atomic-widgets/icon/svg-html', fn( $html, $icon ) => $this->fill_icon_svg( $html, $icon ), 20, 2 );
		add_filter( 'elementor/atomic-widgets/icon/svg-html', fn( $html, $icon ) => $this->fill_font_awesome_pro_icon_svg( $html, $icon ), 25, 2 );

		if ( self::is_core_font_awesome_pro_supported() ) {
			( new Font_Awesome_Pro_Rest_Api() )->register_hooks();
		}

		( new Rest_Api() )->register_hooks();

		add_filter( 'elementor/atomic-widgets/font-awesome-7/editor-config', fn( $config ) => $this->extend_editor_config( $config ) );
		add_filter( 'elementor/atomic-widgets/font-awesome-7/editor-config', fn( $config ) => $this->add_font_awesome_pro_config( $config ) );

		if ( ! self::is_licensed() ) {
			return;
		}

		add_filter( 'elementor/atomic-widgets/font-awesome-7/filter-items', fn( $items ) => $this->extend_filter_items( $items ) );
		add_filter( 'elementor/atomic-widgets/font-awesome-7/filter-items', fn( $items ) => $this->add_font_awesome_pro_filter_items( $items ), 5 );
		add_filter( 'elementor/atomic-widgets/icon/custom-libraries', fn( $libraries, $options = [] ) => $this->get_custom_libraries( is_array( $options ) ? $options : [] ), 10, 2 );
		add_filter( 'elementor/atomic-widgets/icon/library-values', fn( $result, $library ) => $this->owns_library( (string) $library ) ? Resolver::resolve_library_values( (string) $library ) : $result, 10, 2 );
		add_filter( 'elementor/atomic-widgets/icon/is-renderable', fn( $renderable, $library, $value ) => $this->owns_library( (string) $library ) ? Resolver::is_renderable_value( (string) $library, (string) $value ) : $renderable, 10, 3 );
	}

	private function owns_library( string $library ): bool {
		return isset( $this->get_supported_tabs()[ $library ] );
	}

	/**
	 * Strict on purpose: no BC callback, which would allow every feature on the frontend and for legacy licenses.
	 */
	public static function is_licensed(): bool {
		return ! API::is_license_expired() && API::is_licence_has_feature( self::LICENSE_FEATURE_NAME );
	}

	/**
	 * Core versions before this flag skip the `svg-html` filter for Font Awesome values, so stored Pro icons could not render.
	 */
	public static function is_core_font_awesome_pro_supported(): bool {
		return defined( Icon_Transformer::class . '::RESOLVES_EXTENSION_FONT_AWESOME_ICONS' );
	}

	private function is_core_seam_available(): bool {
		return class_exists( Font_Awesome_7_Icon_Resolver::class )
			&& class_exists( Icon_Libraries::class )
			&& Plugin::elementor()->experiments->is_feature_active( AtomicWidgetsModule::EXPERIMENT_NAME );
	}

	private function fill_icon_svg( $html, $icon ) {
		if ( is_string( $html ) && '' !== $html ) {
			return $html;
		}

		if ( ! is_array( $icon ) ) {
			return is_string( $html ) ? $html : '';
		}

		return Resolver::resolve( $icon );
	}

	private function extend_editor_config( $config ) {
		if ( ! is_array( $config ) ) {
			return $config;
		}

		$config['customIconRenderingEnabled'] = true;

		if ( ! self::is_licensed() ) {
			return $config;
		}

		$config['customIconPacks'] = $this->get_custom_icon_packs();
		$config['customIconLibrariesEnabled'] = true;

		if ( current_user_can( Custom_Icons_Manager::CAPABILITY ) ) {
			$config['customIconLibrariesUploadUrl'] = admin_url( 'edit.php?post_type=' . Custom_Icons_Manager::CPT );
		}

		return $config;
	}

	/**
	 * Saved Font Awesome Pro icons render on the frontend whenever a kit is configured, whatever the license state,
	 * so the editor gets the same rule. Only browsing new icons needs the license.
	 */
	private function add_font_awesome_pro_config( $config ) {
		if ( ! is_array( $config ) || ! $this->has_font_awesome_pro_kit() ) {
			return $config;
		}

		$config['fontAwesomePro'] = [
			'enabled' => self::is_licensed(),
			'namesUrl' => ELEMENTOR_PRO_ASSETS_URL . 'lib/font-awesome-pro/',
		];

		return $config;
	}

	private function fill_font_awesome_pro_icon_svg( $html, $icon ) {
		if ( ( is_string( $html ) && '' !== $html ) || ! is_array( $icon ) || ! $this->has_font_awesome_pro_kit() ) {
			return $html;
		}

		return Font_Awesome_Pro_Icons::resolve( $icon );
	}

	private function has_font_awesome_pro_kit(): bool {
		return self::is_core_font_awesome_pro_supported() && Font_Awesome_Pro::has_kit_id();
	}

	private function add_font_awesome_pro_filter_items( $items ) {
		if ( ! is_array( $items ) || ! $this->has_font_awesome_pro_kit() ) {
			return $items;
		}

		$items[] = [
			'type' => Font_Awesome_7_Icon_Resolver::FILTER_TYPE_ITEM,
			'value' => 'fa-light',
			'label' => esc_html__( 'Font Awesome - Light Pro', 'elementor-pro' ),
			'icon' => 'star',
		];

		return $items;
	}

	private function extend_filter_items( $items ) {
		if ( ! is_array( $items ) ) {
			return $items;
		}

		$custom_items = [];

		foreach ( $this->get_supported_tabs() as $library => $tab ) {
			$label = isset( $tab['label'] ) && is_string( $tab['label'] ) ? $tab['label'] : '';

			if ( '' === $label ) {
				continue;
			}

			$custom_items[] = [
				'type' => Font_Awesome_7_Icon_Resolver::FILTER_TYPE_ITEM,
				'value' => (string) $library,
				'label' => $label,
				'icon' => 'library',
			];
		}

		if ( empty( $custom_items ) ) {
			return $items;
		}

		$items[] = [
			'type' => Font_Awesome_7_Icon_Resolver::FILTER_TYPE_GROUP,
			'label' => esc_html__( 'My libraries', 'elementor-pro' ),
		];

		return array_merge( $items, $custom_items );
	}

	private function get_custom_libraries( array $options ): array {
		$libraries = [];

		foreach ( $this->get_supported_tabs() as $library => $tab ) {
			$label = isset( $tab['label'] ) && is_string( $tab['label'] ) ? $tab['label'] : '';

			if ( ! empty( $options['require_label'] ) && '' === $label ) {
				continue;
			}

			$libraries[ (string) $library ] = '' !== $label ? $label : (string) $library;
		}

		return $libraries;
	}

	private function get_custom_icon_packs(): array {
		$packs = [];

		foreach ( $this->get_supported_tabs() as $library => $tab ) {
			$urls = Pack_Directory::public_urls( $tab );

			if ( isset( $tab['fetchJson'] ) && is_string( $tab['fetchJson'] ) && '' !== $tab['fetchJson'] ) {
				$urls['fetchJson'] = $tab['fetchJson'];
			}

			$urls['type'] = Pack_Directory::detect_type( $tab );
			$packs[ $library ] = $urls;
		}

		return $packs;
	}

	/**
	 * @return array<string, array> Supported custom library tabs keyed by library name.
	 */
	private function get_supported_tabs(): array {
		if ( null !== $this->supported_tabs ) {
			return $this->supported_tabs;
		}

		$tabs = [];

		foreach ( Icons_Manager::get_icon_manager_tabs() as $name => $tab ) {
			if ( ! is_array( $tab ) || ! empty( $tab['native'] ) ) {
				continue;
			}

			$library = isset( $tab['name'] ) && is_scalar( $tab['name'] ) ? (string) $tab['name'] : (string) $name;

			if ( '' === $library || in_array( $library, self::SKIPPED_TAB_NAMES, true ) || str_starts_with( $library, Font_Awesome_7_Icon_Resolver::LIBRARY_PREFIX ) ) {
				continue;
			}

			$tab_with_name = $tab + [ 'name' => $library ];

			if ( ! Pack_Directory::is_supported( $tab_with_name ) ) {
				continue;
			}

			$tabs[ $library ] = $tab_with_name;
		}

		$this->supported_tabs = $tabs;

		return $tabs;
	}
}
