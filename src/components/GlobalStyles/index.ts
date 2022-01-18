import styled, { createGlobalStyle } from "styled-components";

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

export const Section = styled.div`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  height: 100%;
  width: 100%;
  border-radius: 16px;
`;

interface Iprops {
  justfiyContent: string;
  width: string;
  gap?: string;
  alignItems?: string;
}

export const Row = styled("div")<Iprops>((props) => ({
  display: "flex",
  justifyContent: props.justfiyContent || "flex-start",
  flexDirection: "column",
  width: props.width || "100%",
  gap: props.gap || "2px",
  alignItems: props.alignItems || "flex-start",
}));

export const Column = styled("div")<Iprops>((props) => ({
  display: "flex",
  justifyContent: props.justfiyContent || "flex-start",
  width: props.width || "100%",
  gap: props.gap || "2px",
  alignItems: props.alignItems || "flex-start",
}));
