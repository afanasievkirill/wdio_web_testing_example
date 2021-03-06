describe('Меню навигации:', () => {
	beforeEach(async () => {
		await browser.url('/');
	});

	it('Проверить заголовки всех элементов меню.', async () => {
		const expectedLinks = ['Home', 'About', 'Shop', 'Blog', 'Contact', 'My account'];
		const actualLinks = [];
		const navigationLinks = await $('#primary-menu').$$('li[id*=menu]');
		for (const link of navigationLinks) {
			actualLinks.push(await link.getText());
		}
		await expect(expectedLinks).toEqual(actualLinks);
	});

	it('Проверить заголовки всех элементов меню через ожидания.', async () => {
		const expectedLinks = ['Home', 'About', 'Shop', 'Blog', 'Contact', 'My account'];
		const actualLinks = [];
		await $('#primary-menu').waitForDisplayed();
		const navigationLinks = await $('#primary-menu').$$('li[id*=menu]');
		for (const link of navigationLinks) {
			actualLinks.push(await link.getText());
		}
		await expect(expectedLinks).toEqual(actualLinks);
	});
});
