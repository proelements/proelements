<?php
namespace ElementorPro\Modules\QueryControl;

use Elementor\Controls_Manager;
use Elementor\Core\Common\Modules\Ajax\Module as Ajax;
use Elementor\Core\Editor\Editor;
use Elementor\TemplateLibrary\Source_Local;
use Elementor\Widget_Base;
use ElementorPro\Base\Module_Base;
use ElementorPro\Core\Utils;
use ElementorPro\Modules\QueryControl\Controls\Template_Query;
use ElementorPro\Modules\QueryControl\Classes\Elementor_Post_Query;
use ElementorPro\Modules\QueryControl\Classes\Elementor_Related_Query;
use ElementorPro\Modules\QueryControl\Controls\Group_Control_Posts;
use ElementorPro\Modules\QueryControl\Controls\Group_Control_Query;
use ElementorPro\Modules\QueryControl\Controls\Group_Control_Related;
use ElementorPro\Modules\QueryControl\Controls\Query;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends Module_Base {

	const QUERY_CONTROL_ID = 'query';
	const AUTOCOMPLETE_ERROR_CODE = 'QueryControlAutocomplete';
	const GET_TITLES_ERROR_CODE = 'QueryControlGetTitles';

	// Supported objects for query:
	const QUERY_OBJECT_POST = 'post';
	const QUERY_OBJECT_TAX = 'tax';
	const QUERY_OBJECT_AUTHOR = 'author';
	const QUERY_OBJECT_USER = 'user';
	const QUERY_OBJECT_LIBRARY_TEMPLATE = 'library_template';
	const QUERY_OBJECT_ATTACHMENT = 'attachment';

	// Objects that are manipulated by js (not sent in AJAX):
	const QUERY_OBJECT_CPT_TAX = 'cpt_tax';
	const QUERY_OBJECT_JS = 'js';

	public static $displayed_ids = [];

	private static $supported_objects_for_query = [
		self::QUERY_OBJECT_POST,
		self::QUERY_OBJECT_TAX,
		self::QUERY_OBJECT_AUTHOR,
		self::QUERY_OBJECT_USER,
		self::QUERY_OBJECT_LIBRARY_TEMPLATE,
		self::QUERY_OBJECT_ATTACHMENT,
	];

	public function __construct() {
		parent::__construct();

		$this->add_actions();
	}

	public static function add_to_avoid_list( $ids ) {
		self::$displayed_ids = array_unique( array_merge( self::$displayed_ids, $ids ) );
	}

	public static function get_avoid_list_ids() {
		return self::$displayed_ids;
	}

	/**
	 * @deprecated use Group_Control_Query capabilities
	 *
	 * @param Widget_Base $widget
	 */
	public static function add_exclude_controls( $widget ) {
		Plugin::elementor()->modules_manager->get_modules( 'dev-tools' )->deprecation->deprecated_function( __METHOD__, '2.5.0', 'class Group_Control_Query' );

		$widget->add_control(
			'exclude',
			[
				'label' => esc_html__( 'Exclude', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT2,
				'multiple' => true,
				'options' => [
					'current_post' => esc_html__( 'Current Post', 'elementor-pro' ),
					'manual_selection' => esc_html__( 'Manual Selection', 'elementor-pro' ),
				],
				'label_block' => true,
			]
		);

		$widget->add_control(
			'exclude_ids',
			[
				'label' => esc_html__( 'Search & Select', 'elementor-pro' ),
				'type' => self::QUERY_CONTROL_ID,
				'autocomplete' => [
					'object' => self::QUERY_OBJECT_POST,
				],
				'options' => [],
				'label_block' => true,
				'multiple' => true,
				'condition' => [
					'exclude' => 'manual_selection',
				],
			]
		);

		$widget->add_control(
			'avoid_duplicates',
			[
				'label' => esc_html__( 'Avoid Duplicates', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'default' => '',
				'description' => esc_html__( 'Set to Yes to avoid duplicate posts from showing up on the page. This only affects the frontend.', 'elementor-pro' ),
			]
		);

	}

	public function get_name() {
		return 'query-control';
	}

	private function search_taxonomies( $query_params, $query_data, $data ) {
		$by_field = $query_data['query']['by_field'];
		$terms = get_terms( $query_params );

		$results = [];

		foreach ( $terms as $term ) {
			$results[] = [
				'id' => $term->{$by_field},
				'text' => $this->get_term_name( $term, $query_data['display'], $data ),
			];
		}

		return $results;

	}

	/**
	 * 'autocomplete' => [
	 *    'object' => 'post|tax|user|library_template|attachment|js', // required
	 *    'display' => 'minimal(default)|detailed|custom_filter_name',
	 *    'by_field' => 'term_taxonomy_id(default)|term_id', // relevant only if `object` is tax|cpt_tax
	 *    'query' => [
	 *        'post_type' => 'any|post|page|custom-post-type', // can be an array for multiple post types.
	 *                                                         // 'any' should not be used if 'object' is 'tax' or 'cpt_tax'.
	 *         ...
	 *    ],
	 * ],
	 *
	 * 'object' (required):    the queried object.
	 *      supported values:
	 *      'post'              : will use WP_Query(), if query['post_type'] is empty or missing, will default to 'any'.
	 *      'tax'               : will use get_terms().
	 *                            When 'post_type' is provided, will first use get_object_taxonomies() to build 'taxonomy'
	 *                            args then invoke get_terms().
	 *                            When both 'taxonomy' and 'post_type' are provided, 'post_type' is ignored.
	 *      'cpt_tax'           : Used in frontend only, will be replaced to 'tax' by js.
	 *                            Will use get_object_taxonomies() to build 'taxonomy' args then use get_terms().
	 *      'user'              : will use WP_User_Query() with the args defined in 'query'.
	 *      'author'            : will use WP_User_Query() with pre-defined args.
	 *      'library_template'  : will use WP_Query() with post_type = Source_Local::CPT.
	 *      'attachment'        : will use WP_Query() with post_type = attachment.
	 *      'js'                : Query data is populated by JavaScript.
	 *                            By the time the data is sent to the server,
	 *                            the 'object' value should be replaced with one of the other valid 'object' values and
	 *                            the Query array populated accordingly.
	 *      user_defined        : will invoke apply_filters() using the user_defined value as filter name,
	 *                            `elementor/query/[get_value_titles|get_autocomplete]/{user_defined}`.
	 *
	 * 'display':   output format
	 *      supported values:
	 *      'minimal' (default) : name only
	 *      'detailed'          : for Post & Taxonomies -> `[Taxonomy|Post-Type] : [parent] ... [parent] > name`
	 *                            for Users & Authors -> `name [email]`
	 *      user_defined        : will invoke apply_filters using the user_defined value as filter name,
	 *                            `elementor/query/[get_value_titles|get_autocomplete]/display/{user_defined}`
	 *
	 * `by_field`:  value of 'id' field in taxonomy query. Relevant only if `object` is tax|cpt_tax
	 *      supported values:
	 *      'term_taxonomy_id'(default)
	 *      'term_id'
	 *
	 * 'query': array of args to be passed "as-is" to the relevant query function (see 'object').
	 *
	 **
	 *
	 * @param array $data
	 *
	 * @return array | \WP_Error
	 */
	private function autocomplete_query_data( $data ) {
		if ( empty( $data['autocomplete'] ) || empty( $data['q'] ) || empty( $data['autocomplete']['object'] ) ) {
			return new \WP_Error( self::AUTOCOMPLETE_ERROR_CODE, 'Empty or incomplete data' );
		}

		$autocomplete = $data['autocomplete'];

		if ( in_array( $autocomplete['object'], self::$supported_objects_for_query, true ) ) {
			$method_name = 'autocomplete_query_for_' . $autocomplete['object'];
			if ( empty( $autocomplete['display'] ) ) {
				$autocomplete['display'] = 'minimal';
				$data['autocomplete'] = $autocomplete;
			}
			$query = $this->$method_name( $data );
			if ( is_wp_error( $query ) ) {
				return $query;
			}
			$autocomplete['query'] = $query;
		}

		return $autocomplete;
	}

	private function autocomplete_query_for_post( $data ) {
		if ( ! isset( $data['autocomplete']['query'] ) ) {
			return new \WP_Error( self::AUTOCOMPLETE_ERROR_CODE, 'Missing autocomplete[`query`] data' );
		}
		$query = $data['autocomplete']['query'];
		if ( empty( $query['post_type'] ) ) {
			$query['post_type'] = 'any';
		}
		$query['posts_per_page'] = -1;
		$query['s'] = $data['q'];

		return $query;
	}

	private function autocomplete_query_for_library_template( $data ) {
		$query = $data['autocomplete']['query'];

		$query['post_type'] = Source_Local::CPT;
		$query['orderby'] = 'meta_value';
		$query['order'] = 'ASC';

		if ( empty( $query['posts_per_page'] ) ) {
			$query['posts_per_page'] = -1;
		}
		$query['s'] = $data['q'];

		return $query;
	}

	private function autocomplete_query_for_attachment( $data ) {
		$query = $this->autocomplete_query_for_post( $data );
		if ( is_wp_error( $query ) ) {
			return $query;
		}
		$query['post_type'] = 'attachment';
		$query['post_status'] = 'inherit';

		return $query;
	}

	private function autocomplete_query_for_tax( $data ) {
		$query = $data['autocomplete']['query'];

		if ( empty( $query['taxonomy'] ) && ! empty( $query['post_type'] ) ) {
			$query['taxonomy'] = get_object_taxonomies( $query['post_type'] );
		}
		$query['search'] = $data['q'];
		$query['hide_empty'] = false;
		return $query;
	}

	private function autocomplete_query_for_author( $data ) {
		$query = $this->autocomplete_query_for_user( $data );
		if ( is_wp_error( $query ) ) {
			return $query;
		}

		return $this->add_edit_capability_to_user_query( $query );
	}

	private function autocomplete_query_for_user( $data ) {
		$query = $data['autocomplete']['query'];
		if ( ! empty( $query ) ) {
			return $query;
		}

		$query = [
			'fields' => [
				'ID',
				'display_name',
			],
			'search' => '*' . $data['q'] . '*',
			'search_columns' => [
				'user_login',
				'user_nicename',
			],
		];
		if ( 'detailed' === $data['autocomplete']['display'] ) {
			$query['fields'][] = 'user_email';
		}
		return $query;
	}

	private function get_titles_query_data( $data ) {
		if ( empty( $data['get_titles'] ) || empty( $data['id'] ) || empty( $data['get_titles']['object'] ) ) {
			return new \WP_Error( self::GET_TITLES_ERROR_CODE, 'Empty or incomplete data' );
		}

		$get_titles = $data['get_titles'];
		if ( empty( $get_titles['query'] ) ) {
			$get_titles['query'] = [];
		}

		if ( in_array( $get_titles['object'], self::$supported_objects_for_query, true ) ) {
			$method_name = 'get_titles_query_for_' . $get_titles['object'];
			$query = $this->$method_name( $data );
			if ( is_wp_error( $query ) ) {
				return $query;
			}
			$get_titles['query'] = $query;
		}

		if ( empty( $get_titles['display'] ) ) {
			$get_titles['display'] = 'minimal';
		}

		return $get_titles;
	}

	private function get_titles_query_for_post( $data ) {
		$query = $data['get_titles']['query'];
		if ( empty( $query['post_type'] ) ) {
			$query['post_type'] = 'any';
		}
		$query['posts_per_page'] = -1;
		$query['post__in'] = (array) $data['id'];

		return $query;
	}

	private function get_titles_query_for_attachment( $data ) {
		$query = $this->get_titles_query_for_post( $data );
		$query['post_type'] = 'attachment';
		$query['post_status'] = 'inherit';

		return $query;
	}

	private function get_titles_query_for_tax( $data ) {
		$by_field = empty( $data['get_titles']['by_field'] ) ? 'term_taxonomy_id' : $data['get_titles']['by_field'];
		return [
			$by_field => (array) $data['id'],
			'hide_empty' => false,
		];
	}


	private function get_titles_query_for_library_template( $data ) {
		$query = $data['get_titles']['query'];

		$query['post_type'] = Source_Local::CPT;
		$query['orderby'] = 'meta_value';
		$query['order'] = 'ASC';

		if ( empty( $query['posts_per_page'] ) ) {
			$query['posts_per_page'] = -1;
		}

		return $query;
	}

	private function get_titles_query_for_author( $data ) {
		$query = $this->get_titles_query_for_user( $data );

		$query['has_published_posts'] = true;

		return $this->add_edit_capability_to_user_query( $query );
	}

	private function get_titles_query_for_user( $data ) {
		$query = $data['get_titles']['query'];
		if ( ! empty( $query ) ) {
			return $query;
		}
		$query = [
			'fields' => [
				'ID',
				'display_name',
			],
			'include' => (array) $data['id'],
		];
		if ( 'detailed' === $data['get_titles']['display'] ) {
			$query['fields'][] = 'user_email';
		}
		return $query;
	}

	/**
	 * @deprecated 2.6.0 use new `autocomplete` format
	 *
	 * @param $data
	 *
	 * @return mixed
	 */
	private function extract_post_type( $data ) {

		if ( ! empty( $data['query'] ) && ! empty( $data['query']['post_type'] ) ) {
			return $data['query']['post_type'];
		}

		return $data['object_type'];
	}

	/**
	 * @deprecated 2.6.0 use new `autocomplete` format
	 *
	 * @param $data
	 *
	 * @return array
	 * @throws \Exception
	 */
	public function ajax_posts_filter_autocomplete_deprecated( $data ) {
		$document = Utils::_unstable_get_document_for_edit( $data['editor_post_id'] );

		if ( empty( $data['filter_type'] ) || empty( $data['q'] ) ) {
			throw new \Exception( 'Bad request.' );
		}

		$results = [];

		switch ( $data['filter_type'] ) {
			case 'taxonomy':
				$query_params = [
					'taxonomy' => $this->extract_post_type( $data ),
					'search' => $data['q'],
					'hide_empty' => false,
				];

				$terms = get_terms( $query_params );
				if ( is_wp_error( $terms ) ) {
					break;
				}

				global $wp_taxonomies;

				foreach ( $terms as $term ) {
					$term_name = $this->get_term_name_with_parents( $term );
					if ( ! empty( $data['include_type'] ) ) {
						$text = $wp_taxonomies[ $term->taxonomy ]->labels->name . ': ' . $term_name;
					} else {
						$text = $term_name;
					}

					$results[] = [
						'id' => $term->term_taxonomy_id,
						'text' => $text,
					];
				}

				break;

			case 'by_id':
			case 'post':
				$query_params = [
					'post_type' => $this->extract_post_type( $data ),
					's' => $data['q'],
					'posts_per_page' => -1,
				];

				if ( 'attachment' === $query_params['post_type'] ) {
					$query_params['post_status'] = 'inherit';
				}

				$query = new \WP_Query( $query_params );

				foreach ( $query->posts as $post ) {
					$post_type_obj = get_post_type_object( $post->post_type );
					if ( ! empty( $data['include_type'] ) ) {
						$text = $post_type_obj->labels->name . ': ' . $post->post_title;
					} else {
						$text = ( $post_type_obj->hierarchical ) ? $this->get_post_name_with_parents( $post ) : $post->post_title;
					}

					$results[] = [
						'id' => $post->ID,
						'text' => esc_html( $text ),
					];
				}
				break;

			case 'author':
				$query_params = [
					'has_published_posts' => true,
					'fields' => [
						'ID',
						'display_name',
					],
					'search' => '*' . $data['q'] . '*',
					'search_columns' => [
						'user_login',
						'user_nicename',
					],
				];

				$query_params = $this->add_edit_capability_to_user_query( $query_params );

				$user_query = new \WP_User_Query( $query_params );

				foreach ( $user_query->get_results() as $author ) {
					$results[] = [
						'id' => $author->ID,
						'text' => $author->display_name,
					];
				}
				break;
			default:
				$results = apply_filters( 'elementor/query/get_autocomplete/' . $data['filter_type'], [], $data );
		}

		return [
			'results' => $results,
		];
	}

	/**
	 * @param array $data
	 *
	 * @return array
	 * @throws \Exception
	 */
	public function ajax_posts_filter_autocomplete( array $data ) {
		if ( ! current_user_can( Editor::EDITING_CAPABILITY ) ) {
			throw new \Exception( 'Access denied.' );
		}

		$query_data = $this->autocomplete_query_data( $data );
		if ( is_wp_error( $query_data ) ) {
			/** @var \WP_Error $query_data */
			throw new \Exception( $query_data->get_error_code() . ':' . $query_data->get_error_message() );
		}

		$results = [];
		$display = $query_data['display'];
		$query_args = $query_data['query'];
		$query_args['no_found_rows'] = true;

		switch ( $query_data['object'] ) {
			case self::QUERY_OBJECT_TAX:
				$by_field = ! empty( $query_data['by_field'] ) ? $query_data['by_field'] : 'term_taxonomy_id';
				$terms = get_terms( $query_args );
				if ( is_wp_error( $terms ) ) {
					break;
				}
				foreach ( $terms as $term ) {
					if ( apply_filters( "elementor/query/get_autocomplete/tax/{$display}", true, $term, $data ) ) {
						$results[] = [
							'id' => $term->{$by_field},
							'text' => $this->get_term_name( $term, $display, $data ),
						];
					}
				}
				break;
			case self::QUERY_OBJECT_ATTACHMENT:
			case self::QUERY_OBJECT_POST:
				$query = new \WP_Query( $query_args );

				foreach ( $query->posts as $post ) {
					if ( apply_filters( "elementor/query/get_autocomplete/custom/{$display}", true, $post, $data ) ) {
						$text = $this->format_post_for_display( $post, $display, $data );
						$results[] = [
							'id' => $post->ID,
							'text' => $text,
						];
					}
				}
				break;
			case self::QUERY_OBJECT_LIBRARY_TEMPLATE:
				$query = new \WP_Query( $query_args );

				foreach ( $query->posts as $post ) {
					$document = Plugin::elementor()->documents->get( $post->ID );
					if ( $document ) {
						$text = esc_html( $post->post_title ) . ' (' . $document->get_post_type_title() . ')';
						$results[] = [
							'id' => $post->ID,
							'text' => $text,
						];
					}
				}
				break;
			case self::QUERY_OBJECT_USER:
			case self::QUERY_OBJECT_AUTHOR:
				$user_query = new \WP_User_Query( $query_args );

				foreach ( $user_query->get_results() as $user ) {
					if ( apply_filters( "elementor/query/get_autocomplete/user/{$display}", true, $user, $data ) ) {
						$results[] = [
							'id' => $user->ID,
							'text' => $this->format_user_for_display( $user, $display, $data ),
						];
					}
				}
				break;
			default:
				$results = apply_filters( 'elementor/query/get_autocomplete/' . $query_data['filter_type'], $results, $data );
		}

		return [
			'results' => $results,
		];
	}

	/**
	 * @param $request
	 *
	 * @return array
	 * @throws \Exception
	 * @deprecated 2.6.0 use new `autocomplete` format
	 *
	 */
	public function ajax_posts_control_value_titles_deprecated( $request ) {
		$document = Utils::_unstable_get_document_for_edit( $request['editor_post_id'] );

		$ids = (array) $request['id'];

		$results = [];

		switch ( $request['filter_type'] ) {
			case 'taxonomy':
				$terms = get_terms(
					[
						'term_taxonomy_id' => $ids,
						'hide_empty' => false,
					]
				);
				if ( is_wp_error( $terms ) ) {
					break;
				}

				global $wp_taxonomies;
				foreach ( $terms as $term ) {
					$term_name = $this->get_term_name_with_parents( $term );
					if ( ! empty( $request['include_type'] ) ) {
						$text = $wp_taxonomies[ $term->taxonomy ]->labels->name . ': ' . $term_name;
					} else {
						$text = $term_name;
					}
					$results[ $term->{$by_field} ] = $text;
				}
				break;

			case 'by_id':
			case 'post':
				$query = new \WP_Query(
					[
						'post_type' => 'any',
						'post__in' => $ids,
						'posts_per_page' => -1,
					]
				);

				foreach ( $query->posts as $post ) {
					$results[ $post->ID ] = esc_html( $post->post_title );
				}
				break;

			case 'author':
				$query_params = [
					'has_published_posts' => true,
					'fields' => [
						'ID',
						'display_name',
					],
					'include' => $ids,
				];

				$query_params = $this->add_edit_capability_to_user_query( $query_params );

				$user_query = new \WP_User_Query( $query_params );

				foreach ( $user_query->get_results() as $author ) {
					$results[ $author->ID ] = $author->display_name;
				}
				break;
			default:
				$results = apply_filters( 'elementor/query/get_value_titles/' . $request['filter_type'], [], $request );
		}

		return $results;
	}

	/**
	 * @throws \Exception
	 */
	public function ajax_posts_control_value_titles( $request ) {
		if ( ! current_user_can( Editor::EDITING_CAPABILITY ) ) {
			throw new \Exception( 'Access denied.' );
		}

		$query_data = $this->get_titles_query_data( $request );
		if ( is_wp_error( $query_data ) ) {
			return [];
		}
		$display = $query_data['display'];
		$query_args = $query_data['query'];
		$query_args['no_found_rows'] = true;

		$results = [];
		switch ( $query_data['object'] ) {
			case self::QUERY_OBJECT_TAX:
				$by_field = ! empty( $query_data['by_field'] ) ? $query_data['by_field'] : 'term_taxonomy_id';

				// The term_id is not working in 2022-01-18, this is a hack to replace the term id with
				// `include`, the code is a legacy code so the solution is minimal as possible.
				if ( isset( $query_args['term_id'] ) ) {
					$query_args['include'] = array_map( 'intval', $query_args['term_id'] );
				}

				$terms = get_terms( $query_args );

				if ( is_wp_error( $terms ) ) {
					break;
				}
				foreach ( $terms as $term ) {
					if ( apply_filters( "elementor/query/get_value_titles/tax/{$display}", true, $term, $request ) ) {
						$results[ $term->{$by_field} ] = $this->get_term_name( $term, $display, $request, 'get_value_titles' );
					}
				}
				break;

			case self::QUERY_OBJECT_ATTACHMENT:
			case self::QUERY_OBJECT_POST:
				$query = new \WP_Query( $query_args );

				foreach ( $query->posts as $post ) {
					if ( apply_filters( "elementor/query/get_value_titles/custom/{$display}", true, $post, $request ) ) {
						$results[ $post->ID ] = $this->format_post_for_display( $post, $display, $request, 'get_value_titles' );
					}
				}
				break;
			case self::QUERY_OBJECT_LIBRARY_TEMPLATE:
				$query = new \WP_Query( $query_args );

				foreach ( $query->posts as $post ) {
					$document = Plugin::elementor()->documents->get( $post->ID );
					if ( $document ) {
						$results[ $post->ID ] = esc_html( $post->post_title ) . ' (' . $document->get_post_type_title() . ')';
					}
				}
				break;
			case self::QUERY_OBJECT_AUTHOR:
			case self::QUERY_OBJECT_USER:
				$user_query = new \WP_User_Query( $query_args );

				foreach ( $user_query->get_results() as $user ) {
					if ( apply_filters( "elementor/query/get_value_titles/user/{$display}", true, $user, $request ) ) {
						$results[ $user->ID ] = $this->format_user_for_display( $user, $display, $request, 'get_value_titles' );
					}
				}
				break;
			default:
				$results = apply_filters( "elementor/query/get_value_titles/{$query_data['filter_type']}", $results, $request );
		}

		return $results;
	}

	private function get_term_name( $term, $display, $request, $filter_name = 'get_autocomplete' ) {
		global $wp_taxonomies;
		$term_name = $this->get_term_name_with_parents( $term );
		switch ( $display ) {
			case 'detailed':
				$text = $wp_taxonomies[ $term->taxonomy ]->labels->name . ': ' . $term_name;
				break;
			case 'minimal':
				$text = $term_name;
				break;
			default:
				$text = apply_filters( "elementor/query/{$filter_name}/display/{$display}", $term_name, $request );
				break;
		}
		return $text;
	}

	/**
	 * @param \WP_Post $post
	 * @param string $display
	 * @param array $data
	 * @param string $filter_name
	 *
	 * @return mixed|string|void
	 */
	private function format_post_for_display( $post, $display, $data, $filter_name = 'get_autocomplete' ) {
		$post_type_obj = get_post_type_object( $post->post_type );
		switch ( $display ) {
			case 'minimal':
				$text = ( $post_type_obj->hierarchical ) ? $this->get_post_name_with_parents( $post ) : $post->post_title;
				break;
			case 'detailed':
				$text = $post_type_obj->labels->name . ': ' . ( $post_type_obj->hierarchical ) ? $this->get_post_name_with_parents( $post ) : $post->post_title;
				break;
			default:
				$text = apply_filters( "elementor/query/{$filter_name}/display/{$display}", $post->post_title, $post->ID, $data );
				break;
		}

		return esc_html( $text );
	}

	/**
	 * @param \WP_User $user
	 * @param string $display
	 * @param array $data
	 * @param string $filter_name
	 *
	 * @return string
	 */
	private function format_user_for_display( $user, $display, $data, $filter_name = 'get_autocomplete' ) {
		switch ( $display ) {
			case 'minimal':
				$text = $user->display_name;
				break;
			case 'detailed':
				$text = sprintf( '%s (%s)', $user->display_name, $user->user_email );
				break;
			default:
				$text = apply_filters( "elementor/query/{$filter_name}/display/{$display}", $user, $data );
				break;
		}

		return $text;
	}

	private function query_data_compatibility( $data ) {
		if ( isset( $data['query']['filter_type'] ) ) {
			$data['filter_type'] = $data['query']['filter_type'];
		}
		if ( isset( $data['query']['object_type'] ) ) {
			$data['object_type'] = $data['query']['object_type'];
		}
		if ( isset( $data['query']['include_type'] ) ) {
			$data['include_type'] = $data['query']['include_type'];
		}
		if ( isset( $data['query']['post_type'] ) ) {
			$data['post_type'] = $data['query']['post_type'];
		}
		return $data;
	}

	public function register_controls( Controls_Manager $controls_manager ) {
		$controls_manager->add_group_control( Group_Control_Posts::get_type(), new Group_Control_Posts() );

		$controls_manager->add_group_control( Group_Control_Query::get_type(), new Group_Control_Query() );

		$controls_manager->add_group_control( Group_Control_Related::get_type(), new Group_Control_Related() );

		$controls_manager->register( new Query() );

		$controls_manager->register( new Template_Query() );
	}

	/**
	 * get_term_name_with_parents
	 * @param \WP_Term $term
	 * @param int $max
	 *
	 * @return string
	 */
	private function get_term_name_with_parents( \WP_Term $term, $max = 3 ) {
		if ( 0 === $term->parent ) {
			return $term->name;
		}
		$separator = is_rtl() ? ' < ' : ' > ';
		$test_term = $term;
		$names = [];
		while ( $test_term->parent > 0 ) {
			$test_term = get_term( $test_term->parent );
			if ( ! $test_term ) {
				break;
			}
			$names[] = $test_term->name;
		}

		$names = array_reverse( $names );
		if ( count( $names ) < ( $max ) ) {
			return implode( $separator, $names ) . $separator . $term->name;
		}

		$name_string = '';
		for ( $i = 0; $i < ( $max - 1 ); $i++ ) {
			$name_string .= $names[ $i ] . $separator;
		}
		return $name_string . '...' . $separator . $term->name;
	}

	/**
	 * get post name with parents
	 * @param \WP_Post $post
	 * @param int $max
	 *
	 * @return string
	 */
	private function get_post_name_with_parents( $post, $max = 3 ) {
		if ( 0 === $post->post_parent ) {
			return $post->post_title;
		}
		$separator = is_rtl() ? ' < ' : ' > ';
		$test_post = $post;
		$names = [];
		while ( $test_post->post_parent > 0 ) {
			$test_post = get_post( $test_post->post_parent );
			if ( ! $test_post ) {
				break;
			}
			$names[] = $test_post->post_title;
		}

		$names = array_reverse( $names );
		if ( count( $names ) < ( $max ) ) {
			return implode( $separator, $names ) . $separator . $post->post_title;
		}

		$name_string = '';
		for ( $i = 0; $i < ( $max - 1 ); $i++ ) {
			$name_string .= $names[ $i ] . $separator;
		}
		return $name_string . '...' . $separator . $post->post_title;
	}

	/**
	 * @deprecated use Elementor_Post_Query capabilities
	 *
	 * @param string $control_id
	 * @param array $settings
	 *
	 * @return array
	 */
	public function get_query_args( $control_id, $settings ) {
		Plugin::elementor()->modules_manager->get_modules( 'dev-tools' )->deprecation->deprecated_function( __METHOD__, '2.5.0', 'class Elementor_Post_Query' );

		$controls_manager = Plugin::elementor()->controls_manager;

		/** @var Group_Control_Posts $posts_query */
		$posts_query = $controls_manager->get_control_groups( Group_Control_Posts::get_type() );

		return $posts_query->get_query_args( $control_id, $settings );
	}

	/**
	 * @param \Elementor\Widget_Base $widget
	 * @param string $name
	 * @param array $query_args
	 * @param array $fallback_args
	 *
	 * @return \WP_Query
	 */
	public function get_query( $widget, $name, $query_args = [], $fallback_args = [] ) {
		$prefix = $name . '_';
		$post_type = $widget->get_settings( $prefix . 'post_type' );
		if ( 'related' === $post_type ) {
			$elementor_query = new Elementor_Related_Query( $widget, $name, $query_args, $fallback_args );
		} else {
			$elementor_query = new Elementor_Post_Query( $widget, $name, $query_args );
		}
		return $elementor_query->get_query();
	}

	/**
	 * @param Ajax $ajax_manager
	 */
	public function register_ajax_actions( $ajax_manager ) {
		$ajax_manager->register_ajax_action( 'query_control_value_titles', [ $this, 'ajax_posts_control_value_titles' ] );
		$ajax_manager->register_ajax_action( 'pro_panel_posts_control_filter_autocomplete', [ $this, 'ajax_posts_filter_autocomplete' ] );
		/**
		 * @deprecated 2.6.0 use new `autocomplete` format
		 */
		$ajax_manager->register_ajax_action( 'query_control_value_titles_deprecated', [ $this, 'ajax_posts_control_value_titles_deprecated' ] );
		$ajax_manager->register_ajax_action( 'pro_panel_posts_control_filter_autocomplete_deprecated', [ $this, 'ajax_posts_filter_autocomplete_deprecated' ] );
	}

	/**
	 * @deprecated 3.1.0
	 */
	public function localize_settings() {
		Plugin::elementor()->modules_manager->get_modules( 'dev-tools' )->deprecation->deprecated_function( __METHOD__, '3.1.0' );

		return [];
	}

	protected function add_actions() {
		add_action( 'elementor/ajax/register_actions', [ $this, 'register_ajax_actions' ] );
		add_action( 'elementor/controls/register', [ $this, 'register_controls' ] );
	}

	/**
	 * In WordPress 5.9 the 'who' query param was deprecated, this method
	 * adding the new `capability` query param to the query and still support old versions of WordPress.
	 *
	 * @param $query
	 *
	 * @return mixed
	 */
	private function add_edit_capability_to_user_query( $query ) {
		// Capability queries were only introduced in WP 5.9.
		if ( version_compare( $GLOBALS['wp_version'], '5.9-alpha', '>=' ) ) {
			$query['capability'] = [ 'edit_posts' ];
		} else {
			$query['who'] = 'authors';
		}

		return $query;
	}
}
