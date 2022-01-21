import { Box, Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { IProduct } from "../../@types/products.types";
import { baseURL } from "../../api";
import Loading from "../../components/common/Loading";
import ProdectCard from "../../components/ProdectCard";
import { getProducts } from "../../redux/actions/products.actions";
import { AppState } from "../../redux/store";

export default function SearchPage() {
  const { keyword } = useParams();

  const dispatch = useDispatch();

  const {
    loading,
    products: { products },
  } = useSelector((state: AppState) => state.products);

  useEffect(() => {
    dispatch(getProducts(keyword as string));
  }, [dispatch, keyword]);

  return (
    <Box p={"0 7%"}>
      <Grid spacing={5} container sx={{ justifyContent: "center" }}>
        {loading ? (
          <Loading />
        ) : (
          (products as IProduct[]).map((product) => (
            <ProdectCard
              key={product._id}
              img={`${baseURL}${product.images?.[0]}` || ""}
              name={product.name}
              price={product.price}
              valueRating={product.rating}
            />
          ))
        )}
      </Grid>
    </Box>
  );
}
