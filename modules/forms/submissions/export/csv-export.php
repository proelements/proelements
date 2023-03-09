<?php
namespace ElementorPro\Modules\Forms\Submissions\Export;

use Elementor\Core\Base\Base_Object;
use Elementor\Core\Utils\Collection;
use ElementorPro\Modules\Forms\Submissions\Database\Entities\Form_Snapshot;
use ElementorPro\Modules\Forms\Submissions\Database\Query;
use ElementorPro\Modules\Forms\Submissions\Database\Repositories\Form_Snapshot_Repository;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class CSV_Export extends Base_Object {
	/**
	 * @var Collection
	 */
	private $submissions;

	/**
	 * @var integer
	 */
	private $post_id;

	/**
	 * @var string
	 */
	private $element_id;

	/**
	 * @var Form_Snapshot|null
	 */
	private $form;

	/**
	 * @var Collection
	 */
	private $values_keys;

	/**
	 * Csv_Export constructor.
	 *
	 * Csv_Export constructor.
	 *
	 * @param Collection $submissions
	 */
	public function __construct( Collection $submissions ) {
		$this->submissions = $submissions;

		$first_submission = $this->submissions->first();

		$this->values_keys = new Collection( [] );
		$this->post_id = $first_submission['post']['id'];
		$this->element_id = $first_submission['element_id'];

		$this->form = Form_Snapshot_Repository::instance()->find(
			$this->post_id,
			$this->element_id
		);
	}

	/**
	 * @return array
	 */
	public function prepare_for_json_response() {
		$this->values_keys = Query::get_instance()->get_submissions_value_keys(
			$this->post_id,
			$this->element_id
		);

		$headers = $this->get_headers();
		$rows = $this->get_rows();

		return [
			'id' => $this->element_id,
			'content' => array_merge( $headers, $rows ),
			'mimetype' => 'text/csv;charset=UTF-8',
			'extension' => 'csv',
			'form_label' => $this->form ? $this->form->get_label() : "({$this->element_id})",
		];
	}

	/**
	 * @return array
	 */
	private function get_headers() {
		$base_headers = [
			'1_form_name' => esc_html__( 'Form Name (ID)', 'elementor-pro' ),
			'2_id' => esc_html__( 'Submission ID', 'elementor-pro' ),
			'3_created_at' => esc_html__( 'Created At', 'elementor-pro' ),
			'4_user_id' => esc_html__( 'User ID', 'elementor-pro' ),
			'5_user_agent' => esc_html__( 'User Agent', 'elementor-pro' ),
			'6_user_ip' => esc_html__( 'User IP', 'elementor-pro' ),
			'7_referrer' => esc_html__( 'Referrer', 'elementor-pro' ),
		];

		$labels_dictionary = $this->get_form_labels_dictionary();

		$headers = $this->values_keys
			->map_with_keys( function ( $key ) use ( $labels_dictionary ) {
				return [
					// JSON_UNESCAPED_UNICODE - for supporting non english chars.
					$key => wp_json_encode( isset( $labels_dictionary[ $key ] ) ? $labels_dictionary[ $key ] : $key, JSON_UNESCAPED_UNICODE ),
				];
			} )
			->merge( $base_headers )
			->all();

		return [ implode( ',', $headers ) ];
	}

	/**
	 * @return array
	 */
	private function get_rows() {
		return $this->submissions->map( function ( $submission ) {
			$base_values = [
				'1_form_name' => wp_json_encode(
					$this->form ? $this->form->get_label() : "({$this->element_id})"
				),
				'2_id' => wp_json_encode( $submission['id'] ),
				'3_created_at' => wp_json_encode( $submission['created_at'] ),
				'4_user_id' => wp_json_encode( $submission['user_id'] ),
				// JSON_UNESCAPED_SLASHES - Should not escape the user agent e.g: 'Mozilla/5.0 ...'
				'5_user_agent' => wp_json_encode( $submission['user_agent'], JSON_UNESCAPED_SLASHES ),
				'6_user_ip' => wp_json_encode( $submission['user_ip'] ),
				// JSON_UNESCAPED_SLASHES - should not escape the url slashes e.g: 'https://local.test/'
				'7_referrer' => wp_json_encode( $submission['referer'], JSON_UNESCAPED_SLASHES ),
			];

			$values_dictionary = $this->get_values_dictionary( $submission['values'] );

			$row = $this->values_keys
				->map_with_keys( function ( $key ) use ( $values_dictionary ) {
					return [
						// JSON_UNESCAPED_UNICODE - for supporting non english chars.
						$key => wp_json_encode( isset( $values_dictionary[ $key ] ) ? $values_dictionary[ $key ] : '', JSON_UNESCAPED_UNICODE ),
					];
				} )
				->merge( $base_values )
				->all();

			return implode( ',', $row );
		} )->all();
	}

	/**
	 * Create a dictionary from the field id and label.
	 *
	 * @return array
	 */
	private function get_form_labels_dictionary() {
		if ( ! $this->form ) {
			return [];
		}

		$dictionary = [];

		foreach ( $this->form->fields as $field ) {
			$dictionary[ $field['id'] ] = $field['label'];
		}

		return $dictionary;
	}

	/**
	 * Create a dictionary from the value record key and value.
	 *
	 * @param array $values
	 *
	 * @return array
	 */
	private function get_values_dictionary( $values ) {
		if ( ! $values ) {
			return [];
		}

		$dictionary = [];

		foreach ( $values as $value ) {
			$dictionary[ $value['key'] ] = $value['value'];
		}

		return $dictionary;
	}
}
