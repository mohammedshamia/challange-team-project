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
import { calculateDiscount } from "../../utils/helpers";

export default function ShoppingCartPage() {
  const dispatch = useDispatch();
  const {
    products: {
      loading,
      topProducts,
      products: { products },
    },
    cart: { cart },
  } = useSelector((state: AppState) => state);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getTopProducts());
  }, [dispatch]);

  const CartProducts = useMemo<IProduct[]>(() => {
    if (Object.keys(cart).length > 0) {
      return (products as IProduct[]).filter((product) =>
        Object.keys(cart).includes(product._id as string)
      );
    }
    return [];
  }, [cart, products]);

  const totalPrice = useMemo<number>(() => {
    if (Object.keys(cart).length > 0) {
      return (products as IProduct[])
        .filter((product) => Object.keys(cart).includes(product._id as string))
        .reduce(
          (acc, product) =>
            product?.price * cart[product?._id as string].qty + acc,
          0
        );
    }
    return 0;
  }, [cart, products]);

  const discountPrice = useMemo<number>(() => {
    if (Object.keys(cart).length > 0) {
      return (products as IProduct[])
        .filter((product) => Object.keys(cart).includes(product._id as string))
        .reduce(
          (acc, product) =>
            calculateDiscount(
              product.price as number,
              product.discount as number
            ) *
              cart[product?._id as string].qty +
            acc,
          0
        );
    }
    return 0;
  }, [cart, products]);

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
            {CartProducts.map((item: IProduct) => (
              <Box mb="32px" key={item._id as string}>
                <ShoppingCart
                  id={item?._id as string}
                  title={item.name}
                  counter={cart[item?._id as string].qty}
                  price={item.price}
                  imgSrc={item.images?.[0]}
                  discount={item.discount}
                />
              </Box>
            ))}
          </Grid>
          <Grid item xs={12} lg={3} sx={{ order: { xs: -1, lg: 22 } }}>
            <SubTotalCard
              priceAfterDiscount={`$${totalPrice.toFixed(2)}`}
              priceBeforeDiscount={`$${discountPrice.toFixed(2)}`}
              numberOfItems={Object.keys(cart).length}
            />
          </Grid>
        </Grid>
      )}
    </Box>
  );
}
