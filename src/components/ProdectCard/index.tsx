import { Rating, Typography } from "@mui/material";
import { Button } from "../Button/Button.style";
import { CardContainer, SittingContainer ,SalaryContainer} from "../Card/Card.style";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Card } from '../Card/Types';

interface IProps extends Card {}

export default function ProdectCard({
  img,
  name,
  salary,
  valueRating,
  discountValue
}: IProps) {
  return (
    <CardContainer
      width="520px"
      height="650px"
      boxshadow="none"
      sx={{ background: "white", borderRadius: "16px" ,paddingTop:'35px',  boxSizing:'border-box' }}
    >
     
        <img
          src={img}
          alt=""
          width="513px"
          height="342px"
        />

      <Typography
        color="text.primary"
        sx={{  textAlign: 'left',
        font:'normal normal normal 24px/15px Muli',
        letterSpacing: '0.48px',
        color:' #242424' ,
        }}
      >
        {name}
      </Typography>
      <Rating defaultValue={valueRating} sx={{ margin:' 28px 161px  '}} />
      <SalaryContainer style={{display:'flex' , marginLeft:' 161px', gap:'14px' }}> 
      {
        discountValue &&  <Typography   sx={{ 
        font: 'normal normal bold 30px/15px Muli',
        letterSpacing: '0.6px',
        color:' red' ,
      }}
      >
        {salary}$
      </Typography>
        
        } 
        
      <Typography   sx={{
        font: 'normal normal bold 30px/15px Muli',
        letterSpacing: '0.6px',
        color:' #242424' ,
        }}
      >
        {salary}$
      </Typography>
         </SalaryContainer>
 
      
      <SittingContainer style={{gap:'16px', margin:'32px 62px'}}>
        <Button
          width="54px"
          height="62px"
          backgroundColor="#F2F2F2"
          borderRadius="10px"
          color="gray"
        >
          <BookmarkBorderIcon sx={{width:'24px',height:'28px',margin:'15px 10px '}}/>
        </Button>
        <Button
          width="324px"
          height="62px"
          backgroundColor="text.primary"
          borderRadius=" 10px"
        >
        <Typography  color='text.primary'  sx={{
        font:'normal normal normal 24px/15px Muli',
        letterSpacing: '0.48px',
          padding:'16px 39px'

        }}
      >
        add to card
      </Typography>        </Button>
      </SittingContainer>
    </CardContainer>
  );
}
