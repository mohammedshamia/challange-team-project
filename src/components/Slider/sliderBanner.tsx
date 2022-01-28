import { Typography } from "@mui/material";
import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Button } from "../Button/Button.style";
import { Stack, Contianer, DivImg, DotsItem } from "./style";
import { IProduct } from "../../@types/products.types";
import { DataBannerSlider } from "./sliderData";
import { Link } from "react-router-dom";
import { useTheme } from "styled-components";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function Slider({ products }: { products: IProduct[] }) {
  const theme = useTheme();
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
        {products.slice(0, 3).map((product) => (
          <Contianer key={product._id}>
            <Stack spacing={5}>
              <Stack width="100%" spacing={1}>
                {product.discount > 0 && (
                  <Typography variant="h3" color="text.primary">
                    {`Save up to $${product.discount}`}
                  </Typography>
                )}
                <Typography
                  variant="h1"
                  color="text.primary"
                  fontWeight={"900"}
                >
                  {product.name}
                </Typography>
                <Typography variant="h5" color="text.primary">
                  {product.description}
                </Typography>
              </Stack>
              <Button
                as={Link}
                borderRadius="20px"
                width="200px"
                to={`/product/${product._id}`}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: theme.typography.fontFamily,
                }}
              >
                Shop now
              </Button>
            </Stack>
            <DivImg>
              <img
                src={product.images?.[0] || "/static/img1.PNG"}
                alt="slide"
                loading="lazy"
              />
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
          color="secondary"
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
          color="secondary"
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
