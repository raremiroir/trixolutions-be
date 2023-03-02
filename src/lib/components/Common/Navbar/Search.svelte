<!-- <script lang='ts'>
   // IMPORT TYPES

   // IMPORT COMPONENTS
   import { Button } from '$comp';

   // IMPORT UTILS

   // IMPORT I18N
   import LL, { locale } from '$i18n/i18n-svelte';
   
   // IMPORT H
   import Document from 'flexh/src/document'
   import Index from 'flexh/src/index'

   let findDocument = new Document({
      document: {
         index: ['title', 'description', 'content']
      }
   });

   for (let i = 0; i < data.docs.length; i++) {
      findDocument.add(docs[i]);
   }

   let search = '';
   let results = [];

   function findDocuments() {
      results = findDocument
         .search(search)
         .map((e) => e.result)
         .flat();
   }
</script>

<input 
   type="search"
   id="search"
   placeholder="Search"
   bind:value={search}
   on:keydown={findDocuments}
/>

<!-- Filter documents if search term is not blank -->
{#each docs as doc}
   {#if search === '' || results.indexOf(doc.id) !== -1}
      <!-- Search Results -->
      <div class="">{doc}</div>
   {/if}
{/each} -->