import { Typography } from "@mui/material";
import RatingComponent from "../../Rating";
import {
  GrayText,
  Line,
  RatingContiner,
  ReviewContiner,
} from "./Review.styled";

export interface Reviewer {
  nameReviewer: string;
  valueRating: number;
  optionsReviewer: string;
  timeOfReview?: string;
}

export default function Review({
  nameReviewer,
  valueRating,
  optionsReviewer,
  timeOfReview,
}: Reviewer) {
  return (
    <div>
      <ReviewContiner>
        <Typography variant="h4" color="text.primary">
          {nameReviewer}
        </Typography>
        <RatingContiner>
          <RatingComponent
            value={valueRating}
            isReadOnly={true}
            name={"disabled"}
          />
          <Typography variant="h6" color="text.disabled">
            {" "}
            {timeOfReview}
          </Typography>
        </RatingContiner>
        <GrayText>
          <Typography
            variant="h4"
            fontSize="17px"
            lineHeight={1.5}
            color="text.primary"
          >
            {optionsReviewer}
          </Typography>
        </GrayText>
      </ReviewContiner>
      <Line />
    </div>
  );
}
