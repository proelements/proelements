<?php
namespace ElementorPro\Modules\DynamicTags\Tags;

use Elementor\Controls_Manager;
use ElementorPro\Modules\DynamicTags\Tags\Base\Tag;
use ElementorPro\Modules\DynamicTags\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Comments_Number extends Tag {

	public function get_name() {
		return 'comments-number';
	}

	public function get_title() {
		return __( 'Comments Number', 'elementor-pro' );
	}

	public function get_group() {
		return Module::COMMENTS_GROUP;
	}

	public function get_categories() {
		return [
			Module::TEXT_CATEGORY,
			Module::NUMBER_CATEGORY,
		];
	}

	protected function _register_controls() {
		$this->add_control(
			'format_no_comments',
			[
				'label' => __( 'No Comments Format', 'elementor-pro' ),
				'default' => __( 'No Responses', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'format_one_comments',
			[
				'label' => __( 'One Comment Format', 'elementor-pro' ),
				'default' => __( 'One Response', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'format_many_comments',
			[
				'label' => __( 'Many Comment Format', 'elementor-pro' ),
				'default' => __( '{number} Responses', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'link_to',
			[
				'label' => __( 'Link', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => '',
				'options' => [
					'' => __( 'None', 'elementor-pro' ),
					'comments_link' => __( 'Comments Link', 'elementor-pro' ),
				],
			]
		);
	}

	public function render() {
		$settings = $this->get_settings();

		$comments_number = get_comments_number();

		if ( ! $comments_number ) {
			$count = $settings['format_no_comments'];
		} elseif ( 1 === $comments_number ) {
			$count = $settings['format_one_comments'];
		} else {
			$count = strtr( $settings['format_many_comments'], [
				'{number}' => number_format_i18n( $comments_number ),
			] );
		}

		if ( 'comments_link' === $this->get_settings( 'link_to' ) ) {
			$count = sprintf( '<a href="%s">%s</a>', get_comments_link(), $count );
		}

		echo wp_kses_post( $count );
	}
}
