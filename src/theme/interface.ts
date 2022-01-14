import "styled-components";
import { Theme } from "@mui/material/styles";

interface CustomTheme {
  typography: {
    fontFamily: string;
    fontSize: number;
    h1: {
      fontSize: string;
      lineHeight: number;
      letterSpacing: string;
      fontWeight: string;
    };
    h2: {
      fontSize: string;
      fontWeight: string;
      lineHeight: number;
      letterSpacing: string;
    };
    h3: {
      fontSize: string;
      fontWeight: string;
      lineHeight: number;
      letterSpacing: string;
    };
    h4: {
      fontSize: string;
      lineHeight: number;
      letterSpacing: string;
    };
    button: {
      fontSize: string;
      lineHeight: number;
      fontWeight: string;
      textTransform: string;
      letterSpacing: string;
    };
  };
  palette: {
    mode: string;
    primary: {
      main: string;
    };
    secondary: {
      main: string;
    };

    text: {
      primary: string;
      secondary: string;
      disabled: string;
    };
    background: {
      paper: string;
      default: string;
    };
  };
}

declare module "@mui/material/styles" {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
