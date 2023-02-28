import { registerEmail } from '$lib/services/mailchimp';

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