<?php
namespace ElementorPro\Modules\ThemeBuilder\Classes;

use Elementor\Core\Common\Modules\Ajax\Module as Ajax;
use Elementor\Core\Utils\Exceptions;
use Elementor\TemplateLibrary\Source_Local;
use ElementorPro\Modules\ThemeBuilder\Documents\Theme_Document;
use ElementorPro\Modules\ThemeBuilder\Module;
use ElementorPro\Modules\ThemeBuilder\Conditions\Condition_Base;


if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Conditions_Manager {

	/**
	 * @var Condition_Base[]
	 */
	private $conditions = [];

	/**
	 * @var Conditions_Cache
	 */
	private $cache;

	private $location_cache = [];

	public function __construct() {
		$this->cache = new Conditions_Cache();

		add_action( 'wp_loaded', [ $this, 'register_conditions' ] ); // After Plugins Registered CPT.
		add_action( 'wp_trash_post', [ $this, 'purge_post_from_cache' ] );
		add_action( 'untrashed_post', [ $this, 'on_untrash_post' ] );
		add_action( 'elementor/ajax/register_actions', [ $this, 'register_ajax_actions' ] );

		add_action( 'manage_' . Source_Local::CPT . '_posts_columns', [ $this, 'admin_columns_headers' ] );
		add_action( 'manage_' . Source_Local::CPT . '_posts_custom_column', [ $this, 'admin_columns_content' ], 10, 2 );
	}

	public function on_untrash_post( $post_id ) {
		/** @var Module $theme_builder_module */
		$theme_builder_module = Module::instance();

		$document = $theme_builder_module->get_document( $post_id );

		if ( $document ) {
			$conditions = $document->get_meta( '_elementor_conditions' );

			if ( $conditions ) {
				$this->cache->add( $document, $conditions )->save();
			}
		}
	}

	public function admin_columns_headers( $posts_columns ) {
		$offset = 3;

		$posts_columns = array_slice( $posts_columns, 0, $offset, true ) + [
			'instances' => __( 'Instances', 'elementor-pro' ),
		] + array_slice( $posts_columns, $offset, null, true );

		return $posts_columns;
	}

	public function admin_columns_content( $column_name, $post_id ) {
		if ( 'instances' !== $column_name ) {
			return;
		}

		$instances = $this->get_document_instances( $post_id );

		if ( ! empty( $instances ) ) {
			echo implode( '<br />', $instances );
		} else {
			echo __( 'None', 'elementor-pro' );
		}
	}

	/**
	 * @access public
	 *
	 * @param Ajax $ajax_manager
	 */
	public function register_ajax_actions( $ajax_manager ) {
		$ajax_manager->register_ajax_action( 'pro_theme_builder_save_conditions', [ $this, 'ajax_save_theme_template_conditions' ] );
		$ajax_manager->register_ajax_action( 'pro_theme_builder_conditions_check_conflicts', [ $this, 'ajax_check_conditions_conflicts' ] );
	}

	public function ajax_check_conditions_conflicts( $request ) {
		$post_id = intval( $request['editor_post_id'] );
		$condition = $request['condition'];

		unset( $condition['_id'] );

		$condition = rtrim( implode( '/', $condition ), '/' );

		$conflicted = array_map( function ( $conflict ) {
			return sprintf(
				'<a href="%s" target="_blank">%s</a>', $conflict['edit_url'], $conflict['template_title']
			);
		}, $this->get_conditions_conflicts( $post_id, $condition ) );

		if ( empty( $conflicted ) ) {
			return '';
		}

		return __( 'Elementor recognized that you have set this location for other templates: ', 'elementor-pro' ) .
			' ' .
			implode( ', ', $conflicted );
	}

	public function get_conditions_conflicts( $post_id, $condition ) {
		/** @var \ElementorPro\Modules\ThemeBuilder\Module $theme_builder_module */
		$theme_builder_module = Module::instance();

		$document = $theme_builder_module->get_document( $post_id );

		$location = $document->get_location();

		$location_settings = $theme_builder_module->get_locations_manager()->get_location( $location );

		if ( ! empty( $location_settings['multiple'] ) ) {
			return [];
		}

		$conditions_groups = $this->cache->get_by_location( $location );

		$conflicted = [];

		if ( ! empty( $conditions_groups ) ) {
			foreach ( $conditions_groups as $template_id => $conditions ) {
				if ( ! get_post( $template_id ) ) {
					$this->purge_post_from_cache( $template_id );
				}

				if ( $post_id === $template_id ) {
					continue;
				}

				if ( false !== array_search( $condition, $conditions, true ) ) {
					$edit_url = $theme_builder_module->get_document( $template_id )->get_edit_url();

					$conflicted[] = [
						'template_id' => $template_id,
						'template_title' => esc_html( get_the_title( $template_id ) ),
						'edit_url' => $edit_url,
					];
				}
			}
		}

		return $conflicted;
	}


	public function ajax_save_theme_template_conditions( $request ) {
		if ( ! isset( $request['conditions'] ) ) {
			$request['conditions'] = [];
		}
		$is_saved = $this->save_conditions( $request['editor_post_id'], $request['conditions'] );

		if ( ! $is_saved ) {
			throw new \Exception( 'Error while saving conditions.', Exceptions::INTERNAL_SERVER_ERROR );
		}
	}

	private function register_condition( $id, $args = [] ) {
		if ( isset( $this->conditions[ $id ] ) ) {
			return;
		}

		$class_name = ucfirst( $id );
		$class_name = '\\ElementorPro\\Modules\\ThemeBuilder\\Conditions\\' . $class_name;
		/** @var Condition_Base $condition */
		$condition = new $class_name( $args );
		$this->register_condition_instance( $condition );

		foreach ( $condition->get_sub_conditions() as $key => $val ) {
			if ( is_numeric( $key ) ) {
				$id = $val;
				$args = [];
			} else {
				$id = $key;
				$args = $val;
			}
			$this->register_condition( $id, $args );
		}
	}

	/**
	 * @param Condition_Base $instance
	 */
	public function register_condition_instance( $instance ) {
		$this->conditions[ $instance->get_name() ] = $instance;
	}

	/**
	 * @param $id
	 *
	 * @return Condition_Base|bool
	 */
	public function get_condition( $id ) {
		return isset( $this->conditions[ $id ] ) ? $this->conditions[ $id ] : false;
	}

	public function get_conditions_config() {
		$config = [];

		foreach ( $this->conditions as $condition ) {
			$config[ $condition->get_name() ] = $condition->get_config();
		}

		return $config;
	}

	public function get_document_instances( $post_id ) {
		/** @var Module $theme_builder_module */
		$theme_builder_module = Module::instance();

		$document = $theme_builder_module->get_document( $post_id );

		$summary = [];

		if ( ! $document ) {
			return $summary;
		}

		$document_conditions = $this->get_document_conditions( $document );

		if ( ! empty( $document_conditions ) ) {
			foreach ( $document_conditions as $document_condition ) {
				if ( 'exclude' === $document_condition['type'] ) {
					continue;
				}

				$condition_name = ! empty( $document_condition['sub_name'] ) ? $document_condition['sub_name'] : $document_condition['name'];

				$condition = $this->get_condition( $condition_name );
				if ( ! $condition ) {
					continue;
				}

				if ( ! empty( $document_condition['sub_id'] ) ) {
					$instance_label = $condition->get_label() . " #{$document_condition['sub_id']}";
				} else {
					$instance_label = $condition->get_all_label();
				}

				$summary[ $condition->get_name() ] = $instance_label;
			}
		}

		return $summary;
	}

	public function register_conditions() {
		$this->register_condition( 'general' );

		do_action( 'elementor/theme/register_conditions', $this );
	}

	public function save_conditions( $post_id, $conditions ) {
		$conditions_to_save = [];

		foreach ( $conditions as $condition ) {
			unset( $condition['_id'] );
			$conditions_to_save[] = rtrim( implode( '/', $condition ), '/' );
		}

		/** @var Module $theme_builder_module */
		$theme_builder_module = Module::instance();

		$document = $theme_builder_module->get_document( $post_id );

		if ( empty( $conditions_to_save ) ) {
			// TODO: $document->delete_meta.
			$is_saved = delete_post_meta( $post_id, '_elementor_conditions' );
		} else {
			$is_saved = $document->update_meta( '_elementor_conditions', $conditions_to_save );
		}

		$this->cache->regenerate();

		return $is_saved;
	}

	public function get_location_templates( $location ) {
		$conditions_priority = [];

		$conditions_groups = $this->cache->get_by_location( $location );

		if ( empty( $conditions_groups ) ) {
			return $conditions_priority;
		}

		/** @var Module $theme_builder_module */
		$theme_builder_module = Module::instance();

		$location_manager = $theme_builder_module->get_locations_manager();
		$excludes = [];

		foreach ( $conditions_groups as $theme_template_id => $conditions ) {
			$theme_template_id = apply_filters( 'elementor/theme/get_location_templates/template_id', $theme_template_id );

			foreach ( $conditions as $condition ) {
				$parsed_condition = $this->parse_condition( $condition );

				$include = $parsed_condition['type'];
				$name = $parsed_condition['name'];
				$sub_name = $parsed_condition['sub_name'];
				$sub_id = $parsed_condition['sub_id'];

				$is_include = 'include' === $include;
				$condition_instance = $this->get_condition( $name );

				if ( ! $condition_instance ) {
					continue;
				}

				$condition_pass = $condition_instance->check( [] );
				$sub_condition_instance = null;

				if ( $condition_pass && $sub_name ) {
					$sub_condition_instance = $this->get_condition( $sub_name );
					if ( ! $sub_condition_instance ) {
						continue;
					}

					$args = [
						'id' => apply_filters( 'elementor/theme/get_location_templates/condition_sub_id', $sub_id, $parsed_condition ),
					];

					$condition_pass = $sub_condition_instance->check( $args );
				}

				if ( $condition_pass ) {

					$post_status = get_post_status( $theme_template_id );

					if ( 'publish' !== $post_status ) {
						$location_manager->inspector_log( [
							'location' => $location,
							'document' => $theme_builder_module->get_document( $theme_template_id ),
							'description' => 'Skipped, is not Published',
						] );
						continue;
					}

					if ( $is_include ) {
						$conditions_priority[ $theme_template_id ] = $this->get_condition_priority( $condition_instance, $sub_condition_instance, $sub_id );
					} else {
						$excludes[] = $theme_template_id;
					}
				}
			} // End foreach().
		} // End foreach().

		foreach ( $excludes as $exclude_id ) {
			unset( $conditions_priority[ $exclude_id ] );
		}

		asort( $conditions_priority );

		return $conditions_priority;
	}

	public function get_theme_templates_ids( $location ) {
		/** @var Module $theme_builder_module */
		$theme_builder_module = Module::instance();

		$location_manager = $theme_builder_module->get_locations_manager();

		// In case the user want to preview any page with a theme_template_id,
		// like http://domain.com/any-post/?preview=1&theme_template_id=6453
		if ( ! empty( $_GET['theme_template_id'] ) ) {
			$force_template_id = $_GET['theme_template_id'];
			$document = $theme_builder_module->get_document( $force_template_id );
			// e.g. header / header
			if ( $document && $location === $document->get_location() ) {
				$location_manager->inspector_log( [
					'location' => $location,
					'document' => $document,
					'description' => 'Force Template by URL param',
				] );

				return [
					$force_template_id => 1,
				];
			}
		}

		$current_post_id = get_the_ID();
		$document = $theme_builder_module->get_document( $current_post_id );
		if ( $document && $location === $document->get_location() ) {
			$location_manager->inspector_log( [
				'location' => $location,
				'document' => $document,
				'description' => 'Current Edited Template',
			] );

			return [
				$current_post_id => 1,
			];
		}

		$templates = $this->get_location_templates( $location );

		return $templates;
	}

	/**
	 * @param Condition_Base $condition_instance
	 * @param Condition_Base $sub_condition_instance
	 * @param int            $sub_id
	 *
	 * @return mixed
	 * @throws \Exception
	 */
	private function get_condition_priority( $condition_instance, $sub_condition_instance, $sub_id ) {
		$priority = $condition_instance::get_priority();

		if ( $sub_condition_instance ) {
			if ( $sub_condition_instance::get_priority() < $priority ) {
				$priority = $sub_condition_instance::get_priority();
			}

			$priority -= 10;

			if ( $sub_id ) {
				$priority -= 10;
			} elseif ( 0 === count( $sub_condition_instance->get_sub_conditions() ) ) {
				// if no sub conditions - it's more specific.
				$priority -= 5;
			}
		}

		return $priority;
	}

	/**
	 * @param Theme_Document $document
	 *
	 * @return array
	 */
	public function get_document_conditions( $document ) {
		$saved_conditions = $document->get_main_meta( '_elementor_conditions' );
		$conditions = [];

		if ( is_array( $saved_conditions ) ) {
			foreach ( $saved_conditions as $condition ) {
				$conditions[] = $this->parse_condition( $condition );
			}
		}

		return $conditions;
	}

	protected function parse_condition( $condition ) {
		list ( $type, $name, $sub_name, $sub_id ) = array_pad( explode( '/', $condition ), 4, '' );

		return compact( 'type', 'name', 'sub_name', 'sub_id' );
	}

	/**
	 * @param $location
	 *
	 * @return Theme_Document[]
	 */
	public function get_documents_for_location( $location ) {
		if ( isset( $this->location_cache[ $location ] ) ) {
			return $this->location_cache[ $location ];
		}

		$theme_templates_ids = $this->get_theme_templates_ids( $location );

		/** @var Module $theme_builder_module */
		$theme_builder_module = Module::instance();

		$location_settings = $theme_builder_module->get_locations_manager()->get_location( $location );

		$documents = [];

		foreach ( $theme_templates_ids as $theme_template_id => $priority ) {
			$document = $theme_builder_module->get_document( $theme_template_id );
			if ( $document ) {
				$documents[ $theme_template_id ] = $document;
			} else {
				$this->purge_post_from_cache( $theme_template_id );
			}

			if ( empty( $location_settings['multiple'] ) ) {
				break;
			}
		}

		$this->location_cache[ $location ] = $documents;

		return $documents;
	}

	public function purge_post_from_cache( $post_id ) {
		return $this->cache->remove( $post_id )->save();
	}

	public function get_cache() {
		return $this->cache;
	}
}
