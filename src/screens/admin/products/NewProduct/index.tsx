import { Typography } from "@mui/material";
import { Container } from "../Products.styled";
import NewProductForm from "./Form";

const CreateProduct = () => {
  return (
    <Container>
      <Typography variant="h2" color="text.primary">
        Create New Product
      </Typography>
      <NewProductForm />
    </Container>
  );
};

export default CreateProduct;
