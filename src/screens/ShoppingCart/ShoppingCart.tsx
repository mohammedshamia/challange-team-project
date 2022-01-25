import { useEffect, useMemo } from "react";
import { IProduct } from "../../@types/products.types";

// material
import { Grid, Typography, Box } from "@mui/material";

// Redux
import {
  getTopProducts,
  getProducts,
} from "../../redux/actions/products.actions";
import { AppState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";

//component
import BasicBreadcrumbs from "../../components/Breadcrumbs";
import ShoppingCartCard from "../../components/Card/ShoppingCart";
import Loading from "../../components/common/Loading";
import { GridTopRateProducts } from "../../components/GlobalStyles";
import RowComponent from "../../components/GlobalStyles/Row";
import ProdectCard from "../../components/ProdectCard";
import SubTotalCard from "../../components/SubTotalCard/SubTotalCard";
import { getCart } from "../../redux/actions/cart.actions";
import { Item } from "../../@types/cart.types";

export default function ShoppingCartPage() {
  const dispatch = useDispatch();

  const {
    products: { loading, topProducts },
    cart: {
      cart: { items, totalPrice, totalQty },
    },
  } = useSelector((state: AppState) => state);

  useEffect(() => {
    dispatch(getCart());
    dispatch(getProducts());
    dispatch(getTopProducts());
  }, [dispatch]);

  const allDiscount = useMemo(() => {
    return (
      (Math.round(totalPrice -
      (items as Item[]).reduce(
        (acc, { product }: Item) => (product.discount as number) + acc,
        0
      ))).toFixed(2)
    );
  }, [items, totalPrice]);

  return (
    <Box p={"0 7%"}>
      <Box p={"30px 0"}>
        <BasicBreadcrumbs itemName="Shopping Cart" />
      </Box>
      {(items as Item[]).length === 0 ? (
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
                      id={product._id}
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
            {(items as Item[]).map(({ product, qty, itemTotalPrice }: Item) => (
              <Box mb="32px" key={product._id as string}>
                <ShoppingCartCard
                  id={product._id as string}
                  title={product.name}
                  counter={qty}
                  price={itemTotalPrice}
                  imgSrc={product.images?.[0]}
                  discount={product.discount}
                />
              </Box>
            ))}
          </Grid>
          <Grid item xs={12} lg={3} sx={{ order: { xs: -1, lg: 22 } }}>
            <SubTotalCard
              priceAfterDiscount={`$${allDiscount}`}
              priceBeforeDiscount={`$${(Math.round(totalPrice as number)).toFixed(2)}`}
              numberOfItems={totalQty}
            />
          </Grid>
        </Grid>
      )}
    </Box>
  );
}
