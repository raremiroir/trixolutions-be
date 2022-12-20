<script>
   import { page } from '$app/stores';

	import Icon from "@iconify/svelte";

   export let before = ""
   export let beforeUrl = ""
   
   export let current = ""
   export let currentUrl = ""

   export let beforeIcon = "gg:smile"
   export let currentIcon = "gg:smile"
   

</script>

<div class="dui-breadcrumbs">
   <ul>

     <li>
       <a href="/">
         <Icon icon="gg:home-alt" />
         Home
       </a>
     </li> 

     {#if before}
      <li>
         <a href="{beforeUrl}"> 
            <Icon icon="{beforeIcon}"/>
            {before}
         </a>
      </li>
      {/if}

      <li>
         <a href="/"> 
            <Icon icon="{currentIcon}"/>
            {current}
         </a>
      </li>
   
   </ul>
 </div>