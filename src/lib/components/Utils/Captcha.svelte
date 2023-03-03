<script lang="ts">
   import { Turnstile } from 'svelte-turnstile'
   import type { TurnstileSize } from 'svelte-turnstile'


   import { PUBLIC_TURNSTILE_SITEKEY } from '$env/static/public'
   const key = PUBLIC_TURNSTILE_SITEKEY;


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
   siteKey={key}
   {size} {action}
   {forms} {formsField}
   theme="light"
/>