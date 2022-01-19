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
  width:string,
  height:string,
  margin:string,
  position:string,
  top:string,
  
}
// export const DotsItem = styled("span")((props) => ({
//   width: props.width || "25px",
//   height: props.width || "25px",
//   borderRadius: "50%",
//   margin: props.margin || "10px",
//   background: props.theme.palette.secondary.main,
//   position: props.position || "static",
//   top: props.top || "50%",
//   right: props.right || "50%",
// }));
