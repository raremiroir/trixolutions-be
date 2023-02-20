import { sendEmail } from "$lib/mailgun";

export async function POST ({ request }: { request: Request }) {
   const { subject, message } = await request.json();

   // console.log('arrived at endpoint: ', subject, message);

   try{
      const data = await sendEmail(
         subject,  
         message
      );
      return new Response(
         JSON.stringify({ message: 'Email sent successfully', data }), 
         { status: 200 })
   } catch (err) {
      return new Response(
         JSON.stringify({ message: 'Failed to send email', err }), 
         { status: 500 })
   }

}

