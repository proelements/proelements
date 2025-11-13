<?php
namespace ElementorPro\Modules\Tiers;

use Elementor\Utils;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Module extends \Elementor\Core\Base\Module {

	public function get_name() {
		return 'tiers';
	}

	/**
	 * @param array $texts
	 * @return string
	 */
	public static function get_promotion_template( $texts, $is_marionette_template = false ) {
		ob_start();

		if ( $is_marionette_template ) {
			?>
				<script type="text/template" id="tmpl-elementor-promotion">
			<?php
		}

		?>
		<div class="elementor-nerd-box">
			<img class="elementor-nerd-box-icon" src="<?php echo esc_url( ELEMENTOR_ASSETS_URL . 'images/go-pro.svg' ); ?>" loading="lazy" />
			<div class="elementor-nerd-box-title"><?php Utils::print_unescaped_internal_string( $texts['title'] ); ?></div>
			<?php foreach ( $texts['messages'] as $message ) : ?>
				<div class="elementor-nerd-box-message"><?php Utils::print_unescaped_internal_string( $message ); ?></div>
			<?php endforeach; ?>

			<?php if ( ! empty( $texts['link'] ) ) : ?>
				<a class="elementor-button go-pro" href="<?php echo esc_url( ( $texts['link'] ) ); ?>" target="_blank">
					<?php echo esc_html__( 'Upgrade Now', 'elementor-pro' ); ?>
				</a>
			<?php endif; ?>
		</div>

		<?php
		if ( $is_marionette_template ) {
			?>
				</script>
			<?php
		}

		return ob_get_clean();
	}
}
