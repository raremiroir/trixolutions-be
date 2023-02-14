<script lang="ts">
	import { Text, CardBase } from "$comp";

   export let cardProps = {
      title: 'card title',
      img: 'placeholder/placeholder.png',

      imgPos: "top",
      width: 'w-96',

      href: '',
      article: false,

      ariaLabel: '',

      author: {name: 'Tom van Dorst', img:'team/tom-bw.webp', date: '1/1/22' },

      btn: {title: 'Button!', href: '', ariaLabel: ''},
      second_btn: {title: 'second', href: '', ariaLabel: ''},
      
      badgesTop: false,
      badge: 'Sign me up!',
      second_badge: 'now',

      compact: false,
      compactResponsive: true,
      equalHeight: false,

      hoverFx: 'full',
   }

</script>


<CardBase {...cardProps}>

   <Text>
      <slot>
         If a dog chews shoes whose shoes does he choose?
      </slot>
   </Text>
   

</CardBase>