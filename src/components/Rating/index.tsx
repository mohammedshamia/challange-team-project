import Rating from "@mui/material/Rating";
import { useEffect,useState } from "react";

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
  onChange:Function;
}

function RatingComponent({
  value,
  precision,
  isReadOnly,
  isDisabled,
  name,
  onChange,
}: Iprops) {

  const [Value, setValue] = useState<number>(value);
  
  useEffect(() => {
      onChange(Value)
  }, [Value])

  return (
    <Rating
      name={name}
      defaultValue={Value}
      precision={precision}
      readOnly={isReadOnly}
      disabled={isDisabled}
       />
  );
}
export default RatingComponent;