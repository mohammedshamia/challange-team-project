import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderByID } from "../../../redux/actions/orders.actions";
import { AppState } from "../../../redux/store";

const OrderDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { order, loading } = useSelector((state: AppState) => state.orders);

  useEffect(() => {
    if (params.id) {
      dispatch(getOrderByID(params.id as string));
    }
  }, [params, dispatch]);

  return <></>;
};

export default OrderDetails;
