<script lang="ts">

	import { PUBLIC_GA4_ID } from "$env/static/public";

   import { CookieManager } from '@boxfish-studio/sveltekit-cookie-manager'
   import type { SKCMConfiguration } from '@boxfish-studio/sveltekit-cookie-manager'

	import LL, { locale } from "$i18n/i18n-svelte";

   let configuration: SKCMConfiguration = {
      disclaimer: {
			title: 'This website uses cookies',
			body: 'By using this site, you agree with our use of cookies',
			policyText: "Read our Privacy Policy",
			policyUrl: "/privacy-policy",
			acceptButtonText: 'Accept Additional Cookies',
			rejectButtonText: 'Reject Additional Cookies',
		},
		services: {
			googleAnalytics4Id: PUBLIC_GA4_ID,
			adCookiesEnabled: false,
			customNecessaryCookies: [{
				name: 'cookie',
				provider: 'Mist Media',
				providerUrl: 'https://www.mistmedia.be',
				purpose: 'Mist Cookie',
				expiry: '1 year',
				type: 'HTTP',
				showDisclaimerIfMissing: true,
			}],
		},
		theme: {
			primary: '#0b3259',
			dark: '#0b3259',
			medium: '#b0bfd9',
			light: '#c4c4c4'
		}
   }

	$: configuration.disclaimer = {
		title: $LL.cookies_prefs.title(),
		body: $LL.cookies_prefs.text(),
		policyText: $LL.cookies_prefs.btns.view_policy(),
		policyUrl: `/${$locale}/${$LL.nav.others.privacy_policy.slug()}`,
		acceptButtonText: $LL.cookies_prefs.btns.accept(),
		rejectButtonText: $LL.cookies_prefs.btns.decline(),
	}

</script>

<CookieManager {configuration} />

<style lang="postcss" global>
	#skcm-cookie-disclaimer {
		padding: 2rem 1.5rem 1rem 1.5rem;
		border-radius: 12px !important;
		@apply !bg-gray-300/60 backdrop-blur-md hover:!bg-gray-100/80 shadow-lg shadow-black/50;
		transition: all 200ms ease-in-out;
		max-width: 100vw;
		bottom: 1.5rem !important;
		left: 1.5rem;
		border-radius: 0;
		z-index: 99999;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		@media (min-width: 640px) {
			max-width: 425px;
			bottom: 2.625rem;
			left: 1.5rem;
			border-radius: 6px;
		}
	}
	#skcm-cookie-disclaimer__body {
		h6 {
			font-size: 1.25rem;
			font-weight: 700;
			margin: 0;
			width: fit-content;
			border-bottom: 2px solid;
		}
	}
	#skcm-body {
		display: flex;
		flex-direction: column;
		gap: .5rem;
		margin: 0;
	}
	#skcm-cookie-disclaimer__buttons {
		display: flex;
		flex-direction: row-reverse;
		gap: 1rem;
		#skcm-cookie-disclaimer__buttons--allow,
		#skcm-cookie-disclaimer__buttons--reject{
			transition: all 200ms ease-in-out;
		}
		
		#skcm-cookie-disclaimer__buttons--allow{
			padding: .7rem 2rem !important;
			&:hover{ 
				@apply !bg-primary-l1;
			}
		}
		#skcm-cookie-disclaimer__buttons--reject{
			padding: .7rem 1.4rem;
			border: 2px solid transparent;
			@apply bg-transparent hover:border-primary text-primary;
		}
	}
</style>