import { writable } from 'svelte/store'

// TODO: Clean up stores

export const status = writable(false);
export const username = writable("");
export const user = writable({});
export const admin = writable({});
export const verified = writable();

export const pageResult = writable([]);
export const secondPageResult = writable([]);
export const imgSrc = writable('');

export const currentHero = writable('');
export const currentTitle = writable('');
export const currentModal = writable();

export const breakpoints = writable({
   xs:  520,
   sm:  640,
   md:  768,
   lg:  1024,
   xl:  1280,
   xxl: 1536
})