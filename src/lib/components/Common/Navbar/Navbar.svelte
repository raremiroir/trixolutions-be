<!--      -->
<!--  TS  -->
<!--      -->
<script lang="ts">
   // Import navigation functions
   import { page, navigating }   from "$app/stores";
   import { slide }  from "svelte/transition";
   // Import components
import Button        from "$comp/Common/Button/Button.svelte";
import Link          from "$comp/Common/Link/Link.svelte";
import Menu          from "$comp/Menu/Menu.svelte";
import Hamburger     from "./Hamburger.svelte";
import Logo          from "$comp/Base/Media/Logo.svelte";
import Icon          from '@iconify/svelte';


   // Define links in navbar
   const navItems = [
      { name: 'Home', link: `/`, dropdown: false, pages: [] },
      { name: 'Over Ons', link: `/over-ons`, dropdown: false, pages: [] },
      { name: 'Referenties', link: `/referenties`, dropdown: false, pages: [] },
      { name: 'Blog', link: `/blog`, dropdown: false, pages: [] },
      { 
         name: 'Open Workshops', link: '/open-sessies', dropdown: true, 
         pages: [
               { title: 'Gratis Open Infosessies', link: `/open-sessies/gratis-open-infosessies` },
               { title: 'Hybride Lencioni Leertrajecten', link: `/open-sessies/hybride-lencioni-leertrajecten` },
               { title: 'Lencioni DeepDive - Level 2', link: `/open-sessies/lencioni-deepdive-level-2` },
         ] 
      },
      { name: 'Contact', link: `/contact`, dropdown: false, pages: [] },
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
      w-full fixed top-0 z-10
      bg-white/30 backdrop-blur-md 
      py-2 
      transition-all duration-200
      border-b-2 lg:border-none
      {openMobile ? 'border-primary' : 'border-transparent'}">
   <!-- Navbar Wrapper -->
   <div class="
         w-4/5 xl:w-3/4 
         h-fit mx-auto 
         flex flex-row justify-center items-center">
      
         <!-- Logo/Brand -->
      <div class="w-1/5">
         <Link href="/" klass="max-w-fit">
            <Logo width="180"/>  
         </Link>
      </div>
   
      <!-- Navigation -->
      <nav class="
         w-screen lg:w-3/5 h-fit left-0
         transition-all duration-200 ease-out
         lg:translate-y-0
         absolute lg:relative
         z-10 hidden lg:block
      ">
         <ul class="flex flex-row gap-2 w-full justify-center items-center">
            {#each navItems as page}
               <li class="w-fit">
                  {#if page.dropdown}
                     <Menu>
                        <Button 
                           slot="trigger"
                           color="transparent" 
                           flat lowercase 
                           size="text-lg px-5 pt-[14px] pb-3">
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
                           color="transparent" 
                           flat lowercase
                           size="text-lg px-5 pt-[14px] pb-3">
                           {page.name}
                        </Button>
                     </Link>
                  {/if}
               </li>
            {/each}
         </ul>
      </nav>
   
      <!-- Extra Buttons -->
      <div class="flex flex-row gap-2 w-1/2 lg:w-1/5 justify-end pr-8 z-20">
         <div class="lg:hidden"><Hamburger onClick={toggleMobile} onCheck={openMobile}/></div>
      </div>
   </div>
</div>

{#if openMobile}
<nav
   transition:slide={{duration:200}}
   class="
      lg:hidden
      w-screen h-fit left-0 top-[58px]
      absolute
      z-10 flex
      bg-gray-300/20 backdrop-blur-md
      ">
   <ul class="flex flex-col gap-2 w-full justify-center items-center">
      {#each navItems as page}
         <li class="w-full lg:w-fit">
            {#if page.dropdown}
               <Menu>
                  <Button 
                     slot="trigger"
                     color="transparent" 
                     flat lowercase square block
                     size="text-lg px-5 pt-[14px] pb-3">
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
                     color="transparent" 
                     flat lowercase square block
                     size="text-lg px-5 pt-[14px] pb-3">
                     {page.name}
                  </Button>
               </Link>
            {/if}
         </li>
      {/each}
   </ul>
</nav>
   
{/if}