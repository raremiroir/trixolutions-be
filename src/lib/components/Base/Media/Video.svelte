<script lang="ts">

   // Set video source
   export let src = 'https://sveltejs.github.io/assets/caminandes-llamigos.mp4'
   // Set video thumbnail
   export let poster = 'https://sveltejs.github.io/assets/caminandes-llamigos.jpg'


   let time = 0;
   let duration:any;
   let paused = true;

   let showControls = true;
   let showControlsTimeout:any;

   // Track time of last mouse event
   let lastMouseDown:any;

   function handleMove(e:any) {
      // make controls visible, but fade after 2.5s of inactivity
      clearTimeout(showControlsTimeout)
      showControlsTimeout = setTimeout(() => showControls = false, 2500);
      showControls = true;

      if (!duration) return // video not loaded yet
      if (e.type !== 'touchmove' && !(e.buttons & 1)) return; //mouse not down

      const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
      const { left, right } = this.getBoundingClientRect();
      time = duration * (clientX - left) / (right - left);
   }
   // Listen for clicks
   function handleMouseDown(e:any) {
      lastMouseDown = new Date();
   }

   function handleMouseup(e:any) {
      if (new Date() - lastMouseDown < 300) {
         if (paused) e.target.play();
         else e.target.pause();
      }
   }

   function format(seconds:any) {
      if (isNaN(seconds)) return '...';

      const minutes = Math.floor(seconds / 60);
      seconds = Math.floor(seconds % 60);
      if (seconds < 10) seconds = '0' + seconds;

      return `${minutes}:${seconds}`;
   }
</script>

<div class="border-4 border-primary w-full">
   <div class=" m-4
         relative">
      <video 
         {src} {poster}
         on:mousemove={handleMove}
         on:touchmove|preventDefault={handleMove}
         on:mousedown={handleMouseDown}
         on:mouseup={handleMouseup}
         bind:currentTime={time}
         bind:duration
         bind:paused
         class="w-full"
      >
         <track kind="captions">
      </video>
      
      <div class="controls
            absolute bottom-0 w-full transition-opacity duration-1000
            {duration && showControls ? 'opacity-100' : 'opacity-0'}
         ">
         
         <div class="
               relative w-full 
               flex justify-between
            ">
            <span class="w-12 py-1 px-2 text-white drop-shadow-sm text-lg opacity-70">
               {format(time)}
            </span>
            
            <span class="py-1 px-2 text-white drop-shadow-sm text-lg opacity-70">
               klik om {paused ? 'af te spelen' : 'te pauzeren'} <br/>
               sleep om te zoeken
            </span>
            
            <span class="w-12 text-right py-1 px-2 text-white drop-shadow-sm text-lg opacity-70">
               {format(duration)}
            </span>
         </div>
   
         <progress 
            value="{(time / duration) || 0}"  
            class="block w-full h-3 appearance-none"/>
      
      </div>
   </div>
   
   <style lang="postcss">
      progress::-webkit-progress-bar {
         @apply bg-info-l border-primary border-2;
      }
      progress::-webkit-progress-value {
         @apply bg-primary;
      }
   </style>
</div>