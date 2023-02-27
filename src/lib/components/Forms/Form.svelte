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
   import LL, { locale } from "$i18n/i18n-svelte";
   // Import db
   import supabase from "$lib/db";
   // Import utils
	import { 
      firstLetterCase, titleCase, 
      mailToAdmin,
      dbInsert 
   } from "$utils";
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
      // let first_name: yup.StringSchema = createYupSchema('First Name', {required: true, min: 2, max: 40 });
      let first_name = yup.string().required().min(2).max(40);
      let last_name: yup.StringSchema = createYupSchema('Last Name', { required: true, min: 3, max: 60 });
      let email: yup.StringSchema = createYupSchema('Email', { required: true, email: true });
      let phone_number: yup.StringSchema = createYupSchema('Phone Number', { required: true });
      let company: yup.StringSchema = createYupSchema('Company', {required: true, min: 2, max: 80});
      
      let session_picked = yup
      .string()
      .required( firstLetterCase( $LL.base.form.pick_session({ session: (sessionType === 'info_session' ? $LL.sessions.info.single() : $LL.sessions.level_2.workshop()) }) ) );
      
      let subject: yup.StringSchema = createYupSchema('Subject', { required: true, min: 4, max: 50});
      let message: yup.StringSchema = createYupSchema('Message', { required: true, min: 10, max: 1000});

      console.log(session_picked, subject)

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

         const data = dbInsert(
            'session_subscriptions',
            {
               session: pickedSession,
               email: $form.email,
               first_name: $form.first_name,
               last_name: $form.last_name,
               company: $form.company,
               phone: $form.phone_number,
               subject: $form.subject,
               message: $form.message,
            }
         )
         messageSent = true;
         return data;

      } else if (formType === 'contact') {

         const data = dbInsert(
            'contact_form_messages',
            {
               first_name: $form.first_name,
               last_name: $form.last_name,
               email: $form.email,
               company: $form.company,
               subject: $form.subject,
               message: $form.message,
            }
         )

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
         // sendMessage(`${$form.first_name} ${$form.last_name}`, $form.email, $form.subject, $form.message);

         const data = { subject: $form.subject, message: $form.message };
         insertValues()
         // sendMessage(data);
         mailToAdmin(data);

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


{#if messageSent}
   <div class="w-full" transition:fade={{duration: 200}}>
      <MessageSentAlert resetForm={() => resetForm()} />
   </div>
{:else}
   <form 
      transition:fade={{duration: 200}}
      on:submit|preventDefault={handleSubmit}
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
                  label="{titleCase($LL.base.form.pick_session())}"
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
   </form>
{/if}