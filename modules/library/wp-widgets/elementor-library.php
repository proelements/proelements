<?php
namespace ElementorPro\Modules\Library\WP_Widgets;

use Elementor\Core\Base\Document;
use ElementorPro\Modules\Library\Module;
use ElementorPro\Plugin;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Elementor_Library extends \WP_Widget {

	private $sidebar_id;

	public function __construct() {
		parent::__construct(
			'elementor-library',
			esc_html__( 'Elementor Library', 'elementor-pro' ),
			[
				'description' => esc_html__( 'Embed your saved elements.', 'elementor-pro' ),
			]
		);
	}

	/**
	 * @param array $args
	 * @param array $instance
	 */
	public function widget( $args, $instance ) {
		// PHPCS - Theme arg
		echo $args['before_widget']; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped

		if ( ! empty( $instance['title'] ) ) {
			/** This filter is documented in wp-includes/widgets/class-wp-widget-pages.php */
			$title = apply_filters( 'widget_title', $instance['title'], $instance, $this->id_base );
			// PHPCS - Theme arg
			echo $args['before_title'] . esc_html( $title ) . $args['after_title']; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		}

		if ( ! empty( $instance['template_id'] ) && 'publish' === get_post_status( $instance['template_id'] ) ) {
			$this->sidebar_id = $args['id'];

			add_filter( 'elementor/frontend/builder_content_data', [ $this, 'filter_content_data' ] );

			// PHPCS - the main content
			echo Plugin::elementor()->frontend->get_builder_content_for_display( $instance['template_id'] ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped

			remove_filter( 'elementor/frontend/builder_content_data', [ $this, 'filter_content_data' ] );

			unset( $this->sidebar_id );
		}

		// PHPCS - Theme arg
		echo $args['after_widget']; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}

	/**
	 * Avoid nesting a sidebar within a template that will appear in the sidebar itself
	 *
	 * @param array $data
	 *
	 * @return mixed
	 */
	public function filter_content_data( $data ) {
		if ( ! empty( $data ) ) {
			$data = Plugin::elementor()->db->iterate_data( $data, function( $element ) {
				if ( 'widget' === $element['elType'] && 'sidebar' === $element['widgetType'] && $this->sidebar_id === $element['settings']['sidebar'] ) {
					$element['settings']['sidebar'] = null;
				}

				return $element;
			} );
		}

		return $data;
	}

	/**
	 * @param array $instance
	 *
	 * @return void
	 */
	public function form( $instance ) {
		$default = [
			'title' => '',
			'template_id' => '',
		];

		$instance = array_merge( $default, $instance );

		$templates = Module::get_templates();

		if ( ! $templates ) {
			// PHPCS - the method empty_templates_message is safe.
			echo Module::empty_templates_message(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped

			return;
		}
		?>
		<p>
			<label for="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>"><?php echo esc_attr__( 'Title', 'elementor-pro' ); ?>:</label>
			<input class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'title' ) ); ?>" type="text" value="<?php echo esc_attr( $instance['title'] ); ?>">
		</p>

		<p>
			<label for="<?php echo esc_attr( $this->get_field_id( 'template_id' ) ); ?>"><?php echo esc_attr__( 'Choose Template', 'elementor-pro' ); ?>:</label>
			<select class="widefat elementor-widget-template-select" id="<?php echo esc_attr( $this->get_field_id( 'template_id' ) ); ?>" name="<?php echo esc_attr( $this->get_field_name( 'template_id' ) ); ?>">
				<option value="">— <?php echo esc_html__( 'Select', 'elementor-pro' ); ?> —</option>
				<?php
				foreach ( $templates as $template ) :
					?>
					<option
						value="<?php echo esc_html( $template['template_id'] ); ?>"
						<?php selected( $template['template_id'], $instance['template_id'] ); ?>
						data-type="<?php echo esc_attr( $template['type'] ); ?>"
					>
						<?php echo esc_html( $template['title'] ); ?> (<?php echo esc_html( $template['type'] ); ?>)
					</option>
				<?php endforeach; ?>
			</select>
			<?php
			$style = ' style="display:none"';

			$template_type = get_post_meta( $instance['template_id'], Document::TYPE_META_KEY, true );

			// 'widget' is editable only from an Elementor page
			if ( 'page' === $template_type ) {
				$style = '';
			}
			?>
			<a
				target="_blank"
				class="elementor-edit-template"<?php echo $style; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
				href="<?php echo esc_url( add_query_arg( 'elementor', '', get_permalink( $instance['template_id'] ) ) ); ?>"
			>
				<i class="eicon-pencil" aria-hidden="true"></i>
				<?php echo esc_html__( 'Edit Template', 'elementor-pro' ); ?>
			</a>
		</p>
		<?php
	}

	/**
	 *
	 * @param array $new_instance
	 * @param array $old_instance
	 *
	 * @return array
	 */
	public function update( $new_instance, $old_instance ) {
		$instance = [];
		$instance['title'] = ( ! empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';
		$instance['template_id'] = $new_instance['template_id'];

		return $instance;
	}
}
