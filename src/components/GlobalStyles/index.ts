import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    padding:0;
    margin: 0;
    background:${(props) => props.theme.palette.background.default};   
    transition: all 0.2s, background 0.2s, border-color 0.2s, box-shadow 0.2s;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
}
`;
