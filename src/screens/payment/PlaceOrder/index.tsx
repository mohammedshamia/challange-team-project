import { Typography } from "@mui/material";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IProduct } from "../../../@types/products.types";
import { Button } from "../../../components/Button/Button.style";
import { Column, Row, Section } from "../../../components/GlobalStyles";
import { AppState } from "../../../redux/store";
import OrderDetails from "../OrderDetails";
import { Link } from "../Payment.styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  padding: 0;
  ${(props) => props.theme.breakpoints.down("md")} {
    width: 100% !important;
  }
`;

interface IProps {
  back: Function;
}

const PlaceOrder = ({ back }: IProps) => {
  const navigate = useNavigate();

  const {
    products: {
      products: { products },
    },
    cart: { cart },
  } = useSelector((state: AppState) => state);

  const CartProducts = useMemo<IProduct[]>(() => {
    if (Object.keys(cart).length > 0) {
      return (products as IProduct[]).filter((product) =>
        Object.keys(cart).includes(product._id as string)
      );
    }
    return [];
  }, [cart, products]);

  return (
    <Container>
      <Row
        justfiyContent="stretch"
        width="100%"
        alignItems="stretch"
        gap="50px"
        wrap
      >
        <Section style={{ padding: "40px 70px" }}>
          <Column justfiyContent="flex-start" width="100%" gap="20px">
            <Column justfiyContent="flex-start" width="100%">
              <Typography
                variant="h6"
                color="text.primary"
                sx={{ marginBottom: "0.5em" }}
              >
                Shipping Address
              </Typography>
              <Column justfiyContent="flex-start" width="100%" gap="10px">
                <Typography
                  variant="body1"
                  color="text.primary"
                  sx={{ marginBottom: "0.5em" }}
                >
                  John rose
                </Typography>
              </Column>
              <Column justfiyContent="flex-start" width="100%" gap="10px">
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ marginBottom: "0.5em" }}
                >
                  56051 Jones Falls, Philippines,
                </Typography>
              </Column>
              <Column justfiyContent="flex-start" width="100%" gap="10px">
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ marginBottom: "0.5em" }}
                >
                  Turkey - 62502
                </Typography>
              </Column>
            </Column>
            <Column justfiyContent="flex-start" width="100%">
              <OrderDetails products={CartProducts} cart={cart} />
            </Column>
            <Column justfiyContent="flex-start" width="100%">
              <Column justfiyContent="flex-start" width="100%">
                <Row
                  justfiyContent="space-between"
                  width="100%"
                  alignItems="center"
                >
                  <Typography variant="h6" color="text.primary">
                    Payment Details
                  </Typography>
                  <Link to={""} color="text.secondary" onClick={() => back()}>
                    Change
                  </Link>
                </Row>
              </Column>
            </Column>
          </Column>
        </Section>
        <Container style={{ margin: 0, width: "40%" }}>
          <Section style={{ width: "100%", padding: "25px 40px" }}>
            <Typography
              variant="h5"
              color="text.primary"
              sx={{ marginBottom: "0.5em" }}
            >
              Order Details
            </Typography>
            <Column
              justfiyContent="flex-start"
              width="100%"
              alignItems="center"
            >
              <Row
                justfiyContent="space-between"
                width="100%"
                alignItems="center"
              >
                <Typography variant="caption" color="text.secondary">
                  Subtotal
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  $589.98
                </Typography>
              </Row>
              <Row
                justfiyContent="space-between"
                width="100%"
                alignItems="center"
              >
                <Typography variant="caption" color="text.secondary">
                  Tax
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  $2.53
                </Typography>
              </Row>
              <Row
                justfiyContent="space-between"
                width="100%"
                alignItems="center"
              >
                <Typography variant="caption" color="text.secondary">
                  Shipping
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  $0.00
                </Typography>
              </Row>
              <Row
                justfiyContent="space-between"
                width="100%"
                alignItems="center"
              >
                <Typography variant="caption" color="text.primary">
                  Total
                </Typography>
                <Typography variant="caption" color="text.primary">
                  $592.51
                </Typography>
              </Row>
            </Column>
          </Section>
          <Button
            style={{ width: "100%", marginTop: "1em" }}
            onClick={() => navigate("/payment-success")}
          >
            <Typography
              variant="h6"
              style={{ textTransform: "capitalize", paddingInline: "50px" }}
            >
              Place Order
            </Typography>
          </Button>
        </Container>
      </Row>
    </Container>
  );
};

export default PlaceOrder;
