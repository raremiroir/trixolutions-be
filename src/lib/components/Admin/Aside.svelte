<script>
	import Icon from "@iconify/svelte";

   import { Link } from "$comp";

   const menuItems = [
      {
         title: "Paginabeheer",
         icon: 'material-symbols:pages-rounded',
         items: [
            {
               title: "Alle Pagina's",
               icon: 'material-symbols:content-copy-rounded'
            },
            {
               title: "Content Management",
               icon: 'material-symbols:settings-applications-outline-rounded'
            },
         ],
      },
      {
         title: "Trixolutions Management",
         icon: 'material-symbols:business-center-rounded',
         items: [
            {
               title: "Berichten",
               icon: 'material-symbols:add-comment-outline-rounded'
            }, 
            {
               title: "Inschrijvingen",
               icon: 'material-symbols:group-add-outline-rounded'
            },
         ],
      },
      {
         title: "Admin Tools",
         icon: 'material-symbols:admin-panel-settings-outline-rounded',
         items: [
            {
               title: "Toegang tot Database",
               icon: 'material-symbols:database'
            },
            {
               title: "Beheer Account",
               icon: 'material-symbols:settings-account-box-outline'
            },
         ],
      },
   ]

</script>


<aside class="w-1/4 p-4 grid grid-cols-1 gap-2">
   <ul class="
         dui-menu dui-menu-compact 
         border-2
         bg-gray-100
         font-medium
         w-56 p-2 
         rounded-box 
         ">
      <li class="
            rounded-box
            border-2 border-transparent hover:border-info 
          text-info-d hover:text-info 
            transition-all duration-200 ease-linear
          hover:bg-gray-50">
         <a href="/" class="flex items-center flex-row">
            <Icon class="w-5 h-auto pt-[0.5px]" icon="material-symbols:arrow-circle-left-outline-rounded" />
            Terug naar Website
         </a>
      </li>
   </ul>
   <ul class="
         font-body
         dui-menu
         border-2 border-info-d/70
       bg-gray-100
         font-medium rounded-box 
         w-56 p-2 
         flex flex-col gap-1
         ">
      {#each menuItems as item}
         <div class="my-2">
            <li class="dui-menu-title text-lg text-info-d font-semibold">
               <div class="flex flex-row items-center">
                  <div class="w-6 p-0">
                     <Icon class="!text-info m-0 p-0 w-full h-auto" icon={item.icon}/>
                  </div>
                  <span class="text-info text-lg">
                     {item.title}
                  </span>
               </div>
            </li>
            {#each item.items as page}
               <li class="text-base text-info-d/70 pl-4 flex flex-row gap-2 py-1">
                  <div class="w-4 p-0">
                     <Icon class="text-info w-full h-auto pb-0.5" icon={page.icon}/>
                  </div>
                  <div class="p-0">
                     <Link color="text-info hover:text-info-d hover:underline" href="/">
                        {page.title}
                     </Link>
                  </div>
               </li>
            {/each}
         </div>
      {/each}
   </ul>
</aside>