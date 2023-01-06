<script lang="ts">
   // Import svelte-forms-lib
   import { createForm } from 'svelte-forms-lib'
   // Import yup
   import * as yup from 'yup';

   import { _ } from 'svelte-i18n';

   // Import components
   import { Button } from "$comp/core";
   import { Tooltip } from '$comp/common';
   import { Input, RowWrap } from './Input/input'
	import Icon from '@iconify/svelte';

   let schema = yup.object().shape({
         first_name: yup
            .string()
            .min(2, $_('base.validation.field_too_short', {  min: '2' }))
            .required($_('base.validation.required')),
         last_name: yup
            .string()
            .min(3)
            .required(),
         email: yup
            .string()
            .email()
            .required(),
         company: yup
            .string(),
         subject: yup
            .string()
            .min(4)
            .max(40)
            .required(),
         // message: yup.string().min(10).max(500).required()
      });

   let initValues = {
      first_name: "",
      last_name: "",
      email: "",
      company: "",
      subject: "",
      // message: ""
   }

   const { 
      form, errors, state, isValid,
      isSubmitting, isValidating, 
      handleChange, handleSubmit 
   } = createForm({
      initialValues: initValues,
      validationSchema: schema,
      onSubmit: values => {
         alert(JSON.stringify(values));
      }
   });

   $isValid;
</script>

<form on:submit={handleSubmit}
      class="flex flex-col gap-2">

   <RowWrap>
      <Input 
         name="first_name"
         label="First Name"
         on:change={handleChange}
         bind:value={$form.first_name}
         bind:errors={$errors.first_name}
         required/>
   
      <Input 
         name="last_name"
         label="Last Name"
         on:change={handleChange}
         bind:value={$form.last_name}
         bind:errors={$errors.last_name}
         required/>
   </RowWrap>
   
   <RowWrap>
      <Input 
         name="email"
         label="Email"
         type="email"
         on:change={handleChange}
         bind:value={$form.email}
         bind:errors={$errors.email}
         required/>
   
      <Input 
         name="company"
         label="Company"
         on:change={handleChange}
         bind:value={$form.company}
         bind:errors={$errors.company}/>
   </RowWrap>
   
   <RowWrap>
      <Input 
         name="subject"
         label="Subject"
         on:change={handleChange}
         bind:value={$form.subject}
         bind:errors={$errors.subject}
         required/>
   </RowWrap>

   <div class="flex flex-row w-full justify-between mt-4">
      <div class="w-fit h-fit">
         <Tooltip 
            title={!$isValid 
                     ? 'Please fill out everything correctly before sending the message.' 
                     :  'Send message'} 
            color={!$isValid ? 'error' : 'primary'}
            placement="bottom-2 {!$isValid ? '-right-92' : '-right-26'}"
            flyY={0} flyX={-16}>
            <Button 
               disabled={!$isValid} 
               type="submit">
               Send Message
            </Button>
         </Tooltip>
      </div>
   </div>

</form>