const colors = {
   theme: {
      body: {
         text: 'color-gray-800'
      },
      colors: {
         gray:{
            50: '#F0F0EF', 100: '#E1E1E0', 200: '#C3C3C1',
            300: '#AAA9A6', 400: '#8E8C88', 500: '#6F6D6B',
            600: '#5B5957', 700: '#3B3A3A', 800: '#252526',
            900: '#1E1E1F',
         },
         white: '#fff', black: '#000', transparent: '#00000000',
         primary: {
            'l3': '#358FE9', 'l2': '#1670CA', 'l1': '#125CA5',
            DEFAULT: '#0B3259',
            'd1': '#0A3158', 'd2': '#061F37', 'd3': '#041525',
         },
         secondary: {
            'l3': '#F6ECE7', 'l2': '#F5E9E2', 'l1': '#DAD4CC',
            DEFAULT: '#CAC3B8',
            'd1': '#C0B5A3', 'd2': '#978A7A', 'd3': '#7A6C5D',
         },
         accent: {
            'l3': '#E87A5E', 'l2': '#E66B4C', 'l1': '#E35C3B',
            DEFAULT: '#E04E29',
            'd1': '#C73E1D', 'd2': '#A13217', 'd3': '#6B220F',
         },
         success: {
            'l': '#64DD96', DEFAULT: '#23CE6B', 'd': '#139449',
         },
         error: {
            'l': '#E35C3B', DEFAULT: '#C73E1D', 'd': '#6B220F',
         },
         warning: {
            'l': '#F9D885', DEFAULT: '#FFCB47', 'd': '#E4A400',
         },
         info: {
            'l': '#8EBDC5', DEFAULT: '#58A4B0', 'd': '#2F7E8A',
         },
      },
   },
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
      error: {
         default:       `bg-error/70 ring-0 hover:bg-error`,
         default_text:  `text-gray-50 hover:text-white`,
         outline:       `bg-transparent ring-2  hover:bg-error/5 
                         ring-error  hover:ring-error-d`,
         outline_text:  `text-error  hover:text-error-d`
      },
      transparent: {
         default:       `bg-transparent hover:bg-gray-500/30 
                         active:bg-gray-600/20 ring-none border-none`,
         default_text:  `text-primary hover:text-primary-l3 active:primary-l3 drop-shadow-md`,
         outline:       `bg-transparent ring-2  hover:bg-primary-d3/5
                         ring-secondary  hover:ring-secondary-l1`,
         outline_text:  `text-secondary  hover:text-secondary-l1`,
         alt:           `bg-transparent hover:bg-white/40 active:bg-transparent`,
         alt_text:      `text-info hover:text-info-d`,
      },
   }
}

export default colors;