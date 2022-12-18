// Define Tailwind Plugins
const daisyui = require("daisyui");
const typography = require("@tailwindcss/typography");
const forms = require("@tailwindcss/forms");
const lineclamp = require("@tailwindcss/forms");

// Define Tailwind Config
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

//   Tailwind Theme Customization
  theme: {
      // Change Font Sizes
      fontSize: {
         xs: ['10px', '14px'],
         sm: ['12px', '14px'],
         base: ['14px', '18px'],
         lg: ['16px', '18px'],
         xl: ['18px', '24px'],
         '2xl': ['20px', '24px'],
         '3xl': ['24px', '28px'],
         '4xl': ['28px', '32px'],
         '5xl': ['32px', '36px'],
         '6xl': ['40px', '44px'],
         '7xl': ['48px', '56px'],
         '8xl': ['56px', '60px'],
         '9xl': ['64px', '68px'],
      },
      // Change Colors
      colors: {
         gray:{
            50: '#F0F0EF',
            100: '#E1E1E0',
            200: '#C3C3C1',
            300: '#AAA9A6',
            400: '#8E8C88',
            500: '#6F6D6B',
            600: '#5B5957',
            700: '#3B3A3A',
            800: '#252526',
            900: '#1E1E1F',
         }
      },
      // Extend Tailwind Theme
      extend: {
         // Extend Font Family
         fontFamily: {
            'body': ['quasimoda', "Segoe UI", '-apple-system', 'BlinkMacSystemFont', 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
            'title': ['Josefin Sans', "Segoe UI", '-apple-system', 'BlinkMacSystemFont', 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
            'titlemono': ['attribute-mono', 'monospace'],
         },
         // Extend Font Size
         fontSize: {
            '2xs': ['8px', '10px'],
            '10xl': ['72px', '76px'],
            '11xl': ['80px', '84px'],
         },
         // Extend Colors
         colors: {
            white: '#fff',
            black: '#000',
            transparent: '#00000000',
            primary: {
               'l3': '#358FE9',
               'l2': '#1670CA',
               'l1': '#125CA5',
               DEFAULT: '#0B3259',
               'd1': '#0A3158',
               'd2': '#061F37',
               'd3': '#041525',
            },
            secondary: {
               'l3': '#F6ECE7',
               'l2': '#F5E9E2',
               'l1': '#DAD4CC',
               DEFAULT: '#CAC3B8',
               'd1': '#C0B5A3',
               'd2': '#978A7A',
               'd3': '#7A6C5D',
            },
            accent: {
               'l3': '#E87A5E',
               'l2': '#E66B4C',
               'l1': '#E35C3B',
               DEFAULT: '#E04E29',
               'd1': '#C73E1D',
               'd2': '#A13217',
               'd3': '#6B220F',
            },
            success: {
               'l': '#64DD96',
               DEFAULT: '#23CE6B',
               'd': '#139449',
            },
            error: {
               'l': '#E35C3B',
               DEFAULT: '#C73E1D',
               'd': '#6B220F',
            },
            warning: {
               'l': '#F9D885',
               DEFAULT: '#FFCB47',
               'd': '#E4A400',
            },
            info: {
               'l': '#8EBDC5',
               DEFAULT: '#58A4B0',
               'd': '#2F7E8A',
            },

         },
         // Extend Opacity
         opacity: {
            1: '.01', 1.5: '.015', 2: '.02', 2.5: '.025', 3: '.03', 3.5: '.035', 4: '.04', 
            4.5: '.045', 15: '.15', 35: '.35', 45: '.45', 55: '.55', 65: '.65', 
            80: '.8', 85: '.85', 96: '.96', 97: '.97', 98: '.98', 99: '.99',
         },
         // Extend Layering
         zIndex: {
            2: 2,
            3: 3,
            99: 99,
         },
         // Extend Spacing
         spacing: {
            13: '3.25rem',
            15: '3.75rem',
            17: '4.25rem',
            18: '4.5rem',
            19: '4.75rem',
            21: '5.25rem',
            22: '5.5rem',
            23: '5.75rem',
            25: '6.25rem',
            26: '6.5rem',
            27: '6.75rem',
            50: '12.5rem',
            54: '13.5rem',
            58: '14.5rem',
            62: '15.5rem',
            66: '16.5rem',
            68: '17rem',
            70: '17.5rem',
            74: '18.5rem',
            76: '19rem',
            78: '19.5rem',
            84: '21rem',
            88: '22rem',
            92: '23rem',
            100: '25rem',
            104: '26rem',
            108: '27rem',
            112: '28rem',
            116: '29rem',
            120: '30rem',
            124: '31rem',
            128: '32rem',
            132: '33rem',
            136: '34rem',
            140: '35rem',
            144: '36rem',
            148: '37rem',
            152: '38rem',
            156: '39rem',
            160: '40rem',
            180: '45rem',
            200: '50rem',
            220: '55rem',
            240: '60rem',
            260: '65rem',
            280: '70rem',
            300: '75rem',
         },
      }
  },
// Add Tailwind Plugins
  plugins: [forms, typography, daisyui, lineclamp],
// DaisyUI Config
  daisyui: {
     styles: true,
     themes: false,
     base: true,
     utils: true,
     logs: true,
     darkTheme: 'dark',
     prefix: 'dui-',
     themes: [
        {
           trixo: {
              'primary': '#0A3158',
              'secondary': '#CAC3B8',
              'accent': '#C73E1D',
              'neutral': '#DAD4CC',
              'info': '#58A4B0',
              'success': '#23CE6B',
              'warning': '#FFCB47',
              'error': '#C73E1D',
           }
        }
     ]
  },
  darkMode: 'class'
};

module.exports = config;