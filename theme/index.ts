import { extendTheme } from "@chakra-ui/react";

const colors = {
  gray: {
    100: "#F5f5f5",
    200: "#EEEEEE",
    300: "#E0E0E0",
    400: "#BDBDBD",
    500: "#9E9E9E",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
  },
};
const components = {
  Button: {
    variants: {
      link: {
        ":focus": {
          outline: "none",
          boxShadow: "none",
        },
      },
    },
  },
};

const fonts = {
  heading: "Quicksand, sans-serif",
  body: "Lato, sans-serif",
};

const theme = extendTheme({
  fonts,
  colors,
  components,
});

export { theme, colors };
