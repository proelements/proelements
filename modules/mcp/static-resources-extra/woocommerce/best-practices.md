# WooCommerce pages with Elementor

How to build WooCommerce pages with Elementor tools, assign them as the store's pages, and what the user must still do in WordPress admin.

## Before you start

- WooCommerce active, and Elementor Pro on a tier that includes the WooCommerce features.
- Elementor core 4.4+; the V4 Loop needs 4.2+.
- Experiment on: Atomic elements (`e_atomic_elements`); ask before enabling.
- A theme that supports menus, and Pro custom CSS for style fallbacks.

## Check first

- **Products exist:** check `list-posts` with `post_type: "product"`. If there are none, ask the user to add a few, or loops and previews stay empty.
- **Atomic Editor is on:** check with `list-experiments`; ask before enabling it with `manage-experiments`.
- **A menu exists:** the `nav-menu` schema's `menu` options are the site's menus. If there are none, ask the user to create one (checklist item 2).
- **Categories exist:** if the design links to product categories, ask the user to confirm or create them (checklist item 3).
- **Existing templates:** `list-site-parts` shows current site parts and their conditions. List them, and ask before changing any you didn't create.
- **Current store pages:** `manage-woocommerce-settings` with `action: "get"` shows which page is the cart, checkout, my account, terms, shop and purchase summary, and whether each is built with Elementor.

## Workflow

1. Run **Check first**.
2. Build the header, product archive and single product site parts as drafts (`manage-site-parts`).
3. Create the Cart, Checkout, My Account and Thank-you pages (rule 1).
4. Build the empty-cart template and set it on the cart widget (rule 9).
5. Publish everything with `publish-document`, and retarget old product templates (rule 6).
6. Assign the new pages as the store's pages (rule 15). Ask the user first.
7. Give the user one checklist step at a time, and wait for them to confirm each.
8. Verify each live URL logged out (see **Verify live**).
9. Report what's done and what's left.

## Where each part lives

| Part | Build | Activated by |
|---|---|---|
| Shop + category pages | `product-archive` site part, `include/product_archive` | Publish (agent) |
| Single product | `product` site part, `include/singular/product` | Publish + set old product templates to `exclude/general` (agent) |
| Cart / Checkout / My Account | **New** page with `woocommerce-cart` / `woocommerce-checkout-page` / `woocommerce-my-account` | `manage-woocommerce-settings` `update` with `cart` / `checkout` / `my_account` (agent, after the user agrees) |
| Thank-you | New page with `woocommerce-purchase-summary` | `manage-woocommerce-settings` `update` with `purchase_summary` (agent, after the user agrees) |
| Empty cart | Any saved template (no conditions or publish needed) | Cart widget settings `additional_template_switch: true` and `additional_template_select` (agent) |
| Homepage | Normal WordPress page built with Elementor | Settings → Reading (user) |
| Header menu | `nav-menu` with `menu` (menu slug) | Appearance → Menus, create menu (user) |

You can't change WordPress Reading settings, create menus or product categories, or delete pages. Give the user exact click paths for those.

## Rules and gotchas

