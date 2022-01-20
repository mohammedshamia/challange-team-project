import React, { useEffect, useState } from "react";
import { autoPlay } from "react-swipeable-views-utils";
import SwipeableViews from "react-swipeable-views";

import { Button } from "../Button/Button.style";
import { DataCatagorySlider } from "./sliderData";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import CategroyCard from "../CategroyCard";
import { Grid } from "@mui/material";
import { DotsItem } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { getCategories } from "../../redux/actions/products.actions";
import Loading from "../common/Loading";
import { ICategory } from "../../@types/products.types";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function SliderCatagory() {
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useDispatch();

  const { loading, categories } = useSelector(
    (state: AppState) => state.products
  );

  useEffect(() => {
    dispatch(getCategories());
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
              (categories as ICategory[])
                ?.slice(0, 4)
                .map((item) => (
                  <CategroyCard img={item.image} name={item.name} />
                ))
            )}
          </div>
        ))}
      </SwipeableViews>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          top: "calc(10% - 7px)",
          right: "4.8%",
        }}
      >
        {Array.from(Array(DataCatagorySlider.length)).map((_, index) => (
          <DotsItem
            active={activeStep === index}
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
