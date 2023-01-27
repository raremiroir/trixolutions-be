<script lang="ts">
   import { Turnstile } from 'svelte-turnstile'
   import type { TurnstileSize } from 'svelte-turnstile'

   import {
      VITE_TURNSTILE_SITEKEY
   } from '$env/static/public'


   // String that can be used to differentiate widgets, returned on validation
   export let action = ''

   // Size of the widget (normal | compact)
   export let size:TurnstileSize = 'normal'

   // if true the response token will be a property on the form data 
   export let forms = true;
   // the name of the input which will appear on the form data
   export let formsField = 'captcha-response'

   

</script>

<Turnstile 
   siteKey={VITE_TURNSTILE_SITEKEY}
   {size} {action}
   {forms} {formsField}
/>