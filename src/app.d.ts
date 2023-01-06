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
		// interface Error {}
		// interface Platform {}
	}
}
