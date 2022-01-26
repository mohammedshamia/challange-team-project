import styled from "styled-components";
import { Typography } from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Form, Formik } from "formik";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";

import { Row, Column } from "../../../components/GlobalStyles";
import { Section } from "../../../components/GlobalStyles";
import FormInput from "../../../components/common/FormInput";
import { Button } from "../../../components/Button/Button.style";
import { AppState } from "../../../redux/store";
import { formSchema, IPayment } from "./validation";
import {
  ErrorMessage,
  Label,
} from "../../../components/common/FormInput/FormInput.styled";
import { Item } from "../../../@types/cart.types";
import OrderDetails from "../OrderDetails";

interface IProps {
  next: Function;
  setPaymentDetails: Function;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  padding: 0;
  & button {
    width: 20%;
    align-self: flex-end;
  }
  ${(props) => props.theme.breakpoints.down("md")} {
    & button {
      width: 90%;
      margin: auto;
    }
  }
`;

const ShippingAndPayment = ({ next, setPaymentDetails }: IProps) => {
  const {
    cart: { cart },
  } = useSelector((state: AppState) => state);

  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = useCallback(
    async (values) => {
      setPaymentDetails(values as IPayment);
      next();
    },
    [next]
  );

  const allDiscount = useMemo(() => {
    return Math.round(
      cart.totalPrice -
        (cart.items as Item[]).reduce(
          (acc, { product }: Item) => (product.discount as number) + acc,
          0
        )
    ).toFixed(2);
  }, [cart]);

  return (
    <Container>
      <Formik
        validationSchema={formSchema}
        initialValues={{
          country: "",
          city: "",
          name: "",
          zipCode: "",
          streetAddress: "",
          hasNumber: "",
          hasExpiry: "",
          hasCvc: "",
        }}
        onSubmit={handlePayment}
      >
        {({ errors, setFieldValue }) => (
          <Form>
            <Row
              justfiyContent="stretch"
              width="100%"
              alignItems="stretch"
              gap="30px"
              wrap
            >
              <Section style={{ padding: "45px 88px" }}>
                <Column justfiyContent="flex-start" width="100%" gap="20px">
                  <Column justfiyContent="flex-start" width="100%">
                    <Typography
                      variant="h3"
                      color="text.primary"
                      sx={{ marginBottom: "0.5em" }}
                    >
                      Shipping Address
                    </Typography>
                    <Column justfiyContent="flex-start" width="100%" gap="10px">
                      <Row
                        justfiyContent="space-between"
                        width="100%"
                        gap="54px"
                        wrap
                      >
                        <Column justfiyContent="flex-start" width="50%">
                          <FormInput name="country" label="Country" />
                        </Column>
                        <Column justfiyContent="flex-start" width="50%">
                          <FormInput name="city" label="City" />
                        </Column>
                      </Row>
                      <Row
                        justfiyContent="space-between"
                        width="100%"
                        gap="54px"
                        wrap
                      >
                        <Column justfiyContent="flex-start" width="50%">
                          <FormInput
                            type="number"
                            name="zipCode"
                            label="Zip Code"
                          />
                        </Column>
                        <Column justfiyContent="flex-start" width="50%">
                          <FormInput
                            name="streetAddress"
                            label="Street Address"
                          />
                        </Column>
                      </Row>
                    </Column>
                  </Column>
                  <Column justfiyContent="flex-start" width="100%">
                    <Column justfiyContent="flex-start" width="100%">
                      <Typography
                        variant="h3"
                        color="text.primary"
                        sx={{ marginBottom: "0.5em" }}
                      >
                        Payment Details
                      </Typography>
                    </Column>
                    <Column justfiyContent="flex-start" width="100%" gap="10px">
                      <Row
                        justfiyContent="space-between"
                        width="100%"
                        gap="54px"
                        wrap
                      >
                        <Column justfiyContent="flex-start" width="50%">
                          <FormInput name="name" label="Name on Card" />
                        </Column>
                        <Column justfiyContent="flex-start" width="50%">
                          <Label>Card Number</Label>
                          <CardNumberElement
                            className="stripe"
                            onChange={(e) =>
                              setFieldValue("hasNumber", e.complete)
                            }
                          />
                          {errors["hasNumber"] && (
                            <ErrorMessage>{errors["hasNumber"]}</ErrorMessage>
                          )}
                        </Column>
                      </Row>
                      <Row
                        justfiyContent="space-between"
                        width="100%"
                        gap="54px"
                        wrap
                      >
                        <Column justfiyContent="flex-start" width="50%">
                          <Label>Expiry Date</Label>
                          <CardExpiryElement
                            className="stripe"
                            onChange={(e) =>
                              setFieldValue("hasExpiry", e.complete)
                            }
                          />
                          {errors["hasExpiry"] && (
                            <ErrorMessage>{errors["hasExpiry"]}</ErrorMessage>
                          )}
                        </Column>
                        <Column justfiyContent="flex-start" width="50%">
                          <Label>CVC</Label>
                          <CardCvcElement
                            className="stripe"
                            onChange={(e) =>
                              setFieldValue("hasCvc", e.complete)
                            }
                          />
                          {errors["hasCvc"] && (
                            <ErrorMessage>{errors["hasCvc"]}</ErrorMessage>
                          )}
                        </Column>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Section>
              <Section
                style={{ width: "40%", height: "inherit", padding: "22px" }}
              >
                <Column
                  justfiyContent="flex-start"
                  width="100%"
                  alignItems="center"
                >
                  <OrderDetails products={cart.items} cart={cart} />
                </Column>
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
                      ${allDiscount}
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
                      $0.00
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
                      ${allDiscount}
                    </Typography>
                  </Row>
                </Column>
              </Section>
            </Row>
            <Container>
              <Button type="submit">
                <Typography
                  variant="h6"
                  style={{
                    textTransform: "capitalize",
                  }}
                >
                  Review order
                </Typography>
              </Button>
            </Container>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default ShippingAndPayment;
