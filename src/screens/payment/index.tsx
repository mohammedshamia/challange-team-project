import { Typography } from "@mui/material";
import Stepper, { IStep } from "../../components/common/Stepper";
import ShippingAndPayment from "./ShippingAndPayment";
import PlaceOrder from "./PlaceOrder";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Container } from "./Payment.styled";
import { IPayment } from "./ShippingAndPayment/validation";

const Payment = () => {
  const [active, setActive] = useState<number>(0);
  const [state, setState] = useState<IPayment>();

  const next = useCallback(() => {
    setActive((prev) => prev + 1);
  }, []);

  const back = useCallback(() => {
    setActive((prev) => prev - 1);
  }, []);

  useEffect(() => {
    console.log(state);
  }, [state]);

  const steps = useMemo<IStep[]>(
    () => [
      {
        text: "Shipping and Payment",
        children: (
          <ShippingAndPayment next={next} setPaymentDetails={setState} />
        ),
      },
      {
        text: "Place an Order",
        children: <PlaceOrder back={back} paymentDetails={state} />,
        last: true,
      },
    ],
    [next, back]
  );

  return (
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
  );
};

export default Payment;
