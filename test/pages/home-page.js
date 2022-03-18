import NavigationComponent from './components/navigation-component';

class HomePage {
	get btnGetStarted() {
		return $('#get-started');
	}

	get imageLogo() {
		return $('.custom-logo');
	}

	get NavigationComponent() {
		return NavigationComponent;
	}

	open() {
		return browser.url('/');
	}
}

export default new HomePage();
