import { ActionsType, ICart } from "../../@types/cart.types";
import { CartConstants } from "../contants/cart.constants";

export interface IState {
  error: string;
  loading: boolean;
  cart: {
    [key: string]: ICart;
  };
}

const initial_state: IState = {
  error: "",
  loading: false,
  cart: {},
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
        cart: {
          ...state.cart,
          [action.payload.product]: action.payload,
        },
      };
    case CartConstants.ADD_TO_CART_FAIL:
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
      let cart = state.cart;
      delete cart[action.payload.product];
      return {
        ...state,
        loading: false,
        cart: { ...cart },
      };
    case CartConstants.REMOVE_FROM_CART_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
