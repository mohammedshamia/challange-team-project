import styled from "styled-components";

interface Iprpos {
  active?:boolean;
}

export const ButtonGroup = styled.div`
display:flex;
`

export const SizeOptional = styled.div<Iprpos>((props: Iprpos) => ({
  width: "135px",
  height: "40px",
  marginRight: "40px",
  display: "flex",
  justifyContent:'center',
  alignItems:'center',
  cursor: "pointer",
  borderRadius: "10px",
  fontSize:'20px',
  fontWeight:'bold',
  backgroundColor:`${props.active?'#242424':'#F5F5F5'}`,
  color:`${props.active?'white':'black'}`,
  "&:hover":{backgroundColor:`${props.active?null:'#dedede'}`}
}));
