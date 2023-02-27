import type { BaseTranslation } from '../i18n-types'

const nl: BaseTranslation = {
   code: "nl-BE",
   base: {
      word: {
         the: 'de',
         the_2: 'het',
         an: 'een',
         in: 'in',
         to: 'op',
      },
      nav: {
         hamburger: {
            toggle_nav: "bekijk of verberg de navigatiebalk"
         },
         lang: {
            change_lang: "verander van taal",
            change_lang_to: "verander taal naar"
         }
      },
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
         close: "sluiten",
         back_to_home: "Terug naar Homepagina",
         more_info: "meer info",
         about_trixo: "over Trixolutions",
         learn_more: 'leer meer',
         read_more: 'lees meer',
         go_to: 'ga naar',
         proceed_in: "ga verder in het"
      },
      error: {
         not_found: "Helaas. De pagina waar je naar zocht werd niet gevonden. <br/>Keer terug naar de homepagina via onderstaande knop, of gebruik de navigatiebalk.",
         blog_unavailable: "Helaas! Op dit moment is de blog enkel toegankelijk in het Nederlands."
      },
      validation: {
         required: "{item:string} is een verplicht veld.",
         required_def: "Dit is een verplicht veld.",
         default_fixed: "{item:string} is ongeldig.",
         field_too_short: "{item:string} moet minstens {min:number} letters lang zijn.",
         field_too_long: "{item:string} mag maximaal {max:number} letters lang zijn.",
         email_error: "Dit e-mailadres is ongeldig.",
         phone_error: "Dit telefoonnummer is ongeldig.",
         only_alpha: "{item:string} zou geen speciale karakters of nummers mogen bevatten.",
         pick_one: "Kies een optie.",
      },
      form: {
         first_name: "voornaam",
         last_name: "achternaam",
         email: "e-mail",
         company: "organisatie",
         job: "jobtitel",
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
               subject: "{name} wenst zich in te schrijven in {session}",
               intro: "Beste, \n\nGraag zou ik me inschrijven in {session}.\n",
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
      },
      footer: {
         social_media: "sociale media",
         more_about_us: 'meer over ons',
         open_workshops: 'open workshops',
         creator: "Ontworpen, Ontwikkeld en Beheerd door Mist Media"
      }
   }
}

export default nl;