import HomePage from '../pages/home-page.js';

describe('Домашняя страница:', () => {
	beforeEach(async () => {
		await HomePage.open();
	});
	it('Проверить заголовок страницы.', async () => {
		await expect(browser).toHaveTitle('Practice E-Commerce Site – Automation Bro');
	});

	it('Кликнуть по команде Гет-стартед, проверить, что УРЛ содержит #get-started.', async () => {
		await HomePage.btnGetStarted.click();
		await expect(browser).toHaveUrlContaining('#get-started');
	});

	it('Кликнуть по логотипу, проверить, что УРЛ принял дефолтное значение.', async () => {
		await HomePage.btnGetStarted.click();
		await expect(browser).toHaveUrlContaining('#get-started');
		await HomePage.imageLogo.click();
		await expect(browser).not.toHaveUrlContaining('#get-started');
	});
});
