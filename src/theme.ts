import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "system",
};

const theme = extendTheme(config, {
  fonts: {
    heading: `'SF Pro Text', sans-serif`,
    body: `'SF Pro Text', sans-serif`,
  },
});

export default theme;
