import { ActionsType, IProduct, ICategory } from "../../@types/products.types";
import { ProductConstants } from "../contants/products.constants";

interface IState {
  loading: boolean;
  error: string;
  topProducts: IProduct[];
  products: {
    page: number;
    pages: number;
    products: IProduct[];
  };
  categories: ICategory[];
}

const initial_state: IState = {
  loading: false,
  error: "",
  topProducts: [],
  products: {
    page: 0,
    pages: 0,
    products: [],
  },
  categories: [],
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
    case ProductConstants.GET_TOP_PRODUCTS_START:
      return {
        ...state,
        loading: true,
      };
    case ProductConstants.GET_TOP_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        topProducts: action.payload,
      };
    case ProductConstants.GET_TOP_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ProductConstants.GET_PRODUCTS_START:
      return {
        ...state,
        loading: true,
      };
    case ProductConstants.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case ProductConstants.GET_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ProductConstants.GET_CATEGORIES_START:
      return {
        ...state,
        loading: true,
      };
    case ProductConstants.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    case ProductConstants.GET_CATEGORIES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
