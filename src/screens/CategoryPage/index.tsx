import { Box, Grid } from "@mui/material";
import { useTheme } from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { IProduct } from "../../@types/products.types";
import Loading from "../../components/common/Loading";
import RowComponent from "../../components/GlobalStyles/Row";
import ProdectCard from "../../components/ProdectCard";
import { getCategoryProducts } from "../../redux/actions/products.actions";
import { AppState } from "../../redux/store";

export default function CategoryPage() {
  const { keyword } = useParams();
  const dispatch = useDispatch();
  const theme = useTheme();

  const { loading, categoryProducts } = useSelector(
    (state: AppState) => state.products
  );

  useEffect(() => {
    dispatch(getCategoryProducts(keyword as string));
  }, [dispatch, keyword]);

  return (
    <Box p={"0 7% 70px"} sx={{ background: theme.palette.background.paper }}>
      <Box p="50px 0">
        <RowComponent
          title={`${keyword}`}
          widthDivider="200px"
          alignItems="center"
        />
      </Box>
      <Grid spacing={5} container sx={{ justifyContent: "center" }}>
        {loading ? (
          <Loading />
        ) : (
          (categoryProducts as IProduct[]).map((product) => (
            <Grid item xs={12} md={6} lg={4}>
              <ProdectCard
                key={product._id}
                id={product._id as string}
                img={product.images?.[0] || ""}
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
