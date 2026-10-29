<?php

namespace ElementorPro\Modules\FloatingButtons\Base;

use Elementor\Core\Base\Providers\Social_Network_Provider;
use Elementor\Modules\FloatingButtons\Base\Widget_Contact_Button_Base;
use ElementorPro\Base\Markdown_Utils;
use ElementorPro\Plugin;

abstract class Widget_Contact_Button_Base_Pro extends Widget_Contact_Button_Base {

	public function has_widget_inner_wrapper(): bool {
		return ! Plugin::elementor()->experiments->is_feature_active( 'e_optimized_markup' );
	}

	public function render_markdown(): string {
		$settings = $this->get_settings_for_display();
		$blocks = [];
		$lines = [];

		$platform = $settings['chat_button_platform'] ?? '';

		if ( '' !== $platform ) {
			$link = Markdown_Utils::format_contact_link( $platform, $settings, 'chat_button' );
			$line = Markdown_Utils::contact_line( esc_html__( 'Chat', 'elementor-pro' ), $platform, $link );

			if ( '' !== $line ) {
				$lines[] = $line;
			}
		}

		foreach ( $settings['contact_repeater'] ?? [] as $contact ) {
			$contact_platform = $contact['contact_icon_platform'] ?? '';

			if ( '' === $contact_platform ) {
				continue;
			}

			$link = Markdown_Utils::format_contact_link( $contact_platform, $contact, 'contact_icon' );
			$platform_mapping = Social_Network_Provider::get_text_mapping( $contact_platform );
			$label = $platform_mapping ? $platform_mapping : $contact_platform;
			$line = Markdown_Utils::contact_line( $label, $contact_platform, $link );

			if ( '' !== $line ) {
				$lines[] = $line;
			}
		}

		if ( ! empty( $lines ) ) {
			$blocks[] = Markdown_Utils::bullet_list( $lines );
		}

		$top_bar_parts = [];

		$top_bar_image = Markdown_Utils::image_from_media_array( $settings['top_bar_image'] ?? [] );

		if ( '' !== $top_bar_image ) {
			$top_bar_parts[] = $top_bar_image;
		}

		$top_bar_title = Markdown_Utils::plain_text( $settings['top_bar_title'] ?? '' );

		if ( '' !== $top_bar_title ) {
			$top_bar_parts[] = '**' . $top_bar_title . '**';
		}

		$top_bar_subtitle = Markdown_Utils::plain_text( $settings['top_bar_subtitle'] ?? '' );

		if ( '' !== $top_bar_subtitle ) {
			$top_bar_parts[] = $top_bar_subtitle;
		}

		if ( ! empty( $top_bar_parts ) ) {
			$blocks[] = Markdown_Utils::join_blocks( $top_bar_parts );
		}

		$bubble_parts = [];

		$bubble_name = Markdown_Utils::plain_text( $settings['message_bubble_name'] ?? '' );

		if ( '' !== $bubble_name ) {
			$bubble_parts[] = '**' . $bubble_name . '**';
		}

		$bubble_body = Markdown_Utils::plain_text( $settings['message_bubble_body'] ?? '' );

		if ( '' !== $bubble_body ) {
			$bubble_parts[] = $bubble_body;
		}

		if ( ! empty( $bubble_parts ) ) {
			$blocks[] = Markdown_Utils::join_blocks( $bubble_parts );
		}

		return Markdown_Utils::widget_section( $this->get_title(), Markdown_Utils::join_blocks( $blocks ) );
	}
}
