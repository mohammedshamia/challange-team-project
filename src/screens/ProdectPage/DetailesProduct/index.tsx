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
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/actions/cart.actions";
import { AppState } from "../../../redux/store";
import { notify } from "../../../utils/helpers";
import { useCart } from "../../../utils/hooks";
import { CircularProgress } from "@mui/material";
import Img from "../../../components/common/Img";

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
  const {
    auth,
    cart: { loading },
  } = useSelector((state: AppState) => state);
  const isInCart = useCart(id as string);
  const theme = useTheme();
  const dispatch = useDispatch();
  const [state, setState] = useState<Istate>({
    counter: 1,
    color: "",
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
  const AddToCart = useCallback(() => {
    if (auth.isAuthenticated) {
      dispatch(addToCart(id as string, state.counter));
      return;
    }

    notify("warning", "Please Login to add Item to The Cart");
  }, [dispatch, id, state, auth.isAuthenticated]);

  return (
    <div>
      <DetailesProductContainer>
        <ImagesContiner>
          <Img src={imgpropdect} alt={nameProdect} width="90%" />
          <SizesOFimgContiner>
            {img1propdect && (
              <Img
                src={img1propdect}
                alt="nameprodect"
                width="29%"
                height={"100%"}
              />
            )}
            {img2propdect && (
              <Img
                src={img2propdect}
                alt="nameprodect"
                width="29%"
                height={"100%"}
              />
            )}
            {img3propdect && (
              <Img
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
                    disabled={isInCart}
                  >
                    {isInCart ? (
                      "In Cart"
                    ) : loading ? (
                      <CircularProgress size={20} color="inherit" />
                    ) : (
                      "Add to Cart"
                    )}
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
