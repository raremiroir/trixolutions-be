import { writable } from 'svelte/store'

export const currentHero = writable('');
export const currentTitle = writable('');

// Checks the current active modal
export const currentModal = writable();