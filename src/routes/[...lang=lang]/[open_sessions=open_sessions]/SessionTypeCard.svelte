<script lang="ts">
	import { Text, CardNew } from "$comp";

   
   export let title = 'card title'
   export let img = 'placeholder/placeholder.png'

   export let imgPos = "resp-l"

   export let href = ''

   export let btn = {title: 'Sign me up!', href: '', ariaLabel: ''}
   export let badge = 'Sign me up!'
   export let second_badge = ''

   let klass = '';
   export {klass as class};

   export let cardProps = {
      title: title,
      
      img: img,
      imgPos: imgPos,

      href: href,
      
      btn: btn,
      
      badge: badge,
      second_badge: second_badge,
      badgesTop: true,

      direction: 'row',

      hoverFx: 'minimal',
      height: 'h-64 sm:h-60 md:h-64 lg:h-72 xl:h-72 2xl:h-80 3xl:h-96'
   }
</script>


<CardNew {...cardProps} class={klass}>

   <Text>
      <slot>
         If a dog chews shoes whose shoes does he choose?
      </slot>
   </Text>
   

</CardNew>