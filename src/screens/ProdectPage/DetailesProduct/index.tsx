import Typography from "@mui/material/Typography";
import { useCallback, useState } from "react";
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
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/actions/cart.actions";

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
  id: string | undefined;
}
interface Istate {
  counter: number;
  color: string;
  size: string;
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
  id,
}: Iprops) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [state, setState] = useState<Istate>({
    counter: 1,
    color: "",
    size: "",
  });
  const handleCounter = (newValue: number) =>
    setState((prev) => ({
      ...prev,
      counter: newValue,
    }));
  const handelChangeColor = (newValue: string) =>
    setState((prev) => ({
      ...prev,
      color: newValue,
    }));
  const handelChangeSize = (newValue: string) =>
    setState((prev) => ({
      ...prev,
      size: newValue,
    }));
  const AddToCart = useCallback(() => {
    console.log(state?.counter);
    dispatch(addToCart(id as string, state.counter));
  }, [dispatch, id, state]);

  return (
    <div>
      <DetailesProductContainer>
        <ImagesContiner>
          <img
            src={imgpropdect}
            alt={nameProdect}
            width="90%"
            style={{ objectFit: "contain" }}
          />
          <SizesOFimgContiner>
            {img1propdect && (
              <img
                src={img1propdect}
                alt="nameprodect"
                width="29%"
                height={"100%"}
                style={{ objectFit: "contain" }}
              />
            )}
            {img2propdect && (
              <img
                src={img2propdect}
                alt="nameprodect"
                width="29%"
                height={"100%"}
                style={{ objectFit: "contain" }}
              />
            )}
            {img3propdect && (
              <img
                src={img3propdect}
                alt="nameprodect"
                width="29%"
                height={"100%"}
                style={{ objectFit: "contain" }}
              />
            )}
          </SizesOFimgContiner>
        </ImagesContiner>

        <DetailesContiner>
          <InformationsContiner>
            <TitleInformationsContiner>
              <Typography
                variant="h3"
                color="text.primary"
                pr="35px"
                fontWeight="bold"
              >
                {nameProdect}
              </Typography>
              <Typography variant="h2" color="text.primary" fontWeight="900">
                {priceProdect}$
              </Typography>
            </TitleInformationsContiner>

            <Counter onChange={handleCounter} value={state.counter} />

            <SizesOfProductContiner>
              {colors && (
                <SummeryComponent
                  onChangeItem={handelChangeColor}
                  value={state.color}
                  colors={colors}
                />
              )}
              <BoxSammary>
                {sizes && (
                  <SummeryComponent
                    onChangeItem={handelChangeSize}
                    value={state.size}
                    sizes={sizes}
                  />
                )}
                <SittingContainer justifyContent={true}>
                  <Button
                    onClick={AddToCart}
                    sx={{
                      maxWidth: "300px",
                      fontSize: "1.5rem",
                      fontWeight: "500",
                    }}
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
