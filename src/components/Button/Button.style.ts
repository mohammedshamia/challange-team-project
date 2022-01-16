import { ReactNode } from "react";
import { styled} from '@mui/system';

 interface Iprpos    {
  children: string | ReactNode;
  width: string| number;
  height?: string| number;
  backgroundColor?:string;
  color?:string;
  border?:string;
  borderRadius?: string | undefined;
  fontSize?: string;
  to?:string;
}

export const Button = styled('button')<Iprpos>((props) => ({
  color: props.color || '#242424',
  backgroundColor:props.backgroundColor || props.theme.palette.primary.main,
  width: Number(props.width) ? props.width + 'px' : props.width,
  height:  Number(props.height) ? props.height + 'px' : props.height|| '40px',
  borderRadius: props.borderRadius || "10px",
  fontSize: props.fontSize || "16px",
  border: props.border|| "none",
  cursor: "pointer",
  textDecoration: "none",
  "&:hover": { opacity:'.8' },
  
}));
