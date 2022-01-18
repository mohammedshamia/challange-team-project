import React, { useState } from "react";
import Slick, { Settings } from "react-slick";
export default function Slider() {

  const slickSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: "ondemand",
    accessibility: false,
    draggable: false,

    // beforeChange: this.handleBeforeChange,
    // afterChange: this.handleAfterChange
  };
  return <Slick {...slickSettings}></Slick>;
}
