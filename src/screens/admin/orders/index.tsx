import { Icon, Typography } from "@mui/material";
import { ICellRendererParams } from "ag-grid-community";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IColumn } from "../../../@types/table.types";
import Table from "../../../components/Table";
import { AppState } from "../../../redux/store";
import { notify } from "../../../utils/helpers";
import {
  BootstrapDialog,
  BootstrapDialogTitle,
} from "../../../components/ReviewsCard/ReviewForm";
import { Row } from "../../../components/GlobalStyles";
import { Button } from "../../../components/Button/Button.style";
import {
  deliverOrder,
  getAllOrders,
} from "../../../redux/actions/orders.actions";
import { OrderDetails } from "./OrderDetails";

const columns: IColumn[] = [
  {
    name: "Order ID",
    cellRenderer: (params: ICellRendererParams) => {
      return `${params.data._id}`;
    },
  },
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
  { name: "Actions", cellRenderer: "ActionsRenderer" },
];

const Actions = (params: ICellRendererParams) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [View, setView] = useState<boolean>(false);
  const dispatch = useDispatch();

  const markAsDelivered = useCallback(() => {
    dispatch(
      deliverOrder(params.data._id, () => {
        notify("success", "Order delivered successfully");
        handleClose();
        dispatch(getAllOrders());
      })
    );
  }, [params, dispatch]);

  const handleClose = () => {
    setVisible(false);
    setView(false);
  };

  return (
    <>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <Icon
          sx={{
            cursor: "pointer",
            height: "1.3em",
          }}
        >
          <VisibilityIcon onClick={() => setView(true)} />
        </Icon>
      </div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="product-delete-dialog"
        open={visible || View}
      >
        <BootstrapDialogTitle id="product-delete-dialog" onClose={handleClose}>
          {visible ? (
            <Typography
              variant="h6"
              color="#FC4059"
              sx={{ marginBottom: "2em", textAlign: "center" }}
            >
              Are you sure you want to mark this order as delivered ?
            </Typography>
          ) : (
            <Typography color="text.primary" variant="h4">
              Order Details
            </Typography>
          )}
        </BootstrapDialogTitle>
        {visible ? (
          <Row wrap gap="100px">
            <Button onClick={markAsDelivered}>Yes</Button>
            <Button
              border={"1px solid #fcdd06"}
              background="none"
              onClick={handleClose}
            >
              No
            </Button>
          </Row>
        ) : (
          <OrderDetails onClose={handleClose} params={params} />
        )}
      </BootstrapDialog>
    </>
  );
};

export default function AllOrdersProduct() {
  const { allOrders } = useSelector((state: AppState) => state.orders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  return (
    <div style={{ width: "60%", margin: "auto" }}>
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
      <Table
        data={allOrders}
        columns={columns}
        frameworkComponents={{
          ActionsRenderer: Actions,
        }}
      />
    </div>
  );
}
