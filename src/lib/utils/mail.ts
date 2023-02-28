export const mailToAdmin = async({ subject = '', message = '' }) => {

   // console.log(subject, message)
   let success = false;

   const bodyData = JSON.stringify({ subject, message });

   await fetch (`/api/sendEmail`, {
      method: 'POST',
      body: bodyData,
      headers: {
         'Content-Type': 'application/json',
      }
   }).then((res) => {
      console.log(res);
      success = true;
   })
   .catch((err) => {
      console.error(err);
      success = false;
   })

   return success;
}

export const registerMailchimp = async({ first_name = '', last_name = '', email = '', lang = 'nl' }) => {

   const bodyData = JSON.stringify({ first_name, last_name, email, lang });


   try {
      const res = await fetch (`/api/registerMailchimp`, {
         method: 'POST',
         body: bodyData,
         headers: {
            'Content-Type': 'application/json',
         }
      })

      if (res.status === 200) {
         return {
            status: res.status,
            data: res.json(),
         }
      } else {
         return {
            status: res.status,
            data: res.json(), 
         }
      }
   } catch (err) {
      return {
         message: 'Error occured while registering mailchimp in util',
         data: err,
      }
   }
}