import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
      preprocess({
        postcss: true
      })
   ],

	kit: {
		adapter: adapter(),
      alias: {
         $src: 'src',
         $lib: 'src/lib',
         $comp: 'src/lib/components',
         $img: 'src/lib/assets/images',
         $i18n: 'src/i18n',
         $utils: 'src/lib/utils',
         $stores: 'src/lib/stores',
      },
      // csp: { mode: 'auto' }
	}
};

export default config;
