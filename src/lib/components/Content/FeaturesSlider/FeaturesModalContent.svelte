<script lang="ts">
	import { Modal, Image, Text, Title, Lightbox } from "$comp";

   export let id:number;
   export let imgSrc:string;
   export let imgAlt:string;

</script>

<Modal content {id}>
   <Title type="h3" smaller slot="title">
      <slot name="title">Title</slot>
   </Title>
   <div class="grid md:grid-cols-2 gap-4 w-full">
      <div class="col-span-1">
         <slot/>
         <Text small color="text-primary-l1">
            <slot name="extra"/>
         </Text>
      </div>
      <div class="col-span-1">
         <Lightbox 
            alt={imgAlt}
            src={imgSrc}
         />
      </div>
   </div>
</Modal>