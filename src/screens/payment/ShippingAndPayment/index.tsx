import styled from "styled-components";
import { Typography } from "@mui/material";
import { Row, Column } from "../../../components/GlobalStyles";
import { Section } from "../../../components/GlobalStyles";
import { Form, Formik } from "formik";
import OrderDetails from "../OrderDetails";
import FormInput from "../../../components/common/FormInput";
import { Button } from "../../../components/Button/Button.style";

interface IProps {
  next: Function;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  padding: 0;
`;

const index = ({ next }: IProps) => {
  return (
    <Container>
      <Formik initialValues={{}} onSubmit={() => {}}>
        {() => (
          <Form>
            <Column
              justfiyContent="stretch"
              width="100%"
              alignItems="stretch"
              gap="30px"
            >
              <Section style={{ padding: "45px 88px" }}>
                <Row justfiyContent="flex-start" width="100%" gap="20px">
                  <Row justfiyContent="flex-start" width="100%">
                    <Typography
                      variant="h3"
                      color="text.primary"
                      sx={{ marginBottom: "0.5em" }}
                    >
                      Shipping Address
                    </Typography>
                    <Row justfiyContent="flex-start" width="100%" gap="10px">
                      <Column
                        justfiyContent="space-between"
                        width="100%"
                        gap="54px"
                      >
                        <Row justfiyContent="flex-start" width="50%">
                          <FormInput name="country" label="Country" />
                        </Row>
                        <Row justfiyContent="flex-start" width="50%">
                          <FormInput name="city" label="City" />
                        </Row>
                      </Column>
                      <Column
                        justfiyContent="space-between"
                        width="100%"
                        gap="54px"
                      >
                        <Row justfiyContent="flex-start" width="50%">
                          <FormInput
                            type="number"
                            name="zipCode"
                            label="Zip Code"
                          />
                        </Row>
                        <Row justfiyContent="flex-start" width="50%">
                          <FormInput
                            name="streetAddress"
                            label="Street Address"
                          />
                        </Row>
                      </Column>
                    </Row>
                  </Row>
                  <Row justfiyContent="flex-start" width="100%">
                    <Row justfiyContent="flex-start" width="100%">
                      <Typography
                        variant="h3"
                        color="text.primary"
                        sx={{ marginBottom: "0.5em" }}
                      >
                        Payment Details
                      </Typography>
                    </Row>
                    <Row justfiyContent="flex-start" width="100%" gap="10px">
                      <Column
                        justfiyContent="space-between"
                        width="100%"
                        gap="54px"
                      >
                        <Row justfiyContent="flex-start" width="50%">
                          <FormInput name="name" label="Name on Card" />
                        </Row>
                        <Row justfiyContent="flex-start" width="50%">
                          <FormInput name="cardNumber" label="Card Number" />
                        </Row>
                      </Column>
                      <Column
                        justfiyContent="space-between"
                        width="100%"
                        gap="54px"
                      >
                        <Row justfiyContent="flex-start" width="50%">
                          <FormInput
                            type="date"
                            name="expirationDate"
                            label="Expiration Date"
                          />
                        </Row>
                        <Row justfiyContent="flex-start" width="50%">
                          <FormInput type="number" name="cvc" label="CVC" />
                        </Row>
                      </Column>
                    </Row>
                  </Row>
                </Row>
              </Section>
              <Section
                style={{ width: "40%", height: "inherit", padding: "22px" }}
              >
                <Row
                  justfiyContent="flex-start"
                  width="100%"
                  alignItems="center"
                >
                  <OrderDetails products={[]} />
                </Row>
                <Row
                  justfiyContent="flex-start"
                  width="100%"
                  alignItems="center"
                >
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
            </Column>
            <div
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                marginTop: "0.5em",
              }}
            >
              <Button onClick={() => next()}>
                <Typography
                  variant="h6"
                  style={{ textTransform: "capitalize", paddingInline: "50px" }}
                >
                  Review order
                </Typography>
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default index;
