<?php
namespace ElementorPro\Modules\Notes\User;

use ElementorPro\Modules\Notes\Database\Models\Note;
use ElementorPro\Modules\Notes\Database\Models\User;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Personal_Data {

	const WP_KEY = 'elementor-notes';

	/**
	 * Register actions and hooks.
	 *
	 * @return void
	 */
	public function register() {
		add_filter( 'wp_privacy_personal_data_exporters', function ( $exporters ) {
			return $this->add_exporter( $exporters );
		} );
	}

	/**
	 * Get the data key for the exporter.
	 *
	 * @return string
	 */
	public function get_key() {
		return static::WP_KEY;
	}

	/**
	 * Get the exporter friendly name.
	 *
	 * @return string
	 */
	public function get_title() {
		return esc_html__( 'Elementor Notes', 'elementor-pro' );
	}

	/**
	 * Add the Notes' exporter to the list of exporters.
	 *
	 * @param array $exporters
	 *
	 * @return array
	 */
	private function add_exporter( array $exporters ) {
		$exporters[ $this->get_key() ] = [
			'exporter_friendly_name' => $this->get_title(),
			'callback' => function ( $email ) {
				return $this->export_data( $email );
			},
		];

		return $exporters;
	}

	/**
	 * Export all the notes related to specific email.
	 *
	 * @param string $email
	 *
	 * @return array
	 */
	private function export_data( $email ) {
		$user_id = User::query()
			->where( 'user_email', '=', $email )
			->pluck( 'ID' )
			->first();

		if ( ! $user_id ) {
			return [
				'data' => [],
				'done' => true,
			];
		}

		$data = Note::query()
			->with_trashed()
			->where( 'author_id', '=', $user_id )
			->get()
			->map( function ( Note $note ) {
				return [
					'group_id' => $this->get_key(),
					'group_label' => $this->get_title(),
					'item_id' => "{$this->get_key()}-{$note->id}",
					'data' => [
						[
							'name' => esc_html__( 'ID', 'elementor-pro' ),
							'value' => $note->id,
						],
						[
							'name' => esc_html__( 'Parent ID', 'elementor-pro' ),
							'value' => $note->parent_id,
						],
						[
							'name' => esc_html__( 'Status', 'elementor-pro' ),
							'value' => $note->status,
						],
						[
							'name' => esc_html__( 'Content', 'elementor-pro' ),
							'value' => $note->content,
						],
						[
							'name' => esc_html__( 'Created At', 'elementor-pro' ),
							'value' => $note->created_at->format( 'Y-m-d H:i:s' ),
						],
					],
				];
			} )
			->all();

		return [
			'data' => $data,
			'done' => true,
		];
	}
}
