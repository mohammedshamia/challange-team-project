import Typography from '@mui/material/Typography'
import React from 'react'
import ReviewsCard from '../../../components/ReviewsCard'
import { Reviewer } from '../../../components/ReviewsCard/Review'
import { ReviewesContainer } from '../ProdectPage.styled'

interface Iprops {
    reviewer:Reviewer[]
}

export default function ReviewesProdect({reviewer}:Iprops) {
    return (
            <ReviewesContainer>
              <Typography variant='h2' fontSize='30px'   color='text.primary' sx={{margin:'auto',padding:'20px'}}>Reviews</Typography>
              <ReviewsCard reviewer={reviewer} />
            </ReviewesContainer>
    
    )
}



