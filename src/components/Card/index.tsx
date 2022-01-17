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


import { CardContent, Rating, Typography } from '@mui/material'
import RatingComponent from '../Rating'
import { CardContainer, ImgContainer, SittingContainer } from './Card.style'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Button } from './../Button/Button.style';
interface Iprpos {
  width:string,
  height?:string,
  backgroundcolor?:string,
  borderRadius?:string,
  KindOfCard?:string,
  namePropdect?:string,
  salaryProdect?:number,
  ratingValue?:number,
  imgProdect:string

}



export default function CardComponent({width,height,backgroundcolor,KindOfCard,namePropdect,salaryProdect ,imgProdect,ratingValue}:Iprpos) {
  return (
    <div>
      <CardContainer width={width}height={height} backgroundcolor={backgroundcolor} padding={KindOfCard==='categoraty'?'3% 2%':' 2% 0px'} style={{background:'white'}}>
        <ImgContainer width={KindOfCard==='categoraty'?'90%':'100%'} height='60%'  style={{borderRadius: '0' , background:'white',boxShadow:'none'}} backgroundcolor={KindOfCard==='categoraty'?'#F7F8FC':'white'}  borderradius='0' padding={KindOfCard==='categoraty'?'5% 10%':'10% 20%'} >
          <img src={imgProdect} alt='img prodect'/>
        </ImgContainer>
        <CardContent>
        <Typography gutterBottom variant={KindOfCard==='categoraty'?'h4':'h5'} component="div">
          {namePropdect}
        </Typography>
        {ratingValue&&<Rating/>}
       {salaryProdect&&<Typography variant="body2" color="text.secondary">
         {salaryProdect}$
        </Typography>}
        {KindOfCard==='prodect'&&
        <SittingContainer >
           <Button width= '15%' height='40px' 
       backgroundColor='#F2F2F2'
       border-radius='0px' 
         color='gray'>
           <BookmarkBorderIcon/>
           </Button>
           <Button width= '80%' height='40px' 
         borderRadius='0'
         backgroundColor='#FCDD06'
         border-radius=' 10px'>add to card</Button>
          </SittingContainer>}
        </CardContent>

      </CardContainer>
    </div>
  )
}




import { CardContainer, SittingContainer } from './Card.style';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Button } from './../Button/Button.style';

interface Iprops{
  width:string,
  height:string,
  KindOfCard:string,
  imgProdect:string

  
}
export default function CardComponent({width,height,KindOfCard,imgProdect}:Iprops) {
  return (
    <CardContainer 
     width={width} 
     height={height} 
      borderradius={KindOfCard==='catergorie'?0:5} 
      background={'white'} 
      boxshadow={KindOfCard==='catergorie'?'none':'none'} 
      padding={KindOfCard==='catergorie'?'0px':'2% 0px'} 
        sx={{borderRadius: 0,background:'white' ,boxShadow:'none'}}>
     

     <CardContainer 
     width='100%'
     height={KindOfCard==='catergorie'?'90%':'60%'}
      borderradius={KindOfCard==='catergorie'?0:5} 
      background={KindOfCard==='catergorie'?'#F7F8FC':'white'} 
      boxshadow={KindOfCard==='catergorie'?'none':'none'} 
      padding={'5% 6%'} 
        sx={{borderRadius: 5,background:'#F7F8FC' ,}}>
          <img src={imgProdect} alt='img prodect'/>
        </CardContainer>



        {KindOfCard!=='catergorie'&&
        <SittingContainer >
           <Button width= '18%' height='40px' 
       backgroundColor='#F2F2F2'
       border-radius='0px' 
         color='gray'>
           <BookmarkBorderIcon/>
           </Button>
           <Button width= '80%' height='40px' 
         borderRadius='0'
         backgroundColor='#FCDD06'
         border-radius=' 10px'>add to card</Button>
          </SittingContainer>}
      
    </CardContainer>
  )
}

*/


import React from 'react'

export default function index() {
  return (
    <div>
      
    </div>
  )
}
