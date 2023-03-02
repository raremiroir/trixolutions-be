import '$lib/db';
import type { HandleClientError } from '@sveltejs/kit';

export const handleError:HandleClientError = async ({ error, request }) => {
   if (error.status === 404) {
      return {
         status: 404,
         body: 'Whoops! 🥺'
      };
   }
}