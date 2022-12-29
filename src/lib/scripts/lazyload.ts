// See how the options work here: 
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
let options = {
   root: null,
   rootMargin: "0px",
   threshold: 0
}

export const lazyLoad = (image, src) => {
   const loaded = () => {
       image.classList.remove('opacity-0')
       image.classList.add('opacity-100')
   }
   const observer = new IntersectionObserver(entries => {
       if (entries[0].isIntersecting) {
        // console.log('an image has loaded')
            // replace placeholder src with the image src on observe
           image.src = src                                     
           // check if instantly loaded
           if (image.complete) {                               
               loaded()        
           } else {
               // if the image isn't loaded yet, add an event listener
               image.addEventListener('load', loaded)          
            }
       }
   }, options)
   
   // intersection observer
   observer.observe(image)                                     

   return {
       destroy() {
           // clean up the event listener
           image.removeEventListener('load', loaded)           
       }
   }
}