<script lang="ts">
	import { Button, Link } from "$comp";

   export let name:string
   export let link:string
</script>
<li>
   <Link href={link}>
      <Button 
         color="transparent" 
         size="text-base px-4 pt-[14px] pb-3" 
         flat lowercase block>
         {name}
      </Button>
   </Link>
</li>