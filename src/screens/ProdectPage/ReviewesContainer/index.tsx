import Typography from "@mui/material/Typography";
import React from "react";
import { IReview } from "../../../@types/products.types";
import ReviewsCard from "../../../components/ReviewsCard";
import FormReview from "../../../components/ReviewsCard/ReviewForm";
import { ReviewesContainer } from "../ProductPage.styled";

interface Iprops {
  reviews: IReview[];
}

export default function ReviewesProdect({ reviews }: Iprops) {
  return (
    <ReviewesContainer>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Typography
          variant="h2"
          fontSize="30px"
          color="text.primary"
          sx={{ padding: "20px" }}
        >
          Reviews
        </Typography>
        <FormReview />
      </div>

      {reviews.length > 0 && <ReviewsCard reviews={reviews} />}
    </ReviewesContainer>
  );
}
