<script lang="ts">
   import { CardBase } from "$comp";

   export let src:string;
   // export let alt = '';
   // export let imgMode = 'cover';
   export let name = "";
   export let position = "bottom-0";
   export let alt = name;

   $: cardProps = {
		title: name,
		img: src,
      imgPos: position,
      
      height: 'h-72 md:h-80 xl:h-88',
      imgHeight: 'h-2/3',
      bodyHeight: 'h-1/3',
      
		href: '',
      alt: alt,
		article: false,
		ariaLabel: name,

      hoverFx: 'minimal',

      badge: '',
      second_badge: '',

		author: { name: '', img: '', date: '' },


		btn: { title: '', href: '', ariaLabel: '' },
		second_btn: { title: '', href: '', ariaLabel: '' },
		
	};

</script>


<CardBase {...cardProps}>
   <slot/>
</CardBase>