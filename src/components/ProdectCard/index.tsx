import { Avatar, Button, Rating, Typography } from "@mui/material";
import { CardContainer, SittingContainer ,SalaryContainer} from "../Card/Card.style";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Card } from '../Card/Types';
import RatingComponent from "../Rating";

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
      sx={{ background: "white", borderRadius: "16px" ,paddingTop:'35px',  boxSizing:'border-box',position:'relative' }}
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
        }}
      >
        {name}
      </Typography>
      <RatingComponent  value={valueRating as number} paddingRating='28px 161px'  />
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
        color:' #242424' , textDecoration:'solid line-through purple 4px'

        }}
      >
        {salary}$
        
      </Typography>
         </SalaryContainer>
 
      
      <SittingContainer style={{gap:'16px', margin:'32px 62px'}}>
        <Button  sx={{width:"54px",
          height:"62px",
          backgroundColor:"#F2F2F2",
          borderRadius:"10px",
          color:"gray"}}
       
        >
          <BookmarkBorderIcon sx={{width:'24px',height:'28px',margin:'15px 10px '}}/>
        </Button>
        <Button  sx={{     width:"324px",
          height:"62px",
          backgroundColor:"#F2F2F2",
          borderRadius:" 10px"}}
     
        >
        <Typography  color='text.primary'  sx={{
        font:'normal normal normal 24px/15px Muli',
        letterSpacing: '0.48px',
          padding:'16px 39px'

        }}
      >
        add to card
      </Typography>     
         </Button>
      </SittingContainer>
    { discountValue && <Avatar sx={{ position:'absolute',width:'87px' , height:'87px' ,top:'19px',left:'421px', background:'red'}}>-{discountValue}%</Avatar>}

    </CardContainer>
  );
}
