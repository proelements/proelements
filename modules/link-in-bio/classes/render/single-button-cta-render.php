<?php

namespace ElementorPro\Modules\LinkInBio\Classes\Render;

use Elementor\Modules\LinkInBio\Classes\Render\Core_Render;

class Single_Button_Cta_Render extends Core_Render {

	public function render_ctas(): void {
		$this->settings['cta_link'] = [
			[
				'cta_link_text' => $this->settings['cta_section_button_text'] ?? '',
				'cta_link_type' => $this->settings['cta_link_type'] ?? null,
				'cta_link_url' => $this->settings['cta_link_url'] ?? null,
				'cta_link_mail' => $this->settings['cta_link_mail'] ?? null,
				'cta_link_mail_subject' => $this->settings['cta_link_mail_subject'] ?? null,
				'cta_link_mail_body' => $this->settings['cta_link_mail_body'] ?? null,
				'cta_link_number' => $this->settings['cta_link_number'] ?? null,
				'cta_link_location' => $this->settings['cta_link_location'] ?? null,
				'cta_link_username' => $this->settings['cta_link_username'] ?? null,
				'cta_link_file' => $this->settings['cta_link_file'] ?? null,
			],
		];
		parent::render_ctas();
	}

}
