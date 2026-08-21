<?php
namespace ElementorPro\Modules\AtomicForm\Classes;

use Elementor\Modules\Promotions\Widgets\Atomic_Form_Widget_Promotion;
use Elementor\Utils as Elementor_Utils;
use ElementorPro\License\API;
use ElementorPro\Modules\AtomicForm\Module as Atomic_Form_Module;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Atomic_Form_Panel_Promotion {
	const CORE_PROMOTION_CLASS = Atomic_Form_Widget_Promotion::class;

	const CATEGORY_NAME = 'atomic-form';

	const FORM_FEATURE_NAME = 'form';

	const RENEW_WIDGET_CTA_URL = 'https://go.elementor.com/renew-license-atomic-form-modal';

	const RENEW_SECTION_CTA_URL = 'https://go.elementor.com/renew-license-atomic-form-section';

	public function register(): void {
		if ( ! $this->is_active() ) {
			return;
		}

		add_filter( 'elementor/editor/localize_settings', [ $this, 'add_promotion_data' ] );
		add_filter( 'elementor/document/config', [ $this, 'configure_document_panel' ], 10, 2 );
		add_action( 'elementor/editor/before_enqueue_scripts', [ $this, 'enqueue_promotion_scripts' ] );
	}

	public function add_promotion_data( array $settings ): array {
		if ( ! current_user_can( 'manage_options' ) ) {
			return $settings;
		}

		$settings = $this->get_core_promotion()->add_promotion_data( $settings );

		if ( ! $this->has_atomic_widget_promotions_api( $settings ) ) {
			return $settings;
		}

		$settings['atomicWidgetPromotions'] = $this->apply_cta_overrides_to_atomic_widget_promotions(
			$settings['atomicWidgetPromotions']
		);

		return $settings;
	}

	public function configure_document_panel( array $config, $post_id ): array {
		foreach ( $this->get_hidden_panel_widget_types() as $widget_type ) {
			$config['widgets'][ $widget_type ]['show_in_panel'] = false;
		}

		if ( ! current_user_can( 'manage_options' ) ) {
			return $config;
		}

		$promotion_content = $this->get_promotion_content();

		if ( empty( $promotion_content['sectionCtaUrl'] ) ) {
			return $config;
		}

		$config['panel']['elements_categories'][ self::CATEGORY_NAME ]['hideIfEmpty'] = false;
		$config['panel']['elements_categories'][ self::CATEGORY_NAME ]['promotion'] = $this->get_section_promotion( $promotion_content );

		return $config;
	}

	public function enqueue_promotion_scripts(): void {
		if ( ! current_user_can( 'manage_options' ) ) {
			return;
		}

		$min_suffix = Elementor_Utils::is_script_debug() ? '' : '.min';

		wp_enqueue_script(
			'e-react-promotions',
			ELEMENTOR_ASSETS_URL . 'js/e-react-promotions' . $min_suffix . '.js',
			[
				'react',
				'react-dom',
				'backbone-marionette',
				'elementor-editor-modules',
				'elementor-v2-ui',
			],
			ELEMENTOR_VERSION,
			true
		);

		wp_set_script_translations( 'e-react-promotions', 'elementor' );

		wp_localize_script( 'e-react-promotions', 'elementorPromotionsData', [] );
	}

	private function is_active(): bool {
		if ( ! class_exists( self::CORE_PROMOTION_CLASS ) ) {
			return false;
		}

		if ( API::is_license_active() && API::active_licence_has_feature( self::FORM_FEATURE_NAME ) ) {
			return false;
		}

		return version_compare( ELEMENTOR_VERSION, '4.0', '>=' )
			&& Plugin::elementor()->experiments->is_feature_active( 'e_pro_atomic_form' )
			&& Plugin::elementor()->experiments->is_feature_active( 'e_atomic_elements' );
	}

	private function get_core_promotion(): Atomic_Form_Widget_Promotion {
		return new Atomic_Form_Widget_Promotion();
	}

	private function has_atomic_widget_promotions_api( array $settings ): bool {
		return ! empty( $settings['atomicWidgetPromotions'] );
	}

	private function apply_cta_overrides_to_atomic_widget_promotions( array $promotions ): array {
		$cta_overrides = $this->get_cta_overrides();

		if ( empty( $cta_overrides ) ) {
			return $promotions;
		}

		foreach ( $promotions as $index => $promotion ) {
			if ( self::CATEGORY_NAME !== ( $promotion['type'] ?? '' ) ) {
				continue;
			}

			$promotions[ $index ]['content'] = array_merge(
				$promotion['content'] ?? [],
				$cta_overrides
			);
		}

		return $promotions;
	}

	private function get_promotion_content(): array {
		$settings = $this->get_core_promotion()->add_promotion_data( [] );

		if ( ! $this->has_atomic_widget_promotions_api( $settings ) ) {
			return [];
		}

		foreach ( $settings['atomicWidgetPromotions'] as $promotion ) {
			if ( self::CATEGORY_NAME !== ( $promotion['type'] ?? '' ) ) {
				continue;
			}

			return array_merge(
				$promotion['content'] ?? [],
				$this->get_cta_overrides()
			);
		}

		return [];
	}

	private function get_section_promotion( array $promotion_content ): array {
		return [
			'url' => $promotion_content['sectionCtaUrl'],
			'text' => $this->has_time_to_renew()
				? __( 'Renew', 'elementor-pro' )
				: __( 'Upgrade', 'elementor-pro' ),
		];
	}

	private function get_cta_overrides(): array {
		if ( ! $this->has_time_to_renew() ) {
			return [];
		}

		return [
			'ctaText' => __( 'Renew now', 'elementor-pro' ),
			'widgetCtaUrl' => API::get_renew_url( self::RENEW_WIDGET_CTA_URL ),
			'sectionCtaUrl' => API::get_renew_url( self::RENEW_SECTION_CTA_URL ),
		];
	}

	private function has_time_to_renew(): bool {
		$license_data = API::get_license_data();
		$expires_timestamp = ! empty( $license_data['expires'] )
			? strtotime( $license_data['expires'] )
			: false;

		return false !== $expires_timestamp && $expires_timestamp > current_time( 'timestamp' );
	}

	private function get_hidden_panel_widget_types(): array {
		return Atomic_Form_Module::get_form_widget_types();
	}
}
