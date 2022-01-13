import { createTheme, Theme, ThemeOptions } from "@mui/material/styles";

const baseTheme: ThemeOptions = createTheme({
  typography: {
    fontFamily: "Mulish, sans-serif",
  },
});
const lighttheme: Theme = createTheme({
  ...baseTheme,
  palette: {
    mode: "light",
    primary: {
      main: "",
      light: "",
      dark: "",
    },
    secondary: {
      main: "",
      light: "",
      dark: "",
    },
    error: {
      main: "",
      light: "",
      dark: "",
    },
  },
});
const darkTheme: Theme = createTheme({
  ...baseTheme,
  palette: {
    mode: "dark",
    primary: {
      main: "",
      light: "",
      dark: "",
    },
  },
});
