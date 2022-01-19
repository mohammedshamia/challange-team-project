import { Typography } from "@mui/material";
import RatingComponent from "../../Rating";
import { GrayText, Line, RatingContiner, ReviewContiner } from "./Review.styled";

export interface Reviewer {
    nameReviewer:string;
    valueRating:number;
    optionsReviewer:string;
    timeOfReview?:string;
   }

 interface Iprops  extends Reviewer {}

  
export default function Review({nameReviewer,valueRating,optionsReviewer,timeOfReview}:Iprops) {
    return (
     <div>
        <ReviewContiner>
           <Typography variant="h4"  fontSize='24px' color='black' >{nameReviewer}</Typography> 
            <RatingContiner>
              <RatingComponent  value={valueRating}  isReadOnly={true}  name={"disabled"} />
               <Typography variant="h4" color='#707070'  fontSize='10px'> {timeOfReview}</Typography> 
            </RatingContiner>
            <GrayText>
              <Typography  variant="h4" fontSize='16px' lineHeight={1.5}  >{optionsReviewer}</Typography>
            </GrayText>
        </ReviewContiner>
        <Line/>
     </div>
    )
} 
