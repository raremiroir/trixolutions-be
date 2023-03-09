import type { NamespaceWebsiteTranslation } from '../../i18n-types.js'

const en_website = {
	title: 'Trixolutions',
   slogan: 'Training, Coaching & Consultancy',
   tagLine: 'Education and Training in Lencioni Team Coaching and Consultancy',
   description_short: "Trixolutions is an education and training centre for Lencioni Team Coaching and Consultancy.",
   description: "Trixolutions is a training and education centre for Lencioni Team Coaching and Consultancy. We offer courses and training in Belgium and the Netherlands.",

   languages: {
      siteLanguage: 'en-GB',
      nl: 'Dutch',
      fr: 'French',
      en: 'English',
   },

   members: {
      tom: {
         title: 'CEO / Trainer',
         status: 'Owner',
         email: 'tomvandorst@trixolutions.be',
      },
      tamara: {
         title: 'Office Manager',
      },
      christoph: {
         title: 'Trainer / Facilitator',
      }
   },
   author: {
      name: 'Mist Media',
      status: 'Developer',
      bio: 'Made with 💪 by Mist Media.'
   },
   address: { 
      be: {
         name: 'Establishment Belgium',
         location: 'Trixolutions',
         street: 'Krommelei',
         number: '14',
         zip: '2110',
         city: 'Wijnegem',
         province: 'Antwerp',
         country: 'Belgium',
         url: 'https://trixolutions.be',
         description: "Our establishment in Belgium is situated in Wijnegem, Antwerp.",
      },
      nl: {
         name: 'Establishment Netherlands',
         location: 'Art Center Delft',
         street: 'Rotterdamseweg',
         number: '205',
         zip: '2629 HD',
         city: 'Delft',
         province: 'South Holland',
         country: 'Netherlands',
         url: 'https://artcentredelft.com',
         description: "Our establishment in the Netherlands is located in Art Center Delft, South Holland.",
      }
   },

   ratings: {
      text: "Based on {amount} reviews",
   },

   audience: {
      description: "Businesses that want to improve their team performance."
   },

   pricing: {
      vat: "VAT",
      price_range: "Price range",
      description: "Prices are exclusive of VAT.",
      per: {
         person: "per person",
         team: "per team",
         day: "per day",
         month: "per month",
         months: "per {amount} months",
         year: "per year",
      }
   },

   opening_hours: {
      title: "Opening hours",
      description: "Our opening hours are from {start} to {end}, from {open} to {close}.",
      description_disambiguation: "Opening hours are based on Brussels time. (GMT+1)",
      service_open: "The online learning platform is always available (24/7).",
      days_of_week: {
         monday: "monday",
         tuesday: "tuesday",
         wednesday: "wednesday",
         thursday: "thursday",
         friday: "friday",
         saturday: "saturday",
         sunday: "sunday",
      }
   },

   services: {
      title: "Training in Lencioni Team Coaching",
      description: "Trixolutions offers courses and training in Lencioni Team Coaching. Get to know the Lencioni Team Coaching Model and take your team to the next level.",
      type: "Team Coaching",
      default: {
         title: "Lencioni Team Coaching",
         description: "Get to know the Lencioni Team Coaching Model and take your team to a higher level.",
      },
      hybrid_base: {
         title: "Lencioni Team Coaching Learning Track",
         title_alt: "Basic Trixolutions/Lencioni Hybrid Team Coaching Learning Track",
         description: "Get to know the Lencioni Team Coaching Model and take your team to the next level with an online Learning Track!",
         description_disambiguation: "This educational plan includes an online tool (LMS) for easy online learning. It is a hybrid learning path without a two-day onsite master class.",
      },
      hybrid_full: {
         title: "Hybrid Lencioni Team Coaching Learning Track",
         title_alt: "Full Trixolutions/Lencioni Hybrid Team Coaching Learning Track",
         description: "Get to know the proven and successful insights of Patrick Lencioni and take your team to the next level with a Hybrid Learning Path with Two-Day Live Masterclass!",
         description_disambiguation: "This plan is a full hybrid team coaching programme, which includes an online tool (LMS) for easy education and a two-day on-site team coaching masterclass!",
      },
      deepdive: {
         title: "Lencioni Teamcoaching Deep Dive",
         title_alt: "Trixolutions Lencioni Teamcoaching Deep Dive",
         description: "Discover the 4 other successful models from Patrick Lencioni and The Table Group. Optimize your team coaching with a Trixolutions Lencioni Deep Dive!",
         description_disambiguation: "Expand your knowledge with Patrick Lencioni's 4 other success models. This is an extension of the other Lencioni Team Coaching courses.",
      },
      extend: {
         title: "Lencioni Team Coaching Track Renewal",
         title_alt: "Trixolutions Lencioni Team Coaching Track Extension",
         description: "Extend your Lencioni Team Coaching Track by an extra year, for only €490!",
         description_disambiguation: "The LMS tool is available for 1 year and can be extended for 1 year for €490 excluding VAT.",
      }
   },
   services_locations: {
      types: {
         online: "Online",
         onsite: "Onsite",
         hybrid: "Hybrid",
      },
      be: {
         name: "Domein Martinus",
         street: "Sniederspad",
         number: "133",
         zip: "2980",
         city: "Zoersel",
         province: "Antwerp",
         country: "Belgium",
         url: "https://domeinmartinus.be",
      }
   },
   contact: {
      title: "Contact us",
      title_alt: "Contact Trixolutions",
      description: "Contact us for more information about our services.",
      types: {
         website: "Website",
         website_description: "Contact us via our website.",
         phone: "Phone",
         phone_description: "Contact us via phone.",
         email: "Email",
         email_description: "Contact us via email.",
         address: "Address",
      }
   },

   catalog: {
      title: "Offer Catalog",
      title_alt: "Training and Coaching Plans",
      description: "A catalog of the training plans offered by Trixolutions.",
      description_disambiguation: " Trixolutions' offer catalog contains the different training plans available for the customer."
   },

   brands: {
      capa_pro: {
         name: "CAPA Pro",
         description: "CAPA PRO is the professional affiliate network of Pat Lencioni and the Table Group. Members of CAPA PRO will have exclusive access to live events, proprietary content, training, tools, and advice from Lencioni and his firm to help them transform leaders, teams, and organizations.",
         slogan: "The Official Consultant and Practitioner Alliance of The Table Group"
      }
   }

} satisfies NamespaceWebsiteTranslation

export default en_website
