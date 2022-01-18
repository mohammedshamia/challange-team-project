import { Box as B, Typography as T } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Box = styled(B)(({ theme }) => ({
  padding: "25px 30px",
  backgroundColor: theme.palette.secondary.main,
  borderRadius: "16px",
}));

interface IProps {
  weight?: string;
  fs?: string;
  dec?: boolean;
}
export const Typography = styled(T)<IProps>((props) => ({
  fontWeight: props.weight || "normal",
  fontSize: props.fs || "32px",
  textDecoration: props.dec ? "line-through" : "none",
}));
