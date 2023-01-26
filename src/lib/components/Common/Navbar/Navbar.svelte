<!--      -->
<!--  TS  -->
<!--      -->
<script lang="ts">
   // Import navigation functions
   import { page, navigating }   from "$app/stores";
   import { fade, slide }     from "svelte/transition";

   // Import components
   import { Link, Logo } from "$comp";
   import { Hamburger, LangSwitcher, NavItem } from "./index";


   // Import locale from i18n
   import LL, { locale } from '$i18n/i18n-svelte'

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

   // Create navLinks store
   $: navLinks = [
      {
         title: $LL.nav.home.title(),
         slug: ``
      },
      {
         title: $LL.nav.about.title(),
         slug: `/${$LL.nav.about.slug()}`
      },
      {
         title: $LL.nav.references.title(),
         slug: `/${$LL.nav.references.slug()}`
      },
      {
         title: $LL.nav.blog.title(),
         slug: `/${$LL.nav.blog.slug()}`
      },
      {
         title: $LL.nav.open_sessions.title(),
         slug: `/${$LL.nav.open_sessions.slug()}`,
         items: [
            {
               title: $LL.nav.open_sessions.items.info_sessions.title(),
               slug: `/${$LL.nav.open_sessions.items.info_sessions.slug()}`,
            },
            {
               title: $LL.nav.open_sessions.items.hybrid_traject.title(),
               slug: `/${$LL.nav.open_sessions.items.hybrid_traject.slug()}`,
            },
            {
               title: $LL.nav.open_sessions.items.deepdive.title(),
               slug: `/${$LL.nav.open_sessions.items.deepdive.slug()}`,
            },
         ]
      },
      {
         title: $LL.nav.contact.title(),
         slug: `/${$LL.nav.contact.slug()}`
      },
   ]

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
         w-11/12 xl:w-5/6 2xl:w-3/4 
         h-fit mx-auto 
         flex flex-row justify-between items-center">
      
         <!-- Logo/Brand -->
      <div class="w-1/3 lg:w-1/5">
         <Link ariaLabel="Home" href="/{$locale}" class="max-w-fit">
            <Logo />  
         </Link>
      </div>
   
      <!-- Navigation -->
      <nav class="
         w-3/5 h-fit left-0
         transition-all duration-200 ease-out
         translate-y-0 relative
         z-10 hidden lg:block
      ">
         <ul class="flex flex-row gap-1 2xl:gap-2 w-full justify-end items-center">
            {#each navLinks as item}
               {#if !item.items}
                  <NavItem name={item.title} link="/{$locale}{item.slug}" class="{item.title === 'blog' && $locale !== 'nl' ? 'hidden' : ''}" />
               {:else}
                  <NavItem name="{item.title}" link="/{$locale}{item.slug}" dropdown>
                     {#each item.items as menuItem}
                        <NavItem dropdownItem name={menuItem.title} link="/{$locale}{menuItem.slug}"/>
                     {/each}
                  </NavItem>
               {/if}
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
      lg:hidden fixed
      w-screen h-fit left-0 right-0
      { yscroll >= 10 ? 'top-[68px]' : 'top-[84px]'}
      z-10 flex
      bg-gray-100/30 backdrop-blur-lg
      transition-all duration-200 ease-in-out
      border-b-2 border-primary
      shadow-lg shadow-black/30
      ">
   <ul class="flex flex-col gap-2 w-full justify-center items-center">
      {#each navLinks as item}
         {#if !item.items}
            <NavItem mobile name={item.title} link="/{$locale}{item.slug}" class="{item.title === 'blog' && $locale !== 'nl' ? 'hidden' : ''}"  />
         {:else}
            <NavItem mobile name="{item.title}" link="/{$locale}{item.slug}" dropdown>
               {#each item.items as menuItem}
                  <NavItem mobile dropdownItem name={menuItem.title} link="/{$locale}{menuItem.slug}"/>
               {/each}
            </NavItem>
         {/if}
      {/each}
   </ul>
</nav>
   
{/if}