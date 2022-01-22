import ReviewesProdect from "./ReviewesContainer";
import DetailesProdect from "./DetailesProduct";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { getProduct } from "../../redux/actions/products.actions";
import { IProduct } from "../../@types/products.types";
import Loading from "../../components/common/Loading";
import RowComponent from "../../components/GlobalStyles/Row";
import { SliderProduct } from "../../components/Slider";
import { FeaturedProductsContiner } from "./ProductPage.styled";
import BasicBreadcrumbs from "../../components/Breadcrumbs";
import { Box } from "@mui/material";



export default function ProductPage() {
  const { id } = useParams();
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
          <Box p={"0 7%"}>
            {product && (
              <>
                <Box p={"30px 0"}>
                  <BasicBreadcrumbs itemName={product.name} />
                </Box>
                <DetailesProdect
                  nameProdect={product.name}
                  priceProdect={product.price}
                  imgpropdect={product.images?.[0] as string}
                  img1propdect={product.images?.[1] as string}
                  img2propdect={product.images?.[2] as string}
                  img3propdect={product.images?.[3] as string}
                  detailsprodect={product.description}
                  sizes={["1", "2", "3"]}
                  colors={["#999", "#000", "#bbe24f"]}
                />
                <ReviewesProdect reviews={product.reviews || []} />
              </>
            )}
          </Box>
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
  );
}
