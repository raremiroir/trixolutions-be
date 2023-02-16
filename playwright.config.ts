
import { defineConfig } from '@playwright/test';
export default defineConfig({
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	},
	reporter: [
		['list'],
		['html']
	],
	use: {
		headless: false,
		ignoreHTTPSErrors: true,
		video: 'on-first-retry',
		trace: 'retain-on-failure'
	},
	projects: [
		{
			name: 'chrome-desktop',
			use: {
				browserName: 'chromium',
				viewport: { width: 1280, height: 720 },
			},
		},
		{
			name: 'firefox-desktop',
			use: {
				browserName: 'firefox',
				viewport: { width: 1280, height: 720 },
			},
		},
		{
			name: 'webkit-desktop',
			use: {
				browserName: 'webkit',
				viewport: { width: 1280, height: 720 },
			},
		},

	],
});