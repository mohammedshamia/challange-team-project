import { useState, useEffect } from "react";
// import { Button } from '../Button/Button.style';
import { CounterContainer } from "./Counter.styled";
import AddIcon from "@mui/icons-material/Add";
import MaximizeIcon from "@mui/icons-material/Maximize";
import { Typography, Button } from "@mui/material";
interface Iprops {
  value: number;
  minValue?: number;
  maxValue?: number;
  onChange: Function;
  WidthCounter?:string;
  backgroundCounter?:string
}
function Counter({ value, onChange, maxValue, minValue,WidthCounter,backgroundCounter }: Iprops) {
  const [counter, setCounter] = useState<number>(value);

  const handleChangeCounter = (name: string) => {
    if (name === "increment") setCounter(counter + 1);
    else {
      setCounter(counter - 1);
    }
  };

  useEffect(() => {
    onChange(counter);
  }, [counter]);

  return (
    <CounterContainer  width={WidthCounter}  background={backgroundCounter}>
      <Button
        disabled={counter === maxValue && true}
        sx={{ width: "48px", height: "40px", borderRadius: "0" }}
        onClick={() => {
          handleChangeCounter("increment");
        }}
        variant="outlined"
      >
        <AddIcon />
      </Button>
      <Typography
        variant="h3"
        color="text-primary"
        sx={{
          width: "100px",
          border: "1px solid #F7F8FC",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        {" "}
        {counter}
      </Typography>
      <Button
        disabled={(counter === 0 || minValue === counter) && true}
        sx={{ width: "48px", height: "40px", borderRadius: "0" }}
        onClick={() => {
          handleChangeCounter("decrement");
        }}
        variant="outlined"
      >
        <MaximizeIcon sx={{ paddingTop: "calc(50% - 1px)" }} />
      </Button>
    </CounterContainer>
  );
}

export default Counter;
