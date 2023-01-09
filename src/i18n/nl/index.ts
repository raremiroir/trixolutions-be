import type { BaseTranslation } from '../i18n-types'

const nl: BaseTranslation = {
   base: {
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
         close: "sluiten"
      },
      validation: {
         required: "Dit veld is verplicht.",
         default_fixed: "Dit veld is ongeldig.",
         field_too_short: "{item} moet minstens {min} letters lang zijn.",
         field_too_long: "{item} mag maximaal {max} letters lang zijn."
      },
      slide: {
         prev: "Vorige Slide",
         next: "Volgende Slide"
      }
   }
}

export default nl;