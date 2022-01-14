import { ReactNode } from "react";
import styled from "styled-components";

interface Iprpos {
  width: string;
  height: string;
  children: string | ReactNode;
  borderRadius?: string | undefined;
  color?: string;
  backgroundColor?: string;
  fontSize?: string;
  border?:string;
}

export const Button = styled.button<Iprpos>((props: Iprpos) => ({
  width: props.width,
  height: props.height,
  color: props.color || "#000000",
  backgroundColor: props.backgroundColor || "#FCDD06",
  borderRadius: props.borderRadius || "10px",
  fontSize: props.fontSize || "16px",
  border:props.border|| "none",
  cursor: "pointer",
  textDecoration: "none",
  "&:hover": { backgroundColor: "#dfc300" },
}));
