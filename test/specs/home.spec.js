describe('Домашняя страница:', () => {
	before(async () => {
		await browser.url('/');
	});

	it('Проверить заголовок страницы.', async () => {
		await expect(browser).toHaveTitle('Practice E-Commerce Site – Automation Bro');
	});

	it('Кликнуть по команде Гет-стартед, проверить, что УРЛ содержит #get-started.', async () => {
		await $('#get-started').click();
		await expect(browser).toHaveUrlContaining('#get-started');
	});

	it('Кликнуть по логотипу, проверить, что УРЛ принял дефолтное значение.', async () => {
		await $('#get-started').click();
		await expect(browser).toHaveUrlContaining('#get-started');
		await $('.custom-logo').click();
		await expect(browser).not.toHaveUrlContaining('#get-started');
	});
});
