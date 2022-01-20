import { Avatar, Typography } from "@mui/material";
import {
  CardContainer,
  SalaryContainer,
  SittingContainer,
  DiscountValue

} from "../Card/Card.style";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Card } from "../Card/Types";
import RatingComponent from "../Rating";
import { Button } from "../Button/Button.style";

interface IProps extends Card {}

export default function ProdectCard({
  img,
  name,
  salary,
  valueRating,
  discountValue,
}: IProps) {
  const salaryAfterDiscount: number | undefined =salary;
  return (
    <CardContainer
      width="520px"
      height="650px"
      sx={{
        background: "#fff",
        borderRadius: "16px",
        paddingTop: "35px",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <img src={img} alt="" width="513px" height="342px" />

      <Typography
        color="text.primary"
        sx={{
          textAlign: "center",
          font: "normal normal normal 24px/15px Muli",
          letterSpacing: "0.48px",
          marginBlock: "16px",
        }}
      >
        {name}
      </Typography>

      <SalaryContainer>
        <RatingComponent value={valueRating as number} isReadOnly={true} />
      </SalaryContainer>

      <SalaryContainer>
        {discountValue && (
          <Typography
            sx={{
              font: "normal normal bold 30px/15px Muli",
              letterSpacing: "0.6px",
              color: " red",
            }}
          >
             <DiscountValue discountValue={discountValue} >{salary}$</DiscountValue>
          </Typography>
        )}

        <Typography
          sx={{
            font: "normal normal bold 30px/15px Muli",
            letterSpacing: "0.6px",
            color: " text.primary",
          }}
        >
          {salaryAfterDiscount}$
        </Typography>
      </SalaryContainer>

      <SittingContainer style={{ gap: "14px" }}>
        <Button
          background="#f2f2f2"
          width="54px"
          height="62px"
          borderRadius="10px"
        >
          <BookmarkBorderIcon
            sx={{ width: "24px", height: "28px", margin: "15px 10px " }}
          />
        </Button>
        <Button
          width="324px"
          height="62px"
          borderRadius="10px"
          background="#f2f2f2"
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
      {discountValue && (
        <Avatar
          sx={{
            position: "absolute",
            width: "80px",
            height: "80px",
            top: "19px",
            left: "421px",
            background: "red",
          }}
        >
          -{discountValue}%
        </Avatar>
      )}
    </CardContainer>
  );
}
