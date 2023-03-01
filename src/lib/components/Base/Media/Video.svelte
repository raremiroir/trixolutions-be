<script lang="ts">
	import Icon from "@iconify/svelte";
	import { fade } from "svelte/transition";
	import { onMount } from "svelte";

   // Set video source
   export let src = 'https://sveltejs.github.io/assets/caminandes-llamigos.mp4'
   // Set video source (ogg) (optional)
   export let src_ogg = ''
   // Set video thumbnail
   export let poster = 'https://sveltejs.github.io/assets/caminandes-llamigos.jpg'


   let time = 0;
   let duration:any;
   let paused = true;
   let muted = false;
   let volume = 1;
   let oldVolume = 0;
   let showVolumeSlider = false;
   let isFullscreen = false;

   // Track time of last mouse event
   let lastMouseDown:any;

   // Listen for clicks on video itself
   function handleMouseDown(e:any) {
      lastMouseDown = new Date();
   }
   // Pause/Play if clicked on video
   function handleMouseup(e:any) {
      if (new Date() - lastMouseDown < 300) {
         if (paused) e.target.play();
         else e.target.pause();
      }
   }

   // Format time
   function format(seconds:any) {
      if (isNaN(seconds)) return '...';

      const minutes = Math.floor(seconds / 60);
      seconds = Math.floor(seconds % 60);
      if (seconds < 10) seconds = '0' + seconds;

      return `${minutes}:${seconds}`;
   }

   // Play / Pause Video
   const playPauseVideo = () => paused = paused || time === duration ? false : true;
   // Stop Video
   const stopVideo = () => { paused = true; time = 0; }
   // Mute Video & Show/Hide Volume Controls
   const toggleVolume = () => {
      if (muted) {
         muted = false;
         volume = oldVolume;
      } else if (!muted) {
         muted = true;
         oldVolume = volume;
         volume = 0;
      }
   };
   const unmuteVolume = () => muted = false;
   const showVolume = () => showVolumeSlider = true;
   const hideVolume = () => showVolumeSlider = false;
   

   $: videoDuration = Math.round(duration);
   $: videoTime = Math.round(time);

   function onKeyDown(e:any) {
         switch(e.keyCode) {
            // Pause/Play = P = 80
            case 80:
               playPauseVideo();
               break;
            // // Fullscreen = T = 84
            // case 84:
            //    toggleFullScreen();
            //    break;
            // Stop = X = 88
            case 88:
               stopVideo()
               break;
            // Mute = M = 77
            case 77:
               toggleVolume();
               break;
         }
      }

   onMount(() => {
      const videoContainer:any = document.getElementById('video-container');
      const fullscreenButton:any = document.getElementById('btnFullScreen');
      const videoElement:any = document.getElementById('video-element');
      const toggleFullScreen = () => {
         if(document.fullscreenElement) {
            document.exitFullscreen();
         } else if (document.webkitFullscreenElement) {
            document.webkitExitFullscreen();
         } else if (videoContainer.webkitRequestFullscreen()) {
            videoContainer.webkitRequestFullscreen();
         } else {
            videoContainer.requestFullscreen();
         }
      }
      fullscreenButton.onclick = toggleFullScreen;
      videoElement.ondblclick = toggleFullScreen;
   })
   
</script>

