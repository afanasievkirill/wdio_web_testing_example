describe('Блог:', () => {
	it('Проверить наличие 5 постов в виджете.', async () => {
		await browser.url('/blog');
		const actualPosts = await $$('#recent-posts-3 li');
		// debug
		// await browser.debug();
		for (const post of actualPosts) {
			const postLength = await post.getText();
			expect(postLength.length).toBeGreaterThan(10);
		}
		await expect(actualPosts.length).toEqual(5);
	});

	it('Проверить наличие айФрэйма', async () => {
		await browser.url('/iframe-sample');
		const iframe = await $('iframe[id=advanced_iframe]');
		await browser.switchToFrame(iframe);
		await expect($('#site-logo')).toExist();
		await browser.switchToParentFrame();
		await expect($('h1.tg-page-header__title')).toHaveText('IFrame Sample');
	});
});
