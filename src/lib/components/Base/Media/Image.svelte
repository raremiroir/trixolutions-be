<script>
   // Import Images
   import images from './images';

   export let src = '';
   export let alt = '';

   // Lazy load image?
   export let lazy = false;
   // Extra classes on image wrap
   export let klass = '';

   // Choose image
   export let img = '';
   // Set image position (default object-center)
   export let objectPos = '';

   // Set height
   export let height = '';


   let IMGw400 = ''; let IMGw600 = '';
   let IMGw800 = ''; let IMGw1080 = '';

   switch (img) {
      case 'beslissende-voorsprong':
         src = images.stock.beslissende_voorsprong['800w'];
         IMGw400 = images.stock.beslissende_voorsprong['400w']; IMGw600 = images.stock.beslissende_voorsprong['600w'];
         IMGw800 = images.stock.beslissende_voorsprong['800w']; IMGw1080 = images.stock.beslissende_voorsprong['1080w'];
         break;
      case 'ideale-teamplayer':
         src = images.stock.ideale_teamplayer['800w'];
         IMGw400 = images.stock.ideale_teamplayer['400w']; IMGw600 = images.stock.ideale_teamplayer['600w'];
         IMGw800 = images.stock.ideale_teamplayer['800w']; IMGw1080 = images.stock.ideale_teamplayer['1080w'];
         break;
      case 'kracht-gezonde-teams':
         src = images.stock.kracht_gezonde_teams['800w'];
         IMGw400 = images.stock.kracht_gezonde_teams['400w']; IMGw600 = images.stock.kracht_gezonde_teams['600w'];
         IMGw800 = images.stock.kracht_gezonde_teams['800w']; IMGw1080 = images.stock.kracht_gezonde_teams['1080w'];
         break;
      case 'lencioni-ctc':
         src = images.stock.lencioni_ctc['800w'];
         IMGw400 = images.stock.lencioni_ctc['400w']; IMGw600 = images.stock.lencioni_ctc['600w'];
         IMGw800 = images.stock.lencioni_ctc['800w']; IMGw1080 = images.stock.lencioni_ctc['1080w'];
         break;
      case 'vergaderen-dodelijk':
         src = images.stock.vergaderen_dodelijk['800w'];
         IMGw400 = images.stock.vergaderen_dodelijk['400w']; IMGw600 = images.stock.vergaderen_dodelijk['600w'];
         IMGw800 = images.stock.vergaderen_dodelijk['800w']; IMGw1080 = images.stock.vergaderen_dodelijk['1080w'];
         break;
      case 'tom-color':
         src = images.team.tom.color['800w'];
         IMGw400 = images.team.tom.color['400w']; IMGw600 = images.team.tom.color['600w'];
         IMGw800 = images.team.tom.color['800w']; IMGw1080 = images.team.tom.color['1080w'];
      case 'tom-bw':
         src = images.team.tom.bw['800w'];
         IMGw400 = images.team.tom.bw['400w']; IMGw600 = images.team.tom.bw['600w'];
         IMGw800 = images.team.tom.bw['800w']; IMGw1080 = images.team.tom.bw['1080w'];
         break;
      case 'tamara':
         src = images.team.tamara.bw['800w'];
         IMGw400 = images.team.tamara.bw['400w']; IMGw600 = images.team.tamara.bw['600w'];
         IMGw800 = images.team.tamara.bw['800w']; IMGw1080 = images.team.tamara.bw['1080w'];
         break;
      case 'christoph':
         src = images.team.christoph.bw['800w'];
         IMGw400 = images.team.christoph.bw['400w']; IMGw600 = images.team.christoph.bw['600w'];
         IMGw800 = images.team.christoph.bw['800w']; IMGw1080 = images.team.christoph.bw['1080w'];
         break;
      case 'frederik':
         src = images.team.frederik.bw['800w'];
         IMGw400 = images.team.frederik.bw['400w']; IMGw600 = images.team.frederik.bw['600w'];
         IMGw800 = images.team.frederik.bw['800w']; IMGw1080 = images.team.frederik.bw['1080w'];
         break;
   
      default:
         break;
   }
</script>

<img 
   srcset="{IMGw400} 400w, {IMGw600} 600w, {IMGw800} 800w, {IMGw1080} 1080w"
   sizes="(max-width: 600px) 400w, (max-width: 800px) 600w, (max-width: 1200px) 800w, (min-width: 1201px) 1080w"
   {src} {alt} loading={lazy ? 'lazy' : 'eager'}
   class="{height ? height : 'h-60'} object-cover {objectPos ? objectPos : 'object-center'} {klass}"
/>

