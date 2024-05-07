import { color, extendTheme, type ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}
  
// 3. extend the theme
const theme = extendTheme({ config,
    styles: {
        global: {
            body: {
                bg: '#FFFFF',
                // color: 'green',
            },
          },
      },
    color: {
        gray: {
            50: '#f9f9f9',
            100: '#ededed',
            200: '#d3d3d3',
            300: '#b3b3b3',
            400: 'a0a0a0',
            500: '#898989',
            600: '#6c6c6c',
            700: '#202020',
            800: '#121212',
            900: '#111'
        },
        red: {
            50: '#FFEBEB',
            100: '#FFC7C7',
            200: '#FF9E9E',
            300: '#FF7474',
            400: '#FF4A4A',
            500: '#FF2020', // Main red shade
            600: '#D90000',
            700: '#B20000',
            800: '#8A0000',
            900: '#610000',
        }
    },
    //withDefaultColorScheme(colorScheme: 'red')
})


// import { withDefaultColorScheme } from '@chakra-ui/react'

// const customTheme = extendTheme(withDefaultColorScheme({ colorScheme: 'red' }))

export default theme