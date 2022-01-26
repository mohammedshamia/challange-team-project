import { ActionsType, IOrder, IOrderResponse } from "../../@types/orders.types";
import { OrdersConstants } from "../contants/orders.constants";

export interface IState {
  error: string;
  loading: boolean;
  myOrders: IOrder[];
  orders: IOrder[];
  order: IOrderResponse | undefined;
}

const initial_state: IState = {
  error: "",
  loading: false,
  orders: [],
  myOrders: [],
  order: undefined,
};

export const OrdersReducer = (state = initial_state, action: ActionsType) => {
  switch (action.type) {
    case OrdersConstants.GET_MY_ORDERS_START:
      return {
        ...state,
        loading: true,
      };
    case OrdersConstants.GET_MY_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        myOrders: action.payload,
      };
    case OrdersConstants.GET_MY_ORDERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case OrdersConstants.GET_ORDERS_START:
      return {
        ...state,
        loading: true,
      };
    case OrdersConstants.GET_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };
    case OrdersConstants.GET_ORDERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case OrdersConstants.CREATE_ORDER_START:
      return {
        ...state,
        loading: true,
      };
    case OrdersConstants.CREATE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        order: action.payload,
      };
    case OrdersConstants.CREATE_ORDER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
