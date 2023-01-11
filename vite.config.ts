import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { imagetools } from 'vite-imagetools';
import path from 'node:path';
import { readFileSync } from 'fs';


const config: UserConfig = {
	plugins: [
		imagetools(),
		sveltekit(), 
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