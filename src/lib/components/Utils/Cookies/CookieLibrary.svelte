<script lang="ts">

   import { CookieLibrary } from '@boxfish-studio/sveltekit-cookie-manager'
   import type { SKCMConfiguration } from '@boxfish-studio/sveltekit-cookie-manager'

   const configuration: SKCMConfiguration = {
		theme: {
			primary: '#14cabf',
			dark: '#131f37',
			medium: '#b0bfd9',
			light: '#fff'
		}
   }

</script>

<CookieLibrary {configuration} />