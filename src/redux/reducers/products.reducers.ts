import { ActionsType } from "../../@types/products.types";
import { ProductConstants } from "../contants/products.constants";

interface IState {
  loading: boolean;
  error: string;
}

const initial_state: IState = {
  loading: false,
  error: "",
};

export const ProductsReducer = (state = initial_state, action: ActionsType) => {
  switch (action.type) {
    case ProductConstants.CREATE_PRODUCT_START:
      return {
        ...state,
        loading: true,
      };
    case ProductConstants.CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ProductConstants.CREATE_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
