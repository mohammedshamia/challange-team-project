import { Typography } from "@mui/material";
import Stepper, { IStep } from "../../components/common/Stepper";
import ShippingAndPayment from "./ShippingAndPayment";
import PlaceOrder from "./PlaceOrder";
import { useCallback, useMemo, useState } from "react";
import { Container } from "./Payment.styled";

const Payment = () => {
  const [active, setActive] = useState<number>(0);

  const next = useCallback(() => {
    setActive((prev) => prev + 1);
  }, []);

  const steps = useMemo<IStep[]>(
    () => [
      {
        text: "Shipping and Payment",
        children: <ShippingAndPayment next={next} />,
      },
      {
        text: "Place an Order",
        children: <PlaceOrder />,
        last: true,
      },
    ],
    [next]
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
