<script lang="ts">
   import type { ChosenInputs } from "../types"

   import { Alert, FormBase, MessageSentAlert } from "$comp"

   import LL from "$i18n/i18n-svelte";

   import { registerMailchimp } from '$utils'
	import type { Locale } from "typesafe-i18n/types/runtime/src/core.mjs";
	import { fade } from "svelte/transition";

   let inputItems: ChosenInputs = {
      name: { enabled: true, required: true },
      email: { enabled: true, required: true }
   }

   let message = ''
   let error = ''
   const register = async (first_name:string, last_name:string, email:string, lang:Locale) => {
      try {
         const res = await registerMailchimp({ first_name, last_name, email, lang });
         const data:any = await res.data;
         if (data.success) {
            message = $LL.base.newsletter.success.subscribed({ name: first_name });
         } else {
            error = `${JSON.parse(data.data.response.text).detail}`;

            if (error.includes("already a list member")) {
               error = $LL.base.newsletter.validation.already_member({email: email});
            } else if (error.includes("looks fake or invalid")) {
               error = $LL.base.newsletter.validation.looks_invalid({email: email});
            }
         }
      } catch (err:any) {
         error = $LL.base.newsletter.validation.failed();
         ;
      }
   }
   $: message;
   $: error;
</script>

<FormBase
   {inputItems} extraSuccess={message !== ''}
   submitText={$LL.base.newsletter.btn()}
   submitAction={(values) => {
      const first_name = values.first_name;
      const last_name = values.last_name;
      const email = values.email;
      const lang = values.language;
      register(first_name, last_name, email, lang);
   }}
>
   <MessageSentAlert slot="success">
      {message}
   </MessageSentAlert>

   <div slot="errors" class="">
      {#if error !== ''}
         <span
            class="text-error font-bold italic text-md" 
            transition:fade={{duration: 200}}>
               {error}
         </span>
      {/if}
   </div>
</FormBase>