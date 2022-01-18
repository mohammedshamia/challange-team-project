import { Typography } from "@mui/material";
import { Row, Section, Column } from "../../components/GlobalStyles";
import { Container } from "./Payment.styled";

const PaymentSuccess = () => {
  return (
    <Container style={{ marginTop: "2em" }}>
      <Section style={{ padding: "50px" }}>
        <Row justfiyContent="flex-start" width="100%" gap="0.5em">
          <Typography variant="h2" color="text.primary">
            Payment Success !
          </Typography>
          <Column justfiyContent="space-between" width="100%">
            <Row justfiyContent="flex-start" width="100%">
              <Typography variant="h6" color="text.primary">
                Order number
              </Typography>
            </Row>
            <Row justfiyContent="flex-start" width="100%">
              <Typography variant="body1" color="text.secondary">
                65AS1D56ASD156DS
              </Typography>
            </Row>
          </Column>
          <Column justfiyContent="space-between" width="100%">
            <Row justfiyContent="flex-start" width="100%">
              Shipping Address
            </Row>
            <Row justfiyContent="flex-start" width="100%">
              56051 Jones Falls, Philippines, Turkey - 62502
            </Row>
          </Column>
          <Column justfiyContent="space-between" width="100%">
            <Row justfiyContent="flex-start" width="100%">
              Order Items
            </Row>
            <Row justfiyContent="flex-start" width="100%">
              1x iPhone 11 Pro 256GB Memory ,1x Apple Airpods Wireless Bluetooth
              Headset
            </Row>
          </Column>
          <Row justfiyContent="space-between" width="100%">
            An email will be sent to your email address contains order
            confirmation and tacking code.
          </Row>
        </Row>
      </Section>
    </Container>
  );
};

export default PaymentSuccess;
