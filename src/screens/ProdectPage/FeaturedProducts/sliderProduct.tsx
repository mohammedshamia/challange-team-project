import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { DataProdectSlider } from "../../../components/Slider/sliderData";
import ProdectCard from "../../../components/ProdectCard";
import { DotsItem } from "../../../components/Slider/style";



export default function SliderProduct() {
  const [activeStep, setActiveStep] = useState(0);

  const handleChangeIndex = (index: number) => {
    setActiveStep(index);
  };
  const styles = {
    slideContainer: {
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
        {DataProdectSlider.map((itempage) => (
                   <div style={{width:'1640px', height: '650px', display:'flex', gap:'40px' , marginTop:'70px'}}>

            {itempage.page.map((prodect,index) => (
                          <ProdectCard 
                          key={index} 
                           img={prodect.img} 
                           name={prodect.name} 
                           salary={prodect.salary} 
                           valueRating={prodect.valueRating}  
                             discountValue={prodect.discountValue}
                            />
            ))}
          </div>
        ))}
      </SwipeableViews>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "20px 0",
          marginBlock:'20px'
        }}
      >
        {Array.from(Array(DataProdectSlider.length)).map((_, index) => (
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
