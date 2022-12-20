<script>
	import Main from "$src/lib/components/Base/Wrapper/Main.svelte";
import SectionWrapper from "$src/lib/components/Base/Wrapper/SectionWrapper.svelte";
	import Breadcrumbs from "$src/lib/components/Common/Breadcrumbs/Breadcrumbs.svelte";
	import Title from "$src/lib/components/Common/Text/Title.svelte";

</script>

<Main>
   <Breadcrumbs/>
   <SectionWrapper name="contact-us">
      <Title type="h1">Contact Us</Title>
      <!-- lg -->
      <div class="dui-tabs w-full">
         <a class="dui-tab dui-tab-lg dui-tab-lifted w-1/2">Large</a> 
         <a class="dui-tab dui-tab-lg dui-tab-lifted w-1/2 dui-tab-active">Large</a>
      </div>
   
   </SectionWrapper>
</Main>