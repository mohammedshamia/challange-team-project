import { Typography } from "@mui/material";
import React from "react";
import { Link } from "../Payment.styled";
import { Row } from "../../../components/GlobalStyles";
import Product from "./Product";
import styled from "styled-components";
import { IProduct } from "../../../@types/products.types";
import { ICart } from "../../../@types/cart.types";

const ProductsContainer = styled.div`
  overflow-y: auto;
  max-height: 500px;
  ${(props) => props.theme.breakpoints.down("md")} {
    width: 100% !important;
  }
`;

interface IProps {
  products: IProduct[];
  cart: {
    [key: string]: ICart;
  };
}

export default class OrderDetails extends React.PureComponent<IProps> {
  render(): React.ReactNode {
    return (
      <>
        <Row justfiyContent="space-between" width="100%" alignItems="center">
          <Typography variant="h6" color="text.primary">
            Order Details
          </Typography>
          <Link to={"/shopping-cart"} color="text.secondary">
            Change
          </Link>
        </Row>
        <ProductsContainer>
          {this.props.products?.map((product) => {
            return (
              <Product
                product={product}
                qty={this.props.cart[product?._id as string].qty}
              />
            );
          })}
        </ProductsContainer>
      </>
    );
  }
}
