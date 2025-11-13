<?php
namespace ElementorPro\Modules\Forms\Submissions\Database\Entities;

use Elementor\Core\Base\Base_Object;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * The Form_Snapshot is a snapshot of the form as it saved in the document data, on each submission creation it updates the snapshot to the current state of the form,
 * As a consequence the queries are quicker (filters, export, etc.) and in case the form itself removed from the document, the Form_Snapshot
 * remains and allows the user export and filter submissions as before.
 */
class Form_Snapshot extends Base_Object implements \JsonSerializable {
	/**
	 * @var string
	 */
	public $id;

	/**
	 * @var int
	 */
	public $post_id;

	/**
	 * @var string
	 */
	public $name;

	/**
	 * @var array {
	 *      @type string $id
	 *      @type string $type
	 *      @type string $label
	 * }
	 */
	public $fields = [];

	/**
	 * @param $post_id
	 * @param $form_id
	 *
	 * @return string
	 */
	public static function generate_key( $post_id, $form_id ) {
		return "{$post_id}_{$form_id}";

	}

	/**
	 * @return string
	 */
	public function get_key() {
		return static::generate_key( $this->post_id, $this->id );
	}

	/**
	 * @return string
	 */
	public function get_label() {
		return "{$this->name} ($this->id)";
	}

	/**
	 * Implement for the JsonSerializable method, will trigger when trying to json_encode this object.
	 *
	 * @return array
	 */
	#[\ReturnTypeWillChange]
	public function jsonSerialize() {
		return [
			'id' => $this->id,
			'name' => $this->name,
			'fields' => $this->fields,
		];
	}


	/**
	 * Form constructor.
	 *
	 * @param $post_id
	 * @param $data
	 */
	public function __construct( $post_id, $data ) {
		$this->post_id = (int) $post_id;
		$this->id = $data['id'];
		$this->name = $data['name'];
		$this->fields = $data['fields'];
	}
}
