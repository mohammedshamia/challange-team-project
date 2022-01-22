import * as React from "react";
import Counter from "../../Counter";
import { Close, ImgContainer, WrapperCart } from "./ShoppingCart.style";
import { Grid, Typography } from "@mui/material";

interface IPropsShoppingCart {
  id: string;
  imgSrc?: string;
  title: string;
  counter: number;
  price: number;
  salePrice?: number;
}

export default function ShoppingCart(props: IPropsShoppingCart) {
  return (
    <WrapperCart container alignItems="center">
      <Close onClick={() => console.log(props.title)} />
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
        <Counter value={props.counter} />
      </Grid>
      <Grid
        item
        xs={4}
        lg={2}
        sx={{ textAlign: { xs: "center", md: "left", lg: "right" } }}
      >
        {props.salePrice && (
          <Typography
            variant="h6"
            fontWeight="bold"
            color="text.secondary"
            sx={{ textDecoration: "line-through" }}
          >
            {props.salePrice}
          </Typography>
        )}
        <Typography variant="h4" fontWeight="900" color="text.primary">
          {props.price}
        </Typography>
      </Grid>
    </WrapperCart>
  );
}
