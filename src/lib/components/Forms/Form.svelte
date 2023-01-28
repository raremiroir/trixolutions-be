<script lang="ts">
   // Import components
	import { Button, Captcha, Tooltip } from "$comp";
	import { MessageSentAlert, RowWrap } from "./FormUtils";
   import FormInput from './FormInput/index.svelte'
   import { Confetti } from 'svelte-confetti';

   // Import form utils
   import { createForm } from "svelte-forms-lib";
   import * as yup from 'yup';
   // Import i18n
   import LL from "$i18n/i18n-svelte";
   // Import db
   import supabase from "$lib/db";
   // Import utils
	import { firstLetterCase, titleCase } from "$lib/utils";
	import { fade } from "svelte/transition";


   // Define form type (contact | session_sub)
   export let formType = 'session_sub'
   // Define session type IF form type = session_sub (info_session | level_1_basic | level_1_full | level_2)
   export let sessionType = ''

   // Define text to display on button for submit
   export let submitText = 'submit form'

   // Get sessions to display
   export let sessionDates:any = ['1/1/2023'];
   // Create variable to eventually store picked session
   let pickedSession = '';

   // Define variables
      let first_name = yup
         .string()
         .min( 2, $LL.base.validation.field_too_short({ item: titleCase($LL.base.form.first_name()), min: 2 }) )
         .matches( /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/u, { excludeEmptyString: true, message: $LL.base.validation.only_alpha({ item: titleCase($LL.base.form.first_name()) }) } )
         .required($LL.base.validation.required({ item: titleCase($LL.base.form.first_name()) }));

      let last_name = yup
         .string()
         .min( 3, $LL.base.validation.field_too_short({ item: titleCase($LL.base.form.last_name()), min: 3 }) )
         .matches(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{1,}$/u, { excludeEmptyString: true, message: $LL.base.validation.only_alpha({ item: titleCase($LL.base.form.last_name()) }) } )
         .required($LL.base.validation.required({ item: titleCase($LL.base.form.last_name()) }));

      let email = yup
         .string()
         .email($LL.base.validation.email_error())
         .required($LL.base.validation.required({ item: titleCase($LL.base.form.email()) }));

      let phone_number = yup
         .string()
         // .matches( /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/, $LL.base.validation.default_fixed({ item: $LL.base.form.telephone()}))
         // .required($LL.base.validation.required({ item: titleCase($LL.base.form.telephone()) }));

      let company = yup.string();
      if (formType === 'session_sub') {
         company = yup
            .string()
            .required($LL.base.validation.required({ item: titleCase($LL.base.form.company()) }));
      }

      let session_picked = yup
         .string()
         .required( firstLetterCase( $LL.base.form.pick_session({ session: (sessionType === 'info_session' ? $LL.sessions.info.single() : $LL.sessions.level_2.workshop()) }) ) );

      let subject = yup
         .string()
         .min( 4, $LL.base.validation.field_too_short({ item: titleCase($LL.base.form.subject()), min: 4 }) )
         .max( 80, $LL.base.validation.field_too_long({ item: titleCase($LL.base.form.subject()), max: 80 }) )
         .required($LL.base.validation.required({ item: titleCase($LL.base.form.subject()) }));

      let message = yup
         .string()
         .min( 5, $LL.base.validation.field_too_short({ item: titleCase($LL.base.form.message()), min: 5 }) )
         .max( 500, $LL.base.validation.field_too_long({ item: titleCase($LL.base.form.message()), max: 500 }) )
         .required( $LL.base.validation.required({ item: titleCase($LL.base.form.message()) }) );

   // Create object with initial values for each field
   let initValues = {
         first_name: "",
         last_name: "",
         email: "",
         company: "",
         phone_number: "",
         session_picked: "",
         subject: "",
         message: ""
      }

   let validationSchema:any;
   // Create initial validation schema
   $: if (formType === 'session_sub' && sessionType !== 'level_1_basic') {
      validationSchema = yup.object().shape({ 
         first_name: first_name,
         last_name: last_name,
         email: email,
         company: company,
         phone_number: phone_number,
         session_picked: session_picked,
         subject: subject,
         message: message
      })
   } else if (formType === 'session_sub' && sessionType === 'level_1_basic') {
      validationSchema = yup.object().shape({ 
         first_name: first_name,
         last_name: last_name,
         email: email,
         company: company,
         phone_number: phone_number,
         subject: subject,
         message: message
      })
   } else if (formType === 'contact') {
      validationSchema = yup.object().shape({
         first_name: first_name,
         last_name: last_name,
         email: email,
         company: company,
         subject: subject,
         message: message
      });
   }
   
   // Add variable which stores whether a msg has been sent or not
   let messageSent = false

   // Function to insert values to db (depending on formType)
   const insertValues = async() => {
      if (formType === 'session_sub') {
         const { data, error } = await supabase
            .from('session_subscriptions')
            .insert([{
               session: pickedSession,
               email: $form.email,
               first_name: $form.first_name,
               last_name: $form.last_name,
               company: $form.company,
               phone: $form.phone_number,
               subject: $form.subject,
               message: $form.message,
            }])
         if (error) throw new Error(error.message);
         messageSent = true;
         return data;
      } else if (formType === 'contact') {
         const { data, error } = await supabase
            .from('contact_form_messages')
            .insert([{
               first_name: $form.first_name,
               last_name: $form.last_name,
               email: $form.email,
               company: $form.company,
               subject: $form.subject,
               message: $form.message,
            }])
         if (error) throw new Error(error.message);
         messageSent = true;
         return data;
      }
   }

   // Create form
   const {
      form, errors, state, isValid,
      isSubmitting, isValidating,
      handleChange, handleSubmit
   } = createForm({
      initialValues: initValues,
      validationSchema: validationSchema,
      onSubmit: values => {
         if (sessionType === 'info_session') { pickedSession = `info_${$form.session_picked}` }
         else if (sessionType === 'level_1_basic') { pickedSession = `lvl1_basic` }
         else if (sessionType === 'level_1_full') { pickedSession = `lvl1_${$form.session_picked}` }
         else if (sessionType === 'level_2') { pickedSession = `lvl2_${$form.session_picked}` }
         else { pickedSession = '' }
         // alert(JSON.stringify(values));
         insertValues()
      }
   })

   // Check if form is empty or not and handle automatic fields when formType = session_sub
   let formEmpty = false;
   let anyEmpty = false;

   $: if (formType === 'session_sub' && sessionType !== 'level_1_basic'
         && !$form.first_name && !$form.last_name
         && !$form.email && !$form.company 
         && !$form.session_picked
         && !$form.subject && !$form.message) {
      formEmpty = true;
   } else if (formType === 'session_sub' && sessionType === 'level_1_basic'
            && !$form.first_name && !$form.last_name
            && !$form.email && !$form.company 
            && !$form.subject && !$form.message) {
      formEmpty = true;
   } else if (formType === 'contact'
            && !$form.first_name && !$form.last_name
            && !$form.email && !$form.company
            && !$form.subject && !$form.message) {
      formEmpty = true;
   } else {
      formEmpty = false;
      if (formType === 'session_sub') {
         $form.message = 
            $LL.base.form.sessions.subscribe_message.intro(
               { session: (
                  sessionType === 'info_session' ? `${$LL.base.word.an()} ${$LL.sessions.info.single()}`
                  : sessionType === 'level_1_basic' ? `${$LL.sessions.level_1.the_traject()} ${$LL.sessions.level_1.basic.title()} ${$LL.sessions.level_1.two_day()}` 
                  : sessionType === 'level_1_full' ? `${$LL.sessions.level_1.the_traject()} ${$LL.sessions.level_1.full.title()} ${$LL.sessions.level_1.two_day()}`
                  : sessionType === 'level_2' ? `${$LL.sessions.level_2.a_deepdive()} (${$LL.sessions.level_2.advanced_coaching()} - ${$LL.sessions.level_2.level2()})`
                  : `${$LL.base.word.an()} ${$LL.sessions.level_2.workshop()}`) })
          + `${$form.first_name !== '' ? $LL.base.form.sessions.subscribe_message.name({ name: $form.first_name }) : ''}` 
          + `${$form.last_name !== '' ? ` ${$form.last_name}.\n` : ''}` 
          + `${sessionType !== 'level_1_basic' ? $form.session_picked !== '' ? $LL.base.form.sessions.subscribe_message.session_picked({ session: sessionType === 'info_session' ? $LL.sessions.info.single() : $LL.sessions.level_2.workshop(), date_picked: $form.session_picked }) : '' : ''}`
          + `${$form.email !== '' ? $LL.base.form.sessions.subscribe_message.email({ email: $form.email }) : ''}`
          + `${$form.company !== '' ? $LL.base.form.sessions.subscribe_message.company({ company: $form.company }) : ''}` 
          + `${$form.phone_number !== '' ? $LL.base.form.sessions.subscribe_message.phone({ phone: $form.phone_number }) : ''}` 
          +  $LL.base.form.sessions.subscribe_message.regards() 
          + `${$form.first_name !== '' ? `${$form.first_name}` : ''}` 
          + `${$form.last_name !== '' ? ` ${$form.last_name}` : ''}`

          $form.subject = $form.first_name !== '' && $form.last_name !== '' 
            ? $LL.base.form.sessions.subscribe_message.subject({name: `${$form.first_name} ${$form.last_name}`, session: (
            sessionType === 'info_session' 
            ? `${$LL.base.word.an()} ${$LL.sessions.info.single()}` 
            : sessionType === 'level_1_basic' 
            ? `${$LL.sessions.level_1.the_traject()} ${$LL.sessions.level_1.basic.title()} ${$LL.sessions.level_1.two_day()}`
            : sessionType === 'level_1_full' 
            ? `${$LL.sessions.level_1.the_traject()} ${$LL.sessions.level_1.full.title()} ${$LL.sessions.level_1.two_day()}`
            : sessionType === 'level_2' 
            ? `${$LL.sessions.level_2.a_deepdive()} (${$LL.sessions.level_2.level2()})`
            : $LL.sessions.level_2.workshop())}) 
         : '';
      }
   } 
   
   $: anyEmpty = formType === 'session_sub' && sessionType !== 'level_1_basic'
               && (!$form.first_name || !$form.last_name
               || !$form.email || !$form.company || !$form.session_picked
               || !$form.subject || !$form.message)
               ? true 
               : formType === 'session_sub' && sessionType === 'level_1_basic'
               && (!$form.first_name || !$form.last_name
               || !$form.email || !$form.company
               || !$form.subject || !$form.message)
               ? true
               : formType === 'contact'
               && (!$form.first_name || !$form.last_name
                  || !$form.email || !$form.subject || !$form.message)
                  ? true
               : false;
      
   // $: console.log($form);
   // $: console.log('formEmpty: ', formEmpty);
   // $: console.log('anyEmpty: ', anyEmpty);

   // Reset form function
   const resetForm = () => {
      if (formType === 'session_sub') {
         $form.phone_number = '';
         if (sessionType !== 'level_1_basic') {
            $form.session_picked = '';
         }
      }
      $form.first_name = '';
      $form.last_name = '';
      $form.email = '';
      $form.company = '';
      $form.subject = '';
      $form.message = '';
      messageSent = false;
   }

