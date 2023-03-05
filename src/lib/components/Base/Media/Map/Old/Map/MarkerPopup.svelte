<script lang="ts">
	import { Link, Text } from "$src/lib/components";
   import LL from "$i18n/i18n-svelte";

   export let country:string = 'be'
</script>

<div class="w-full flex items-center justify-center flex-col gap-2">
   {#if country === 'be'}
      <span class="font-bold text-xl text-primary-d1 text-center">
         Trixolutions {$LL.base.geo.country.belgium()}
      </span>
      <Text class="!m-0 p-0">Krommelei 1 <br/>2110 Wijnegem, {$LL.base.geo.city.antwerp()}</Text>
   {:else if country === 'nl'}
      <span class="font-bold text-xl text-primary-d1 text-center">
         Trixolutions - {$LL.base.geo.country.netherlands()}
      </span>
      <Text class="!m-0 p-0">Vakwerkhuis<br/>Professor Snijdersstraat 2, 2628 RA Delft</Text>
      <Link 
         href="https://trixolutions.nl"
         target="_blank"
         ariaLabel="{$LL.base.btn.visit_nl()}">
         {$LL.base.btn.visit_nl()}!
      </Link>
   {/if}
</div>