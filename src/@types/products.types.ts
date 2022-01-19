import { ProductConstants } from "../redux/contants/products.constants";

export interface IProductForm {
  name: string;
  brand: string;
  category: string;
  countInStock: string;
  description: string;
  ID: string;
  price: string;
  images: File[];
}

export interface CREATE_PRODUCT_START {
  type: ProductConstants.CREATE_PRODUCT_START;
}

export interface CREATE_PRODUCT_SUCCESS {
  type: ProductConstants.CREATE_PRODUCT_SUCCESS;
}

export interface CREATE_PRODUCT_FAIL {
  type: ProductConstants.CREATE_PRODUCT_FAIL;
  payload: string;
}

export type ActionsType =
  | CREATE_PRODUCT_START
  | CREATE_PRODUCT_SUCCESS
  | CREATE_PRODUCT_FAIL;
