<script lang="ts">
	import type { ChosenInputs, SelectOption } from "./types";
   
   import { FormBase } from "$comp";

   import { mailToAdmin } from "$lib/utils";

   export let submitText = "Sign Up for Session";
   export let sessionTitle = "Infosessie";


   export let sessions:SelectOption[] = [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "5", label: "5" },
      { value: "6", label: "6" },
      { value: "7", label: "7" },
      { value: "8", label: "8" },
      { value: "9", label: "9" },
      { value: "10", label: "10" },
      { value: "11", label: "11" },
      { value: "12", label: "12" },
      { value: "13", label: "13" },
      { value: "14", label: "14" },
   ]

   let inputItems: ChosenInputs = {
      name: { enabled: true, required: true },
      email: { enabled: true, required: true },
      phone: { enabled: true, required: false },
      company: { enabled: true, required: true },
      session_picked: { 
         enabled: true, required: true,
         options: [] 
      },
      subject: { enabled: true, required: false },
      message: { enabled: true, required: false, rows: 6 }
   }

   sessions.forEach(session => {
      inputItems.session_picked?.options.push(session);
   })
</script>

<FormBase 
   {inputItems} {submitText}
   submitAction={(values) => {
      const subject = `Trixolutions.be: Inschrijving voor ${sessionTitle} - ${values.first_name} ${values.last_name}`;
      const message = `
         <b><i>${values.first_name} ${values.last_name} wilt zich graag inschrijven voor een ${sessionTitle}:</i></b><br/>
         Voornaam: <b>${values.first_name}</b><br/>
         Achternaam: <b>${values.last_name}</b><br/>
         E-mail: <b>${values.email}</b><br/>
         Bedrijf: <b>${values.company}</b><br/>
         ${ values.company ? `Telefoon: <b>${values.phone}</b><br/>` : '' }
         Datum sessie: <b>${values.session_picked}</b><br/>
         <h2>${values.subject}</h2>
         <hr/>
         <p>${values.message}</p>
         <br/>
         <hr/>
         <i>
            Dit bericht werd automatisch verzonden vanaf <a href="https://trixolutions.be">Trixolutions.be</a>.<br/>
            Om te reageren op de verzender, dien je een aparte email naar zijn/haar e-mailadres te sturen.
         </i>`;
      mailToAdmin({ subject, message });
   }}
/>