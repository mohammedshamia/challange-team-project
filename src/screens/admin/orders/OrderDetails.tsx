import { ICellRendererParams } from "ag-grid-community";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../redux/store";
import Order from "../../payment/OrderDetails";
import { getOrderByID } from "../../../redux/actions/orders.actions";
import { Item } from "../../../@types/cart.types";
import { IOrderItems, IOrder } from "../../../@types/orders.types";
import Loading from "../../../components/common/Loading";

export const OrderDetails = ({ params }: { params: ICellRendererParams }) => {
  const { order, loading } = useSelector((state: AppState) => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    if (params.data?._id) {
      dispatch(getOrderByID(params.data?._id as string));
    }
  }, [params, dispatch]);

  console.log(order);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Order products={(order as IOrder)?.orderItems} />
        </>
      )}
    </>
  );
};
