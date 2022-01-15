import Review from '../Review';
import { ContainerReviewsCard } from './ReviewsCard.styled'

interface  reviewer{
    nameReviewer:string;
    valueRating:number;
    optionsReviewer:string;
    timeOfReview:string;
}
interface Iprops {
    reviewer:reviewer[]
}
export default function ReviewsCard({reviewer}:Iprops) {
    return (
         <ContainerReviewsCard>
           {reviewer.map((reviewer)=>(
             <Review
                 nameReviewer={reviewer.nameReviewer}
                 valueRating={reviewer.valueRating}
                 optionsReviewer={reviewer.optionsReviewer} 
                 timeOfReview={reviewer.timeOfReview}/>))}
         </ContainerReviewsCard>
    )
}
