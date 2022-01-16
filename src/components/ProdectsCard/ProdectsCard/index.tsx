import { Rating, Typography } from '@mui/material'
import React from 'react'
import { Card } from '..'
import { Button } from '../../Button/Button.style'
import { CardContainer } from '../../Card/Card.style'
import { SittingContainer } from '../ProdectsCard.styled'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';


interface IProps extends Card {}

export default function ProdectCard({img,name,salary,valueRating}:IProps) {
    return (
      
      <CardContainer width='95%' height='400px' sx={{background:'white' ,borderRadius:'20px'}}>
          <CardContainer width='100%' height='50%' padding='10% 0px'  sx={{borderRadius:0,background:'white', boxShadow:'none'}} >
           <img  src={img} alt=''  width='80%' height='70%' style={{margin:'10% 12%'}}/>
          </CardContainer>
        <Typography sx={{textAlign:'center', marginTop:'3%'}}>{name}</Typography>
        <Rating defaultValue={valueRating} sx={{marginLeft:'30%'}}/>
        <Typography sx={{textAlign:'center', marginTop:'3%'}}>{salary}$</Typography>
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
          </SittingContainer>
        
      </CardContainer>
    )
}
