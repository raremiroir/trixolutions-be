<script>
   import { page } from '$app/stores';
   import { titleCase } from '$utils';

   import LL from '$i18n/i18n-svelte';

	import Icon from "@iconify/svelte";

   export let beforeDefined = false;
   export let before = ""
   export let beforeUrl = ""

   $: currentUrl = $page.url.pathname;
   
   export let beforeIcon = "gg:smile"
   export let currentIcon = "gg:smile"

   $: slashIndex = currentUrl.indexOf("/", 3) + 1;
   $: secondSlashIndex = currentUrl.indexOf("/", 5) + 1;
   
   let currentName = ''

   $: if (secondSlashIndex <= 0 && !beforeDefined) {
      before = ""; 
   }
   else if (secondSlashIndex > 0 && !beforeDefined) { 
      before = titleCase(currentUrl.substring(slashIndex, (secondSlashIndex - 1)).replaceAll('-', ' '));
      beforeUrl = currentUrl.substring(0, secondSlashIndex);
   }

   $: if (secondSlashIndex <= 0) {
      currentName = titleCase(currentUrl.substring(slashIndex).replaceAll('-', ' '));
   }
   else if (secondSlashIndex > 0) { 
      currentName = titleCase(currentUrl.substring(secondSlashIndex).replaceAll('-', ' '));
   }

</script>

<div
   role="navigation"
   class="w-11/12 lg:w-5/6 xl:w-3/4 2xl:w-2/3 mx-auto">
   <ul class="
       text-primary text-xs sm:text-sm md:text-base
         font-body font-semibold gap-0 sm:gap-0.5 md:gap-1 lg:gap-2
         flex items-center">

     <li class="hover:text-primary-l1 transition-all duration-200 ease-out">
       <a href="/" 
         class="flex items-center 
            !no-underline border-b-2 border-transparent hover:border-primary-l1
            transition-all duration-200 ease-out">
         <Icon icon="gg:home-alt" />
         <span class="ml-1 mt-0.5">{$LL.nav.home.title()}</span>
       </a>
     </li> 

     <Icon 
         icon="ph:caret-right-bold"
         class="text-primary-l1/60"
     />

     {#if before}
         <li class="hover:text-primary-l1 transition-all duration-200 ease-out">
            <a href="{beforeUrl}" 
               class="flex flex-row items-center
                  !no-underline border-b-2 border-transparent hover:border-primary-l1
                  transition-all duration-200 ease-out">  
               <Icon icon="{beforeIcon}"/>
               <span class="ml-1 mt-0.5">{before}</span>
            </a>
         </li>

         <Icon 
            icon="ph:caret-right-bold"
            class="text-primary-l1/60"
         />
      {/if}

      <li class="hover:text-primary-l1 transition-all duration-200 ease-out">
         <a href="{currentUrl}" 
            class="
               flex flex-row items-center
               !no-underline border-b-2 border-transparent hover:border-primary-l1
               transition-all duration-200 ease-out"> 
            <Icon icon="{currentIcon}"/>
            <span class="ml-1 mt-0.5">{currentName}</span>
         </a>
      </li>

   </ul>
</div>