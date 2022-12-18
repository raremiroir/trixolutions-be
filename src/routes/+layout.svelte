<script>
	import Footer from "$src/lib/components/Common/Footer/Footer.svelte";
	import Navbar from "$src/lib/components/Common/Navbar/Navbar.svelte";
import "../app.postcss";</script>




<svelte:head>
</svelte:head>

<Navbar/>

   <slot></slot>

<Footer />