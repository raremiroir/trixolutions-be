<script>
   import { page } from '$app/stores';
   import { titleCase } from '$src/utils';

	import Icon from "@iconify/svelte";

   export let before = ""
   export let beforeUrl = ""

   let currentUrl = $page.url.pathname;
   console.log(currentUrl);
   console.log($page);
   export let beforeIcon = "gg:smile"
   export let currentIcon = "gg:smile"

   let slashIndex = currentUrl.indexOf("/", 3) + 1;
   let secondSlashIndex = currentUrl.indexOf("/", 5) + 1;
   console.log("index:" + slashIndex);
   
   let currentName = ''

   if (secondSlashIndex <= 0) {
      currentName = titleCase(currentUrl.substring(slashIndex).replaceAll('-', ' '));
      before = ""; 
   }
   else if (secondSlashIndex > 0) { 
      currentName = titleCase(currentUrl.substring(secondSlashIndex).replaceAll('-', ' '));
      before = titleCase(currentUrl.substring(slashIndex, (secondSlashIndex - 1)).replaceAll('-', ' '));
      beforeUrl = currentUrl.substring(0, secondSlashIndex);
   }
   
   console.log(currentName);
</script>

<div class="dui-breadcrumbs w-11/12 lg:w-5/6 xl:w-3/4 2xl:w-2/3 mx-auto">
   <ul class="
       text-primary 
         font-body font-semibold 
         flex items-center">

     <li class="hover:text-primary-l1">
       <a href="/" class="flex items-center">
         <Icon icon="gg:home-alt" />
         <span class="ml-1 mt-0.5">Home</span>
       </a>
     </li> 

     {#if before}
         <li class="hover:text-primary-l1">
            <a href="{beforeUrl}" class="flex flex-row"> 
               <Icon icon="{beforeIcon}"/>
               <span class="ml-1 mt-0.5">{before}</span>
            </a>
         </li>
      {/if}

      <li class="hover:text-primary-l1">
         <a href="{currentUrl}"> 
            <Icon icon="{currentIcon}"/>
            <span class="ml-1 mt-0.5">{currentName}</span>
         </a>
      </li>

   </ul>
</div>