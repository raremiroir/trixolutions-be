<script>
   // Import Components
	import Main             from "$src/lib/components/Base/Wrapper/Main.svelte";
   import SectionWrapper   from "$src/lib/components/Base/Wrapper/SectionWrapper.svelte";
	import Title            from "$src/lib/components/Common/Text/Title.svelte";

	import P from "$src/lib/components/Common/Text/P.svelte";
	import Card from "$src/lib/components/Common/Card/Card.svelte";
	import Image from "$src/lib/components/Base/Media/Image.svelte";

   // Import images
      // Tom BW
      import tom_bw400 from '$img/team/Tom-BW_400w.webp'
      import tom_bw600 from '$img/team/Tom-BW_600w.webp'
      import tom_bw800 from '$img/team/Tom-BW_800w.webp'
      import tom_bw1080 from '$img/team/Tom-BW_1080w.webp'
      // Tom
      import tom400 from '$img/team/Tom-Color_400w.webp'
      import tom600 from '$img/team/Tom-Color_600w.webp'
      import tom800 from '$img/team/Tom-Color_800w.webp'
      import tom1080 from '$img/team/Tom-Color_1080w.webp'
      // Christoph
      import christoph400 from '$img/team/Christoph_400w.webp'
      import christoph600 from '$img/team/Christoph_600w.webp'
      import christoph800 from '$img/team/Christoph_800w.webp'
      import christoph1080 from '$img/team/Christoph_1080w.webp'
      // Frederik
      import frederik400 from '$img/team/Frederik_400w.webp'
      import frederik600 from '$img/team/Frederik_600w.webp'
      import frederik800 from '$img/team/Frederik_800w.webp'
      import frederik1080 from '$img/team/Frederik_1080w.webp'
      // Tamara
      import tamara400 from '$img/team/Tamara_400w.webp'
      import tamara600 from '$img/team/Tamara_600w.webp'
      import tamara800 from '$img/team/Tamara_800w.webp'
      import tamara1080 from '$img/team/Tamara_1080w.webp'
      
</script>

<Main>
   <SectionWrapper name="about-us">
      <Title slot="title" type='h1'>Over Ons</Title>
      <div class="grid grid-cols-3 gap-12">
         <Image 
            alt="Tom van Dorst - CEO Trixolutions" klass="rounded-xl shadow-md" height="h-full"
            w400={tom400} w600={tom600} w800={tom800} w1080={tom1080}
         />
         <P klass="col-span-2 h-fit" large>
            Trixolutions is als enige in de Benelux lid van de 
            Table Group van Patrick Lencioni. (CAPA Pro)<br/>p
            <br/>
            We zijn een dynamisch trainingskantoor met een sterke focus 
            op teamcoaching en leiderschapsvaardigheden met de Lencioni 
            inzichten, ervaring en methodieken.<br/>
            <br/>
            Reeds jaren worden we in de Lencioni CAPA Pro Academy op 
            wekelijkse basis begeleid, gecoacht en getraind in de 
            verschillende Lencioni modellen, assessment en toepassingen 
            door Patrick Lencioni en zijn consultants zelf.<br/>
            <br/>
            In samenwerking met The Table Group zetten we de modellen, 
            assessments, inzichten en methodieken om naar de Nederlandse en 
            Vlaamse markt, cultuur en taal.<br/>
            <br/>
            Door deze kennis, gecombineerd met meer dan 200 teamtrajecten 
            op de teller en meer dan 100 afgestudeerde Lencioni Coaches 
            op de Belgische en Nederlandse markt, zijn we de ideale 
            partner om jouw Lencioni kennis te verhogen naar het hoogste niveau!
         </P>
      </div>
   </SectionWrapper>

   <SectionWrapper name="our-team">
      <Title type="h2">Ons Team</Title>

      <div class="grid grid-cols-2 lg:grid-cols-3 gap-8">
         <Card title="Tom van Dorst" titleType="h3">
            <Image 
               slot="image" height="h-80" alt="Tom van Dorst - CEO Trixolutions"
               w400={tom_bw400} w600={tom_bw600} w800={tom_bw800} w1080={tom_bw1080}
            />
            CEO / Trainer / Coach
         </Card>
         <Card title="Tamara" titleType="h3">
            <Image 
               slot="image" height="h-80" alt="Tamara - Trixolutions Office Manager"
               w400={tamara400} w600={tamara600} w800={tamara800} w1080={tamara1080}
            />
            Office Manager
         </Card>
         <Card title="Roger" titleType="h3">
            <Image 
               slot="image" height="h-80" alt="Roger - Trixolutions Trainer / Acteur"
               w400={tamara400} w600={tamara600} w800={tamara800} w1080={tamara1080}
            />
            Trainer / Acteur
         </Card>
         <Card title="Kelly" titleType="h3">
            <Image 
               slot="image" height="h-80" alt="Kelly - Trixolutions Trainer / Facilitator"
               w400={tamara400} w600={tamara600} w800={tamara800} w1080={tamara1080}
            />
            Trainer / Facilitator
         </Card>
         <Card title="Christoph" titleType="h3">
            <Image 
               slot="image" height="h-80" alt="Christoph - Trixolutions Trainer / Facilitator"
               w400={christoph400} w600={christoph600} w800={christoph800} w1080={christoph1080}
               objectPos="object-top"
            />
            Trainer / Facilitator
         </Card>
         <Card title="Frederik" titleType="h3">
            <Image 
               slot="image" height="h-80" alt="Frederik - Trixolutions Senior Trainer"
               w400={frederik400} w600={frederik600} w800={frederik800} w1080={frederik1080}
               objectPos="object-top"
            />
            Senior Trainer
         </Card>
      </div>

   </SectionWrapper>
</Main>