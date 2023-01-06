<script lang="ts">
   export let form:any;
   export let submit:string;
</script>


<form class="flex flex-col gap-4">

   <slot/>

   <button disabled={!form.valid}>{submit}</button>
</form>

{#if form.valid}
   Message successfully sent! <br/>
   Send another one?
{/if}