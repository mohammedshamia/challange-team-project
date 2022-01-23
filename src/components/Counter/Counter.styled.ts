import { styled } from "@mui/material/styles";

interface Iprpos {
  width?: string;
}
export const CounterContainer = styled("div")<Iprpos>((props) => ({
  display: "flex",
  width: props.width || "300px",
  textAlign: "center",
  backgroundColor: "transparent",
  "& h5": {
    borderBottom: `0.3px solid ${props.theme.palette.text.disabled}`,
    borderTop: `0.3px solid ${props.theme.palette.text.disabled}`,
  },
}));
