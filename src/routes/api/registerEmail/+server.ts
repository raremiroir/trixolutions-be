import mailchimp from '$lib/services/mailchimp'

import { json } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const POST: RequestHandler = async ({ body }) => {
	try {
      let data = await JSON.parse(body);
      let result = await mailchimp.registerEmail(data.email);
      return {
         status: result.status,
         body: result
      };
   } catch (error) {
      console.error(error);
   }
}