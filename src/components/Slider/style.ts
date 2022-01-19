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
