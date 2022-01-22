import { CartConstants } from "../redux/contants/cart.constants";

export interface ICart {
  product: string;
  qty: number;
}
/**
 * 
 * ADD_TO_CART_START = "ADD_TO_CART_START",
  ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS",
  ADD_TO_CART_FAIL = "ADD_TO_CART_FAIL",
  REMOVE_FROM_CART_START = "REMOVE_FROM_CART_START",
  REMOVE_FROM_CART_SUCCESS = "REMOVE_FROM_CART_SUCCESS",
  REMOVE_FROM_CART_FAIL = "REMOVE_FROM_CART_FAIL",
 */
export interface ADD_TO_CART_START {
  type: CartConstants.ADD_TO_CART_START;
}

export interface ADD_TO_CART_SUCCESS {
  type: CartConstants.ADD_TO_CART_SUCCESS;
  payload: ICart;
}

export interface ADD_TO_CART_FAIL {
  type: CartConstants.ADD_TO_CART_FAIL;
  payload: string;
}

export interface REMOVE_FROM_CART_START {
  type: CartConstants.REMOVE_FROM_CART_START;
}

export interface REMOVE_FROM_CART_SUCCESS {
  type: CartConstants.REMOVE_FROM_CART_SUCCESS;
  payload: ICart;
}

export interface REMOVE_FROM_CART_FAIL {
  type: CartConstants.REMOVE_FROM_CART_FAIL;
  payload: string;
}

export type ActionsType =
  | ADD_TO_CART_START
  | ADD_TO_CART_SUCCESS
  | ADD_TO_CART_FAIL
  | REMOVE_FROM_CART_START
  | REMOVE_FROM_CART_SUCCESS
  | REMOVE_FROM_CART_FAIL;
