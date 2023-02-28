import { SECRET_MAILGUN_API_KEY } from '$env/static/private'
import { SECRET_MAILGUN_DOMAIN } from '$env/static/private'
import { SECRET_MAILGUN_BASE_URL } from '$env/static/private'

import Mailgun from 'mailgun.js'
import formData from 'form-data'
const mailgun = new Mailgun(formData);

const mg = mailgun.client({
   username: 'api',
   url: SECRET_MAILGUN_BASE_URL,
   key: SECRET_MAILGUN_API_KEY
})

export const sendEmail = async(subject:string, message:string) => {
   try {
      const data = {
         from: `Trixolutions Admin <noreply@${SECRET_MAILGUN_DOMAIN}>`,
         to: ['mirostorm@gmail.com', 'miro.storm@trixolutions.be'],
         cc: 'miro.polfliet@student.kdg.be',
         subject: subject,
         text: message,
         html: `<html>${message}</html>`,
      }

      const res = mg.messages.create(SECRET_MAILGUN_DOMAIN, data)
      // console.log(res);
   } catch(err) {
      console.error(err);
   };
}