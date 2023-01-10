<script lang="ts">
   // Import svelte-forms-lib
   import { createForm } from 'svelte-forms-lib'
   // Import yup
   import * as yup from 'yup';
	import LL from '$i18n/i18n-svelte'

   // Import components
   import { Confetti } from 'svelte-confetti';
   import { Button, Loading } from "$comp/core";
   import { Tooltip } from '$comp/common';
   import { FormInput, RowWrap } from './Input/input'
	import Icon from '@iconify/svelte';
	import { firstLetterCase, formatMonthShort, titleCase } from '$src/lib/utils';
	import Alert from '../Common/Alert.svelte';
	import ResetFormBtn from './Input/ResetFormBtn.svelte';
	import MessageSentAlert from './Input/MessageSentAlert.svelte';
	import supabase from '$src/lib/db';


   // Pick session type
   // -- info_session - level_1_basic - level_1_full - level_2
   export let sessionDates:any = []
   export let session = "info"

   let sessionType = '';

   // Define validation schema
   const initialValidationSchema = {
      first_name: yup
         .string()
         .min( 2, $LL.base.validation.field_too_short({ item: titleCase($LL.base.form.first_name()), min: 2 }) )
         .matches( /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/u, { excludeEmptyString: true, message: $LL.base.validation.only_alpha({ item: titleCase($LL.base.form.first_name()) }) } )
         .required($LL.base.validation.required({ item: titleCase($LL.base.form.first_name()) })),

      last_name: yup
         .string()
         .min( 3, $LL.base.validation.field_too_short({ item: titleCase($LL.base.form.last_name()), min: 3 }) )
         .matches(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/u, { excludeEmptyString: true, message: $LL.base.validation.only_alpha({ item: titleCase($LL.base.form.last_name()) }) } )
         .required($LL.base.validation.required({ item: titleCase($LL.base.form.last_name()) })),

      email: yup
         .string()
         .email($LL.base.validation.email_error())
         .required($LL.base.validation.required({ item: titleCase($LL.base.form.email()) })),

      phone_number: yup
         .string(),
         // .matches( /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/, 'phone number not valid')

      company: yup
         .string()
         .required($LL.base.validation.required({ item: titleCase($LL.base.form.company()) })),

      session_picked: yup
         .string()
         .required( firstLetterCase( $LL.base.form.pick_session({ session: (session === 'info' ? $LL.sessions.info.single() : $LL.sessions.level_2.workshop()) }) ) ),

      subject: yup
         .string()
         .required($LL.base.validation.required({ item: titleCase($LL.base.form.subject()) })),
         
         message: yup
         .string()
         .required($LL.base.validation.required({ item: titleCase($LL.base.form.message()) }))
   }

   
   let valSchema = yup.object().shape({
         first_name: initialValidationSchema.first_name,
         last_name: initialValidationSchema.last_name,
         email: initialValidationSchema.email,
         company: initialValidationSchema.company,
         phone_number: initialValidationSchema.phone_number,
         session_picked: initialValidationSchema.session_picked,
         subject: initialValidationSchema.subject,
         message: initialValidationSchema.message
      });

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
   
   let messageSent = false;

   const insertValues = async () => {
      const {data, error} = await supabase
         .from('session_subscriptions')
         .insert([{ 
            session: sessionType,
            email: $form.email, 
            first_name: $form.first_name, 
            last_name: $form.last_name, 
            company: $form.company, 
            phone: $form.phone_number,
            subject: $form.subject, 
            message: $form.message, 
         },]);

      if (error) throw new Error(error.message);
      
      messageSent = true;
      return data;
   }

   const { 
      form, errors, state, isValid,
      isSubmitting, isValidating, 
      handleChange, handleSubmit 
   } = createForm({
      initialValues: initValues,
      validationSchema: valSchema,
      onSubmit: values => {
         if (session === 'info_session') {
            sessionType = `info_${$form.session_picked}`
         } else if (session === 'level_1_basic') {
            sessionType = `lvl1_basic`
         } else if (session === 'level_1_full') {
            sessionType = `lvl1_${$form.session_picked}`
         } else if (session === 'level_2') {
            sessionType = `lvl2_${$form.session_picked}`
         } else {
            sessionType = 'error in handling form. try again later';
            // console.log(session);
         }
         // alert(JSON.stringify(values));
         // alert(sessionType);
         insertValues()
      }
   });

   let formEmpty = false;
   $: if (!$form.first_name && !$form.last_name
         && !$form.email && !$form.company 
         && !$form.phone_number && !$form.session_picked
         && !$form.subject && !$form.message) {
         formEmpty = true;
      } else {
         formEmpty = false;
         $form.message = 
            $LL.base.form.sessions.subscribe_message.intro({ session: (session === 'info' ? $LL.sessions.info.single() : $LL.sessions.level_2.workshop()) })
          + `${$form.first_name !== '' ? $LL.base.form.sessions.subscribe_message.name({ name: $form.first_name }) : ''}` 
          + `${$form.last_name !== '' ? ` ${$form.last_name}.\n` : ''}` 
          + `${$form.session_picked !== '' ? $LL.base.form.sessions.subscribe_message.session_picked({ session: session === 'info' ? $LL.sessions.info.single() : $LL.sessions.level_2.workshop(), date_picked: $form.session_picked }) : ''}`
          + `${$form.email !== '' ? $LL.base.form.sessions.subscribe_message.email({ email: $form.email }) : ''}`
          + `${$form.company !== '' ? $LL.base.form.sessions.subscribe_message.company({ company: $form.company }) : ''}` 
          + `${$form.phone_number !== '' ? $LL.base.form.sessions.subscribe_message.phone({ phone: $form.phone_number }) : ''}` 
          +  $LL.base.form.sessions.subscribe_message.regards() 
          + `${$form.first_name !== '' ? `${$form.first_name}` : ''}` 
          + `${$form.last_name !== '' ? ` ${$form.last_name}` : ''}` 
      } 
         
   
   $: anyEmpty = 
            !$form.first_name || !$form.last_name
         || !$form.email || !$form.company || !$form.session_picked
         || !$form.subject || !$form.message
         ? true : false
   
   $: $form.subject = $form.first_name !== '' && $form.last_name !== '' 
                        ? $LL.base.form.sessions.subscribe_message.subject({name: `${$form.first_name} ${$form.last_name}`, session: (session === 'info' ? $LL.sessions.info.single() : $LL.sessions.level_2.workshop())}) 
                        : ''

   const resetForm = () => {
      $form.first_name = '';
      $form.last_name = '';
      $form.email = '';
      $form.phone_number = '';
      $form.session_picked = '';
      $form.company = '';
      $form.subject = '';
   }
