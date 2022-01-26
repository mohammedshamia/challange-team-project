import { IUser } from "../../@types/auth.types";
import { ActionsType, ICart } from "../../@types/cart.types";
import { CartConstants } from "../contants/cart.constants";

const user: string = localStorage.getItem("user-data") || "";

export interface IState {
  error: string;
  loading: boolean;
  cart: ICart;
}

const initial_state: IState = {
  error: "",
  loading: false,
  cart: (user && (JSON.parse(user) as IUser).cart) || {
    items: [],
    totalPrice: 0,
    totalQty: 0,
  },
};

export const cartReducer = (
  state: IState = initial_state,
  action: ActionsType
) => {
  switch (action.type) {
    case CartConstants.ADD_TO_CART_START:
      return {
        ...state,
        loading: true,
      };
    case CartConstants.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: action.payload,
      };
    case CartConstants.ADD_TO_CART_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CartConstants.GET_CART_START:
      return {
        ...state,
        loading: true,
      };
    case CartConstants.GET_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: action.payload,
      };
    case CartConstants.GET_CART_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CartConstants.REMOVE_FROM_CART_START:
      return {
        ...state,
        loading: true,
      };
    case CartConstants.REMOVE_FROM_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: action.payload,
      };
    case CartConstants.REMOVE_FROM_CART_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CartConstants.CLEAR_CART:
      return {
        ...initial_state,
      };
    default:
      return state;
  }
};
