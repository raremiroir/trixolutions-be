<script>
   import { marked } from 'marked';
	import Image from './Media/Image.svelte';

   export let content = '';
   
   export let klass = "";

   export let image = '';
   export let imgAlt = 'no alt';
</script>

<div 
   class="
      !w-full py-0 my-0 flex flex-wrap items-start justify-start

      prose-headings:font-title prose-headings:text-primary
      prose-h2:text-6xl prose-h2:mt-8 prose-h2:mb-2 prose-h2:px-2
      prose-h2:font-semibold prose-h2:text-primary-d2
      prose-h2:border-b-4 prose-h2:border-primary/30

      prose-p:font-body prose-p:text-gray-800 prose-p:text-lg
      prose-p:py-1 prose-p:leading-normal prose-p:font-normal

      even:first-of-type:prose-p:w-1/2
      even:first-of-type:prose-p:pl-8
      even:first-of-type:prose-p:text-xl
      
      prose-ul:font-body prose-ul:text-gray-800 prose-ul:text-lg
      prose-ul:first-of-type:font-normal
      prose-ul:py-3
      
      prose-li:list-disc prose-li:ml-8 prose-li:py-1
      
      prose-blockquote:italic
      prose-blockquote:border-l-4 prose-blockquote:border-primary-l1
      prose-blockquote:mx-4 prose-blockquote:pl-4
      prose-p:prose-blockquote:text-xl prose-p:prose-blockquote:font-semibold
      
      prose-em:italic 
      
      prose-strong:font-bold 
      
      
      { klass }">
   {#if image} 
      <Image imgSrc="{image}" width="w-1/2 md:w-1/3 mb-4" klass='whitespace-nowrap' alt="{imgAlt}" eager/>
   {/if}
   {@html marked.parse(content)}
</div>