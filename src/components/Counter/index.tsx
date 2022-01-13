import {useState, useEffect} from 'react';
import { Button } from '../Button/Button.style';
import { CounterContainer } from './Counter.styled';
import AddIcon from '@mui/icons-material/Add';
import MaximizeIcon from '@mui/icons-material/Maximize';

 function Counter({value, onChange}:{value:number, onChange: Function}) {
    const [counter, setCounter] = useState<number>(value);
    console.log(counter)
    
    useEffect(() => {
        onChange(counter);
    }, [counter])

    return (
      <CounterContainer>
        <Button width= '40PX' height='40px'   onClick={() =>{setCounter(counter+1)}}  >
          <AddIcon/>
        </Button>
        <h1>{counter}</h1>
        <Button width= '40PX' height='40px'   onClick={() =>{setCounter(counter-1)}}  >
          <MaximizeIcon/>
        </Button>
        </CounterContainer>
    );
  }


  export default Counter;