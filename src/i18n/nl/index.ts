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
         with: 'met',
         without: 'zonder'
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
         reload: "opnieuw laden",
         back_to_home: "Terug naar Homepagina",
         more_info: "meer info",
         about_trixo: "over Trixolutions",
         learn_more: 'leer meer',
         read_more: 'lees meer',
         go_to: 'ga naar',
         proceed_in: "ga verder in het",
         sign_up: "schrijf je in",
         back_to_top: 'Terug naar boven',
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
      newsletter: {
         btn: "Inschrijven voor Nieuwsbrief",
         validation: {
            already_member: "{email:string} is reeds ingeschreven in de Nieuwsbrief.",
            looks_invalid: "{email:string} ziet er ongeldig of fake uit.",
            failed: "Er is een probleem opgetreden tijdens het inschrijven. Probeer het later opnieuw.",
         },
         success: {
            subscribed: "Je bent succesvol ingeschreven. Welkom bij de Trixolutions familie, {name:string}!"
         }
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
      foot_accordeon: {
         about_trix_lencioni: {
            title: "Over Trixolutions en Patrick Lencioni",
            text: `Trixolutions is exclusief CAPA PRO geaccrediteerd en daardoor lid van de Table Group van Patrick Lencioni. 
                  Samen zetten we ons in om werknemers meer voldoening te geven door organisaties gezonder te maken.<br/>
                  Trixolutions heeft gewerkt met honderden senior leidinggevenden en hun teams in organisaties..<br/>
                  <br/>
                  Door zijn werk als bestsellerauteur is Patrick Lencioni een pionier in de beweging rond gezonde organisaties. 
                  Trixolutions is heel fier rechtsreeks met hem te kunnen samenwerken.`,
         },
         digital_coaching: {
            title: 'Mogelijkheden tot (digitale) opleiding en coaching',
            sub: 'Bovenstaande inzichten, methodieken en oefeningen kunnen u aangeboden worden in de volgende formats:',
            options: [
               {
                  title: 'Offline (Covid-19 proof)',
                  items: [
                     "Persoonlijke coaching",
                     "Inspiratiesessie van 1,5 uur",
                     "Workshop van een halve dag",
                     "Opleidingstraject",
                  ]
               },
               {
                  title: "Online (Platform ZOOM, TEAMS, of VEDAMO)",
                  items: [
                     "Persoonlijke coaching",
                     "Inspiratiesessie van 1,5 uur in onze Trixolutions Virtual Classroom",
                     "Workshop van een halve dag in onze Trixolutions Virtual Classroom",
                     "Digitale Learning Journey",
                  ]
               }

            ]
         }
      },
      footer: {
         social_media: "sociale media",
         more_about_us: 'meer over ons',
         open_workshops: 'open workshops',
         other_site: "Bezoek onze website in Nederland!",
         creator: "Ontworpen, Ontwikkeld en Beheerd door Mist Media"
      }
   },
   pwa: {
      messages: {
         app_ready: "App is gereed om offline te functioneren.",
         new_content: "Nieuwe content is beschikbaar. Druk op 'opnieuw laden' om de content te bekijken.",
      }
   }
}

export default nl;