import { AxiosResponse } from "axios";
import { Dispatch } from "react";
import {
  ActionsType,
  IOrder,
  IOrderResponse,
  IShoppingAddress,
} from "../../@types/orders.types";
import API from "../../api";
import { notify } from "../../utils/helpers";
import { OrdersConstants } from "../contants/orders.constants";

export const getMyOrders = () => async (dispatch: Dispatch<ActionsType>) => {
  try {
    dispatch({
      type: OrdersConstants.GET_MY_ORDERS_START,
    });
    const { data }: AxiosResponse = await API.get("/orders/myorders");
    dispatch({
      type: OrdersConstants.GET_MY_ORDERS_SUCCESS,
      payload: data.orders,
    });
  } catch (error: any) {
    notify("error", error?.response?.data?.message || error.message);
    dispatch({
      type: OrdersConstants.GET_MY_ORDERS_FAIL,
      payload: error?.response?.data?.message || error.message,
    });
  }
};

export const getOrderByID =
  (id: string) => async (dispatch: Dispatch<ActionsType>) => {
    try {
      dispatch({
        type: OrdersConstants.GET_ORDER_DETAILS_START,
      });

      const { data }: AxiosResponse = await API.get(`/orders/${id}`);

      dispatch({
        type: OrdersConstants.GET_ORDER_DETAILS_SUCCESS,
        payload: data as IOrderResponse,
      });
    } catch (error: any) {
      notify("error", error?.response?.data?.message || error.message);
      dispatch({
        type: OrdersConstants.GET_ORDER_DETAILS_FAIL,
        payload: error?.response?.data?.message || error.message,
      });
    }
  };

export const getAllOrders = () => async (dispatch: Dispatch<ActionsType>) => {
  try {
    dispatch({
      type: OrdersConstants.GET_ALL_ORDERS_START,
    });
    const { data }: AxiosResponse = await API.get("/orders?page=1");

    const allOrders: IOrder[] = data.orders;

    if ((data.pages as number) > 1) {
      const Promises = Array(data.pages as number)
        .fill(0)
        .map((_, index) => {
          return API.get(`/orders?page=${index + 2}`);
        });

      const responses = await Promise.all(Promises);
      dispatch({
        type: OrdersConstants.GET_ALL_ORDERS_SUCCESS,
        payload: [
          ...allOrders,
          ...responses.map((res: AxiosResponse) => res.data.orders),
        ],
      });
    } else {
      dispatch({
        type: OrdersConstants.GET_ALL_ORDERS_SUCCESS,
        payload: allOrders,
      });
    }
  } catch (error: any) {
    notify("error", error?.response?.data?.message || error.message);
    dispatch({
      type: OrdersConstants.GET_ALL_ORDERS_FAIL,
      payload: error?.response?.data?.message || error.message,
    });
  }
};

export const createOrder =
  (data: IShoppingAddress, callback?: Function) =>
  async (dispatch: Dispatch<ActionsType>) => {
    try {
      dispatch({
        type: OrdersConstants.CREATE_ORDER_START,
      });
      const res = await API.post("/orders", data);
      dispatch({
        type: OrdersConstants.CREATE_ORDER_SUCCESS,
        payload: res.data,
      });
      callback?.(res.data as IOrderResponse);
    } catch (error: any) {
      notify("error", error?.response?.data?.message || error.message);
      dispatch({
        type: OrdersConstants.CREATE_ORDER_FAIL,
        payload: error?.response?.data?.message || error.message,
      });
    }
  };

export const deliverOrder =
  (id: string, callback?: Function) =>
  async (dispatch: Dispatch<ActionsType>) => {
    try {
      dispatch({
        type: OrdersConstants.DELIVER_ORDER_START,
      });
      const res = await API.put(`/orders/${id}/deliver`);
      dispatch({
        type: OrdersConstants.DELIVER_ORDER_SUCCESS,
      });
      callback?.(res.data as IOrderResponse);
    } catch (error: any) {
      notify("error", error?.response?.data?.message || error.message);
      dispatch({
        type: OrdersConstants.DELIVER_ORDER_FAIL,
        payload: error?.response?.data?.message || error.message,
      });
    }
  };
