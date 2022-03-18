const allure = require('allure-commandline');

exports.config = {
	headless: true,
	specs: ['./test/specs/**/*.js'],
	// Patterns to exclude.
	exclude: [
		// 'path/to/excluded/files'
	],
	suites: {
		pages: ['./test/specs/**/home-page.spec.js', './test/specs/**/navigation-page.spec.js'],
		specs: [
			'./test/specs/**/home.spec.js',
			'./test/specs/**/navigation.spec.js',
			'./test/specs/**/about.spec.js',
			'./test/specs/**/blog.spec.js',
			'./test/specs/**/contact.spec.js',
		],
	},
	maxInstances: 10,
	capabilities: [
		{
			maxInstances: 1,
			browserName: 'chrome',
			acceptInsecureCerts: true,
		},
		{
			maxInstances: 1,
			browserName: 'firefox',
			acceptInsecureCerts: true,
		},
	],
	logLevel: 'error',
	bail: 0,
	baseUrl: 'https://practice.automationbro.com',
	waitforTimeout: 10000,
	connectionRetryTimeout: 120000,
	connectionRetryCount: 3,
	services: [
		[
			'selenium-standalone',
			{ logPath: './temp', drivers: { firefox: '0.29.1', chrome: true, chromiumedge: 'latest' } },
		],
	],
	framework: 'mocha',
	reporters: [
		'spec',
		[
			'allure',
			{
				outputDir: 'allure-results',
				disableWebdriverStepsReporting: true,
				disableWebdriverScreenshotsReporting: true,
			},
		],
	],
	mochaOpts: {
		ui: 'bdd',
		timeout: 60000,
	},
	beforeHook: async function (test, context) {
		await browser.setWindowSize(1280, 720);
	},
	afterTest: async function (test) {
		if (test.error !== undefined) {
			await browser.takeScreenshot();
		}
	},
	onComplete: function () {
		const reportError = new Error('Could not generate Allure report');
		const generation = allure(['generate', 'allure-results', '--clean']);
		return new Promise((resolve, reject) => {
			const generationTimeout = setTimeout(() => reject(reportError), 5000);

			generation.on('exit', function (exitCode) {
				clearTimeout(generationTimeout);

				if (exitCode !== 0) {
					return reject(reportError);
				}

				console.log('Allure report successfully generated');
				resolve();
			});
		});
	},
};
