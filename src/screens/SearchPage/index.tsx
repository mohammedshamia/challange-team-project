import { Box, Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useTheme } from "styled-components";
import { IProduct } from "../../@types/products.types";
import { baseURL } from "../../api";
import Loading from "../../components/common/Loading";
import RowComponent from "../../components/GlobalStyles/Row";
import ProdectCard from "../../components/ProdectCard";
import { getProducts } from "../../redux/actions/products.actions";
import { AppState } from "../../redux/store";

export default function SearchPage() {
  const { keyword } = useParams();
  const dispatch = useDispatch();
  const theme = useTheme();
  const {
    loading,
    products: { products },
  } = useSelector((state: AppState) => state.products);

  useEffect(() => {
    dispatch(getProducts(keyword as string));
  }, [dispatch, keyword]);

  return (
    <Box p={"0 7% 70px"} sx={{ background: theme.palette.background.paper }}>
      <Box p="50px 0">
        <RowComponent
          title="Featured Products"
          widthDivider="200px"
          alignItems="center"
        />
      </Box>
      <Grid spacing={5} container sx={{ justifyContent: "center" }}>
        {loading ? (
          <Loading />
        ) : (
          (products as IProduct[]).map((product) => (
            <Grid item xs={12} md={6} lg={4}>
              <ProdectCard
                key={product._id}
                id={product._id as string}
                img={`${baseURL}${product.images?.[0]}` || ""}
                name={product.name}
                price={product.price}
                valueRating={product.rating}
              />
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
}
