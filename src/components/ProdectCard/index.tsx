import { Box, Typography } from "@mui/material";
import {
  CardContainer,
  ImagContainer,
  PriceContainer,
  SalaryPercentage,
  SittingContainer,
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
  // const salaryAfterDiscount: number | undefined = salary;
  return (
    <CardContainer>
      <Box width="98%" m="auto" height="350px">
        <ImagContainer src={img} alt="img" width="513px" height="342px" />
      </Box>

      <Typography
        color="text.primary"
        my="30px auto 15px"
        fontSize="24px"
        textAlign="center"
      >
        {name}
      </Typography>

      <PriceContainer>
        <RatingComponent value={valueRating as number} isReadOnly={true} />
      </PriceContainer>

      <PriceContainer>
        {discountValue && (
          <Typography
            fontWeight="bold"
            fontSize="30px"
            sx={{
              color: "#FC4059",
            }}
          >
            {salary}$
          </Typography>
        )}

        <Typography
          fontWeight="bold"
          fontSize="30px"
          color=" text.primary"
          sx={{
            textDecoration: discountValue ? "line-through" : "none",
          }}
        >
          {salary}$
        </Typography>
      </PriceContainer>

      <SittingContainer style={{ gap: "14px" }}>
        <Button background="#F2F2F2" width="54px">
          <BookmarkBorderIcon
            sx={{ width: "24px", height: "28px", margin: "15px 10px " }}
          />
        </Button>
        <Button width="324px" background="#F2F2F2">
          add to card
        </Button>
      </SittingContainer>
      {discountValue && <SalaryPercentage>-{discountValue}%</SalaryPercentage>}
    </CardContainer>
  );
}
