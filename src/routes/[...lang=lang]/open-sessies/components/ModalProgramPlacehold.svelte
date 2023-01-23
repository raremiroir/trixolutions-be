<script>
   import { 
      H3, H5, Subtitle, 
      Modal, Button, List, ListItem, 
      Tabs, TabList, Tab, TabPanel, 
      } from "$comp";
</script>

<Modal icon="mdi:calendar-text">
   <Button ariaLabel="programma" slot="trigger" block outlined bold size="lg" icon="mdi:calendar-text">
      Programma
   </Button>
   <H3 slot="title" small>Programma</H3>
   <Tabs>
      <TabList>
         <Tab>Voortraject</Tab>
         <Tab>Dag 1</Tab>
         <Tab>Dag 2</Tab>
         <Tab>Natraject</Tab>
      </TabList>
      <TabPanel>
         <List>
            <ListItem large>Je ontvangt een schriftelijke intake om je verwachtingen goed in kaart te brengen.</ListItem>
            <ListItem large>Je ontvangt een e-mail + link om het Lencioni “Team Assessment” in te vullen.</ListItem>
         </List>
      </TabPanel>
      <TabPanel>
         <List>
            <ListItem large><strong>Wie is Patrick Lencioni</strong> en zijn Table Group?</ListItem>
            <ListItem large>Lencioni's meest succesvolle boeken, inzichten en verbanden met elkaar.</ListItem>
            <ListItem large>Ons Trixolutions lidmaatschap met The Table Group – wat houdt dat juist in?</ListItem>
            <ListItem large>Gedachtengoed van de Lencioni Piramide uit <em>“De 5 Frustraties van Teamwork”</em>.</ListItem>
            <br/>
            <ListItem large>Tussentijdse oefeningen tegen dag 2.</ListItem>
         </List>
         <hr/>
         <div class="grid grid-cols-2 gap-4">
            <div class="col-span-1">
               <H5 small>Piramide Laag 1</H5>
               <List>
                  <Subtitle italic>"Vertrouwen"</Subtitle>
                  <ListItem large>Welke Lencioni-oefeningen zijn er beschikbaar voor een teamcoach en hoe deze in te zetten?</ListItem>
               </List>
            </div>
            <div class="col-span-1">
               <H5 small>Piramide Laag 2</H5>
               <List>
                  <Subtitle italic>"Respectvolle Conflicten"</Subtitle>
                  <ListItem large>Welke Lencioni-oefeningen zijn er beschikbaar voor een teamcoach en hoe deze in te zetten?</ListItem>
               </List>
            </div>
         </div>
      </TabPanel>
      <TabPanel></TabPanel>
      <TabPanel>
         <List>
            <ListItem large>Je kan met de trainer (Tom) een uur persoonlijke opvolgcoaching inplannen.</ListItem>
            <ListItem large>Je krijgt gedurende 12 maanden, elke maand, een Lencioni Newsletter met nieuwe en extra oefeningen, samenvattingen van Lencioni Podcasts en inzichten uit de Lencioni CAPA PRO Academy.   </ListItem>
            <ListItem large>Je kan het volledige digitale Lencioni Team Assessment 1 keer inzetten, onder je eigen logo, ter waarde van 490€.</ListItem>
            
         </List>
      </TabPanel>
   </Tabs>
</Modal>