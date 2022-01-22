import { useCallback } from "react";
import Counter from "../../Counter";
import { Close, ImgContainer, WrapperCart } from "./ShoppingCart.style";
import { Chip, Grid, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../../redux/actions/cart.actions";
import { calculateDiscount } from "../../../utils/helpers";

interface IPropsShoppingCart {
  id: string;
  imgSrc?: string;
  title: string;
  counter: number;
  price: number;
  discount?: number;
}

export default function ShoppingCart(props: IPropsShoppingCart) {
  const dispatch = useDispatch();

  const handleDelete = useCallback(() => {
    dispatch(removeFromCart(props.id as string));
  }, [props, dispatch]);

  const handleUpdate = useCallback(
    (value: number) => {
      dispatch(addToCart(props.id, value));
    },
    [props, dispatch]
  );

  return (
    <WrapperCart container alignItems="center">
      <Close onClick={handleDelete} />
      <ImgContainer item xs={12} lg={3}>
        <img height="100%" width="100%" src={props.imgSrc} alt={props.title} />
      </ImgContainer>
      <Grid
        item
        xs={12}
        lg={4}
        sx={{ textAlign: { xs: "center", lg: "left" } }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          color="text.primary"
          p="40px 20px 40px 10px"
        >
          {props.title}
        </Typography>
      </Grid>
      <Grid
        item
        xs={8}
        lg={3}
        sx={{ textAlign: { xs: "center", lg: "right" } }}
      >
        <Counter value={props.counter} onChange={handleUpdate} />
      </Grid>
      <Grid
        item
        xs={4}
        lg={2}
        sx={{ textAlign: { xs: "center", md: "left", lg: "right" } }}
      >
        {(props.discount as number) === 100 ? (
          <>
            <Chip
              sx={{ fontSize: "1.4rem", padding: "0px 12px", height: "36px" }}
              label="Free"
              variant="outlined"
              color="success"
            />
          </>
        ) : (props.discount as number) > 0 ? (
          <>
            <Typography
              variant="h6"
              fontWeight="bold"
              color="text.secondary"
              sx={{ textDecoration: "line-through" }}
            >
              {props.price}
            </Typography>
            <Typography variant="h4" fontWeight="900" color="text.primary">
              {calculateDiscount(
                props.price as number,
                props.discount as number
              )?.toFixed(2)}
            </Typography>
          </>
        ) : (
          <Typography variant="h4" fontWeight="900" color="text.primary">
            {props.price}
          </Typography>
        )}
      </Grid>
    </WrapperCart>
  );
}
