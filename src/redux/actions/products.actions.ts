import { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { ActionsType, IReview } from "../../@types/products.types";
import { IProductForm } from "../../@types/products.types";
import API from "../../api";
import { createFormData, notify } from "../../utils/helpers";
import { ProductConstants } from "../contants/products.constants";

export const createProduct =
  (data: IProductForm) => async (dispatch: Dispatch<ActionsType>) => {
    try {
      dispatch({
        type: ProductConstants.CREATE_PRODUCT_START,
      });
      const promises = [...data.images].map((image) => {
        return API.post("/upload", createFormData(image));
      });
      const urls = await Promise.all<AxiosResponse>(promises);
      const form = { ...data, images: [...urls.map((url) => url.data)] };
      await API.post("/products", form);
      dispatch({
        type: ProductConstants.CREATE_PRODUCT_START,
      });
    } catch (error: any) {
      notify("error", error?.response?.data?.message || error.message);
      dispatch({
        type: ProductConstants.CREATE_PRODUCT_FAIL,
        payload: error?.response?.data?.message || error.message,
      });
    }
  };

export const getTopProducts = () => async (dispatch: Dispatch<ActionsType>) => {
  try {
    dispatch({
      type: ProductConstants.GET_TOP_PRODUCTS_START,
    });
    const { data }: AxiosResponse = await API.get("/products/top");
    dispatch({
      type: ProductConstants.GET_TOP_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    notify("error", error?.response?.data?.message || error.message);
    dispatch({
      type: ProductConstants.GET_TOP_PRODUCTS_FAIL,
      payload: error?.response?.data?.message || error.message,
    });
  }
};

export const getProducts =
  (keyword: string = "", page: number = 1) =>
  async (dispatch: Dispatch<ActionsType>) => {
    try {
      dispatch({
        type: ProductConstants.GET_PRODUCTS_START,
      });
      const { data }: AxiosResponse = await API.get("/products", {
        params: { keyword: keyword, page: page },
      });
      dispatch({
        type: ProductConstants.GET_PRODUCTS_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      notify("error", error?.response?.data?.message || error.message);
      dispatch({
        type: ProductConstants.GET_PRODUCTS_FAIL,
        payload: error?.response?.data?.message || error.message,
      });
    }
  };

export const getProduct =
  (id: string) => async (dispatch: Dispatch<ActionsType>) => {
    try {
      dispatch({
        type: ProductConstants.GET_PRODUCT_START,
      });
      const { data }: AxiosResponse = await API.get(`/products/${id}`);
      dispatch({
        type: ProductConstants.GET_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      notify("error", error?.response?.data?.message || error.message);
      dispatch({
        type: ProductConstants.GET_PRODUCT_FAIL,
        payload: error?.response?.data?.message || error.message,
      });
    }
  };

export const clearProduct = () => ({
  type: ProductConstants.CLEAR_PRODUCT,
});

export const getCategories = () => async (dispatch: Dispatch<ActionsType>) => {
  try {
    dispatch({ type: ProductConstants.GET_CATEGORIES_START });
    const {
      data: { categories },
    }: AxiosResponse = await API.get("/products/category/all");
    dispatch({
      type: ProductConstants.GET_CATEGORIES_SUCCESS,
      payload: categories,
    });
  } catch (error: any) {
    notify("error", error?.response?.data?.message || error.message);
    dispatch({
      type: ProductConstants.GET_CATEGORIES_FAIL,
      payload: error?.response?.data?.message || error.message,
    });
  }
};

export const addReview =
  (productID: string, review: IReview) =>
  async (dispatch: Dispatch<ActionsType>) => {
    const { comment, rating } = review;
    try {
      dispatch({
        type: ProductConstants.ADD_REVIEW_START,
      });
      // const res = await API.post<IReview>(`/products/${productID}/reviews`, {
      //   comment,
      //   rating,
      // });
      // console.log(res.data);
      dispatch({
        type: ProductConstants.ADD_REVIEW_SUCCESS,
        payload: review,
      });
    } catch (error: any) {
      notify("error", error?.response?.data?.message || error.message);
      dispatch({
        type: ProductConstants.ADD_REVIEW_FAIL,
        payload: error?.response?.data?.message || error.message,
      });
    }
  };