1. **Don't build on WooCommerce's default Cart, Checkout or My Account pages.** They aren't Elementor pages: content saves but never renders, and the preview reports "not built with Elementor". Create new pages with `create-page` (`template: "elementor_header_footer"`), publish them, and assign them (rule 15). Until then, WooCommerce keeps linking to the old pages.
2. **Don't build on the Shop page.** WooCommerce renders it as the product archive, so an Elementor layout there won't show. Use the product archive site part, and keep the "Shop" page assigned as `shop`.
3. **Loops default to 3 items.** Set `posts_per_page` in `query`, and always send the full `query` object (including `template_type: "product"`). Products use `product_orderby` (`popularity` for bestsellers); posts use `orderby` (`post_date`, …). One invalid value drops the whole query with a warning.
4. **Add to cart in loops:** an `e-button` with the `woocommerce-add-to-cart` tag redirects to the product page (it adds `e-redirect`). Use the `woocommerce-product-add-to-cart` widget (`show_quantity: false`) instead; in a loop it's an AJAX button (simple, in-stock products, with WooCommerce's AJAX archive setting on). Its label ("Add to cart") can't be changed.
5. **V3 widget styles don't apply inside loops,** because element IDs change per item. Wrap the widget in an `e-div-block` with a global class that uses descendant CSS (`& .button {…} & .added_to_cart {…}`).
6. **Disabling a template:** never send `conditions: []`, which becomes `include/general` and applies the template site-wide. Use `["exclude/general"]`, then check an unrelated live page. Ask before touching templates you didn't create.
7. **Edits to published documents are staged.** Call `publish-document` again, then check the live URL.
8. **Preview quirks:** previews run logged out with a sample cart, so the empty cart and logged-in My Account can't be previewed. For a site part, use the `preview_url` from `publish-document`. Single-product previews may miss global class styles, so verify live.
9. **Empty cart:** always offer one, because otherwise shoppers see WooCommerce's plain "Your cart is currently empty" message. Build any saved template with a friendly message, a link back to the shop and, optionally, a bestsellers loop. Then set `additional_template_switch: true` and `additional_template_select` (the template's ID) on the cart widget, and publish the cart page again. If the cart widget's schema has no `additional_template_select`, guide the user: Cart widget → Content → Additional Options → Customize empty cart → Choose template, then save.
10. **Single product:**
    - Use V4 widgets with `woocommerce-product-*-tag`. The price tag's default `format: "both"` shows sale prices; keep it.
    - `woocommerce-product-terms-tag` adds a "Categories:" prefix.
    - There's no style target for the Sale badge colour or the button label.
    - The quantity field has no box-shadow, including on focus.
11. **Images:** `e-image` `src.id` must be an attachment ID from `list-assets`, not a product ID. In loops, use the `post-featured-image` tag.
12. **Header:**
    - `nav-menu` shows the menu set in `menu` (slug). With no menus it renders nothing; with a missing slug WordPress shows the first menu that has items.
    - Menu cart: style the icon through `toggle-icon`, because `color` on `toggle` turns the subtotal back on.
    - Category links 404 until the categories exist.
13. **Post content links:** there's no link-colour target, so point the user to Site Settings → Theme Style → Typography → Link → Color (applies site-wide).
14. **Notices** (errors, success messages, info):
    - Cart, Checkout, My Account, Purchase Summary and `woocommerce-notices` have notice style targets: `error-notice`, `message-notice`, `info-notice`, and their links, icon and buttons. Style them in the same `style` as the widget, so notices match the design.
    - They're site-wide: they style every WooCommerce notice on every page, so style them once, not per widget. Each write returns a `site_wide_style` warning and goes live when the page is saved, even as a draft.
    - `get-page-structure` returns them with the widget's own styles; restyle them there, not by guessing.
    - To show notices on a page without these widgets (e.g. the single product template), add `woocommerce-notices` where they should appear.
    - Notices only appear after a shopper action, so previews don't show them. Verify live.
15. **Assigning store pages:**
    - Publish the pages first; `manage-woocommerce-settings` only accepts published pages.
    - Always ask the user before `update`, naming each page you'll assign. It's site-wide and changes the pages shoppers reach.
    - Send every page in one `update`: if any page is invalid, nothing changes. Fix the error and send them all again.
    - Keep the returned `previous` IDs, so you can put the old pages back if the user asks.
    - A warning that a page isn't built with Elementor means its content won't render. Build a new page and assign that instead.
    - If the tool isn't available (no WooCommerce, or the license lacks WooCommerce Pages), give the user the click paths: WooCommerce → Settings → Advanced → Page setup for Cart, Checkout and My account, and Elementor editor → Site Settings → WooCommerce → WooCommerce Pages for Purchase Summary.

## User checklist (give after publishing)

1. Settings → Reading: set the static Homepage, and the Posts page if there is one.
2. Appearance → Menus: create the menu and add items, then tell the agent which menu the header should use.
3. Products → Categories: create every category the design links to, with matching slugs.
4. Optional: trash the old WooCommerce pages and any test pages.

## Verify live

- Shop shows the new archive with the right item count.
- Add to cart stays on the page and the cart count updates.
- Notices match the design: removing a cart item shows a styled success notice.
- Product page shows the real price, stock and gallery, and unrelated pages are unaffected.
- The cart flow goes cart → checkout → thank-you on the new pages.
- An empty cart shows the empty-cart template, styled.
- The header shows the intended menu, not the theme's own header.
