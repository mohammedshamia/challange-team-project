
import { ContainerReviewsCard } from './ReviewsCard.styled'
import FormReview from './ReviewForm';
import Review, { Reviewer } from './Review';

interface Iprops  {
    reviewer:Reviewer[]
    addAntherReviewer:Function
}


export default function ReviewsCard ({reviewer,addAntherReviewer}:Iprops) {
  

        return (
            <ContainerReviewsCard>
              {reviewer.map((reviewer,index)=>(
                <Review key={index}
                    nameReviewer={reviewer.nameReviewer}
                    valueRating={reviewer.valueRating}
                    optionsReviewer={reviewer.optionsReviewer} 
                    timeOfReview={reviewer.timeOfReview}/>))}
                 <FormReview  addAntherReviewer={addAntherReviewer}  />
            </ContainerReviewsCard>
       )
    
  }


