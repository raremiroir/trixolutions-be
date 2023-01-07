<script>
   
   let email = '';

   async function handleSubmit() {
      let body = {
         email
      };
      let result = await fetch('/src/routes/api/registerEmail/+server.ts', {
         method: 'post',
         body: JSON.stringify(body)
      });
      const registerEmailResponse = await result.json();
      if (registerEmailResponse === 200) {
         email = '';
      }
   }
</script>

<form on:submit|preventDefault={handleSubmit}>
   <input type="text" bind:value={email} />
       <button
           type="submit"
           class="btn bg-secondary-600 hover:bg-secondary-700 text-white text-2xl font-normal px-6 py-4">
              Subscribe to mailchimp
       </button>
</form>