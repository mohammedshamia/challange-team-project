import { Typography } from "@mui/material";
import React from "react";
import { Link } from "../Payment.styled";
import { Row } from "../../../components/GlobalStyles";
import Product from "./Product";
import styled from "styled-components";
import { ICart, Item } from "../../../@types/cart.types";
import { useLocation } from "react-router-dom";

const ProductsContainer = styled.div`
  overflow-y: auto;
  max-height: 500px;
  width: 100% !important;
`;

interface IProps {
  products: Item[];
  cart?: ICart;
}

const OrderDetails = ({ products }: IProps) => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname.includes("/review-order") && (
        <Row justfiyContent="space-between" width="100%" alignItems="center">
          <Typography variant="h6" color="text.primary">
            Order Details
          </Typography>
          <Link to={"/shopping-cart"} color="text.secondary">
            Change
          </Link>
        </Row>
      )}
      <ProductsContainer>
        {products?.map((product) => {
          return <Product product={product.product} qty={product.qty} />;
        })}
      </ProductsContainer>
    </>
  );
};

export default OrderDetails;
