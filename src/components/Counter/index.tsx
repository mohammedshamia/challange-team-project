import { useState, useEffect } from "react";
import { CounterContainer } from "./Counter.styled";
import AddIcon from "@mui/icons-material/Add";
import { Typography } from "@mui/material";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { Button } from "../Button/Button.style";

interface Iprops {
  value: number;
  minValue?: number;
  maxValue?: number;
}

function Counter({ value, maxValue, minValue }: Iprops) {
  const [counter, setCounter] = useState<number>(value);

  const handleChangeCounter = (name: string) => {
    name === "increment" ? setCounter(counter + 1) : setCounter(counter - 1);
  };

  return (
    <CounterContainer
      sx={{ width: "100%", maxWidth: "220px", margin: { xs: "auto", lg: "0" } }}
    >
      <Button
        disabled={(counter === 0 || minValue === counter) && true}
        onClick={() => {
          handleChangeCounter("decrement");
        }}
        width="48px"
        height="40px"
        borderRadius="0"
        background="palette.primary.main"
        border="1px solid #FCDD06"
        sx={{ minWidth: "40px" }}
      >
        <HorizontalRuleIcon />
      </Button>
      <Typography
        variant="h5"
        fontWeight={"bold"}
        color="text.primary"
        sx={{ flexGrow: "99" }}
      >
        {counter}
      </Typography>
      <Button
        disabled={counter === maxValue && true}
        onClick={() => {
          handleChangeCounter("increment");
        }}
        width="48px"
        height="40px"
        borderRadius="0"
        border="1px solid #FCDD06"
        background="background.default"
        sx={{ minWidth: "40px" }}
      >
        <AddIcon />
      </Button>
    </CounterContainer>
  );
}

export default Counter;
