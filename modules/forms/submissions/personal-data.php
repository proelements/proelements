<?php
namespace ElementorPro\Modules\Forms\Submissions;

use Elementor\Core\Utils\Collection;
use Elementor\Core\Base\Base_Object;
use ElementorPro\Modules\Forms\Submissions\Database\Query;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class Personal_Data extends Base_Object {
	const WP_KEY = 'elementor-form-submissions';

	/**
	 * @return string
	 */
	private function get_title() {
		return esc_html__( 'Elementor Submissions', 'elementor-pro' );
	}

	/**
	 * @return string
	 */
	private function get_key() {
		return self::WP_KEY;
	}

	/**
	 * Export all the submissions related to specific email.
	 *
	 * WordPress send always an email even if the user choose to erase by username.
	 *
	 * @param $email
	 *
	 * @return array
	 */
	private function export_data( $email ) {
		$data = Query::get_instance()
			->get_submissions_by_email( $email, true )
			->map(function ( $submission ) {
				$submission_data = ( new Collection( $submission->values ) )
					->map( function ( $value ) {
						return [
							'name' => $value->key,
							'value' => $value->value,
						];
					} )
					->merge([
						[
							'name' => esc_html__( 'User IP', 'elementor-pro' ),
							'value' => $submission->user_ip,
						],
						[
							'name' => esc_html__( 'Referer', 'elementor-pro' ),
							'value' => $submission->referer,
						],
						[
							'name' => esc_html__( 'User Agent', 'elementor-pro' ),
							'value' => $submission->user_agent,
						],
						[
							'name' => esc_html__( 'Created At', 'elementor-pro' ),
							'value' => $submission->created_at,
						],
						[
							'name' => esc_html__( 'Created At GMT', 'elementor-pro' ),
							'value' => $submission->created_at_gmt,
						],
						[
							'name' => esc_html__( 'Updated At', 'elementor-pro' ),
							'value' => $submission->updated_at,
						],
						[
							'name' => esc_html__( 'Updated At GMT', 'elementor-pro' ),
							'value' => $submission->updated_at_gmt,
						],
					])
					->all();

				return [
					'group_id' => $this->get_key(),
					'group_label' => $this->get_title(),
					'item_id' => "{$this->get_key()}-{$submission->id}",
					'data' => $submission_data,
				];
			})
			->all();

		return [
			'data' => $data,
			'done' => true,
		];
	}

	/**
	 * Erase all the submissions related to specific email.
	 *
	 * WordPress send always an email even if the user choose to erase by username.
	 *
	 * @param $email
	 *
	 * @return array
	 */
	private function erase_data( $email ) {
		$query = Query::get_instance();

		$submissions = $query->get_submissions_by_email( $email, true );

		$affected = 0;
		$failed = 0;

		foreach ( $submissions as $submission ) {
			$affected_rows = $query->delete_submission( $submission->id );

			if ( false === $affected_rows ) {
				$failed++;
			} else {
				$affected += $affected_rows;
			}
		}

		return [
			'items_removed' => count( $submissions ) === $affected,
			'items_retained' => $failed > 0,
			'messages' => [],
			'done' => true,
		];
	}

	/**
	 * Add exporter to the list of exporters
	 *
	 * @param $exporters
	 *
	 * @return mixed
	 */
	private function add_exporter( $exporters ) {
		$exporters[ $this->get_key() ] = [
			'exporter_friendly_name' => $this->get_title(),
			'callback' => function ( $email ) {
				return $this->export_data( $email );
			},
		];

		return $exporters;
	}

	/**
	 * Add eraser to the list of erasers.
	 *
	 * @param $erasers
	 *
	 * @return array[]
	 */
	private function add_eraser( $erasers ) {
		return $erasers + [
			$this->get_key() => [
				'eraser_friendly_name' => $this->get_title(),
				'callback' => function ( $email ) {
					return $this->erase_data( $email );
				},
			],
		];
	}

	/**
	 * Personal_Data constructor.
	 */
	public function __construct() {
		add_filter( 'wp_privacy_personal_data_exporters', function ( $exporters ) {
			return $this->add_exporter( $exporters );
		} );

		add_filter( 'wp_privacy_personal_data_erasers', function ( $exporters ) {
			return $this->add_eraser( $exporters );
		} );
	}
}
