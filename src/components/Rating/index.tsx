import Rating from "@mui/material/Rating";
import {  useEffect,useState, SyntheticEvent } from "react";

export type Name =
  | "disabled"
  | "read-only"
  | "no-value"
  | "simple-controlled"
  | "half-rating"
  | "half-rating-read";

interface Iprops {
  value: number;
  precision: number;
  isReadOnly: boolean;
  isDisabled: boolean;
  name: Name;
  onChangeValue:Function;
}

function RatingComponent({
  value,
  precision,
  isReadOnly,
  isDisabled,
  name,
  onChangeValue,
}: Iprops) {
  const [valueRating, setvalueRating] = useState<number>(value);

  useEffect(() => {
    onChangeValue(valueRating)
  }, [valueRating])

  return (
    <Rating
      name={name}
      value={valueRating}
      precision={precision}
      readOnly={isReadOnly}
      disabled={isDisabled}
      onChange={(event, newValue) => {
        setvalueRating(newValue as number);
        console.log(valueRating)
      }}
       />
  );
}
export default RatingComponent;
function handleChange(value: number) {
  throw new Error("Function not implemented.");
}

