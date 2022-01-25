import { CartConstants } from "../redux/contants/cart.constants";
import { IProduct } from "./products.types";

export interface Item {
  itemTotalPrice: number;
  product: IProduct;
  qty: number;
}

export interface ICart {
  items: Item[];
  totalPrice: number;
  totalQty: number;
}

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

export interface GET_CART_START {
  type: CartConstants.GET_CART_START;
}

export interface GET_CART_SUCCESS {
  type: CartConstants.GET_CART_SUCCESS;
  payload: ICart;
}

export interface GET_CART_FAIL {
  type: CartConstants.GET_CART_FAIL;
  payload: string;
}

export interface CLEAR_CART {
  type: CartConstants.CLEAR_CART;
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
  | GET_CART_START
  | GET_CART_SUCCESS
  | GET_CART_FAIL
  | REMOVE_FROM_CART_START
  | REMOVE_FROM_CART_SUCCESS
  | REMOVE_FROM_CART_FAIL
  | CLEAR_CART;
