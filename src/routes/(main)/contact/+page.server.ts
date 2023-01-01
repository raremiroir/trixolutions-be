import { invalid } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

// Form Message Items Array
let messageItems = [];


export const load = ({ locals }) => {
   // Return form message
   return {
      messageItems
   }
}
