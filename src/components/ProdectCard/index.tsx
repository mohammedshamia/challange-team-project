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
import { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cart.actions";
import { useNavigate } from "react-router-dom";

export default function ProdectCard({
  id,
  img,
  name,
  price,
  valueRating,
  discountValue,
  borderRadius,
  boxShadow,
}: Card) {
  const dispatch = useDispatch();
  const navgation = useNavigate();
  const result = useMemo(
    () => ((discountValue as number) / (price as number)) * 100,
    [price, discountValue]
  );

  const AddToCart = useCallback(() => {
    dispatch(addToCart(id as string));
  }, [dispatch, id]);
  const handleClick = () => navgation(`/product/${id}`);
  return (
    <CardContainer boxShadow={boxShadow} borderRadius={borderRadius}>
      <div style={{ cursor: "pointer" }} onClick={handleClick}>
        <Box width="98%" m="auto" height="350px">
          <ImagContainer src={img} alt="img" width="513px" height="342px" />
        </Box>
        <Typography
          color="text.primary"
          my="15px"
          fontSize="24px"
          textAlign="center"
          height="75px"
        >
          {name}
        </Typography>

        <PriceContainer>
          <RatingComponent value={valueRating as number} isReadOnly={true} />
        </PriceContainer>

        <PriceContainer>
          {(discountValue as number) > 0 && (
            <Typography
              fontWeight="bold"
              fontSize="30px"
              sx={{
                color: "#FC4059",
              }}
            >
              {(price as number) - (discountValue as number)}$
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
        </PriceContainer>
      </div>

      <SittingContainer style={{ gap: "14px" }}>
        <Button background="secondary" width="54px">
          <BookmarkBorderIcon
            sx={{ width: "24px", height: "28px", margin: "15px 10px " }}
          />
        </Button>
        <Button width="324px" background="secondary" onClick={AddToCart}>
          add to card
        </Button>
      </SittingContainer>
      {(discountValue as number) > 0 && (
        <SalaryPercentage>- {result.toFixed(0)}%</SalaryPercentage>
      )}
    </CardContainer>
  );
}
