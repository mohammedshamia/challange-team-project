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
export const DivImg = styled("div")(() => ({
  zIndex: "0",
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
