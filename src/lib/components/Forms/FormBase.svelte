<script lang="ts" context="module">
   export const validateTurnstile = async (turnstile_response:any) => {

      const turnstileData = JSON.stringify({ turnstile_response });
      let success = false;

      await fetch ('/api/turnstile', {
         method: 'POST',
         body: turnstileData,
         headers: {
            'Content-Type': 'application/json',
         }
      }).then(res => {
         success = true
      }).catch(err => {
         console.error(err);
         success = false;
      })

      return success;
   }
</script>

<script lang='ts'>
   // IMPORT TYPES
   import type { ChosenInputs } from './types'

   // IMPORT COMPONENTS
   import { Alert, Button, Captcha, Checkbox, FormInput, Tooltip } from '$comp';
	import { fade } from 'svelte/transition';
	import { MessageSentAlert, RowWrap } from './FormUtils';

   // IMPORT UTILS
   import * as yup from 'yup'
   import { createForm } from 'svelte-forms-lib';
   import { 
      firstLetterCase, isObjEmpty, isObjEmptyAny, 
      titleCase, tooltip 
   } from '$utils'
   
   // IMPORT I18N
   import LL, { locale } from '$i18n/i18n-svelte';

   export let extraSuccess = true;
   $: extraSuccess;
   let success = false;

   export let submitText = 'Submit';
   export let sessionTitle = 'Session';

   export let submitAction = (values:any) => {
      console.log(values);
   }

   export let inputItems: ChosenInputs = { 
      name: { enabled: true },
      email: { enabled: true },
      company: {
         enabled: true,
         required: false,
      },
      subject: { enabled: true },
      message: {
         enabled: true,
         automatic: true,
         rows: 6
      },
      turnstile_response: { enabled: true },
      accept_terms: { enabled: true },
   };

   $: inputItems;

   // Define formValues & initial values
   let formValues:any = {};
   let initValues:any = {};
   let requiredValues:any = [];

   // Name validation schema
   if (inputItems.name?.enabled) {
      formValues.first_name = yup.string()
         .required($LL.base.validation.required({ item: titleCase($LL.base.form.first_name()) }))
         .matches(/^[A-Za-z]+(?:['-][A-Za-z]+)*$/, $LL.base.validation.only_alpha({ item: titleCase($LL.base.form.first_name()) }))
         .min(2, $LL.base.validation.field_too_short({ item: titleCase($LL.base.form.first_name()), min: 2 }))
         .max(50, $LL.base.validation.field_too_long({ item: titleCase($LL.base.form.first_name()), max: 50 }));
      formValues.last_name = yup.string()
         .required($LL.base.validation.required({ item: titleCase($LL.base.form.last_name()) }))
         .matches(/^[A-Za-z]+(?:['-][A-Za-z]+)*$/, $LL.base.validation.only_alpha({ item: titleCase($LL.base.form.last_name()) }))
         .min(2, $LL.base.validation.field_too_short({ item: titleCase($LL.base.form.last_name()), min: 2 }))
         .max(50, $LL.base.validation.field_too_long({ item: titleCase($LL.base.form.last_name()), max: 50 }));
      
      initValues.first_name = '';
      initValues.last_name = '';
      requiredValues.push('first_name', 'last_name');
   }
   // Email validation schema
   if (inputItems.email?.enabled) {
      formValues.email = yup.string()
        .required($LL.base.validation.required({ item: titleCase($LL.base.form.email()) }))
        .email($LL.base.validation.email_error());
      
      initValues.email = '';
      requiredValues.push('email');
   }
   // Phone validation schema
   if (inputItems.phone?.enabled) {
      formValues.phone = yup.string()
         .matches(/^((\+|00)\d{1,3})?[\s.-]?\d{1,4}[\s.-]?\d{1,4}[\s.-]?\d{1,4}[\s.-]?\d{1,4}|^$/, $LL.base.validation.phone_error())
      if (inputItems.phone?.required) {
         formValues.phone = formValues.phone.required($LL.base.validation.required({ item: titleCase($LL.base.form.telephone()) }));
         requiredValues.push('phone');
      } else {
         formValues.phone = formValues.phone.optional();
      }
      initValues.phon = '';
   }
   // Company validation schema
   if (inputItems.company?.enabled) {
      formValues.company = yup.string()
         .max(50, $LL.base.validation.field_too_long({ item: titleCase($LL.base.form.company()), max: 50 }));
      if (inputItems.company.required) {
         formValues.company = formValues.company
            .min(2, $LL.base.validation.field_too_short({ item: titleCase($LL.base.form.company()), min: 2 }))
            .required($LL.base.validation.required({ item: titleCase($LL.base.form.company()) }))
         requiredValues.push('company');
      } else {
         formValues.company = formValues.company.optional();
      }
      initValues.company = '';
   }
   // Job Title validation schema
   if (inputItems.job?.enabled) {
      formValues.job = yup.string()
         .max(50, $LL.base.validation.field_too_long({ item: titleCase($LL.base.form.job()), max: 50 }));
      if (inputItems.job.required) {
         formValues.job = formValues.job
            .min(2, $LL.base.validation.field_too_short({ item: titleCase($LL.base.form.job()), min: 2 }))
            .required($LL.base.validation.required({ item: titleCase($LL.base.form.job()) }));
         requiredValues.push('job');
      } else {
         formValues.job = formValues.job.optional();
      }
      initValues.job = '';
   }
   // Session picked validation schema
   if (inputItems.session_picked?.enabled) {
      let pickedSessions:any = [];
      inputItems.session_picked.options.forEach(option => {
         pickedSessions.push(option);
      })

      formValues.session_picked = yup.string()
         .oneOf(pickedSessions, $LL.base.validation.pick_one())
         .required($LL.base.validation.required_def());
      
      initValues.session_picked = '';
      requiredValues.push('session_picked');
   }
   // Subject validation schema
   if (inputItems.subject?.enabled) {
      formValues.subject = yup.string()
         .min(4, $LL.base.validation.field_too_short({ item: titleCase($LL.base.form.subject()), min: 4 }))
         .max(50, $LL.base.validation.field_too_long({ item: titleCase($LL.base.form.subject()), max: 50 }));
      if (inputItems.subject?.required) {
         formValues.subject = formValues.subject.required($LL.base.validation.required({ item: titleCase($LL.base.form.subject()) }));
         requiredValues.push('subject');
      } else {
         formValues.subject = formValues.subject.optional();
      }
      
      initValues.subject = '';
   }
   // Message validation schema
   if (inputItems.message?.enabled) {
      formValues.message = yup.string()
         .min(5, $LL.base.validation.field_too_short({ item: titleCase($LL.base.form.message()), min: 5}))
         .max(1000, $LL.base.validation.field_too_long({ item: titleCase($LL.base.form.message()), max: 1000 }));
      if (inputItems.message?.required) {
         formValues.message = formValues.message.required($LL.base.validation.required({ item: titleCase($LL.base.form.message()) }));
         requiredValues.push('message');
      } else {
         formValues.message = formValues.message.optional();
      }
      
      initValues.message = '';
   }

   // Terms/conditions validation schema
   if (inputItems.accept_terms?.enabled) {
      formValues.accept_terms = yup.boolean()
         .oneOf([true], $LL.base.validation.terms_error({ terms: $LL.nav.others.terms_conditions.title(), policy: $LL.nav.others.privacy_policy.title() }));
      initValues.accept_terms = false;
      requiredValues.push('accept_terms');
   }

   // Language validation schema
   formValues.language = yup.string()
    .oneOf(['nl', 'fr', 'en'])
    .default(() => $locale)
    .required();
   initValues.language = $locale;
   $: $form.language = $locale;

   // Captcha validation schema
   if (inputItems.turnstile_response?.enabled) {
      formValues.turnstile_response = yup.string()
         .matches(/^.*\S.*$/, $LL.base.form.captcha());
      initValues.turnstile_response = "";
   }

   // Define validation schema
   let validationSchema = yup.object().shape({});
   Object.keys(formValues).forEach(key => {
      validationSchema = validationSchema.shape({
         [key]: formValues[key]
      })
   })
   validationSchema = validationSchema.shape({language: formValues.language})

   // Create form
   let {
      form, errors, state, isValid,
      isSubmitting, isValidating,
      handleChange, handleSubmit
   } = createForm({
      initialValues: initValues,
      validationSchema: validationSchema,
      onSubmit: async (values) => {
         try {
            const res = await validateTurnstile(values.turnstile_response);
            if (res) {
               submitAction(values);
               success = true;
            } else {
               success = false;
            }

         } catch (e) {
            success = false;
         }
      }
   })

   // $: console.log('form:', $form);
   // $: console.log('errors:', $errors);
   // $: console.log('state:', $state);
   // $: console.log('is valid:', $isValid);
   // $: console.log('is submitting:', $isSubmitting);
   // $: console.log('is validating:', $isValidating);

   export const resetForm = () => {
      Object.keys($form).forEach(key =>{
         $form[key] = '';
      })
      success = false;
   }

</script>

{#if success && extraSuccess}

   <div class="w-full" transition:fade={{duration: 200}}>
      <div 
         class="w-fit h-fit mx-auto my-0 p-0"
         on:click={() => resetForm()}
         on:keydown={() => resetForm()}>
         <slot name="success">
            <MessageSentAlert/>
         </slot>
      </div>
   </div>

{:else}
   <form
      novalidate
      transition:fade={{duration: 200}}
      on:submit={handleSubmit}
      class="flex flex-col gap-1 md:gap-2 overflow-y-hidden">
      
      <!-- Name input -->
      {#if inputItems.name}
         <RowWrap>
            <FormInput 
               name="first_name"
               label="{titleCase($LL.base.form.first_name())}"
               on:change={handleChange}
               bind:value={$form.first_name} 
               bind:errors={$errors.first_name} 
               required={inputItems.name.required}
            />
            <FormInput 
               name="last_name"
               label="{titleCase($LL.base.form.last_name())}"
               on:change={handleChange}
               bind:value={$form.last_name} 
               bind:errors={$errors.last_name} 
               required={inputItems.name.required}
            />
         </RowWrap>
      {/if}
      <!-- Email / Phone input -->
      {#if inputItems.email || inputItems.phone || (inputItems.email && inputItems.phone)}
         <RowWrap>  
            {#if inputItems.email}
               <FormInput 
                  name="email"
                  label="{titleCase($LL.base.form.email())}"
                  on:change={handleChange}
                  bind:value={$form.email} 
                  bind:errors={$errors.email} 
                  required={inputItems.email.required}
               />
            {/if}
            {#if inputItems.phone}
               <FormInput 
                  name="phone"
                  label="{titleCase($LL.base.form.telephone())}"
                  on:change={handleChange}
                  bind:value={$form.phone} 
                  bind:errors={$errors.phone} 
                  required={inputItems.phone.required}
               />
            {/if}
         </RowWrap>
      {/if}
      <!-- Company / Job input -->
      {#if inputItems.company || inputItems.job || (inputItems.company && inputItems.job)}
         <RowWrap>  
            {#if inputItems.company}
               <FormInput 
                  name="company"
                  label="{titleCase($LL.base.form.company())}"
                  on:change={handleChange}
                  bind:value={$form.company} 
                  bind:errors={$errors.company} 
                  required={inputItems.company.required}
               />
            {/if}
            {#if inputItems.job}
               <FormInput 
                  name="job"
                  label="{titleCase($LL.base.form.company())}"
                  on:change={handleChange}
                  bind:value={$form.company} 
                  bind:errors={$errors.company} 
                  required={inputItems.job.required}
               />
            {/if}
         </RowWrap>
      {/if}
      <!-- Pick sessions input -->
      {#if inputItems.session_picked}
         <RowWrap>
            <FormInput 
               select
               name="session_picked"
               label="{titleCase($LL.base.form.pick_session({session: sessionTitle}))}"
               on:change={handleChange}
               bind:value={$form.session_picked}
               bind:errors={$errors.session_picked}
               required={inputItems.session_picked.required}
            >
               {#each inputItems.session_picked.options as session}
                  <option value={session}>{session}</option>
               {/each}
            </FormInput>
         </RowWrap>
      {/if}
      <!-- Subject input -->
      {#if inputItems.subject}
         <RowWrap>
            <FormInput 
               name="subject"
               label="{titleCase($LL.base.form.subject())}"
               on:change={handleChange}
               bind:value={$form.subject} 
               bind:errors={$errors.subject} 
               required={inputItems.subject.required}
            />
         </RowWrap>
      {/if}
      <!-- Message input -->
      {#if inputItems.message}
         <RowWrap>
            <FormInput 
               textarea 
               noResize
               automatic={inputItems.message.automatic}
               noClear={inputItems.message.automatic}
               rows={inputItems.message.rows}
               name="message"
               label="{titleCase($LL.base.form.message())}"
               on:change={handleChange} 
               bind:value={$form.message}
               bind:errors={$errors.message}
               required={inputItems.message.required}
            />
         </RowWrap>
      {/if}

      <!-- Accept Terms/Conditions -->
      {#if inputItems.accept_terms}
         <RowWrap>
            <Checkbox 
               name="gdpr"
               on:change={handleChange}
               bind:checked={$form.accept_terms}
               bind:errors={$errors.accept_terms}
               required
            >{$LL.base.form.check_terms({ terms: $LL.nav.others.terms_conditions.title(), policy: $LL.nav.others.privacy_policy.title() })}
            </Checkbox>
         </RowWrap>
      {/if}

      <!-- Locale -->
      <FormInput 
         type="hidden"
         name="language"
         label=""
         on:change={handleChange}
         bind:value={$form.language}
         bind:errors={$errors.language}
         required
      />
      
      <!-- Turnstile Validation -->
      <RowWrap>
         <Captcha 
            on:change={handleChange}
            bind:errors={$errors.turnstile_response} 
            bind:turnstileResponse={$form.turnstile_response} />
      </RowWrap>

      <!-- Errors -->
      <slot name="errors" />


      <div class="flex flex-row w-full justify-between items-center mt-4">
         <Button
            ariaLabel={submitText}
            type="submit">
            {submitText}
         </Button>
      </div>

   </form>
{/if}
