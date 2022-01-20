import Typography from "@mui/material/Typography";
import React from "react";
import { Button } from "../../../components/Button/Button.style";
import { SittingContainer } from "../../../components/Card/Card.style";
import Counter from "../../../components/Counter";
import SummeryComponent from "../../../components/SummeryComponent";
import {
  DetailesContiner,
  DetailesProdectContainer,
  DiscraptinsContiner,
  ImagesContiner,
  InformationsContiner,
  SizesOFimgContiner,
  SizesOfProdectContiner,
  SpicficationContiner,
  TitleInformationsContiner,
} from "../ProdectPage.styled";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";


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


export default function DetailesProdect({nameProdect, priceProdect,imgpropdect,img1propdect,img2propdect,img3propdect, sizes,colors,detailsprodect}:Iprops) {
    return (
        <div>
            <DetailesProdectContainer>
          <ImagesContiner >
           <img  src={imgpropdect} alt='' width='100%'  height={'65%'}/>
           <SizesOFimgContiner>
              <img src={img1propdect} alt='nameprodect'  width='29%'  height={'100%'} />
              <img src={img2propdect} alt='nameprodect'  width='29%'  height={'100%'} />
              <img src={img3propdect}alt='nameprodect'  width='29%'  height={'100%'} />
           </SizesOFimgContiner>
          </ImagesContiner>

          <DetailesContiner>



           <InformationsContiner>
              
              <TitleInformationsContiner >
              <Typography variant='h2' fontSize='30px'>{nameProdect}</Typography>
              <Typography variant='h2' fontSize='35px' >{priceProdect}$</Typography>


              </TitleInformationsContiner>

              <Counter value={3} />
               
               <SizesOfProdectContiner>
                  { colors&&  <SummeryComponent colors={colors}/>}
                 {  sizes&&    <SummeryComponent sizes={sizes}/>}

                 <SittingContainer  margin='-7% 40%'>
                <Button
               background="#f2f2f2"
               width="54px"
               height="62px"
               borderRadius="10px"
               border='1px solid #FCDD06'
                 >
          <BookmarkBorderIcon
            sx={{ width: "30px", height: "28px", margin: "4px 6px " }}
          />
        </Button>
        <Button width="324px" height="62px" borderRadius="10px"          background="#FCDD06"
>
          <Typography
            color="text.primary"
            sx={{
              font: "normal normal normal 24px/15px Muli",
              letterSpacing: "0.48px",
              padding: "16px 39px",
            }}
          >
            add to card
          </Typography>
        </Button>
      </SittingContainer>

               </SizesOfProdectContiner>
               
          </InformationsContiner>
          <DiscraptinsContiner>
             {detailsprodect}
          </DiscraptinsContiner>
          </DetailesContiner>

         </DetailesProdectContainer>
        </div>
    )
}
