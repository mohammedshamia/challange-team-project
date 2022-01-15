/*import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Rating } from '@mui/material';
import {  CardContiner, CardIamge } from './Card.style';
import RatingComponent from '../Rating';

interface Iprops{
    img:string;
    name:string;
    salary?:number;
    valueRating?:number,
    width:string;
    
}
export default function CardComponent({img ,name,salary,valueRating,width}:Iprops) {
  return (
    <CardContiner width={width} borderRadius='5px' background='#F7F8FC'>
      <CardActionArea>
        <CardIamge  width='100%' borderRadius='5px' background='red' height='200px' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLlG5fwZtn0FmvWdCm_7W_8a7RYM_gczfQPA&usqp=CAU'/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        {valueRating&&<Rating name="half-rating-read" defaultValue={valueRating} precision={0.5} readOnly />
}
        <Typography gutterBottom variant="h5" component="div">
            {salary}
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardContiner>
  );
}
*/

import { CardContent, Rating, Typography } from '@mui/material'
import RatingComponent from '../Rating'
import { CardContainer } from './Card.style'

interface Iprpos {
  width:string,
  height?:string,
  backgroundColor?:string,
  borderRadius?:string,
  backgroundImage?:string,
  KindOfCard?:string,
  namePropdect?:string,
  salaryProdect?:number,
  ratingValue?:number

}



export default function CardComponent({width,height,backgroundColor,backgroundImage,KindOfCard,namePropdect,salaryProdect ,ratingValue}:Iprpos) {
  return (
    <div>
      <CardContainer width={width}height={height} backgroundColor={backgroundColor}>
        <CardContainer width={KindOfCard==='categoraty'?'100%':'90%'} height='100px' backgroundImage={backgroundImage} />
        <CardContent>
        <Typography gutterBottom variant={KindOfCard==='categoraty'?'h5':'h2'} component="div">
          {namePropdect}
        </Typography>
        {ratingValue&&<Rating/>}
       {salaryProdect&&<Typography variant="body2" color="text.secondary">
         {salaryProdect}$
        </Typography>}
        <RatingComponent value={0} precision={0} isReadOnly={false} isDisabled={false} name='read-only' onChangeValue={()=>{}}/>
        </CardContent>

      </CardContainer>
    </div>
  )
}


