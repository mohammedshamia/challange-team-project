import Typography from '@mui/material/Typography'
import React from 'react'
import { Card } from '../../../components/Card/Types'
import ProdectCard from '../../../components/ProdectCard'
import { BoldLine, FeaturedProductsContiner, ProdectesContainer, TitleContiner } from '../ProdectPage.styled'




interface Iprops {
    prodect:Card[]
}

export default function FeaturedProducts({prodect}:Iprops) {
    return (
        <FeaturedProductsContiner  >
            
         <ProdectesContainer>
            <TitleContiner  >
            <Typography variant='h2' fontSize='30px'   sx={{textAlign:'center',padding:'20px'}}>Featured Products</Typography>
             <BoldLine></BoldLine>
            </TitleContiner>
            <div style={{width:'1640px', height: '650px', display:'flex', gap:'40px' , marginTop:'70px'}}>
            {prodect.map((prodect,index)=>(<ProdectCard  key={}  img={prodect.img} name={prodect.name} salary={prodect.salary} valueRating={prodect.valueRating}   discountValue={prodect.discountValue}/>))}
            </div>
         </ProdectesContainer>  
        </FeaturedProductsContiner>
    )
}
