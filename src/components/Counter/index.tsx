import {useState, useEffect} from 'react';
import { CounterContainer } from './Counter.styled';


 function Counter({value, onChange}:{value:number, onChange: Function}) {
    const [counter, setCounter] = useState<number>(value);
    console.log(counter)
    
    useEffect(() => {
        onChange(counter);
    }, [counter])

    return (
      <CounterContainer>
        <button onClick={() =>{setCounter(counter+1)}}>+</button>
        <h1>{counter}</h1>
        <button onClick={() =>{setCounter(counter-1)}}>-</button>
      </CounterContainer>
    );
  }


  export default Counter;