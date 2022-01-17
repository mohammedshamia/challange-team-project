import { styled } from "@mui/material/styles";
import { Button as B } from "@mui/material";

export const Button = styled(B)(({ theme }) => ({
  color: theme.palette.text.primary,
  background: theme.palette.primary.main,
  borderRadius: "8px",
  fontSize: "24px",
  border: "none",
  textDecoration: " none",
  height: "62px",
  "&:hover": {
    background: theme.palette.primary.main,
    opacity: "0.8",
  },
}));
