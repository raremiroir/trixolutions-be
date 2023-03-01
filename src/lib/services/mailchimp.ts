

import variables from '$lib/constants/variables';
const { mailchimp } = variables;


import client from '@mailchimp/mailchimp_marketing'

client.setConfig({
    apiKey: mailchimp,
    server: 'us4'
})

export const registerEmail = async (first_name:string, last_name:string, email:string, lang:string = 'nl' ) => {
    const list_id = '4d890cd5e1';
    try {
        // console.log(`email: ${email}, first_name: ${first_name}, last_name: ${last_name}, lang: ${lang}`);
        const res = await client.lists.addListMember(list_id, {
            email_address: email,
            language: lang,
            status:'subscribed',
            merge_fields: {
                FNAME: first_name,
                LNAME: last_name
            },
            tags: [
                lang === 'nl' ? 'BE-2023-nl'
                : lang === 'en'? 'BE-2023-en'
                : lang === 'fr'? 'BE-2023-fr'
                : 'BE-2023'
            ]
        })

        return {
            success: true,
            message: 'Success',
            data: res
        };

    } catch (err:any) {
        return {
            success: false,
            message: err.message,
            data: err
        }
    }
}