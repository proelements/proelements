<?php
namespace ElementorPro\Modules\Mcp\Abilities;

use Elementor\Core\Base\Document;
use ElementorPro\License\API;
use ElementorPro\Modules\Woocommerce\Module as Woocommerce_Module;
use ElementorPro\Modules\Woocommerce\Settings\Settings_Woocommerce;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Manage_Woocommerce_Settings_Ability extends Abstract_Ability {

	const ACTION_GET = 'get';
	const ACTION_UPDATE = 'update';
	const ACTIONS = [ self::ACTION_GET, self::ACTION_UPDATE ];

	const PAGE_POST_TYPE = 'page';

	const KIT_KEYS_BY_PAGE = [
		'cart' => 'woocommerce_cart_page_id',
		'checkout' => 'woocommerce_checkout_page_id',
		'my_account' => 'woocommerce_myaccount_page_id',
		'terms' => 'woocommerce_terms_page_id',
		'shop' => 'woocommerce_shop_page_id',
		'purchase_summary' => 'woocommerce_purchase_summary_page_id',
	];

	const PAGES_RENDERED_BY_ELEMENTOR = [ 'cart', 'checkout', 'my_account', 'purchase_summary' ];

	protected function get_ability_id(): string {
		return 'elementor/manage-woocommerce-settings';
	}

	public function is_exposed_via_proxy(): bool {
		return false;
	}

	public function is_available() {
		if ( ! Woocommerce_Module::is_active() ) {
			return $this->unavailable(
				'woocommerce_unavailable',
				__( 'WooCommerce is not active on this site. Ask the user to install and activate it, then try again.', 'elementor-pro' ),
				__( 'Note: needs WooCommerce (currently inactive on this site).', 'elementor-pro' )
			);
		}

		if ( ! API::is_licence_has_feature( Woocommerce_Module::SITE_SETTINGS_PAGES_LICENSE_FEATURE_NAME, API::BC_VALIDATION_CALLBACK ) ) {
			return $this->unavailable(
				'woocommerce_pages_not_in_license',
				__( 'The current Elementor Pro license does not include WooCommerce Pages settings. The user can assign the pages in WooCommerce → Settings → Advanced → Page setup.', 'elementor-pro' ),
				__( 'Note: needs an Elementor Pro license that includes WooCommerce Pages.', 'elementor-pro' )
			);
		}

		return true;
	}

	protected function get_definition(): Ability_Definition {
		$page_properties = array_fill_keys(
			array_keys( self::KIT_KEYS_BY_PAGE ),
			[ 'type' => 'integer' ]
		);

		return new Ability_Definition(
			__( 'Manage WooCommerce Settings', 'elementor-pro' ),
			__( 'Reads or assigns the WooCommerce store pages: cart, checkout, my_account, terms, shop, and purchase_summary (the Elementor thank-you page). These are site-wide store settings, the same as WooCommerce → Settings → Advanced → Page setup and Site Settings → WooCommerce Pages. "get" returns the current page for each. "update" sets the pages passed in "pages" (published page IDs) and returns the previous and current ID of each, so keep them to revert. Always ask the user before calling "update", naming each page you will assign. Cart, checkout, my_account and purchase_summary pages must be built with Elementor; a warning is returned when they are not. All pages are validated first: if any is invalid, nothing is changed.', 'elementor-pro' ),
			'elementor',
			[
				'type' => 'object',
				'properties' => [
					'success' => [ 'type' => 'boolean' ],
					'pages' => [ 'type' => 'object' ],
					'updated' => [ 'type' => 'object' ],
					'warnings' => [
						'type' => 'array',
						'items' => [ 'type' => 'string' ],
					],
				],
			],
			[
				'annotations' => [
					'readonly' => false,
					'idempotent' => true,
					'destructive' => true,
				],
				'mutates_page' => false,
			],
			fn () => current_user_can( 'manage_options' ) || current_user_can( 'manage_woocommerce' ),
			[
				'type' => 'object',
				'required' => [ 'action' ],
				'properties' => [
					'action' => [
						'type' => 'string',
						'enum' => self::ACTIONS,
						'description' => '"get" reads the current store pages. "update" assigns the pages in "pages".',
					],
					'pages' => [
						'type' => 'object',
						'description' => 'update only. Map of store page to a published page ID, for example { "cart": 12, "checkout": 13 }. Pass only the pages to change.',
						'properties' => $page_properties,
						'additionalProperties' => false,
					],
				],
			]
		);
	}

	public function execute( $input = [] ) {
		$input = is_array( $input ) ? $input : [];
		$action = $input['action'] ?? null;

		if ( self::ACTION_GET === $action ) {
			return $this->get_pages();
		}

		if ( self::ACTION_UPDATE === $action ) {
			return $this->update_pages( $input['pages'] ?? null );
		}

		return $this->error( 'invalid_input', __( 'A valid action is required: get or update.', 'elementor-pro' ), \WP_Http::BAD_REQUEST );
	}

	private function get_pages(): array {
		$pages = [];

		foreach ( array_keys( self::KIT_KEYS_BY_PAGE ) as $page ) {
			$pages[ $page ] = $this->describe_page( $this->get_assigned_page_id( $page ) );
		}

		return [
			'success' => true,
			'pages' => $pages,
		];
	}

	private function update_pages( $pages ) {
		$error = $this->validate_pages( $pages );

		if ( $error ) {
			return $error;
		}

		$updated = [];
		$warnings = [];

		foreach ( $pages as $page => $page_id ) {
			$page_id = (int) $page_id;
			$updated[ $page ] = [
				'previous' => $this->get_assigned_page_id( $page ),
				'current' => $page_id,
			];

			$this->assign_page( $page, $page_id );

			if ( $this->needs_elementor_page( $page ) && ! $this->is_built_with_elementor( $page_id ) ) {
				$warnings[] = sprintf(
					/* translators: 1: Store page key, 2: Page ID. */
					__( 'The %1$s page (ID %2$d) is not built with Elementor, so its Elementor content will not render. Build a new Elementor page and assign it instead.', 'elementor-pro' ),
					$page,
					$page_id
				);
			}
		}

		return [
			'success' => true,
			'updated' => $updated,
			'warnings' => $warnings,
		];
	}

	private function validate_pages( $pages ): ?\WP_Error {
		if ( ! is_array( $pages ) || empty( $pages ) ) {
			return $this->error( 'invalid_input', __( 'update needs a non-empty "pages" object.', 'elementor-pro' ), \WP_Http::BAD_REQUEST );
		}

		foreach ( $pages as $page => $page_id ) {
			$error = $this->validate_page( $page, $page_id );

			if ( $error ) {
				return $error;
			}
		}

		return null;
	}

	private function validate_page( $page, $page_id ): ?\WP_Error {
		if ( ! isset( self::KIT_KEYS_BY_PAGE[ $page ] ) ) {
			return $this->error(
				'invalid_input',
				sprintf(
					/* translators: 1: Store page key, 2: Allowed store page keys. */
					__( 'Unknown store page "%1$s". Use one of: %2$s.', 'elementor-pro' ),
					$page,
					implode( ', ', array_keys( self::KIT_KEYS_BY_PAGE ) )
				),
				\WP_Http::BAD_REQUEST
			);
		}

		if ( ! is_numeric( $page_id ) || (int) $page_id <= 0 ) {
			/* translators: %s: Store page key. */
			return $this->error( 'invalid_input', sprintf( __( 'The %s page needs a positive page ID.', 'elementor-pro' ), $page ), \WP_Http::BAD_REQUEST );
		}

		$post = get_post( (int) $page_id );

		if ( ! $post || self::PAGE_POST_TYPE !== $post->post_type ) {
			/* translators: %d: Page ID. */
			return $this->error( 'page_not_found', sprintf( __( 'Page %d was not found. Use list-posts with post_type "page".', 'elementor-pro' ), $page_id ), \WP_Http::NOT_FOUND );
		}

		if ( Document::STATUS_PUBLISH !== $post->post_status ) {
			/* translators: %d: Page ID. */
			return $this->error( 'page_not_published', sprintf( __( 'Page %d is not published. Publish it with publish-document first.', 'elementor-pro' ), $page_id ), \WP_Http::CONFLICT );
		}

		return null;
	}

	private function assign_page( string $page, int $page_id ): void {
		$kit_key = self::KIT_KEYS_BY_PAGE[ $page ];

		update_option( $this->get_option_name( $page ), $page_id );
		Plugin::elementor()->kits_manager->update_kit_settings_based_on_option( $kit_key, $page_id );
	}

	private function get_assigned_page_id( string $page ): int {
		return (int) get_option( $this->get_option_name( $page ) );
	}

	private function get_option_name( string $page ): string {
		return Settings_Woocommerce::PAGE_OPTION_NAMES_BY_KIT_KEY[ self::KIT_KEYS_BY_PAGE[ $page ] ];
	}

	private function describe_page( int $page_id ): ?array {
		if ( ! $page_id || ! get_post( $page_id ) ) {
			return null;
		}

		return [
			'page_id' => $page_id,
			'title' => get_the_title( $page_id ),
			'status' => get_post_status( $page_id ),
			'built_with_elementor' => $this->is_built_with_elementor( $page_id ),
		];
	}

	private function needs_elementor_page( string $page ): bool {
		return in_array( $page, self::PAGES_RENDERED_BY_ELEMENTOR, true );
	}

	private function is_built_with_elementor( int $page_id ): bool {
		$document = Plugin::elementor()->documents->get( $page_id );

		return $document && $document->is_built_with_elementor();
	}

	private function unavailable( string $code, string $message, string $description_notice ): \WP_Error {
		return new \WP_Error( $code, $message, [
			'status' => \WP_Http::FORBIDDEN,
			'description_notice' => $description_notice,
		] );
	}

	private function error( string $code, string $message, int $status ): \WP_Error {
		return new \WP_Error( $code, $message, [ 'status' => $status ] );
	}
}
