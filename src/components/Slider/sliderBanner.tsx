import {  Typography } from "@mui/material";
import React, { useState } from "react";
import { Button } from "../Button/Button.style";
import { Stack, Contianer, Dots } from "./style";
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
            <div>
              <img src={item.image} alt="slide" />
            </div>
          </Contianer>
        ))}
      </AutoPlaySwipeableViews>
      <Dots
        variant="dots"
        steps={DataBannerSlider.length}
        position="static"
        activeStep={activeStep}
        sx={{ maxWidth: 400, flexGrow: 1 }}
        nextButton={
          <Button
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
        }
        backButton={
          <Button
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
        }
      />
    </div>
  );
}
