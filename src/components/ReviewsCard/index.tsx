import { Button } from '../Button/Button.style';
import Review from '../Review';
import ReviewForm from './ReviewForm';
import { ContainerReviewsCard } from './ReviewsCard.styled'
import {useState} from 'react';

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
     const [addAntherReview,setaddAntherReview] =useState<boolean>(false);

    return (
         <ContainerReviewsCard>
           {reviewer.map((reviewer)=>(
             <Review
                 nameReviewer={reviewer.nameReviewer}
                 valueRating={reviewer.valueRating}
                 optionsReviewer={reviewer.optionsReviewer} 
                 timeOfReview={reviewer.timeOfReview}/>))}
              {  addAntherReview &&  <ReviewForm/>}
           {  !addAntherReview&&
             <Button  width='30%'  borderRadius='5px' height='40px' onClick={()=>{setaddAntherReview(true)}} >add anther review</Button>
             }
         </ContainerReviewsCard>
    )
}
