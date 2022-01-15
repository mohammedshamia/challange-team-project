import { ReactNode } from "react";
import styled from "styled-components";
import {Button as B } from '@mui/material'

 interface Iprpos    {
  width: string| number;
    children: string | ReactNode;
  height?: string| number;
  borderRadius?: string | undefined;
  color?: string;
  backgroundColor?: string;
  fontSize?: string;
}

export const Button = styled(B)<Iprpos>((props: Iprpos) => ({
  width: Number(props.width) ? props.width + 'px' : props.width,
  height:  Number(props.height) ? props.height + 'px' : props.height|| '40px',
  color: props.color || "#000000",
  backgroundColor: props.backgroundColor || "#FCDD06",
  borderRadius: props.borderRadius || "10px",
  fontSize: props.fontSize || "16px",
  border: "none",
  cursor: "pointer",
  textDecoration: "none",
  "&:hover": { backgroundColor: "#dfc300" },
}));
