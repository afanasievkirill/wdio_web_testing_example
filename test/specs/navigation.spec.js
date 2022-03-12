describe('Меню навигации:', () => {
	it('Проверить заголовки всех элементов меню.', async () => {
		await browser.url('/');

		const expectedLinks = ['Home', 'About', 'Shop', 'Blog', 'Contact', 'My account'];
		const actualLinks = [];

		const navigationLinks = await $('#primary-menu').$$('li[id*=menu]');
		console.log(navigationLinks);

		for (const link of navigationLinks) {
			actualLinks.push(await link.getText());
		}

		await expect(expectedLinks).toEqual(actualLinks);
	});
});
