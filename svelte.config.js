import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
   kit: {
      adapter: adapter({
         // envVarsInUse: [

         // ]
      }),
      prerender: {
         crawl: true,
         concurrency: 3,
         handleHttpError: ({ path, referrer, message }) => {
            console.log('Error: HTTP Error in prerender')
            console.log('path: ', path);
            console.log('referrer: ', referrer);
            console.log('message: ', message);

            // ignore deliberate link to shiny 404 page
            if (path === '/not-found') {
               return;
            }
            // otherwise fail the build
            throw new Error(message);
         },
         handleMissingId: ({ id, path, referrers, message }) => {
            console.log('Error: Missing ID in prerender')
            console.log('id: ', id);
            console.log('path: ', path);
            console.log('referrers: ', referrers);
            console.log('message: ', message);
            return;
         },
         // entries: [
            // '*',
            // '/nl', '/fr', '/en',
            // '/nl/over-ons', '/fr/a-propos', '/en/about-us',
            // '/nl/referenties', '/fr/references', '/en/references',
            // '/nl/contact', '/fr/contact', '/en/contact',
            
            // '/nl/open-sessies', '/fr/sessions-ouvertes', '/en/open-sessions',
            // '/nl/open-sessies/gratis-open-infosessies', '/fr/sessions-ouvertes/sessions-info-gratuites-ouvertes', '/en/open-sessions/free-open-info-sessions',
            // '/nl/open-sessies/hybride-lencioni-leertraject', '/fr/sessions-ouvertes/traject-hybride-lencioni', '/en/open-sessions/hybrid-lencioni-learning-track',
            // '/nl/open-sessies/lencioni-deepdive-level-2', '/fr/sessions-ouvertes/lencioni-deepdive-niveau-2', '/en/open-sessions/lencioni-deepdive-level-2',

            // // '/nl/blog', '/fr/blog', '/en/blog'
            // // '/nl/blog/[post]', '/fr/blog/[post]', '/en/blog/[post]'
            
            // '/nl/beslissende-voorsprong', '/fr/avantage-decisif', '/en/decisive-lead',
            // '/nl/5-frustraties-teamwerk', '/fr/5-dysfonctions-travail-equipe', '/en/5-dysfunctions-teamwork',
            // '/nl/ideale-teamplayer', '/fr/coequipier-ideal', '/en/ideal-team-player',
            // '/nl/vergaderingen-zijn-dodelijk', '/fr/reunions-tuent', '/en/meetings-are-deadly',
            // '/nl/6-types-working-genius', '/fr/6-types-working-genius', '/en/6-types-working-genius',
            
            // '/nl/vacatures', '/fr/postes-vacants', '/en/vacancies',
            // '/nl/algemene-voorwaarden', '/fr/conditions-generales', '/en/terms-conditions',
            // '/nl/algemene-voorwaarden-kmo-portfolio', '/fr/conditions-generales-portefeuille-pme', '/en/terms-conditions-sme-portfolio',
            // '/nl/privacybeleid', '/fr/politique-de-confidentialite', '/en/privacy-policy',
            // // '/api/posts', '/api/registerMailchimp', '/api/sendEmail', '/sitemap.xml',
         // ]
      },
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
      csp: { 
         mode: 'auto',
      directives: {
            'script-src': [
               'self',
               'nonce-{SERVER-GENERATED-NONCE}'
            ]
         },
         reportOnly: {
            'script-src': ['self']
         }
      }
   },
   extensions: [
      '.svelte',
      '.md'
   ],
   serviceWorker: {
      register: false
   },
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
