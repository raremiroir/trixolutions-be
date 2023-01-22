<script>
	import { locale } from "$i18n/i18n-svelte";
</script>

<div class="w-full h-full relative bg-white p-4 rounded-lg shadow-lg">
	<iframe
		src={`https://www.google.com/maps/d/embed?mid=1liCN_arijHdcbO2WwY-cBFMYjpZtxxM&hl=${$locale}&z=8&ehbc=2E312F`}
		class="w-full h-full rounded-md shadow-inner border-4 border-[#2e312f]"
		frameborder="0"
		scrolling="no"
		marginheight="0"
		marginwidth="0"
		title="Trixolutions Vestiging België"
	/>
</div>