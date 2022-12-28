<script lang="ts">
	import Main from '$src/lib/components/Base/Wrapper/Main.svelte';
	import SectionWrapper from '$src/lib/components/Base/Wrapper/SectionWrapper.svelte';
	import Title from '$src/lib/components/Common/Text/Title.svelte';
	import Breadcrumbs from '$src/lib/components/Core/Breadcrumbs/Breadcrumbs.svelte';
    
</script>

<Breadcrumbs/>
<Main cta>
   <SectionWrapper name="blog">
      <Title slot="title" type='h1'>Trixolutions Blog</Title>
      
   </SectionWrapper>
</Main>