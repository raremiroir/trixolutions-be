import { writable } from 'svelte/store'


export const status = writable(false);
export const username = writable("");
export const user = writable({});
export const admin = writable({});
export const verified = writable();

export const pageResult = writable([]);
export const secondPageResult = writable([]);
export const imgSrc = writable('');