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
  const [valueRating, setvalueRating] = useState<number>(value);
  const handleChangeRating = (newValue: number) => {
    setvalueRating(newValue);
  };

  useEffect(() => {
    onChangeValue?.(valueRating);
  }, [valueRating]);

  return (
    <RatingContiner padding={paddingRating}>
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
    </RatingContiner>
  );
}
export default RatingComponent;
