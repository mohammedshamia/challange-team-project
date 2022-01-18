import React, { useState } from 'react'
import ReviewsCard from '../../components/ReviewsCard'
import { Reviewer } from '../../components/ReviewsCard/Review'

export default function ProdectPage() {
   const [reviewer, setReviewer] = useState<Reviewer[]>([{nameReviewer:'hadeel',valueRating:3.5,optionsReviewer:''}])
   const addAntherReviewer=({values}:{values:Reviewer}):void=>{
     setReviewer([...reviewer,{nameReviewer:values.nameReviewer,
      valueRating:values.valueRating,optionsReviewer:values.optionsReviewer,timeOfReview:new Date()}])
   }
   return (
      <div>
             <ReviewsCard addAntherReviewer={addAntherReviewer} 
        reviewer={reviewer}/>
      </div>
   )
}
