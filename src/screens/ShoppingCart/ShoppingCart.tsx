import { useEffect } from "react";
import { ReactNode } from "react";
import { IProduct } from "../../@types/products.types";


// material
import { Grid, Typography,Box } from "@mui/material";

// Rudex
import {
  getTopProducts,
  getProducts,
} from "../../redux/actions/products.actions";
import { baseURL } from "../../api";
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


interface ShoppingCartProps {
  title: string;
  counter: string;
  price: string;
  imgSrc?: string;
  salePrice?: string;
}
const arr: Array<ShoppingCartProps> = [
  // {
  //   title: "one gjhv jkbnl kb bijb",
  //   counter: "9",
  //   price: "678",
  //   imgSrc: "/static/img1.png",
  // },
  // {
  //   title: "two lkn jn jbouhbjhnmkmn jhbjlkn ",
  //   counter: "83",
  //   price: "6782$",
  //   imgSrc: "/static/headphones.jpg",
  //   salePrice: "987$",
  // },
  // { title: "thre;loe", counter: "23", price: "82" },
  // {
  //   title: "one mn ljkk kn km ,mlknhjblkjnhhjb ijhb jn",
  //   counter: "9",
  //   price: "678$",
  // },
  // { title: "twfdoiojo", counter: "83", price: "6782" },
  // { title: "ljnhkn jnkl", counter: "23", price: "82" },
  // { title: "one", counter: "9", price: "678" },
  // { title: "tw lkjn ghvhb o", counter: "83", price: "6782" },
  // { title: "thrlikj ojiblkjn ee", counter: "23", price: "82" },
];

export default function ShoppingCartPage() {
  const dispatch = useDispatch();
  const {
    loading,
    topProducts,
    products: { IProduct },
  } = useSelector((state: AppState) => state.products);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getTopProducts());
  }, [dispatch]);

  let cartItems = (): ReactNode => {
    return arr.map((item: ShoppingCartProps) => {
      return (
        <Box mb="32px">
          <ShoppingCart
            title={item.title}
            counter={item.counter}
            price={item.price}
            imgSrc={item.imgSrc || ""}
            salePrice={item.salePrice || ""}
          />
        </Box>
      );
    });
  };

  return (
    <Box p={"0 7%"}>
      <Box p={"30px 0"}>
        <BasicBreadcrumbs itemName="Shopping Cart" />
      </Box>
      {arr.length === 0 ? (
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
                      discountValue={30}
                      boxShadow={"none"}
                      borderRadius="0"
                      img={`${baseURL}${product.images?.[0]}` || ""}
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
            {cartItems()}
          </Grid>
          <Grid item xs={12} lg={3} sx={{ order: { xs: -1, lg: 22 } }}>
            <SubTotalCard
              priceAfterDiscount="$999.97"
              priceBeforeDiscount="$989.97"
              numberOfItems={arr.length}
            />
          </Grid>
        </Grid>
      )}
    </Box>
  );
}
