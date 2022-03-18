class NavigationComponent {
	get linksMenu() {
		return $$('#primary-menu li[id*=menu]');
	}

	get menu() {
		return $('#primary-menu');
	}
}

export default new NavigationComponent();
