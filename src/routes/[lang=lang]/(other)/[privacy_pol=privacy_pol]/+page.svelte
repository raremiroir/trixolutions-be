<script lang="ts">
   // Define current page slug
   import { currentPageMap } from "$lib/stores";
   $currentPageMap = [
      {locale: 'en', slug: 'privacy-policy'},
      {locale: 'fr', slug: 'politique-de-confidentialite'},
      {locale: 'nl', slug: 'privacybeleid'}
   ];

   // Import i18n
    import LL from "$i18n/i18n-svelte";
    
    // Import Components
    import { Main, Breadcrumbs, Section, H1, Text, Accordeon, AccordeonItem, H4 } from "$comp";

    let active:any = null;
 </script>
 
 
 <Main cta>
    <Breadcrumbs currentIcon="material-symbols:lock-outline" />
    <Section name='privacy-policy'>
      <H1 slot="title">
         {$LL.nav.others.privacy_policy.title()}
      </H1>
      
      <Text>
         {$LL.other.privacy_policy.intro()}
      </Text>

      <Accordeon bind:active class="w-full">
         {#each Object.entries($LL.other.privacy_policy.items) as [key, item]}
            <AccordeonItem title={item.title()} id={Number(key) + 1}>
            
               {#if item.text}
                  <Text>{@html item.text()}</Text>
               {/if}
            
               {#if item.sections}
                  {#each Object.entries(item.sections) as [sectionKey, sectionItem]}
                     <H4 smaller>{sectionItem.title()}</H4>
                     <Text>{sectionItem.text()}</Text><br/>
                  {/each}
               {/if}
            </AccordeonItem>
         {/each}
      </Accordeon>
        
       
    </Section>
 </Main>