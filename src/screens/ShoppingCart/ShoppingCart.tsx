import { useEffect, useMemo } from "react";
import { IProduct } from "../../@types/products.types";

// material
import { Grid, Typography, Box } from "@mui/material";

// Rudex
import {
  getTopProducts,
  getProducts,
} from "../../redux/actions/products.actions";
import { AppState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";

//component
import BasicBreadcrumbs from "../../components/Breadcrumbs";
import ShoppingCart from "../../components/Card/ShoppingCart";
import Loading from "../../components/common/Loading";
import { GridTopRateProducts } from "../../components/GlobalStyles";
import RowComponent from "../../components/GlobalStyles/Row";
import ProdectCard from "../../components/ProdectCard";
import SubTotalCard from "../../components/SubTotalCard/SubTotalCard";
import { getCart } from "../../redux/actions/cart.actions";
import { ICart, Item } from "../../@types/cart.types";

export default function ShoppingCartPage() {
  const dispatch = useDispatch();
  const {
    products: { loading, topProducts },
    cart: { cart },
  } = useSelector((state: AppState) => state);

  useEffect(() => {
    dispatch(getCart());
    dispatch(getProducts());
    dispatch(getTopProducts());
  }, [dispatch]);

  const allDiscount = useMemo(() => {
    return (
      (cart as ICart).totalPrice -
      (cart as ICart).items.reduce(
        (acc, { product }) => (product.discount as number) + acc,
        0
      )
    );
  }, [cart]);

  return (
    <Box p={"0 7%"}>
      <Box p={"30px 0"}>
        <BasicBreadcrumbs itemName="Shopping Cart" />
      </Box>
      {Object.keys(cart).length === 0 ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h2"
              sx={{ marginBottom: "10px" }}
              color="text.primary"
            >
              Your shopping cart is empty
            </Typography>
            <img src="/static/EmptyCart.png" alt="empty" />
          </div>
          <div style={{ margin: "20px" }}>
            <RowComponent
              width="90%"
              title={"Recently viewed"}
              widthDivider={"10%"}
            />
            <GridTopRateProducts xs={11} md={10.5}>
              {loading ? (
                <Loading />
              ) : (
                (topProducts as IProduct[]).map((product) => (
                  <Grid key={product._id} item xs={12} md={6} lg={6} xl={4.5}>
                    <ProdectCard
                      id={product._id as string}
                      discountValue={30}
                      boxShadow={"none"}
                      borderRadius="0"
                      img={product.images?.[0] || ""}
                      name={product.name}
                      valueRating={product.rating}
                      price={product.price}
                    />
                  </Grid>
                ))
              )}
            </GridTopRateProducts>
          </div>
        </>
      ) : (
        <Grid container spacing={4}>
          <Grid item xs={12} lg={9}>
            {(cart as ICart).items.map(
              ({ product, qty, itemTotalPrice }: Item) => (
                <Box mb="32px" key={product?._id as string}>
                  <ShoppingCart
                    id={product?._id as string}
                    title={product.name}
                    counter={qty}
                    price={itemTotalPrice}
                    imgSrc={product.images?.[0]}
                    discount={product.discount}
                  />
                </Box>
              )
            )}
          </Grid>
          <Grid item xs={12} lg={3} sx={{ order: { xs: -1, lg: 22 } }}>
            <SubTotalCard
              priceAfterDiscount={`$${allDiscount.toFixed(2)}`}
              priceBeforeDiscount={`$${(cart as ICart).totalPrice.toFixed(2)}`}
              numberOfItems={(cart as ICart).totalQty}
            />
          </Grid>
        </Grid>
      )}
    </Box>
  );
}
