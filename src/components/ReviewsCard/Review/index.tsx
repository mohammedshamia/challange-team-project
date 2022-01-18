import { Typography } from "@mui/material";
import RatingComponent from "../../Rating";
import { GrayText, RatingContiner, ReviewContiner } from "./Review.styled";

export interface Reviewer {
    nameReviewer:string;
    valueRating:number;
    optionsReviewer:string;
    timeOfReview?:Date;
   }

 interface Iprops  extends Reviewer {}

  
export default function Review({nameReviewer,valueRating,optionsReviewer,timeOfReview}:Iprops) {
    return (
        <ReviewContiner>
           <Typography variant="h6" component="h6">{nameReviewer}</Typography> 
           <RatingContiner>
              <RatingComponent  value={valueRating} precision={0.5} isReadOnly={true} isDisabled={false} name={"disabled"} onChangeValue={()=>{}}/>
               <Typography variant="caption" display="block" gutterBottom> {timeOfReview}</Typography> 
           </RatingContiner>
           <GrayText>
             <Typography variant="body2" gutterBottom>{optionsReviewer}</Typography>
            </GrayText>
            
        </ReviewContiner>
    )
} 
