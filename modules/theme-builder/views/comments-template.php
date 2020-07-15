<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/** @var \ElementorPro\Modules\ThemeBuilder\Skins\Post_Comments_Skin_Classic $skin */
$skin = $GLOBALS['post_comment_skin_classic'];

if ( post_password_required() ) { ?>
	<p class="nocomments"><?php esc_html_e( 'This post is password protected. Enter the password to view comments.', 'elementor-pro' ); ?></p>
	<?php
	return;
}
?>

<?php

$comment_count = get_comment_count();

if ( $comment_count ) :
	?>
	<h3 id="comments">
		<?php echo esc_html( $skin->get_instance_value( 'title' ) ); ?>
	</h3>

	<div class="navigation">
		<div class="alignleft"><?php previous_comments_link(); ?></div>
		<div class="alignright"><?php next_comments_link(); ?></div>
	</div>

	<ol class="commentlist">
		<?php
		wp_list_comments( [
			'callback' => [ $skin, 'comment_callback' ],
		] );
		?>
	</ol>

	<div class="navigation">
		<div class="alignleft"><?php previous_comments_link(); ?></div>
		<div class="alignright"><?php next_comments_link(); ?></div>
	</div>
<?php else : ?>

	<?php if ( comments_open() ) : ?>
		<p class="nocomments"><?php echo esc_html( $skin->get_instance_value( 'title' ) ); ?></p>

	<?php else : ?>
		<!-- If comments are closed. -->
		<p class="nocomments"><?php esc_html_e( 'Comments are closed.', 'elementor-pro' ); ?></p>
		<?php
	endif;
endif;
