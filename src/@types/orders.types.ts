import { OrdersConstants } from "../redux/contants/orders.constants";

export interface GET_ORDERS_START {
  type: OrdersConstants.GET_ORDERS_START;
}

export interface GET_ORDERS_SUCCESS {
  type: OrdersConstants.GET_ORDERS_SUCCESS;
  payload: {
    [key: string]: any;
  };
}

export interface GET_ORDERS_FAIL {
  type: OrdersConstants.GET_ORDERS_FAIL;
  payload: string;
}

export type ActionsType = GET_ORDERS_START | GET_ORDERS_SUCCESS | GET_ORDERS_FAIL;
