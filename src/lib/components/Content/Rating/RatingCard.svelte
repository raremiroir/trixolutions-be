<script>
	import { Card } from "../../common";
	import { P } from "../../core";
   import Rating from "./Rating.svelte";

   export let rating = 3

   let klass = ''
   export { klass as class }
   export let size = 'w-7'

</script>

<Card class={klass}>
   <P italic>
      “<slot/>”
   </P>
   <Rating {rating} {size} />
</Card>