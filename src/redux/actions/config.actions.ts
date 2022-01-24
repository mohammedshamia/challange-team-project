import { Dispatch } from "redux";
import { ActionsType } from "../../@types/config.types";
import API from "../../api";
import { configConstants } from "../contants/config.constants";

export const getConfig = () => async (dispatch: Dispatch<ActionsType>) => {
  try {
    dispatch({
      type: configConstants.GET_CONFIG_START,
    });
    const { data } = await API.get("/config/stripe_key");
    dispatch({
      type: configConstants.GET_CONFIG_SUCCESS,
      payload: data,
    });
  } catch (error: any) {
    console.error(error?.response?.data?.message || error.message);
    dispatch({
      type: configConstants.GET_CONFIG_FAIL,
      payload: error?.response?.data?.message || error.message,
    });
  }
};
