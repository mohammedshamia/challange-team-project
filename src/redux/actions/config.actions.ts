import { Dispatch } from "redux";
import { ActionsType } from "../../@types/config.types";
import API from "../../api";
import { configConstants } from "../contants/config.constants";

export const getConfig = () => async (dispatch: Dispatch<ActionsType>) => {
  try {
    dispatch({
      type: configConstants.GET_CONFIG_START,
    });
    const res = await API.get("/config/stripe_key");
    console.log(res);
    dispatch({
      type: configConstants.GET_CONFIG_SUCCESS,
      payload: res.data,
    });
  } catch (error: any) {
    console.error(error?.response?.data?.message || error.message);
    dispatch({
      type: configConstants.GET_CONFIG_FAIL,
      payload: error?.response?.data?.message || error.message,
    });
  }
};
