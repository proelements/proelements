<?php
namespace ElementorPro\Modules\Posts\Skins;

use Elementor\Controls_Manager;
use Elementor\Group_Control_Image_Size;
use Elementor\Utils;
use Elementor\Widget_Base;
use ElementorPro\Modules\ThemeBuilder\Module as ThemeBuilder;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

trait Skin_Content_Base {
	protected function _register_controls_actions() {
		$widget_name = $this->parent->get_name();
		add_action( 'elementor/element/' . $widget_name . '/section_layout/before_section_end', [ $this, 'register_skin_controls' ] );

		if ( 'archive-posts' === $widget_name ) {
			add_action( 'elementor/element/archive-posts/section_layout/after_section_end', [ $this, 'register_style_sections' ] );
		} else {
			add_action( 'elementor/element/posts/section_query/after_section_end', [ $this, 'register_style_sections' ] );
		}
	}

	public function get_title() {
		return esc_html__( 'Full Content', 'elementor-pro' );
	}

	public function register_skin_controls( Widget_Base $widget ) {
		$this->parent = $widget;
		$this->register_post_count_control();
		$this->register_row_gap_control();
		$this->register_thumbnail_controls();
		$this->register_title_controls();
		$this->register_meta_data_controls();
		$this->register_link_controls();
	}

