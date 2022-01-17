import React from "react";
import { Button as Btn } from "./Button.style";
import CircularProgress from "@mui/material/CircularProgress";

interface IProps extends HTMLButtonElement {
  loading: boolean;
  //   children?: React.ReactNode | string;
}

const Button = ({ loading, children, ...props }: IProps) => {
  return (
    <Btn disabled={loading}>
      {loading && <CircularProgress size={14} />}
      {!loading && children}
    </Btn>
  );
};

Button.defaultProps = {
  loading: false,
};

export default Button;
