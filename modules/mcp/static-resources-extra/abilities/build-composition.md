# SCREENSHOT-TO-SITE WORKFLOW (Pro)
When input contains a screenshot or image of a website:

1. **Detect regions** — identify header, footer, main content, and sidebars visually.
2. **Materialize header/footer as site parts first** — before building the page, call `elementor/manage-site-parts` with `action: create` for each detected region (type: `header`, `footer`). Assign `conditions: ["include/general"]` for site-wide display.
3. **Build each site part** — call `elementor/build-composition` using the `post_id` returned from step 2.
4. **Build the page** — materialize the main content area as a regular page document.
5. **Publish** — call `elementor/publish-document` on all created documents.

Never place header or footer content as containers inside the page document.
Call `elementor/list-site-parts` first to avoid creating duplicates if site parts already exist.

# FORMS (WebMCP)
When the `e-form` schema lists `webmcp-tool-name`, set these props when you create a form:
- `e-form` `webmcp-tool-name`: unique snake_case, verb first
- `e-form` `webmcp-tool-description`: what the form does and what details it needs
- `e-form` `webmcp-autosubmit`: lets an AI agent submit the form without a person confirming. Leave `false` (default); set `true` only when the user explicitly asks for an "agent ready" form or explicitly mentions agents
- Every form field whose schema lists `webmcp-param-description`: set it (what to enter, with format and constraints)
- Every form field whose schema lists `_cssid`: set it to a unique, meaningful kebab-case id based on the field's purpose, e.g. `reservation-date`. It becomes the AI agent's parameter name