</script>



<form 
   on:submit={handleSubmit}
   class="flex flex-col gap-2 overflow-y-hidden">

      <RowWrap>
         <FormInput 
            name="first_name"
            label="{titleCase($LL.base.form.first_name())}"
            on:change={handleChange}
            bind:value={$form.first_name}
            bind:errors={$errors.first_name}
            required/>
      
         <FormInput 
            name="last_name"
            label="{titleCase($LL.base.form.last_name())}"
            on:change={handleChange}
            bind:value={$form.last_name}
            bind:errors={$errors.last_name}
            required/>
      </RowWrap>

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

      {#if formType === 'session_sub'}
         <RowWrap>
            <FormInput 
               name="phone_number"
               label="{titleCase($LL.base.form.telephone())}"
               on:change={handleChange}
               bind:value={$form.phone_number}
               bind:errors={$errors.phone_number}/>
         </RowWrap>
      {/if}

      <RowWrap>
         <FormInput 
            name="company"
            label="{titleCase($LL.base.form.company())}"
            on:change={handleChange}
            bind:value={$form.company}
            bind:errors={$errors.company}
            required={ formType === 'session_sub' }/>
      </RowWrap>

      {#if formType === 'session_sub' && sessionType !== 'level_1_basic' }
         <RowWrap>
            <FormInput 
               select
               name="session_picked"
               label="{titleCase($LL.base.form.pick_session({ session: sessionType === 'info_session' ? $LL.sessions.info.single() : $LL.sessions.workshop()}))}"
               on:change={handleChange}
               bind:value={$form.session_picked}
               bind:errors={$errors.session_picked}
               required>
               {#each sessionDates as session}
                  <option value={session}>{session}</option>
               {/each}
            </FormInput>
         </RowWrap>
      {/if}

      <RowWrap>
         <FormInput 
            name="subject" 
            automatic={ formType === 'session_sub' } 
            noClear={ formType === 'session_sub' }
            label="{titleCase($LL.base.form.subject())}"
            on:change={handleChange}
            value={$form.subject}
            bind:errors={$errors.subject}
            required/>
      </RowWrap>
   
      <RowWrap>
         <FormInput 
            textarea 
            automatic={ formType === 'session_sub' } 
            noClear={ formType === 'session_sub' }
            noResize
            name="message"
            rows={6}
            label="{titleCase($LL.base.form.message())}"
            on:change={handleChange}
            value={$form.message}
            bind:errors={$errors.message}
            required/>
      </RowWrap>

      <!-- <Captcha/> -->

   <div class="flex flex-row w-full justify-between items-center mt-4">
      <!-- Submit Button -->
      <div class="w-1/2 h-fit">
         <Tooltip 
            title={!$isValid || anyEmpty
                     ? $LL.base.form.content.fill_out_all() 
                     :  firstLetterCase($LL.base.form.content.send_msg())} 
            color={!$isValid || formEmpty ? 'error' : 'primary'}
            placement="{!$isValid || formEmpty ? 'left-0 bottom-12' : '-right-32 bottom-2'}"
            flyY={!$isValid || formEmpty ? 12 : 0} flyX={!$isValid || formEmpty ? 0 : -16}>
            <Button 
               ariaLabel={submitText}
               disabled={!$isValid || anyEmpty} 
               type="submit">
               {#if $isSubmitting}
                  <Confetti amount={70} x={[-0.5, 0.5]} y={[-0.5, -0.5]} colorArray={["#0b3259", "#fb5607", "#195693", "#d1d1ce", "#3a86ff"]} />
               {/if}
               {submitText}
            </Button>
         </Tooltip>
      </div>
      {#if messageSent}
         <div class="w-full" transition:fade={{duration: 200}}>
            <MessageSentAlert resetForm={() => resetForm()} />
         </div>
      {/if}
   </div>
</form>