<?php
namespace ElementorPro\Modules\CodeHighlight\Widgets;

use Elementor\Modules\DynamicTags\Module as TagsModule;
use Elementor\Controls_Manager;
use ElementorPro\Plugin;
use ElementorPro\Base\Base_Widget;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Code_Highlight extends Base_Widget {

	public function get_name() {
		return 'code-highlight';
	}

	public function get_title() {
		return __( 'Code Highlight', 'elementor-pro' );
	}

	public function get_icon() {
		return 'eicon-code-highlight';
	}

	public function get_keywords() {
		return [ 'code', 'highlight', 'syntax', 'highlighter', 'javascript', 'css', 'php', 'html', 'java', 'js' ];
	}

	public function get_style_depends() {
		return [ 'prismjs_style' ];
	}

	public function get_script_depends() {
		$depends = [
			'prismjs_core' => true,
			'prismjs_loader' => true,
			'prismjs_normalize' => true,
			'highlight_handler' => true,
			'prismjs_line_numbers' => true,
			'prismjs_line_highlight' => true,
			'prismjs_copy_to_clipboard' => true,
		];

		if ( ! Plugin::elementor()->preview->is_preview_mode() ) {
			$settings = $this->get_settings_for_display();

			if ( ! $settings['line_numbers'] ) {
				unset( $depends['prismjs_line_numbers'] );
			}

			if ( ! $settings['highlight_lines'] ) {
				unset( $depends['prismjs_line_highlight'] );
			}

			if ( ! $settings['copy_to_clipboard'] ) {
				unset( $depends['prismjs_copy_to_clipboard'] );
			}
		}

		return array_keys( $depends );
	}

	protected function register_controls() {
		$this->start_controls_section(
			'section_content',
			[
				'label' => __( 'Code Highlight', 'elementor-pro' ),
			]
		);

		$language_option = [
			'markup' => 'Markup',
			'html' => 'HTML',
			'css' => 'CSS',
			'sass' => 'Sass (Sass)',
			'scss' => 'Sass (Scss)',
			'less' => 'Less',
			'javascript' => 'JavaScript',
			'typescript' => 'TypeScript',
			'jsx' => 'React JSX',
			'tsx' => 'React TSX',
			'php' => 'PHP',
			'ruby' => 'Ruby',
			'json' => 'JSON + Web App Manifest',
			'http' => 'HTTP',
			'xml' => 'XML',
			'svg' => 'SVG',
			'rust' => 'Rust',
			'csharp' => 'C#',
			'dart' => 'Dart',
			'git' => 'Git',
			'java' => 'Java',
			'sql' => 'SQL',
			'go' => 'Go',
			'kotlin' => 'Kotlin + Kotlin Script',
			'julia' => 'Julia',
			'python' => 'Python',
			'swift' => 'Swift',
			'bash' => 'Bash + Shell',
			'scala' => 'Scala',
			'haskell' => 'Haskell',
			'perl' => 'Perl',
			'objectivec' => 'Objective-C',
			'visual-basic,' => 'Visual Basic + VBA',
			'r' => 'R',
			'c' => 'C',
			'cpp' => 'C++',
			'aspnet' => 'ASP.NET (C#)',
		];

		$this->add_control(
			'language',
			[
				'label' => __( 'Language', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT2,
				'multiple' => false,
				'options' => apply_filters( 'elementor_pro/code_highlight/languages', $language_option ),
				'default' => 'javascript',
			]
		);

		$this->add_control(
			'code',
			[
				'label' => __( 'Code', 'elementor-pro' ),
				'type' => Controls_Manager::CODE,
				'default' => 'console.log( \'Code is Poetry\' );',
				'dynamic' => [
					'active' => true,
					'categories' => [
						TagsModule::TEXT_CATEGORY,
					],
				],
			]
		);

		$this->add_control(
			'line_numbers',
			[
				'label' => __( 'Line Numbers', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'return_value' => 'line-numbers',
				'default' => 'line-numbers',
			]
		);

		$this->add_control(
			'copy_to_clipboard',
			[
				'label' => __( 'Copy to Clipboard', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => __( 'On', 'elementor-pro' ),
				'label_off' => __( 'Off', 'elementor-pro' ),
				'return_value' => 'copy-to-clipboard',
				'default' => 'copy-to-clipboard',
			]
		);

		$this->add_control(
			'highlight_lines',
			[
				'label' => __( 'Highlight Lines', 'elementor-pro' ),
				'type' => Controls_Manager::TEXT,
				'default' => '',
				'placeholder' => '1, 3-6',
			]
		);

		$this->add_control(
			'word_wrap',
			[
				'label' => __( 'Word Wrap', 'elementor-pro' ),
				'type' => Controls_Manager::SWITCHER,
				'label_on' => __( 'On', 'elementor-pro' ),
				'label_off' => __( 'Off', 'elementor-pro' ),
				'return_value' => 'word-wrap',
				'default' => '',
			]
		);

		$this->add_control(
			'theme',
			[
				'label' => __( 'Theme', 'elementor-pro' ),
				'type' => Controls_Manager::SELECT,
				'default' => 'default',
				'options' => [
					'default'  => 'Solid',
					'dark' => 'Dark',
					'okaidia' => 'Okaidia',
					'solarizedlight' => 'Solarizedlight',
					'tomorrow' => 'Tomorrow',
					'twilight' => 'Twilight',
				],
				'separator' => 'before',
			]
		);

		$this->add_responsive_control(
			'height',
			[
				'label' => __( 'Height', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'vh', 'em' ],
				'range' => [
					'px' => [
						'min' => 115,
						'max' => 1000,
					],
					'em' => [
						'min' => 6,
						'max' => 50,
					],
				],
				'selectors' => [
					'{{WRAPPER}} .highlight-height' => 'height: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->add_responsive_control(
			'font_size',
			[
				'label' => __( 'Font Size', 'elementor-pro' ),
				'type' => Controls_Manager::SLIDER,
				'size_units' => [ 'px', 'em', 'rem', 'vw' ],
				'range' => [
					'px' => [
						'min' => 1,
						'max' => 200,
					],
					'vw' => [
						'min' => 0.1,
						'max' => 10,
						'step' => 0.1,
					],
				],
				'responsive' => true,
				'selectors' => [
					'{{WRAPPER}} pre, {{WRAPPER}} code, {{WRAPPER}} .line-numbers .line-numbers-rows' => 'font-size: {{SIZE}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();
	}

	protected function render() {
		$settings = $this->get_settings_for_display();
		?>
		<div class="<?php echo 'prismjs-' . $settings['theme']; ?> <?php echo $settings['copy_to_clipboard']; ?> <?php echo $settings['word_wrap']; ?>">
			<pre data-line="<?php echo $settings['highlight_lines']; ?>" class="highlight-height language-<?php echo $settings['language']; ?> <?php echo $settings['line_numbers']; ?>">
				<code readonly="true" class="language-<?php echo $settings['language']; ?>">
					<xmp><?php echo $settings['code']; ?></xmp>
				</code>
			</pre>
		</div>
		<?php
	}

	protected function content_template() {
		?>
		<div class="prismjs-{{{ settings.theme }}} {{{settings.copy_to_clipboard}}} {{{settings.word_wrap}}}">
			<pre data-line="{{{settings.highlight_lines }}}" class="highlight-height language-{{{ settings.language }}} {{{ settings.line_numbers }}}">
				<code readonly="true" class="language-{{{ settings.language }}}">
					<xmp>{{{ settings.code }}}</xmp>
				</code>
			</pre>
		</div>
		<?php
	}
}
