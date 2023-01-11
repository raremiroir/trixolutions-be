<script>
	import { Loading } from "$comp";

        import { fade } from "svelte/transition";
</script>

<div 
    transition:fade={{duration: 250}}
    class="
        fixed w-screen h-screen 
        left-0 top-0 right-0 bottom-0 
        grid place-items-center
        bg-primary/70 backdrop-blur-2xl
        z-99">
   <Loading color="light"/>
</div>