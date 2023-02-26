export const mailToAdmin = async({ subject = '', message = '' }) => {

   // console.log(subject, message)
   let messageSent = false;

   const bodyData = JSON.stringify({ subject, message });

   await fetch (`/api/sendEmail`, {
      method: 'POST',
      body: bodyData,
      headers: {
         'Content-Type': 'application/json',
      }
   }).then((res) => {
      console.log(res);
      messageSent = true;
   })
   .catch((err) => {
      console.error(err);
      messageSent = false;
   })

   return messageSent;
}