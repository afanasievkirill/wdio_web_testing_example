describe('Страница Контактов:', () => {
	it('Проверить заполнение формы обратной связи.', async () => {
		await browser.url('/contact');

		await $('#evf-277-field_ys0GeZISRs-1').addValue('Name');
		await $('#evf-277-field_LbH5NxasXM-2').setValue('test@test.com');
		await $('#evf-277-field_66FR384cge-3').addValue('+62425266326');
		await $('#evf-277-field_yhGx3FOwr2-4').addValue('Message');

		await $('#evf-submit-277').click();
		const actualText = await $(
			'//*[@class="everest-forms-notice everest-forms-notice--success everest-forms-submission-scroll"]',
		).getText();

		await expect(actualText).toContain(
			'Thanks for contacting us! We will be in touch with you shortly',
		);
	});
});
