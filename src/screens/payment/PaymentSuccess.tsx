import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IOrder, IOrderResponse } from "../../@types/orders.types";
import { Button } from "../../components/Button/Button.style";
import Loading from "../../components/common/Loading";
import { Row, Section, Column } from "../../components/GlobalStyles";
import { getCart } from "../../redux/actions/cart.actions";
import { getOrderByID } from "../../redux/actions/orders.actions";
import { AppState } from "../../redux/store";
import { Container } from "./Payment.styled";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { order } = useSelector((state: AppState) => state.orders);

  useEffect(() => {
    dispatch(getCart());
    if ((order as IOrderResponse)?.order?._id) {
      dispatch(getOrderByID((order as IOrderResponse)?.order?._id as string));
    }
  }, [dispatch, order]);

  return (
    <Container style={{ marginTop: "2em" }}>
      {!(order as IOrder)?._id ? (
        <Loading />
      ) : (
        <>
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
                    {(order as IOrder)?._id}
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
                    {(() => {
                      if ((order as IOrder)?._id) {
                        return `${
                          (order as IOrder)?.shippingAddress?.address
                        }, ${(order as IOrder)?.shippingAddress?.city}, ${
                          (order as IOrder)?.shippingAddress?.country
                        } - ${(order as IOrder)?.shippingAddress?.postalCode}`;
                      }
                    })()}
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
                    {(order as IOrder)?.orderItems?.map((item, index) => (
                      <span key={item._id}>
                        {item?.qty as number}x {item?.product.name}
                        {index === (order as IOrder)?.orderItems?.length - 1
                          ? ""
                          : ", "}
                      </span>
                    ))}
                  </Typography>
                </Column>
              </Row>
              <Column
                justfiyContent="flex-start"
                width="30%"
                style={{ margin: 0 }}
              >
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
        </>
      )}
    </Container>
  );
};

export default PaymentSuccess;
