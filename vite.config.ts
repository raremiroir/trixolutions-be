import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit'


const config: UserConfig = {
	plugins: [
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
	optimizeDeps: {
	}
};

export default config;