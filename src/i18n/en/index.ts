import type { Translation } from '../i18n-types'

const en: Translation = {
   base: {
      nav: {
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
         back_to_home: "Back to Home Page",
         more_info: "more info",
         about_trixo: "about Trixolutions",
         learn_more: 'learn more',
         read_more: 'read more',
         go_to: 'go to',
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
               subject: "{name} would like to subscribe to {session}",
               intro: "Dear, \n\nI would like to sign up for {session}.\n",
               name: "My name is {name}",
               session_picked: "I would like to sign up for the {session} on {date_picked}.\n",
               email: "My e-mail address is {email}\n",
               company: "The company where I work, is called {company}\n",
               phone: "My phone number is {phone}\n",
               regards: "\nKind regards,\n",
            }
         }
      },
      slide: {
         prev: "Previous Slide",
         next: "Next Slide"
      },
      footer: {
         social_media: "social media",
         more_about_us: 'more about us',
         open_workshops: 'open workshops',
         creator: "Designed, Developed and Managed by Mist Media"
      }
   }
}

export default en;