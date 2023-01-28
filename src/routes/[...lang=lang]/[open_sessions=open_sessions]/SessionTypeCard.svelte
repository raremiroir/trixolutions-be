<script lang="ts">
	import { Text, CardBase } from "$comp";

   
   export let title = 'card title'
   export let img = 'placeholder/placeholder.png'

   export let imgPos = "resp-l"

   export let href = ''

   export let btn = {title: 'Sign me up!', href: '', ariaLabel: ''}
   export let badge = 'Sign me up!'
   export let second_badge = ''
</script>


<CardBase
   {title} {img} {imgPos} {href} {btn}
   badgesTop {badge} {second_badge}
   width="full" ariaLabel={title}
   compactResponsive hoverFx="minimal">

   <Text>
      <slot>
         If a dog chews shoes whose shoes does he choose?
      </slot>
   </Text>
   

</CardBase>