<script lang="ts">

   import { Button, Tooltip } from '$comp';
   import { RowWrap, MessageSentAlert } from '../FormUtils';
   import FormInput from '../FormInput/index.svelte'
   import { Confetti } from 'svelte-confetti'

   // Import form utils
   import { createForm } from "svelte-forms-lib";
   import * as yup from 'yup';
   // Import i18n
   import LL from "$i18n/i18n-svelte";
   // Import utils
	import { firstLetterCase, titleCase } from "$lib/utils";
	import { fade } from "svelte/transition";

   let initValues = {
      email: '',
   }
   let validationSchema = yup.object().shape({
      email: yup
         .string()
         .email($LL.base.validation.email_error())
         .required($LL.base.validation.required({ item: titleCase($LL.base.form.email()) })),
   })

   let messageSent = false;

   const subscribeMailchimp = async() => {
      let body = {
         email: $form.email
      };
      let result = await fetch('/api/registerMailchimp', {
         method: 'post',
         body: JSON.stringify(body)
      });
      const registerEmailResponse = await result.json();
      if (registerEmailResponse.status === 200) {
         $form.email = '';
      }
   }

   const {
      form, errors, state, isValid,
      isSubmitting, isValidating,
      handleChange, handleSubmit
   } = createForm({
      initialValues: initValues,
      validationSchema: validationSchema,
      onSubmit: values => {
         subscribeMailchimp()
      }
   })

   $: empty = !$form.email;
   const resetForm = () => {$form.email = ''; messageSent = false}
</script>

<div class="w-full flex items-center justify-center">
   <form on:submit|preventDefault={handleSubmit}
         class="flex flex-col gap-4 overflow-y-hidden w-3/4">
   
      <RowWrap>
         <FormInput 
               name="email"
               label="{titleCase($LL.base.form.email())}"
               type="email"
               on:change={handleChange}
               bind:value={$form.email}
               bind:errors={$errors.email}
               required/>
      </RowWrap>
   
      <RowWrap>
         <Tooltip 
            title={!$isValid || empty
                     ? $LL.base.form.content.fill_out_all() 
                     :  firstLetterCase($LL.base.form.content.send_msg())} 
            color={!$isValid || empty ? 'error' : 'primary'}
            placement="{!$isValid || empty ? 'left-0 bottom-12' : '-right-32 bottom-2'}"
            flyY={!$isValid || empty ? 12 : 0} flyX={!$isValid || empty ? 0 : -16}>
            <Button 
               ariaLabel="Subscribe to newsletter"
               disabled={!$isValid || empty} 
               type="submit">
               {#if $isSubmitting}
                  <Confetti amount={70} x={[-0.5, 0.5]} y={[-0.5, -0.5]} colorArray={["#0b3259", "#fb5607", "#195693", "#d1d1ce", "#3a86ff"]} />
               {/if}
               Subscribe to newsletter
            </Button>
         </Tooltip>
      </RowWrap>
   
   </form>
</div>