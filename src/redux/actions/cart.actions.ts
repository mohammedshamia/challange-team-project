import { Dispatch } from "redux";
import { ActionsType, ICart } from "../../@types/cart.types";
import { notify } from "../../utils/helpers";
import { CartConstants } from "../contants/cart.constants";
import API from "../../api";

export const addToCart =
  (productID: string, qty: number = 1) =>
  async (dispatch: Dispatch<ActionsType>) => {
    try {
      dispatch({
        type: CartConstants.ADD_TO_CART_START,
      });
      const {
        data: { cart },
      } = await API.put("/users/profile/cart", {
        productId: productID,
        qty,
      });
      dispatch({
        type: CartConstants.ADD_TO_CART_SUCCESS,
        payload: cart as ICart,
      });
    } catch (error: any) {
      notify("error", error?.response?.data?.message || error.message);
      dispatch({
        type: CartConstants.ADD_TO_CART_FAIL,
        payload: error?.response?.data?.message || error.message,
      });
    }
  };

export const removeFromCart =
  (productID: string) => async (dispatch: Dispatch<ActionsType>) => {
    try {
      dispatch({
        type: CartConstants.REMOVE_FROM_CART_START,
      });
      const { data } = await API.delete(`users/profile/cart`, {
        params: { productId: productID },
      });
      dispatch({
        type: CartConstants.REMOVE_FROM_CART_SUCCESS,
        payload: data.cart as ICart,
      });
    } catch (error: any) {
      notify("error", error?.response?.data?.message || error.message);
      dispatch({
        type: CartConstants.REMOVE_FROM_CART_FAIL,
        payload: error?.response?.data?.message || error.message,
      });
    }
  };

export const getCart = () => async (dispatch: Dispatch<ActionsType>) => {
  try {
    dispatch({
      type: CartConstants.GET_CART_START,
    });

    const {
      data: { cart },
    } = await API.get("/users/profile");

    dispatch({
      type: CartConstants.GET_CART_SUCCESS,
      payload: cart as ICart,
    });
  } catch (error: any) {
    dispatch({
      type: CartConstants.GET_CART_FAIL,
      payload: error?.response?.data?.message || error.message,
    });
  }
};
