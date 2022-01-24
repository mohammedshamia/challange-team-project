import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IColumn } from "../../../../@types/table.types";
import Table from "../../../../components/Table";
import { getOrdersProdects } from "../../../../redux/actions/orders.actions";
import { AppState } from "../../../../redux/store";

const columns: IColumn[] = [
  {
    name: "user",
  },
  {
    name: "orderItems",
  },
  {
    name: "shippingAddress",
  },
  {
    name: "paymentMethod",
  },
  {
    name: "clientSecret",
  }, 
   {
    name: "taxPrice",
  },
  {
    name: "shippingPrice",
  },
  {
    name: "totalPrice",
  },
  {
    name: "isPaid",
  },
  {
    name: "paidAt",
  },
  {
    name: "isDelivered",
  },
  {
    name: "deliveredAt",
  }
];

export default function OrdersProduct() {
  const { orders } = useSelector((state: AppState) => state.orders);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrdersProdects());
  }, [dispatch]);

  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <Table data={orders} columns={columns} />
    </div>
  );
}
