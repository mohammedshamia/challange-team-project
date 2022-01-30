import styled from "styled-components";

export const WrapperTab = styled("div")((props) => ({
  flexGrow: "1",
  backgroundColor: props.theme.palette.background.default,
  display: "flex",
  gap: "32px",
  [props.theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
  " & .MuiTabs-root": {
    borderRight: "none",
    borderRadius: "16px",
    backgroundColor: props.theme.palette.background.paper,
  },
  " & .MuiButtonBase-root": {
    textTransform: "none",
    color: props.theme.palette.text.primary,
  },
  "& .MuiTabs-scroller": {
    padding: "20px 16px",
    borderRadius: "16px",
    backgroundColor: props.theme.palette.background.paper,
    width: "398px",
    maxWidth: "100%",
    [props.theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  "& .Mui-selected": {
    color: props.theme.palette.primary.main,
    fontWeight: "bold",
  },
  "& .Mui-selected img": {
    outline: `3px solid  ${props.theme.palette.primary.main}`,
  },
  " & .Mui-selected .MuiTypography-h2": {
    color: props.theme.palette.text.primary,
  },
  " & .MuiTabs-indicator": {
    display: "none",
  },
  "& .MuiTabs-flexContainer": {
    alignItems: " flex-start",
  },
}));

export const TabComponent = styled("div")((props) => ({
  backgroundColor: props.theme.palette.background.paper,
  padding: "20px 16px",
  borderRadius: "16px",
  borderRight: "none",
  width: "950px",
  [props.theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const Line = styled.hr`
  width: 100%;
  height: 2px;
  margin-top: 1rem;
`;
export const Button = styled.button`
  outline: none;
  text-align: left;
  border: none;
  font-size: 24px;
  padding: 20px 16px;
  line-height: 30px;
  color: ${(props) => props.theme.palette.text.secondary};
  background-color: transparent;
  cursor: pointer;
`;
