import { styled } from "@mui/material/styles";
import { MobileStepper, Stack as Box } from "@mui/material";

interface Iprops {
  width?: string;
}

export const Contianer = styled("div")({
  display: "flex",
  justifyContent: "space-around",
});
export const Stack = styled(Box)<Iprops>((props) => ({
  alignItems: "flex-start",
  width: props.width || "30%",
  justifyContent: "center",
  [props.theme.breakpoints.down("lg")]: {
    "& h1": {
      fontSize: "3rem",
    },
    "& h3": {
      fontSize: "1.3rem",
    },
  },
  [props.theme.breakpoints.down("md")]: {
    width: "80%",
    alignItems: "center",
    textAlign: "center",
  },
}));
export const DotGroup = styled("div")((props) => ({
  display: "flex",
  justifyContent: "center",
  position: "absolute",
  top: "50px",
  right: "4.8%",
}));
export const Dots = styled(MobileStepper)((props) => ({
  margin: "auto",
  background: "none",
  justifyContent: "center",
  "& 	.MuiMobileStepper-dot": {
    width: "25px",
    height: "25px",
  },
}));
export const DivImg = styled("div")(({ theme }) => ({
  zIndex: "0",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  "& img": {
    [theme.breakpoints.down("lg")]: {
      width: "80%",
    },
  },
}));

interface IpropsDots {
  width?: string;
  height?: string;
  margin?: string;
  active: boolean;
}
export const DotsItem = styled("span")<IpropsDots>`
  width: ${(props) => props.width || "25px"};
  height: ${(props) => props.height || "25px"};
  border-radius: 50%;
  margin: ${(props) => props.margin || "10px"};

  ${(props) =>
    props.active
      ? `background:${props.theme.palette.primary.main}`
      : `background:${props.theme.palette.text.secondary};opacity: 0.3;`};
  cursor: pointer;
`;
