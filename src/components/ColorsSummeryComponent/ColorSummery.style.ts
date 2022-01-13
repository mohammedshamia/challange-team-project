import styled from "styled-components";

interface Iprpos {
  color: string;
  active?:boolean;
}

export const ColorOptional = styled.div<Iprpos>((props: Iprpos) => ({
  width: "40px",
  height: "40px",
  display: "inline-block",
  cursor: "pointer",
  borderRadius: "50%",
  marginRight: "40px",
  outline: `2px solid ${props.active ? 'black' : 'transparent'} `, 
  border: "5px solid white",
  backgroundColor: props.color,
}));
