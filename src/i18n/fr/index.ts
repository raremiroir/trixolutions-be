import type { Translation } from '../i18n-types'

const fr: Translation = {
   code: "fr-BE",
   base: {
      word: {
         the: 'le',
         the_2: 'la',
         an: 'un',
         in: 'dans',
         to: 'pour',
         with: 'avec',
         without: 'sans'
      },
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
         reload: "recharger",
         back_to_home: "Retour à la page d'accueil",
         more_info: "plus d'infos",
         about_trixo: "à propos de Trixolutions",
         learn_more: 'apprendre encore plus',
         read_more: 'lire plus',
         go_to: 'aller à',
         proceed_in: "continuer en",
         sign_up: "abonnez-vous",
         back_to_top: 'Remonter',
         visit_nl: "Visiter notre site web dans les Pays-Bas",
      },
      error: {
         not_found: "Malheureusement. La page que vous recherchiez n'a pas été trouvée. <br/>Retournez à la page d'accueil via le bouton ci-dessous, ou utilisez la barre de navigation.",
         blog_unavailable: "Désolé! Pour le moment, le blog n'est disponible qu'en néerlandais.",
      },
      validation: {
         required: "{item:string} est un champ obligatoire.",
         required_def: "Ceci est un champ obligatoire.",
         default_fixed: "{item:string} est invalide.",
         field_too_short: "{item:string} doit comporter au moins {min:number} lettres.",
         field_too_long: "{item:string} peut contenir jusqu'à 5 {max:number} lettres.",
         email_error: "Cette adresse e-mail est invalide.",
         phone_error: "Ce numéro de téléphone est invalide.",
         only_alpha: "{item:string} ne doit pas contenir de caractères spéciaux ni de chiffres.",
         pick_one: "Chosis une option.",
         terms_error: "Vous devez accepter les {terms} et la {policy}.",
         captcha_error: "Veuillez remplir le captcha.",
      },
      newsletter: {
         btn: "S'inscrire à la Newsletter",
         validation: {
            already_member: "{email:string} est déjà enregistré dans la Newsletter.",
            looks_invalid: "{email:string} semble invalide ou faux.",
            failed: "Il y a eu un problème lors de l'inscription. Réessayez plus tard.",
         },
         success: {
            subscribed: "Vous avez bien été enregistré. Bienvenue dans la famille Trixolutions, {name:string}!"
         }
      },
      form: {
         first_name: "prénom",
         last_name: "nom de famille",
         email: "adresse e-mail",
         company: "entreprise",
         job: "jobtitel",
         subject: "sujet",
         message: "message",
         telephone: "numéro de téléphone",
         pick_session: "choisir une {session}",
         check_terms: "J'accepte les {terms} et la {policy}.",
         captcha: "Juste pour prouver que vous n'êtes pas un robot...",
         placeholder: {
            first_name: "Jean",
            last_name: "Jacques",
            email: "jean.jacques@exemple.be",
            company: "Exemple Inc.",
            job: "Chef d'équipe",
            subject: "Il me reste une question ...",
            message: "Ecrivez votre message ici...",
            telephone: "0499 999 999",
         },
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
      foot_accordeon: {
         about_trix_lencioni: {
            title: "À Propos de Trixolutions et Patrick Lencioni",
            text: `Trixolutions est exclusivement accrédité CAPA PRO et est donc membre du Table Group de Patrick Lencioni. 
                  Ensemble, nous nous engageons à donner plus de satisfaction aux employés en rendant les organisations plus saines.<br/>
                  Trixolutions a travaillé avec des centaines de cadres supérieurs et de leurs équipes au sein d'organisations..<br/>
                  <br/>
                  Grâce à son travail en tant qu'auteur à succès, Patrick Lencioni est un pionnier dans le mouvement des organisations saines. 
                  Trixolutions est très fière de travailler directement avec lui.`,
         },
         digital_coaching: {
            title: 'Possibilités de formation et de coaching (numérique).',
            sub: 'Les informations, méthodologies et exercices ci-dessus peuvent vous être proposés dans les formats suivants :',
            options: [
               {
                  title: 'En présentiel (sécurité Covid-19 assurée)',
                  items: [
                     "Coaching personnel",
                     "Session d'inspiration de 1,5 heures",
                     "Atelier de demi-journée",
                     "Parcours de formation"
                  ]
               },
               {
                  title: "En ligne (plateforme ZOOM, TEAMS ou VEDAMO)",
                  items: [
                     "Coaching personnel",
                     "Session d'inspiration de 1,5 heures dans notre salle de classe virtuelle Trixolutions",
                     "Atelier de demi-journée dans notre salle de classe virtuelle Trixolutions",
                     "Parcours de formation numérique"
                  ]
               }
            ]
         }
      },
      footer: {
         social_media: "des médias sociaux",
         more_about_us: 'en savoir plus sur nous',
         open_workshops: 'ateliers ouverts',
         other_site: "Visitez notre site aux Pays Bas!",
         creator: "Conçu, Développé et Géré par Mist Media"
      }
   },
   pwa: {
      messages: {
         app_ready: "L'application est gérée pour fonctionner hors ligne.",
         new_content: "De nouveaux contenus sont disponibles. Appuyez sur 'recharger' pour afficher le contenu.",
      }
   },
   cookies_prefs: {
      title: "Avis sur les Cookies",
      text: `Trixolutions utilise des cookies pour améliorer votre expérience. 
            En cliquant sur "Accepter", vous acceptez l'utilisation de tous les cookies.`,
      text_more: `Trixolutions.be utilise des cookies pour une expérience utilisateur optimale. 
                  Nous utilisons des cookies pour analyser le site web, l'améliorer, le personnaliser 
                  et le sécuriser. <br/>
                  Ci-dessous, vous trouverez une explication plus détaillée des types de cookies que 
                  nous proposons et vous pouvez indiquer les cookies que vous souhaitez autoriser. <br/>`,
      types: [
         {
            label: "Fonctionnalité",
            text: `Les cookies fonctionnels sont nécessaires pour assurer le fonctionnement du site 
                  web et ne peuvent pas être désactivés dans nos systèmes. Ils sont généralement 
                  définis en réponse à des actions que vous effectuez, telles que la définition de 
                  vos préférences de confidentialité, le remplissage de formulaires ou la fonctionnalité 
                  de base du site web. <br/>
                  Vous pouvez configurer votre navigateur pour bloquer ou vous avertir de ces cookies, 
                  mais certaines parties du site ne fonctionneront pas. <br/>
                  Ces cookies ne stockent aucune information personnellement identifiable. <br/>`,
         },
         {
            label: "Expérience",
            text: `Les cookies d'expérience nous aident à suivre quand vous avez visité notre site web 
                  pour la dernière fois, afin de vous offrir une expérience améliorée. Ils contribuent 
                  également à améliorer le site web en collectant et en rapportant anonymement des données 
                  sur son utilisation. <br/>
                  Ces cookies ne stockent aucune information personnellement identifiable. <br/>
                  Si vous n'autorisez pas ces cookies, nous ne saurons pas quand vous avez visité notre site 
                  et nous ne pourrons pas mesurer les performances de notre site. <br/>`,
         }
      ],
      btns: {
         accept: "Accepter",
         accept_tip: "Accepter tous les cookies et continuer",
         decline: "Refuser",
         decline_tip: "Refuser tous les cookies facultatifs et continuer",
         save: "Continuer",
         save_tip: "Enregistrer la sélection et continuer",
         settings: "Préférences en matière de cookies",
         more_info: "Plus d'infos",
         less_info: "Moins d'infos",
         more_info_tip: "Plus d'infos sur nos cookies",
         view_policy: "Consultez notre politique de confidentialité pour plus d'informations sur les cookies et la confidentialité sur Trixolutions.be",
      }

   }
}

export default fr;