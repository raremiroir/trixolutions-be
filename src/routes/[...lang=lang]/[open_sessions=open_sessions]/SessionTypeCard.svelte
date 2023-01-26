<script lang="ts">
	import { Text, CardBase } from "$comp";

   
   export let title = 'card title'
   export let img = 'placeholder/placeholder.png'

   export let imgPos = "resp-l"
   export let width = 'full'

   export let href = ''
   export let article = false

   export let ariaLabel = ''

   export let author = {name: '', img:'', date: '' }

   export let btn = {title: 'Sign me up!', href: '', ariaLabel: ''}
   export let second_btn = {title: 'More info', href: '', ariaLabel: ''}
      
   export let badgesTop = true
   export let badge = 'Sign me up!'
   export let second_badge = ''

   export let compact = false
   export let compactResponsive = true

   export let noHoverFx = false
   export let noActiveFx = false
   export let noFx = false
</script>


<CardBase
{title} {img} {imgPos} {width}
{href} {article} {ariaLabel}
{author} {btn} {second_btn}
{badgesTop} {badge} {second_badge}
{compact} {compactResponsive}
{noHoverFx} {noActiveFx} {noFx}>

   <Text>
      <slot>
         If a dog chews shoes whose shoes does he choose?
      </slot>
   </Text>
   

</CardBase>