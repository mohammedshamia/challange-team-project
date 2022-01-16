import {useState, useEffect} from 'react';
import { Button } from '../Button/Button.style';
import { CounterContainer, H1Style } from './Counter.styled';
import AddIcon from '@mui/icons-material/Add';
import MaximizeIcon from '@mui/icons-material/Maximize';
import { Typography } from '@mui/material';

 function Counter({value, onChange,maxValue,minValue}:{value:number, minValue:number,maxValue:number,onChange: Function}) {
    const [counter, setCounter] = useState<number>(value);

    const handleChangeCounter=(name:string)=>{
      if(name==='increment')setCounter(counter+1)
      else{setCounter(counter-1)}
    }
    
    useEffect(() => {
        onChange(counter);
    }, [counter])

    return (
     <CounterContainer>
        <Button width= '40PX' height='40px' 
         backgroundColor='white'
         border= '1px solid #FCDD06'
         borderRadius='0'
         color='gray'
         onClick={()=>{handleChangeCounter('increment')}}    >
          <AddIcon/>
        </Button>
        <Typography variant="h3" color="text-primary"  sx={{width:'100px', border:'1px solid #F7F8FC',paddingLeft:'50px',boxSizing:'border-box'}}> {counter}</Typography>
        <Button width= '40PX' height='40px'
          backgroundColor='white'  
           border= '1px solid #FCDD06'
           borderRadius='0'
           color='#000000' 

          onClick={()=>{handleChangeCounter('decrement')}}  >
          <MaximizeIcon/>
        </Button>
     </CounterContainer>
    );
  }


  export default Counter;

