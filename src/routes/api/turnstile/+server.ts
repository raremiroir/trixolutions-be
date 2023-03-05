import { SECRET_TURNSTILE_PRIVATEKEY } from "$env/static/private";
const priv_key = SECRET_TURNSTILE_PRIVATEKEY;

interface TokenValidateResponse {
   'error-codes': string[],
   success: boolean,
   action: string,
   cdata: string
}

const dummyKeys = {
   pass: '1x0000000000000000000000000000000AA',
   block: '2x0000000000000000000000000000000AA',
   challenge: '3x0000000000000000000000000000000AA',
}
const key = priv_key;

const validateToken = async (token: string, secret:string) => {
   const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify({
         response: token,
         secret: secret
      })
   });
   const data: TokenValidateResponse = await res.json();

   return {
      success: data.success,
      error: data['error-codes']?.length ? data['error-codes'][0] : null,
   }
}

export const POST = async ({ request }: { request: Request }) => {

   const { turnstile_response } = await request.json();

   try {
      const { success, error } = await validateToken(turnstile_response, key);
      
      console.log('Captcha is valid');

      return new Response(
         JSON.stringify({ success: true, error }),
         { status: 200 }
      )
   } catch (err) {
      return new Response(
         JSON.stringify({ success: false, error: err }),
         { status: 500 }
      )
   }
}
