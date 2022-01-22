import ReviewesProdect from "./ReviewesContainer";
import DetailesProdect from "./DetailesProduct";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { getProduct, clearProduct } from "../../redux/actions/products.actions";
import { IProduct } from "../../@types/products.types";
import Loading from "../../components/common/Loading";
import RowComponent from "../../components/GlobalStyles/Row";
import { SliderProduct } from "../../components/Slider";
import { FeaturedProductsContiner } from "./ProductPage.styled";

const reviewer = [
  {
    nameReviewer: "hadeel wadia",
    valueRating: 3.5,
    timeOfReview: "28th March 2022",
    optionsReviewer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.",
  },
  {
    nameReviewer: "hadeel wadia",
    valueRating: 3.5,
    timeOfReview: "28th March 2022",
    optionsReviewer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.",
  },
  {
    nameReviewer: "hadeel wadia",
    valueRating: 3.5,
    timeOfReview: "28th March 2022",
    optionsReviewer:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita.",
  },
];

export default function ProductPage() {
  const { id } = useParams();
  // const navigate = useNavigate();
  const {
    product,
    loading,
  }: { product: IProduct | undefined; loading: boolean } = useSelector(
    (state: AppState) => state.products
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(id as string));
  }, [id, dispatch]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {product && (
            <>
              <DetailesProdect
                nameProdect={product.name}
                priceProdect={product.price}
                imgpropdect={product.images?.[0] as string}
                img1propdect={product.images?.[1] as string}
                img2propdect={product.images?.[2] as string}
                img3propdect={product.images?.[3] as string}
                detailsprodect={product.description}
                sizes={null}
                colors={null}
              />
              <ReviewesProdect reviewer={[]} />
              <FeaturedProductsContiner>
                <RowComponent
                  width="90%"
                  title={"Featured Products"}
                  widthDivider={"10%"}
                  alignItems="center"
                />
                <SliderProduct />
              </FeaturedProductsContiner>
            </>
          )}
        </>
      )}
    </>
  );
}
