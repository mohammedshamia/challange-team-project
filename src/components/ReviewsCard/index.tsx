

import { ContainerReviewsCard } from './ReviewsCard.styled'
import FormReview from './ReviewForm';
import Review, { Reviewer } from './Review';

interface Iprops  {
    reviewer:Reviewer[]
}


export default function ReviewsCard ({reviewer}:Iprops) {
  

        return (
            <ContainerReviewsCard>
              {reviewer.map((reviewer,index)=>(
                <Review key={`${index}`}
                    nameReviewer={reviewer.nameReviewer}
                    valueRating={reviewer.valueRating}
                    optionsReviewer={reviewer.optionsReviewer} 
                    timeOfReview={reviewer.timeOfReview}/>))}
                  <FormReview  />
            </ContainerReviewsCard>
            
       )
    
  }


