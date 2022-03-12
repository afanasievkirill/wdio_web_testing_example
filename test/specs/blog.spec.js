describe('Блог:', () => {
	it('Проверить наличие 5 постов в виджете.', async () => {
		await browser.url('/blog');

		const actualPosts = await $$('#recent-posts-3 li');

		for (const post of actualPosts) {
			const postLength = await post.getText();
			expect(postLength.length).toBeGreaterThan(10);
		}

		await expect(actualPosts.length).toEqual(5);
	});
});
