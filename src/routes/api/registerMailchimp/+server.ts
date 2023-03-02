import client from '@mailchimp/mailchimp_marketing'

import { 
    MAILCHIMP_API_KEY,
    MAILCHIMP_LIST_ID,
    MAILCHIMP_SERVER
} from '$env/static/private';

client.setConfig({
    apiKey: MAILCHIMP_API_KEY,
    server: MAILCHIMP_SERVER
})

export async function POST ({ request }: { request: Request }) {
    const { first_name, last_name, email, lang } = await request.json();

    
    try {
        const data = await registerEmail( first_name, last_name, email, lang );

        return new Response(
            JSON.stringify( data ),
            { status: 200 }
        );
    } catch (err) {
        return new Response(
            JSON.stringify({ message: 'Failed to register email with API', err }),
            { status: 500 }
        )
    }
}


const registerEmail = async (first_name:string, last_name:string, email:string, lang:string = 'nl' ) => {
    try {
        // console.log(`email: ${email}, first_name: ${first_name}, last_name: ${last_name}, lang: ${lang}`);
        const res = await client.lists.addListMember(MAILCHIMP_LIST_ID, {
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