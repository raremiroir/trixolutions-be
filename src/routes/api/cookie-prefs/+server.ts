import { dev } from '$app/environment'
import type { Cookies } from '@sveltejs/kit';

export const POST = async ({ request, cookies }: { request: Request, cookies: Cookies }) => {

	const prefs = await request.json();

	try {
		cookies.delete('cookie_functional', {
			path: '/',
		});
		cookies.delete('cookie_experience', {
			path: '/',
		});
		cookies.delete('cookie_prefs_set', {
			path: '/',
		});

		cookies.set('cookie_functional', 'true', {
			maxAge: 60 * 60 * 24 * 365, 	// 1 year, in seconds, https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/Max-Age
			sameSite: 'strict',				// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
			secure: !dev,
			path: '/',
			priority: 'high',
		});

		if (prefs.experience === true) {
			cookies.set('cookie_experience', 'true', {
				maxAge: 60 * 60 * 24 * 365, 	// 1 year, in seconds, https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/Max-Age
				sameSite: 'strict',				// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
				secure: !dev,
				path: '/',
				priority: 'high',
			});
		}

		cookies.set('cookie_prefs_set', 'true', {
			maxAge: 60 * 60 * 24 * 365, 	// 1 year, in seconds, https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/Max-Age
			sameSite: 'strict',				// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
			secure: !dev,
			path: '/',
			priority: 'high',
		})

		// console.log('set: ', cookies.get('cookie_prefs_set'));
		// console.log('functional: ', cookies.get('cookie_functional'));
		// console.log('experience: ', cookies.get('cookie_experience'));
	} catch (err) {
		console.error(err);
	}
   return;
}