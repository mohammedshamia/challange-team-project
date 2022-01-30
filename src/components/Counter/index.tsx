import { CounterContainer } from "./Counter.styled";
import AddIcon from "@mui/icons-material/Add";
import { Typography } from "@mui/material";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { Button } from "../Button/Button.style";

interface Iprops {
  value: number;
  minValue?: number;
  maxValue?: number;
  onChange?: (value: number) => void;
}

function Counter({ value, maxValue, minValue = 1, onChange }: Iprops) {
  const handleChangeCounter = (name: string) => {
    name === "increment" ? onChange?.(value + 1) : onChange?.(value - 1);
  };

  return (
    <CounterContainer sx={{ width: "100%", maxWidth: "220px" }}>
      <Button
        disabled={minValue === value}
        onClick={() => {
          handleChangeCounter("decrement");
        }}
        color="secondary"
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
        {value}
      </Typography>
      <Button
        color="secondary"
        disabled={value === maxValue}
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