	public function register_thumbnail_controls() {
		$this->add_control(
			'thumbnail',
			[
				'label' => esc_html__( 'Show Thumbnail', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'return_value' => 'thumbnail',
				'prefix_class' => 'elementor-posts--show-',
				'separator' => 'before',
			]
		);

		$this->add_group_control(
			Group_Control_Image_Size::get_type(),
			[
				'name' => 'thumbnail_size',
				'default' => 'medium',
				'exclude' => [ 'custom' ],
				'condition' => [
					$this->get_control_id( 'thumbnail!' ) => '',
				],
				'prefix_class' => 'elementor-posts--thumbnail-size-',
			]
		);

		$this->add_responsive_control(
			'item_ratio',
			[
				'label' => esc_html__( 'Image Ratio', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'default' => [
					'size' => 0.66,
				],
				'tablet_default' => [
					'size' => '',
				],
				'mobile_default' => [
					'size' => 0.5,
				],
				'range' => [
					'px' => [
						'min' => 0.1,
						'max' => 2,
						'step' => 0.01,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-posts-container .elementor-post__thumbnail' => 'padding-bottom: calc( {{SIZE}} * 100% );',
					'{{WRAPPER}}:after' => 'content: "{{SIZE}}"; position: absolute; color: transparent;',
				],
				'condition' => [
					$this->get_control_id( 'thumbnail!' ) => '',
				],
			]
		);

		$this->add_responsive_control(
			'image_width',
			[
				'label' => esc_html__( 'Image Width', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'vw', 'custom' ],
				'range' => [
					'%' => [
						'min' => 10,
						'max' => 100,
					],
					'px' => [
						'min' => 10,
						'max' => 600,
					],
				],
				'default' => [
					'size' => 100,
					'unit' => '%',
				],
				'tablet_default' => [
					'size' => '',
					'unit' => '%',
				],
				'mobile_default' => [
					'size' => 100,
					'unit' => '%',
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-post__thumbnail__link' => 'width: {{SIZE}}{{UNIT}};',
				],
				'condition' => [
					$this->get_control_id( 'thumbnail!' ) => '',
				],
			]
		);
	}

	public function register_design_controls() {
		$this->register_additional_design_controls();
		$this->register_design_image_controls();
		$this->register_design_content_controls();
		$this->update_image_spacing_control();
	}

	public function register_row_gap_control() {
		$this->add_control(
			'row_gap',
			[
				'label' => esc_html__( 'Rows Gap', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem', 'custom' ],
				'default' => [
					'size' => 35,
				],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 100,
					],
				],
				'frontend_available' => true,
				'selectors' => [
					'{{WRAPPER}} .elementor-posts-container article' => 'margin-bottom: {{SIZE}}{{UNIT}}',
				],
			]
		);
	}

	// Update selectors for full content
	public function update_image_spacing_control() {
		$image_spacing_control = [
			'selectors' => [
				'{{WRAPPER}} .elementor-posts--skin-full_content a.elementor-post__thumbnail__link' => 'margin-bottom: {{SIZE}}{{UNIT}}',
				'{{WRAPPER}} .elementor-posts--skin-archive_full_content a.elementor-post__thumbnail__link' => 'margin-bottom: {{SIZE}}{{UNIT}}',
			],
		];
		$this->update_control( 'image_spacing', $image_spacing_control );
	}

	protected function render_thumbnail() {
		$thumbnail = $this->get_instance_value( 'thumbnail' );

		// In edit mode we render thumbnail to avoid server side rendering on each change.
		if ( empty( $thumbnail ) && ! Plugin::elementor()->editor->is_edit_mode() ) {
			return;
		}

		$settings = $this->parent->get_settings();
		$setting_key = $this->get_control_id( 'thumbnail_size' );
		$settings[ $setting_key ] = [
			'id' => get_post_thumbnail_id(),
		];
		$thumbnail_html = Group_Control_Image_Size::get_attachment_image_html( $settings, $setting_key );

		if ( empty( $thumbnail_html ) ) {
			return;
		}

		$optional_attributes_html = $this->get_optional_link_attributes_html();

		// PHPCS - `get_permalink` is safe.
		?>
		<a class="elementor-post__thumbnail__link" href="<?php echo $this->current_permalink; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>" tabindex="-1" <?php Utils::print_unescaped_internal_string( $optional_attributes_html ); ?>>
		<div class="elementor-post__thumbnail"><?php echo wp_kses_post( $thumbnail_html ); ?></div>
		</a>
		<?php
	}

	/**
	 * Render post content.
	 *
	 * @param boolean     $with_wrapper - Whether to wrap the content with a div.
	 * @param boolean     $with_css - Decides whether to print inline CSS before the post content.
	 *
	 * @return void
	 */
	public function render_post_content( $with_wrapper = false, $with_css = true ) {
		static $did_posts = [];
		static $level = 0;

		$post = get_post();

		if ( post_password_required( $post->ID ) ) {
			// PHPCS - `get_the_password_form`. is safe.
			echo get_the_password_form( $post->ID ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			return;
		}

		// Avoid recursion
		if ( isset( $did_posts[ $post->ID ] ) ) {
			return;
		}

		$level++;
		$did_posts[ $post->ID ] = true;
		// End avoid recursion

		$editor = Plugin::elementor()->editor;
		$is_edit_mode = $editor->is_edit_mode();

		if ( Plugin::elementor()->preview->is_preview_mode( $post->ID ) ) {
			$content = Plugin::elementor()->preview->builder_wrapper( '' ); // XSS ok
		} else {
			/**
			 * @var ThemeBuilder ThemeBuilder
			 */
			$document = ThemeBuilder::instance()->get_document( $post->ID );
			// On view theme document show it's preview content.
			if ( $document ) {
				$preview_type = $document->get_settings( 'preview_type' );
				$preview_id = $document->get_settings( 'preview_id' );

				if ( 0 === strpos( $preview_type, 'single' ) && ! empty( $preview_id ) ) {
					$post = get_post( $preview_id );

					if ( ! $post ) {
						$level--;

						return;
					}
				}
			}

			// Set edit mode as false, so don't render settings and etc. use the $is_edit_mode to indicate if we need the CSS inline
			$editor->set_edit_mode( false );

			// Print manually (and don't use `the_content()`) because it's within another `the_content` filter, and the Elementor filter has been removed to avoid recursion.
			$content = Plugin::elementor()->frontend->get_builder_content( $post->ID, $with_css );

			Plugin::elementor()->frontend->remove_content_filter();

			if ( empty( $content ) ) {
				// Split to pages.
				setup_postdata( $post );

				/** This filter is documented in wp-includes/post-template.php */
				// PHPCS - `get_the_content` is safe.
				echo apply_filters( 'the_content', get_the_content() ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped

				wp_link_pages( [
					'before' => '<div class="page-links elementor-page-links"><span class="page-links-title elementor-page-links-title">' . esc_html__( 'Pages:', 'elementor-pro' ) . '</span>',
					'after' => '</div>',
					'link_before' => '<span>',
					'link_after' => '</span>',
					'pagelink' => '<span class="screen-reader-text">' . esc_html__( 'Page', 'elementor-pro' ) . ' </span>%',
					'separator' => '<span class="screen-reader-text">, </span>',
				] );

				Plugin::elementor()->frontend->add_content_filter();

				$level--;

				// Restore edit mode state
				Plugin::elementor()->editor->set_edit_mode( $is_edit_mode );

				return;
			} else {
				Plugin::elementor()->frontend->remove_content_filters();
				$content = apply_filters( 'the_content', $content );
				Plugin::elementor()->frontend->restore_content_filters();
			}
		} // End if().

		// Restore edit mode state
		Plugin::elementor()->editor->set_edit_mode( $is_edit_mode );

		if ( $with_wrapper ) {
			echo '<div class="elementor-post__content">' . balanceTags( $content, true ) . '</div>';  // XSS ok.
		} else {
			echo $content; // XSS ok.
		}

		$level--;

		if ( 0 === $level ) {
			$did_posts = [];
		}
	}

	protected function render_post() {
		$this->render_post_header();
		$this->render_thumbnail();
		$this->render_text_header();
		$this->render_title();
		$this->render_meta_data();
		$this->render_post_content( true );
		$this->render_text_footer();
		$this->render_post_footer();
	}
}
