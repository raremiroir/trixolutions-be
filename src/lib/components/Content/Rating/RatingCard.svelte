<script>
	import { P, Card, Rating } from "$comp";

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