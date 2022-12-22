const colors = {
   button: {
      primary: {
         default:       `bg-primary ring-2 ring-primary 
                         hover:bg-primary-d2 active:bg-primary-d3
                         hover:ring-primary-d2 active:ring-primary-d3`,
         default_text:  `text-secondary-l2 hover:text-secondary-l3 active:text-gray-50`,
         outline:       `bg-transparent ring-2 hover:bg-primary-d3/10 
                         ring-primary hover:ring-primary-d1 active:bg-primary-d3/30`,
         outline_text:  `text-primary hover:text-primary-d1 hover:text-primary-d2`,
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
         default_text:  `text-primary hover:text-primary-l3 active:text-black drop-shadow-md`,
         outline:       `bg-transparent ring-2  hover:bg-primary-d3/5
                         ring-secondary  hover:ring-secondary-l1`,
         outline_text:  `text-secondary  hover:text-secondary-l1`,
         alt:           `bg-transparent hover:bg-white/40 active:bg-transparent`,
         alt_text:      `text-info hover:text-info-d`,
      },
   }
}

export default colors;