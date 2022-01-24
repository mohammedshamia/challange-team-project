import { ActionsType } from "../../@types/order.types";
import { OrdersConstants } from "../contants/orders.constants";


const initial_state={}

export const OrdersReducer = (state = initial_state, action: ActionsType) => {
    switch (action.type) {
      case OrdersConstants.GET_ORDERS_START:
        return {
          ...state,
          loading: true,
        };
      case OrdersConstants.GET_ORDERS_SUCCESS:
        return {
          ...state,
          loading: false,
        };
      case OrdersConstants.GET_ORDERS_FAIL:
        return {
          ...state,
          loading: false,
        }}}
        