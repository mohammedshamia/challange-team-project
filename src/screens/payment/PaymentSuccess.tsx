import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button.style";
import { Row, Section, Column } from "../../components/GlobalStyles";
import { Container } from "./Payment.styled";

const PaymentSuccess = () => {
  const navigate = useNavigate();
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
              <Typography variant="h6" color="text.primary">
                Shipping Address
              </Typography>
            </Row>
            <Row justfiyContent="flex-start" width="100%">
              <Typography variant="body1" color="text.secondary">
                56051 Jones Falls, Philippines, Turkey - 62502
              </Typography>
            </Row>
          </Column>

          <Column justfiyContent="space-between" width="100%">
            <Row justfiyContent="flex-start" width="100%">
              <Typography variant="h6" color="text.primary">
                Order Items
              </Typography>
            </Row>
            <Row justfiyContent="flex-start" width="100%">
              <Typography variant="body1" color="text.secondary">
                1x iPhone 11 Pro 256GB Memory ,1x Apple Airpods Wireless
                Bluetooth Headset
              </Typography>
            </Row>
          </Column>
          <Row justfiyContent="flex-start" width="30%" style={{ margin: 0 }}>
            <Typography variant="caption" color="text.secondary">
              An email will be sent to your email address contains order
              confirmation and tracking code.
            </Typography>
          </Row>
        </Row>
      </Section>
      <Row justfiyContent="center" alignItems="flex-end" width="100%">
        <Button
          sx={{ width: "300px", marginTop: "1em" }}
          onClick={() => navigate("/")}
        >
          <Typography
            variant="h6"
            style={{ textTransform: "capitalize", paddingInline: "50px" }}
          >
            Keep Shopping
          </Typography>
        </Button>
      </Row>
    </Container>
  );
};

export default PaymentSuccess;
