import { Typography } from "@mui/material";
import React from "react";
import { Link } from "../Payment.styled";
import { Column } from "../../../components/GlobalStyles";
import Product from "./Product";

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
        <Product />
        <Product />
        <Product />
        {/* {this.props.products.map((product, index) => (
          <></>
        ))} */}
      </>
    );
  }
}
