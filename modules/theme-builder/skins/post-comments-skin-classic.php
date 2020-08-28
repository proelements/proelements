<?php
namespace ElementorPro\Modules\ThemeBuilder\Skins;

use Elementor\Skin_Base;
use Elementor\Controls_Manager;
use Elementor\Group_Control_Border;
use Elementor\Group_Control_Typography;
use Elementor\Scheme_Color;
use Elementor\Scheme_Typography;
use ElementorPro\Modules\ThemeBuilder\Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Post_Comments_Skin_Classic extends Skin_Base {

	public function get_id() {
		return 'skin-classic';
	}

	public function get_title() {
		return 'Skin Classic';
	}

	protected function _register_controls_actions() {
		add_action( 'elementor/element/post-comments/section_content/after_section_end', [ $this, 'register_controls' ] );
	}

	public function register_controls() {
		$this->start_controls_section(
			'section_title',
			[
				'label' => __( 'Title', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'title',
			[
				'label' => __( 'Title', 'elementor-pro' ),
				'default' => '[field id="comment-count"]',
				'label_block' => true,
				'dynamic' => [
					'types' => [
						'text',
					],
					'apply_on' => 'value',
					'allow_free_text' => true,
					'allow_multiple' => true,
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_content',
			[
				'label' => __( 'Content', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'show_gravatar',
			[
				'label' => __( 'Gravatar', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'default' => 'yes',
				'label_off' => __( 'Hide', 'elementor-pro' ),
				'label_on' => __( 'Show', 'elementor-pro' ),
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_style',
			[
				'label' => __( 'Comments', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'row_gap',
			[
				'label' => __( 'Rows Gap', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'default' => [
					'size' => '10',
				],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 60,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-comment' => 'margin-bottom: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'row_background_color',
			[
				'label' => __( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'default' => '#ffffff',
				'selectors' => [
					'{{WRAPPER}} .elementor-comment' => 'background-color: {{VALUE}};',
				],
				'separator' => 'before',
			]
		);

		$this->add_control(
			'row_border_color',
			[
				'label' => __( 'Border Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-comment' => 'border-color: {{VALUE}};',
				],
				'separator' => 'before',
			]
		);

		$this->add_control(
			'row_border_width',
			[
				'label' => __( 'Border Width', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'placeholder' => '1',
				'size_units' => [ 'px' ],
				'selectors' => [
					'{{WRAPPER}} .elementor-comment' => 'border-width: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'row_border_radius',
			[
				'label' => __( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%' ],
				'selectors' => [
					'{{WRAPPER}} .elementor-comment' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_meta_style',
			[
				'label' => __( 'Meta', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'meta_spacing',
			[
				'label' => __( 'Spacing', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'default' => [
					'size' => '0',
				],
				'range' => [
					'px' => [
						'min' => 0,
						'max' => 60,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-comment .comment-meta' => 'padding-bottom: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'meta_color',
			[
				'label' => __( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-comment .comment-meta' => 'color: {{VALUE}};',
				],
				'global' => [
					'default' => Global_Colors::COLOR_TEXT,
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'meta_typography',
				'selector' => '{{WRAPPER}} .elementor-comment .comment-meta',
				'global' => [
					'default' => Global_Typography::TYPOGRAPHY_TEXT,
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_content_style',
			[
				'label' => __( 'Content', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'content_text_color',
			[
				'label' => __( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-comment .comment-content' => 'color: {{VALUE}};',
				],
				'global' => [
					'default' => Global_Colors::COLOR_TEXT,
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'content__typography',
				'selector' => '{{WRAPPER}} .elementor-comment .comment-content',
				'global' => [
					'default' => Global_Typography::TYPOGRAPHY_TEXT,
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_reply_button_style',
			[
				'label' => __( 'Reply Button', 'elementor-pro' ),
				'tab' => Controls_Manager::TAB_STYLE,
			]
		);

		$this->start_controls_tabs( 'tabs_reply_button_style' );

		$this->start_controls_tab(
			'tab_reply_button_normal',
			[
				'label' => __( 'Normal', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'reply_button_text_color',
			[
				'label' => __( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'default' => '',
				'selectors' => [
					'{{WRAPPER}} .elementor-comment .comment-reply-link' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name' => 'reply_button_typography',
				'label' => __( 'Typography', 'elementor-pro' ),
				'global' => [
					'default' => Global_Typography::TYPOGRAPHY_ACCENT,
				],
				'selector' => '{{WRAPPER}} .elementor-comment .comment-reply-link',
			]
		);

		$this->add_control(
			'reply_button_background_color',
			[
				'label' => __( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'global' => [
					'default' => Global_Colors::COLOR_ACCENT,
				],
				'selectors' => [
					'{{WRAPPER}} .elementor-comment .comment-reply-link' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Border::get_type(), [
				'name' => 'reply_button_border',
				'label' => __( 'Border', 'elementor-pro' ),
				'placeholder' => '1px',
				'default' => '1px',
				'selector' => '{{WRAPPER}} .elementor-comment .comment-reply-link',
			]
		);

		$this->add_control(
			'reply_button_border_radius',
			[
				'label' => __( 'Border Radius', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%' ],
				'selectors' => [
					'{{WRAPPER}} .elementor-comment .comment-reply-link' => 'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->add_control(
			'reply_button_text_padding',
			[
				'label' => __( 'Text Padding', 'elementor-pro' ),
				'type' => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', 'em', '%' ],
				'selectors' => [
					'{{WRAPPER}} .elementor-comment .comment-reply-link' => 'padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_tab();

		$this->start_controls_tab(
			'tab_reply_button_hover',
			[
				'label' => __( 'Hover', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'button_hover_color',
			[
				'label' => __( 'Text Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-comment .comment-reply-link:hover' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'reply_button_background_hover_color',
			[
				'label' => __( 'Background Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-comment .comment-reply-link:hover' => 'background-color: {{VALUE}};',
				],
			]
		);

		$this->add_control(
			'reply_button_hover_border_color',
			[
				'label' => __( 'Border Color', 'elementor-pro' ),
				'type' => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .elementor-comment .comment-reply-link:hover' => 'border-color: {{VALUE}};',
				],
				'condition' => [
					$this->get_control_id( 'reply_button_border_border!' ) => '',
				],
			]
		);

		$this->add_control(
			'reply_button_hover_animation',
			[
				'label' => __( 'Animation', 'elementor-pro' ),
				'type' => Controls_Manager::HOVER_ANIMATION,
			]
		);

		$this->end_controls_tab();

		$this->end_controls_tabs();

		$this->end_controls_section();
	}

	public function render() {

		Module::instance()->get_preview_manager()->switch_to_preview_query();

		// Hack to remove template comment form
		$comments_template_callback = function() {
			return __DIR__ . '/../views/comments-template.php';
		};

		add_filter( 'comments_template', $comments_template_callback );

		// The `comments_template` doesn't has an API to pass current widget instance, so make it global
		$GLOBALS['post_comment_skin_classic'] = $this;

		comments_template();

		remove_filter( 'comments_template', $comments_template_callback );

		unset( $GLOBALS['post_comment_skin_classic'] );

		Module::instance()->get_preview_manager()->restore_current_query();
	}

	public function comment_callback( $comment, $args, $depth ) {
		$tag = ( 'div' === $args['style'] ) ? 'div' : 'li';
		$class = 'elementor-comment';
		if ( ! empty( $args['has_children'] ) ) {
			$class .= ' parent';
		}
		?>
		<<?php echo $tag; ?> id="comment-<?php comment_ID(); ?>" <?php comment_class( $class, $comment ); ?>>
		<article id="div-comment-<?php comment_ID(); ?>" class="comment-body">
			<footer class="comment-meta">
				<div class="comment-author vcard">
					<?php
					if ( 0 < $args['avatar_size'] ) {
						echo get_avatar( $comment, $args['avatar_size'] );
					}
					?>
					<?php
					/* translators: %s: Comment author link. */
					printf( __( '%s <span class="says">says:</span>', 'elementor-pro' ),
						sprintf( '<b class="fn">%s</b>', get_comment_author_link( $comment ) )
					);
					?>
				</div><!-- .comment-author -->

				<div class="comment-metadata">
					<a href="<?php echo esc_url( get_comment_link( $comment, $args ) ); ?>">
						<time datetime="<?php comment_time( 'c' ); ?>">
							<?php
							/* translators: 1: Comment date, 2: Comment time. */
							printf( __( '%1$s at %2$s', 'elementor-pro' ), get_comment_date( '', $comment ), get_comment_time() );
							?>
						</time>
					</a>
					<?php edit_comment_link( __( 'Edit', 'elementor-pro' ), '<span class="edit-link">', '</span>' ); ?>
				</div><!-- .comment-metadata -->

				<?php if ( '0' == $comment->comment_approved ) : ?>
					<p class="comment-awaiting-moderation"><?php esc_html_e( 'Your comment is awaiting moderation.', 'elementor-pro' ); ?></p>
				<?php endif; ?>
			</footer><!-- .comment-meta -->

			<div class="comment-content">
				<?php comment_text(); ?>
			</div><!-- .comment-content -->

			<?php
			comment_reply_link( array_merge( $args, [
				'add_below' => 'div-comment',
				'depth' => $depth,
				'max_depth' => $args['max_depth'],
				'before' => '<div class="reply">',
				'after' => '</div>',
			] ) );
			?>
		</article><!-- .comment-body -->
		<?php
	}
}
