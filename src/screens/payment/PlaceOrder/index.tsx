import { Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../../components/Button/Button.style";
import { Column, Row, Section } from "../../../components/GlobalStyles";
import OrderDetails from "../OrderDetails";
import { Link } from "../Payment.styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  padding: 0;
`;

const PlaceOrder = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Column
        justfiyContent="stretch"
        width="100%"
        alignItems="stretch"
        gap="50px"
      >
        <Section style={{ padding: "40px 70px" }}>
          <Row justfiyContent="flex-start" width="100%" gap="20px">
            <Row justfiyContent="flex-start" width="100%">
              <Typography
                variant="h6"
                color="text.primary"
                sx={{ marginBottom: "0.5em" }}
              >
                Shipping Address
              </Typography>
              <Row justfiyContent="flex-start" width="100%" gap="10px">
                <Typography
                  variant="body1"
                  color="text.primary"
                  sx={{ marginBottom: "0.5em" }}
                >
                  John rose
                </Typography>
              </Row>
              <Row justfiyContent="flex-start" width="100%" gap="10px">
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ marginBottom: "0.5em" }}
                >
                  56051 Jones Falls, Philippines,
                </Typography>
              </Row>
              <Row justfiyContent="flex-start" width="100%" gap="10px">
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ marginBottom: "0.5em" }}
                >
                  Turkey - 62502
                </Typography>
              </Row>
            </Row>
            <Row justfiyContent="flex-start" width="100%">
              <OrderDetails products={[]} />
            </Row>
            <Row justfiyContent="flex-start" width="100%">
              <Row justfiyContent="flex-start" width="100%">
                <Column
                  justfiyContent="space-between"
                  width="100%"
                  alignItems="center"
                >
                  <Typography variant="h6" color="text.primary">
                    Payment Details
                  </Typography>
                  <Link to={"/review-order"} color="text.secondary">
                    Change
                  </Link>
                </Column>
              </Row>
            </Row>
          </Row>
        </Section>
        <div>
          <Section style={{ width: "100%", padding: "25px 40px" }}>
            <Typography
              variant="h5"
              color="text.primary"
              sx={{ marginBottom: "0.5em" }}
            >
              Order Details
            </Typography>
            <Row justfiyContent="flex-start" width="100%" alignItems="center">
              <Column
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
              </Column>
              <Column
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
              </Column>
              <Column
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
              </Column>
              <Column
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
              </Column>
            </Row>
          </Section>
          <Button
            style={{ width: "300px", marginTop: "1em" }}
            onClick={() => navigate("/payment-success")}
          >
            <Typography
              variant="h6"
              style={{ textTransform: "capitalize", paddingInline: "50px" }}
            >
              Place Order
            </Typography>
          </Button>
        </div>
      </Column>
    </Container>
  );
};

export default PlaceOrder;
