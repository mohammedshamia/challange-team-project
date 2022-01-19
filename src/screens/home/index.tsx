import Button from "../../components/Button";
import CategroyCard from "../../components/CategroyCard";
import RowComponent from "../../components/GlobalStyles/Row";
import ProdectCard from "../../components/ProdectCard";
import {
  SliderBanner,
  SliderCaragory,
  SliderProduct,
} from "../../components/Slider";
import { Banner, Categroy, FeaturedProducts, TopRateProducts } from "./styled";

const HomePage = () => {
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
          {Array.from(Array(3)).map((_, index) => (
            <ProdectCard img={""} name={""} />
          ))}
        </div>
      </TopRateProducts>
    </>
  );
};

export default HomePage;
