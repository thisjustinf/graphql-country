// theme.ts

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
  styles:{
    global:(props: { colorMode: string, theme: string }) => ({
        'html, body': {
            fontSize: 'sm',
            backgroundColor: "#011627",
            color: props.colorMode === 'dark' ? 'white' : 'gray.600',
            lineHeight: 'tall',
          },
    })
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
  },
}

// 3. extend the theme
const theme = extendTheme({ config })

export default theme