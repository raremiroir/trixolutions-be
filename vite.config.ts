import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { imagetools } from 'vite-imagetools';


const config: UserConfig = {
	plugins: [
		imagetools(),
		sveltekit(), 
	],
	server: { port: 3000 },
	preview: { port: 3000 },
};

export default config;