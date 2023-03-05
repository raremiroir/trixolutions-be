import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit'
import { config as websiteConfig } from './config/website'

const config: UserConfig = {
	logLevel: 'info',
	plugins: [
		sveltekit(), 
		SvelteKitPWA({
			includeAssets: ['favicon.ico', 'robots.txt', 'static/**/*', 'client/**/*.{js,css,html,svg,png,jpg,jpeg,gif,ico,woff,woff2,mp3,mp4,webp,avif,svg}'],
			includeManifestIcons: true,
			strategies: 'injectManifest',
			registerType: 'autoUpdate',
			// filename: 'prompt-sw.ts',
			// scope: '/',
			manifest: {
				name: websiteConfig.title,
				short_name: websiteConfig.title,
				start_url: '/',
				scope: '/',
				display: 'standalone',
				theme_color: websiteConfig.themeColor,
				background_color: websiteConfig.backgroundColor,
				icons: [
					{
						src: './static/icon-192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: './static/icon-512.png',
						sizes: '512x512',
						type: 'image/png',
					},
					{
						src: './static/icon-512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable',
					},
				]
			},
			injectManifest: {
				globPatterns: ['client/**/*.{js,css,html,svg,png,jpg,jpeg,gif,ico,woff,woff2,mp3,mp4,webp,avif,svg}'],
			},
			workbox: {
				globPatterns: ['client/**/*.{js,css,html,svg,png,jpg,jpeg,gif,ico,woff,woff2,mp3,mp4,webp,avif,svg}'],
				globIgnores: ['**/node_modules/**/*'],
				skipWaiting: true,
				clientsClaim: true,
				offlineGoogleAnalytics: false,
				mode: 'production',
			}
		})
	],
	define: {
		'process.env': process.env,
		__DATE__: `'${new Date().toISOString()}'`,
		__RELOAD_SW__: false,
	},
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