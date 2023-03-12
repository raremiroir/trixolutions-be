import '$lib/db';
import type { HandleClientError } from '@sveltejs/kit';

export const handleError:HandleClientError = async ({ error, event }) => {
   console.error(error)
   return {
      status: 404,
      message: `Whoops! 🥺 ${error}`
   };
}