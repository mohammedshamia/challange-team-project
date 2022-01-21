
import Typography from '@mui/material/Typography'

import { BoldLine, FeaturedProductsContiner,TitleContiner,ProductesContainer } from '../ProductPage.styled'
import SliderProduct from './sliderProduct'





export default function FeaturedProducts() {
    return (
        <FeaturedProductsContiner  >
         <ProductesContainer>
            <TitleContiner  >
            <Typography variant='h2' fontSize='30px' color='text.primary'   sx={{textAlign:'center',padding:'20px'}}>Featured Products</Typography>
             <BoldLine></BoldLine>
            </TitleContiner>
            <SliderProduct/>
         </ProductesContainer>  
        </FeaturedProductsContiner>
    )}

