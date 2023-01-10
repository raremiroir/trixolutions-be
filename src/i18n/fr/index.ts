import type { Translation } from '../i18n-types'

const fr: Translation = {
   base: {
      db: {
         loading: "laden",
         error_loading: "er is iets fout gegaan bij het laden van de data"
      },
      geo: {
         country: {
            belgium: "België",
            netherlands: "Nederland"
         },
         city: {
            antwerp: "Antwerpen"
         },
         lang: {
            dutch: "Nederlands",
            french: "Frans",
            english: "Engels"
         }
      },
      btn: {
         close: "sluiten"
      },
      validation: {
         required: "{item:string} is een verplicht veld.",
         default_fixed: "{item:string} is ongeldig.",
         field_too_short: "{item:string} moet minstens {min:number} letters lang zijn.",
         field_too_long: "{item:string} mag maximaal {max:number} letters lang zijn.",
         email_error: "Dit e-mailadres is ongeldig.",
         only_alpha: "{item:string} zou geen speciale karakters of nummers mogen bevatten."
      },
      form: {
         first_name: "voornaam",
         last_name: "achternaam",
         email: "e-mail",
         company: "organisatie",
         subject: "onderwerp",
         message: "bericht",
         telephone: "telefoonnummer",
         pick_session: "kies een {session}",
         content: {
            optional: "optioneel",
            send_msg: "bericht verzenden",
            sent_success: "bericht verzonden",
            send_another_one: "nog eentje versturen",
            fill_out_all: "Vul alle velden in alvorens je bericht te verzenden.",
            reset_form: "Alle velden resetten",
            reset_value: "Veld resetten",
            automatic: "Automatisch gegenereerd",
         },
         sessions: {
            subscribe_message: {
               subject: "{name} wenst zich in te schrijven in een {session}",
               intro: "Beste, \n\nGraag zou ik me inschrijven op een {session}.\n",
               name: "Mijn naam is {name}",
               session_picked: "Ik zou me graag inschrijven op de {session} op {date_picked}.\n",
               email: "Mijn e-mailadres is {email}\n",
               company: "Het bedrijf waar ik werk heet {company}\n",
               phone: "Mijn telefoonnummer is {phone}\n",
               regards: "\nMet vriendelijke groet,\n",
            }
         }
      },
      slide: {
         prev: "Vorige Slide",
         next: "Volgende Slide"
      }
   }
}

export default fr;