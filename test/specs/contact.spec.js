import { faker } from '@faker-js/faker';

describe('Страница Контактов:', () => {
	beforeEach(async () => {
		await browser.url('/contact');
	});

	it('Проверить заполнение формы обратной связи.', async () => {
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

	it('Проверить заполнение формы обратной связи c сгенерированными данными.', async () => {
		await $('#evf-277-field_ys0GeZISRs-1').addValue(faker.name.findName());
		await $('#evf-277-field_LbH5NxasXM-2').setValue(faker.internet.email());
		await $('#evf-277-field_66FR384cge-3').addValue(faker.phone.phoneNumber());
		await $('#evf-277-field_yhGx3FOwr2-4').addValue(faker.lorem.paragraphs(3));
		await $('#evf-submit-277').click();
		const actualText = await $(
			'//*[@class="everest-forms-notice everest-forms-notice--success everest-forms-submission-scroll"]',
		).getText();
		await expect(actualText).toContain(
			'Thanks for contacting us! We will be in touch with you shortly',
		);
	});
});
