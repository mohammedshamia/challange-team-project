import styled from "styled-components";

interface Iprops {
  width: string;
  height: string;
  placeholder?: string;
  type?: string;
  borderRadius?: string;
  color?: string;
  backgroundColor?: string;
  fontSize?: string;
  borderColor?: string;
  padding?: string;
}

const Input = styled.input<Iprops>((props: Iprops) => ({
  outline: "none",
  padding: props.padding || "20px",
  border: `1px solid ${props.borderColor || "#707070"}`,
  width: `${props.width}`,
  height: `${props.height}`,
  color: props.color || "#000000",
  backgroundColor: props.backgroundColor || "white",
  borderRadius: props.borderRadius || "10px",
  fontSize: props.fontSize || "13px",
}));

export default Input;
