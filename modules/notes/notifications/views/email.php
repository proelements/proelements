<?php
/**
 * @var string $actor
 * @var string $heading
 * @var string $page
 * @var string $site_name
 * @var string $note_content
 * @var string $note_url
 * @var string $user_email
 */
?>

<div style="background-color: #E5E5E5; text-align: center; padding: 60px 0; direction: <?php echo is_rtl() ? 'rtl' : 'ltr'; ?>; font-family: 'Roboto', Arial, Helvetica, sans-serif;">
	<div style="
		box-sizing: border-box;
		width: 90%;
		max-width: 640px;
		padding: 60px;
		margin: auto;
		background-color: #FFF;
	">
		<h1 style="padding: 0; margin: 0 0 40px 0; font-weight: normal; font-size: 25px; line-height: 1.35;">
			<?php

			echo sprintf(
				esc_html( $heading ),
				sprintf(
					'<strong>%s</strong><br/>',
					esc_html( $actor )
				),
				sprintf(
					'"<strong>%s</strong>"<br/>',
					esc_html( $page )
				),
				esc_html( $site_name )
			);

			// The above resolves to "UserName mentioned you on "*PageName*" at SiteName"
			?>
		</h1>

		<p style=" padding: 0; margin: 0 0 60px 0; font-size: 20px; line-height: 1.35;">
			"<?php echo nl2br( esc_html( $note_content ) ); ?>"
		</p>

		<a
			href="<?php echo esc_url( $note_url ); ?>"
			target="_blank"
			rel="noopener noreferrer"
			style="
				display: inline-block;
				font-weight: bold;
				font-size: 18px;
				line-height: 1.35;
				border-radius: 3px;
				text-decoration: none;
				padding: 12px 20px;
				color: #FFF;
				background-color: #58D0F5;
		">
			<?php echo esc_html__( 'Take me there', 'elementor-pro' ); ?>
		</a>
	</div>

	<div style="
		box-sizing: border-box;
		width: 90%;
		max-width: 640px;
		padding: 60px;
		margin: 1px auto 0 auto;
		background-color: #FFF;
	">
		<p style="font-size: 12px; padding: 0; margin: 0 0 40px 0; line-height: 1.5;">
			<?php
				echo esc_html__( 'Don\'t want to receive these notifications?', 'elementor-pro' );
			?>

			<br />

			<?php
			echo sprintf(
				/* translators: 1: Link opening tag, 2: Link closing tag. */
				esc_html__( 'Contact the site admin or turn off notifications for Notes in your %1$suser profile%2$s.', 'elementor-pro' ),
				sprintf( '<a href="%1$s" rel="noopener noreferrer" style="text-decoration: underline; color: #000;">', esc_url( admin_url( 'profile.php' ) ) ),
				'</a>'
			);
			?>
		</p>

		<p style="font-size: 8px; margin-bottom: 12px;">
			<?php
				echo esc_html__( 'Powered by', 'elementor-pro' );
			?>
		</p>

		<a
			href="https://elementor.com/"
			target="_blank"
			rel="noreferrer"
		>
			<img
				src="<?php echo esc_url( ELEMENTOR_PRO_MODULES_URL . 'notes/assets/images/elementor-logo-orange.png' ); ?>"
				alt="<?php echo esc_attr__( 'Elementor Logo', 'elementor-pro' ); ?>"
				style="width: 114px;"
			/>
		</a>
	</div>
</div>
