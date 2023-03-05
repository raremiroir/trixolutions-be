<script>
	import { Button } from "$src/lib/components";
   import { createEventDispatcher } from "svelte";
   const dispatch = createEventDispatcher();

   let show = true;
   const showHideMarkers = () => {
      show = !show;
      dispatch("showhide-markers", show);
   }

   let lines = true;
   const showHideLines = () => {
      lines = !lines;
      dispatch("showhide-lines", lines);
   }


   const btnProps = {
      size: "lg",
      color: 'primary',
      square: true,
   }
</script>


<div class="flex flex-row gap-4">
   <Button
      {...btnProps}
      icon="tabler:zoom-reset"
      on:click={() => dispatch("click-reset")}
      title="Reset view"
      ariaLabel="Reset view"
   />
   
   <Button
      {...btnProps}
      icon="tabler:eye"
      on:click={() => showHideMarkers()}
      title="Show/Hide markers"
      ariaLabel="Show/Hide markers"
   />
   
   <Button
      {...btnProps}
      icon="tabler:a-b-2"
      on:click={() => showHideLines()}
      title="Show/Hide lines"
      ariaLabel="Show/Hide lines"
   />
</div>