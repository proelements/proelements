<?php
namespace ElementorPro\Core;

use ElementorPro\Plugin;
use ElementorPro\Modules\LoopBuilder\Providers\Taxonomy_Loop_Provider;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Utils {

	public static function get_public_post_types( $args = [] ) {
		$post_type_args = [
			// Default is the value $public.
			'show_in_nav_menus' => true,
		];

		// Keep for backwards compatibility
		if ( ! empty( $args['post_type'] ) ) {
			$post_type_args['name'] = $args['post_type'];
			unset( $args['post_type'] );
		}

		$post_type_args = wp_parse_args( $post_type_args, $args );

		$_post_types = get_post_types( $post_type_args, 'objects' );

		$post_types = [];

		foreach ( $_post_types as $post_type => $object ) {
			$post_types[ $post_type ] = $object->label;
		}

		/**
		 * Supported post types.
		 *
		 * Filters the allowed post types Elementor should work on.
		 *
		 * By default Elementor can be applied on publicly available post
		 * types. This hook allows developers to alter those post types to
		 * add new and remove existing types.
		 *
		 * @since 2.3.0
		 *
		 * @param array $post_types Elementor supported post types.
		 */
		$post_types = apply_filters( 'elementor_pro/utils/get_public_post_types', $post_types );

		return $post_types;
	}

	public static function get_client_ip() {
		$server_ip_keys = [
			'HTTP_CLIENT_IP',
			'HTTP_X_FORWARDED_FOR',
			'HTTP_X_FORWARDED',
			'HTTP_X_CLUSTER_CLIENT_IP',
			'HTTP_FORWARDED_FOR',
			'HTTP_FORWARDED',
			'REMOTE_ADDR',
		];

		foreach ( $server_ip_keys as $key ) {
			$value = static::_unstable_get_super_global_value( $_SERVER, $key );
			if ( $value && filter_var( $value, FILTER_VALIDATE_IP ) ) {
				return $value;
			}
		}

		// Fallback local ip.
		return '127.0.0.1';
	}

	public static function get_site_domain() {
		return str_ireplace( 'www.', '', parse_url( home_url(), PHP_URL_HOST ) );
	}

	public static function get_current_post_id() {
		if ( isset( Plugin::elementor()->documents ) && Plugin::elementor()->documents->get_current() ) {
			return Plugin::elementor()->documents->get_current()->get_main_id();
		}

		return get_the_ID();
	}

	public static function get_the_archive_url() {
		$url = '';

		if ( Taxonomy_Loop_Provider::is_loop_taxonomy_strict() ) {
			global $wp_query;
			$url = get_term_link( $wp_query->loop_term );
		} elseif ( is_category() || is_tag() || is_tax() ) {
			$url = get_term_link( get_queried_object() );
		} elseif ( is_author() ) {
			$url = get_author_posts_url( get_queried_object_id() );
		} elseif ( is_year() ) {
			$url = get_year_link( get_query_var( 'year' ) );
		} elseif ( is_month() ) {
			$url = get_month_link( get_query_var( 'year' ), get_query_var( 'monthnum' ) );
		} elseif ( is_day() ) {
			$url = get_day_link( get_query_var( 'year' ), get_query_var( 'monthnum' ), get_query_var( 'day' ) );
		} elseif ( is_post_type_archive() ) {
			$url = get_post_type_archive_link( get_post_type() );
		}

		return $url;
	}

	public static function get_page_title( $include_context = true ) {
		$title = '';

		if ( is_singular() ) {
			/* translators: %s: Search term. */
			$title = get_the_title();

			if ( $include_context ) {
				$post_type_obj = get_post_type_object( get_post_type() );
				$title = sprintf( '%s: %s', $post_type_obj->labels->singular_name, $title );
			}
		} elseif ( is_search() ) {
			/* translators: %s: Search term. */
			$title = sprintf( esc_html__( 'Search Results for: %s', 'elementor-pro' ), get_search_query() );

			if ( get_query_var( 'paged' ) ) {
				/* translators: %s: Page number. */
				$title .= sprintf( esc_html__( '&nbsp;&ndash; Page %s', 'elementor-pro' ), get_query_var( 'paged' ) );
			}
		} elseif ( is_category() ) {
			$title = single_cat_title( '', false );

			if ( $include_context ) {
				/* translators: Category archive title. %s: Category name. */
				$title = sprintf( esc_html__( 'Category: %s', 'elementor-pro' ), $title );
			}
		} elseif ( is_tag() ) {
			$title = single_tag_title( '', false );
			if ( $include_context ) {
				/* translators: Tag archive title. %s: Tag name. */
				$title = sprintf( esc_html__( 'Tag: %s', 'elementor-pro' ), $title );
			}
		} elseif ( is_author() ) {
			$title = '<span class="vcard">' . get_the_author() . '</span>';

			if ( $include_context ) {
				/* translators: Author archive title. %s: Author name. */
				$title = sprintf( esc_html__( 'Author: %s', 'elementor-pro' ), $title );
			}
		} elseif ( is_year() ) {
			$title = get_the_date( _x( 'Y', 'yearly archives date format', 'elementor-pro' ) );

			if ( $include_context ) {
				/* translators: Yearly archive title. %s: Year. */
				$title = sprintf( esc_html__( 'Year: %s', 'elementor-pro' ), $title );
			}
		} elseif ( is_month() ) {
			$title = get_the_date( _x( 'F Y', 'monthly archives date format', 'elementor-pro' ) );

			if ( $include_context ) {
				/* translators: Monthly archive title. %s: Month name and a year. */
				$title = sprintf( esc_html__( 'Month: %s', 'elementor-pro' ), $title );
			}
		} elseif ( is_day() ) {
			$title = get_the_date( _x( 'F j, Y', 'daily archives date format', 'elementor-pro' ) );

			if ( $include_context ) {
				/* translators: Daily archive title. %s: Date. */
				$title = sprintf( esc_html__( 'Day: %s', 'elementor-pro' ), $title );
			}
		} elseif ( is_tax( 'post_format' ) ) {
			if ( is_tax( 'post_format', 'post-format-aside' ) ) {
				$title = _x( 'Asides', 'post format archive title', 'elementor-pro' );
			} elseif ( is_tax( 'post_format', 'post-format-gallery' ) ) {
				$title = _x( 'Galleries', 'post format archive title', 'elementor-pro' );
			} elseif ( is_tax( 'post_format', 'post-format-image' ) ) {
				$title = _x( 'Images', 'post format archive title', 'elementor-pro' );
			} elseif ( is_tax( 'post_format', 'post-format-video' ) ) {
				$title = _x( 'Videos', 'post format archive title', 'elementor-pro' );
			} elseif ( is_tax( 'post_format', 'post-format-quote' ) ) {
				$title = _x( 'Quotes', 'post format archive title', 'elementor-pro' );
			} elseif ( is_tax( 'post_format', 'post-format-link' ) ) {
				$title = _x( 'Links', 'post format archive title', 'elementor-pro' );
			} elseif ( is_tax( 'post_format', 'post-format-status' ) ) {
				$title = _x( 'Statuses', 'post format archive title', 'elementor-pro' );
			} elseif ( is_tax( 'post_format', 'post-format-audio' ) ) {
				$title = _x( 'Audio', 'post format archive title', 'elementor-pro' );
			} elseif ( is_tax( 'post_format', 'post-format-chat' ) ) {
				$title = _x( 'Chats', 'post format archive title', 'elementor-pro' );
			}
		} elseif ( is_post_type_archive() ) {
			$title = post_type_archive_title( '', false );

			if ( $include_context ) {
				/* translators: Post type archive title. %s: Post type name. */
				$title = sprintf( esc_html__( 'Archives: %s', 'elementor-pro' ), $title );
			}
		} elseif ( is_tax() ) {
			$title = single_term_title( '', false );

			if ( $include_context ) {
				$tax = get_taxonomy( get_queried_object()->taxonomy );
				/* translators: Taxonomy term archive title. 1: Taxonomy singular name, 2: Current taxonomy term. */
				$title = sprintf( esc_html__( '%1$s: %2$s', 'elementor-pro' ), $tax->labels->singular_name, $title );
			}
		} elseif ( is_archive() ) {
			$title = esc_html__( 'Archives', 'elementor-pro' );
		} elseif ( is_404() ) {
			$title = esc_html__( 'Page Not Found', 'elementor-pro' );
		} // End if().

		/**
		 * Page title.
		 *
		 * Filters the title of the page.
		 *
		 * By default different pages have different titles depending of the page
		 * context (archive, singular, 404 etc.). This hook allows developers to
		 * alter those titles.
		 *
		 * @since 1.0.0
		 *
		 * @param string $title Page title to be displayed.
		 */
		$title = apply_filters( 'elementor/utils/get_the_archive_title', $title );

		return $title;
	}

	public static function set_global_authordata() {
		global $authordata;
		if ( ! isset( $authordata->ID ) ) {
			$post = get_post();
			$authordata = get_userdata( $post->post_author ); // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
		}
	}

	/**
	 * Used to overcome core bug when taxonomy is in more then one post type
	 *
	 * @see https://core.trac.wordpress.org/ticket/27918
	 *
	 * @global array $wp_taxonomies The registered taxonomies.
	 *
	 *
	 * @param array  $args
	 * @param string $output
	 * @param string $operator
	 *
	 * @return array
	 */
	public static function get_taxonomies( $args = [], $output = 'names', $operator = 'and' ) {
		global $wp_taxonomies;

		$field = ( 'names' === $output ) ? 'name' : false;

		// Handle 'object_type' separately.
		if ( isset( $args['object_type'] ) ) {
			$object_type = (array) $args['object_type'];
			unset( $args['object_type'] );
		}

		$taxonomies = wp_filter_object_list( $wp_taxonomies, $args, $operator );

		if ( isset( $object_type ) ) {
			foreach ( $taxonomies as $tax => $tax_data ) {
				if ( ! array_intersect( $object_type, $tax_data->object_type ) ) {
					unset( $taxonomies[ $tax ] );
				}
			}
		}

		if ( $field ) {
			$taxonomies = wp_list_pluck( $taxonomies, $field );
		}

		return $taxonomies;
	}

	public static function get_ensure_upload_dir( $path ) {
		if ( file_exists( $path . '/index.php' ) ) {
			return $path;
		}

		wp_mkdir_p( $path );

		$files = [
			[
				'file' => 'index.php',
				'content' => [
					'<?php',
					'// Silence is golden.',
				],
			],
			[
				'file' => '.htaccess',
				'content' => [
					'Options -Indexes',
					'<ifModule mod_headers.c>',
					'	<Files *.*>',
					'       Header set Content-Disposition attachment',
					'	</Files>',
					'</IfModule>',
				],
			],
		];

		foreach ( $files as $file ) {
			if ( ! file_exists( trailingslashit( $path ) . $file['file'] ) ) {
				$content = implode( PHP_EOL, $file['content'] );
				@ file_put_contents( trailingslashit( $path ) . $file['file'], $content );
			}
		}

		return $path;
	}

	/**
	 * Remove words from a sentence.
	 *
	 * @param string  $text
	 * @param integer $length
	 *
	 * @return string
	 */
	public static function trim_words( $text, $length ) {
		if ( ! $length ) {
			return $text;
		}

		$whitespace_pattern = '/\s+/u';
		$words = preg_split( $whitespace_pattern, $text, -1, PREG_SPLIT_NO_EMPTY );

		if ( count( $words ) > $length ) {
			$words = array_slice( $words, 0, $length );
		}

		return implode( ' ', $words );
	}

	/**
	 * Get a user option with default value as fallback.
	 * TODO: Use `\Elementor\User::get_user_option_with_default()` after this PR is merged:
	 *  https://github.com/elementor/elementor/pull/17745
	 *
	 * @param string $option  - Option key.
	 * @param int    $user_id - User ID
	 * @param mixed  $default - Default fallback value.
	 *
	 * @return mixed
	 */
	public static function get_user_option_with_default( $option, $user_id, $default ) {
		$value = get_user_option( $option, $user_id );

		return ( false === $value ) ? $default : $value;
	}

	/**
	 * TODO: Use core method instead (after merging PR of the original function in core).
	 *  PR URL: https://github.com/elementor/elementor/pull/18670.
	 *
	 * @param $file
	 * @param mixed ...$args
	 * @return false|string
	 */
	public static function _unstable_file_get_contents( $file, ...$args ) {
		if ( ! is_file( $file ) || ! is_readable( $file ) ) {
			return false;
		}

		return file_get_contents( $file, ...$args );
	}

	/**
	 * TODO: Use core method instead (after Pro minimum requirements is updated).
	 * PR URL: https://github.com/elementor/elementor/pull/24092
	 */
	public static function _unstable_get_super_global_value( $super_global, $key ) {
		if ( ! isset( $super_global[ $key ] ) ) {
			return null;
		}

		if ( $_FILES === $super_global ) {
			return isset( $super_global[ $key ]['name'] ) ?
				static::sanitize_file_name( $super_global[ $key ] ) :
				static::sanitize_multi_upload( $super_global[ $key ] );
		}

		return wp_kses_post_deep( wp_unslash( $super_global[ $key ] ) );
	}

	private static function sanitize_multi_upload( $fields ) {
		return array_map( function( $field ) {
			return array_map( [ __CLASS__, 'sanitize_file_name' ], $field );
		}, $fields );
	}

	private static function sanitize_file_name( $file ) {
		$file['name'] = sanitize_file_name( $file['name'] );

		return $file;
	}

	/**
	 * TODO: Use a core method instead (after Pro minimum requirements is updated).
	 * @throws \Exception
	 */
	public static function _unstable_get_document_for_edit( $id ) {
		$document = Plugin::elementor()->documents->get( $id );

		if ( ! $document ) {
			throw new \Exception( 'Not found.' );
		}

		if ( ! $document->is_editable_by_current_user() ) {
			throw new \Exception( 'Access denied.' );
		}

		return $document;
	}

	public static function format_control_condition( $name, $operator, $value ) {
		return compact( 'name', 'operator', 'value' );
	}

	public static function create_widget_instance_from_db( $post_id, $widget_id ) {
		$document = Plugin::elementor()->documents->get( $post_id );
		$widget_data = \Elementor\Utils::find_element_recursive( $document->get_elements_data(), $widget_id );

		return Plugin::elementor()->elements_manager->create_element_instance( $widget_data );
	}

	public static function has_invalid_post_permissions( $post ): bool {
		$is_image_attachment = 'attachment' === $post->post_type && strpos( $post->post_mime_type, 'image/' ) === 0;

		if ( $is_image_attachment ) {
			return false;
		}

		$is_private = 'private' === $post->post_status
			&& ! current_user_can( 'read_private_posts', $post->ID );

		$not_allowed = 'publish' !== $post->post_status
			&& ! current_user_can( 'edit_post', $post->ID );

		$password_required = post_password_required( $post->ID )
			&& ! current_user_can( 'edit_post', $post->ID );

		return $is_private || $not_allowed || $password_required;
	}
}
