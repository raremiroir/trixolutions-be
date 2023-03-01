import variables from '$lib/constants/variables';

const { mailgun_key, mailgun_domain, mailgun_base_url } = variables;

import Mailgun from 'mailgun.js'
import formData from 'form-data'
const mailgun = new Mailgun(formData);

const mg = mailgun.client({
   username: 'api',
   url: mailgun_base_url,
   key: mailgun_key
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

export const sendEmail = async(subject:string, message:string) => {
   try {
      const data = {
         from: `${sender.name} <noreply@${mailgun_domain}>`,
         to: recipients,
         cc: cc,
         subject: subject,
         text: message,
         html: `<html>${message}</html>`,
      }

      const res = mg.messages.create(mailgun_domain, data)
      // console.log(res);
   } catch(err) {
      console.error(err);
   };
}