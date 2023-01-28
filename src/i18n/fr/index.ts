import type { Translation } from '../i18n-types'

const fr: Translation = {
   base: {
      nav: {
         hamburger: {
            toggle_nav: "afficher ou masquer la barre de navigation"
         },
         lang: {
            change_lang: "changer de langue",
            change_lang_to: "changer la langue en"
         }
      },
      db: {
         loading: "charger",
         error_loading: "une erreur s'est produite lors du chargement des données"
      },
      geo: {
         country: {
            belgium: "Belgique",
            netherlands: "Les Pays-Bas"
         },
         city: {
            antwerp: "Anvers"
         },
         lang: {
            dutch: "Néerlandais",
            french: "Français",
            english: "Anglais"
         }
      },
      btn: {
         close: "fermer",
         back_to_home: "Retour à la page d'accueil",
         more_info: "plus d'infos",
         about_trixo: "à propos de Trixolutions",
         learn_more: 'apprendre encore plus',
         read_more: 'lire plus',
         go_to: 'aller à',
         proceed_in: "continuer en"
      },
      error: {
         not_found: "Malheureusement. La page que vous recherchiez n'a pas été trouvée. <br/>Retournez à la page d'accueil via le bouton ci-dessous, ou utilisez la barre de navigation.",
         blog_unavailable: "Désolé! Pour le moment, le blog n'est disponible qu'en néerlandais.",
      },
      validation: {
         required: "{item:string} est un champ obligatoire.",
         default_fixed: "{item:string} est invalide.",
         field_too_short: "{item:string} doit comporter au moins {min:number} lettres.",
         field_too_long: "{item:string} peut contenir jusqu'à 5 {max:number} lettres.",
         email_error: "Cette adresse e-mail est invalide.",
         only_alpha: "{item:string} ne doit pas contenir de caractères spéciaux ni de chiffres."
      },
      form: {
         first_name: "prénom",
         last_name: "nom de famille",
         email: "adresse e-mail",
         company: "entreprise",
         subject: "sujet",
         message: "message",
         telephone: "numéro de téléphone",
         pick_session: "choisir une {session}",
         content: {
            optional: "optionnel",
            send_msg: "envoyer le message",
            sent_success: "message envoyé",
            send_another_one: "en envoyer un autre",
            fill_out_all: "Veuillez remplir tous les champs avant d'envoyer votre message.",
            reset_form: "Réinitialiser tous les champs",
            reset_value: "Réinitialiser le champ",
            automatic: "Généré automatiquement",
         },
         sessions: {
            subscribe_message: {
               subject: "{name} souhaite s'inscrire à une {session}",
               intro: "Cher, \n\nJe souhaite m'inscrire à une {session}.\n",
               name: "Mon nom est {name}",
               session_picked: "Je souhaite m'inscrire pour la {session} du {date_picked}.\n",
               email: "Mon adresse e-mail est {email}\n",
               company: "L'entreprise pour laquelle je travaille s'appelle {company}\n",
               phone: "Mon numéro de téléphone est {phone}\n",
               regards: "\nCordialement,\n",
            }
         }
      },
      slide: {
         prev: "Diapo Précédente",
         next: "Diapo Suivante"
      },
      footer: {
         social_media: "des médias sociaux",
         more_about_us: 'en savoir plus sur nous',
         open_workshops: 'ateliers ouverts',
         creator: "Conçu, Développé et Géré par Mist Media"
      }
   }
}

export default fr;