import { CircularProgress, Typography } from "@mui/material";
import {
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { StripeCardNumberElement, StripeError } from "@stripe/stripe-js";
import { useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Item } from "../../../@types/cart.types";
import { IOrderResponse, IShoppingAddress } from "../../../@types/orders.types";
import { Button } from "../../../components/Button/Button.style";
import { Column, Row, Section } from "../../../components/GlobalStyles";
import { createOrder } from "../../../redux/actions/orders.actions";
import { AppState } from "../../../redux/store";
import { notify } from "../../../utils/helpers";
import OrderDetails from "../OrderDetails";
import { Link } from "../Payment.styled";
import { IPayment } from "../ShippingAndPayment/validation";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  padding: 0;
  ${(props) => props.theme.breakpoints.down("md")} {
    width: 100% !important;
  }
`;

interface IProps {
  back: Function;
  paymentDetails: IPayment | undefined;
}

const PlaceOrder = ({ back, paymentDetails }: IProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState<boolean>(false);

  const {
    cart: { cart },
  } = useSelector((state: AppState) => state);

  const allDiscount = useMemo(() => {
    return Math.round(
      cart.totalPrice -
        (cart.items as Item[]).reduce(
          (acc, { product }: Item) => (product.discount as number) + acc,
          0
        )
    ).toFixed(2);
  }, [cart]);

  const handlePlaceOrder = useCallback(() => {
    try {
      setLoading(true);
      if (!stripe || !elements) {
        setLoading(false);
        return;
      }
      const { country, city, postalCode, address } = paymentDetails as IPayment;
      const ShippingAddress: IShoppingAddress = {
        address,
        city,
        country,
        postalCode,
      };
      dispatch(
        createOrder(ShippingAddress, async (res: IOrderResponse) => {
          try {
            const { error, paymentIntent } = await stripe.confirmCardPayment(
              res.clientSecret,
              {
                payment_method: {
                  card: elements.getElement(
                    CardNumberElement
                  ) as StripeCardNumberElement,
                },
              }
            );
            if (error) {
              throw error;
            }
            if (paymentIntent?.status === "succeeded") {
              navigate("/payment-success");
            }
          } catch (error: StripeError | any) {
            notify("error", error.message || "Failed to process payment");
          }
        })
      );
    } catch (error: any) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [paymentDetails, stripe, elements, dispatch, navigate]);

  return (
    <Container>
      <Row
        justfiyContent="stretch"
        width="100%"
        alignItems="stretch"
        gap="50px"
        wrap
      >
        <Section style={{ padding: "40px 70px" }}>
          <Column justfiyContent="flex-start" width="100%" gap="20px">
            <Column justfiyContent="flex-start" width="100%">
              <Typography
                variant="h6"
                color="text.primary"
                sx={{ marginBottom: "0.5em" }}
              >
                Shipping Address
              </Typography>
              <Column justfiyContent="flex-start" width="100%" gap="10px">
                <Typography
                  variant="body1"
                  color="text.primary"
                  sx={{ marginBottom: "0.5em" }}
                >
                  {(paymentDetails as IPayment)?.city}
                </Typography>
              </Column>
              <Column justfiyContent="flex-start" width="100%" gap="10px">
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ marginBottom: "0.5em" }}
                >
                  {`${(paymentDetails as IPayment)?.address},`}
                </Typography>
              </Column>
              <Column justfiyContent="flex-start" width="100%" gap="10px">
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ marginBottom: "0.5em" }}
                >
                  {`${(paymentDetails as IPayment)?.country} - ${
                    (paymentDetails as IPayment)?.postalCode
                  }`}
                </Typography>
              </Column>
            </Column>
            <Column justfiyContent="flex-start" width="100%">
              <OrderDetails products={cart.items} cart={cart} />
            </Column>
            <Column justfiyContent="flex-start" width="100%">
              <Column justfiyContent="flex-start" width="100%">
                <Row
                  justfiyContent="space-between"
                  width="100%"
                  alignItems="center"
                >
                  <Typography variant="h6" color="text.primary">
                    Payment Details
                  </Typography>
                  <Link to={""} color="text.secondary" onClick={() => back()}>
                    Change
                  </Link>
                </Row>
              </Column>
            </Column>
          </Column>
        </Section>
        <Container style={{ margin: 0, width: "40%" }}>
          <Section style={{ width: "100%", padding: "25px 40px" }}>
            <Typography
              variant="h5"
              color="text.primary"
              sx={{ marginBottom: "0.5em" }}
            >
              Order Details
            </Typography>
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
          <Button
            style={{ width: "100%", marginTop: "1em" }}
            onClick={handlePlaceOrder}
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={14} style={{ color: "#000" }} />
            ) : (
              <Typography
                variant="h6"
                style={{ textTransform: "capitalize", paddingInline: "50px" }}
              >
                Place Order
              </Typography>
            )}
          </Button>
        </Container>
      </Row>
    </Container>
  );
};

export default PlaceOrder;
