import React, { useState } from "react";
import { autoPlay } from "react-swipeable-views-utils";
import SwipeableViews from "react-swipeable-views";

import { Button } from "../Button/Button.style";
import { DataCatagorySlider } from "./sliderData";

import { DotsItem } from "./style";
import ProdectCard from "../ProdectCard";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function SliderProduct() {
  const [activeStep, setActiveStep] = useState(0);

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
            {itempage.page.map((item) => (
              <ProdectCard img={item.image} name={item.title} />
            ))}
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
