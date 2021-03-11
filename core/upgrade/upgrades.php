<?php
namespace ElementorPro\Core\Upgrade;

use Elementor\Core\Base\Document;
use Elementor\Core\Upgrade\Updater;
use ElementorPro\Plugin;
use Elementor\Modules\History\Revisions_Manager;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Upgrades {

	public static function _v_1_3_0() {
		global $wpdb;

		// Fix Button widget to new sizes options
		$post_ids = $wpdb->get_col(
			'SELECT `post_id` FROM `' . $wpdb->postmeta . '` WHERE `meta_key` = "_elementor_data" AND `meta_value` LIKE \'%"widgetType":"form"%\';'
		);

		if ( empty( $post_ids ) ) {
			return;
		}

		foreach ( $post_ids as $post_id ) {
			$document = Plugin::elementor()->documents->get( $post_id );

			if ( $document ) {
				$data = $document->get_elements_data();
			}

			if ( empty( $data ) ) {
				continue;
			}

			$data = Plugin::elementor()->db->iterate_data( $data, function( $element ) {
				if ( empty( $element['widgetType'] ) || 'form' !== $element['widgetType'] ) {
					return $element;
				}

				if ( ! isset( $element['settings']['submit_actions'] ) ) {
					$element['settings']['submit_actions'] = [ 'email' ];
				}

				if ( ! empty( $element['settings']['redirect_to'] ) ) {
					if ( ! in_array( 'redirect', $element['settings']['submit_actions'] ) ) {
						$element['settings']['submit_actions'][] = 'redirect';
					}
				}

				if ( ! empty( $element['settings']['webhooks'] ) ) {
					if ( ! in_array( 'webhook', $element['settings']['submit_actions'] ) ) {
						$element['settings']['submit_actions'][] = 'webhook';
					}
				}

				return $element;
			} );

			self::save_editor( $post_id, $data );
		}
	}

	public static function _v_1_4_0() {
		global $wpdb;

		// Move all posts columns to classic skin (Just add prefix)
		$post_ids = $wpdb->get_col(
			'SELECT `post_id` FROM `' . $wpdb->postmeta . '` WHERE `meta_key` = "_elementor_data" AND `meta_value` LIKE \'%"widgetType":"posts"%\';'
		);

		if ( empty( $post_ids ) ) {
			return;
		}

		foreach ( $post_ids as $post_id ) {
			$document = Plugin::elementor()->documents->get( $post_id );

			if ( $document ) {
				$data = $document->get_elements_data();
			}

			if ( empty( $data ) ) {
				continue;
			}

			$data = Plugin::elementor()->db->iterate_data( $data, function( $element ) {
				if ( empty( $element['widgetType'] ) || 'posts' !== $element['widgetType'] ) {
					return $element;
				}

				$fields_to_change = [
					'columns',
					'columns_mobile',
					'columns_tablet',
				];

				foreach ( $fields_to_change as $field ) {
					// TODO: Remove old value later
					$new_field_key = 'classic_' . $field;
					if ( isset( $element['settings'][ $field ] ) && ! isset( $element['settings'][ $new_field_key ] ) ) {
						$element['settings'][ $new_field_key ] = $element['settings'][ $field ];
					}
				}

				return $element;
			} );

			$document = Plugin::elementor()->documents->get( $post_id );

			$document->save( [
				'elements' => $data,
			] );
		}
	}

	public static function _v_1_12_0() {
		global $wpdb;

		// Set `mailchimp_api_key_source` to `custom`.
		$post_ids = $wpdb->get_col(
			'SELECT `post_id` FROM `' . $wpdb->postmeta . '` WHERE `meta_key` = "_elementor_data" AND `meta_value` LIKE \'%"widgetType":"form"%\';'
		);

		if ( empty( $post_ids ) ) {
			return;
		}

		foreach ( $post_ids as $post_id ) {
			$do_update = false;
			$document = Plugin::elementor()->documents->get( $post_id );

			if ( $document ) {
				$data = $document->get_elements_data();
			}

			if ( empty( $data ) ) {
				continue;
			}

			$data = Plugin::elementor()->db->iterate_data( $data, function( $element ) use ( &$do_update ) {
				if ( empty( $element['widgetType'] ) || 'form' !== $element['widgetType'] ) {
					return $element;
				}

				if ( ! empty( $element['settings']['mailchimp_api_key'] ) && ! isset( $element['settings']['mailchimp_api_key_source'] ) ) {
					$element['settings']['mailchimp_api_key_source'] = 'custom';
					$do_update = true;
				}

				return $element;
			} );

			// Only update if form has mailchimp
			if ( ! $do_update ) {
				continue;
			}
			// We need the `wp_slash` in order to avoid the unslashing during the `update_post_meta`
			$json_value = wp_slash( wp_json_encode( $data ) );

			update_metadata( 'post', $post_id, '_elementor_data', $json_value );
		}
	}

	/**
	 * Replace 'sticky' => 'yes' with 'sticky' => 'top' in sections.
	 */
	public static function _v_2_0_3() {
		global $wpdb;

		$post_ids = $wpdb->get_col(
			'SELECT `post_id` FROM `' . $wpdb->postmeta . '` WHERE `meta_key` = "_elementor_data" AND `meta_value` LIKE \'%"sticky":"yes"%\';'
		);

		if ( empty( $post_ids ) ) {
			return;
		}

		foreach ( $post_ids as $post_id ) {
			$do_update = false;

			$document = Plugin::elementor()->documents->get( $post_id );

			if ( ! $document ) {
				continue;
			}

			$data = $document->get_elements_data();

			if ( empty( $data ) ) {
				continue;
			}

			$data = Plugin::elementor()->db->iterate_data( $data, function( $element ) use ( &$do_update ) {
				if ( empty( $element['elType'] ) || 'section' !== $element['elType'] ) {
					return $element;
				}

				if ( ! empty( $element['settings']['sticky'] ) && 'yes' === $element['settings']['sticky'] ) {
					$element['settings']['sticky'] = 'top';
					$do_update = true;
				}

				return $element;
			} );

			if ( ! $do_update ) {
				continue;
			}
			// We need the `wp_slash` in order to avoid the unslashing during the `update_metadata`
			$json_value = wp_slash( wp_json_encode( $data ) );

			update_metadata( 'post', $post_id, '_elementor_data', $json_value );
		} // End foreach().
	}

	private static function save_editor( $post_id, $posted ) {
		// Change the global post to current library post, so widgets can use `get_the_ID` and other post data
		if ( isset( $GLOBALS['post'] ) ) {
			$global_post = $GLOBALS['post'];
		}
		$GLOBALS['post'] = get_post( $post_id ); // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited

		$editor_data = self::get_editor_data( $posted );

		// We need the `wp_slash` in order to avoid the unslashing during the `update_post_meta`
		$json_value = wp_slash( wp_json_encode( $editor_data ) );

		$is_meta_updated = update_metadata( 'post', $post_id, '_elementor_data', $json_value );

		if ( $is_meta_updated ) {
			Revisions_Manager::handle_revision();
		}

		// Restore global post
		if ( isset( $global_post ) ) {
			$GLOBALS['post'] = $global_post; // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
		} else {
			unset( $GLOBALS['post'] );
		}

		/**
		 * After editor saves data.
		 *
		 * Fires after Elementor editor data was saved.
		 *
		 * @since 1.0.0
		 *
		 * @param int   $post_id     The ID of the post.
		 * @param array $editor_data The editor data.
		 */
		do_action( 'elementor/editor/after_save', $post_id, $editor_data );
	}

	private static function get_editor_data( $data, $with_html_content = false ) {
		$editor_data = [];

		foreach ( $data as $element_data ) {
			$element = Plugin::elementor()->elements_manager->create_element_instance( $element_data );

			if ( ! $element ) {
				continue;
			}

			$editor_data[] = $element->get_raw_data( $with_html_content );
		} // End Section

		return $editor_data;
	}

	public static function _v_2_5_0_form( $updater ) {
		$changes = [
			[
				'callback' => [ 'ElementorPro\Core\Upgrade\Upgrades', '_rename_repeater_settings' ],
				'control_ids' => [
					'form_fields' => [
						'_id' => 'custom_id',
					],
				],
			],
		];

		return self::_update_widget_settings( 'form', $updater, $changes );
	}

	public static function _v_2_5_0_woocommerce_menu_cart( $updater ) {
		$changes = [
			[
				'callback' => [ 'ElementorPro\Core\Upgrade\Upgrades', '_rename_widget_settings' ],
				'control_ids' => [
					'checkout_button_border_color' => 'checkout_border_color',
					'view_cart_button_border_color' => 'view_cart_border_color',
				],
			],
			[
				'callback' => [ 'ElementorPro\Core\Upgrade\Upgrades', '_slider_to_border_settings' ],
				'control_ids' => [
					'checkout_button_border_width' => [
						'new' => 'checkout_border_width',
						'add' => 'checkout_border_border',
					],
					'view_cart_button_border_width' => [
						'new' => 'view_cart_border_width',
						'add' => 'view_cart_border_border',
					],
				],
			],
		];

		return self::_update_widget_settings( 'woocommerce-menu-cart', $updater, $changes );
	}

	public static function _slider_to_border_settings( $element, $args ) {
		$widget_id = $args['widget_id'];
		$changes = $args['control_ids'];

		if ( empty( $element['widgetType'] ) || $widget_id !== $element['widgetType'] ) {
			return $element;
		}

		foreach ( $changes as $old => $new ) {
			if ( ! empty( $element['settings'][ $old ] ) && ! isset( $element['settings'][ $new['new'] ] ) ) {
				$new_border_width = [
					'unit' => $element['settings'][ $old ]['unit'],
					'top' => $element['settings'][ $old ]['size'],
					'bottom' => $element['settings'][ $old ]['size'],
					'left' => $element['settings'][ $old ]['size'],
					'right' => $element['settings'][ $old ]['size'],
					'isLinked' => true,
				];
				$element['settings'][ $new ['new'] ] = $new_border_width;
				$element['settings'][ $new ['add'] ] = 'solid';
				$args['do_update'] = true;
			}
		}
		return $element;
	}

	/**
	 * @param $element
	 * @param $args
	 *
	 * @return mixed
	 */
	public static function _rename_repeater_settings( $element, $args ) {
		$widget_id = $args['widget_id'];
		$changes = $args['control_ids'];

		if ( empty( $element['widgetType'] ) || $widget_id !== $element['widgetType'] ) {
			return $element;
		}

		foreach ( $changes as $change_key => $change ) {
			foreach ( $change as $old => $new ) {
				foreach ( $element['settings'][ $change_key ] as &$repeater ) {
					if ( ! empty( $repeater[ $old ] ) && ! isset( $repeater[ $new ] ) ) {
						$repeater[ $new ] = $repeater[ $old ];
						$args['do_update'] = true;
					}
				}
			}
		}

		return $element;
	}

	private static function taxonomies_mapping( $prefix, $map_to ) {
		$taxonomy_filter_args = [
			'show_in_nav_menus' => true,
		];

		$taxonomies = get_taxonomies( $taxonomy_filter_args );

		$mapping = [];

		foreach ( $taxonomies as $taxonomy ) {
			$mapping[ $prefix . $taxonomy . '_ids' ] = $map_to;
		}

		return $mapping;
	}

	public static function _v_2_5_0_posts( $updater ) {
		$add_taxonomies = self::taxonomies_mapping( 'posts_', [ 'posts_include' => 'terms' ] );
		$merge_taxonomies = self::taxonomies_mapping( 'posts_', 'posts_include_term_ids' );

		$changes = [
			[
				'callback' => [ 'ElementorPro\Core\Upgrade\Upgrades', '_rename_widget_settings' ],
				'control_ids' => [
					'orderby' => 'posts_orderby',
					'order' => 'posts_order',
					'offset' => 'posts_offset',
					'exclude' => 'posts_exclude',
					'exclude_ids' => 'posts_exclude_ids',
					'posts_query_id' => 'posts_posts_query_id',
					'avoid_duplicates' => 'posts_avoid_duplicates',
					'posts_authors' => 'posts_include_authors',
				],
			],
			[
				'callback' => [ 'ElementorPro\Core\Upgrade\Upgrades', '_add_widget_settings_to_array' ],
				'control_ids' => array_merge( $add_taxonomies, [
					'posts_authors' => [ 'posts_include' => 'authors' ],
				] ),
			],
			[
				'callback' => [ 'ElementorPro\Core\Upgrade\Upgrades', '_merge_widget_settings' ],
				'control_ids' => $merge_taxonomies,
			],
		];

		return self::_update_widget_settings( 'posts', $updater, $changes );
	}

	public static function _v_2_5_0_portfolio( $updater ) {
		$add_taxonomies = self::taxonomies_mapping( 'posts_', [ 'posts_include' => 'terms' ] );
		$merge_taxonomies = self::taxonomies_mapping( 'posts_', 'posts_include_term_ids' );

		$changes = [
			[
				'callback' => [ 'ElementorPro\Core\Upgrade\Upgrades', '_rename_widget_settings' ],
				'control_ids' => [
					'orderby' => 'posts_orderby',
					'order' => 'posts_order',
					'offset' => 'posts_offset',
					'exclude' => 'posts_exclude',
					'exclude_ids' => 'posts_exclude_ids',
					'posts_query_id' => 'posts_posts_query_id',
					'avoid_duplicates' => 'posts_avoid_duplicates',
					'posts_authors' => 'posts_include_authors',
				],
			],
			[
				'callback' => [ 'ElementorPro\Core\Upgrade\Upgrades', '_add_widget_settings_to_array' ],
				'control_ids' => array_merge( $add_taxonomies, [
					'posts_authors' => [ 'posts_include' => 'authors' ],
				] ),
			],
			[
				'callback' => [ 'ElementorPro\Core\Upgrade\Upgrades', '_merge_widget_settings' ],
				'control_ids' => $merge_taxonomies,
			],
		];

		return self::_update_widget_settings( 'portfolio', $updater, $changes );
	}

	public static function _v_2_5_0_products( $updater ) {
		$add_taxonomies = self::taxonomies_mapping( 'query_', [ 'query_include' => 'terms' ] );
		$merge_taxonomies = self::taxonomies_mapping( 'query_', 'query_include_term_ids' );
		$changes = [
			[
				'callback' => [ 'ElementorPro\Core\Upgrade\Upgrades', '_rename_widget_settings' ],
				'control_ids' => [
					'orderby' => 'query_orderby',
					'order' => 'query_order',
					'exclude' => 'query_exclude',
					'exclude_ids' => 'query_exclude_ids',
					'query_authors' => 'query_include_authors',
					'query_product_tag_ids' => 'query_include_term_ids',
					'query_product_cat_ids' => 'query_include_term_ids',
				],
			],
			[
				'callback' => [ 'ElementorPro\Core\Upgrade\Upgrades', '_add_widget_settings_to_array' ],
				'control_ids' => array_merge( $add_taxonomies, [
					'query_authors' => [ 'query_include' => 'authors' ],
				] ),
			],
			[
				'callback' => [ 'ElementorPro\Core\Upgrade\Upgrades', '_merge_widget_settings' ],
				'control_ids' => $merge_taxonomies,
			],
		];

		return self::_update_widget_settings( 'woocommerce-products', $updater, $changes );
	}

	/**
	 * @param $updater
	 *
	 * @return bool Should run again.
	 */
	public static function _v_2_5_0_sitemap( $updater ) {
		$changes = [
			[
				'callback' => [ 'ElementorPro\Core\Upgrade\Upgrades', '_rename_widget_settings' ],
				'control_ids' => [
					'exclude' => 'sitemap_exclude',
					'exclude_ids' => 'sitemap_exclude_ids',
				],
			],
		];

		return self::_update_widget_settings( 'sitemap', $updater, $changes );
	}

	/**
	 * @param Updater $updater
	 *
	 * @return bool
	 */
	public static function _v_2_5_0_popup_border_radius( $updater ) {
		global $wpdb;

		$post_ids = $updater->query_col(
			"SELECT pm1.post_id
					FROM {$wpdb->postmeta} AS pm1
					LEFT JOIN {$wpdb->postmeta} AS pm2 ON (pm1.post_id = pm2.post_id)
					WHERE pm1.meta_key = '_elementor_template_type'
					AND pm1.meta_value = 'popup'
					AND pm2.`meta_key` = '" . Document::PAGE_META_KEY . "'
					AND pm2.`meta_value` LIKE '%border_radius%';"
		);

		if ( empty( $post_ids ) ) {
			return false;
		}

		foreach ( $post_ids as $post_id ) {
			// Clear WP cache for next step.
			$document = Plugin::elementor()->documents->get( $post_id );

			if ( ! $document ) {
				continue;
			}

			$page_settings = $document->get_settings();

			// Check if there isn't 'border_radius' setting or if it has already been upgraded
			if ( empty( $page_settings['border_radius']['size'] ) ) {
				continue;
			}

			$border_radius = $page_settings['border_radius'];

			$new_border_radius = [
				'unit' => $border_radius['unit'],
				'top' => $border_radius['size'],
				'bottom' => $border_radius['size'],
				'left' => $border_radius['size'],
				'right' => $border_radius['size'],
				'isLinked' => true,
			];

			$page_settings['border_radius'] = $new_border_radius;

			// TODO: `$document->update_settings`.
			$document->update_meta( Document::PAGE_META_KEY, $page_settings );

			wp_cache_flush();
		} // End foreach().

		return $updater->should_run_again( $post_ids );
	}

	public static function _v_2_5_4_posts( $updater ) {
		$merge_taxonomies = self::taxonomies_mapping( 'posts_', 'posts_include_term_ids' );

		$changes = [
			[
				'callback' => [ 'ElementorPro\Core\Upgrade\Upgrades', '_convert_term_id_to_term_taxonomy_id' ],
				'control_ids' => $merge_taxonomies,
				'prefix' => 'posts_',
				'new_id' => 'include_term_ids',
			],
		];

		return self::_update_widget_settings( 'posts', $updater, $changes );
	}

	public static function _v_2_5_4_portfolio( $updater ) {
		$merge_taxonomies = self::taxonomies_mapping( 'posts_', 'posts_include_term_ids' );

		$changes = [
			[
				'callback' => [ 'ElementorPro\Core\Upgrade\Upgrades', '_convert_term_id_to_term_taxonomy_id' ],
				'control_ids' => $merge_taxonomies,
				'prefix' => 'posts_',
				'new_id' => 'include_term_ids',
			],
		];

		return self::_update_widget_settings( 'portfolio', $updater, $changes );
	}

	public static function _v_2_5_4_products( $updater ) {
		$merge_taxonomies = self::taxonomies_mapping( 'query_', 'query_include_term_ids' );
		$changes = [
			[
				'callback' => [ 'ElementorPro\Core\Upgrade\Upgrades', '_convert_term_id_to_term_taxonomy_id' ],
				'control_ids' => $merge_taxonomies,
				'prefix' => 'query_',
				'new_id' => 'include_term_ids',
			],
		];

		return self::_update_widget_settings( 'woocommerce-products', $updater, $changes );
	}

	public static function _v_2_5_4_form( $updater ) {
		$changes = [
			[
				'callback' => [ 'ElementorPro\Core\Upgrade\Upgrades', '_missing_form_custom_id_settings' ],
				'control_ids' => [],
			],
		];

		return self::_update_widget_settings( 'form', $updater, $changes );
	}

	public static function _v_3_1_0_media_carousel( $updater ) {
		$changes = [
			[
				'callback' => [ 'ElementorPro\Core\Upgrade\Upgrades', '_convert_progress_to_progressbar' ],
				'control_ids' => [],
			],
		];

		return self::_update_widget_settings( 'media-carousel', $updater, $changes );
	}

	public static function _v_3_1_0_reviews( $updater ) {
		$changes = [
			[
				'callback' => [ 'ElementorPro\Core\Upgrade\Upgrades', '_convert_progress_to_progressbar' ],
				'control_ids' => [],
			],
		];

		return self::_update_widget_settings( 'reviews', $updater, $changes );
	}

	public static function _v_3_1_0_testimonial_carousel( $updater ) {
		$changes = [
			[
				'callback' => [ 'ElementorPro\Core\Upgrade\Upgrades', '_convert_progress_to_progressbar' ],
				'control_ids' => [],
			],
		];

		return self::_update_widget_settings( 'testimonial-carousel', $updater, $changes );
	}

	public static function _v_3_1_0_slides( $updater ) {
		$changes = [
			[
				'callback' => [ 'ElementorPro\Core\Upgrade\Upgrades', '_migrate_slides_button_color_settings' ],
				'control_ids' => [],
			],
		];

		return self::_update_widget_settings( 'slides', $updater, $changes );
	}

	/**
	 * $changes is an array of arrays in the following format:
	 * [
	 *   'control_ids' => array of control ids
	 *   'callback' => user callback to manipulate the control_ids
	 * ]
	 *
	 * @param       $widget_id
	 * @param       $updater
	 * @param array $changes
	 *
	 * @return bool
	 */
	public static function _update_widget_settings( $widget_id, $updater, $changes ) {
		global $wpdb;

		$post_ids = $updater->query_col(
			'SELECT `post_id`
					FROM `' . $wpdb->postmeta . '`
					WHERE `meta_key` = "_elementor_data"
					AND `meta_value` LIKE \'%"widgetType":"' . $widget_id . '"%\';'
		);

		if ( empty( $post_ids ) ) {
			return false;
		}

		foreach ( $post_ids as $post_id ) {
			$do_update = false;

			$document = Plugin::elementor()->documents->get( $post_id );

			if ( ! $document ) {
				continue;
			}

			$data = $document->get_elements_data();

			if ( empty( $data ) ) {
				continue;
			}

			// loop thru callbacks & array
			foreach ( $changes as $change ) {
				$args = [
					'do_update' => &$do_update,
					'widget_id' => $widget_id,
					'control_ids' => $change['control_ids'],
				];
				if ( isset( $change['prefix'] ) ) {
					$args['prefix'] = $change['prefix'];
					$args['new_id'] = $change['new_id'];
				}
				$data = Plugin::elementor()->db->iterate_data( $data, $change['callback'], $args );
				if ( ! $do_update ) {
					continue;
				}

				// We need the `wp_slash` in order to avoid the unslashing during the `update_metadata`
				$json_value = wp_slash( wp_json_encode( $data ) );

				update_metadata( 'post', $post_id, '_elementor_data', $json_value );
			}
		} // End foreach().

		return $updater->should_run_again( $post_ids );
	}

	/**
	 * @param $element
	 * @param $args
	 *
	 * @return mixed
	 */
	public static function _rename_widget_settings( $element, $args ) {
		$widget_id = $args['widget_id'];
		$changes = $args['control_ids'];

		if ( empty( $element['widgetType'] ) || $widget_id !== $element['widgetType'] ) {
			return $element;
		}

		foreach ( $changes as $old => $new ) {
			if ( ! empty( $element['settings'][ $old ] ) && ! isset( $element['settings'][ $new ] ) ) {
				$element['settings'][ $new ] = $element['settings'][ $old ];
				$args['do_update'] = true;
			}
		}

		return $element;
	}

	/**
	 * @param $element
	 * @param $args
	 *
	 * @return mixed
	 */
	public static function _add_widget_settings_to_array( $element, $args ) {
		$widget_id = $args['widget_id'];
		$changes = $args['control_ids'];

		if ( empty( $element['widgetType'] ) || $widget_id !== $element['widgetType'] ) {
			return $element;
		}

		foreach ( $changes as $old_key => $added_key ) {
			if ( ! empty( $element['settings'][ $old_key ] ) ) {
				foreach ( $added_key as $control_id => $val ) {
					if ( ! in_array( $val, $element['settings'][ $control_id ], true ) ) {
						$element['settings'][ $control_id ][] = $val;
						$args['do_update'] = true;
					}
				}
			}
		}

		return $element;
	}

	/**
	 * @param $element
	 * @param $args
	 *
	 * @return mixed
	 */
	public static function _merge_widget_settings( $element, $args ) {
		$widget_id = $args['widget_id'];
		$changes = $args['control_ids'];

		if ( empty( $element['widgetType'] ) || $widget_id !== $element['widgetType'] ) {
			return $element;
		}

		foreach ( $changes as $old => $new ) {
			if ( ! empty( $element['settings'][ $old ] ) ) {
				if ( ! isset( $element['settings'][ $new ] ) ) {
					$element['settings'][ $new ] = $element['settings'][ $old ];
				} else {
					$element['settings'][ $new ] = array_unique( array_merge( $element['settings'][ $old ], $element['settings'][ $new ] ) );
				}
				$args['do_update'] = true;
			}
		}

		return $element;
	}

	/**
	 * Possible scenarios:
	 * 1) custom_id is not empty --> do nothing
	 * 2) Existing _id: Empty or Missing custom_id --> create custom_id and set the value to the value of _id
	 * 3) Missing _id: Empty or Missing custom_id --> generate a unique key and set it as custom_id value
	 * @param $element
	 * @param $args
	 *
	 * @return mixed
	 */
	public static function _missing_form_custom_id_settings( $element, $args ) {
		$widget_id = $args['widget_id'];

		if ( empty( $element['widgetType'] ) || $widget_id !== $element['widgetType'] ) {
			return $element;
		}

		$random_id = (int) substr( time(), -5 );
		//form_fields loop:
		foreach ( $element['settings']['form_fields'] as &$repeater_item ) {
			if ( ! empty( $repeater_item['custom_id'] ) ) { // Scenario 1
				continue;
			}

			if ( ! empty( $repeater_item['_id'] ) ) { // Scenario 2
				$repeater_item['custom_id'] = $repeater_item['_id'];
			} else { // Scenario 3
				$repeater_item['custom_id'] = 'field_' . $random_id;
				$random_id++;
			}

			$args['do_update'] = true;
		}

		return $element;
	}

	/**
	 * @param $element
	 * @param $args
	 *
	 * @return mixed
	 */
	public static function _convert_term_id_to_term_taxonomy_id( $element, $args ) {
		$widget_id = $args['widget_id'];
		$changes = $args['control_ids'];
		$prefix = $args['prefix'];
		$new_id = $prefix . $args['new_id'];

		if ( empty( $element['widgetType'] ) || $widget_id !== $element['widgetType'] ) {
			return $element;
		}

		// Exit if new is empty (should not happen)
		if ( empty( $element['settings'][ $new_id ] ) ) {
			return $element;
		}

		// 1) Convert each term-id to the equivalent term_taxonomy_id
		$term_taxonomy_ids = [];
		$old_term_ids = [];
		foreach ( $changes as $old => $new ) {
			if ( ! empty( $element['settings'][ $old ] ) ) {
				$start = strlen( $prefix );
				$end = -strlen( '_ids' );
				$taxonomy = substr( $old, $start, $end );
				foreach ( $element['settings'][ $old ] as $term_id ) {
					$old_term_ids[] = $term_id;
					$term_obj = get_term( $term_id, $taxonomy, OBJECT );
					if ( $term_obj && ! is_wp_error( $term_obj ) ) {
						$term_taxonomy_ids[] = $term_obj->term_taxonomy_id;
					}
				}
			}
		}

		// 2) Check if the widget's settings were changed after the u/g to 2.5.0
		$diff = array_diff( $element['settings'][ $new_id ], array_unique( $old_term_ids ) );
		if ( empty( $diff ) ) { // Nothing was changed
			$element['settings'][ $new_id . '_backup' ] = $element['settings'][ $new_id ];
			$element['settings'][ $new_id ] = $term_taxonomy_ids;
			$args['do_update'] = true;
		}

		return $element;
	}

	/**
	 * Convert 'progress' to 'progressbar'
	 *
	 * Before Elementor 2.2.0, the progress bar option key was 'progress'. In Elementor 2.2.0,
	 * it was changed to 'progressbar'. This upgrade script migrated the DB data for old websites using 'progress'.
	 *
	 * @param $element
	 * @param $args
	 * @return mixed
	 */
	public static function _convert_progress_to_progressbar( $element, $args ) {
		$widget_id = $args['widget_id'];

		if ( empty( $element['widgetType'] ) || $widget_id !== $element['widgetType'] ) {
			return $element;
		}

		if ( 'progress' === $element['settings']['pagination'] ) {
			$element['settings']['pagination'] = 'progressbar';
			$args['do_update'] = true;
		}

		return $element;
	}

	/**
	 * Migrate Slides Button Color Settings
	 *
	 * Move Slides Widget's 'button_color' settings to 'button_text_color' and 'button_border_color' as necessary,
	 * to allow for removing the redundant control.
	 *
	 * @param $element
	 * @param $args
	 * @return mixed
	 */
	public static function _migrate_slides_button_color_settings( $element, $args ) {
		if ( empty( $element['widgetType'] ) || $args['widget_id'] !== $element['widgetType'] ) {
			return $element;
		}

		// If the element doesn't use the 'button_color' control, no need to do anything.
		if ( ! isset( $element['settings']['button_color'] ) ) {
			return $element;
		}

		// Check if button_text_color is set. If it is not set, transfer the value from button_color to button_text_color.
		if ( ! isset( $element['settings']['button_text_color'] ) ) {
			$element['settings']['button_text_color'] = $element['settings']['button_color'];
			$args['do_update'] = true;
		}

		// Check if button_border_color is set. If it is not set, transfer the value from button_color to button_border_color.
		if ( ! isset( $element['settings']['button_border_color'] ) ) {
			$element['settings']['button_border_color'] = $element['settings']['button_color'];
			$args['do_update'] = true;
		}

		return $element;
	}
}
