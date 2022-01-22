import Typography from "@mui/material/Typography";
import React from "react";
import { IReview } from "../../../@types/products.types";
import ReviewsCard from "../../../components/ReviewsCard";
import { Reviewer } from "../../../components/ReviewsCard/Review";
import { ReviewesContainer } from "../ProductPage.styled";

interface Iprops {
  reviews: IReview[];
}

export default function ReviewesProdect({ reviews }: Iprops) {
  return (
    <ReviewesContainer>
      <Typography
        variant="h2"
        fontSize="30px"
        color="text.primary"
        sx={{ margin: "auto", padding: "20px" }}
      >
        Reviews
      </Typography>
      <ReviewsCard reviews={reviews} />
    </ReviewesContainer>
  );
}
