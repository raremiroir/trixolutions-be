<script>
   // Import Components
   import { Main, SectionWrapper, Title, P } from "$comp/core";
   import { Card, TwicPic } from "$comp/common";

	import Image from "$src/lib/components/Common/Media/Image.svelte";

      
</script>

<Main cta>
   <SectionWrapper name="about-us">
      <Title slot="title" type='h1'>Over Ons</Title>
      <div class="grid grid-cols-3 gap-12">
         <Image 
            alt="Tom van Dorst - CEO Trixolutions" klass="rounded-xl shadow-md"
            imgSrc="tom-color"
         />
         <P class="col-span-2 h-fit" large>
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
            <Card>
               <Title type="h3" small slot="title">Tom van Dorst</Title>
               <div class="h-80" slot="image">
                  <TwicPic
                     src="tom-bw"
                     alt="Tom van Dorst - CEO Trixolutions"
                     mode="cover"
                  />
               </div>
               CEO / Trainer / Coach
            </Card>
         </li>
         <li>
            <Card>
               <Title type="h3" small slot="title">Tamara</Title>
               <Image 
                  slot="image" height="h-80" alt="Tamara - Trixolutions Office Manager"
                  imgSrc="tamara-bw"
               />
               Office Manager
            </Card>
         </li>
         <li>
            <Card>
               <Title type="h3" small slot="title">Roger</Title>
               <Image 
                  slot="image" height="h-80" alt="Roger - Trixolutions Trainer / Acteur"
                  imgSrc="placeholder"
               />
               Trainer / Acteur
            </Card>
         </li>
         <li>
            <Card>
               <Title type="h3" small slot="title">Kelly</Title>
               <Image 
                  slot="image" height="h-80" alt="Kelly - Trixolutions Trainer / Facilitator"
                  imgSrc="placeholder"
               />
               Trainer / Facilitator
            </Card>
         </li>
         <li>
            <Card>
               <Title type="h3" small slot="title">Christoph</Title>
               <Image 
                  slot="image" height="h-80" alt="Christoph - Trixolutions Trainer / Facilitator"
                  imgSrc="christoph-bw"
                  imgPos="object-top" klass="w-full"
               />
               Trainer / Facilitator
            </Card>
         </li>
         <li>
            <Card>
               <Title type="h3" small slot="title">Frederik</Title>
               <Image 
                  slot="image" height="h-80" alt="Frederik - Trixolutions Senior Trainer"
                  imgSrc="frederik-bw"
                  imgPos="object-top" klass="w-full"
               />
               Senior Trainer
            </Card>
         </li>
      </ul>

   </SectionWrapper>
</Main>