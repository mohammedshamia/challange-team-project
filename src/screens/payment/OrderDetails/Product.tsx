import { Column, Row } from "../../../components/GlobalStyles";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { IProduct } from "../../../@types/products.types";
import { calculateDiscount } from "../../../utils/helpers";
import Img from "../../../components/common/Img";

const Container = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.palette.text.secondary};
  padding-block: 0.5em;
  margin-bottom: 0.25em;
`;

interface IProps {
  product: IProduct;
  qty: number;
}

const Product = (props: IProps) => {
  return (
    <Container>
      <Row justfiyContent="flex-start" width="100%" gap="10px">
        <Img
          src={props.product.images?.[0] || "/static/headphones.jpg"}
          alt="headphones"
          width={"90px"}
        />
        <Column justfiyContent="flex-start" width="100%">
          <Typography variant="caption" color="text.secondary">
            {props.product.name}
          </Typography>

          <Row justfiyContent="space-between" alignItems="center" width="100%">
            <Column>
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ textDecoration: "line-through" }}
              >
                ${props.product.price} x{props.qty}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                $
                {calculateDiscount(
                  props.product.price,
                  props.product.discount
                ).toFixed(2)}{" "}
                x{props.qty}
              </Typography>
            </Column>
            <Typography variant="h6" color="text.primary">
              $
              {(
                calculateDiscount(props.product.price, props.product.discount) *
                props.qty
              ).toFixed(2)}
            </Typography>
          </Row>
        </Column>
      </Row>
    </Container>
  );
};

export default Product;
