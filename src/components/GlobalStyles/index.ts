import { Divider, Grid } from "@mui/material";
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
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 2px grey; 
  border-radius: 3px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #707070; 
  border-radius: 3px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #707070; 
}
`;

export const Section = styled.div`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  width: 100%;
  border-radius: 16px;
  ${(props) => props.theme.breakpoints.down("md")} {
    width: 90% !important;
    margin: auto;
  }
`;

interface Iprops {
  justfiyContent?: string;
  width?: string;
  gap?: string;
  alignItems?: string;
  padding?: string;
  flexDirection?: string;
  wrap?: boolean;
  reverse?: boolean;
}

export const Row = styled.div<Iprops>`
  display: flex;
  justify-content: ${(props) => props.justfiyContent || "flex-start"};
  width: ${(props) => props.width || "100%"};
  gap: ${(props) => props.gap || "2px"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  padding-top: "16px";
  ${(props) =>
    props.wrap
      ? `${props.theme.breakpoints.down("md")} {
        flex-direction: column;
          & div{
            width: 100%;
            gap: 10px;
          }
        }`
      : ""};
  ${(props) =>
    props.reverse
      ? `${props.theme.breakpoints.down("md")} {
        flex-direction: column-reverse;
          & div{
            width: 100%;
            gap: 10px;
          }
        }`
      : ""};
`;

export const Column = styled.div<Iprops>`
  display: flex;
  justify-content: ${(props) => props.justfiyContent || "flex-start"};
  flex-direction: column;
  width: ${(props) => props.width || "100%"};
  gap: ${(props) => props.gap || "2px"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  ${(props) => props.theme.breakpoints.down("md")} {
    justify-content: flex-start;
  }
  .stripe {
    border: 1px solid ${(props) => props.theme.palette.text.primary};
    width: 100%;
    padding-inline: 11px;
    height: 40px;
    border-radius: 6px;
    color: ${(props) => props.theme.palette.text.secondary};
    padding: 10px;
  }
`;

interface IpropsDivider {
  widthDivider: string;
}
export const Divder = styled(Divider)<IpropsDivider>((props) => ({
  width: props.widthDivider || "45%",
  height: "7px",
  background: props.theme.palette.primary.main,
  marginTop: "22px",
  zIndex: 1,
}));

export const GridTopRateProducts = styled(Grid)((props) => ({
  border: "1px solid #fcdd06",
  borderRadius: "16px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "auto",
  padding: "6px",
  [props.theme.breakpoints.down("xl")]: {
    flexWrap: "wrap",
  },
  "& .MuiGrid-item": {
    borderRight: `1px solid ${props.theme.palette.divider}`,
    [props.theme.breakpoints.down("md")]: {
      borderRight: "none",
      borderTop: `1px solid ${props.theme.palette.divider}`,
    },
    "&:last-child": { borderRight: "none" },
  },
}));
