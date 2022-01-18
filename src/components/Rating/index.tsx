import Rating from "@mui/material/Rating";
import { useEffect, useState } from "react";
import { RatingContiner } from "./Rating.styled";

interface Iprops {
  value: number;
  precision?: number;
  isReadOnly?: boolean;
  isDisabled?: boolean;
  name?: string;
  onChangeValue?: Function;
  style?: React.CSSProperties;
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
  const handleChangeRating = (newValue: number) => {
    setvalueRating(newValue);
  };

  useEffect(() => {
    onChangeValue?.(valueRating);
  }, [valueRating]);

  return (
    <Rating
      name={name}
      value={valueRating}
      precision={precision}
      readOnly={isReadOnly}
      disabled={isDisabled}
      onChange={(event, newValue) => {
        handleChangeRating(newValue as number);
      }}
    />
  );
}
export default RatingComponent;
