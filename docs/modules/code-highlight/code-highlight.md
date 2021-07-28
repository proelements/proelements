## Product knowledge base

### Quick Links

* [PrismJS Website](https://prismjs.com/)
* [PrismJS Line Numbers Plugin](https://prismjs.com/plugins/line-numbers/)
* [PrismJS Line Height Plugin](https://prismjs.com/plugins/line-highlight/)
* [PrismJS Copy to Clipboard Plugin](https://prismjs.com/plugins/copy-to-clipboard/)

### Video
TBD: create a video tutorial

## Technical description

The widget allow users to add code block with the abilities to:
 * Add specific code language.
 * Add line numbers for evey code block line.
 * Add a copy to clipboard button.
 * Highlight specific code block lines. 
 * Break long code block lines to prevent a horizontal scroll.
 * Choose a specific theme for each code block.
 * Limit the height of the code block.
 * Change the font size of the code block

## Known issues / attention needed

### Style (CSS)

All the css files for the 6 themes and 3 plugins are local and combined to a single CSS file instead of using the CDN, in order to avoid too many requests.
Another reason is because we use custom classes to handle the selected themes and features (as line-numbers and such) when the code highlight is being used more than once in the same page.

There are 3 SCSS files that gets combined into a single file:
 * `line-highlight.scss` - Includes the style for the line highlight plugin. (ver 1.23.0)
 * `line-numbers.scss` - Includes the style for the line numbers plugin. (ver 1.23.0)
 * `main-style.scss` - Includes the rest of the styles needed for the themes and plugins:
 	* 6 themes: prism-twilight, prism-tomorrow, prism-solarizedlight, prism-okaidia, prism-dark, prism-solid. (ver 1.23.0)  
	  Each theme style is prefixed with a class specific for the theme (in order to support different themes for multiple code highlight instances on the same page).	* 1 plugin: "copy to clipboard" style prefixed with a class (to support copy functionality only if the user has enabled it). (ver 1.23.0)
	* Specific style for the word-wrap feature
 * `code-highlight.scss` - The file helps to minimize HTTP requests by combining all the SCSS files to a single CSS file.

There is a small CSS fix in `main-style.scss` which solves a conflict when highlighting lines while hiding line numbers.

### Functionality (JS)

All the scripts are requested from a CDN instead of using local files since we found it difficult to manage all the plugins to work properly when combined to a single local file.

There are 7 JS Files which we use from a CDN, the last 3 are added only if the user chose the functionality they responsible for:
  * `prismjs_core` - The minimum required code for the plugin functionality. (ver 1.23.0)
  * `prismjs_loader` Dynamically loading the language according to the user choice. (ver 1.23.0)
  * `prismjs_normalize` - Trimming all leading and trailing whitespace of every code block. (ver 1.23.0)
  * `prismjs_line_numbers` - Adding line numbers to the code block. (ver 1.23.0)
  * `prismjs_line_highlight` - Highlighting specific lines in code block. (ver 1.23.0)
  * `prismjs_toolbar` - Registering buttons (we use it for the copy to clipboard button). (ver 1.23.0)
  * `prismjs_copy_to_clipboard` - Adding the ability to copy the code block to the clipboard. (ver 1.23.0)

`handler.js` - For the “word wrap” feature to work, we use the `onElementChange` method to run the prism plugin again and adjust to the changes.

There is a plugin named `inline-color` that we had to remove since it only worked when we used the `PrismJS` plugin with all the languages included in the same file. That means one big file that includes the whole functionality of the plugin AND all the languages, which is a huge performance penalty. Instead, we use the prisms-loader plugin which dynamically loads the needed language when the user selects it and it means a smaller JS bundle.

### Functionality (PHP)
`code-highlight.php` - The language control is used to give the user a code language selection from the most popular code languages. We've added an `apply_filter` to the control in order to give the user more flexibility when choosing a code language.

We replaced the `typography` group control with just a `font-size` control since we didn’t manage to make the `line-height` work with the line numbers. This decision was made since most of the controls in the `typography` group control are not so useful in this case anyway.
