<script lang="ts">
	import Icon from '@iconify/svelte';
   import { locale, locales } from 'svelte-i18n'
	import Menu from '$comp/Other/Menu/Menu.svelte';
	import Button from '../Button/Button.svelte';
   import { page } from '$app/stores';

   const switchLocale = async (newLocale:any) => {
		$locale = newLocale;
	}
 </script>
 
 <Menu hoverState padding="p-0.5">
   <Button
      slot="trigger"
      color="transparent" flat rounded
      size="square-md" 
      klass="flex items-center justify-center">
      <Icon icon="ic:round-translate" width="24" />
   </Button>
   <ul class="flex flex-col gap-1 p-2">
      {#each $locales as l}
         <li>
            <Button
               on:click={() => switchLocale(l)}
               color="{l === $locale ? 'secondary' : 'transparent'}"
               flat block size="xs"
               >
               <div class="w-full flex flex-row items-center justify-start gap-2">
                  <Icon icon="emojione:flag-for-{l === 'nl' ? 'belgium' : l === 'en' ? 'united-kingdom' : l === 'fr' ? 'france' : ''}" 
                        width="20" />
                  <div class="flex flex-col items-start justify-center">
                     {l === 'en' ? 'English' 
                     : l === 'fr' ? 'Français' 
                     : l === 'nl' ? 'Nederlands' 
                     : 'Error'}
                     <span class="text-xs italic text-gray-600 capitalize drop-shadow-none font-light">
                        { l === 'en' ? 'Engels' 
                        : l === 'fr' ? 'Frans' 
                        : l === 'nl' ? 'Nederlands' 
                        : 'Error'}
                     </span>
                  </div>
               </div> 
            </Button>
         </li>
      {/each}
   </ul>
</Menu>
 