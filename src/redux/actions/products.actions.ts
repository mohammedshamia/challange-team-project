import { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { ActionsType } from "../../@types/products.types";
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
      notify("error", error.response.data.message || error.message);
      dispatch({
        type: ProductConstants.CREATE_PRODUCT_FAIL,
        payload: error.response.data.message || error.message,
      });
    }
  };
