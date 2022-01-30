import { ICellRendererParams } from "ag-grid-community";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../redux/store";
import Order from "../../payment/OrderDetails";
import {
  deliverOrder,
  getOrderByID,
} from "../../../redux/actions/orders.actions";
import { IOrder } from "../../../@types/orders.types";
import Loading from "../../../components/common/Loading";
import { Chip } from "@mui/material";
import { notify } from "../../../utils/helpers";

export const OrderDetails = ({
  params,
  onClose,
}: {
  params: ICellRendererParams;
  onClose?: Function;
}) => {
  const { order, loading } = useSelector((state: AppState) => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    if (params.data?._id) {
      dispatch(getOrderByID(params.data?._id as string));
    }
  }, [params, dispatch]);

  const markAsDelivered = useCallback(() => {
    if (!params.data.isDelivered) {
      dispatch(
        deliverOrder(params.data._id, () => {
          notify("success", "Order delivered successfully");
          onClose?.();
        })
      );
    }
  }, [params, dispatch, onClose]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Order products={(order as IOrder)?.orderItems} />
          <Chip
            disabled={params.data.isDelivered}
            onClick={markAsDelivered}
            sx={{ marginTop: "10px", justifySelf: "flex-end" }}
            color={params.data.isDelivered ? "success" : "error"}
            variant="outlined"
            label={params.data.isDelivered ? "Delivered" : "Not Delivered"}
          />
        </div>
      )}
    </>
  );
};
