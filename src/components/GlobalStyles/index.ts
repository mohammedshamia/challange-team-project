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
`;

export const Section = styled.div`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  width: 100%;
  border-radius: 16px;
`;

interface Iprops {
  justfiyContent?: string;
  width?: string;
  gap?: string;
  alignItems?: string;
  padding?: string;
}

export const Row = styled("div")<Iprops>((props) => ({
  display: "flex",
  justifyContent: props.justfiyContent || "flex-start",
  flexDirection: "column",
  width: props.width || "100%",
  gap: props.gap || "2px",
  alignItems: props.alignItems || "flex-start",
  margin: "auto",
  paddingTop:"16px",
}));

export const Column = styled("div")<Iprops>((props) => ({
  display: "flex",
  justifyContent: props.justfiyContent || "flex-start",
  width: props.width || "100%",
  gap: props.gap || "2px",
  alignItems: props.alignItems || "flex-start",
}));

interface IpropsDivider {
  widthDivider: string;
}
export const Divder = styled(Divider)<IpropsDivider>((props) => ({
  width: props.widthDivider || "45%",
  height: '7px',
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