<script lang="ts">
      import supabase from "$lib/db";
      import P from "$comp/Common/Text/P.svelte";
      import Title from "$comp/Common/Text/Title.svelte";
   
   let loading = false;
   let email: string;
   
   const handleLogin = async () => {
      try {
         loading = true
         const { error } = await supabase.auth.signInWithOtp({ email })
   
         if (error) throw error
         alert ('Check your email for the login link!')
      } catch (error) {
         if (error instanceof Error) {
            alert(error.message)
         }
      } finally {
         loading = false
      }
   }
   </script>
   
   <form 
      class="flex flex-row items-center justify-center" 
      on:submit|preventDefault="{handleLogin}">
      <div class="">
        <Title type="h2" small>Supabase + SvelteKit</Title>
        <P>Sign in via magic link with your email below</P>
        <div>
          <input 
            type="email" 
            placeholder="Your email" 
            bind:value="{email}" />
        </div>
        <div>
          <input 
            type="submit" 
            value={loading ? 'Loading' : 'Send magic link'}
            disabled={loading} />
        </div>
      </div>
    </form>