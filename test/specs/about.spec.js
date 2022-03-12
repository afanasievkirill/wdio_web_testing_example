describe('О Нас:', () => {
	it('Проверить существование страницы.', async () => {
		await browser.url('/about');
		await expect($('h1.tg-page-header__title')).toHaveText('About');
		await expect(browser).toHaveUrl('https://practice.automationbro.com/about/');
	});
});
