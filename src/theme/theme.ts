import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme({
  typography: {
    fontFamily: "Mulish, sans-serif",
    fontSize: 14,
    h1: {
      fontSize: "3.75rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: "bold",
      lineHeight: 1.2,
      letterSpacing: "-0.01562em",
    },
    h3: {
      fontSize: "2rem",
      fontWeight: "normal",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
    },
    h4: {
      fontSize: "1.875rem",
      lineHeight: 1.235,
      letterSpacing: "-0.01562em",
    },
    button: {
      fontSize: "22px",
      lineHeight: 1.167,
      fontWeight: "normal",
      textTransform: "uppercase",
      letterSpacing: "-0.01562em",
    },
  },
});
export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "light",
    primary: {
      main: "#fcdd06",
    },
    secondary: {
      main: "#f2f2f2",
    },
    divider: "rgba(112,112,112,0.3)",
    success: {
      main: "#4BB543",
    },
    text: {
      primary: "#242424",
      secondary: "#707070",
      disabled: "#979797",
    },
    background: {
      paper: "#f7f8fc",
      default: "#ffffff",
    },
  },
});

export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "dark",
    primary: {
      main: "#fcdd06",
    },
    secondary: {
      main: "#2f2f2f",
    },
    success: {
      main: "#4BB543",
    },
    text: {
      primary: "#ffffff",
      secondary: "#f7f8fc",
      disabled: "rgba(255,255,255,0.5)",
    },
    background: {
      paper: "#282c34",
      default: "#282c34",
    },
  },
});