</script>


<form on:submit={handleSubmit}
      class="flex flex-col gap-2">

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

      <FormInput 
         name="phone_number"
         label="{titleCase($LL.base.form.telephone())}"
         on:change={handleChange}
         bind:value={$form.phone_number}
         bind:errors={$errors.phone_number}/>

   </RowWrap>
      
      
   <RowWrap>
      <FormInput 
         name="company"
         label="{titleCase($LL.base.form.company())}"
         on:change={handleChange}
         bind:value={$form.company}
         bind:errors={$errors.company}
         required/>

      {#if session !== 'level_1_basic'}
         <FormInput 
            select
            name="session_picked"
            label="{titleCase($LL.base.form.pick_session({ session: $LL.sessions.info.single()}))}"
            on:change={handleChange}
            bind:value={$form.session_picked}
            bind:errors={$errors.session_picked}
            required>
            {#each sessionDates as session}
               <option value={session}>{session}</option>
            {/each}
         </FormInput>
      {/if}
   </RowWrap>
   
   <RowWrap>
      <FormInput 
         name="subject" automatic
         label="{titleCase($LL.base.form.subject())}"
         on:change={handleChange}
         value={$form.subject}
         bind:errors={$errors.subject}
         required/>
   </RowWrap>

   <RowWrap>
      <FormInput 
         textarea automatic
         name="message"
         rows={6}
         label="{titleCase($LL.base.form.message())}"
         on:change={handleChange}
         value={$form.message}
         bind:errors={$errors.message}
         required/>
   </RowWrap>

   <div class="flex flex-row w-full justify-between mt-4">
      <!-- Submit Button -->
      <div class="w-fit h-fit">
         <Tooltip 
            title={!$isValid || anyEmpty
                     ? $LL.base.form.content.fill_out_all() 
                     :  firstLetterCase($LL.base.form.content.send_msg())} 
            color={!$isValid || formEmpty ? 'error' : 'primary'}
            placement="{!$isValid || formEmpty ? 'left-0 bottom-12' : '-right-32 bottom-2'}"
            flyY={!$isValid || formEmpty ? 12 : 0} flyX={!$isValid || formEmpty ? 0 : -16}>
            <Button 
               disabled={!$isValid || anyEmpty} 
               type="submit">
               {#if $isValid && !anyEmpty}
                  <Confetti amount=70 x={[-0.5, 0.5]} y={[-0.5, -0.5]} colorArray={["#0b3259", "#fb5607", "#195693", "#d1d1ce", "#3a86ff"]} />
               {/if}
               {$LL.base.form.content.send_msg()}
            </Button>
         </Tooltip>
      </div>
      {#if messageSent}
         <MessageSentAlert resetForm={() => resetForm()} />
      {/if}
      <ResetFormBtn {formEmpty} resetForm={() => resetForm()} />
   </div>

</form>