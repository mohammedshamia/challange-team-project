import { ProductConstants } from "../redux/contants/products.constants";

export interface IProductForm {
  name: string;
  brand: string;
  category: string | string[];
  countInStock: string;
  description: string;
  ID: string;
  price: string;
  images: File[] | string[];
  colors?: string[];
}

export interface IProduct {
  countInStock: number;
  discount: number;
  price: number;
  description: string;
  brand: string;
  user?: string;
  name: string;
  _id?: string;
  images?: string[];
  colors?: string[];
  categories?: string[];
  rating?: number;
  numReviews?: number;
  reviews?: IReview[];
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
  qty?: number;
}

export interface IReview {
  name?: string;
  rating: number;
  comment: string;
  createdAt?: string;
}

export interface ICategory {
  name: string;
  image: string;
}

export interface CREATE_PRODUCT_START {
  type: ProductConstants.CREATE_PRODUCT_START;
}

export interface CREATE_PRODUCT_SUCCESS {
  type: ProductConstants.CREATE_PRODUCT_SUCCESS;
  payload: IProduct;
}

export interface CREATE_PRODUCT_FAIL {
  type: ProductConstants.CREATE_PRODUCT_FAIL;
  payload: string;
}

export interface UPDATE_PRODUCT_START {
  type: ProductConstants.UPDATE_PRODUCT_START;
}

export interface UPDATE_PRODUCT_SUCCESS {
  type: ProductConstants.UPDATE_PRODUCT_SUCCESS;
  payload: IProduct;
}

export interface UPDATE_PRODUCT_FAIL {
  type: ProductConstants.UPDATE_PRODUCT_FAIL;
  payload: string;
}

export interface DELETE_PRODUCT_START {
  type: ProductConstants.DELETE_PRODUCT_START;
}

export interface DELETE_PRODUCT_SUCCESS {
  type: ProductConstants.DELETE_PRODUCT_SUCCESS;
  payload: string;
}

export interface DELETE_PRODUCT_FAIL {
  type: ProductConstants.DELETE_PRODUCT_FAIL;
  payload: string;
}

export interface GET_TOP_PRODUCTS_START {
  type: ProductConstants.GET_TOP_PRODUCTS_START;
}

export interface GET_TOP_PRODUCTS_SUCCESS {
  type: ProductConstants.GET_TOP_PRODUCTS_SUCCESS;
  payload: IProduct[];
}

export interface GET_TOP_PRODUCTS_FAIL {
  type: ProductConstants.GET_TOP_PRODUCTS_FAIL;
  payload: string;
}

export interface GET_PRODUCTS_START {
  type: ProductConstants.GET_PRODUCTS_START;
}

export interface GET_PRODUCTS_SUCCESS {
  type: ProductConstants.GET_PRODUCTS_SUCCESS;
  payload: IProduct[];
}

export interface GET_PRODUCTS_FAIL {
  type: ProductConstants.GET_PRODUCTS_FAIL;
  payload: string;
}

export interface GET_PRODUCT_START {
  type: ProductConstants.GET_PRODUCT_START;
}

export interface GET_PRODUCT_SUCCESS {
  type: ProductConstants.GET_PRODUCT_SUCCESS;
  payload: IProduct;
}

export interface GET_PRODUCT_FAIL {
  type: ProductConstants.GET_PRODUCT_FAIL;
  payload: string;
}

export interface CLEAR_PRODUCT {
  type: ProductConstants.CLEAR_PRODUCT;
}

export interface GET_CATEGORIES_START {
  type: ProductConstants.GET_CATEGORIES_START;
}

export interface GET_CATEGORIES_SUCCESS {
  type: ProductConstants.GET_CATEGORIES_SUCCESS;
  payload: ICategory[];
}

export interface GET_CATEGORIES_FAIL {
  type: ProductConstants.GET_CATEGORIES_FAIL;
  payload: string;
}

export interface ADD_REVIEW_START {
  type: ProductConstants.ADD_REVIEW_START;
}

export interface ADD_REVIEW_SUCCESS {
  type: ProductConstants.ADD_REVIEW_SUCCESS;
  payload: IReview;
}

export interface ADD_REVIEW_FAIL {
  type: ProductConstants.ADD_REVIEW_FAIL;
  payload: string;
}

export type ActionsType =
  | CREATE_PRODUCT_START
  | CREATE_PRODUCT_SUCCESS
  | CREATE_PRODUCT_FAIL
  | UPDATE_PRODUCT_START
  | UPDATE_PRODUCT_SUCCESS
  | UPDATE_PRODUCT_FAIL
  | DELETE_PRODUCT_START
  | DELETE_PRODUCT_SUCCESS
  | DELETE_PRODUCT_FAIL
  | GET_TOP_PRODUCTS_START
  | GET_TOP_PRODUCTS_SUCCESS
  | GET_TOP_PRODUCTS_FAIL
  | GET_PRODUCTS_START
  | GET_PRODUCTS_SUCCESS
  | GET_PRODUCTS_FAIL
  | GET_CATEGORIES_START
  | GET_CATEGORIES_SUCCESS
  | GET_CATEGORIES_FAIL
  | GET_PRODUCT_START
  | GET_PRODUCT_SUCCESS
  | GET_PRODUCT_FAIL
  | CLEAR_PRODUCT
  | ADD_REVIEW_START
  | ADD_REVIEW_SUCCESS
  | ADD_REVIEW_FAIL;
