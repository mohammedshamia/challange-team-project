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
        <Typography
          variant="h4"
          color="text.primary"
          fontWeight="bold"
          fontSize="24px"
        >
          {nameReviewer}
        </Typography>
        <RatingContiner>
          <RatingComponent
            value={valueRating}
            isReadOnly={true}
            name={"disabled"}
          />
          <Typography
            variant="h6"
            color="text.disabled"
            fontWeight="bold"
            fontSize="16px"
          >
            {" "}
            {timeOfReview}
          </Typography>
        </RatingContiner>
        <GrayText>
          <Typography
            variant="h4"
            lineHeight={1.5}
            color="text.primary"
            fontWeight="500"
            fontSize="16px"
          >
            {optionsReviewer}
          </Typography>
        </GrayText>
      </ReviewContiner>
      <Line />
    </div>
  );
}
