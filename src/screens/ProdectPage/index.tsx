
import ReviewesProdect from './ReviewesContainer'
import FeaturedProducts from './FeaturedProducts'
import DetailesProdect from './DetailesProdect'
import { ProdectPageContier } from './ProdectPage.styled'



const reviewer=[{nameReviewer:'hadeel wadia',valueRating:3.5, timeOfReview:'28th March 2022', optionsReviewer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.'},
   {nameReviewer:'hadeel wadia',valueRating:3.5, timeOfReview:'28th March 2022', optionsReviewer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.'},
   {nameReviewer:'hadeel wadia',valueRating:3.5, timeOfReview:'28th March 2022', optionsReviewer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.'}]

interface Iprops{
   nameProdect:string,
   priceProdect:number,
   imgpropdect:string,
   img1propdect:string,
   img2propdect:string,
   img3propdect:string,
   detailsprodect:string,
   sizes?:string[],
   colors?:string[]


}

export default function ProdectPage({nameProdect, priceProdect,imgpropdect,img1propdect,img2propdect,img3propdect, sizes,colors,detailsprodect}:Iprops) {
   
   return (
      <ProdectPageContier>

        <DetailesProdect nameProdect={nameProdect}
         priceProdect={priceProdect}
          imgpropdect={imgpropdect} 
          img1propdect={img1propdect} 
          img2propdect={img2propdect}
           img3propdect={img3propdect} 
           detailsprodect={detailsprodect}
           sizes={sizes}
           colors={colors}
           />
         <ReviewesProdect reviewer={reviewer} />

       <FeaturedProducts />
      </ProdectPageContier>
   )
}


 




