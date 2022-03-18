import HomePage from '../pages/home-page.js';

describe('Меню навигации:', () => {
	beforeEach(async () => {
		await HomePage.open();
	});

	it('Проверить заголовки всех элементов меню.', async () => {
		const expectedLinks = ['Home', 'About', 'Shop', 'Blog', 'Contact', 'My account'];
		const actualLinks = [];
		const navigationLinks = await HomePage.NavigationComponent.linksMenu;
		for (const link of navigationLinks) {
			actualLinks.push(await link.getText());
		}
		await expect(expectedLinks).toEqual(actualLinks);
	});

	it('Проверить заголовки всех элементов меню через ожидания.', async () => {
		const expectedLinks = ['Home', 'About', 'Shop', 'Blog', 'Contact', 'My account'];
		const actualLinks = [];
		await HomePage.NavigationComponent.menu.waitForDisplayed();
		const navigationLinks = await HomePage.NavigationComponent.linksMenu;
		for (const link of navigationLinks) {
			actualLinks.push(await link.getText());
		}
		await expect(expectedLinks).toEqual(actualLinks);
	});
});
