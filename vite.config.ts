import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { imagetools } from 'vite-imagetools';
import path from 'node:path';
import { readFileSync } from 'fs';
import { SvelteKitPWA } from '@vite-pwa/sveltekit'


const config: UserConfig = {
	plugins: [
		imagetools(),
		sveltekit(), 
		SvelteKitPWA({/* pwa options */})
	],
	 preview: { port: 3000 },
	 server: { 
		port: 3000, 
		fs: {
		  allow: ['..'],
		},
	},
};

export default config;