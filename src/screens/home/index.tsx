import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IProduct } from "../../@types/products.types";
import Loading from "../../components/common/Loading";
import RowComponent from "../../components/GlobalStyles/Row";
import { GridTopRateProducts } from "../../components/GlobalStyles";
import ProdectCard from "../../components/ProdectCard";
import {
  SliderBanner,
  SliderCaragory,
  SliderProduct,
} from "../../components/Slider";
import {
  getTopProducts,
  getProducts,
} from "../../redux/actions/products.actions";
import { AppState } from "../../redux/store";
import { Banner, Categroy, FeaturedProducts, TopRateProducts } from "./styled";

const HomePage = () => {
  const dispatch = useDispatch();
  const {
    loading,
    topProducts,
    products: { products },
  } = useSelector((state: AppState) => state.products);

  useEffect(() => {
    dispatch(getProducts());
    if ((topProducts as IProduct[]).length === 0) {
      dispatch(getTopProducts());
    }
  }, [dispatch]);

  return (
    <>
      <Banner>
        <SliderBanner products={products} />
      </Banner>
      <Categroy>
        <RowComponent
          title="Featured Categories"
          widthDivider="12%"
          width="90%"
          alignItems="flex-start"
        />
        <SliderCaragory />
      </Categroy>
      <FeaturedProducts>
        <RowComponent
          width="90%"
          title={"Featured Products"}
          widthDivider={"10%"}
          alignItems="center"
        />
        <SliderProduct />
      </FeaturedProducts>
      <TopRateProducts>
        <RowComponent
          width="90%"
          title={"TOP RATE PRODUCTS"}
          widthDivider={"10%"}
        />
        <GridTopRateProducts xs={11} md={9.8}>
          {loading ? (
            <Loading />
          ) : (
            (topProducts as IProduct[]).map((product) => (
              <Grid key={product._id} item xs={12} md={6} lg={6} xl={4.5}>
                <ProdectCard
                  id={product._id as string}
                  discountValue={product.discount}
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
      </TopRateProducts>
    </>
  );
};

export default HomePage;
