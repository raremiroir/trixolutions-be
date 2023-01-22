<script lang="ts">
   // Import sb
   import supabase from '$src/lib/db';
   // Import i18n
	import LL from '$i18n/i18n-svelte'
   
   // Import svelte-forms-lib
   import { createForm } from 'svelte-forms-lib'
   // Import yup
   import * as yup from 'yup';
   
   // Import utils
	import { firstLetterCase, titleCase } from '$src/lib/utils';
   // Import components
   import { Button, Tooltip } from '$comp';
   import { RowWrap, ResetFormBtn, MessageSentAlert } from './FormUtils'
   import FormInput from './FormInput/index.svelte'
	import Icon from '@iconify/svelte';
   import { Confetti } from 'svelte-confetti';
   
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

      company: yup
         .string(),

      subject: yup
         .string()
         .min( 4, $LL.base.validation.field_too_short({ item: titleCase($LL.base.form.subject()), min: 4 }) )
         .max( 40, $LL.base.validation.field_too_long({ item: titleCase($LL.base.form.subject()), max: 40 }) )
         .required($LL.base.validation.required({ item: titleCase($LL.base.form.subject()) })),

      message: yup
         .string()
         .min( 10, $LL.base.validation.field_too_short({ item: titleCase($LL.base.form.message()), min: 10 }) )
         .max( 500, $LL.base.validation.field_too_long({ item: titleCase($LL.base.form.message()), max: 500 }) )
         .required( $LL.base.validation.required({ item: titleCase($LL.base.form.message()) }) )
   }

   let valSchema = yup.object().shape({
         first_name: initialValidationSchema.first_name,
         last_name: initialValidationSchema.last_name,
         email: initialValidationSchema.email,
         company: initialValidationSchema.company,
         subject: initialValidationSchema.subject,
         message: initialValidationSchema.message
      });

   let initValues = {
      first_name: "",
      last_name: "",
      email: "",
      company: "",
      subject: "",
      message: ""
   }
   
   let messageSent = false;

   const insertValues = async () => {
      const {data, error} = await supabase
         .from('contact_form_messages')
         .insert([{ 
            first_name: $form.first_name, 
            last_name: $form.last_name, 
            email: $form.email, 
            company: $form.company, 
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
         // alert(JSON.stringify(values));
         insertValues()
      }
   });

   $: formEmpty = 
            !$form.first_name && !$form.last_name
         && !$form.email && !$form.company
         && !$form.subject ? true : false
   
   $: anyEmpty = 
            !$form.first_name || !$form.last_name
         || !$form.email || !$form.subject || !$form.message ? true : false
   
   

   const resetForm = () => {
      $form.first_name = '';
      $form.last_name = '';
      $form.email = '';
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
         name="company"
         label="{titleCase($LL.base.form.company())}"
         on:change={handleChange}
         bind:value={$form.company}
         bind:errors={$errors.company}/>
   </RowWrap>
   
   <RowWrap>
      <FormInput 
         name="subject"
         label="{titleCase($LL.base.form.subject())}"
         on:change={handleChange}
         bind:value={$form.subject}
         bind:errors={$errors.subject}
         required/>
   </RowWrap>

   <RowWrap>
      <FormInput 
         textarea
         name="message"
         rows={6}
         label="{titleCase($LL.base.form.message())}"
         on:change={handleChange}
         bind:value={$form.message}
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