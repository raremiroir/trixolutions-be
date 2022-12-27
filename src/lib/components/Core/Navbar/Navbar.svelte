<!--      -->
<!--  TS  -->
<!--      -->
<script lang="ts">
   // Import navigation functions
   import { page, navigating }   from "$app/stores";
   import { slide }     from "svelte/transition";
   // Import components
   import Button        from "$comp/Core/Button/Button.svelte";
   import Hamburger     from "$comp/Core/Navbar/Hamburger.svelte";
	import LangSwitcher  from "$comp/Core/Navbar/LangSwitcher.svelte";
   import Logo          from "$comp/Base/Media/Logo.svelte";
   import Link          from "$comp/Common/Link/Link.svelte";
   import Menu          from "$comp/Other/Menu/Menu.svelte";
   import Icon          from '@iconify/svelte';

   // Import locale from i18n
   import { locale } from "$i18n/i18n-svelte";


   // Define links in navbar
   const navItems = [
      { name: 'Home', link: `/${$locale}/`, dropdown: false, pages: [] },
      { name: 'Over Ons', link: `/${$locale}/over-ons`, dropdown: false, pages: [] },
      { name: 'Referenties', link: `/${$locale}/referenties`, dropdown: false, pages: [] },
      { name: 'Blog', link: `/${$locale}/blog`, dropdown: false, pages: [] },
      { 
         name: 'Open Workshops', link: `/${$locale}/open-sessies`, dropdown: true, 
         pages: [
               { title: 'Gratis Open Infosessies', link: `/${$locale}/open-sessies/gratis-open-infosessies` },
               { title: 'Hybride Lencioni Leertraject', link: `/${$locale}/open-sessies/hybride-lencioni-leertraject` },
               { title: 'Lencioni DeepDive - Level 2', link: `/${$locale}/open-sessies/lencioni-deepdive-level-2` },
         ] 
      },
      { name: 'Contact', link: `/${$locale}/contact`, dropdown: false, pages: [] },
   ]

   // Get current url/pathname
   let path = '';
   $: path = $page.url.pathname;

   // Get amount scrolled Y-axis
   let yscroll:number;
   $: yscroll;

   // Mobile Navbar Toggler
   let openMobile = false;
   const toggleMobile = () => {
      openMobile = !openMobile;
   }
   // Close mobile menu if navigating to other page
   $: if($navigating) openMobile = false;

</script>

<!--      -->
<!-- HTML -->
<!--      -->
<svelte:window bind:scrollY={yscroll} />

<!-- Navbar Outer Wrap -->
<div 
   class="
      w-full fixed top-0
      { yscroll >= 10
      ? 'bg-gray-200/30 py-2' 
      : 'bg-gray-100/30 py-4'}
      backdrop-blur-md
      z-20
      transition-all duration-200 ease-in-out
      border-b-2 lg:border-none
      {openMobile ? 'border-primary' : 'border-transparent'}">
   <!-- Navbar Wrapper -->
   <div class="
         w-11/12 lg:w-4/5 xl:w-3/4 
         h-fit mx-auto 
         flex flex-row justify-between items-center">
      
         <!-- Logo/Brand -->
      <div class="w-1/3 lg:w-1/5">
         <Link href="/{$locale}/" klass="max-w-fit">
            <Logo width="180"/>  
         </Link>
      </div>
   
      <!-- Navigation -->
      <nav class="
         w-3/5 h-fit left-0
         transition-all duration-200 ease-out
         translate-y-0 relative
         z-10 hidden lg:block
      ">
         <ul class="flex flex-row gap-1 xl:gap-2 w-full justify-end items-center">
            {#each navItems as page}
               <li class="w-fit">
                  {#if page.dropdown}
                     <Menu hoverState>
                        <a href={page.link} slot="trigger" class="w-fit h-fit m-0 p-0">
                           <Button 
                              color="transparent" 
                              flat lowercase 
                              size="text-lg px-2 xl:px-5 pt-[14px] pb-3">
                              {page.name}
                              <Icon icon="mdi:chevron-down" />
                           </Button>
                        </a>
                        <ul class="flex flex-col gap-1 py-2">
                           {#each page.pages as item}
                              <li>
                                 <Link href={item.link}>
                                    <Button 
                                       color="transparent" 
                                       size="text-base px-4 pt-[14px] pb-3" 
                                       flat lowercase block>
                                       {item.title}
                                    </Button>
                                 </Link>
                              </li>
                           {/each}
                        </ul>      
                    </Menu>
                  {:else if !page.dropdown}
                     <Link href={page.link}>
                        <Button 
                           color="transparent" 
                           flat lowercase
                           size="text-lg px-2 xl:px-5 pt-[14px] pb-3">
                           {page.name}
                        </Button>
                     </Link>
                  {/if}
               </li>
            {/each}
         </ul>
      </nav>
   
      <!-- Extra Buttons -->
      <div class="flex flex-row gap-2 w-fit justify-end ml-8 z-20">
         <div class="lg:hidden"><Hamburger onClick={toggleMobile} onCheck={openMobile}/></div>
         <LangSwitcher/>
      </div>
   </div>
</div>

{#if openMobile}
<nav
   transition:slide={{duration:200}}
   class="
      lg:hidden
      w-screen h-fit left-0
      { yscroll >= 10
         ? 'top-[58px]' 
         : 'top-[74px] md:top-[78px]'}
      fixed
      z-10 flex
      bg-gray-100/30 backdrop-blur-lg
      transition-all duration-200 ease-in-out
      border-b-2 border-primary
      shadow-lg shadow-black/30
      ">
   <ul class="flex flex-col gap-2 w-full justify-center items-center">
      {#each navItems as page}
         <li class="w-full lg:w-fit">
            {#if page.dropdown}
               <Menu>
                  <Button 
                     slot="trigger"
                     color="transparent-alt" 
                     flat lowercase square block
                     size="text-lg px-5 pt-[14px] pb-3"
                     klass="font-bold font-body text-primary-d2 group-hover:text-primary-l1">
                     {page.name}
                     <Icon icon="mdi:chevron-down" />
                  </Button>
                  <ul class="flex flex-col gap-1 py-2">
                     {#each page.pages as item}
                        <li>
                           <Link href={item.link}>
                              <Button 
                                 color="transparent" 
                                 size="text-base px-4 pt-[14px] pb-3" 
                                 flat lowercase block>
                                 {item.title}
                              </Button>
                           </Link>
                        </li>
                     {/each}
                  </ul>      
            </Menu>
            {:else if !page.dropdown}
               <Link href={page.link}>
                  <Button 
                     color="transparent-alt" 
                     flat lowercase square block
                     size="text-lg px-5 pt-[14px] pb-3"
                     klass="font-bold font-body text-primary-d2 group-hover:text-primary-l1">
                     {page.name}
                  </Button>
               </Link>
            {/if}
         </li>
      {/each}
   </ul>
</nav>
   
{/if}