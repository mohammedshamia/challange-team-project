import { Box, Chip, Typography } from "@mui/material";
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

export default function ProdectCard({
  img,
  name,
  price,
  valueRating,
  discountValue,
  borderRadius,
  boxShadow,
}: Card) {
  const resulte =
    (price as number) - ((discountValue as number) / 100) * (price as number);

  return (
    <CardContainer boxShadow={boxShadow} borderRadius={borderRadius}>
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
        {(discountValue as number) === 100 ? (
          <>
            <Chip
              sx={{ fontSize: "1.4rem", padding: "0px 12px", height: "36px" }}
              label="Free"
              variant="outlined"
              color="success"
            />
          </>
        ) : (
          <>
            {(discountValue as number) > 0 && (
              <Typography
                fontWeight="bold"
                fontSize="30px"
                sx={{
                  color: "#FC4059",
                }}
              >
                {resulte.toFixed(2)}$
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
              {price}$
            </Typography>
          </>
        )}
      </PriceContainer>

      <SittingContainer style={{ gap: "14px" }}>
        <Button background="secondary" width="54px">
          <BookmarkBorderIcon
            sx={{ width: "24px", height: "28px", margin: "15px 10px " }}
          />
        </Button>
        <Button width="324px" background="secondary">
          add to card
        </Button>
      </SittingContainer>
      {(discountValue as number) > 0 && (
        <SalaryPercentage>-{discountValue}%</SalaryPercentage>
      )}
    </CardContainer>
  );
}
