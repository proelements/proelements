export default class Module extends elementorModules.Module {
	#actionLinks = [
		{
			href: 'elementor_pro_renew_license_menu_link',
			external_url: 'https://go.elementor.com/wp-menu-renew/',
		},
		{
			href: 'elementor_pro_upgrade_license_menu_link',
			external_url: 'https://go.elementor.com/go-pro-advanced-elementor-menu/',
		},
	];

	onInit() {
		this.assignMenuItemActions();
	}

	assignMenuItemActions() {
		window.addEventListener( 'DOMContentLoaded', () => {
			this.#actionLinks.forEach( ( item ) => {
				const link = document.querySelector( `a[href="${ item.href }"]` );

				if ( ! link ) {
					return;
				}

				link.addEventListener( 'click', ( e ) => {
					e.preventDefault();
					window.open( item.external_url, '_blank' );
				} );
			} );
		} );
	}
}
