import Typography from "@mui/material/Typography";
import React from "react";
import { Button } from "../../../components/Button/Button.style";
import { SittingContainer } from "../../../components/Card/Card.style";
import Counter from "../../../components/Counter";
import SummeryComponent from "../../../components/SummeryComponent";
import {
  DetailesContiner,
  DetailesProductContainer,
  DiscraptinsContiner,
  ImagesContiner,
  InformationsContiner,
  SizesOFimgContiner,
  SizesOfProductContiner,
  TitleInformationsContiner,
} from "../ProductPage.styled";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
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
          <img src={imgpropdect} alt="" width="100%" height={"65%"} />
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
              <Typography variant="h2" color="text.primary">
                {priceProdect}$
              </Typography>
            </TitleInformationsContiner>

            <Counter value={3} />

            <SizesOfProductContiner>
              {colors && <SummeryComponent colors={colors} />}
              {sizes && <SummeryComponent sizes={sizes} />}

              <SittingContainer margin="-7% 40%">
                <Button borderRadius="10px" width="38px">
                  <BookmarkBorderIcon
                    sx={{
                      width: "30px",
                      height: "28px",
                      margin: "4px 6px ",
                      color: "text.primary",
                    }}
                  />
                </Button>
                <Button
                  width="324px"
                  height="62px"
                  borderRadius="10px"
                  background={theme.palette.primary.main}
                >
                  <Typography
                    color="text.primary"
                    variant="h4"
                    sx={{
                      padding: "16px 39px",
                    }}
                  >
                    add to card
                  </Typography>
                </Button>
              </SittingContainer>
            </SizesOfProductContiner>
          </InformationsContiner>
          <DiscraptinsContiner>{detailsprodect}</DiscraptinsContiner>
        </DetailesContiner>
      </DetailesProductContainer>
    </div>
  );
}
