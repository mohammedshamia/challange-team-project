import { styled } from "@mui/material/styles";

interface Iprpos {
width?:string;
}
export const CounterContainer = styled('div')<Iprpos>((props) => ({
  display: 'flex',
  width:props.width||'300px'
 
  }));

  

  


  



