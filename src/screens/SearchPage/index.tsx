import { Box, Grid } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router";
import { useTheme } from "styled-components";
import { IProduct } from "../../@types/products.types";
import { baseURL } from "../../api";
import Loading from "../../components/common/Loading";
import PaginationButtons from "../../components/common/Pagination";
import RowComponent from "../../components/GlobalStyles/Row";
import ProdectCard from "../../components/ProdectCard";
import { getProducts } from "../../redux/actions/products.actions";
import { AppState } from "../../redux/store";

export default function SearchPage() {
  const { keyword } = useParams();
  const { pathname } = useLocation();
  const isAllProducts = pathname.includes("allProducts");
  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const dispatch = useDispatch();
  const theme = useTheme();
  const {
    loading,
    products: { products, pages },
  } = useSelector((state: AppState) => state.products);

  useEffect(() => {
    dispatch(getProducts(keyword as string, page));
  }, [dispatch, keyword, page]);

  const NotFoundProducts = (products as IProduct[]).length === 0;
  return (
    <Box p={"0 7% 70px"} sx={{ background: theme.palette.background.paper }}>
      <Box p="50px 0">
        <RowComponent
          title={isAllProducts ? "Products" : "Featured Products"}
          widthDivider="200px"
          alignItems="center"
        />
      </Box>
      <Grid
        spacing={5}
        container
        sx={{
          justifyContent: "center",
          height: loading || NotFoundProducts ? "65vh" : "100%",
        }}
      >
        {loading ? (
          <Loading />
        ) : NotFoundProducts ? (
          <div style={{ marginLeft: "40px" }}>
            <img src="/static/no_products_found.png" alt="noproductsfound" />
          </div>
        ) : (
          (products as IProduct[]).map((product) => (
            <Grid item xs={12} md={6} lg={4}>
              <ProdectCard
                key={product._id}
                id={product._id as string}
                img={product.images?.[0] as string}
                name={product.name}
                price={product.price}
                valueRating={product.rating}
              />
            </Grid>
          ))
        )}
      </Grid>
      {!loading && isAllProducts ? (
        <PaginationButtons page={page} onChange={handleChange} count={pages} />
      ) : (
        <></>
      )}
    </Box>
  );
}
