import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IColumn } from "../../../../@types/table.types";
import Table from "../../../../components/Table";
import { getMyOrders } from "../../../../redux/actions/orders.actions";
import { AppState } from "../../../../redux/store";

const columns: IColumn[] = [
  {
    name: "orderItems",
    cellRenderer: (params) => `${params.value?.length} Items`,
  },
  {
    name: "paymentMethod",
  },
  {
    name: "totalPrice",
    cellRenderer: (params) => `$${params.value?.toFixed(2)}`,
  },
  {
    name: "isPaid",
  },
  {
    name: "isDelivered",
  },
];

export default function OrdersProduct() {
  const { myOrders } = useSelector((state: AppState) => state.orders);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyOrders());
  }, [dispatch]);

  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <Typography
        color="text.primary"
        variant="h2"
        fontSize="1.5rem"
        sx={{
          marginBlock: "30px",

          letterSpacing: "0.6px",
        }}
      >
        ALL ORDERS
      </Typography>
      <Table data={myOrders} columns={columns} />
    </div>
  );
}
