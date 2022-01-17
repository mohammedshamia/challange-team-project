import { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import {
  ILogin,
  ISignUp,
  IForgetPassword,
  ActionsType,
  IUser,
} from "../../@types/auth.types";
import API from "../../api";
import { AuthConstants } from "../contants/auth.constants";

export const login =
  (data: ILogin, callback?: Function) =>
  async (dispatch: Dispatch<ActionsType>) => {
    try {
      dispatch({
        type: AuthConstants.LOGIN_START,
      });
      const res: AxiosResponse<IUser> = await API.post<ILogin>(
        "/users/login",
        data
      );
      dispatch({
        type: AuthConstants.LOGIN_SUCCESS,
        payload: res.data,
      });
      callback?.();
    } catch (error: any) {
      dispatch({
        type: AuthConstants.LOGIN_FAIL,
        payload: error.message,
      });
    }
  };

export const createUser =
  (data: ISignUp, callback?: Function) =>
  async (dispatch: Dispatch<ActionsType>) => {
    try {
      dispatch({
        type: AuthConstants.CREATE_USER_START,
      });
      const res: AxiosResponse<IUser> = await API.post<ISignUp>(
        "/users/signup",
        data
      );
      dispatch({
        type: AuthConstants.CREATE_USER_SUCCESS,
        payload: res.data,
      });
      callback?.();
    } catch (error: any) {
      dispatch({
        type: AuthConstants.CREATE_USER_FAIL,
        payload: error.message,
      });
    }
  };

export const logout = () => (dispatch: Dispatch<ActionsType>) => {};

export const forgetPassword =
  (data: IForgetPassword) => (dispatch: Dispatch<ActionsType>) => {};
