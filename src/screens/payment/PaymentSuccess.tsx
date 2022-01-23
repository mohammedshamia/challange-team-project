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
        <Column justfiyContent="flex-start" width="100%" gap="0.5em">
          <Typography variant="h2" color="text.primary">
            Payment Success !
          </Typography>

          <Row justfiyContent="space-between" width="100%">
            <Column justfiyContent="flex-start" width="100%">
              <Typography variant="h6" color="text.primary">
                Order number
              </Typography>
            </Column>
            <Column justfiyContent="flex-start" width="100%">
              <Typography variant="body1" color="text.secondary">
                65AS1D56ASD156DS
              </Typography>
            </Column>
          </Row>

          <Row justfiyContent="space-between" width="100%">
            <Column justfiyContent="flex-start" width="100%">
              <Typography variant="h6" color="text.primary">
                Shipping Address
              </Typography>
            </Column>
            <Column justfiyContent="flex-start" width="100%">
              <Typography variant="body1" color="text.secondary">
                56051 Jones Falls, Philippines, Turkey - 62502
              </Typography>
            </Column>
          </Row>

          <Row justfiyContent="space-between" width="100%">
            <Column justfiyContent="flex-start" width="100%">
              <Typography variant="h6" color="text.primary">
                Order Items
              </Typography>
            </Column>
            <Column justfiyContent="flex-start" width="100%">
              <Typography variant="body1" color="text.secondary">
                1x iPhone 11 Pro 256GB Memory ,1x Apple Airpods Wireless
                Bluetooth Headset
              </Typography>
            </Column>
          </Row>
          <Column justfiyContent="flex-start" width="30%" style={{ margin: 0 }}>
            <Typography variant="caption" color="text.secondary">
              An email will be sent to your email address contains order
              confirmation and tracking code.
            </Typography>
          </Column>
        </Column>
      </Section>
      <Column justfiyContent="center" alignItems="flex-end" width="100%">
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
      </Column>
    </Container>
  );
};

export default PaymentSuccess;
