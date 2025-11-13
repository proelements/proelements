<?php
namespace ElementorPro\Modules\DynamicTags\ACF;

use Elementor\Controls_Manager;
use Elementor\Core\DynamicTags\Base_Tag;
use Elementor\Modules\DynamicTags;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends DynamicTags\Module {

	const ACF_GROUP = 'acf';

	/**
	 * @var Dynamic_Value_Provider
	 */
	private static $dynamic_value_provider;

	/**
	 * Extract the ACF field selector from a control option value.
	 *
	 * For option values in the form 'options:FIELD_NAME', returns 'FIELD_NAME'.
	 * For option values in the form 'FIELD_KEY:FIELD_NAME', returns 'FIELD_KEY'.
	 *
	 * @param string $option_value
	 * @return string
	 */
	private static function extract_field_selector_from_option( $option_value ) {
		$option_value = (string) $option_value;
		$parts = explode( ':', $option_value, 2 );

		if ( isset( $parts[0] ) && 'options' === $parts[0] ) {
			return $parts[1] ?? $option_value;
		}

		return $parts[0] ?? $option_value;
	}

	public function __construct() {
		parent::__construct();

		add_filter( 'acf/pre_load_post_id', [ $this, 'filter_post_in_preview' ], 10, 2 );

		add_filter( 'elementor/atomic/dynamic_tags/select_control_options', [ $this, 'filter_atomic_select_options_for_acf_url' ], 10, 3 );
	}

	/**
	 * ACF meta values are not copying to post revisions. This fix is for replacing revision post_id to actual one
	 *
	 * @param $null
	 * @param $post_id
	 * @return mixed
	 */
	public function filter_post_in_preview( $null, $post_id ) {
		if ( ! $post_id || ! is_preview() ) {
			return $null;
		}

		if ( $post_id instanceof \WP_Post ) {
			return $post_id->ID;
		}

		if ( $post_id instanceof \WP_Term ) {
			return $post_id->term_id;
		}

		return $post_id;
	}

	/**
	 * Filter v4 Atomic editor select options for ACF URL tag to only include ACF 'url' type fields.
	 * Does not affect legacy editor or rendering.
	 *
	 * @param array $options key => label
	 * @param array $control Original control config
	 * @param array $tag Dynamic tag config
	 * @return array Filtered options
	 */
	public function filter_atomic_select_options_for_acf_url( $options, $control, $tag ) {
		if ( empty( $tag['name'] ) || 'acf-url' !== $tag['name'] ) {
			return $options;
		}

		if ( empty( $control['name'] ) || 'key' !== $control['name'] ) {
			return $options;
		}

		if ( ! function_exists( 'acf_get_field' ) ) {
			return $options;
		}

		$filtered = [];

		foreach ( $options as $value => $label ) {
			$field_selector = static::extract_field_selector_from_option( $value );

			$field = acf_get_field( $field_selector );

			if ( is_array( $field ) && isset( $field['type'] ) && 'url' === $field['type'] ) {
				$filtered[ $value ] = $label;
			}
		}

		return empty( $filtered ) ? $options : $filtered;
	}

	/**
	 * @param array $types
	 *
	 * @return array
	 */
	public static function get_control_options( $types ) {
		// ACF >= 5.0.0
		if ( function_exists( 'acf_get_field_groups' ) ) {
			$acf_groups = acf_get_field_groups();
		} else {
			$acf_groups = apply_filters( 'acf/get_field_groups', [] );
		}

		$groups = [];

		$options_page_groups_ids = [];

		if ( function_exists( 'acf_options_page' ) ) {
			$pages = acf_options_page()->get_pages();
			foreach ( $pages as $slug => $page ) {
				$options_page_groups = acf_get_field_groups( [
					'options_page' => $slug,
				] );

				foreach ( $options_page_groups as $options_page_group ) {
					$options_page_groups_ids[] = $options_page_group['ID'];
				}
			}
		}

		foreach ( $acf_groups as $acf_group ) {
			// ACF >= 5.0.0
			if ( function_exists( 'acf_get_fields' ) ) {
				if ( isset( $acf_group['ID'] ) && ! empty( $acf_group['ID'] ) ) {
					$fields = acf_get_fields( $acf_group['ID'] );
				} else {
					$fields = acf_get_fields( $acf_group );
				}
			} else {
				$fields = apply_filters( 'acf/field_group/get_fields', [], $acf_group['id'] );
			}

			$options = [];

			if ( ! is_array( $fields ) ) {
				continue;
			}

			$has_option_page_location = in_array( $acf_group['ID'], $options_page_groups_ids, true );
			$is_only_options_page = $has_option_page_location && 1 === count( $acf_group['location'] );

			foreach ( $fields as $field ) {
				if ( ! in_array( $field['type'], $types, true ) ) {
					continue;
				}

				// Use group ID for unique keys
				if ( $has_option_page_location ) {
					$key = 'options:' . $field['name'];
					$options[ $key ] = esc_html__( 'Options', 'elementor-pro' ) . ':' . $field['label'];
					if ( $is_only_options_page ) {
						continue;
					}
				}

				$key = $field['key'] . ':' . $field['name'];
				$options[ $key ] = $field['label'];
			}

			if ( empty( $options ) ) {
				continue;
			}

			if ( 1 === count( $options ) ) {
				$options = [ -1 => ' -- ' ] + $options;
			}

			$groups[] = [
				'label' => $acf_group['title'],
				'options' => $options,
			];
		} // End foreach().

		return $groups;
	}

	public static function add_key_control( Base_Tag $tag ) {
		$tag->add_control(
			'key',
			[
				'label' => esc_html__( 'Key', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'groups' => self::get_control_options( $tag->get_supported_fields() ),
			]
		);
	}

	public function get_tag_classes_names() {
		return [
			'ACF_Text',
			'ACF_Image',
			'ACF_URL',
			'ACF_Gallery',
			'ACF_File',
			'ACF_Number',
			'ACF_Color',
			'ACF_Date_Time',
		];
	}

	// For use by ACF tags
	public static function get_tag_value_field( Base_Tag $tag ) {
		$key = $tag->get_settings( 'key' );

		// TODO: The tags should use the `Dynamic_Value_Provider::get_value()` method, but it involves
		//  heavily refactoring them, so currently this method is just a proxy and also kept for BC.

		if ( ! static::$dynamic_value_provider ) {
			static::$dynamic_value_provider = new Dynamic_Value_Provider();
		}

		return static::$dynamic_value_provider->get_value( $key );
	}

	public function get_groups() {
		return [
			self::ACF_GROUP => [
				'title' => esc_html__( 'ACF', 'elementor-pro' ),
			],
		];
	}
}
