import Typography from "@mui/material/Typography";
import React from "react";
import { Button } from "../../../components/Button/Button.style";
import { SittingContainer } from "../../../components/Card/Card.style";
import Counter from "../../../components/Counter";
import SummeryComponent from "../../../components/SummeryComponent";
import {
  BoxSammary,
  DetailesContiner,
  DetailesProductContainer,
  DiscraptinsContiner,
  ImagesContiner,
  InformationsContiner,
  SizesOFimgContiner,
  SizesOfProductContiner,
  TitleInformationsContiner,
} from "../ProductPage.styled";
import { useTheme } from "styled-components";

interface Iprops {
  nameProdect: string;
  priceProdect: number;
  imgpropdect: string;
  img1propdect: string;
  img2propdect: string;
  img3propdect: string;
  detailsprodect: string;
  sizes?: string[] | null;
  colors?: string[] | null;
}

export default function DetailesProdect({
  nameProdect,
  priceProdect,
  imgpropdect,
  img1propdect,
  img2propdect,
  img3propdect,
  sizes,
  colors,
  detailsprodect,
}: Iprops) {
  const theme = useTheme();
  return (
    <div>
      <DetailesProductContainer>
        <ImagesContiner>
          <img src={imgpropdect} alt="img" width="90%" />
          <SizesOFimgContiner>
            {img1propdect && (
              <img
                src={img1propdect}
                alt="nameprodect"
                width="29%"
                height={"100%"}
              />
            )}
            {img2propdect && (
              <img
                src={img2propdect}
                alt="nameprodect"
                width="29%"
                height={"100%"}
              />
            )}
            {img3propdect && (
              <img
                src={img3propdect}
                alt="nameprodect"
                width="29%"
                height={"100%"}
              />
            )}
          </SizesOFimgContiner>
        </ImagesContiner>

        <DetailesContiner>
          <InformationsContiner>
            <TitleInformationsContiner>
              <Typography variant="h3" color="text.primary">
                {nameProdect}
              </Typography>
              <Typography
                sx={{ fontWeight: "700" }}
                variant="h2"
                color="text.primary"
              >
                {priceProdect}$
              </Typography>
            </TitleInformationsContiner>

            <Counter value={1} />

            <SizesOfProductContiner>
              {colors && <SummeryComponent colors={colors} />}
              <BoxSammary>
                {sizes && <SummeryComponent sizes={sizes} />}
                <SittingContainer justifyContent={true}>
                  <Button
                    sx={{ maxWidth: "300px", fontSize: "1.5rem" }}
                    height="62px"
                    borderRadius="10px"
                    background={theme.palette.primary.main}
                  >
                    add to card
                  </Button>
                </SittingContainer>
              </BoxSammary>
            </SizesOfProductContiner>
          </InformationsContiner>
          <DiscraptinsContiner>{detailsprodect}</DiscraptinsContiner>
        </DetailesContiner>
      </DetailesProductContainer>
    </div>
  );
}
