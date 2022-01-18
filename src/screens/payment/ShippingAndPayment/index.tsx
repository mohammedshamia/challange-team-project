import styled from "styled-components";
import { Button, Typography } from "@mui/material";
import { Row, Column } from "../../../components/GlobalStyles";
import { Section } from "../../../components/GlobalStyles";
import { Form, Formik } from "formik";
import FormInput from "../../../components/common/FormInput";
import { Link } from "react-router-dom";

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
      <Column justfiyContent="space-between" width="100%" gap="30px">
        <Section>
          <Formik initialValues={{}} onSubmit={() => {}}>
            {() => (
              <Form style={{ padding: "45px 88px" }}>
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
              </Form>
            )}
          </Formik>
        </Section>
        <Section style={{ width: "40%" }}>
          <div style={{ padding: "22px" }}>
            <Column
              justfiyContent="space-between"
              width="100%"
              alignItems="center"
            >
              <Typography variant="h6" color="text.primary">
                Order Details
              </Typography>
              <Link to={"/shopping-cart"} color="text.secondary">
                Change
              </Link>
            </Column>
          </div>
        </Section>
      </Column>
      <Row justfiyContent="flex-end" width="fit-content">
        <Button onClick={() => next()}>Review order</Button>
      </Row>
    </Container>
  );
};

export default index;
