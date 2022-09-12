import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
// theme.ts

// 2. Add your color mode config
const theme: ThemeConfig = extendTheme({
  styles: {
    initialColorMode: "light",
    useSystemColorMode: false,
    global: (props: { colorMode: string; theme: string }) => ({
      "html, body": {
        backgroundColor: "green.100",
        color: props.colorMode === "dark" ? "white" : "gray.600",
        lineHeight: "tall"
      }
    })
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Helvetica, serif",
    mono: "Menlo, monospace"
  }
});

export default theme;
