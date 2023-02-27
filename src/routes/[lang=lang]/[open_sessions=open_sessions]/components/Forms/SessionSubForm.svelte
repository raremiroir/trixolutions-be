<script lang="ts">
	import type { ChosenInputs } from "$comp/Forms/types";
   
   import { FormBase } from "$comp";

   import { mailToAdmin } from "$lib/utils";

   export let submitText = "Sign Up for Session";
   export let sessionTitle = "Infosessie";


   export let sessions = [ "01/01/1900", "01/01/2000" ]

   let inputItems: ChosenInputs = {
      name: { enabled: true, required: true },
      email: { enabled: true, required: true },
      phone: { enabled: true, required: false },
      company: { enabled: true, required: true },
      session_picked: { 
         enabled: true, required: true,
         options: sessions 
      },
      subject: { enabled: true, required: false },
      message: { enabled: true, required: false, rows: 6 }
   }
</script>

<FormBase 
   {inputItems} {submitText} {sessionTitle}
   submitAction={(values) => {
      const subject = `Trixolutions.be: Inschrijving voor ${sessionTitle} - ${values.first_name} ${values.last_name}`;
      const message = `
         <h4><i><b>${values.first_name} ${values.last_name}</b> wilt zich graag inschrijven voor een <b>${sessionTitle}</b> op <b>${values.session_picked}</b>:</i></h4><br/>
         Taal: <b></b><br/>
         Voornaam: <b>${values.first_name}</b><br/>
         Achternaam: <b>${values.last_name}</b><br/>
         E-mail: <b>${values.email}</b><br/>
         Bedrijf: <b>${values.company}</b><br/>
         ${ values.company ? `Telefoon: <b>${values.phone}</b><br/>` : '' }
         Datum sessie: <b>${values.session_picked}</b><br/>
         <hr/>
         <h3>${values.subject}</h3>
         <p>${values.message}</p>
         <br/>
         <hr/>
         <i><small>
            Dit bericht werd automatisch verzonden vanaf <a href="https://trixolutions.be">Trixolutions.be</a>.<br/>
            Om te reageren op de verzender, dien je een aparte email naar zijn/haar e-mailadres te sturen.
         </small></i>`;
      mailToAdmin({ subject, message });
   }}
/>