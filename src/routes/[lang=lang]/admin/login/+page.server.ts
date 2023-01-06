import { error, redirect } from '@sveltejs/kit'

export const actions = {
    login: async ({ request, locals}) => {
        const body = Object.fromEntries(await request.formData())

        try {
            await locals.pb.collection('users').authWithPassword(body.email, body.password)
            if (!locals.pb?.authStore?.model?.verified) {
                locals.pb.authStore.clear()
                return {
                    notVerified: true
                }
            }
        } catch (err) {
            console.log('Error: ', err);
            throw error(500, 'Er is iets fout gegaan bij het inloggen.')
        }

        throw redirect(303, './dashboard')
    }
}