import { ActionsType, IOrders } from "../../@types/orders.types";
import { OrdersConstants } from "../contants/orders.constants";
export interface IState {
  error: string;
  loading: boolean;
  orders:IOrders[];

}

const initial_state: IState = {
  error: "",
  loading: false,
  orders: [],
};


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
          orders:action.payload

        };
      case OrdersConstants.GET_ORDERS_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        }}}
        















        