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
            <NavItem name={$LL.base.nav.home()} link="/{$locale}" />
            <NavItem name={$LL.base.nav.about()} link="/{$locale}/over-ons" />
            <NavItem name={$LL.base.nav.references()} link="/{$locale}/referenties" />
            {#if $locale === 'nl'}
               <div class="w-fit h-fit p-0 m-0" transition:fade={{duration: 200}}>
                  <NavItem name="{$LL.base.nav.blog()}" link="/nl/blog" />
               </div>
            {/if}
            <NavItem name="{$LL.base.nav.open_sessions()}" link="/{$locale}/open-sessies" dropdown>
               <NavItem dropdownItem name={$LL.base.nav.info_sessions()} link="/{$locale}/open-sessies/gratis-open-infosessies"/>
               <NavItem dropdownItem name={$LL.base.nav.hybrid_traject()} link="/{$locale}/open-sessies/hybride-lencioni-leertraject"/>
               <NavItem dropdownItem name={$LL.base.nav.deepdive()} link="/{$locale}/open-sessies/lencioni-deepdive-level-2"/>
            </NavItem>
            <NavItem name={$LL.base.nav.contact()} link="/{$locale}/contact" />
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
      { yscroll >= 10 ? 'top-[70px]' : 'top-[86px]'}
      z-10 flex
      bg-gray-100/30 backdrop-blur-lg
      transition-all duration-200 ease-in-out
      border-b-2 border-primary
      shadow-lg shadow-black/30
      ">
   <ul class="flex flex-col gap-2 w-full justify-center items-center">
      <NavItem mobile name={$LL.base.nav.home()} link="/{$locale}" />
      <NavItem mobile name={$LL.base.nav.about()} link="/{$locale}/over-ons" />
      <NavItem mobile name={$LL.base.nav.references()} link="/{$locale}/referenties" />
      {#if $locale === 'nl'}
         <div class="w-full h-fit p-0 m-0" transition:fade={{duration: 200}}>
            <NavItem mobile name={$LL.base.nav.blog()} link="/nl/blog" />
         </div>
      {/if}
      <NavItem mobile name={$LL.base.nav.open_sessions()} link="/{$locale}/open-sessies" dropdown>
         <NavItem dropdownItem name={$LL.base.nav.info_sessions()} link="/{$locale}/open-sessies/gratis-open-infosessies"/>
         <NavItem dropdownItem name={$LL.base.nav.hybrid_traject()} link="/{$locale}/open-sessies/hybride-lencioni-leertraject"/>
         <NavItem dropdownItem name={$LL.base.nav.deepdive()} link="/{$locale}/open-sessies/lencioni-deepdive-level-2"/>
      </NavItem>
      <NavItem mobile name={$LL.base.nav.contact()} link="/{$locale}/contact" />
   </ul>
</nav>
   
{/if}