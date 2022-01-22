import { ContainerReviewsCard } from "./ReviewsCard.styled";
import FormReview from "./ReviewForm";
import Review, { Reviewer } from "./Review";
import { IReview } from "../../@types/products.types";

interface Iprops {
  reviews: IReview[];
}

export default function ReviewsCard({ reviews }: Iprops) {
  return (
    <ContainerReviewsCard>
      {reviews.map((review, index) => (
        <Review
          key={`${index}`}
          nameReviewer={"Test"}
          valueRating={review.rating}
          optionsReviewer={review.comment}
          timeOfReview={""}
        />
      ))}
      <FormReview />
    </ContainerReviewsCard>
  );
}
