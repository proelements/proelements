<?php
namespace ElementorPro\Modules\DynamicTags;

use Elementor\Modules\DynamicTags\Module as TagsModule;
use ElementorPro\Modules\DynamicTags\ACF;
use ElementorPro\Modules\DynamicTags\Toolset;
use ElementorPro\Modules\DynamicTags\Pods;
use ElementorPro\Core\Utils;
use ElementorPro\License\API;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends TagsModule {

	const AUTHOR_GROUP = 'author';

	const POST_GROUP = 'post';

	const COMMENTS_GROUP = 'comments';

	const SITE_GROUP = 'site';

	const ARCHIVE_GROUP = 'archive';

	const MEDIA_GROUP = 'media';

	const ACTION_GROUP = 'action';

	const WOOCOMMERCE_GROUP = 'woocommerce';

	// TODO: Remove when Core 3.10.0 is released.
	const DATETIME_CATEGORY = 'datetime';

	const LICENSE_FEATURE_ACF_NAME = 'dynamic-tags-acf';
	const LICENSE_FEATURE_PODS_NAME = 'dynamic-tags-pods';
	const LICENSE_FEATURE_TOOLSET_NAME = 'dynamic-tags-toolset';

	public function __construct() {
		parent::__construct();

		$this->add_component( 'author-meta-filter', new Components\Author_Meta_Filter() );

		// ACF 5 and up
		if ( class_exists( '\acf' ) && function_exists( 'acf_get_field_groups' ) && API::is_licence_has_feature( self::LICENSE_FEATURE_ACF_NAME, API::BC_VALIDATION_CALLBACK ) ) {
			$this->add_component( 'acf', new ACF\Module() );
		}

		if ( function_exists( 'wpcf_admin_fields_get_groups' ) && API::is_licence_has_feature( self::LICENSE_FEATURE_TOOLSET_NAME, API::BC_VALIDATION_CALLBACK ) ) {
			$this->add_component( 'toolset', new Toolset\Module() );
		}

		if ( function_exists( 'pods' ) && API::is_licence_has_feature( self::LICENSE_FEATURE_PODS_NAME, API::BC_VALIDATION_CALLBACK ) ) {
			$this->add_component( 'pods', new Pods\Module() );
		}

		/*
		 * WooCommerce Add To Cart Dynamic Tag.
		 *
		 * The WC ATC Dynamic Tag returns a URL that adds items to a users cart
		 * via the URL parameters `?add-to-cart=' . $product_id . '&quantity=' . $quantity`.
		 * Normally this URL method redirects to the website's Home page after adding the items to
		 * the cart.
		 *
		 * Since the behavior of the Tag should be identical to the "Add to Cart" widget, clicking an
		 * element that is using the tag needs to redirect to the Single Product page for the added
		 * product or the Cart page after this process if the user selected that setting in WooCommerce.
		 *
		 * To accomplish that, an extra parameter in the URL ('&e-redirect=') is used. When this
		 * paramater is found, the WooCommerce Add to Cart Dynamic Tag will redirect to the
		 * appropriate page.
		 */

		//phpcs:ignore WordPress.Security.NonceVerification.Recommended -- The nonce is verified in the WC class.
		$add_to_cart = Utils::_unstable_get_super_global_value( $_REQUEST, 'add-to-cart' );
		//phpcs:ignore WordPress.Security.NonceVerification.Recommended -- The nonce is verified in the WC class.
		$redirect = Utils::_unstable_get_super_global_value( $_REQUEST, 'e-redirect' );

		if ( $add_to_cart && $redirect ) {
			add_filter( 'woocommerce_add_to_cart_redirect', [ $this, 'filter_woocommerce_add_to_cart_redirect' ], 10, 1 );
		}

		add_filter( 'elementor/document/save/data', [ $this->get_component( 'author-meta-filter' ), 'filter' ], 10, 2 );
	}

	public function filter_woocommerce_add_to_cart_redirect( $wc_get_cart_url ) {
		//phpcs:ignore WordPress.Security.NonceVerification.Recommended -- Nonce verification is not required here.
		return esc_url( Utils::_unstable_get_super_global_value( $_REQUEST, 'e-redirect' ) );
	}

	public function get_name() {
		return 'tags';
	}

	public function get_tag_classes_names() {
		return [
			'Archive_Description',
			'Archive_Meta',
			'Archive_Title',
			'Archive_URL',
			'Author_Info',
			'Author_Meta',
			'Author_Name',
			'Author_Profile_Picture',
			'Author_URL',
			'Comments_Number',
			'Comments_URL',
			'Page_Title',
			'Post_Custom_Field',
			'Post_Date',
			'Post_Excerpt',
			'Post_Featured_Image',
			'Post_Gallery',
			'Post_ID',
			'Post_Terms',
			'Post_Time',
			'Post_Title',
			'Post_URL',
			'Site_Logo',
			'Site_Tagline',
			'Site_Title',
			'Site_URL',
			'Internal_URL',
			'Current_Date_Time',
			'Request_Parameter',
			'Lightbox',
			'Featured_Image_Data',
			'Shortcode',
			'Contact_URL',
			'User_Info',
			'User_Profile_Picture',
		];
	}

	public function get_groups() {
		return [
			self::POST_GROUP => [
				'title' => esc_html__( 'Post', 'elementor-pro' ),
			],
			self::ARCHIVE_GROUP => [
				'title' => esc_html__( 'Archive', 'elementor-pro' ),
			],
			self::SITE_GROUP => [
				'title' => esc_html__( 'Site', 'elementor-pro' ),
			],
			self::MEDIA_GROUP => [
				'title' => esc_html__( 'Media', 'elementor-pro' ),
			],
			self::ACTION_GROUP => [
				'title' => esc_html__( 'Actions', 'elementor-pro' ),
			],
			self::AUTHOR_GROUP => [
				'title' => esc_html__( 'Author', 'elementor-pro' ),
			],
			self::COMMENTS_GROUP => [
				'title' => esc_html__( 'Comments', 'elementor-pro' ),
			],
			self::WOOCOMMERCE_GROUP => [
				'title' => esc_html__( 'WooCommerce', 'elementor-pro' ),
			],
		];
	}
}
