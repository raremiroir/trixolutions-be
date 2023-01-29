<script lang="ts">
   // Define current page slug
   import { currentPageMap } from "$lib/stores";
   $currentPageMap = [
       {locale: 'en', slug: 'terms-conditions-sme-portfolio'},
       {locale: 'fr', slug: 'conditions-generales-portefeuille-pme'},
       {locale: 'nl', slug: 'algemene-voorwaarden-kmo-portfolio'}
    ];
    
    import type { PageData } from "../../$types";
    export let data: PageData;
</script>