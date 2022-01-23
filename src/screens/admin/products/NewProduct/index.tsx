import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../../redux/actions/products.actions";
import { AppState } from "../../../../redux/store";
import { Container } from "../Products.styled";
import NewProductForm from "./Form";

const CreateProduct = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const { product } = useSelector((state: AppState) => state.products);

  useEffect(() => {
    if (params.id) {
      dispatch(getProduct(params.id as string));
    }
  }, []);

  return (
    <Container>
      <Typography variant="h2" color="text.primary">
        {Boolean(params.id) ? "Update Product" : "Create New Product"}
      </Typography>
      <NewProductForm product={product} />
    </Container>
  );
};

export default CreateProduct;
