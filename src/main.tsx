import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import theme from './theme'
import { ChakraProvider, ColorModeScript, ThemeProvider } from '@chakra-ui/react'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            {/* <RouterProvider router={router}/> */}
            <App/>
      </ChakraProvider>
  </React.StrictMode>,
)
