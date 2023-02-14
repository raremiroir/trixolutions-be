<script lang="ts">

	import { Image } from "$comp";

   export let author:any;

</script>

<div class="flex flex-col gap-0">
   <Image 
      alt={author.name}
      src={author.img} 
      class="h-8 w-8 2xl:h-10 2xl:w-10 rounded-full"/>
   <div class="flex flex-col gap-0">
      <div class="text-xs 2xl:text-sm font-semibold text-gray-800">{author.name}</div>
      <span class="text-xs 2xl:text-sm text-gray-500 italic">{author.date}</span>
   </div>
</div>