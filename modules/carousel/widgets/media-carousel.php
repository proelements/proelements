<?php
namespace ElementorPro\Modules\Carousel\Widgets;

use Elementor\Controls_Manager;
use Elementor\Control_Media;
use Elementor\Core\Kits\Documents\Tabs\Global_Typography;
use Elementor\Embed;
use Elementor\Group_Control_Text_Shadow;
use Elementor\Group_Control_Typography;
use Elementor\Icons_Manager;
use Elementor\Repeater;
use Elementor\Utils;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Media_Carousel extends Base {

	/**
	 * @var int
	 */
	private $lightbox_slide_index;

	public function get_name() {
		return 'media-carousel';
	}

	public function get_title() {
		return esc_html__( 'Media Carousel', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-media-carousel';
	}

	public function get_keywords() {
		return [ 'media', 'carousel', 'image', 'video', 'lightbox' ];
	}

	protected function render() {
		$settings = $this->get_active_settings();

		if ( $settings['overlay'] ) {
			$this->add_render_attribute( 'image-overlay', 'class', [
				'elementor-carousel-image-overlay',
				'e-overlay-animation-' . $settings['overlay_animation'],
			] );
		}

		$this->print_slider();

		if ( 'slideshow' !== $settings['skin'] || count( $settings['slides'] ) <= 1 ) {
			return;
		}

		$settings['thumbs_slider'] = true;
		$settings['container_class'] = 'elementor-thumbnails-swiper';
		$settings['show_arrows'] = false;

		$this->print_slider( $settings );
	}

	protected function register_controls() {
		parent::register_controls();

		$this->start_controls_section(
			'section_lightbox_style',
			[
				'label' => esc_html__( 'Lightbox', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'lightbox_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'#elementor-lightbox-slideshow-{{ID}}' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'lightbox_ui_color',
			[
				'label' => esc_html__( 'UI Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'#elementor-lightbox-slideshow-{{ID}} .dialog-lightbox-close-button, #elementor-lightbox-slideshow-{{ID}} .elementor-swiper-button' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'lightbox_ui_hover_color',
			[
				'label' => esc_html__( 'UI Hover Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'#elementor-lightbox-slideshow-{{ID}} .dialog-lightbox-close-button:hover, #elementor-lightbox-slideshow-{{ID}} .elementor-swiper-button:hover' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'lightbox_video_width',
			[
				'label' => esc_html__( 'Video Width', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', '%', 'em', 'rem', 'vw', 'custom' ],
				'default' => [
					'unit' => '%',
				],
				'range' => [
					'%' => [
						'min' => 50,
					],
				],
				'selectors' => [
					'#elementor-lightbox-slideshow-{{ID}} .elementor-video-container' => 'width: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();

		$this->add_injections();

		$this->update_controls();
	}

	protected function add_repeater_controls( Repeater $repeater ) {
		$repeater->add_control(
			'type',
			[
				'type' => Controls_Manager::CHOOSE,
				'label' => esc_html__( 'Type', 'elementor-pro' ),
				'default' => 'image',
				'options' => [
					'image' => [
						'title' => esc_html__( 'Image', 'elementor-pro' ),
						'icon' => 'eicon-image-bold',
					],
					'video' => [
						'title' => esc_html__( 'Video', 'elementor-pro' ),
						'icon' => 'eicon-video-camera',
					],
				],
				'toggle' => false,
			]
		);

		$repeater->add_control(
			'image',
			[
				'label' => esc_html__( 'Image', 'elementor-pro' ),
				'type' => Controls_Manager::MEDIA,
				'dynamic' => [
					'active' => true,
				],
			]
		);

		$repeater->add_control(
			'image_link_to_type',
			[
				'label' => esc_html__( 'Link', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'' => esc_html__( 'None', 'elementor-pro' ),
					'file' => esc_html__( 'Media File', 'elementor-pro' ),
					'custom' => esc_html__( 'Custom URL', 'elementor-pro' ),
				],
				'condition' => [
					'type' => 'image',
				],
			]
		);

		$repeater->add_control(
			'image_link_to',
			[
				'type' => Controls_Manager::URL,
				'dynamic' => [
					'active' => true,
				],
				'placeholder' => esc_html__( 'https://your-link.com', 'elementor-pro' ),
				'show_external' => 'true',
				'condition' => [
					'type' => 'image',
					'image_link_to_type' => 'custom',
				],
				'separator' => 'none',
				'show_label' => false,
			]
		);

		$repeater->add_control(
			'video',
			[
				'label' => esc_html__( 'Video Link', 'elementor-pro' ),
				'type' => Controls_Manager::URL,
				'dynamic' => [
					'active' => true,
				],
				'placeholder' => esc_html__( 'Enter your video link', 'elementor-pro' ),
				'description' => esc_html__( 'YouTube or Vimeo link', 'elementor-pro' ),
				'options' => false,
				'condition' => [
					'type' => 'video',
				],
			]
		);
	}

	protected function get_default_slides_count() {
		return 5;
	}

	protected function get_repeater_defaults() {
		$placeholder_image_src = Utils::get_placeholder_image_src();

		return array_fill( 0, $this->get_default_slides_count(), [
			'image' => [
				'url' => $placeholder_image_src,
			],
		] );
	}

	protected function get_image_caption( $slide ) {
		$caption_type = $this->get_settings( 'caption' );

		if ( empty( $caption_type ) ) {
			return '';
		}

		$attachment_post = get_post( $slide['image']['id'] );

		if ( 'caption' === $caption_type ) {
			return $attachment_post->post_excerpt;
		}

		if ( 'title' === $caption_type ) {
			return $attachment_post->post_title;
		}

		return $attachment_post->post_content;
	}

	protected function get_image_link_to( $slide ) {
		if ( ! empty( $slide['video']['url'] ) ) {
			return $slide['image']['url'] ? $slide['image']['url'] : '#';
		}

		if ( ! $slide['image_link_to_type'] ) {
			return '';
		}

		if ( 'custom' === $slide['image_link_to_type'] ) {
			return $slide['image_link_to']['url'];
		}

		return $slide['image']['url'];
	}

	protected function print_slider( array $settings = null ) {
		$this->lightbox_slide_index = 0;

		parent::print_slider( $settings );
	}

	protected function print_slide( array $slide, array $settings, $element_key ) {
		if ( ! empty( $settings['thumbs_slider'] ) ) {
			$settings['video_play_icon'] = false;
		}

		$this->add_render_attribute( $element_key . '-image', [
			'class' => 'elementor-carousel-image',
			'role' => 'img',
			'aria-label' => Control_Media::get_image_alt( $slide['image'] ),
		] );

		$img_src = $this->get_slide_image_url( $slide, $settings );

		if ( 'yes' === $settings['lazyload'] ) {
			$img_attribute['class'] = 'swiper-lazy';
			$img_attribute['data-background'] = $img_src;
		} else {
			$img_attribute['style'] = "background-image: url('" . $img_src . "')";
		}

		$this->add_render_attribute( $element_key . '-image', $img_attribute );

		$image_link_to = $this->get_image_link_to( $slide );

		if ( $image_link_to && empty( $settings['thumbs_slider'] ) ) {
			if ( 'custom' === $slide['image_link_to_type'] ) {
				$this->add_link_attributes( $element_key . '_link', $slide['image_link_to'] );
			} else {
				$this->add_render_attribute( $element_key . '_link', 'href', $image_link_to );

				$this->add_lightbox_data_attributes( $element_key . '_link', $slide['image']['id'], 'yes', $this->get_id() );

				if ( Plugin::elementor()->editor->is_edit_mode() ) {
					$this->add_render_attribute( $element_key . '_link', 'class', 'elementor-clickable' );
				}

				$this->lightbox_slide_index++;
			}

			if ( 'video' === $slide['type'] && $slide['video']['url'] ) {
				$embed_url_params = [
					'autoplay' => 1,
					'rel' => 0,
					'controls' => 0,
				];

				$this->add_render_attribute( $element_key . '_link', 'data-elementor-lightbox-video', Embed::get_embed_url( $slide['video']['url'], $embed_url_params ) );
			}

			// PHPCS - the method get_render_attribute_string is safe.
			echo '<a ' . $this->get_render_attribute_string( $element_key . '_link' ) . '>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		}

		$this->print_slide_image( $slide, $element_key, $settings );

		if ( $image_link_to ) {
			echo '</a>';
		}
	}

	protected function print_slide_image( array $slide, $element_key, array $settings ) {
		?>
		<div <?php $this->print_render_attribute_string( $element_key . '-image' ); ?>>

			<?php if ( 'yes' === $settings['lazyload'] ) : ?>
				<div class="swiper-lazy-preloader"></div>
			<?php endif; ?>

			<?php if ( 'video' === $slide['type'] && $settings['video_play_icon'] ) : ?>
				<div class="elementor-custom-embed-play">
					<?php
						Icons_Manager::render_icon( [
							'library' => 'eicons',
							'value' => 'eicon-play',
						], [ 'aria-hidden' => 'true' ] );
					?>
					<span class="elementor-screen-only"><?php echo esc_html__( 'Play', 'elementor-pro' ); ?></span>
				</div>
			<?php endif; ?>
		</div>
		<?php if ( $settings['overlay'] ) : ?>
			<div <?php $this->print_render_attribute_string( 'image-overlay' ); ?>>
				<?php
				if ( 'text' === $settings['overlay'] ) {
					echo wp_kses_post( $this->get_image_caption( $slide ) );
				} else {
					$this->render_overlay_icon( $settings['icon'] );
				}
				?>
			</div>
			<?php
		endif;
	}

	private function add_injections() {
		$this->start_injection( [
			'type' => 'section',
			'at' => 'start',
			'of' => 'section_slides',
		] );

		$this->add_control(
			'skin',
			[
				'label' => esc_html__( 'Skin', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'carousel',
				'options' => [
					'carousel' => esc_html__( 'Carousel', 'elementor-pro' ),
					'slideshow' => esc_html__( 'Slideshow', 'elementor-pro' ),
					'coverflow' => esc_html__( 'Coverflow', 'elementor-pro' ),
				],
				'prefix_class' => 'elementor-skin-',
				'render_type' => 'template',
				'frontend_available' => true,
			]
		);

		$this->end_injection();

		$this->start_injection( [
			'of' => 'image_size_custom_dimension',
		] );

		$this->add_control(
			'image_fit',
			[
				'label' => esc_html__( 'Image Fit', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => '',
				'options' => [
					'' => esc_html__( 'Cover', 'elementor-pro' ),
					'contain' => esc_html__( 'Contain', 'elementor-pro' ),
					'auto' => esc_html__( 'Auto', 'elementor-pro' ),
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-main-swiper .elementor-carousel-image' => 'background-size: {{VALUE}}',
				],
			]
		);

		$this->end_injection();

		$this->start_injection( [
			'of' => 'pagination_color',
		] );

		$this->add_control(
			'play_icon_title',
			[
				'label' => esc_html__( 'Play Icon', 'elementor-pro' ),
				'type' => Controls_Manager::HEADING,
			]
		);

		$this->add_control(
			'play_icon_color',
			[
				'label' => esc_html__( 'Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-custom-embed-play i' => 'color: {{VALUE}}',
					'{{WRAPPER}} .elementor-custom-embed-play svg' => 'fill: {{VALUE}}',
				],
			]
		);

		$this->add_responsive_control(
			'play_icon_size',
			[
				'label' => esc_html__( 'Size', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem', 'custom' ],
				'range' => [
					'px' => [
						'min' => 20,
						'max' => 150,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-custom-embed-play i' => 'font-size: {{SIZE}}{{UNIT}}',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Text_Shadow::get_type(),
			[
				'name' => 'play_icon_text_shadow',
				'selector' => '{{WRAPPER}} .elementor-custom-embed-play i',
				'fields_options' => [
					'text_shadow_type' => [
						'label' => _x( 'Shadow', 'Text Shadow Control', 'elementor-pro' ),
					],
				],
			]
		);

		$this->end_injection();

		$this->start_injection( [
			'of' => 'pause_on_interaction',
		] );

		$this->add_control(
			'overlay',
			[
				'label' => esc_html__( 'Overlay', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => '',
				'options' => [
					'' => esc_html__( 'None', 'elementor-pro' ),
					'text' => esc_html__( 'Text', 'elementor-pro' ),
					'icon' => esc_html__( 'Icon', 'elementor-pro' ),
				],
				'condition' => [
					'skin!' => 'slideshow',
				],
				'separator' => 'before',
			]
		);

		$this->add_control(
			'caption',
			[
				'label' => esc_html__( 'Caption', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'title',
				'options' => [
					'title' => esc_html__( 'Title', 'elementor-pro' ),
					'caption' => esc_html__( 'Caption', 'elementor-pro' ),
					'description' => esc_html__( 'Description', 'elementor-pro' ),
				],
				'condition' => [
					'skin!' => 'slideshow',
					'overlay' => 'text',
				],
			]
		);

		$this->add_control(
			'icon',
			[
				'label' => esc_html__( 'Icon', 'elementor-pro' ),
				'type' => Controls_Manager::CHOOSE,
				'default' => 'search-plus',
				'options' => [
					'search-plus' => [
						'icon' => 'eicon-search-bold',
					],
					'plus-circle' => [
						'icon' => 'eicon-plus-circle',
					],
					'eye' => [
						'icon' => 'eicon-preview-medium',
					],
					'link' => [
						'icon' => 'eicon-link',
					],
				],
				'condition' => [
					'skin!' => 'slideshow',
					'overlay' => 'icon',
				],
			]
		);

		$this->add_control(
			'overlay_animation',
			[
				'label' => esc_html__( 'Animation', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'fade',
				'options' => [
					'fade' => 'Fade',
					'slide-up' => 'Slide Up',
					'slide-down' => 'Slide Down',
					'slide-right' => 'Slide Right',
					'slide-left' => 'Slide Left',
					'zoom-in' => 'Zoom In',
				],
				'condition' => [
					'skin!' => 'slideshow',
					'overlay!' => '',
				],
			]
		);

		$this->end_injection();

		$this->start_injection( [
			'type' => 'section',
			'of' => 'section_navigation',
		] );

		$this->start_controls_section(
			'section_overlay',
			[
				'label' => esc_html__( 'Overlay', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
				'condition' => [
					'skin!' => 'slideshow',
					'overlay!' => '',
				],
			]
		);

		$this->add_control(
			'overlay_background_color',
			[
				'label' => esc_html__( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-carousel-image-overlay' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'overlay_color',
			[
				'label' => esc_html__( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-carousel-image-overlay' => '--e-carousel-image-overlay-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'caption_typography',
				'global' => [
					'default' => Global_Typography::TYPOGRAPHY_ACCENT,
				],
				'selector' => '{{WRAPPER}} .elementor-carousel-image-overlay',
				'condition' => [
					'overlay' => 'text',
				],
			]
		);

		$this->add_control(
			'icon_size',
			[
				'label' => esc_html__( 'Icon Size', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'selectors' => [
					'{{WRAPPER}} .elementor-carousel-image-overlay' => '--e-carousel-image-overlay-icon-size: {{SIZE}}{{UNIT}};',
				],
				'condition' => [
					'overlay' => 'icon',
				],
			]
		);

		$this->end_controls_section();

		$this->end_injection();

		// Slideshow

		$this->start_injection( [
			'of' => 'effect',
		] );

		$this->add_responsive_control(
			'slideshow_height',
			[
				'type' => Controls_Manager::SLIDER,
				'label' => esc_html__( 'Height', 'elementor-pro' ),
				'size_units' => [ 'px', 'em', 'rem', 'vh', 'custom' ],
				'range' => [
					'px' => [
						'min' => 20,
						'max' => 1000,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-main-swiper' => 'height: {{SIZE}}{{UNIT}};',
				],
				'condition' => [
					'skin' => 'slideshow',
				],
			]
		);

		$this->add_control(
			'thumbs_title',
			[
				'label' => esc_html__( 'Thumbnails', 'elementor-pro' ),
				'type' => Controls_Manager::HEADING,
				'condition' => [
					'skin' => 'slideshow',
				],
			]
		);

		$this->end_injection();

		$this->start_injection( [
			'of' => 'slides_per_view',
		] );

		$this->add_control(
			'thumbs_ratio',
			[
				'label' => esc_html__( 'Ratio', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'options' => [
					'169' => '16:9',
					'219' => '21:9',
					'43' => '4:3',
					'11' => '1:1',
				],
				'selectors_dictionary' => [
					'169' => '16 / 9',
					'219' => '21 / 9',
					'43' => '4 / 3',
					'11' => '1 / 1',
				],
				'default' => '219',
				'condition' => [
					'skin' => 'slideshow',
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-thumbnails-swiper .elementor-carousel-image' => 'aspect-ratio: {{VALUE}}',
				],
			]
		);

		$this->add_control(
			'centered_slides',
			[
				'label' => esc_html__( 'Centered Slides', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'condition' => [
					'skin' => 'slideshow',
				],
				'frontend_available' => true,
			]
		);

		$this->end_injection();

		$this->start_injection( [
			'of' => 'slides_per_view',
		] );

		$slides_per_view = range( 1, 10 );

		$slides_per_view = array_combine( $slides_per_view, $slides_per_view );

		$this->add_responsive_control(
			'slideshow_slides_per_view',
			[
				'type' => Controls_Manager::SELECT,
				'label' => esc_html__( 'Slides Per View', 'elementor-pro' ),
				'options' => [ '' => esc_html__( 'Default', 'elementor-pro' ) ] + $slides_per_view,
				'condition' => [
					'skin' => 'slideshow',
				],
				'frontend_available' => true,
			]
		);

		$this->end_injection();
	}

	private function update_controls() {
		$carousel_controls = [
			'slides_to_scroll',
			'pagination',
			'heading_pagination',
			'pagination_size',
			'pagination_position',
			'pagination_color',
		];

		$carousel_responsive_controls = [
			'width',
			'height',
			'slides_per_view',
		];

		foreach ( $carousel_controls as $control_id ) {
			$this->update_control(
				$control_id,
				[
					'condition' => [
						'skin!' => 'slideshow',
					],
				],
				[ 'recursive' => true ]
			);
		}

		foreach ( $carousel_responsive_controls as $control_id ) {
			$this->update_responsive_control(
				$control_id,
				[
					'condition' => [
						'skin!' => 'slideshow',
					],
				],
				[ 'recursive' => true ]
			);
		}

		$this->update_responsive_control(
			'space_between',
			[
				'selectors' => [
					'{{WRAPPER}}.elementor-skin-slideshow .elementor-main-swiper' => 'margin-bottom: {{SIZE}}{{UNIT}}',
				],
				'render_type' => 'ui',
			]
		);

		$this->update_control(
			'effect',
			[
				'condition' => [
					'skin!' => 'coverflow',
				],
			]
		);
	}

	public function get_group_name() {
		return 'carousel';
	}

	private function render_overlay_icon( $icon_name ) {
		$icon_value = 'fas fa-' . $icon_name;

		$icon = [
			'library' => 'fa-solid',
			'value' => $icon_value,
		];

		Icons_Manager::render_icon( $icon );
	}
}
