<?php
namespace ElementorPro\Modules\AssetsManager\AssetTypes\Icons\IconSets;

use ElementorPro\Core\Utils;
use ElementorPro\Modules\AssetsManager\AssetTypes\Icons\Custom_Icons;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

abstract class Icon_Set_Base {

	protected $dir_name = '';
	protected $directory = '';
	protected $data_file = '';
	protected $stylesheet_file = '';
	protected $allowed_zipped_files = [];
	protected $files_to_save = [];
	/**
	 * Webfont extensions.
	 *
	 * @var array
	 */
	protected $allowed_webfont_extensions = [ 'woff', 'woff2', 'ttf', 'svg', 'otf', 'eot' ];

	abstract protected function extract_icon_list();

	abstract protected function prepare();

	abstract protected function get_type();

	abstract public function get_name();

	private function is_path_dir( $path ) {
		return '/' === substr( $path, -1 );
	}

	private function is_file_allowed( $path_name ) {
		$check = $this->directory . $path_name;
		if ( ! file_exists( $check ) ) {
			return false;
		}
		if ( $this->is_path_dir( $path_name ) ) {
			return is_dir( $check );
		}
		return true;
	}

	/**
	 * is icon set
	 *
	 * validate that the current uploaded zip is in this icon set format
	 * @return bool
	 */
	public function is_icon_set() {
		foreach ( $this->allowed_zipped_files as $file ) {
			if ( ! $this->is_file_allowed( $file ) ) {
				return false;
			}
		}
		return true;
	}

	public function is_valid() {
		return false;
	}

	protected function get_display_prefix() {
		return '';
	}

	protected function get_prefix() {
		return '';
	}

	public function handle_new_icon_set() {
		return $this->prepare();
	}

	/**
	 * cleanup_temp_files
	 * @param \WP_Filesystem_Base $wp_filesystem
	 */
	protected function cleanup_temp_files( $wp_filesystem ) {
		$wp_filesystem->rmdir( $this->directory, true );
	}

	/**
	 * Gets the URL to uploaded file.
	 *
	 * @param $file_name
	 *
	 * @return string
	 */
	protected function get_file_url( $file_name ) {
		$wp_upload_dir = wp_upload_dir();
		$url = $wp_upload_dir['baseurl'] . '/elementor/custom-icons/' . $file_name;

		/**
		 * Upload file URL.
		 *
		 * Filters the URL to a file uploaded using custom icons.
		 *
		 * By default URL to a file uploaded is set to `/elementor/custom-icons/{file_name}`
		 * inside the WordPress uploads folder. This hook allows developers to change this URL.
		 *
		 * @since 1.0.0
		 *
		 * @param string $url       File URL.
		 * @param string $file_name File name.
		 */
		$url = apply_filters( 'elementor_pro/icons_manager/custom_icons/url', $url, $file_name );

		return $url;
	}

	protected function get_icon_sets_dir() {
		$wp_upload_dir = wp_upload_dir();
		$path = $wp_upload_dir['basedir'] . '/elementor/custom-icons';

		/**
		 * Upload file path.
		 *
		 * Filters the path to a folder uploaded using custom icons.
		 *
		 * By default the folder path to custom icon files is set to `/elementor/custom-icons`
		 * inside the WordPress uploads folder. This hook allows developers to change this path.
		 *
		 * @param string $path Path to custom icons uploads directory.
		 */
		$path = apply_filters( 'elementor_pro/icons_manager/custom_icons/dir', $path );

		Utils::get_ensure_upload_dir( $path );
		return $path;
	}

	protected function get_ensure_upload_dir( $dir = '' ) {
		$path = $this->get_icon_sets_dir();
		if ( ! empty( $dir ) ) {
			$path .= '/' . $dir;
		}
		return Utils::get_ensure_upload_dir( $path );
	}

	public function move_files( $post_id ) {
		// @todo: save only needed files
		$wp_filesystem = Custom_Icons::get_wp_filesystem();
		$to = $this->get_ensure_upload_dir( $this->dir_name ) . '/';

		foreach ( $wp_filesystem->dirlist( $this->directory, false, true ) as $file ) {
			$full_path = $this->directory . $file['name'];
			if ( $wp_filesystem->is_dir( $full_path ) ) {
				$wp_filesystem->mkdir( $to . $file['name'] );

				foreach ( $file['files'] as $filename => $sub_file ) {
					$new_path = $to . $file['name'] . DIRECTORY_SEPARATOR . $filename;
					$wp_filesystem->move( $full_path . DIRECTORY_SEPARATOR . $filename, $new_path );
					$this->insert_attachment( $this->get_url() . '/' . $file['name'] . '/' . $filename, $new_path, $post_id );
				}
			} else {
				$new_path = $to . $file['name'];
				$wp_filesystem->move( $full_path, $new_path );
				$this->insert_attachment( $this->get_url() . '/' . $file['name'], $new_path, $post_id );
			}
		}

		$this->cleanup_temp_files( $wp_filesystem );
		update_post_meta( $post_id, '_elementor_icon_set_path', $to );
		$this->directory = $to;
	}

	private function insert_attachment( $file_url, $filename, $post_id = 0 ) {
		$attachment = [
			'file' => $filename,
			'guid' => $file_url,
			'post_parent' => $post_id,
			'post_type' => 'attachment',
		];
		$id = wp_insert_attachment( $attachment );
		return $id;
	}

	public function get_unique_name() {
		$name = $this->get_name();
		$basename = $name;
		$counter = 1;
		while ( ! $this->is_name_unique( $name ) ) {
			$name = $basename . '-' . $counter;
			$counter++;
		}
		return $name;
	}

	private function is_name_unique( $name ) {
		return ! is_dir( $this->get_icon_sets_dir() . '/' . $name );
	}

	protected function get_url( $filename = '' ) {
		return $this->get_file_url( $this->dir_name . $filename );
	}

	protected function get_stylesheet() {
		return '';
	}

	protected function get_version() {
		return '1.0.0';
	}

	protected function get_enqueue() {
		return false;
	}

	public function build_config() {
		$icon_set_config = [
			'name' => $this->dir_name,
			'label' => ucwords( str_replace( [ '-', '_' ], ' ', $this->dir_name ) ),
			'url' => $this->get_stylesheet(),
			'enqueue' => $this->get_enqueue(),
			'prefix' => $this->get_prefix(),
			'displayPrefix' => $this->get_display_prefix(),
			'labelIcon' => 'eicon eicon-folder',
			'ver' => $this->get_version(),
			'custom_icon_type' => $this->get_type(),
		];

		$icons = $this->extract_icon_list();
		$icon_set_config['count'] = count( $icons );
		$icon_set_config['icons'] = $icons;

		if ( 25 < $icon_set_config['count'] ) {
			$icon_set_config['fetchJson'] = $this->store_icon_list_json( $icons );
		}

		return $icon_set_config;
	}

	private function store_icon_list_json( $icons ) {
		$wp_filesystem = Custom_Icons::get_wp_filesystem();
		$json_file = $this->get_ensure_upload_dir( $this->dir_name ) . '/e_icons.js';
		$wp_filesystem->put_contents( $json_file, json_encode( [ 'icons' => $icons ] ) );
		return $this->get_url() . '/e_icons.js';
	}

	/**
	 * Icon Set Base constructor.
	 *
	 * @param $directory
	 */
	public function __construct( $directory ) {
		$this->directory = $directory;
		return $this->is_icon_set() ? $this : false;
	}
}
