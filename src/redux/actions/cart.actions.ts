import { Dispatch } from "redux";
import { ActionsType } from "../../@types/cart.types";
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
      // const res = await API.put("/users/profile/cart", {
      //   productId: productID,
      //   qty,
      // });
      dispatch({
        type: CartConstants.ADD_TO_CART_SUCCESS,
        payload: { product: productID, qty },
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
      //   const res = await API.delete("/users/profile/cart", {
      //     productId: productID,
      //     qty,
      //   });
      dispatch({
        type: CartConstants.REMOVE_FROM_CART_SUCCESS,
        payload: { product: productID, qty: 0 },
      });
    } catch (error: any) {
      notify("error", error?.response?.data?.message || error.message);
      dispatch({
        type: CartConstants.REMOVE_FROM_CART_FAIL,
        payload: error?.response?.data?.message || error.message,
      });
    }
  };

export const clearCart = () => ({
  type: CartConstants.CLEAR_CART,
});
