// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types

/// <reference types="@sveltejs/kit"/>

import PocketBase from 'pocketbase'

type Locales = import('$i18n/i18n-types').Locales
type TranslationFunctions = import('$i18n/i18n-types').TranslationFunctions

declare global {
	declare namespace App {
		interface Locals {
			locale: Locales
			LL: TranslationFunctions
		}
		// interface PageData {}
		// interface LayoutLoad{}
		// interface Error {
		// 	message: string;
		// 	errorId: string;
		// }
		// interface Platform {}
	}
}
declare module 'virtual:pwa-register/svelte' {
	// @ts-expect-error ignore when svelte is not installed
	import type { Writable } from 'svelte/store'
 
	export interface RegisterSWOptions {
	  immediate?: boolean
	  onNeedRefresh?: () => void
	  onOfflineReady?: () => void
	  /**
		* Called only if `onRegisteredSW` is not provided.
		*
		* @deprecated Use `onRegisteredSW` instead.
		* @param registration The service worker registration if available.
		*/
	  onRegistered?: (registration: ServiceWorkerRegistration | undefined) => void
	  /**
		* Called once the service worker is registered (requires version `0.12.8+`).
		*
		* @param swScriptUrl The service worker script url.
		* @param registration The service worker registration if available.
		*/
	  onRegisteredSW?: (swScriptUrl: string, registration: ServiceWorkerRegistration | undefined) => void
	  onRegisterError?: (error: any) => void
	}
 
	export function useRegisterSW(options?: RegisterSWOptions): {
	  needRefresh: Writable<boolean>
	  offlineReady: Writable<boolean>
	  updateServiceWorker: (reloadPage?: boolean) => Promise<void>
	}
 }

export {};