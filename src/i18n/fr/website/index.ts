import type { NamespaceWebsiteTranslation } from '../../i18n-types.js'

const fr_website = {
	title: 'Trixolutions',
   slogan: 'Formation, Coaching et Conseil',
   tagLine: "Éducation et formation à Lencioni Coaching d'Équipe et Conseil",
   description_short: "Trixolutions est un centre d'éducation et de formation pour le coaching d'équipe et le conseil de Lencioni.",
   description: "Trixolutions est un centre d'éducation et de formation pour le coaching d'équipe et le conseil de Lencioni. Nous proposons des cours et des formations en Belgique et aux Pays-Bas.",

   languages: {
      siteLanguage: 'fr-BE',
      nl: 'Néerlandais',
      fr: 'Français',
      en: 'Anglais',
   },

   members: {
      tom: {
         title: 'PDG / Formateur',
         status: 'Propriétaire',
         email: 'tomvandorst@trixolutions.be',
      },
      tamara: {
         title: 'Responsable Administratif',
      },
      christoph: {
         title: 'Entraineur / Facilitateur',
      }
   },
   author: {
      name: 'Mist Media',
      status: 'Développeur',
      bio: 'Réalisé avec 💪 par Mist Media.'
   },
   address: { 
      be: {
         name: 'Succursale Belgique',
         location: 'Trixolutions',
         street: 'Krommelei',
         number: '14',
         zip: '2110',
         city: 'Wijnegem',
         province: 'Anvers',
         country: 'Belgique',
         url: 'https://trixolutions.be',
         description: "Notre filiale en Belgique est située à Wijnegem, Anvers.",
      },
      nl: {
         name: 'Succursale aux Pays-Bas',
         location: 'Art Center Delft',
         street: 'Rotterdamseweg',
         number: '205',
         zip: '2629 HD',
         city: 'Delft',
         province: 'Hollande-Méridionale',
         country: 'les Pays-Bas',
         url: 'https://artcentredelft.com',
         description: "Notre filiale aux Pays-Bas est situé à Art Center Delft, Hollande-Méridionale.",
      }
   },

   ratings: {
      text: "Basé sur {amount} avis",
   },

   audience: {
      description: "Les entreprises qui souhaitent améliorer la performance de leur équipe."
   },

   pricing: {
      vat: "TVA",
      price_range: "Gamme de Prix",
      description: "Les prix sont hors TVA.",
      per: {
         person: "par personne",
         team: "par équipe",
         day: "par jour",
         month: "par mois",
         months: "par {amount} mois",
         year: "par an",
      }
   },

   opening_hours: {
      title: "Heures d'ouverture",
      description: "Nos heures d'ouverture sont de {start} à {end}, de {open} à {close}.",
      description_disambiguation: "Les heures d'ouverture sont basées sur l'heure de Bruxelles. (GMT+1)",
      service_open: "La platforme d'éducation est toujours disponible. (24/7)",
      days_of_week: {
         monday: "maandag",
         tuesday: "dinsdag",
         wednesday: "woensdag",
         thursday: "donderdag",
         friday: "vrijdag",
         saturday: "zaterdag",
         sunday: "zondag",
      }
   },

   services: {
      title: "Formation en Coaching d'Équipe Lencioni",
      description: "Trixolutions propose une éducation et une formation en coaching d'équipe Lencioni. Apprenez à connaître le modèle de coaching d'équipe Lencioni et amenez votre équipe à un niveau supérieur.",
      type: "Coaching d'Équipe",
      default: {
         title: "Coaching d'Équipe Lencioni",
         description: "Apprenez à connaître le modèle de coaching d'équipe Lencioni et amenez votre équipe à un niveau supérieur.",
      },
      hybrid_base: {
         title: "Lencioni Team Coaching Parcours d'Apprentissage",
         title_alt: "Trajectoire de Coaching d'Équipe Hybride de Base",
         description: "Apprenez à connaître le modèle de coaching d'équipe de Lencioni et faites passer votre équipe au niveau supérieur avec un parcours d'apprentissage en ligne !",
         description_disambiguation: "Ce plan éducatif comprend un outil en ligne (LMS) pour l'auto-éducation. C'est un parcours d'apprentissage hybride sans une masterclass en direct de deux jours."
      },
      hybrid_full: {
         title: "Parcours d'apprentissage Hybrid Lencioni Team Coaching",
         title_alt: "Trajectoire de Coaching d'Équipe Hybride Complète",
         description: "Découvrez les idées éprouvées et réussies de Patrick Lencioni et faites passer votre équipe au niveau supérieur avec un parcours d'apprentissage hybride avec une masterclass en direct de deux jours !",
         description_disambiguation: "Ce plan est une trajectoire de coaching d'équipe hybride complète, qui comprend un outil en ligne (LMS) pour l'auto-éducation et une masterclass de coaching d'équipe de deux jours sur place !"
      },
      deepdive: {
         title: "Lencioni Team Coaching Approfondissement",
         title_alt: "Deep Dive Lencioni/Trixolutions Coaching d'Équipe",
         description: "Découvrez les 4 autres modèles à succès de Patrick Lencioni et The Table Group. Optimisez le coaching de votre équipe avec un Deep Dive Trixolutions Lencioni !",
         description_disambiguation: "Développez vos connaissances avec les 4 autres modèles de réussite de Patrick Lencioni. Il s'agit d'une extension des autres cours de coaching d'équipe de Lencioni."
      },
      extend: {
         title: "Prolongement de la piste Lencioni d'entraînement de l'équipe",
         title_alt: "Extension de la piste de coaching de l'équipe Trixolutions Lencioni",
         description: "Prolongez votre parcours de coaching de l'équipe Lencioni d'une année supplémentaire, pour seulement 490 € !",
         description_disambiguation: "L'outil LMS est disponible pour 1 an et peut être prolongé pour 1 an au prix de 490 € hors TVA.",
      }
   },
   services_locations: {
      types: {
         online: "En ligne",
         onsite: "Sur place",
         hybrid: "Hybride",
      },
      be: {
         name: "Domaine Martinus",
         street: "Sniederspad",
         number: "133",
         zip: "2980",
         city: "Zoersel",
         province: "Anvers",
         country: "Belgique",
         url: "https://domeinmartinus.be",
      }
   },
   contact: {
      title: "Contactez-nous",
      title_alt: "Contactez Trixolutions",
      description: "Vous avez des questions ? N'hésitez pas à nous contacter !",
      types: {
         website: "Site Web",
         website_description: "Contactez-nous via notre site web.",
         phone: "Téléphone",
         phone_description: "Appelez-nous.",
         email: "Email",
         email_description: "Envoyez-nous un email.",
         address: "Adresse",
      }
   },

   catalog: {
      title: "Catalogue d'Offres",
      title_alt: "Plans de Formation",
      description: "Un catalogue des plans de formation proposés par Trixolutions.",
      description_disambiguation: "Le catalogue d'offres de Trixolutions contient les différents plans de formation disponibles pour le client."
   },

   brands: {
      capa_pro: {
         name: "CAPA Pro",
         description: "CAPA PRO est le réseau professionnel d'affiliation de Pat Lencioni et du Groupe Table. Les membres de CAPA PRO auront un accès exclusif aux événements en direct, au contenu exclusif, à la formation, aux outils et aux conseils de Lencioni et de son entreprise pour les aider à transformer les dirigeants, les équipes et les organisations.",
         slogan: "L'alliance officielle des consultants et praticiens du Table Group"
      }
   }

} satisfies NamespaceWebsiteTranslation

export default fr_website
