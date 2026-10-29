<?php

namespace ElementorPro\Modules\LinkInBio\Base;

use Elementor\Core\Base\Providers\Social_Network_Provider;
use Elementor\Modules\LinkInBio\Base\Widget_Link_In_Bio_Base;
use ElementorPro\Base\Markdown_Utils;

abstract class Widget_Link_In_Bio_Base_Pro extends Widget_Link_In_Bio_Base {

	public function render_markdown(): string {
		$settings = $this->get_settings_for_display();
		$blocks = [];

		$heading = Markdown_Utils::plain_text( $settings['bio_heading'] ?? '' );

		if ( '' !== $heading ) {
			$tag = $settings['bio_heading_tag'] ?? 'h2';
			$blocks[] = Markdown_Utils::heading( $heading, $tag );
		}

		$description = Markdown_Utils::plain_text( $settings['bio_description'] ?? '' );

		if ( '' !== $description ) {
			$blocks[] = $description;
		}

		$identity_image = Markdown_Utils::image_from_media_array( $settings['identity_image'] ?? [] );

		if ( '' !== $identity_image ) {
			$blocks[] = $identity_image;
		}

		$cta_lines = [];

		foreach ( $settings['cta_link'] ?? [] as $cta ) {
			$text = Markdown_Utils::plain_text( $cta['cta_link_text'] ?? '' );
			$platform = $cta['cta_link_type'] ?? '';
			$url = Markdown_Utils::format_contact_link( $platform, $cta, 'cta_link' );

			if ( '' === $text && '' === $url ) {
				continue;
			}

			$display = '' !== $text ? $text : $url;
			$cta_lines[] = '' !== $url
				? '- [' . $display . '](' . esc_url( $url ) . ')'
				: '- ' . $display;
		}

		if ( ! empty( $cta_lines ) ) {
			$blocks[] = implode( "\n", $cta_lines );
		}

		$icon_lines = [];

		foreach ( $settings['icon'] ?? [] as $icon ) {
			$platform = $icon['icon_platform'] ?? '';
			$text = Markdown_Utils::plain_text( $icon['icon_text'] ?? '' );
			$url = Markdown_Utils::format_contact_link( $platform, $icon, 'icon' );

			if ( '' === $text && '' === $url ) {
				continue;
			}

			$platform_mapping = Social_Network_Provider::get_text_mapping( $platform );
			$display = '' !== $text ? $text : ( $platform_mapping ? $platform_mapping : $platform );
			$icon_lines[] = '' !== $url
				? '- [' . $display . '](' . esc_url( $url ) . ')'
				: '- ' . $display;
		}

		if ( ! empty( $icon_lines ) ) {
			$blocks[] = implode( "\n", $icon_lines );
		}

		return Markdown_Utils::join_blocks( $blocks );
	}
}
