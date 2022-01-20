import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IProduct } from "../../@types/products.types";
import { baseURL } from "../../api";
import Loading from "../../components/common/Loading";
import RowComponent from "../../components/GlobalStyles/Row";
import ProdectCard from "../../components/ProdectCard";
import {
  SliderBanner,
  SliderCaragory,
  SliderProduct,
} from "../../components/Slider";
import { getTopProducts } from "../../redux/actions/products.actions";
import { AppState } from "../../redux/store";
import { Banner, Categroy, FeaturedProducts, TopRateProducts } from "./styled";

const HomePage = () => {
  const dispatch = useDispatch();
  const { loading, topProducts } = useSelector(
    (state: AppState) => state.products
  );

  useEffect(() => {
    dispatch(getTopProducts());
  }, [dispatch]);

  return (
    <>
      <Banner>
        <SliderBanner />
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "90%",
            margin: "auto",
          }}
        >
          {loading ? (
            <Loading />
          ) : (
            (topProducts as IProduct[]).map((product) => (
              <ProdectCard
                key={product._id}
                img={`${baseURL}${product.images?.[0]}` || ""}
                name={product.name}
                valueRating={product.rating}
                salary={product.price}
              />
            ))
          )}
        </div>
      </TopRateProducts>
    </>
  );
};

export default HomePage;
