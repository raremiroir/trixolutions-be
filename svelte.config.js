import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
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
         $route: 'src/routes',
      },
      // csp: { mode: 'auto' }
   },
   extensions: [
      '.svelte',
      '.md'
   ],
	preprocess: [
      preprocess({
        postcss: true,
      }),
      mdsvex({
         extensions: ['.md'],
         smartypants: true,
      })
   ]
};

export default config;
