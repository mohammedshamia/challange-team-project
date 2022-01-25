import { Typography } from "@mui/material";
import Stepper, { IStep } from "../../components/common/Stepper";
import ShippingAndPayment from "./ShippingAndPayment";
import PlaceOrder from "./PlaceOrder";
import { useCallback, useMemo, useState } from "react";
import { Container } from "./Payment.styled";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const Payment = () => {
  const [active, setActive] = useState<number>(0);

  const {
    config: { config },
  } = useSelector((state: AppState) => state);

  const next = useCallback(() => {
    setActive((prev) => prev + 1);
  }, []);

  const back = useCallback(() => {
    setActive((prev) => prev - 1);
  }, []);

  const stripePromise = loadStripe(config?.publishableKey || "");

  const steps = useMemo<IStep[]>(
    () => [
      {
        text: "Shipping and Payment",
        children: <ShippingAndPayment next={next} />,
      },
      {
        text: "Place an Order",
        children: <PlaceOrder back={back} />,
        last: true,
      },
    ],
    [next, back]
  );

  return (
    <Elements stripe={stripePromise}>
      <Container sx={{ marginTop: "2em", padding: "0" }}>
        <Typography
          variant="h2"
          color="text.primary"
          sx={{ marginBottom: "1em" }}
        >
          Review Order
        </Typography>
        <Stepper defaultActive={active} steps={steps} />
      </Container>
    </Elements>
  );
};

export default Payment;
