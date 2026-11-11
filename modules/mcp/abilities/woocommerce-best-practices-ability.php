<?php
namespace ElementorPro\Modules\Mcp\Abilities;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Woocommerce_Best_Practices_Ability extends Abstract_Ability {
	const URI = 'elementor://woocommerce/best-practices';
	const FILE_PATH = __DIR__ . '/../static-resources-extra/woocommerce/best-practices.md';

	protected function get_ability_id(): string {
		return 'elementor/woocommerce-best-practices';
	}

	protected function get_definition(): Ability_Definition {
		$description = __( 'How to build WooCommerce store pages with Elementor: where the shop, product, cart, checkout, my account, thank-you and empty-cart layouts live, rules and gotchas, how to assign the store pages, the checklist of admin settings the user must still change, and how to verify the live store.', 'elementor-pro' );

		return new Ability_Definition(
			__( 'WooCommerce Best Practices', 'elementor-pro' ),
			$description,
			'elementor',
			[ 'type' => 'string' ],
			[
				'mcp' => [
					'type' => 'resource',
					'uri' => self::URI,
					'public' => true,
					'mimeType' => 'text/markdown',
					'description' => $description,
				],
			],
			fn () => current_user_can( 'edit_posts' )
		);
	}

	public function execute( $input = [] ) {
		if ( ! file_exists( self::FILE_PATH ) ) {
			return new \WP_Error(
				'resource_not_found',
				__( 'Static resource file not found', 'elementor-pro' ),
				[ 'status' => 404 ]
			);
		}

		// phpcs:ignore WordPress.WP.AlternativeFunctions.file_get_contents_file_get_contents
		return file_get_contents( self::FILE_PATH );
	}
}
