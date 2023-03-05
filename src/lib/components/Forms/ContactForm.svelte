<script lang="ts">
	import type { ChosenInputs } from "./types";
   
   import { FormBase } from "$comp";

   import { mailToAdmin, validateTurnstile } from "$lib/utils";

   let inputItems: ChosenInputs = {
      name: { enabled: true, required: true },
      email: { enabled: true, required: true },
      company: { enabled: true, required: false },
      subject: { enabled: true, required: true },
      message: { enabled: true, required: true, rows: 6 },
      accept_terms: { enabled: true, required: true },
      turnstile_response: { enabled: true, required: true },
   }
</script>

<FormBase 
   {inputItems}
   submitText="Send Message"
   submitAction={(values) => {

      const subject = `Trixolutions.be: Nieuw bericht van ${values.first_name} ${values.last_name} - ${values.subject}`;
      const message = `
         <b><i>Nieuw bericht van:</i></b><br/>
         Voornaam: <b>${values.first_name}</b><br/>
         Achternaam: <b>${values.last_name}</b><br/>
         E-mail: <b>${values.email}</b><br/>
         ${ values.company ? `Bedrijf: <b>${values.company}</b><br/>` : '' }
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