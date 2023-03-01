import type { Translation } from '../i18n-types'

const en: Translation = {
   code: "en-UK",
   base: {
      word: {
         the: 'the',
         the_2: 'the',
         an: 'an',
         in: 'in',
         to: 'to',
         with: 'with',
         without: 'without'
      },
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
         reload: "reload",
         back_to_home: "Back to Home Page",
         more_info: "more info",
         about_trixo: "about Trixolutions",
         learn_more: 'learn more',
         read_more: 'read more',
         go_to: 'go to',
         proceed_in: "proceed in",
         sign_up: "sign up now"
      },
      error: {
         not_found: "Sorry! The page you were looking for was not found. <br/>Return to our home page by clicking the button, or just use the navigation bar.",
         blog_unavailable: "Sorry! At this time, the blog is only available in Dutch."
      },
      validation: {
         required: "{item:string} is a required field.",
         required_def: "This is a required field.",
         default_fixed: "{item:string} is invalid.",
         field_too_short: "{item:string} should be at least {min:number} letters long.",
         field_too_long: "{item:string} should be at most {max:number} letters long.",
         email_error: "This email in invalid.",
         phone_error: "This phone number in invalid.",
         only_alpha: "{item:string} should not contain any numbers or special characters.",
         pick_one: "Pick an option.",
      },
      newsletter: {
         btn: "Subscribe to Trixolutions Newsletter",
         validation: {
            already_member: "{email:string} has already been signed up for our newsletter.",
            looks_invalid: "{email:string} looks invalid or fake.",
            failed: "An error occured whilst trying to subscribe you to the newsletter. Try again later.",
         },
         success: {
            subscribed: "You have been successfully subscribed. Welcome to the Trixolutions family, {name:string}!"
         }
      },
      form: {
         first_name: "first name",
         last_name: "last name",
         email: "email",
         company: "organisation",
         job: "jobtitel",
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
      foot_accordeon: {
         about_trix_lencioni: {
            title: "About Trixolutions and Patrick Lencioni",
            text: `Trixolutions is exclusively CAPA PRO accredited and is therefore a member of Patrick Lencioni's Table Group. 
                  Together, we are committed to giving employees more satisfaction by making organizations healthier.<br/>
                  Trixolutions has worked with hundreds of senior executives and their teams in organizations.<br/>
                  <br/>
                  As a bestselling author, Patrick Lencioni is a pioneer in the healthy organizations movement. 
                  Trixolutions is very proud to work directly with him.`,
         },
         digital_coaching: {
            title: 'Opportunities for (digital) education and coaching.',
            sub: 'The above insights, methodologies, and exercises can be offered to you in the following formats:',
            offline: {
               title: 'Offline (Covid-19 proof)',
               items: [
                  "Personal coaching",
                  "Inspiration session of 1.5 hours",
                  "Half-day workshop",
                  "Training program"
               ]
            },
            online: {
               title: "Online (Platform ZOOM, TEAMS, or VEDAMO)",
               items: [
                  "Personal coaching",
                  "Inspiration session of 1.5 hours in our Trixolutions Virtual Classroom",
                  "Half-day workshop in our Trixolutions Virtual Classroom",
                  "Digital Learning Journey"
               ]
            }
         }
      },
      footer: {
         social_media: "social media",
         more_about_us: 'more about us',
         open_workshops: 'open workshops',
         creator: "Designed, Developed and Managed by Mist Media"
      }
   },
   pwa: {
      messages: {
         app_ready: "App ready to work offline.",
         new_content: "New content available, click on the reload button to update.",
      }
   }
}

export default en;