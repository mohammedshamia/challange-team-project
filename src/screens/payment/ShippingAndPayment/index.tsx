import styled, { useTheme } from "styled-components";
import { Typography } from "@mui/material";
import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Formik } from "formik";
import {
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
import { getCart } from "../../../redux/actions/cart.actions";

interface IProps {
  next: Function;
  setPaymentDetails: Function;
  paymentDetails?: IPayment;
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

const ShippingAndPayment = ({
  next,
  setPaymentDetails,
  paymentDetails,
}: IProps) => {
  const theme = useTheme();

  const {
    cart: { cart },
  } = useSelector((state: AppState) => state);

  const dispatch = useDispatch();

  const handlePayment = useCallback(
    async (values) => {
      setPaymentDetails(values as IPayment);
      next();
    },
    [next, setPaymentDetails]
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

  useEffect(() => {
    if (cart.items.length === 0) {
      dispatch(getCart());
    }
  }, [cart]);

  return (
    <Container>
      <Formik
        enableReinitialize
        validationSchema={formSchema}
        initialValues={{
          country: paymentDetails?.country || "",
          city: paymentDetails?.city || "",
          name: paymentDetails?.name || "",
          postalCode: paymentDetails?.postalCode || "",
          address: paymentDetails?.address || "",
          hasNumber: "",
          hasExpiry: "",
          hasCvc: "",
        }}
        onSubmit={handlePayment}
      >
        {({ errors, touched, setFieldValue, setFieldTouched }) => (
          <Form>
            <Row
              justfiyContent="stretch"
              width="100%"
              alignItems="stretch"
              gap="30px"
              wrap
            >
              <Section style={{ padding: "45px 7%" }}>
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
                            name="postalCode"
                            label="Zip Code"
                          />
                        </Column>
                        <Column justfiyContent="flex-start" width="50%">
                          <FormInput name="address" label="Street Address" />
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
                            onFocus={() => setFieldTouched("hasNumber", true)}
                            onChange={(e) =>
                              setFieldValue("hasNumber", !e.empty && e.complete)
                            }
                            options={{
                              style: {
                                base: { color: theme.palette.text.primary },
                              },
                            }}
                          />
                          {errors["hasNumber"] && touched["hasNumber"] && (
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
                            onFocus={() => setFieldTouched("hasExpiry", true)}
                            onChange={(e) =>
                              setFieldValue("hasExpiry", !e.empty && e.complete)
                            }
                            options={{
                              style: {
                                base: { color: theme.palette.text.primary },
                              },
                            }}
                          />
                          {errors["hasExpiry"] && touched["hasExpiry"] && (
                            <ErrorMessage>{errors["hasExpiry"]}</ErrorMessage>
                          )}
                        </Column>
                        <Column justfiyContent="flex-start" width="50%">
                          <Label>CVC</Label>
                          <CardCvcElement
                            className="stripe"
                            onFocus={() => setFieldTouched("hasCvc", true)}
                            onChange={(e) =>
                              setFieldValue("hasCvc", !e.empty && e.complete)
                            }
                            options={{
                              style: {
                                base: { color: theme.palette.text.primary },
                              },
                            }}
                          />
                          {errors["hasCvc"] && touched["hasCvc"] && (
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
