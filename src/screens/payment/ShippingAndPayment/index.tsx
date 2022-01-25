import styled from "styled-components";
import { Typography } from "@mui/material";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Form, Formik } from "formik";
import { Row, Column } from "../../../components/GlobalStyles";
import { Section } from "../../../components/GlobalStyles";
import OrderDetails from "../OrderDetails";
import FormInput from "../../../components/common/FormInput";
import { Button } from "../../../components/Button/Button.style";
import { IProduct } from "../../../@types/products.types";
import { AppState } from "../../../redux/store";
import { calculateDiscount } from "../../../utils/helpers";

interface IProps {
  next: Function;
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

const ShippingAndPayment = ({ next }: IProps) => {
  const {
    products: {
      products: { products },
    },
    cart: { cart },
  } = useSelector((state: AppState) => state);

  // const CartProducts = useMemo<IProduct[]>(() => {
  //   if (Object.keys(cart).length > 0) {
  //     return (products as IProduct[]).filter((product) =>
  //       Object.keys(cart).includes(product._id as string)
  //     );
  //   }
  //   return [];
  // }, [cart, products]);

  // const discountPrice = useMemo<number>(() => {
  //   if (Object.keys(cart).length > 0) {
  //     return (products as IProduct[])
  //       .filter((product) => Object.keys(cart).includes(product._id as string))
  //       .reduce(
  //         (acc, product) =>
  //           calculateDiscount(
  //             product.price as number,
  //             product.discount as number
  //           ) *
  //             cart[product?._id as string].qty +
  //           acc,
  //         0
  //       );
  //   }
  //   return 0;
  // }, [cart, products]);

  return (
    <Container>
      <Formik initialValues={{}} onSubmit={() => next()}>
        {() => (
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
                          <FormInput name="cardNumber" label="Card Number" />
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
                            type="date"
                            name="expirationDate"
                            label="Expiration Date"
                          />
                        </Column>
                        <Column justfiyContent="flex-start" width="50%">
                          <FormInput type="number" name="cvc" label="CVC" />
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
                  {/* <OrderDetails products={CartProducts} cart={cart} /> */}
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
                    {/* <Typography variant="caption" color="text.secondary">
                      ${discountPrice.toFixed(2)}
                    </Typography> */}
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
                    {/* <Typography variant="caption" color="text.primary">
                      ${discountPrice.toFixed(2)}
                    </Typography> */}
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
