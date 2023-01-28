<script lang="ts">
   import { CardBase } from "$comp";

   export let src:string;
   // export let alt = '';
   // export let imgMode = 'cover';
   export let name = "";
   export let position = "";

   export let cardProps = {
      title: name,
      img: src,

      glass: true,

      imgPos: 'top',
      imgAlign: position,
      width: 'fill',

      href: '',
      article: false,

      ariaLabel: name,

      author: {name: '', img:'', date: '' },
      
      badgesTop: false,

      compactResponsive: true,
      equalHeight: false,

      hoverFx: 'minimal',
   }

</script>


<CardBase {...cardProps}>
   <slot/>
</CardBase>