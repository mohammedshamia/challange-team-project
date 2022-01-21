import { Typography } from "@mui/material";
import React, { useState } from "react";
import { Button } from "../Button/Button.style";
import { Stack, Contianer, Dots, DivImg, DotsItem } from "./style";
import { DataBannerSlider } from "./sliderData";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
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
  return (
    <div>
      <AutoPlaySwipeableViews
        interval={6000}
        enableMouseEvents
        index={activeStep}
        onChangeIndex={handleChangeIndex}
      >
        {DataBannerSlider.map((item) => (
          <Contianer>
            <Stack spacing={5}>
              <Stack width="100%" spacing={1}>
                <Typography variant="h3" color="text.primary">
                  {item.topTitle}
                </Typography>
                <Typography variant="h1" color="text.primary">
                  {item.mainTitle}
                </Typography>
                <Typography variant="h3" color="text.primary">
                  {item.subTitle}
                </Typography>
              </Stack>
              <Button borderRadius="20px" width="38%">
                Shop now
              </Button>
            </Stack>
            <DivImg>
              <img src={item.image} alt="slide" />
            </DivImg>
          </Contianer>
        ))}
      </AutoPlaySwipeableViews>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "20px 0",
          alignItems: "center",
        }}
      >
        <Button
          unhover
          width="17px"
          background="none"
          size="small"
          onClick={handleBack}
          disabled={activeStep === 0}
        >
          <KeyboardArrowLeft
            sx={{
              fontSize: "3.4rem",
            }}
          />
        </Button>
        {Array.from(Array(DataBannerSlider.length)).map((_, index) => (
          <DotsItem
            active={activeStep === index && true}
            onClick={() => handleChangeIndex(index)}
            width="25px"
            height="25px"
            key={index}
          />
        ))}
        <Button
          unhover
          width="17px"
          background="none"
          size="small"
          onClick={handleNext}
          disabled={activeStep === DataBannerSlider.length - 1}
        >
          <KeyboardArrowRight
            sx={{
              fontSize: "3.4rem",
            }}
          />
        </Button>
      </div>
    </div>
  );
}
