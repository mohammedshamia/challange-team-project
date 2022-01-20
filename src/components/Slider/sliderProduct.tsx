import React, { useEffect, useState } from "react";
import { autoPlay } from "react-swipeable-views-utils";
import SwipeableViews from "react-swipeable-views";
import { Button } from "../Button/Button.style";
import { DataCatagorySlider } from "./sliderData";
import { DotsItem } from "./style";
import ProdectCard from "../ProdectCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/products.actions";
import { AppState } from "../../redux/store";
import { baseURL } from "../../api";
import Loading from "../common/Loading";
import { IProduct } from "../../@types/products.types";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function SliderProduct() {
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useDispatch();

  const {
    loading,
    products: { products },
  } = useSelector((state: AppState) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleChangeIndex = (index: number) => {
    setActiveStep(index);
  };

  const styles = {
    slideContainer: {
      padding: "0 60px",
    },
  };

  return (
    <>
      <SwipeableViews
        enableMouseEvents
        index={activeStep}
        slideStyle={styles.slideContainer}
        onChangeIndex={handleChangeIndex}
      >
        {DataCatagorySlider.map((itempage) => (
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",

              margin: "auto",
            }}
          >
            {loading ? (
              <Loading />
            ) : (
              (products as IProduct[])
                ?.slice(0, 3)
                .map((product) => (
                  <ProdectCard
                    key={product._id}
                    img={`${baseURL}${product.images?.[0]}` || ""}
                    name={product.name}
                  />
                ))
            )}
          </div>
        ))}
      </SwipeableViews>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "20px 0",
        }}
      >
        {Array.from(Array(DataCatagorySlider.length)).map((_, index) => (
          <DotsItem
            active={activeStep === index && true}
            onClick={() => handleChangeIndex(index)}
            width="15px"
            height="15px"
            margin="5px"
            key={index}
          />
        ))}
      </div>
    </>
  );
}
