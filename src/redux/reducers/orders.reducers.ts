import { ActionsType, IOrder, IOrderResponse } from "../../@types/orders.types";
import { OrdersConstants } from "../contants/orders.constants";

export interface IState {
  error: string;
  loading: boolean;
  myOrders: IOrder[];
  orders: { orders: IOrder[]; page: number; pages: number };
  order: IOrderResponse | undefined;
  allOrders: IOrder[];
}

const initial_state: IState = {
  error: "",
  loading: false,
  orders: { orders: [], page: 0, pages: 0 },
  myOrders: [],
  allOrders: [],
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
    case OrdersConstants.GET_ALL_ORDERS_START:
      return {
        ...state,
        loading: true,
      };
    case OrdersConstants.GET_ALL_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        allOrders: action.payload,
      };
    case OrdersConstants.GET_ALL_ORDERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case OrdersConstants.GET_ORDER_DETAILS_START:
      return {
        ...state,
        loading: true,
      };
    case OrdersConstants.GET_ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        order: action.payload,
      };
    case OrdersConstants.GET_ORDER_DETAILS_FAIL:
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
    case OrdersConstants.DELIVER_ORDER_START:
      return {
        ...state,
        loading: true,
      };
    case OrdersConstants.DELIVER_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case OrdersConstants.DELIVER_ORDER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
