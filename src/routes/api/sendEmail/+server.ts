import Mailgun from 'mailgun.js'
import formData from 'form-data'
const mailgun = new Mailgun(formData);

import {
   MAILGUN_API_KEY,
   MAILGUN_BASE_URL,
   MAILGUN_DOMAIN
} from "$env/static/private"

const mg = mailgun.client({
   username: 'api',
   url: MAILGUN_BASE_URL,
   key: MAILGUN_API_KEY,
})

const sender = {
   name: 'Trixolutions Admin',
   email: ''
}

const recipients = [
   'mirostorm@gmail.com',
   'miro.storm@trixolutions.be',
]
const cc = 'miro.polfliet@student.kdg.be'

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

const sendEmail = async(subject:string, message:string) => {
   try {
      const data = {
         from: `${sender.name} <noreply@${MAILGUN_DOMAIN}>`,
         to: recipients,
         cc: cc,
         subject: subject,
         text: message,
         html: `<html>${message}</html>`,
      }

      const res = mg.messages.create(MAILGUN_DOMAIN, data)
      // console.log(res);
   } catch(err) {
      console.error(err);
   };
}