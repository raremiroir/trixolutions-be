import type { Translation } from '../i18n-types'

const en: Translation = {
   base: {
      nav: {
         home: "home",
         about: "about us",
         references: "references",
         blog: "blog",
         open_sessions: "open workshops",
         info_sessions: "free open info sessions",
         hybrid_traject: "hybrid lencioni learning track",
         deepdive: "lencioni deepdive - level 2",
         contact: "contact",
         hamburger: {
            toggle_nav: "show or hide the navigation bar"
         },
         lang: {
            change_lang: "change language",
            change_lang_to: "change language to"
         }
      },
      db: {
         loading: "loading",
         error_loading: "something went wrong when loading the data"
      },
      geo: {
         country: {
            belgium: "Belgium",
            netherlands: "Netherlands"
         },
         city: {
            antwerp: "Antwerp"
         },
         lang: {
            dutch: "Dutch",
            french: "French",
            english: "English"
         }
      },
      btn: {
         close: "close",
         back_to_home: "Back to Home Page"
      },
      error: {
         not_found: "Sorry! The page you were looking for was not found. <br/>Return to our home page by clicking the button, or just use the navigation bar."
      },
      validation: {
         required: "{item:string} is a required field.",
         default_fixed: "{item:string} is invalid.",
         field_too_short: "{item:string} should be at least {min:number} letters long.",
         field_too_long: "{item:string} should be at most {max:number} letters long.",
         email_error: "This email in invalid.",
         only_alpha: "{item:string} should not contain any numbers or special characters."
      },
      form: {
         first_name: "first name",
         last_name: "last name",
         email: "email",
         company: "organisation",
         subject: "subject",
         message: "message",
         telephone: "phone",
         pick_session: "choose {session}",
         content: {
            optional: "optional",
            send_msg: "send message",
            sent_success: "message sent",
            send_another_one: "send another one",
            fill_out_all: "Please fill out all fields before sending the message.",
            reset_form: "Reset all fields",
            reset_value: "Reset field",
            automatic: "Automatically generated",
         },
         sessions: {
            subscribe_message: {
               subject: "{name} would like to subscribe on {session}",
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
         prev: "Previous Slide",
         next: "Next Slide"
      }
   }
}

export default en;