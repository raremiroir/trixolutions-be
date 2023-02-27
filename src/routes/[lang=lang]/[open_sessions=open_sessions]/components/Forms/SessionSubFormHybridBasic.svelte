<script lang="ts">
	import type { ChosenInputs } from "$comp/Forms/types";
   
   import { FormBase } from "$comp";

   import { mailToAdmin } from "$lib/utils";
   import LL from "$i18n/i18n-svelte";

   let inputItems: ChosenInputs = {
      name: { enabled: true, required: true },
      email: { enabled: true, required: true },
      phone: { enabled: true, required: false },
      company: { enabled: true, required: true },
      subject: { enabled: true, required: false },
      message: { enabled: true, required: false, rows: 6 }
   }
</script>

<FormBase 
   {inputItems} 
   submitText="{$LL.base.btn.sign_up()}"
   sessionTitle="{$LL.sessions.level_1.traject()} {$LL.base.word.without()} {$LL.sessions.level_1.two_day()}"
   submitAction={(values) => {
      const subject = `Trixolutions.be: Inschrijving voor Hybride Leertraject zonder Masterclass - ${values.first_name} ${values.last_name}`;
      const message = `
         <h4><i><b>${values.first_name} ${values.last_name}</b> wilt zich graag inschrijven voor het <b>Hybride Leertraject zonder Masterclass</b>:</i></h4><br/>
         Taal: <b></b><br/>
         Type Sessie: <b>Hybride Leertraject zonder Masterclass</b>
         Voornaam: <b>${values.first_name}</b><br/>
         Achternaam: <b>${values.last_name}</b><br/>
         E-mail: <b>${values.email}</b><br/>
         Bedrijf: <b>${values.company}</b><br/>
         ${ values.company ? `Telefoon: <b>${values.phone}</b><br/>` : '' }
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