import type { BaseTranslation } from '../../i18n-types'

const nl_website: BaseTranslation = {
   title: 'Trixolutions',
   slogan: 'Training, Coaching & Consultancy',
   tagLine: 'Opleidingen en Training in Lencioni Teamcoaching en Consultancy',
   description_short: "Trixolutions is een opleidings- en trainingscentrum voor Lencioni Teamcoaching en Consultancy.",
   description: "Trixolutions is een opleidings- en trainingscentrum voor Lencioni Teamcoaching en Consultancy. We bieden opleidingen en trainingen aan in België en Nederland.",

   languages: {
      siteLanguage: 'nl-BE',
      nl: 'Nederlands',
      fr: 'Frans',
      en: 'Engels',
   },

   members: {
      tom: {
         title: 'CEO / Trainer',
         status: 'Eigenaar',
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
      status: 'Ontwikkelaar',
      bio: 'Gemaakt met 💪 door Mist Media.'
   },
   address: { 
      be: {
         name: 'Vestiging België',
         location: 'Trixolutions',
         street: 'Krommelei',
         number: '14',
         zip: '2110',
         city: 'Wijnegem',
         province: 'Antwerpen',
         country: 'België',
         url: 'https://trixolutions.be',
         description: "Onze vestiging in België is gevestigd in Wijnegem, Antwerpen.",
      },
      nl: {
         name: 'Vestiging Nederland',
         location: 'Art Center Delft',
         street: 'Rotterdamseweg',
         number: '205',
         zip: '2629 HD',
         city: 'Delft',
         province: 'Zuid-Holland',
         country: 'Nederland',
         url: 'https://artcentredelft.com',
         description: "Onze vestiging in Nederland is gevestigd in Art Center Delft, Zuid-Holland.",
      }
   },

   ratings: {
      text: "Gebaseerd op {amount} beoordelingen",
   },

   audience: {
      description: "Bedrijven die hun teamprestaties willen verbeteren."
   },

   pricing: {
      vat: "BTW",
      price_range: "Prijsbereik",
      description: "Prijzen zijn exclusief BTW.",
      per: {
         person: "per persoon",
         team: "per team",
         day: "per dag",
         month: "per maand",
         months: "per {amount} maanden",
         year: "per jaar",
      }
   },

   opening_hours: {
      title: "Openingstijden",
      description: "Onze openingstijden zijn van {start} tot {end}, van {open} tot {close}.",
      description_disambiguation: "De openingstijden zijn gebaseerd op Brusselse tijd. (GMT+1)",
      service_open: "Het online leerplatform is altijd beschikbaar (24/7).",
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
      title: "Opleidingen in Lencioni Teamcoaching",
      description: "Trixolutions biedt opleidingen en trainingen in Lencioni Teamcoaching aan. Leer het Lencioni Teamcoaching Model kennen en breng je team naar een hoger niveau.",
      type: "Teamcoaching",
      default: {
         title: "Lencioni Teamcoaching",
         description: "Leer het Lencioni Teamcoaching Model kennen en breng je team naar een hoger niveau.",
      },
      hybrid_base: {
         title: "Lencioni Teamcoaching Leertraject",
         title_alt: "Basis Trixolutions/Lencioni Hybride Teamcoaching Leertraject",
         description: "Dit educatieve plan omvat een online tool (LMS) voor gemakkelijk online leren.",
         description_disambiguation: "Dit educatieve plan omvat een online tool (LMS) voor gemakkelijk online leren. Het is een hybride leertraject zonder tweedaagse onsite masterclass.",
      },
      hybrid_full: {
         title: "Hybride Lencioni Teamcoaching Leertraject",
         title_alt: "Volledig Trixolutions/Lencioni Hybride Teamcoaching Leertraject",
         description: "Leer de beproefde en en succesvolle inzichten van Patrick Lencioni kennen en breng je team naar een hoger niveau met een Hybride Leertraject met LMS én Tweedaagse Live Masterclass!",
         description_disambiguation: "Dit plan is een volledig hybride teamcoachingstraject, dat een online tool (LMS) voor zelfeducatie en een tweedaagse on-site teamcoaching masterclass omvat!",
      },
      deepdive: {
         title: "Lencioni Teamcoaching Deep Dive",
         title_alt: "Trixolutions Lencioni Teamcoaching Deep Dive",
         description: "Ontdek de 4 andere succesvolle modellen van Patrick Lencioni en The Table Group. Optimaliseer je teamcoaching met een Trixolutions Lencioni Deep Dive!",
         description_disambiguation: "Breid je kennis uit met de 4 andere succesmodellen van Patrick Lencioni. Dit is een uitbreiding op de andere Lencioni Teamcoaching trajecten.",
      },
      extend: {
         title: "Lencioni Teamcoaching Traject Verlengen",
         title_alt: "Trixolutions Lencioni Teamcoaching Traject Verlengen",
         description: "Verleng je Lencioni Teamcoaching Traject met een extra jaar, voor slechts € 490!",
         description_disambiguation: "De LMS-tool is 1 jaar beschikbaar en is te verlengen voor 1 jaar voor € 490,- excl. BTW.",
      }
   },
   services_locations: {
      types: {
         online: "Online",
         onsite: "Onsite",
         hybrid: "Hybride",
      },
      be: {
         name: "Domein Martinus",
         street: "Sniederspad",
         number: "133",
         zip: "2980",
         city: "Zoersel",
         province: "Antwerpen",
         country: "België",
         url: "https://domeinmartinus.be",
      }
   },
   contact: {
      title: "Contacteer ons",
      title_alt: "Contacteer Trixolutions",
      description: "Heb je vragen of wil je meer informatie? Neem dan contact met ons op.",
      types: {
         website: "Website",
         website_description: "Contacteer ons via de website.",
         phone: "Telefoon",
         phone_description: "Bel ons op ons telefoonnummer.",
         email: "E-mail",
         email_description: "Stuur ons een e-mail.",
         address: "Adres",
      }
   },

   catalog: {
      title: "Aanbod",
      title_alt: "Trainingen en Coaching",
      description: "Een catalogus van de trainingsplannen die Trixolutions aanbiedt.",
      description_disambiguation: "De aanbodcatalogus van Trixolutions bevat de verschillende trainingsplannen die beschikbaar zijn voor de klant."
   },

   brands: {
      capa_pro: {
         name: "CAPA Pro",
         description: "CAPA PRO is het professionele affiliate netwerk van Pat Lencioni en de Table Group. Leden van CAPA PRO hebben exclusieve toegang tot live-evenementen, eigen inhoud, training, tools en advies van Lencioni en zijn bedrijf om hen te helpen leiders, teams en organisaties te transformeren.",
         slogan: "De Officiële Alliantie van Adviseurs en Praktijkprofessionals van The Table Group"
      }
   }
}
export default nl_website;