export const validateTurnstile = async (turnstile_response:any) => {

   console.log('turnstile response in util: ', turnstile_response);

   const turnstileData = JSON.stringify({ turnstile_response });

   let success = false;

   await fetch ('/api/turnstile', {
      method: 'POST',
      body: turnstileData,
      headers: {
         'Content-Type': 'application/json',
      }
   }).then(res => {
      success = true
   }).catch(err => {
      console.error(err);
      success = false;
   })

   return success;
}