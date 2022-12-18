const colors = {
   button: {
      primary: {
         default:       `bg-primary-d1 ring-0 hover:bg-primary`,
         default_text:  `text-secondary-l2 hover:text-secondary-l3`,
         outline:       `bg-transparent ring-2 hover:bg-primary-d3/5 
                         ring-primary-d1 hover:ring-primary`,
         outline_text:  `text-primary-d1 hover:text-primary`,
      },
      secondary: {
         default:       `bg-secondary ring-0 hover:bg-secondary-l1`,
         default_text:  `text-primary-d1 hover:text-primary`,
         outline:       `bg-transparent ring-2  hover:bg-primary-d3/5 
                         ring-secondary  hover:ring-secondary-l1`,
         outline_text:  `text-secondary  hover:text-secondary-l1`
      },
      transparent: {
         default:       `bg-transparent hover:bg-gray-500/30 
                         active:bg-gray-600/20 ring-none border-none`,
         default_text:  `text-primary hover:text-primary-d2 active:text-black`,
         outline:       `bg-transparent ring-2  hover:bg-primary-d3/5
                         ring-secondary  hover:ring-secondary-l1`,
         outline_text:  `text-secondary  hover:text-secondary-l1`,
         alt:           `bg-transparent hover:bg-white/40 active:bg-transparent`,
         alt_text:      `text-info hover:text-info-d`,
      },
   }
}

export default colors;