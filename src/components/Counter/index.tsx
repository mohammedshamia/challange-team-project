import {useState, useEffect} from 'react';
import { Button } from '../Button/Button.style';
import { CounterContainer, H1Style } from './Counter.styled';
import AddIcon from '@mui/icons-material/Add';
import MaximizeIcon from '@mui/icons-material/Maximize';

 function Counter({value, onChange}:{value:number, onChange: Function}) {
    const [counter, setCounter] = useState<number>(value);

    const handleChangeCounter=(name:string)=>{
      if(name==='+')setCounter(counter+1)
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
         onClick={()=>{handleChangeCounter('+')}} >
          <AddIcon/>
        </Button>
        <H1Style>{counter}</H1Style>
        <Button width= '40PX' height='40px'  backgroundColor='white'  
           border= '1px solid #FCDD06'
          onClick={()=>{handleChangeCounter('-')}} >
          <MaximizeIcon/>
        </Button>
     </CounterContainer>
    );
  }


  export default Counter;

