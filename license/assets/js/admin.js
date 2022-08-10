export default class Module extends elementorModules.Module {
	onInit() {
		this.assignRenewMenuItemAction();
	}

	assignRenewMenuItemAction() {
		window.addEventListener( 'DOMContentLoaded', () => {
			const link = document.querySelector( 'a[href="elementor_pro_renew_license_menu_link"]' );

			if ( ! link ) {
				return;
			}

			link.addEventListener( 'click', ( e ) => {
				e.preventDefault();

				window.open( 'https://go.elementor.com/wp-menu-renew/', '_blank' );
			} );
		} );
	}
}
