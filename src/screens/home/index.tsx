import Button from "../../components/Button";
import CategroyCard from "../../components/CategroyCard";
import RowComponent from "../../components/GlobalStyles/Row";
import { SliderBanner, SliderCaragory } from "../../components/Slider";
import { Banner, Categroy } from "./styled";

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
    </>
  );
};

export default HomePage;
