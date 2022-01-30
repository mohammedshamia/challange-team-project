import { OrdersConstants } from "../redux/contants/orders.constants";
import { IProduct } from "./products.types";

export interface IShoppingAddress {
  address: string;
  city: string;
  postalCode: number;
  country: string;
}

export interface IOrderItems {
  itemTotalPrice: number;
  qty: number;
  product: IProduct;
  _id: string;
}

export interface IOrderResponse {
  clientSecret: string;
  order:
    | IOrder
    | {
        taxPrice: number;
        shippingPrice: number;
        totalPrice: number;
        isPaid: boolean;
        isDelivered: boolean;
        _id: string;
        user: string;
        orderItems: IOrderItems[];
        shippingAddress: IShoppingAddress;
        paymentMethod: string;
        createdAt: string;
        updatedAt: string;
        __v: 0;
        clientSecret: string;
      };
  message: string;
}

export interface IOrder {
  user: string;
  orderItems: IOrderItems[];
  shippingAddress: IShoppingAddress;
  paymentMethod: string;
  clientSecret?: string;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  isPaid: boolean;
  paidAt: string;
  isDelivered: boolean;
  deliveredAt: string;
  _id?: string;
}

export interface GET_MY_ORDERS_START {
  type: OrdersConstants.GET_MY_ORDERS_START;
}

export interface GET_MY_ORDERS_SUCCESS {
  type: OrdersConstants.GET_MY_ORDERS_SUCCESS;
  payload: {};
}

export interface GET_MY_ORDERS_FAIL {
  type: OrdersConstants.GET_MY_ORDERS_FAIL;
  payload: string;
}

export interface GET_ORDER_DETAILS_START {
  type: OrdersConstants.GET_ORDER_DETAILS_START;
}

export interface GET_ORDER_DETAILS_SUCCESS {
  type: OrdersConstants.GET_ORDER_DETAILS_SUCCESS;
  payload: IOrderResponse;
}

export interface GET_ORDER_DETAILS_FAIL {
  type: OrdersConstants.GET_ORDER_DETAILS_FAIL;
  payload: string;
}

export interface GET_ORDERS_START {
  type: OrdersConstants.GET_ORDERS_START;
}

export interface GET_ORDERS_SUCCESS {
  type: OrdersConstants.GET_ORDERS_SUCCESS;
  payload: IOrder[];
}

export interface GET_ORDERS_FAIL {
  type: OrdersConstants.GET_ORDERS_FAIL;
  payload: string;
}

export interface GET_ALL_ORDERS_START {
  type: OrdersConstants.GET_ALL_ORDERS_START;
}

export interface GET_ALL_ORDERS_SUCCESS {
  type: OrdersConstants.GET_ALL_ORDERS_SUCCESS;
  payload: IOrder[];
}

export interface GET_ALL_ORDERS_FAIL {
  type: OrdersConstants.GET_ALL_ORDERS_FAIL;
  payload: string;
}

export interface CREATE_ORDER_START {
  type: OrdersConstants.CREATE_ORDER_START;
}

export interface CREATE_ORDER_SUCCESS {
  type: OrdersConstants.CREATE_ORDER_SUCCESS;
  payload: IOrderResponse;
}

export interface CREATE_ORDER_FAIL {
  type: OrdersConstants.CREATE_ORDER_FAIL;
  payload: string;
}

export interface DELIVER_ORDER_START {
  type: OrdersConstants.DELIVER_ORDER_START;
}

export interface DELIVER_ORDER_SUCCESS {
  type: OrdersConstants.DELIVER_ORDER_SUCCESS;
}

export interface DELIVER_ORDER_FAIL {
  type: OrdersConstants.DELIVER_ORDER_FAIL;
  payload: string;
}

export type ActionsType =
  | GET_MY_ORDERS_START
  | GET_MY_ORDERS_SUCCESS
  | GET_MY_ORDERS_FAIL
  | GET_ORDERS_START
  | GET_ORDERS_SUCCESS
  | GET_ORDERS_FAIL
  | GET_ALL_ORDERS_START
  | GET_ALL_ORDERS_SUCCESS
  | GET_ALL_ORDERS_FAIL
  | GET_ORDER_DETAILS_START
  | GET_ORDER_DETAILS_SUCCESS
  | GET_ORDER_DETAILS_FAIL
  | CREATE_ORDER_START
  | CREATE_ORDER_SUCCESS
  | CREATE_ORDER_FAIL
  | DELIVER_ORDER_START
  | DELIVER_ORDER_SUCCESS
  | DELIVER_ORDER_FAIL;
