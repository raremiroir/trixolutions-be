import { error, redirect } from '@sveltejs/kit';
import { generateUsername } from '$lib/utils';


export const actions = {
    register: async ({ locals, request }) => {
        const body = Object.fromEntries(await request.formData())

        let name = `${body.first_name.toLowerCase()}${body.last_name.toLowerCase()}`
        let username = generateUsername(body.first_name.toLowerCase(), body.last_name.toLowerCase())

        try {
            await locals.pb.collection('users').create({ username, name, ...body });
            await locals.pb.collection('users').requestVerification(body.email);
        } catch (err) {
            console.log('Error: ', err);
            throw error(500, 'Something went wrong')
        }

        throw redirect(303, '/login');
    }
}