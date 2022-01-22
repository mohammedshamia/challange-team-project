import { Typography } from "@mui/material";
import React from "react";
import { Link } from "../Payment.styled";
import { Column } from "../../../components/GlobalStyles";
import Product from "./Product";
import styled from "styled-components";

const ProductsContainer = styled.div`
  overflow-y: auto;
  max-height: 500px;
`;

interface IProps {
  products: any[];
}

export default class OrderDetails extends React.PureComponent<IProps> {
  render(): React.ReactNode {
    return (
      <>
        <Column justfiyContent="space-between" width="100%" alignItems="center">
          <Typography variant="h6" color="text.primary">
            Order Details
          </Typography>
          <Link to={"/shopping-cart"} color="text.secondary">
            Change
          </Link>
        </Column>
        <ProductsContainer>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </ProductsContainer>
      </>
    );
  }
}
