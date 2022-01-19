import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { IColumn } from "../../../@types/table.types";
import { IProduct } from "../../../@types/types";
import { Button } from "../../../components/Button/Button.style";
import { Column } from "../../../components/GlobalStyles";
import Table from "../../../components/Table";
import { Container } from "./Products.styled";

const data: IProduct[] = [
  {
    name: "IPhone 13 Pro",
    brand: "Apple",
    price: 1200,
    countInStock: 20,
    description: "Smart Phone",
    discount: 0,
  },
  {
    name: "IPhone 13 Pro",
    brand: "Apple",
    price: 1200,
    countInStock: 20,
    description: "Smart Phone",
    discount: 0,
  },
  {
    name: "IPhone 13 Pro",
    brand: "Apple",
    price: 1200,
    countInStock: 20,
    description: "Smart Phone",
    discount: 0,
  },
  {
    name: "IPhone 13 Pro",
    brand: "Apple",
    price: 1200,
    countInStock: 20,
    description: "Smart Phone",
    discount: 0,
  },
  {
    name: "IPhone 13 Pro",
    brand: "Apple",
    price: 1200,
    countInStock: 20,
    description: "Smart Phone",
    discount: 0,
  },
  {
    name: "IPhone 13 Pro",
    brand: "Apple",
    price: 1200,
    countInStock: 20,
    description: "Smart Phone",
    discount: 0,
  },
  {
    name: "IPhone 13 Pro",
    brand: "Apple",
    price: 1200,
    countInStock: 20,
    description: "Smart Phone",
    discount: 0,
  },
  {
    name: "IPhone 13 Pro",
    brand: "Apple",
    price: 1200,
    countInStock: 20,
    description: "Smart Phone",
    discount: 0,
  },
  {
    name: "IPhone 13 Pro",
    brand: "Apple",
    price: 1200,
    countInStock: 20,
    description: "Smart Phone",
    discount: 0,
  },
  {
    name: "IPhone 13 Pro",
    brand: "Apple",
    price: 1200,
    countInStock: 20,
    description: "Smart Phone",
    discount: 0,
  },
  {
    name: "IPhone 13 Pro",
    brand: "Apple",
    price: 1200,
    countInStock: 20,
    description: "Smart Phone",
    discount: 0,
  },
  {
    name: "IPhone 13 Pro",
    brand: "Apple",
    price: 1200,
    countInStock: 20,
    description: "Smart Phone",
    discount: 0,
  },
  {
    name: "IPhone 13 Pro",
    brand: "Apple",
    price: 1200,
    countInStock: 20,
    description: "Smart Phone",
    discount: 0,
  },
  {
    name: "IPhone 13 Pro",
    brand: "Apple",
    price: 1200,
    countInStock: 20,
    description: "Smart Phone",
    discount: 0,
  },
  {
    name: "IPhone 13 Pro",
    brand: "Apple",
    price: 1200,
    countInStock: 20,
    description: "Smart Phone",
    discount: 0,
  },
  {
    name: "IPhone 13 Pro",
    brand: "Apple",
    price: 1200,
    countInStock: 20,
    description: "Smart Phone",
    discount: 0,
  },
];

const columns: IColumn[] = [
  {
    name: "name",
  },
  {
    name: "brand",
  },
  {
    name: "price",
  },
  {
    name: "countInStock",
  },
  {
    name: "description",
  },
  {
    name: "discount",
  },
];

const Products = () => {
  return (
    <Container>
      <Typography variant="h2" color="text.primary">
        Products
      </Typography>
      <Column justfiyContent="flex-end" width="100%">
        <Button
          as={Link}
          sx={{ width: "fit-content", height: "fit-content", padding: "10px" }}
          to={"/products/new"}
        >
          <Typography
            variant="body2"
            color="text.primary"
            sx={{ paddingInline: "2em", textTransform: "capitalize" }}
          >
            Create Product
          </Typography>
        </Button>
      </Column>
      <div style={{ width: "100%", margin: "auto" }}>
        <Table data={data} columns={columns} />
      </div>
    </Container>
  );
};

export default Products;
