<?php
namespace ElementorPro\Modules\Woocommerce\Widgets;

use ElementorPro\Plugin;
use ElementorPro\Modules\Woocommerce\Module;
use Elementor\Controls_Manager;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Notices extends Base_Widget {

	public function get_name() {
		return 'woocommerce-notices';
	}

	public function get_title() {
		return esc_html__( 'WooCommerce Notices', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-woocommerce-notices';
	}

	public function get_keywords() {
		return [ 'woocommerce', 'notices', 'notifications' ];
	}

	public function get_categories() {
		return [ 'woocommerce-elements' ];
	}

	public function get_help_url() {
		return 'https://go.elementor.com/widget-woocommerce-notices-location';
	}

	protected function register_controls() {

		$this->start_controls_section(
			'section',
			[
				'label' => esc_html__( 'WooCommerce Notices', 'elementor-pro' ),
			]
		);

		$this->add_control(
			'where_to_appear_notice',
			[
				'type' => Controls_Manager::RAW_HTML,
				'raw' => esc_html__( 'Drop this widget anywhere on the page or template where you want notices to appear.', 'elementor-pro' ),
				'content_classes' => 'elementor-descriptor',
			]
		);

		$this->add_control(
			'site_settings_notice',
			[
				'type' => Controls_Manager::RAW_HTML,
				'raw' => sprintf(
					/* translators: 1: Link opening tag, 2: Link closing tag. */
					esc_html__( 'To change the design of your notices, go to your %1$sWooCommerce Settings%2$s', 'elementor-pro' ),
					'<a href="#" onclick="elementorPro.modules.woocommerce.openSiteSettingsTab( \'settings-woocommerce\', \'section_woocommerce_notices\' );">',
					'</a>'
				),
				'content_classes' => 'elementor-descriptor elementor-descriptor-subtle',
			]
		);

		$this->add_control(
			'one_per_page_notice',
			[
				'type' => Controls_Manager::RAW_HTML,
				'raw' => sprintf(
					/* translators: 1: Bold text opening tag, 2: Bold text closing tag. */
					esc_html__( '%1$sNote:%2$s You can only add the Notices widget once per page.', 'elementor-pro' ),
					'<strong>',
					'</strong>'
				),
				'content_classes' => 'elementor-panel-alert elementor-panel-alert-info',
			]
		);

		$this->end_controls_section();
	}

	private function hide_woocommerce_notices() {
		?>
		<style>
			.woocommerce-notices-wrapper,
			.woocommerce-message,
			.woocommerce-error,
			.woocommerce-info {
				display: none;
			}
		</style>
		<?php
	}

	protected function render() {
		if ( Plugin::elementor()->editor->is_edit_mode() || Plugin::elementor()->preview->is_preview_mode() ) {
			?>
			<div class="woocommerce-info e-notices-demo-notice">
				<?php echo esc_html__( 'This is an example of a WooCommerce notice. (You won\'t see this while previewing your site.)', 'elementor-pro' ); ?>
			</div>
			<?php
		} else {
			$this->hide_woocommerce_notices();
			?>
			<div class="e-woocommerce-notices-wrapper e-woocommerce-notices-wrapper-loading">
				<?php woocommerce_output_all_notices(); ?>
			</div>
			<?php
		}
	}

	public function get_group_name() {
		return 'woocommerce';
	}
}
