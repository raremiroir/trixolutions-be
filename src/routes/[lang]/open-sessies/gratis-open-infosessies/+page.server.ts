import { invalid } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

// Form Message Items Array
let messageItems = [];


export const load = ({ locals: { LL } }) => {
   // i18n
   console.info(LL.log({ fileName: '+page.server.ts' }))
   // Return form message
   return {
      messageItems
   }
}
