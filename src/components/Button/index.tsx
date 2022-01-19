import React, { ReactNode } from "react";
import { Button as Btn } from "./Button.style";
import CircularProgress from "@mui/material/CircularProgress";

interface Iprops {
  borderRadius?: string;
  border?: string;
  height?: string;
  width?: string;
  fontSize?: string;
  background?: string;
  loading?: boolean;
  children: ReactNode | string;
}
const Button = ({ loading, children, ...props }: Iprops) => {
  return (
    <Btn {...props} disabled={loading}>
      {loading ? <CircularProgress size={14} /> : children}
    </Btn>
  );
};

Button.defaultProps = {
  loading: false,
};

export default Button;
