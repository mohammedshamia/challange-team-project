import Rating from "@mui/material/Rating";
import { useEffect, useState } from "react";
import { CounterRating } from "./Rating.styled";

export type Name =
  | "disabled"
  | "read-only"
  | "no-value"
  | "simple-controlled"
  | "half-rating"
  | "half-rating-read";

interface Iprops {
  value: number;
  precision?: number;
  isReadOnly?: boolean;
  isDisabled?: boolean;
  name?: string;
  onChangeValue?: Function;
  paddingRating?: string;
}

function RatingComponent({
  value,
  precision,
  isReadOnly,
  isDisabled,
  name,
  onChangeValue,
  paddingRating,
}: Iprops) {
  // const [valueRating, setvalueRating] = useState<number>(value);
  // const handleChangeRating=(newValue : number)=>{
  //   setvalueRating(newValue );

  // }

  // useEffect(() => {
  //   onChangeValue?.(valueRating)
  // }, [valueRating])

  return (
    <CounterRating padding={paddingRating}>
      <Rating
        name={name}
        value={value}
        precision={precision}
        readOnly={isReadOnly}
        disabled={isDisabled}
        onChange={(e, value_) => onChangeValue?.(value_)}
      />
    </CounterRating>
  );
}
export default RatingComponent;
