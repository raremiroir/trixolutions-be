<script>
   // Import Components
	import Main             from "$src/lib/components/Base/Wrapper/Main.svelte";
   import SectionWrapper   from "$src/lib/components/Base/Wrapper/SectionWrapper.svelte";
	import Title            from "$src/lib/components/Common/Text/Title.svelte";

	import P from "$src/lib/components/Common/Text/P.svelte";
	import Card from "$src/lib/components/Common/Card/Card.svelte";
	import Image from "$src/lib/components/Base/Media/Image.svelte";

      
</script>

<Main cta>
   <SectionWrapper name="about-us">
      <Title slot="title" type='h1'>Over Ons</Title>
      <div class="grid grid-cols-3 gap-12">
         <Image 
            alt="Tom van Dorst - CEO Trixolutions" klass="rounded-xl shadow-md"
            imgSrc="tom_color"
         />
         <P klass="col-span-2 h-fit" large>
            Trixolutions is als enige in de Benelux lid van de 
            Table Group van Patrick Lencioni. (CAPA Pro)<br/>
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

      <ul class="grid grid-cols-2 lg:grid-cols-3 gap-8">
         <li>
            <Card titleType="h3" titleSmall>
               <span slot="title">Tom van Dorst</span>
               <div class="h-80" slot="image">
                  <Image 
                     alt="Tom van Dorst - CEO Trixolutions"
                     imgSrc="tom"
                  />
               </div>
               CEO / Trainer / Coach
            </Card>
         </li>
         <li>
            <Card titleType="h3" titleSmall>
               <span slot="title">Tamara</span>
               <Image 
                  slot="image" height="h-80" alt="Tamara - Trixolutions Office Manager"
                  imgSrc="tamara"
               />
               Office Manager
            </Card>
         </li>
         <li>
            <Card titleType="h3" titleSmall>
               <span slot="title">Roger</span>
               <Image 
                  slot="image" height="h-80" alt="Roger - Trixolutions Trainer / Acteur"
                  imgSrc="placeholder"
               />
               Trainer / Acteur
            </Card>
         </li>
         <li>
            <Card titleType="h3" titleSmall>
               <span slot="title">Kelly</span>
               <Image 
                  slot="image" height="h-80" alt="Kelly - Trixolutions Trainer / Facilitator"
                  imgSrc="placeholder"
               />
               Trainer / Facilitator
            </Card>
         </li>
         <li>
            <Card titleType="h3" titleSmall>
               <span slot="title">Christoph</span>
               <Image 
                  slot="image" height="h-80" alt="Christoph - Trixolutions Trainer / Facilitator"
                  imgSrc="christoph"
                  imgPos="object-top" klass="w-full"
               />
               Trainer / Facilitator
            </Card>
         </li>
         <li>
            <Card titleType="h3" titleSmall>
               <span slot="title">Frederik</span>
               <Image 
                  slot="image" height="h-80" alt="Frederik - Trixolutions Senior Trainer"
                  imgSrc="frederik"
                  imgPos="object-top" klass="w-full"
               />
               Senior Trainer
            </Card>
         </li>
      </ul>

   </SectionWrapper>
</Main>