<div class="border-4 border-primary p-4 rounded-xl">
   <div id="video-container"
      class="
         p-0 bg-gray-50 relative group
         border-4 border-none rounded-xl">
         
      <video 
         {poster}
         on:mousedown={handleMouseDown}
         on:mouseup={handleMouseup}
         bind:currentTime={time}
         bind:duration={duration} bind:paused bind:muted
         bind:volume {src}
         id='video-element'
         class="
            border-4 border-primary rounded-lg
            w-full h-auto bg-black
            "
      >
         <source {src} type='video/mp4' />
         {#if src_ogg}<source src={src_ogg} type='video/mp4' />{/if}
         <track kind="captions">
      </video>
      
      <div
         id="controls" 
         class="
            absolute w-full justify-between
            text-center 
            border-4 rounded-b-lg 
            border-primary
            mt-0 py-2 px-4
            bottom-0 bg-gray-50
            transition-all duration-100 ease-linear
            opacity-10 group-hover:opacity-80 hover:opacity-100
            flex flex-row items-center gap-4
            left-1/2 -translate-x-1/2
            h-fit
            ">
         
         <!-- Progress Bar -->
         <div class="
               w-full flex flex-row items-center gap-2
               text-primary font-bold font-body text-base">
            <!-- Current Time -->
            <span class=w-1/5>{format(time)}</span>
            
            <!-- Progress Bar -->
            <div class="relative w-full">
               <progress 
                  id="progress-bar" 
                  min="0" max={videoDuration} value={videoTime} 
                  class="
                     w-full absolute -left-1/2 translate-x-1/2
                     -bottom-2 h-4" />
                  <input 
                  type="range" id="seek" 
                  min="0" max={videoDuration} bind:value={time} 
                  class="
                     seek w-full h-4 absolute
                     bg-transparent 
                     appearance-none cursor-pointer
                     focus:outline-none -bottom-2 
                     left-1/2 -translate-x-1/2
                     " />
            </div>
            <!-- Duration of Video -->
            <span class="w-1/5">{format(duration)}</span>
         </div>
   
         <!-- Buttons -->
         <div class="flex flex-row gap-4">   
            <!-- Play/Pause Button -->
            <button 
               id="btnPlayPause" title="play"
               class="
               w-8 h-8 z-3
               cursor-pointer 
               flex justify-center items-center
               border-primary border-2 rounded-full
               transition-shadow duration-300 ease-out
               bg-gray-50 hover:shadow-black/50 shadow-md" 
               on:keydown|preventDefault={onKeyDown}
               on:click={() => playPauseVideo()}
               >
               {#if paused}
                  <Icon icon="material-symbols:play-arrow-rounded" width="30" height="30" color="#0b3259" />
               {:else}
                  <Icon icon="material-symbols:pause-rounded" width="30" height="30" color="#0b3259"/>
               {/if}
            </button>
   
            <!-- Stop Button -->
            <button
               id="btnStop" title="stop"
               on:keydown|preventDefault={onKeyDown}
               class="
                  w-8 h-8 z-3
                  cursor-pointer 
                  flex justify-center items-center
                  border-primary border-2 rounded-full
                  transition-shadow duration-300 ease-out
                  bg-gray-50 hover:shadow-black/50 shadow-md" 
               on:click={() => stopVideo()}
               >
               <Icon icon="material-symbols:stop-rounded" width="30" height="30" color="#0b3259" />
            </button>
            
            <!-- Volume Button -->
            <button
               id="btnMute" title="mute"
               class="
                  w-8 h-8 z-3
                  cursor-pointer 
                  flex justify-center items-center
                  border-primary border-2 rounded-full
                  transition-shadow duration-300 ease-out
                  bg-gray-50 hover:shadow-black/50 shadow-md" 
               on:keydown|preventDefault={onKeyDown}
               on:click={() => toggleVolume()}
               on:mouseover={() => showVolume()}
               on:focus={() => showVolume()}
               on:mouseleave={() => hideVolume()}
               on:blur={() => hideVolume()}
               >
               {#if muted}
                  <Icon icon="material-symbols:volume-off-rounded" width="30" height="30" color="#0b3259" />
               {:else}
                  <Icon icon="material-symbols:volume-up-rounded" width="30" height="30" color="#0b3259" />
               {/if}
            </button>
            <!-- Volume Slider -->
            {#if showVolumeSlider}
               <div
                  transition:fade
                  on:focus={() => showVolume()}
                  on:mouseleave={() => hideVolume()}
                  on:blur={() => hideVolume()}
                  on:mouseenter={() => showVolume()}
                  class="
                     absolute -rotate-90 
                     bottom-16 right-[22px] 
                     py-0.5 pl-6 pr-2
                     flex items-center justify-center
                     border-2 border-primary rounded-r-2xl
                     shadow-black/50 shadow-md
                     bg-gray-50">
                  <input 
                     type="range"
                     on:mousedown={() => {unmuteVolume(); showVolume();}}
                     id="volume-bar" title="volume"
                     class="w-20 cursor-pointer volume-bar py-[6px]"
                     min="0" max="1" step="0.1" bind:value={volume}/>
               </div>
            {/if}
   
            <!-- Full Screen Toggle Button -->
            <!-- TODO: Icon not changing on doubleclick --> FIX -->
            <button
               id="btnFullScreen" title="toggle full screen" 
               on:keydown|preventDefault={onKeyDown}
               class="
                  w-8 h-8 z-3
                  cursor-pointer 
                  flex justify-center items-center
                  border-primary border-2 rounded-full
                  transition-shadow duration-300 ease-out
                  bg-gray-50 hover:shadow-black/50 shadow-md"
               on:click={() => {isFullscreen = !isFullscreen}}>
               <Icon 
                  icon="{isFullscreen ? 'material-symbols:fullscreen-exit-rounded' : 'material-symbols:fullscreen-rounded'}" 
                  width="30" height="30" color="#0b3259"/>
            </button>
         </div>
         
         {#if paused}
            <div 
               in:fade={{duration:200}}
               out:fade={{duration:500}}
               on:click={() => playPauseVideo()}
               on:keydown={() => playPauseVideo()}
               class="
                  absolute w-fit h-fit
                  bottom-1/2 -translate-y-40
                  left-1/2 -translate-x-1/2
                  bg-black/60 rounded-full p-4
                  flex items-center justify-center">
               <Icon icon="{ paused ? 'material-symbols:pause-rounded' : 'material-symbols:play-arrow-rounded'}" width="120" />
            </div>
         {/if}
      </div>   
   </div>
</div>
   
   <style lang="postcss">
      progress::-webkit-progress-bar {
         @apply bg-primary/30 border-primary border-2 rounded-full;
      }
      progress::-webkit-progress-value {
         @apply bg-primary/70 rounded-full;
      }

      .seek::-webkit-slider-runnable-track {
         width: 100%;
         cursor: pointer;
         @apply rounded-full transition-all duration-300 ease-linear;
         -webkit-appearance: none;
      }
      .seek::-webkit-slider-thumb {
         height: 16px;
         width: 20px;
         @apply bg-primary rounded-full transition-all duration-100 ease-linear;
         cursor: pointer;
         -webkit-appearance: none;
         margin-left: -2px;
      }
      .seek::-webkit-slider-thumb:hover {
         @apply bg-primary-l2;
      }
      .seek::-webkit-slider-thumb:active {
         @apply bg-primary-l1;
      }
      .volume-bar::-webkit-slider-runnable-track {
         width: 100%;
         cursor: pointer;
         @apply rounded-full transition-all duration-300 ease-linear bg-primary/50;
         -webkit-appearance: none;
      }
   </style>