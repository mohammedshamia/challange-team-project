import { Rating, Typography } from "@mui/material";
import React from "react";
import { Card } from "..";
import { Button } from "../../Button/Button.style";
import { CardContainer } from "../../Card/Card.style";
import { SittingContainer } from "../ProdectsCard.styled";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

interface IProps extends Card {}

export default function ProdectCard({
  img,
  name,
  salary,
  valueRating,
}: IProps) {
  return (
    <CardContainer
      width="520px"
      height="650px"
      sx={{ background: "white", borderRadius: "16px" ,paddingTop:'35px', paddingBottom:'34px' }}
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
        width: '431px',
        height: '30px'}}
      >
        {name}
      </Typography>
      <Rating defaultValue={valueRating} sx={{ marginLeft: "30%" }} />
      <Typography   sx={{  textAlign: 'left',
        font: 'normal normal bold 30px/15px Muli',
        letterSpacing: '0.6px',
        color:' #242424' ,
        width: '119px',
        height: '38px'}}
      >
        {salary}$
      </Typography>

      <SittingContainer>
        <Button
          width="18%"
          height="40px"
          backgroundColor="#F2F2F2"
          border-radius="0px"
          color="gray"
        >
          <BookmarkBorderIcon />
        </Button>
        <Button
          width="80%"
          height="40px"
          borderRadius="0"
          backgroundColor="text.primary"
          border-radius=" 10px"
        >
          add to card
        </Button>
      </SittingContainer>
    </CardContainer>
  );
}
