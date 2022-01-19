import React, { useState } from "react";
import { autoPlay } from "react-swipeable-views-utils";
import SwipeableViews from "react-swipeable-views";
import { Button } from "../Button/Button.style";
import { DataCatagorySlider } from "./sliderData";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import CategroyCard from "../CategroyCard";
import { Grid } from "@mui/material";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function Slider() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
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
              <CategroyCard img={item.image} name={item.title} />
            ))}
          </div>
        ))}
      </SwipeableViews>
      <div
        style={{ height: "100px", display: "flex", justifyContent: "center" }}
      >
        {Array.from(Array(DataCatagorySlider.length)).map((_, index) => (
          <span key={index} />
        ))}
      </div>
    </>
  );
}
